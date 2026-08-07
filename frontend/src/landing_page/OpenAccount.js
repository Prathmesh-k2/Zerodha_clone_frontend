import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container py-5 my-5">
      <div className="text-center">
        <h1 className="mb-4">Open a Zerodha account</h1>

        <p
          className="text-muted fs-5 mx-auto mb-5"
          style={{ maxWidth: "700px" }}
        >
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>

        <Link
          to="/signup"
          className="btn btn-primary px-5 py-3 fs-5"
          style={{ borderRadius: "4px", textDecoration: "none" }}
        >
          Sign up for free
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;