import { useState } from "react";
import CreateNew from "../../components/CreateNew/CreateNew";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Modal from "../../components/Modal/Modal";

import "./Dashboard.scss";

const Dashboard = () => {
  const [showJumbo, setShowJumbo] = useState<boolean>(true)
  const [showModal, setShowModal] = useState<boolean>(false)
  return <div className="dash__wrap">
    {/* {showJumbo && <Jumbotron show={(data:Boolean)=> setShowJumbo(data)}/>} */}
    <CreateNew show={setShowModal}/>
    {showModal && <Modal />}
  </div>;
};
export default Dashboard;
