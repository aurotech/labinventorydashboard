import React, { Component } from "react";
import Joi from "joi-browser";
import "./login.css";
import { login } from "../services/data";
import LoadingOverlay from "react-loading-overlay";
import Form from "./widgets/form";

class Login extends Form {
  credentials = {
    username: React.createRef(),
    password: React.createRef()
  };
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {
      username: "",
      password: ""
    },
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
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 404) console.log("Error");
      this.setState({ active: false });
    }
  };

  hanndleChange = e => {};

  render() {
    return (
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
        <div className="card top-block-raised">
          <div className="card-body">
            <h5 className="card-title">Login</h5>

            <form>
              {this.renderInput("Username", "username", "form-control")}
              {this.renderInput("Password", "password", "password")}
              {this.renderSubmitButton(
                "Submit",
                "btn btn-warning form-control"
              )}
            </form>
          </div>
        </div>
      </LoadingOverlay>
    );
  }
}

export default Login;
