import React, { Component } from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import auth from "../services/authServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);
      window.location = "/home";
      toast.success("Successful Login");
    } catch (ex) {
      if (ex.response && ex.respone.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
        toast.error("An error occurred");
      }
    }
  };

  render() {
    return (
      <div className="col-md-6 mx-auto text-center form p-4 mb-5">
        <h3 style={{ marginTop: "50px", marginBottom: "15px" }}>Login</h3>
        <form onSubmit={this.handleSubmit} className="ml-5">
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default Login;
