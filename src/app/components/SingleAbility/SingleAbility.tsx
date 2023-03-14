// import "./SingleAbility.scss"
import { FC } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../redux"
interface SingleAbProps {
    abName: string,
}
export const SingleAbility: FC<SingleAbProps> = ({ abName }) => {
    const char = useSelector((state: RootState) => state.character.newChar)
    const ab = useSelector((state: RootState) => state.character.newThrows[abName])
    return (<>
        <div className={Number(char[abName]!) > 0 ? "bold" : ""}>
            {abName.toUpperCase()}: {Number(char[abName]) + (Number(ab) || 0)}
            ({char[abName]} + {ab || 0})
        </div>

    </>)
}