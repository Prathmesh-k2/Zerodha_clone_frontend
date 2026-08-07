import React from "react";

function NotFound() {
  return (
    <div className="container py-5 my-5">
      <div className="text-center">
        <h1 className="mb-4" >404 Not Found</h1>

        <p
          className="text-muted fs-5 mx-auto mb-5"
          style={{ maxWidth: "700px" }}
        >
         Sorry ,the page you are looking for does not exist
        </p>

       
      </div>
    </div>
  );
}

export default NotFound;