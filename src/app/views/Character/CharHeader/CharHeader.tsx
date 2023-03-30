import { FormEvent, KeyboardEvent, useState } from "react"
import { FaDiceD20, FaMoon, FaPencilAlt } from "react-icons/fa"
import { MdPhotoLibrary } from "react-icons/md"
import { RiFilePaper2Line } from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Button from "../../../components/Button/Button"
import { BubbleInput } from "../../../components/Input/BubbleInput/BubbleInput"
import Input from "../../../components/Input/Input"
import { RootState, useAppDispatch, useAppSelector } from "../../../redux"
import { editChar, setEdit } from "../../../redux/slices/charSlice"
import styles from "../Character.module.scss"

export const CharacterHeader = () => {
  const edit = useAppSelector((state: RootState) => state.character.editMode)
  const dispatch = useAppDispatch()
  const char = useSelector(
    (state: RootState) => state.character.selectedChar.char
  )
  const me = useSelector((state: RootState) => state.user.logged)
  const token = useSelector((state: RootState) => state.token.token)
  const color = useAppSelector((state: RootState) => state.character.color)

  // const handleEdit = (ev: FormEvent) => {
  //     ev.preventDefault()
  //     console.log(ev);

  // }

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault()
    let form = ev.currentTarget as HTMLFormElement
    const edited = new FormData(form)
    await dispatch(editChar({ token, id: char.id, data: edited }))
    dispatch(setEdit())
  }
  return (
    <form className={styles["char__header"]} onSubmit={handleSubmit}>
      <button type="submit" style={{ display: "none" }}></button>
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
            color={color}
            name="name"
            disabled={!edit}
            // onKeyDown={handleChange}
            type="text"
            className={
              edit
                ? `${styles["char__name"]} ${styles["input--edit"]}`
                : styles["char__name"]
            }
            defaultVal={char?.name}
          />
          <FaDiceD20 className={styles[`bg--${color}`]} />
        </div>
        <div className={styles["char__game-data"]}>
          {/* <Input
              color={color}
              className={styles["char__class"]}
              name=""
              disabled={true}
              type="text"
              defaultVal={char.Class?.name}
            />

            <Input
            /> */}
          <BubbleInput color={color}
            side='right'
            disabled={!edit}
            // onKeyDown={handleChange}
            name="level"
            type="number"
            labelVal={char.Class?.name}
            defaultVal={char.level}
          />
          <Input
            color={color}

            name=""
            type='text' disabled={true}
            defaultVal={char.Race?.name}
            className={styles["char__race"]}
          />
          <Input
            color={color}

            name=""
            type='text'
            disabled={true}
            className={styles["char__player"]}
            defaultVal={me.nickname}
          />
          <Input
            color={color}

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
