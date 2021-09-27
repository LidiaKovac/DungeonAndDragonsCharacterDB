import React from "react";
import Input from "../../components/Input/Input";
import LoginButton from "../../components/LoginButton/LoginButton";
import Google from "../../../assets/ggg.png";
import Reddit from "../../../assets/redd.png";
import Button from "../../components/Button/Button";
import {Link, useHistory} from "react-router-dom"

import "./Login.scss";
import { login } from "../../../API/login";
import { useState } from "react";
import { UserCredentials } from "../../../interfaces";
import { useEffect } from "react";

const Login = () => {
  const history = useHistory()
  const [isCorrect, setIsCorrect] = useState<boolean>(false)
  const [loginData, setLoginData] = useState<UserCredentials>()
  const [error, setError] = useState<string>("")
  useEffect(()=> {
    if (isCorrect) {
      history.push("/home")
    } else {
      //something
    }
  },[isCorrect])
  const loginCheck = async() => {
    let response = await login(loginData?.email!, loginData?.password!)
    console.log(response.toString())
    if (typeof response.toString().includes("Error" || "error")) {
      setIsCorrect(false)
      setError(response.toString())
    } else {
      setIsCorrect(true)
    }
  }
  
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
        <div onClick={()=> loginCheck()}>
        <Button text="Login" />
        </div>
      </div>
    </div>
  );
};
export default Login;
