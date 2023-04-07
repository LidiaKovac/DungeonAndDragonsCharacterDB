import { RootState, useAppDispatch, useAppSelector } from "../../../redux"
import styles from "../Character.module.scss"
import { TbShield, TbShieldFilled } from "react-icons/tb"
export const CharAC = () => {
    const color = useAppSelector((state: RootState) => state.character.color)
    return (<div className={`${styles["char__ac"]} ${styles[`color--${color}--light`]} `}>
        <TbShield className={`${styles[`color--${color}`]} ${styles[`fill--${color}-lighter`]}`} />
        <div className={`${styles[`char__ac-value`]}`}>12</div>
        <small>Armor class</small>
    </div>)

}