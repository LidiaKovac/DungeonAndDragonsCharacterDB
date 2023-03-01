import React, { FC } from 'react' 
import "./Button.scss";

interface ButtonProps {
    text: string
}
const Button:FC<ButtonProps> = ({text})=> {
    return (<button>{text}</button>)
}
export default Button;


{/* <Button /> */}