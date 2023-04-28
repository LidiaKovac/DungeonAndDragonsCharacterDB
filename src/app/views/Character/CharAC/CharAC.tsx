import { RootState, useAppDispatch, useAppSelector } from "../../../redux"
import styles from "../Character.module.scss"
import { TbShieldHalfFilled, } from "react-icons/tb"
export const CharAC = () => {
    const color = useAppSelector((state: RootState) => state.character.color)
    return (<div className={`${styles["char__ac"]} `}>
        <div className={`${styles[`outline--${color}-medium`]} ${styles[`bg--${color}-lighter`]}`}>
        <TbShieldHalfFilled className={`${styles[`color--${color}--lighter`]} ${styles[`fill--${color}-lighter`]}`} />
        <div className={`${styles[`char__ac-value`]}`}>12</div>
        </div>
        <small>Armor class</small>
    </div>)

}