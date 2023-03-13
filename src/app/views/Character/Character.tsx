import { useEffect } from "react"
import { RootState, useAppDispatch, useAppSelector } from "../../redux"
import { useNavigate, useParams } from "react-router-dom"
import { fetchCharById } from "../../redux/slices/charSlice"
import { getMe } from "../../redux/slices/userSlice"
import { CharacterHeader } from "./CharHeader/CharHeader"
import { CharAbilities } from "./CharHeader/CharAbilities"
export const Character = () => {
  const asyncDispatch = useAppDispatch()
  const moveTo = useNavigate()
  const token = useAppSelector((state: RootState) => state.token.token)
  // const error = useAppSelector((state: RootState) => state.token.error)
  

  const { id } = useParams()
  useEffect(() => {
    asyncDispatch(getMe(token))
      .then((res) => {
        console.log(res)
        if (res.type.includes("rejected")) moveTo("/login")
      })
      .then(() => {
        console.log(token)
        asyncDispatch(fetchCharById({ token, id: id! }))
      })
      //eslint-disable-next-line
  }, [])
  return (
    <>
      <CharacterHeader/>
      <div className="sheet__main">
        <CharAbilities/>
      </div>
    </>
  )
}
