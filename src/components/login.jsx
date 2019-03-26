import React from "react";
import Joi from "joi-browser";
import "./login.css";
import { login } from "../services/data";
import LoadingOverlay from "react-loading-overlay";
import Form from "./widgets/form";
import { toast } from "react-toastify";

class Login extends Form {
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {
      username: "",
      password: ""
    },
    failed: false,
    active: false
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  componentDidMount() {
    if (localStorage.getItem("labId")) {
      this.props.history.replace("/");
    }
  }

  doSubmit = async () => {
    try {
      const res = await login(this.state.data);
      if (res) {
        this.props.history.replace("/");
        toast.success(
          "Logged in successfully as " + this.state.data.username.toUpperCase()
        );
      }
    } catch (ex) {
      toast.error("Login failed");
      this.setState({ failed: true, active: false });
    }
  };

  render() {
    return (
      <div>
        <LoadingOverlay
          active={this.state.active}
          spinner
          styles={{
            spinner: base => ({
              ...base,
              width: "100px",
              height: "100px",
              top: "-150px",
              "& svg circle": {
                stroke: "#0F6FA6"
              }
            })
          }}
        >
          <div className="card-login mt-20">
            <div className="card-body">
              <h5 className="card-title">Login</h5>
              {this.state.failed && (
                <div className="alert alert-danger">
                  {" "}
                  Username/Password do not match.
                </div>
              )}
              <form>
                {this.renderInput("Username*", "username", "form-control")}
                {this.renderInput("Password*", "password", "password")}
                {this.renderSubmitButton(
                  "Submit",
                  "btn btn-warning form-control"
                )}
              </form>
            </div>
          </div>
        </LoadingOverlay>
      </div>
    );
  }
}

export default Login;
