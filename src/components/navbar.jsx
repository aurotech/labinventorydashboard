import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

class Navbar extends Component {
  state = {};

  logout() {
    localStorage.removeItem("labId");
    window.location.reload();
  }

  render() {
    const { pathname } = this.props.history.location;
    return (
      <div className="backgroung-img">
        <div className="d-flex">
          <Link
            to={{
              pathname: `/`
            }}
          >
            <img
              className="m-10"
              src={require("../assets/logo.jpg")}
              alt="logo"
              height="90"
            />
          </Link>
          {localStorage.getItem("labId") && (
            <Button
              variant="contained"
              color="default"
              onClick={() => this.logout()}
              style={{ height: "35px" }}
            >
              Logout
            </Button>
          )}
        </div>

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
