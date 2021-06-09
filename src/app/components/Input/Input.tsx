import React from 'react' 
import "./Input.scss";
interface InputProps {
    name: string;
    type: string | false;
    value?: string
}
const Input:React.FunctionComponent<InputProps> = ({name, type})=> {
    return (
    <>
    <input className={type==='file' ? "hide": ""} type={type || "text"} placeholder={name} id={name}/>
    {type ==='file' && <label htmlFor={name}>CLICK</label>}
    </>)
}
export default Input;