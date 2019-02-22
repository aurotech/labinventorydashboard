import React, { Component } from "react";
import { withRouter } from "react-router-dom";

const SomeComponent = withRouter(props => <Navbar {...props} />);

class Navbar extends Component {
  state = {};

  render() {
    const { pathname } = this.props.history.location;
    return (
      <div className="backgroung-img">
        <img
          className="m-10"
          src={require("../assets/logo.jpg")}
          alt="logo"
          height="90"
        />
        <div className="container p-0">
          {pathname === "/" && <h3 className="page-title">DASHBOARD</h3>}
          {pathname === "/asset/:id" && <h3 className="page-title">ASSET</h3>}
          {pathname === "/assets" && <h3 className="page-title">ASSETS</h3>}
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
