import { useSelector } from "react-redux"
import { ChangeEvent, useState } from "react"
import { RootState, useAppDispatch, useAppSelector } from "../../../../redux"
import Input from "../../../../components/Input/Input"
import styles from "./Skills.module.scss"
import { addSkill } from "../../../../redux/slices/charSlice"
export const CharSkills = () => {
    const asyncDispatch = useAppDispatch()
    const { char, modifiers, skills } = useAppSelector((state: RootState) => state.character.selectedChar)
    const token = useAppSelector((state: RootState) => state.token.token)
    const [charSkills, setCharSkills] = useState(char.Skills?.map((sk: Skill) => sk.name))
    const [possibleCharSkillProf] = useState(char.Class?.skillProf.map((sk: Skill) => sk.name))
    const chooseSkill = (name: string) => {
        if (possibleCharSkillProf.includes(name)) {
            asyncDispatch(addSkill({ token, id: char.id, skillName: name }))
        }
    }
    return <>
        <form className={styles["skill__form"]}>
            You still have {char.skillProfLeft} skills to add to your profs
            {skills?.map((sk: Skill) => <label className={possibleCharSkillProf.includes(sk.name) ? styles["skill__prof"] : ""}><input disabled={!possibleCharSkillProf.includes(sk.name) || char.skillProfLeft <= 0} checked={charSkills.includes(sk.name)} onChange={() => chooseSkill(sk.name)} type='checkbox' name={sk.name} /> <div className={styles["skill__ab"]}> {sk.ab.toUpperCase()} </div> <div className={styles["skill__name"]}>{sk.name} </div>  </label>)}
        </form>
    </>
}

