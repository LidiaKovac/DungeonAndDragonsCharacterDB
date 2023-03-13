import { RootState, useAppSelector } from "../../../redux"
export const CharAbilities = () => {
  const char = useAppSelector(
    (state: RootState) => state.character.selectedChar
  )

  return <> </>
}
