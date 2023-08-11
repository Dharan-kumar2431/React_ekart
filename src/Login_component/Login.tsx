import "./Login.css";
import googlelogoimage from "../Assects/Google__G__Logo.svg.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import {
  LoginContext, LoginnameContext,
} from "../Context_component/Logincontext";
import { useFormik } from "formik";

const Login = () => {
  const {newUserData} = useContext(LoginContext);
  console.log("new user data", newUserData);

  const navagation = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("values", values);
      const login = newUserData.some(
        (objvalues: { username: string; password: string }) =>
          objvalues.username === values.username &&
          objvalues.password === values.password
      );

      if (login === true) {
        const filtername = values.username.split("@");
        console.log("filtername==>", filtername[0]);
        navagation("/landingpage", {
            state : {
                profileName: filtername[0]
            }
        });
      } else {
        alert("username and password does not match");
      }

      
    },
  });

  return (
      <div className="maindiv">
        <div className="formdiv d-flex">
          <div className="leftdiv col-5">
            <h3 className="leftdivtextheading">Shope Your Love Things</h3>
          </div>

          <div className="rigthdiv col-7">
            <h3 className="singinpageheading">Login</h3>
            <p className="wlcomtext">Welcome to Shop Loved Once</p>

            <div>
              <form className="signinform" onSubmit={formik.handleSubmit}>
                <small>
                  <label htmlFor="username" className="inputlable">
                    User name or Email
                  </label>
                </small>
                <input
                  type="text"
                  name="username"
                  className="usernameinput loginforminput"
                  onChange={formik.handleChange}
                />
                <small>
                  <label htmlFor="password" className="inputlable">
                    Password
                  </label>
                </small>
                <input
                  type="password"
                  name="password"
                  className="loginforminput"
                  onChange={formik.handleChange}
                />
                <p className="forgotpassword">
                  <small>
                    <a href="#" className="forgotpasslink">
                      Forgot password?
                    </a>
                  </small>
                </p>

                <button type="submit" className="signinbutton">
                  Login
                </button>
              </form>
            </div>

            <div>
              <hr className="hrline" />
            </div>

            <div className="d-flex singingoogle">
              <img
                src={googlelogoimage}
                alt="no image"
                className="googleicon"
              />
              <p>
                <a href="https://www.google.com/" className="singinlink">
                  Sign in with google
                </a>
              </p>
            </div>

            <div className="d-flex createaccount">
              <p className="newusertext">Don't Have a Account ? </p>
              <Link to={"/signup"} className="createaccountlink">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
