import { KeyboardEvent, useState } from "react"
import { FaDiceD20, FaMoon, FaPencilAlt } from "react-icons/fa"
import { MdPhotoLibrary } from "react-icons/md"
import { RiFilePaper2Line } from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Button from "../../../components/Button/Button"
import { BubbleInput } from "../../../components/Input/BubbleInput/BubbleInput"
import Input from "../../../components/Input/Input"
import { RootState, useAppSelector } from "../../../redux"
import { editChar, setEdit } from "../../../redux/slices/charSlice"
import styles from "../Character.module.scss"

export const CharacterHeader = () => {
  const edit = useAppSelector((state: RootState) => state.character.editMode)
  const dispatch = useDispatch()
  const char = useSelector(
    (state: RootState) => state.character.selectedChar.char
  )
  const me = useSelector((state: RootState) => state.user.logged)
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
    <form className={styles["char__header"]}>
      <div className={styles["character__options"]}>
        <Button
          onClick={() => {
            dispatch(setEdit())
          }}
          text={<FaPencilAlt />}
        />
        <Button disabled={true} text={<FaMoon />} />
        <Button disabled={true} text={<MdPhotoLibrary />} />

        <Button
          disabled={true}
          text={
            <Link to={`/notes/${char.id}`}>
              {" "}
              <RiFilePaper2Line />
            </Link>
          }
        />
      </div>
      <div className={styles["char__anagraphics"]}>
        <div className={styles["char__banner-name"]}>
          <Input
            color='blue'
            name="name"
            disabled={!edit}
            // onKeyDown={handleChange}
            type="text"
            className={
              edit
                ? `${styles["char__name"]} ${styles["input--edit"]}`
                : styles["char__name"]
            }
            defaultVal={char.name}
          />
          <FaDiceD20 />
        </div>
        <div className={styles["char__game-data"]}>
            {/* <Input
              color={"pink"}
              className={styles["char__class"]}
              name=""
              disabled={true}
              type="text"
              defaultVal={char.Class?.name}
            />

            <Input
            /> */}
            <BubbleInput color={"pink"}
              side='right'
              disabled={!edit}
              // onKeyDown={handleChange}
              name="level"
              type="number"
              labelVal={char.Class.name}
              defaultVal={char.level}
            />
          <Input
            color='pink'

            name=""
            type='text' disabled={true}
            defaultVal={char.Race?.name}
            className={styles["char__race"]}
          />
          <Input
            color='pink'

            name=""
            type='text'
            disabled={true}
            className={styles["char__player"]}
            defaultVal={me.nickname}
          />
          <Input
            color='pink'

            name=""
            type='text'
            disabled={true}
            className={styles["char__alignment"]}
            defaultVal={"Cattivissimo Me"}
          />
        </div>
      </div>
    </form>
  )
}
