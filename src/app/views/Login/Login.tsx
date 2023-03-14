import { FormEvent } from "react"
import Input from "../../components/Input/Input"
import LoginButton from "../../components/LoginButton/LoginButton"

import Button from "../../components/Button/Button"

import "./Login.scss"
import { RootState, useAppDispatch } from "../../redux"
import { login } from "../../redux/slices/tokenSlice"
import { useNavigate } from "react-router-dom"
import { Alert } from "../../components/Alert/Alert"
import { useSelector } from "react-redux"

const Login = () => {
  const dispatch = useAppDispatch()
  const move = useNavigate()
  const error = useSelector((state: RootState) => state.token.error)


  const handleSubmit = async (ev: FormEvent) => {
    try {
      ev.preventDefault()
      let fs = new FormData(ev.target as HTMLFormElement)
      const loginBody = {
        email: "",
        password: "",
      }
      for (const ok of fs.entries()) {
        loginBody[ok[0] as keyof { email: string; password: string }] =
          ok[1] as string
      }

      let res = await dispatch(login(loginBody))

      if (res.type.includes("fulfilled")) move("/home")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="login__wrap">
      <form className="login" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <Input name="email" type={false} />
        <h3>Password</h3>
        <Input name="password" type="Password" />
        <div className="login-social">
          <LoginButton logo="/assets/ggg.png" name="Google" />
          <LoginButton logo='/assets/redd.png' name="Reddit" />
        </div>
        <Button type="submit" text="Login" />
      </form>
      {error && <Alert msg={error} />}
    </div>
  )
}
export default Login
