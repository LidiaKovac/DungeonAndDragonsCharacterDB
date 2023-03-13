import React from 'react' 
import styles from "./Input.module.scss";
import {MdAddAPhoto} from "react-icons/md"
interface InputProps {
    name: string;
    type: string | false;
    value?: string
}
const Input:React.FunctionComponent<InputProps> = ({name, type})=> {
    return (
    <>
    <input className={type==='file' ? `${styles["hide"]} ${styles["custom-input"]}`: "custom-input"} type={type || "text"} placeholder={name} id={name} name={name}/>
    {type ==='file' && <label htmlFor={name}><MdAddAPhoto/></label>}
    </>)
}
export default Input;