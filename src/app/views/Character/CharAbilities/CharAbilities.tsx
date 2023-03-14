import { RootState, useAppSelector } from "../../../redux"
import styles from "../Character.module.scss"
import { SingleSheetAbility } from "./SingleSheetAbility"

export const CharAbilities = () => {
  const abs = ["cha", "str", "con", "dex", "int", "wis"]

  return (
    <form className={styles['char__abilities']}>
      {abs.map((ab) => (
        <SingleSheetAbility ab={ab}/> 
      ))}
    </form>
  )
}
