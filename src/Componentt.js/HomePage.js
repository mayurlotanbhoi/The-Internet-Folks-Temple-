import React from "react";

const HomePage = () => {
  return (
    <>
      <header className="header">
        <div className="header-left">
          <div className="header-logo"></div>
          <div className="header-containt">
            Discover the <span style={{ color: "#E23744" }}>Best </span> Food
            and Drinks
          </div>
          <div className="header-sub-containt">
            {" "}
            Naturally made Healthcare Products for the better care & support of
            your body.
          </div>
          <div className="header-btn">Explore Now!</div>
        </div>
        <div className="header-rigth">
          <div className="header-rigth-img">
            <div className="header-rigth-btn">Get In Touch</div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HomePage;
