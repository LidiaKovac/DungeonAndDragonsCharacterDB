// import "./SingleAbility.scss"
import { FC } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../redux"
interface SingleAbProps {
    abName: string,
}
export const SingleAbility: FC<SingleAbProps> = ({ abName }) => {
    const char = useSelector((state:RootState)=> state.character.newChar)

    return (<>
        <div className={Number(char[abName as keyof Throws]!) > 0 ? "bold" : ""}>
            {abName.toUpperCase()}: {Number(char[abName as keyof Throws]) + (Number(char[abName as keyof Throws]!) || 0)}
            ({char[abName as keyof Throws]} + {char[abName as keyof Throws]! || 0})
        </div>

    </>)
}