import { useEffect } from "react"
import { RootState, useAppDispatch, useAppSelector } from "../../redux"
import { useNavigate, useParams } from "react-router-dom"
import { fetchCharById } from "../../redux/slices/charSlice"
import { getMe } from "../../redux/slices/userSlice"
import { CharacterHeader } from "./CharHeader/CharHeader"
import { CharAbilities } from "./CharAbilities/CharAbilities"
import { useSelector } from "react-redux"
import styles from "./Character.module.scss"
import { CharSkills } from "./CharSkills/Skills/Skills"
import Button from "../../components/Button/Button"
import { FaCampground, FaDiceD20, FaDiceD6 } from "react-icons/fa"
import { CharDescription } from "./CharDescription/CharDescription"
import { RiZzzLine } from "react-icons/ri"
export const Character = () => {
  const asyncDispatch = useAppDispatch()
  const moveTo = useNavigate()
  const loading = useSelector((state: RootState) => state.character.loading)
  const token = useAppSelector((state: RootState) => state.token.token)
  // const error = useAppSelector((state: RootState) => state.token.error)

  const { id } = useParams()
  useEffect(() => {
    asyncDispatch(getMe(token))
      .then((res) => {
        if (res.type.includes("rejected")) moveTo("/login")
      })
      .then(() => {
        asyncDispatch(fetchCharById({ token, id: id! }))
      })
    //eslint-disable-next-line
  }, [])
  return (
    loading || (
      <>
        <div className={styles["character__wrap"]}>

          <CharacterHeader />
          <div className={styles["char-sheet__main"]}>
            <div className={styles["char__body-column"]}>
            <CharAbilities />
            <Button disabled={true} text={<span>Long rest <FaCampground/></span>}/>
            <Button disabled={true} text={<span>Short rest <RiZzzLine/></span>}/>

            </div>
            <CharSkills />
            <CharDescription/>
          </div>
        </div>
      </>
    )
  )
}
