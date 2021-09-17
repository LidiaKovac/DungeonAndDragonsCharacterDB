import { useState } from "react";
import { useParams } from "react-router";
import CreateNew from "../../components/CreateNew/CreateNew";
//import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Modal from "../../components/Modal/Modal";

import "./Dashboard.scss";
interface Params {
  id: string
}
const Dashboard = () => {
  // const [showJumbo, setShowJumbo] = useState<boolean>(true)
  const [showModal, setShowModal] = useState<boolean>(false)
  const {id} = useParams<Params>()
  console.log(id)
  return <div className="dash__wrap">
    {/* {showJumbo && <Jumbotron show={(data:Boolean)=> setShowJumbo(data)}/>} */}
    <CreateNew show={()=>setShowModal(true)}/>
    {showModal && <Modal type="new" close={()=>setShowModal(false)} />}
  </div>;
};
export default Dashboard;