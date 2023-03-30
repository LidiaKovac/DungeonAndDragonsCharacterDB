import { FC } from "react"
import { MutatingDots } from "react-loader-spinner"
import { RootState, useAppSelector } from "../../redux"
import "./Loader.scss"
export const Loader = ({ loading }: { loading: boolean }) => {
  return (
    loading ? (
      <div className="loader__main">
        <MutatingDots
          color="rgb(71,230,177, 1)"
          secondaryColor="rgb(71,230,177, 1)"
        />
      </div>
    ) : <></>
  )
}
