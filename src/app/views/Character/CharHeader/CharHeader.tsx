import { KeyboardEvent, useState } from "react"
import { FaDiceD20, FaMoon, FaPencilAlt } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import Button from "../../../components/Button/Button"
import { RootState } from "../../../redux"
import { editChar } from "../../../redux/slices/charSlice"
import styles from "../Character.module.scss"

export const CharacterHeader = () => {
  const [edit, setEdit] = useState(false)
  const dispatch = useDispatch()
  const char = useSelector(
    (state: RootState) => state.character.selectedChar
  )
  const me = useSelector(
    (state: RootState) => state.user.logged
  )
  const token = useSelector((state: RootState) => state.token.token)
  // const handleEdit = (ev: FormEvent) => {
  //     ev.preventDefault()
  //     console.log(ev);

  // }

  const handleChange = (ev: KeyboardEvent) => {
    if (ev.key === "Enter") {
      let form = ev.currentTarget.closest("form")
      const edited = new FormData(form!)
      dispatch(editChar({ token, id: char.id, data: edited }))
      setEdit(false)
    }
  }
  return (
    <form className={styles["character__wrap"]}>
      <div className={styles["character__options"]}>
        <Button
          onClick={() => {
            setEdit((prev) => !prev)
          }}
          text={(<FaPencilAlt />) as JSX.Element}
        />
        <Button text={(<FaMoon />) as JSX.Element} />
      </div>
      <div className={styles["char__anagraphics"]}>
        <div className={styles["char__banner-name"]}>
          <input
            name="name"
            disabled={!edit}
            onKeyDown={handleChange}
            type="text"
            className={
              edit
                ? `${styles["char__name"]} ${styles["input--edit"]}`
                : styles["char__name"]
            }
            defaultValue={char.name}
          />
          <FaDiceD20 />
        </div>
        <div className={styles["char__game-data"]}>
          <div className={styles["char__class-level"]}>
            <input
              disabled
              type="text"
              defaultValue={char.Class?.name}
              className={styles["char__class"]}
            />
            <input
              disabled={!edit}
              onKeyDown={handleChange}
              name="level"
              type="number"
              className={
                edit
                  ? `${styles["char__level"]} ${styles["input--edit"]}`
                  : styles["char__level"]
              }
              defaultValue={char.level}
            />
          </div>
          <input
            disabled
            defaultValue={char.Race?.name}
            className={styles["char__race"]}
          />
          <input
            disabled
            className={styles["char__player"]}
            defaultValue={me.nickname}
          />
          <input
            disabled
            className={styles["char__alignment"]}
            defaultValue={"Cattivissimo Me"}
          />
        </div>
      </div>
    </form>
  )
}
