import { FC, MouseEventHandler } from 'react'
import "./Button.module.scss";

interface ButtonProps {
    text: string | JSX.Element,
    type?: "button" | "submit" | "reset"
    onClick?: MouseEventHandler
}
const Button: FC<ButtonProps> = ({ text, type = "button", onClick }) => {
    return (<button onClick={onClick} type={type} className='custom-button'>{text}</button>)
}
export default Button;

