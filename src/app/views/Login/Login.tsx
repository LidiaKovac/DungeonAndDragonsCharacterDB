import { FormEvent } from "react";
import Input from "../../components/Input/Input";
import LoginButton from "../../components/LoginButton/LoginButton";
import Google from "../../../assets/ggg.png";
import Reddit from "../../../assets/redd.png";
import Button from "../../components/Button/Button";

import "./Login.scss";
import { useAppDispatch } from "../../redux";
import { login } from "../../redux/slices/userSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useAppDispatch()
  const move = useNavigate()
  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault()
    let fs = new FormData(ev.target as HTMLFormElement)
    const loginBody = {
      email: "",
      password: ""
    }
    for (const ok of fs.entries()) {
      loginBody[ok[0] as keyof { email: string, password: string }] = ok[1] as string

    }
    console.log(loginBody);
    
    await dispatch(login(loginBody))
    move("/home")
  }
  return (
    <div className="login__wrap">
      <form className="login" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <Input name="email" type={false} />
        <h3>Password</h3>
        <Input name="password" type="Password" />
        <div className="login-social">
          <LoginButton logo={Google} name="Google" />
          <LoginButton logo={Reddit} name="Reddit" />
        </div>
        <Button text="Login" />
      </form>
    </div>
  );
};
export default Login;
