import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import CreateNew from "../../components/CreateNew/CreateNew"
import Modal from "../../components/Modal/Modal"
import { SingleChar } from "../../components/SingleChar/SingleChar"
import { RootState, useAppDispatch, useAppSelector } from "../../redux"
import { fetchAllChars } from "../../redux/slices/charSlice"
import { getMe } from "../../redux/slices/userSlice"

import "./Dashboard.scss"

const Dashboard = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const moveTo = useNavigate()
  const token = useAppSelector((state: RootState) => state.token.token)
  const chars:CharBody[] = useAppSelector((state: RootState) => state.character.myChars)


  const asyncDispatch = useAppDispatch()

  useEffect(() => {

    asyncDispatch(getMe(token)).then(res => {
      if (res.type.includes("rejected")) moveTo("/login")
    }).then(() => {
      
      asyncDispatch(fetchAllChars(token))
    })
    //eslint-disable-next-line
  }, [])


  return (
    <div className="dash__wrap">
      {/* {showJumbo && <Jumbotron show={(data:Boolean)=> setShowJumbo(data)}/>} */}

      <CreateNew show={() => setShowModal(true)} />
      {chars.map((char) => {
        return <SingleChar char={char} />
      })} 
      {showModal && <Modal close={() => setShowModal(false)} />}
    </div>
  )
}
export default Dashboard
