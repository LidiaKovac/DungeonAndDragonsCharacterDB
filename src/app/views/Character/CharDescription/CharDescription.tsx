import { KeyboardEvent } from "react"
import { RootState, useAppDispatch, useAppSelector } from "../../../redux"
import { editChar } from "../../../redux/slices/charSlice"
import styles from "../Character.module.scss"
export const CharDescription = () => {
    const edit = useAppSelector((state: RootState) => state.character.editMode)
    const asyncDispatch = useAppDispatch()
    const token = useAppSelector((state: RootState) => state.token.token)
    const { id, description } = useAppSelector((state: RootState) => state.character.selectedChar.char)
    const color = useAppSelector((state: RootState) => state.character.color)

    const handleKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === "Enter") {
            asyncDispatch(editChar({ token, id, data: new FormData(ev.currentTarget.parentElement as HTMLFormElement) }))
        }
    }
    const handleBlur = (ev: React.FocusEvent) => {
        asyncDispatch(editChar({ token, id, data: new FormData(ev.currentTarget!.parentElement as HTMLFormElement) }))
    }
    return (<> <form className={`${styles["character__description"]} `}> <textarea className={edit ? `input--edit ${styles[`outline--${color}`]}`: styles[`outline--${color}`]} disabled={!edit} defaultValue={description} onBlur={handleBlur} onKeyUp={handleKeyDown} name="description" id="" rows={40}></textarea> </form> </>)
}