import { Link } from "react-router-dom"
import "./SingleChar.scss"
export const SingleChar = ({ char }: { char: CharBody }) => {
    return (<>
        <Link to={`/char/${char.id}`} className="single-char__wrap">
            {char.name}, {char.level}
        </Link>
    </>)
}