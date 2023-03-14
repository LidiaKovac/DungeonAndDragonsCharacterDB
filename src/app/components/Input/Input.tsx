import React from 'react'
import styles from "./Input.module.scss";
import { MdAddAPhoto } from "react-icons/md"
interface InputProps {
    name: string;
    type: string | false;
    defaultVal?: string
    disabled?: boolean
    className?: string
}
const Input: React.FunctionComponent<InputProps> = ({ name, defaultVal, type, disabled, className }) => {
    return (
        <>
            <input defaultValue={defaultVal} disabled={disabled} className={`${className} ${type === 'file' ? styles["hide"] : ""} "custom-input"`} type={type || "text"} placeholder={name} id={name} name={name} />
            {type === 'file' && <label htmlFor={name}><MdAddAPhoto /></label>}
        </>)
}
export default Input;