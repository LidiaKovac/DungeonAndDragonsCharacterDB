import { RootState, useAppDispatch, useAppSelector } from "../../../redux"
import styles from "../Character.module.scss"
import {FormEvent} from "react"
import { SingleSheetAbility } from "./SingleSheetAbility"
import { editChar, setEdit } from "../../../redux/slices/charSlice"
import Button from "../../../components/Button/Button"
import { FaDiceD20 } from "react-icons/fa"
import {abs} from "../../../../utils"
export const CharAbilities = () => {

  const asyncDispatch = useAppDispatch() 
  const token = useAppSelector((state:RootState)=> state.token.token) 
  const id = useAppSelector((state:RootState)=> state.character.selectedChar.char.id) 

  const handleSubmit = async(ev:FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    let data = new FormData(ev.currentTarget)
    await asyncDispatch(editChar({token, id, data}))
    asyncDispatch(setEdit())
  }
  return (
    <form className={styles['char__abilities'] } onSubmit={handleSubmit}>
      {abs.map((ab) => (
        <SingleSheetAbility ab={ab}/> 
      ))}

      <input type="submit" value="" style={{display: "none"}} />
    </form>
  )
}
