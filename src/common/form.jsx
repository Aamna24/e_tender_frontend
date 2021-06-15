import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import TextField from "./textfield";
import DropDown from "./dropdownCategory";
import Dropdown from "./dropdownStatus";
import AutoInput from "./autoInput";
class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const option = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, option);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("in handle Submit");
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button
        className="btn "
        style={{
          borderRadius: "1rem",
          padding: "7px 20px 7px 20px",
          backgroundColor: "#050F2F",
          color: "white",
          height: "80%",
          fontSize: "16px",
        }}
        onClick
      >
        {label}
      </button>
    );
  }
  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        //label={label}
        placeholder={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
  renderInput1(name, label, value, type = "text") {
    const { errors } = this.state;
    return (
      <AutoInput
        type={type}
        name={name}
        value={value}
        //label={label}
        placeholder={label}
        onChange={this.handleChange(value)}
        error={errors[name]}
      />
    );
  }
  renderFile(name, label, value, type = "file") {
    const { errors } = this.state;
    return (
      <AutoInput
        type={type}
        name={name}
        value={value}
        //label={label}
        placeholder={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderTextField(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <TextField
        type={type}
        name={name}
        value={data[name]}
        label={label}
        placeholder={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
  renderDropDown1(
    name,
    label,
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    type = "text"
  ) {
    const { data, errors } = this.state;
    return (
      <DropDown
        type={type}
        name={name}
        value={data[name]}
        label={label}
        value1={value1}
        value2={value2}
        value3={value3}
        value4={value4}
        value5={value5}
        value6={value6}
        value7={value7}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderDropDown2(name, label, value1, value2, type = "text") {
    const { data, errors } = this.state;
    return (
      <Dropdown
        type={type}
        name={name}
        value={data[name]}
        label={label}
        value1={value1}
        value2={value2}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
