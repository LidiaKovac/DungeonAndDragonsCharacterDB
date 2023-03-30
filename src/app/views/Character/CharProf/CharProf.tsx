import { useState, useEffect } from "react"
import { calculateProf } from "../../../../utils"
import { BubbleInput } from "../../../components/Input/BubbleInput/BubbleInput"
import Input from "../../../components/Input/Input"
import { RootState, useAppDispatch, useAppSelector } from "../../../redux/"
export const CharProf = () => {
    const asyncDispatch = useAppDispatch()
    const level = useAppSelector((state: RootState) => state.character.selectedChar.char.level)
    const color = useAppSelector((state: RootState) => state.character.color)
    
    useEffect(()=> {
        console.log(level)
    }, [level])
    
    return (
        <form>
            <BubbleInput disabled={true} color={color} side="right" name="Proficiency" type="number" defaultVal={calculateProf(parseInt(level))?.toString()} />
        </form>
    )
}
