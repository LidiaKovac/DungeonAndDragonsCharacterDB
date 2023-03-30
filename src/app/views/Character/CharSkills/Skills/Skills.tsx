import { useSelector } from "react-redux"
import { ChangeEvent, useEffect, useState } from "react"
import { RootState, useAppDispatch, useAppSelector } from "../../../../redux"
import Input from "../../../../components/Input/Input"
import styles from "./Skills.module.scss"
import { addSkill } from "../../../../redux/slices/charSlice"
export const CharSkills = () => {
  const asyncDispatch = useAppDispatch()
  const { modifiers, Skills, Class, id, skillProfLeft } = useAppSelector(
    (state: RootState) => state.character.selectedChar.char
  )
  const skills = useAppSelector(
    (state: RootState) => state.character.selectedChar.skills
  )
  const color = useAppSelector((state: RootState) => state.character.color)

  const token = useAppSelector((state: RootState) => state.token.token)
  const [charSkills, setSkills] = useState(Skills?.map((sk: Skill) => sk.name))
  const [possibleCharSkillProf, setPossibleProf] = useState(
    Class?.skillProf.map((sk: Skill) => sk.name)
  )
  const chooseSkill = (name: string) => {
    if (possibleCharSkillProf?.includes(name)) {
      asyncDispatch(addSkill({ token, id: id, skillName: name }))
    }
  }
  useEffect(() => {
    setPossibleProf(Class?.skillProf.map((sk: Skill) => sk.name))
    setSkills(Skills?.map((sk: Skill) => sk.name))
  }, [Class, Skills])
  return (
    <>
      <form className={styles["skill__form"]}>
        {skillProfLeft > 0 && `You still have ${skillProfLeft} skills to add to your profs`}
        
        {skills?.map((sk: Skill) => (
          <label
            className={
              skillProfLeft > 0
                ? possibleCharSkillProf?.includes(sk.name)
                  ? styles[`skill__prof--${color}`]
                  : ""
                : charSkills?.includes(sk.name)
                ? styles[`skill__prof--${color}`]
                : ""
            }
          >
            <input
              disabled={
                !possibleCharSkillProf?.includes(sk.name) || skillProfLeft <= 0
              }
              checked={charSkills?.includes(sk.name)}
              onChange={() => chooseSkill(sk.name)}
              type="checkbox"
              name={sk.name}
            />
            <div className={styles[`skill__ab--${color}`]}>
              {" "}
              {sk.ab.toUpperCase()}{" "}
            </div>
            <div className={styles["skill__name"]}>{sk.name} </div>
          </label>
        ))}
      </form>
    </>
  )
}
