import React, { ChangeEvent } from 'react' 
import "./Input.scss";
import {MdAddAPhoto} from "react-icons/md"
import { generateLink } from '../../../API/image';
import { useDispatch } from 'react-redux';
interface InputProps {
    name: string;
    type: string | false;
    value?: string
    handleEdit?: Function
}
const Input:React.FunctionComponent<InputProps> = ({name, type, handleEdit})=> {
    const dispatch = useDispatch()
    return (
    <>
    <input className={type==='file' ? "hide": ""} type={type || "text"} placeholder={name} id={name} 
    onChange={(e:ChangeEvent<HTMLInputElement>)=> {
        type==="file" ? dispatch(generateLink(e?.target?.files![0])) :
        (type === "email" || type === "password") && handleEdit!({[type as string]: e.target.value })
}}
    
    />
    {type ==='file' && <label htmlFor={name}><MdAddAPhoto/></label>}

    </>)
}
export default Input;