import { KeyboardEvent } from "react"
import { RootState, useAppDispatch, useAppSelector } from "../../../redux"
import { editChar } from "../../../redux/slices/charSlice"
import styles from "../Character.module.scss"
export const CharDescription = () => {
    const edit = useAppSelector((state:RootState)=> state.character.editMode)
    const asyncDispatch = useAppDispatch()
    const token = useAppSelector((state: RootState) => state.token.token)
    const { id, description } = useAppSelector((state: RootState) => state.character.selectedChar.char)
    const handleKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === "Enter") {
            asyncDispatch(editChar({ token, id, data: new FormData(ev.currentTarget.parentElement as HTMLFormElement) }))
        }
    }
    const handleBlur = (ev: React.FocusEvent) => {
            asyncDispatch(editChar({ token, id, data: new FormData(ev.currentTarget!.parentElement as HTMLFormElement) }))
    }
    return (<> <form className={styles["character__description"]}> <textarea className={edit ? styles["input--edit"] : ""} disabled={!edit} defaultValue={description} onBlur={handleBlur} onKeyUp={handleKeyDown} name="description" id="" cols={50} rows={40}></textarea> </form> </>)
}