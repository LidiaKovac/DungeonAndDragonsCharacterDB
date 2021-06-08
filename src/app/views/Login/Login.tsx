import React from "react";
import Input from "../../components/Input/Input";
import LoginButton from "../../components/LoginButton/LoginButton";
import Google from "../../../assets/ggg.png";
import Reddit from "../../../assets/redd.png";
import Button from "../../components/Button/Button";
import {Link} from "react-router-dom"

import "./Login.scss";

const Login = () => {
  return (
    <div className="login__wrap">
      <div className="login">
        <h3>Login</h3>
        <Input name="Email" type={false} />
        <h3>Password</h3>
        <Input name="Password" type="Password" />
        <div className="login-social">
          <LoginButton logo={Google} name="Google" />
          <LoginButton logo={Reddit} name="Reddit" />
        </div>
        <Link to='/home'>
        <Button text="Login"/>
        </Link>
      </div>
    </div>
  );
};
export default Login;
