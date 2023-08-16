import { KeyboardEvent } from "react"
import { RootState, useAppDispatch, useAppSelector } from "../../../redux/"
import { editChar } from "../../../redux/slices/charSlice"
import styles from "../Character.module.scss"
import { TbHeartbeat } from "react-icons/tb"
export const CharHP = () => {
  const asyncDispatch = useAppDispatch()
  const { id, description } = useAppSelector((state: RootState) => state.character.selectedChar.char)

  const token = useAppSelector((state: RootState) => state.token.token)

  const handleKeyDown = (ev: KeyboardEvent) => {
    if (ev.key === "Enter") {
      asyncDispatch(editChar({ token, id, data: new FormData(ev.currentTarget.parentElement as HTMLFormElement) }))
    }
  }
  const color = useAppSelector((state: RootState) => state.character.color)
  const hp = useAppSelector(
    (state: RootState) => state.character.selectedChar.char.hit_points
  )
  const currHP = useAppSelector(
    (state: RootState) => state.character.selectedChar.char.curr_hp
  )

  return (
    <div className={`${styles["char__hp"]} ${styles[`bg--${color}-lighter`]}`}>
      <div className={`${styles["max__hp"]} ${styles[`outline--${color}-medium`]}`}>
        <TbHeartbeat className={`${styles[`color--${color}--lighter`]}`} />
        <span>{hp || "N/A"} </span>
      </div>
      <form onSubmit={(e) => e.preventDefault()}
        className={`${styles["curr__hp"]} ${styles[`bg--${color}-lighter`]}`}
      >
        <input type="number" defaultValue={currHP} name='curr_hp' onKeyUp={handleKeyDown} className={`${styles[`bg--${color}-lightest`]}`} />
      </form>
    </div>
  )
}
