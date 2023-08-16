// import "./Abilities.scss"
import { SingleAbility } from "./SingleAbility/SingleAbility"
import { die } from "../../../utils"
import { RootState, useAppDispatch } from "../../redux"
import { editChar, setThrows } from "../../redux/slices/charSlice"
import Button from "../Button/Button"
import { useSelector } from "react-redux"

export const Abilities = () => {
    const dispatch = useAppDispatch()
    const token = useSelector((state: RootState) => state.token.token)
    const selected = useSelector((state: RootState) => state.character.newChar)
    const throws = useSelector((state: RootState) => state.character.newThrows)
    const abs = ["str", "dex", "con", "wis", "int", "cha"]

    const saveAbilities = async () => {
        const data = new FormData()
        for (const ab of abs) {
            data.append(ab, throws[ab].toString())
        }
        dispatch(editChar({ token, id: selected.id, data }))

    }

    const throwAllDice = () => {
        const allThrows = {} as Throws
        for (const ability of abs) {
            let tempThrows: Array<number> = []
            let tot = 0
            for (let i = 0; i < 4; i++) {
                tempThrows.push(die(6))
            }
            let min = Math.min(...tempThrows)
            
            let indexOfMin = tempThrows.findIndex(num => num === min)
            if (indexOfMin >= 0) {
                tempThrows.splice(indexOfMin, 1)
            }
            tot = tempThrows.reduce((acc, curr) => (acc + curr), 0)
            // let res = die(6) as number
            console.log(tempThrows);

            allThrows[ability] = tot
        }
        dispatch(setThrows(allThrows))
    }


    return (
        <>
            {abs.map((ab) => {
                return <SingleAbility abName={ab} />
            })}
            <Button text={"Throw Dices"} onClick={() => throwAllDice()} />
            <Button text={"Accept"} onClick={() => saveAbilities()} />
            <Button text={"Retry"} onClick={() => throwAllDice()} />
        </>
    )
}
