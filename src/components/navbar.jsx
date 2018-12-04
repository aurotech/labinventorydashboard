import React, { Component } from "react";

class Navbar extends Component {
  state = {};

  
  render() {
    const path = window.location.pathname;
    return (
      <div className="backgroung-img">
        <img
          className="m-10"
          src={require("../assets/logo.jpg")}
          alt="logo"
          height="90"
        />
        <div className="container p-0">
          {path === "/" && <h3 className="page-title">DASHBOARD</h3>}
          {path === "/assets" && <h3 className="page-title">ASSETS</h3>}
        </div>
      </div>
    );
  }
}

export default Navbar;
