// import "./Abilities.scss"
import { FC, useState } from "react"
import { SingleAbility } from "../SingleAbility/SingleAbility"
import { die } from "../../../utils";

interface AbilitiesProps {
    char: CharBody
}
export const Abilities: FC<AbilitiesProps> = ({ char }) => {


    const [abs, setAbs] = useState<Throws>({
        str: 0,
        dex: 0,
        cos: 0,
        wis: 0,
        int: 0
    })

    const saveAbilities = async () => {

    }

    const throwAbilityDice = () => {

        for (const ability in abs) {

            let res = die(20) as number
            if (Object.prototype.hasOwnProperty.call(abs, ability)) {
                setAbs(prev => {
                    return {
                        ...prev,
                        [ability as keyof Throws]: res
                    }
                })
            }
        }
    }
    return (<>
        {
            Object.keys(abs).map(key => {
                return <SingleAbility char={char} abName={key} abs={abs} />
            })
        }
        <button onClick={() => throwAbilityDice()}>Throw dices</button>


        <button onClick={() => saveAbilities()}>Accept</button>

        <button onClick={() => throwAbilityDice()}>Retry</button>
    </>)
}