import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
          <img src="/media/images/education.svg" alt="Market education" className="img-fluid" style={{ maxWidth: "70%" }} />
        </div>
        <div className="col-12 col-md-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <button className="support-link-btn" style={{ background: "none", border: "none", padding: 0, cursor: "pointer", color: "#387ed1" }}>
            Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </button>
          <p className="mt-4 mt-md-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <button className="support-link-btn" style={{ background: "none", border: "none", padding: 0, cursor: "pointer", color: "#387ed1" }}>
            TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Education;