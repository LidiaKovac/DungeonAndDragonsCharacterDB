import { RootState, useAppDispatch, useAppSelector } from "../../../redux/"
import styles from "../Character.module.scss"
import { TbHeartbeat } from "react-icons/tb"
export const CharHP = () => {
  //   const asyncDispatch = useAppDispatch()
  const color = useAppSelector((state: RootState) => state.character.color)
  const hp = useAppSelector(
    (state: RootState) => state.character.selectedChar.char.hit_points
  )
  return (
    <div className={`${styles["char__hp"]} ${styles[`bg--${color}-lighter`]}`}>
      <div className={`${styles["max__hp"]} ${styles[`outline--${color}-medium`]}`}>
        <TbHeartbeat className={`${styles[`color--${color}--lighter`]}`} />
        <span>{hp || "N/A"} </span>
      </div>
      <div
        className={`${styles["curr__hp"]} ${styles[`bg--${color}-lighter`]}`}
      >
        <input type="number" className={`${styles[`bg--${color}-lightest`]}`} />
      </div>
    </div>
  )
}
