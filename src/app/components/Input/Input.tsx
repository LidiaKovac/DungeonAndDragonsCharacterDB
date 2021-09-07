import React, { ChangeEvent } from 'react' 
import "./Input.scss";
//import {MdAddAPhoto} from "react-icons/md"
import { generateLink } from '../../../API/image';
import { useDispatch } from 'react-redux';
interface InputProps {
    name: string; //what the input is storing
    type: "text" | "file" | "password" | "number"; //HTML type
    value?: string //? 
    handleEdit?: Function //onChange function
}
const Input:React.FunctionComponent<InputProps> = ({name, type, handleEdit})=> {
    const dispatch = useDispatch()
    return (
    <>
    <input id={name} className={type==="file" ? "hide" : ""} type={type} placeholder={name} onChange={(event: ChangeEvent<HTMLInputElement>)=> {
        type==="file" ? dispatch(generateLink(event.target.files![0])) :  
        (name !== "file") && handleEdit!({[name as string]: event.target.value})
    } }/>
    </>)
}
export default Input;