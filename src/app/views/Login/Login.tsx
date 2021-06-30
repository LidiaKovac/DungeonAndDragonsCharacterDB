import React from "react";
import Input from "../../components/Input/Input";
import LoginButton from "../../components/LoginButton/LoginButton";
import Google from "../../../assets/ggg.png";
import Reddit from "../../../assets/redd.png";
import Button from "../../components/Button/Button";
import {Link} from "react-router-dom"

import "./Login.scss";
import { login } from "../../../API/login";
import { useState } from "react";
import { UserCredentials } from "../../../interfaces";

const Login = () => {
  const [loginData, setLoginData] = useState<UserCredentials>()
  return (
    <div className="login__wrap">
      <div className="login">
        <h3>Login</h3>
        <Input name="Email" type="email" handleEdit={(credentials: UserCredentials)=> setLoginData({...loginData, ...credentials})} />
        <h3>Password</h3>
        <Input name="Password" type="password" handleEdit={(credentials: UserCredentials)=> setLoginData({...loginData, ...credentials})} />
        <div className="login-social">
          <LoginButton logo={Google} name="Google" />
          <LoginButton logo={Reddit} name="Reddit" />
        </div>
        <Link to='/home' onClick={()=> login(loginData?.email!, loginData?.password!)}>
        <Button text="Login"/>
        </Link>
      </div>
    </div>
  );
};
export default Login;
