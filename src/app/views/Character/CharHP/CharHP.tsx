import { RootState, useAppDispatch, useAppSelector } from "../../../redux/"
import styles from "../Character.module.scss"
export const CharHP = () => {
  //   const asyncDispatch = useAppDispatch()
  const color = useAppSelector((state: RootState) => state.character.color)
  const hp = useAppSelector(
    (state: RootState) => state.character.selectedChar.char.hit_points
  )
  return (
    <div className={`${styles["char__hp"]} ${styles[`bg--${color}-lighter`]}`}>
      <div className={`${styles["max__hp"]} ${styles[`outline--${color}`]}`}>
        {hp || "N/A"}
      </div>
      <div
        className={`${styles["curr__hp"]} ${styles[`bg--${color}-lighter`]}`}
      >
        <input type="number" className={`${styles[`bg--${color}-lightest`]}`} />
      </div>
    </div>
  )
}
