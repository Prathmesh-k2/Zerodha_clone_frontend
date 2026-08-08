import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-6 col-md-4 p-3 mt-3 mt-md-5">
          <img src="/media/images/zerodhaFundhouse.png" alt="Zerodha Fundhouse logo" className="img-fluid" style={{ maxWidth: "60%" }} />
          <p className="text-small text-muted mt-2">Asset management platform</p>
        </div>
        <div className="col-6 col-md-4 p-3 mt-3 mt-md-5">
          <img src="/media/images/sensibullLogo.svg" alt="Sensibull logo" className="img-fluid" style={{ maxWidth: "60%" }} />
          <p className="text-small text-muted mt-2">Options trading platform</p>
        </div>
        <div className="col-6 col-md-4 p-3 mt-3 mt-md-5">
          <img src="/media/images/goldenpiLogo.png" alt="GoldenPi logo" className="img-fluid" style={{ maxWidth: "60%" }} />
          <p className="text-small text-muted mt-2">Bonds trading platform</p>
        </div>
        <div className="col-6 col-md-4 p-3 mt-3 mt-md-5">
          <img src="/media/images/streakLogo.png" alt="Streak logo" className="img-fluid" style={{ maxWidth: "60%" }} />
          <p className="text-small text-muted mt-2">Algo & strategy platform</p>
        </div>
        <div className="col-6 col-md-4 p-3 mt-3 mt-md-5">
          <img src="/media/images/smallcaseLogo.png" alt="Smallcase logo" className="img-fluid" style={{ maxWidth: "60%" }} />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>
        <div className="col-6 col-md-4 p-3 mt-3 mt-md-5">
          <img src="/media/images/dittoLogo.png" alt="Ditto logo" className="img-fluid" style={{ maxWidth: "60%" }} />
          <p className="text-small text-muted mt-2">Insurance advisory platform</p>
        </div>
        <div className="col-12 mt-4">
          <button
            className="p-2 btn btn-primary fs-5 mb-5 px-4"
            style={{ width: "auto", minWidth: "200px", maxWidth: "260px" }}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;