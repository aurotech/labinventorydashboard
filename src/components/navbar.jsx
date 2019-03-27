import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { toast } from "react-toastify";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { getUsername } from "./widgets/util";
import { Icon } from "@material-ui/core";

class Navbar extends Component {
  state = {
    anchorEl: null
  };

  logout() {
    localStorage.removeItem("labId");
    toast.success("Logout Successful");
    window.location.reload();
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    const { pathname } = this.props.history.location;
    console.log(pathname);

    return (
      <div className="backgroung-img">
        <div className="row">
          <div className="col">
            <Link
              to={{
                pathname: `/`
              }}
              style={{ textDecoration: "none" }}
            >
              {/* <img
              className="m-10"
              src={require("../assets/logo.jpg")}
              alt="logo"
              height="90"
            /> */}

              <div className="p-3 mt-5 ml-5">
                <h3 className="page-title">
                  Innovation Lab Inventory Dashboard
                </h3>
                {/* {pathname === "/" && (
                  <React.Fragment>
                    <h3 className="page-title">
                      Innovation Lab Inventory Dashboard
                    </h3>
                  </React.Fragment>
                )}
                {pathname.includes("asset") && (
                  <h3 className="page-title">ASSET</h3>
                )}
                {pathname === "/assets" && (
                  <div>
                    <h3 className="page-title">
                      <Button
                        color="default"
                        variant="contained"
                        className="mr-15"
                        onClick={() => this.props.history.goBack()}
                      >
                        {<Icon>keyboard_backspace</Icon>}
                      </Button>
                      ASSETS
                    </h3>
                  </div>
                )} */}
              </div>
            </Link>
          </div>
          <div className="col">
            {localStorage.getItem("labId") && (
              <div
                style={{
                  height: "35px",
                  float: "right",
                  position: "absolute",
                  right: "0px"
                }}
              >
                <Button
                  aria-owns={anchorEl ? "simple-menu" : undefined}
                  aria-haspopup="true"
                  onClick={this.handleClick}
                >
                  <Icon>more_vert</Icon>
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                >
                  <MenuItem>{"Hi, " + getUsername()}</MenuItem>
                  <MenuItem onClick={() => this.logout()}>Logout</MenuItem>
                </Menu>
              </div>
            )}
          </div>
        </div>
        {pathname === "/assets" && (
          <React.Fragment>
            <h3 className="page-title container ml-20">ASSETS</h3>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default withRouter(Navbar);
