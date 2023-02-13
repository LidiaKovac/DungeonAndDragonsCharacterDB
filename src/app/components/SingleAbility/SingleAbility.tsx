// import "./SingleAbility.scss"
import { FC } from "react"
interface SingleAbProps {
    char: CharBody,
    abName: string,
    abs: Throws
}
export const SingleAbility: FC<SingleAbProps> = ({ char, abName, abs }) => {
    return (<>
        <div className={Number(char[abName as keyof Throws]!) > 0 ? "bold" : ""}>
            {abName.toUpperCase()}: {Number(abs[abName as keyof Throws]) + (Number(char[abName as keyof Throws]!) || 0)}
            ({abs[abName as keyof Throws]} + {char[abName as keyof Throws]! || 0})
        </div>

    </>)
}