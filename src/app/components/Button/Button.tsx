import { FC, MouseEventHandler } from 'react'
import { RootState, useAppSelector } from '../../redux';
import styles from "./Button.module.scss";

interface ButtonProps {
    text: string | JSX.Element,
    type?: "button" | "submit" | "reset"
    onClick?: MouseEventHandler
    disabled?: boolean
}
const Button: FC<ButtonProps> = ({ text, type = "button", onClick, disabled = false }) => {
    const color = useAppSelector((state: RootState) => state.character.color)

    return (<button disabled={disabled} onClick={onClick} type={type} className={`custom-button ${styles[`bg--${color}`]}`}>{text}</button>)
}
export default Button;

