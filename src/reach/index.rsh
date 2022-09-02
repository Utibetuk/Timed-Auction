"reach 0.1";

const getBid = (address, bidMap) => {
  const bid = bidMap[address].match({ 
    Some: (number) => number,
    None: () => 0,
  });
  return bid;
}

const Common = {
    seeBid: Fun([Address, UInt], Null),
    showOutcome: Fun([Address, UInt], Null),
}
export const main = Reach.App(() => {
    setOptions({ untrustworthyMaps: true });

    const Creator = Participant('Creator', {
        ...Common,
        getSale: Fun([], Object({
            nftId: Token,
            minBid: UInt,
            deadline: UInt,
        })),
        auctionReady: Fun([], Null),
        getAddress: Fun([UInt], Address),
    });
    const BidderView = ParticipantClass('BidderView', {
        ...Common,
        optIn: Fun([Token], Null),
    });
    const Bidder = API('Bidder', {
        bid: Fun([UInt], Bool),
    });
    init();

    Creator.only(() => {
        const {nftId, minBid, deadline} = declassify(interact.getSale());
    });
    Creator.publish(nftId, minBid, deadline);

    const amt = 1;
    const x = new Map(Address, UInt);
    commit();
    Creator.pay([[amt, nftId]]);
    Creator.interact.auctionReady();
    BidderView.interact.optIn(nftId);
    BidderView.interact.seeBid(Creator, minBid);

    assert(balance(nftId) == amt, "balance of NFT is wrong");
    const end = lastConsensusTime() + deadline;
    const [
        bidders,
        lastPrice,
        isFirstBid,
        a
    ] = parallelReduce([0, minBid * 1000000, true, array(UInt, [0, 0, 0, 0, 0])])
        .invariant(balance(nftId) == balance(nftId))
        .while(lastConsensusTime() <= end && bidders < 5 )
        .api_(Bidder.bid, (bid) => {
            
            check(bid * 1000000 > lastPrice, "bid is too low");
            return [ bid * 1000000, (notify) => {
                x[this] = bid
                notify(true);
                Creator.interact.seeBid(this, bid);
                BidderView.interact.seeBid(this, bid);
                return [bidders+1, bid * 1000000, false, a.set(bidders, bid)];
            }];
        })
        .timeout(absoluteTime(end), () => {
          Creator.publish();
          return [bidders, lastPrice, isFirstBid, a];
      });
    commit();
    Creator.publish()

    var [index, winner ] = [ 0, Creator ]
    invariant(balance(nftId) == balance(nftId))
    while( index < bidders ){
        commit()
        Creator.only(() => {
            const address = declassify(interact.getAddress(index))
        })
        Creator.publish(address);
        
        const b = getBid(address, x);

        if (b == a.max()){
            transfer(balance(nftId), nftId).to(address);
            [ index, winner ] = [ index + 1, address ];
            continue;
        }
        else{
            [ index, winner ] = [ index + 1, winner ];
            continue;
        }
    }
        transfer(balance()).to(Creator);
        transfer(balance(nftId), nftId).to(Creator);
        Creator.interact.showOutcome(winner, lastPrice);
        BidderView.interact.showOutcome(winner, lastPrice);
    commit();
    exit();
});