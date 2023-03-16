import { useSelector } from "react-redux"
import { useState } from "react"
import { RootState, useAppDispatch, useAppSelector } from "../../../../redux"
import Input from "../../../../components/Input/Input"
import styles from "./Skills.module.scss"
export const Skills = () => {
    const asyncDispatch = useAppDispatch()
    const { char, modifiers, skills } = useAppSelector((state: RootState) => state.character.selectedChar)
    const [charSkills, setCharSkills] = useState(char.Class?.skillProf?.map((sk: Skill) => sk.name))
    return <>
        <form className={styles["skill__form"]}>
            You still have {char.Class.skillProfNum} skills to add to your profs
            {skills?.map((sk: Skill) => <label className={charSkills.includes(sk.name) ? styles["skill__prof"] : ""}><input type='checkbox' name={sk.name} /> <div> {sk.ab.toUpperCase()} </div> {sk.name} </label>)}
        </form>
    </>
}

//prop da aggiungere nel be: 
//skillProfsLeft: number
//iniziativa 
//hp
//deathSaves
//description 
//passive perception
//db for session entries