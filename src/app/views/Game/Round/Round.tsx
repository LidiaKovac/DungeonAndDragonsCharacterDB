import { useSelector } from "react-redux"
import Button from "../../../components/Button/Button"
import { RootState, useAppDispatch, useAppSelector } from "../../../redux"
import styles from "./Round.module.scss"
import { editChar } from "../../../redux/slices/charSlice"
import Modal from "../../../components/Modal/Modal"
import { useState } from "react"
export const Round = () => {
    const asyncDispatch = useAppDispatch()
    const hp = useAppSelector(
        (state: RootState) => state.character.selectedChar.char.hit_points
    )
    const currHP = useAppSelector(
        (state: RootState) => state.character.selectedChar.char.curr_hp
    )
    const { id, description } = useAppSelector((state: RootState) => state.character.selectedChar.char)

    const token = useAppSelector((state: RootState) => state.token.token)
    const [close, setClose] = useState(true)
    const handleKeyDown = () => {
        // asyncDispatch(editChar({ token, id, data: new FormData().append("hit_points",) }))
    }
    return (
        <div className={styles["round__wrap"]}>
            {hp || <Button text={"Set max HP"} onClick={() => setClose(false)} />}
            <div className={styles["single__round"]}>
                {/* Action, Movement, Bonus Action based on class */}
                <Button text={"Hit Die"} />
                <Button text={"Damages"} />
            </div>
            <Button text='Start Round' />
            <Modal close={() => setClose(true)} />
        </div>

    )

}