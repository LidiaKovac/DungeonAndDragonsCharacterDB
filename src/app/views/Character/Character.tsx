import { useEffect, useState } from "react"
import { RootState, useAppDispatch, useAppSelector } from "../../redux"
import { useNavigate, useParams } from "react-router-dom"
import { fetchCharById, setColor } from "../../redux/slices/charSlice"
import { getMe } from "../../redux/slices/userSlice"
import { CharacterHeader } from "./CharHeader/CharHeader"
import { CharAbilities } from "./CharAbilities/CharAbilities"
import { useSelector } from "react-redux"
import styles from "./Character.module.scss"
import { CharSkills } from "./CharSkills/Skills"
import Button from "../../components/Button/Button"
import { FaCampground, FaDiceD20, FaDiceD6 } from "react-icons/fa"
import { CharDescription } from "./CharDescription/CharDescription"
import { RiZzzLine } from "react-icons/ri"
import { CharInspoPoint } from "./CharInspirationPoints/CharInspirationPoints"
import { CharProf } from "./CharProf/CharProf"
import { Loader } from "../../components/Loader/Loader"
import { CharAC } from "./CharAC/CharAC"
import { CharRoundProp } from "./CharRoundProp/CharRoundProp"
import { TbBarrierBlock } from "react-icons/tb"
import { CharHP } from "./CharHP/CharHP"
import { Round } from "../Game/Round/Round"
export const Character = () => {
  const asyncDispatch = useAppDispatch()
  const moveTo = useNavigate()
  const loading = useSelector((state: RootState) => state.character.loading)
  const token = useAppSelector((state: RootState) => state.token.token)
  const color = useAppSelector((state: RootState) => state.character.color)
  const { char: { Race }, modifiers } = useAppSelector((state: RootState) => state.character.selectedChar)

  // const error = useAppSelector((state: RootState) => state.token.error)

  const { id } = useParams()
  useEffect(() => {
    console.log("ou")
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
    <>
      <Loader loading={loading} />

      <div className={styles["character__wrap"]}>
        <div className={styles["color__picker-group"]}>
          <h4>Pick a color</h4>
          <div
            onClick={() => asyncDispatch(setColor("blue"))}
            className={`${styles["color__picker"]} ${styles["bg--blue"]} ${color === "blue" ? styles["outline--blue-darker"] : ""}`}

          ></div>
          <div
            onClick={() => asyncDispatch(setColor("orange"))}
            className={`${styles["color__picker"]} ${styles["bg--orange"]} ${color === "orange" ? styles["outline--orange-darker"] : ""}`}
          ></div>
          <div
            onClick={() => asyncDispatch(setColor("pink"))}
            className={`${styles["color__picker"]} ${styles["bg--pink"]} ${color === "pink" ? styles["outline--pink-darker"] : ""}`}
          ></div>
          <div
            onClick={() => asyncDispatch(setColor("green"))}
            className={`${styles["color__picker"]} ${styles["bg--green"]} ${color === "green" ? styles["outline--green-darker"] : ""}`}
          ></div>
        </div>

        <CharacterHeader />
        {/* add choose color option here */}
        <div className={styles["char-sheet__main"]}>
          <div className={styles["char__body-column"]}>
            <CharAbilities />
            <div className={styles["char__rest-btns"]}>
              <Button
                disabled={true}
                text={
                  <span>
                    Long rest <FaCampground />
                  </span>
                }
              />
              <Button
                disabled={true}
                text={
                  <span>
                    Short rest <RiZzzLine />
                  </span>
                }
              />
            </div>
          </div>
          <div className={styles["char__body-second-col"]}>
            <CharInspoPoint />
            <CharProf />
            <CharSkills />
          </div>
          <div className={styles["char__body-third-col"]}>
            <div className={styles["char__body-ac-init-speed"]}>

            <CharAC />
            <CharRoundProp name="Initiative" value={12} />
            <CharRoundProp name="Speed" value={<TbBarrierBlock />} />
            </div>
              <CharHP/>
              <Round/>
          </div>
          <div className={styles["char__body-fourth-col"]}>
            <CharDescription />
          </div>
        </div>
      </div>
    </>
  )
}
