import { RootState, useAppDispatch, useAppSelector } from "../../../redux"
import styles from "../Character.module.scss"
import { useState } from "react"
import Input from "../../../components/Input/Input"

export const SingleSheetAbility = ({ ab }: { ab: string }) => {
    const edit = useAppSelector((state:RootState)=> state.character.editMode)
    const { char, modifiers } = useAppSelector(
    (state: RootState) => state.character.selectedChar
  )
  const [hovered, setHovered] = useState<boolean>(false)
  return (
    <div
      className={styles["single__ab"]}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() =>
        setTimeout(() => {
          setHovered(false)
        }, 500)
      }
    >
      {ab}
      <Input className={edit ? styles["input--edit"]: ""} name={ab} type={"number"} defaultVal={char[ab]} disabled={!edit}  />
      {edit || <div className={styles["single__ab-modifier"]}>
        {
          modifiers[ab]?.find(
            (abilityMod: SingleMod) => abilityMod.source === "die"
          ).amount
        }
      </div>}
    </div>
  )
}
