import { useEffect } from "react"
import { RootState, useAppDispatch, useAppSelector } from "../../redux"
import { useNavigate, useParams } from "react-router-dom"
import { fetchCharById } from "../../redux/slices/charSlice"
import { getMe } from "../../redux/slices/userSlice"
import { CharacterHeader } from "./CharHeader/CharHeader"
import { CharAbilities } from "./CharAbilities/CharAbilities"
import { useSelector } from "react-redux"
import styles from "./Character.module.scss"
import { Skills } from "./CharSkills/Skills/Skills"
import Button from "../../components/Button/Button"
import { FaDiceD20, FaDiceD6 } from "react-icons/fa"
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
            <CharAbilities />
            <Skills />
          </div>
        </div>
      </>
    )
  )
}
