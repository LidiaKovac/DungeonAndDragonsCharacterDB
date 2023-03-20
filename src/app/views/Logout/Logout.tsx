import { useAppDispatch } from "../../redux"
import {useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { emptyToken } from "../../redux/slices/tokenSlice"
import { useDispatch } from "react-redux"
export const Logout = () => {
    const asyncDispatch = useDispatch()
    const move = useNavigate()
    useEffect(()=> {
        asyncDispatch(emptyToken())
        move("/login")
    }, [])
    return (<> </>)

}