import React from 'react' 
import "./Input.scss";
interface InputProps {
    name: string;
    type: string | false;
}
const Input:React.FunctionComponent<InputProps> = ({name, type})=> {
    return (<input  type={type || "text"} placeholder={name} id={name}/>)
}
export default Input;