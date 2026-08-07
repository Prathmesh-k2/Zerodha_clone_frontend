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
      <div className="row">
        <div className="col-6">
          <img src={imageURL} alt={productName} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            {tryDemo ? (
              <a href={tryDemo}>Try Demo</a>
            ) : (
              <button className="support-link-btn">Try Demo</button>
            )}
            {learnMore ? (
              <a href={learnMore} style={{ marginLeft: "50px" }}>Learn More</a>
            ) : (
              <button className="support-link-btn" style={{ marginLeft: "50px" }}>Learn More</button>
            )}
          </div>
          <div className="mt-3">
            {googlePlay ? (
              <a href={googlePlay}>
                <img src="media/images/googlePlayBadge.svg" alt="Get it on Google Play" />
              </a>
            ) : (
              <img src="media/images/googlePlayBadge.svg" alt="Get it on Google Play" />
            )}
            {appStore ? (
              <a href={appStore}>
                <img
                  src="media/images/appstoreBadge.svg"
                  alt="Download on the App Store"
                  style={{ marginLeft: "50px" }}
                />
              </a>
            ) : (
              <img
                src="media/images/appstoreBadge.svg"
                alt="Download on the App Store"
                style={{ marginLeft: "50px" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;