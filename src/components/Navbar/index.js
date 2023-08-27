import React from "react";
import earthImage from "../../assets/earth.png";

function Index() {
  return (
    <>
      <nav className="navbar navbar-light bg-light d-flex justify-content-center">
        <div
          className="navbar-brand d-flex justify-content-center align-items-center"
          href="/"
        >
          <img
            src={earthImage}
            width="100vh"
            height="100vh"
            className="d-inline-block align-top img-fluid"
            alt=""
          />
          <h1> The Earth</h1>
        </div>
      </nav>
    </>
  );
}

export default Index;
