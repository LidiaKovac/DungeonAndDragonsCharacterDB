import { RootState, useAppDispatch, useAppSelector } from "../../redux"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import styles from "./Signup.module.scss"
import { FormEvent } from "react"
import { createUser } from "../../redux/slices/userSlice"
import { useNavigate } from "react-router-dom"
import { Alert } from "../../components/Alert/Alert"
export const Signup = () => {
    const asyncDispatch = useAppDispatch()
    const error = useAppSelector((state: RootState) => state.user.error)
    const moveTo = useNavigate()
    const handleSubmit = async (ev: FormEvent) => {
        ev.preventDefault()
        await asyncDispatch(createUser(new FormData(ev.target as HTMLFormElement)))
        moveTo("/login")
    }
    return (
        <form onSubmit={handleSubmit} className={styles["form__signup"]}>
            <Input color="pink" type="text" name="email" />
            <Input color="pink" type="text" name="full_name" />
            <Input color="pink" type="text" name="nickname" />
            <Input color="pink" type="password" name="password" />
            <Input color="pink" type="password" name="password_confirm" />
            {/* <Input type='file' name='' /> */}
            <button style={{ display: "none" }}></button>
            {error && <Alert msg={error} />}
        </form>
    )
}
