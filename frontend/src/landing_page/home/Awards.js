import React from 'react'

function Awards() {
    return (  
       <div className='container mt-5'>
        <div className='row align-items-center'>
            <div className='col-12 col-md-6 mb-4 mb-md-0 text-center'>
              {/* <img src='largestBroker.svg'></img> */}
             <img src="/media/images/largestBroker.svg" alt="Largest Broker" className="img-fluid" style={{ maxWidth: "85%" }} />
            </div>
            <div className="col-12 col-md-6 p-3 p-md-5 mt-2 mt-md-3">
          <h1 className="fs-2">Largest stock broker in India</h1>
          <p className="mb-4 text-muted">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-12 col-sm-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="/media/images/pressLogos.png" alt="Press logos" className="img-fluid mt-3" style={{ maxWidth: "90%" }} />
        </div>

        </div>
       </div>
    );
}

export default Awards;