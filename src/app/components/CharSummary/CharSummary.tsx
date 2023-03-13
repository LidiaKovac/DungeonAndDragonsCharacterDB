// import "./CharacterSummary.scss"
import { FC, useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../redux"
export const CharacterSummary = () => {
  const char = useSelector((state: RootState) => state.character.newChar)

  return (
    <>
      <div>
        {char.name}, level {char.level}
      </div>
      <div>
        {char.Class?.name}, {char.Race?.name}
      </div>
    </>
  )
}
