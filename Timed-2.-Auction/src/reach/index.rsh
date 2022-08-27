"reach 0.1";

const Common = {
    seeBid: Fun([Address, UInt], Null),
    showOutcome: Fun([Address, UInt], Null),
}
export const main = Reach.App(() => {
    const Creator = Participant('Creator', {
        ...Common,
        getSale: Fun([], Object({
            nftId: Token,
            minBid: UInt,
            deadline: UInt,
        })),
        auctionReady: Fun([], Null),
    });
    const BidderView = ParticipantClass('BidderView', {
        ...Common,
        optIn: Fun([Token], Null),
    });
    const Bidder = API('Bidder', {
        bid: Fun([UInt], Tuple(Address, UInt)),

    });
    init();

    Creator.only(() => {
        const {nftId, minBid, deadline} = declassify(interact.getSale());
    });
    Creator.publish(nftId, minBid, deadline);
    const amt = 1;
    commit();
    Creator.pay([[amt, nftId]]);
    Creator.interact.auctionReady();
    BidderView.interact.optIn(nftId);
    BidderView.interact.seeBid(Creator, minBid);

    assert(balance(nftId) == amt, "balance of NFT is wrong");
    const end = lastConsensusTime() + deadline;
    const [
        highestBidder,
        lastPrice,
        isFirstBid,
    ] = parallelReduce([Creator, minBid, true])
        .invariant(balance(nftId) == amt)
        .invariant(balance() == (isFirstBid ? 0 : lastPrice))
        .while(lastConsensusTime() <= end)
        .api_(Bidder.bid, (bid) => {
            check(bid > lastPrice, "bid is too low");
            return [ bid, (notify) => {
                notify([highestBidder, lastPrice]);
                if ( ! isFirstBid ) {
                    transfer(lastPrice).to(highestBidder);
                }
                const who = this;
                Creator.interact.seeBid(who, bid);
                BidderView.interact.seeBid(who, bid);
                return [who, bid, false];
            }];
        })
        .timeout(absoluteTime(end), () => {
          Creator.publish();
          return [highestBidder, lastPrice, isFirstBid];
      });
        transfer(amt, nftId).to(highestBidder);
        if ( ! isFirstBid ) { transfer(lastPrice).to(Creator); }
        Creator.interact.showOutcome(highestBidder, lastPrice);
        BidderView.interact.showOutcome(highestBidder, lastPrice);
    commit();
    exit();
});
