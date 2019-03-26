import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };

    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  validate = () => {
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false
    });
    if (!result.error) return null;
    const errors = {};
    result.error.details.map(obj => {
      errors[obj.path[0]] = obj.message;
    });
    return errors;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMsg = this.validateProperty(input);
    if (errorMsg) errors[input.name] = errorMsg;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors, failed: false });
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate() || "";

    this.setState({ errors });
    if (errors) return;

    this.doSubmit();
  };

  renderInput(label, name, type = "text", classes) {
    return (
      <Input
        label={label}
        name={name}
        type={type}
        value={this.state.data[name]}
        error={this.state.errors[name]}
        onChange={this.handleChange}
        classes={classes}
      />
    );
  }

  renderSelectInput(label, name, genres) {
    return (
      <div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor={name}>
              {label}
            </label>
          </div>
          <select
            className="custom-select"
            id={name}
            onChange={this.handleChange}
            name={name}
            value={this.state.data.genre}
          >
            <option value="">Select a Genre</option>
            {genres.map(g => {
              return (
                <option key={g._id} value={g._id}>
                  {g.name}
                </option>
              );
            })}
          </select>
        </div>
        {this.state.errors[name] && (
          <div className="alert alert-danger">{this.state.errors[name]}</div>
        )}
      </div>
    );
  }

  renderSubmitButton(label, classes) {
    return (
      <button
        disabled={this.validate()}
        type="submit"
        onClick={this.handleSubmit}
        className={classes}
      >
        {label}
      </button>
    );
  }
}

export default Form;
