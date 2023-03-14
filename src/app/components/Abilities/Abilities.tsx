// import "./Abilities.scss"
import { SingleAbility } from "../SingleAbility/SingleAbility"
import { die } from "../../../utils"
import { RootState, useAppDispatch } from "../../redux"
import { editChar, setThrows } from "../../redux/slices/charSlice"
import Button from "../Button/Button"
import { useSelector } from "react-redux"

export const Abilities = () => {
    const dispatch = useAppDispatch()
    const token = useSelector((state:RootState)=> state.token.token)
    const selected = useSelector((state:RootState)=> state.character.newChar)
    const throws = useSelector((state:RootState)=> state.character.newThrows)
    const abs = ["str", "dex", "con", "wis", "int"]

    const saveAbilities = async () => { 
        const data = new FormData()
        for (const ab of abs) {
            data.append(ab, throws[ab])
        }
        dispatch(editChar({token, id: selected.id, data}))

    }

    const throwAllDice = () => {
        const allThrows = {} as Throws
        for (const ability of abs) {
            let res = die(20) as number
            allThrows[ability] = res
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
