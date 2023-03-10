import React from 'react' 
import "./Input.scss";
import {MdAddAPhoto} from "react-icons/md"
interface InputProps {
    name: string;
    type: string | false;
    value?: string
}
const Input:React.FunctionComponent<InputProps> = ({name, type})=> {
    return (
    <>
    <input className={type==='file' ? "hide": ""} type={type || "text"} placeholder={name} id={name} name={name}/>
    {type ==='file' && <label htmlFor={name}><MdAddAPhoto/></label>}
    </>)
}
export default Input;