import { RootState, useAppSelector } from "../../../redux"
import "./CharAbilities.scss"
export const CharAbilities = () => {
    const char = useAppSelector(
        (state: RootState) => state.character.selectedChar
      )
    
  return <> </>
}
