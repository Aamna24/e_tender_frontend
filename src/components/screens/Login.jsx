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
      if(localStorage.getItem('organization')!=='admin'){
        window.location = "/home";
      }
      else{
        //window.location.href='/admin'
        window.location.href='https://etender-backend.herokuapp.com/admin/'

      }
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
      <div className='wrapper'>
        <div className="col-md-6 mx-auto my-auto text-center  p-5 " id="formContent">
          <h2 className='mb-3'>SIGN IN</h2>
          {this.state.err && (
            <p style={{ color: "red" }}>
              Invalid username or password. Please try again
            </p>
          )}
          <form onSubmit={this.handleSubmit} >
            {this.renderInput("username", "Email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Login")}
          </form>
        </div>
        <p className="container mx-auto text-center mt-5">
          Don't have an account?<Link to="/register" className='ml-1' style={{color:"#050F2F",fontWeight:"500"}}>Sign Up</Link>
        </p>
        <p className="container mx-auto text-center ">
          <Link to="/request-reset-email" style={{color:"#050F2F",fontWeight:"500",}}>Forgot Password?</Link>
        </p>
      </div>
    );
  }
}

export default Login;
