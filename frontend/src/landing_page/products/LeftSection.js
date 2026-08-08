import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img src={imageURL} alt={productName} className="img-fluid" style={{ maxHeight: "380px" }} />
        </div>
        <div className="col-12 col-md-6 p-2 p-md-5 mt-2 mt-md-4">
          <h1 className="fs-2">{productName}</h1>
          <p className="text-muted">{productDesription}</p>
          <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
            {tryDemo ? (
              <a href={tryDemo} className="text-decoration-none text-primary fw-medium">Try Demo</a>
            ) : (
              <button className="support-link-btn">Try Demo</button>
            )}
            {learnMore ? (
              <a href={learnMore} className="text-decoration-none text-primary fw-medium">Learn More</a>
            ) : (
              <button className="support-link-btn">Learn More</button>
            )}
          </div>
          <div className="mt-3 d-flex flex-wrap gap-3">
            {googlePlay ? (
              <a href={googlePlay}>
                <img src="/media/images/googlePlayBadge.svg" alt="Get it on Google Play" />
              </a>
            ) : (
              <img src="/media/images/googlePlayBadge.svg" alt="Get it on Google Play" />
            )}
            {appStore ? (
              <a href={appStore}>
                <img
                  src="/media/images/appstoreBadge.svg"
                  alt="Download on the App Store"
                />
              </a>
            ) : (
              <img
                src="/media/images/appstoreBadge.svg"
                alt="Download on the App Store"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;