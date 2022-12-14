import './index.css'

export function WaitForAttacher({info, bid}){
  
  return(
    <div className='section' style={{display: 'flex', flexDirection: 'column'}}>
      <h6 style={{fontFamily: 'monospace'}}>Contract Address: {info}</h6>
      <h4>Auction is ongoing...</h4>
      {
        bid.length !== 0 ?
        bid.map((stake, index) => (
          <>
            <p style={{fontSize: '17px'}} key={index}>{stake.address} made a bid of {stake.bid}</p>
            {/* <hr style={{width: '100%'}}/> */}
          </>
        ))
        :
        <h4>No bids have been placed yet</h4>
      }
    </div>
  )
}