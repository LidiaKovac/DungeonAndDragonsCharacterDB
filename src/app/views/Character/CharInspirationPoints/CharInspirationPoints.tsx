import { BubbleInput } from "../../../components/Input/BubbleInput/BubbleInput"
import Input from "../../../components/Input/Input"
import { RootState, useAppDispatch, useAppSelector } from "../../../redux/"
export const CharInspoPoint = () => {
    const asyncDispatch = useAppDispatch()

    return (
        <form>
            <BubbleInput color="blue" side="left" name="Inspiration" type="number" defaultVal="0" />
        </form>
    )
}
