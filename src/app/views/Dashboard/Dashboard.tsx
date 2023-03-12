import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import CreateNew from "../../components/CreateNew/CreateNew"
import Modal from "../../components/Modal/Modal"
import { reduxState, useAppDispatch, useAppSelector } from "../../redux"
// import { emptyError } from "../../redux/slices/tokenSlice";
import { getMe } from "../../redux/slices/userSlice"

import "./Dashboard.scss"

const Dashboard = () => {
  const [showJumbo, setShowJumbo] = useState<boolean>(true)
  const [showModal, setShowModal] = useState<boolean>(false)
  const moveTo = useNavigate()
  const token = useAppSelector((state: reduxState) => state.token.token)
  const error = useAppSelector((state: reduxState) => state.token.error)

  const asyncDispatch = useAppDispatch()
  const dispatch = useDispatch()

  useEffect(() => {
    asyncDispatch(getMe(token)).then(res => {
      console.log(res)
      if (res.type.includes("rejected")) moveTo("/login")
    })

  }, [])


  return (
    <div className="dash__wrap">
      {/* {showJumbo && <Jumbotron show={(data:Boolean)=> setShowJumbo(data)}/>} */}
      <CreateNew show={() => setShowModal(true)} />
      {showModal && <Modal close={() => setShowModal(false)} />}
    </div>
  )
}
export default Dashboard
