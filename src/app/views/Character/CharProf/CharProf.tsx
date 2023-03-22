import { calculateProf } from "../../../../utils"
import { BubbleInput } from "../../../components/Input/BubbleInput/BubbleInput"
import Input from "../../../components/Input/Input"
import { RootState, useAppDispatch, useAppSelector } from "../../../redux/"
export const CharProf = () => {
    const asyncDispatch = useAppDispatch()
    const { char:{level} } = useAppSelector((state: RootState) => state.character.selectedChar)

    return (
        <form>
            <BubbleInput disabled={true} color="blue" side="right" name="Proficiency" type="number" defaultVal={String(calculateProf(level))} />
        </form>
    )
}
