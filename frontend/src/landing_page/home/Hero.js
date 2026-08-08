import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="/media/images/homeHero.png"
          alt="Hero Image"
          className="img-fluid mb-4 mb-md-5"
        />
        <h1 className="mt-3 mt-md-5 fs-2 fs-md-1">Invest in everything</h1>
        <p className="fs-6 fs-md-5 text-muted mb-4">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <Link
          to="/signup"
          className="btn btn-primary fs-5 mb-5 px-4 py-2"
          style={{ width: "auto", minWidth: "200px", maxWidth: "260px", margin: "0 auto", textDecoration: "none" }}
        >
          Signup Now
        </Link>
      </div>
    </div>
  );
}

export default Hero;