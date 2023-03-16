import { KeyboardEvent, useState } from "react"
import { FaDiceD20, FaMoon, FaPencilAlt } from "react-icons/fa"
import { MdPhotoLibrary } from "react-icons/md"
import { RiFilePaper2Line } from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Button from "../../../components/Button/Button"
import { RootState, useAppSelector } from "../../../redux"
import { editChar, setEdit } from "../../../redux/slices/charSlice"
import styles from "../Character.module.scss"

export const CharacterHeader = () => {
  const edit = useAppSelector((state: RootState) => state.character.editMode)
  const dispatch = useDispatch()
  const char = useSelector(
    (state: RootState) => state.character.selectedChar.char
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
      setEdit()
    }
  }
  return (
    <form className={styles["char__header"]} >
      <div className={styles["character__options"]}>
        <Button
          onClick={() => {
            dispatch(setEdit())

          }}
          text={(<FaPencilAlt />)}
        />
        <Button disabled={true} text={(<FaMoon />)} />
        <Button disabled={true} text={<MdPhotoLibrary />} />

        <Button disabled={true} text={<Link to={`/notes/${char.id}`}> <RiFilePaper2Line /></Link>} />


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
