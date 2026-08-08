import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 p-2 p-md-5 mt-2 mt-md-4 order-2 order-md-1">
          <h1 className="fs-2">{productName}</h1>
          <p className="text-muted">{productDesription}</p>
          <div>
            {learnMore ? (
              <a href={learnMore} className="text-decoration-none text-primary fw-medium">Learn More</a>
            ) : (
              <button className="support-link-btn">Learn More</button>
            )}
          </div>
        </div>
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0 order-1 order-md-2">
          <img src={imageURL} alt={productName} className="img-fluid" style={{ maxHeight: "380px" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;