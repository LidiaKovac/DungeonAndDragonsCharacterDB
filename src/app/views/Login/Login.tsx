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
  const [loginData, setLoginData] = useState<UserCredentials>()
  const [logged, setLogged] = useState<boolean>(false)
  const [error, setError] = useState<string | undefined>()
  const history = useHistory()

  useEffect(()=> {
    if(logged) {
      history.push("/home")
    }
  }, [logged])
  return (
    <div className="login__wrap">
      <div className="login">
        {error && <div className="error">{error}</div>}
        <h3>Email</h3>
        <Input name="email" type="text" handleEdit={(credentials: UserCredentials)=> setLoginData({...loginData, ...credentials})} />
        <h3>Password</h3>
        <Input name="password" type="password" handleEdit={(credentials: UserCredentials)=> setLoginData({...loginData, ...credentials})} />
        <div className="login-social">
          <LoginButton logo={Google} name="Google" />
          <LoginButton logo={Reddit} name="Reddit" />
        </div>
        <div onClick={async()=> {
          let isLogged = await login(loginData?.email!, loginData?.password!)
          isLogged ? setLogged(true) : setError("Wrong email or password")
        }}>
        <Button text="Login"/>
        </div>
      </div>
    </div>
  );
};
export default Login;
