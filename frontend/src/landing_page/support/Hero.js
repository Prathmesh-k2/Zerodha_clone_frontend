import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <button className="support-link-btn">Track Tickets</button>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <button className="support-link-btn">Track account opening</button>
          <button className="support-link-btn">Track segment activation</button>
          <button className="support-link-btn">Intraday margins</button>
          <button className="support-link-btn">Kite user manual</button>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
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