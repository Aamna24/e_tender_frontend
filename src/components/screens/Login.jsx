import React from "react";
import Form from "../../common/form";
import Joi from "joi-browser";
import auth from "../../services/authServices";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
    err: false,
  };

  schema = {
    username: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);
      window.location = "/home";
    } catch (ex) {
      if (ex.response !== 200) {
        this.setState({
          err: true,
        });
      }
    }
  };

  render() {
    return (
      <>
        <div className="col-md-6 mx-auto my-auto text-center form p-4 mb-5">
          <h3>Sign In</h3>
          {this.state.err && (
            <p style={{ color: "red" }}>
              Invalid username or password. Please try again
            </p>
          )}
          <form onSubmit={this.handleSubmit} className="ml-5">
            {this.renderInput("username", "Email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Login")}
          </form>
        </div>
        <p className="container mx-auto text-center">
          Don't have an account?<Link to="/register">Sign Up</Link>
        </p>
        <p className="container mx-auto text-center">
          <Link to="/request-reset-email">Forgot Password?</Link>
        </p>
      </>
    );
  }
}

export default Login;
