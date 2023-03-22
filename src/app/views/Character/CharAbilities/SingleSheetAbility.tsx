import { RootState, useAppDispatch, useAppSelector } from "../../../redux"
import styles from "../Character.module.scss"
import { useState } from "react"
import Input from "../../../components/Input/Input"
import { BubbleInput } from "../../../components/Input/BubbleInput/BubbleInput"

export const SingleSheetAbility = ({ ab }: { ab: string }) => {
  const { char, modifiers } = useAppSelector(
    (state: RootState) => state.character.selectedChar
  )
  return (
    <BubbleInput
      side="right"
      name={ab}
      type="number"
      color="green"
      defaultVal={char[ab]}
      hasSubBubble={true}
      subBubbleVal={modifiers[ab]?.find(
        (abilityMod: SingleMod) => abilityMod.source === "die"
      ).amount}
    />
  )
}
