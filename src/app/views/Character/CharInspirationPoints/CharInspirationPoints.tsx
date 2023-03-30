import { BubbleInput } from "../../../components/Input/BubbleInput/BubbleInput"
import Input from "../../../components/Input/Input"
import { RootState, useAppDispatch, useAppSelector } from "../../../redux/"
export const CharInspoPoint = () => {
    const asyncDispatch = useAppDispatch()
    const color = useAppSelector((state: RootState) => state.character.color)

    return (
        <form>
            <BubbleInput color={color} side="left" name="Inspiration" type="number" defaultVal="0" />
        </form>
    )
}
