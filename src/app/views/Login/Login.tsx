import { FormEvent } from "react"
import Input from "../../components/Input/Input"
import LoginButton from "../../components/LoginButton/LoginButton"

import Button from "../../components/Button/Button"

import "./Login.scss"
import {useEffect} from "react"
import { RootState, useAppDispatch, useAppSelector } from "../../redux"
import { login } from "../../redux/slices/tokenSlice"
import { useNavigate } from "react-router-dom"
import { Alert } from "../../components/Alert/Alert"
import { useSelector } from "react-redux"
import { getMe } from "../../redux/slices/userSlice"
import { AsyncThunkAction, PayloadAction, ThunkAction } from "@reduxjs/toolkit"
import { FulfilledActionFromAsyncThunk, RejectedActionFromAsyncThunk } from "@reduxjs/toolkit/dist/matchers"
import { Loader } from "../../components/Loader/Loader"

const Login = () => {
  const dispatch = useAppDispatch()
  const move = useNavigate()
  const token = useAppSelector((state:RootState)=> state.token.token)
  const error = useAppSelector((state: RootState) => state.token.error)
  const loading = useAppSelector((state:RootState)=> state.user.loading)
  const moveTo = useNavigate()

  useEffect(()=> {
    dispatch(getMe(token)).then((res: any) => {
      if(res.type.includes("fulfilled")) {
        moveTo("/home")
      } else {
        res.payload.includes("404")
        // moveTo("/signup")
      }
    })
   }, [])

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
      <Loader loading={loading}/>
      <form className="login" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <Input color="blue" name="email" type={false} />
        <h3>Password</h3>
        <Input color="blue" name="password" type="Password" />
        {/* <div className="login-social">
          <LoginButton logo="/assets/ggg.png" name="Google" />
          <LoginButton logo='/assets/redd.png' name="Reddit" />
        </div> */}
        <Button type="submit" text="Login" />
      </form>
      {error && <Alert msg={error} />}
    </div>
  )
}
export default Login
