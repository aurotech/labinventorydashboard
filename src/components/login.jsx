import React, { Component } from "react";
import Joi from "joi-browser";
import "./login.css";
import { login } from "../services/data";
import LoadingOverlay from "react-loading-overlay";

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

  async handleSubmit(e) {
    e.preventDefault();
    const credentials = {
      username: this.username.current.value,
      password: this.password.current.value
    };
    this.setState({ active: true });

    setTimeout(async () => {
      try {
        const res = await login(credentials);
        if (res) {
          this.props.history.replace("/");
        }
      } catch (ex) {
        if (ex.response && ex.response.status === 404) console.log("Error");
        this.setState({ active: false });
      }
    }, 3000);
  }

  render() {
    return (
      <LoadingOverlay
        active={this.state.active}
        // className="_loading_overlay_overlay"
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
      </LoadingOverlay>
    );
  }
}

export default Login;
