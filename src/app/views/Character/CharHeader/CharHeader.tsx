import { ChangeEvent, FormEvent, KeyboardEvent, useState } from "react"
import { FaDiceD20, FaPalette, FaPencilAlt } from "react-icons/fa"
import { useDispatch } from "react-redux"
import Button from "../../../components/Button/Button"
import { RootState, useAppSelector } from "../../../redux"
import { editChar } from "../../../redux/slices/charSlice"
import styles from "../Character.module.scss"

export const CharacterHeader = () => {
    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch()
    const char = useAppSelector(
        (state: RootState) => state.character.selectedChar
    )
    const token = useAppSelector((state: RootState) => state.token.token)
    // const handleEdit = (ev: FormEvent) => {
    //     ev.preventDefault()
    //     console.log(ev);

    // }

    const handleChange = (ev: KeyboardEvent) => {
        console.log(ev.key);
        if (ev.key === "Enter") {
            let form = ev.currentTarget.closest("form")
            const edited = new FormData(form!)
            dispatch(editChar({ token, id: char.id, data: edited }))
        }
    }
    return (
        <form className={styles["character__wrap"]}>
            <div className={styles["character__options"]}>
                <Button onClick={() => { setEdit(prev => !prev) }} text={<FaPencilAlt /> as JSX.Element} />
                <Button text={<FaPalette /> as JSX.Element} />
            </div>
            <div className={styles["char__anagraphics"]}>
                <div className={styles["char__banner-name"]}>
                    <input
                    name='name'
                        disabled={!edit}
                        onKeyDown={handleChange}
                        type="text"
                        className={edit ? `${styles["char__name"]} ${styles["input--edit"]}` : styles["char__name"]}
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
                    name='level'

                            type="number"
                            className={edit ? `${styles["char__level"]} ${styles["input--edit"]}` : styles["char__level"]}
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
                        defaultValue={"Pinco Pallo"}
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
