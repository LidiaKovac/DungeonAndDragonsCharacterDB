// import "./Abilities.scss"
import { SingleAbility } from "../SingleAbility/SingleAbility"
import { die } from "../../../utils"
import { useAppDispatch } from "../../redux"
import { setThrows } from "../../redux/slices/charSlice"

export const Abilities = () => {
    const dispatch = useAppDispatch()
    const abs = ["str", "dex", "con", "wis", "int"]

    const saveAbilities = async () => { }

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
            <button onClick={() => throwAllDice()}>Throw dices</button>

            <button onClick={() => saveAbilities()}>Accept</button>

            <button onClick={() => throwAllDice()}>Retry</button>
        </>
    )
}