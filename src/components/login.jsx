import React, { Component } from "react";
import Joi from "joi-browser";
import "./login.css";
import { login } from "../services/data";
import { timingSafeEqual } from "crypto";

class Login extends Component {
  username = React.createRef();
  password = React.createRef();
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {
      username: "",
      password: ""
    }
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

  async handleSubmit(e) {
    e.preventDefault();
    const credentials = {
      username: this.username.current.value,
      password: this.password.current.value
    };

    try {
      const res = await login(credentials);
      if (res) {
        this.props.history.replace("/");
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 404) console.log("Error");
    }
  }

  render() {
    return (
      <div className="card top-block-raised">
        <form className="card-body" onSubmit={e => this.handleSubmit(e)}>
          <h5 className="card-title">Login</h5>
          <label htmlFor="username">Username</label>
          <input
            className="form-control"
            type="text"
            name="username"
            id="username"
            ref={this.username}
          />
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            ref={this.password}
          />
          <br />
          <button type="submit" className="btn btn-warning form-control">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
