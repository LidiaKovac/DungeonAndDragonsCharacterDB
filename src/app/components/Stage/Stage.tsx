import { FC, Component, ReactElement } from "react"

// import "./Stage.scss"
interface StageProps {
  stageNum: number,
  comps: ReactElement[]
}
export const Stage: FC<StageProps> = ({ stageNum, comps }) => {
  return <> <h2>Stage: {stageNum}</h2> {comps} </>
}
