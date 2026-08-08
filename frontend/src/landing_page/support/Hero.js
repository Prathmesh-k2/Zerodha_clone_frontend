import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <button className="support-link-btn">Track Tickets</button>
      </div>
      <div className="row p-3 p-md-5 m-1 m-md-3">
        <div className="col-12 col-md-6 p-2 p-md-3 mb-4 mb-md-0">
          <h1 className="fs-4 fs-md-3 mb-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" className="mb-3" />
          <div className="d-flex flex-wrap gap-1 mt-2">
            <button className="support-link-btn">Track account opening</button>
            <button className="support-link-btn">Track segment activation</button>
            <button className="support-link-btn">Intraday margins</button>
            <button className="support-link-btn">Kite user manual</button>
          </div>
        </div>
        <div className="col-12 col-md-6 p-2 p-md-3">
          <h1 className="fs-4 fs-md-3 mb-3">Featured</h1>
          <ol className="ps-3">
            <li className="mb-2">
              <button className="support-link-btn">Current Takeovers and Delisting - January 2024</button>
            </li>
            <li>
              <button className="support-link-btn">Latest Intraday leverages - MIS &amp; CO</button>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;