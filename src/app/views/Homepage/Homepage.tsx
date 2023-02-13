import "./Homepage.scss";
import "../../../styling/Media.scss";
import Shapes1 from "../../../assets/obj1.png";
import Shapes2 from "../../../assets/obj2.png";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="home__wrap bg--light">
      <div className="home__titles">

        <h1>DAAS</h1>
        <h2>
          Dungeons <br /> As A Service
        </h2>
          <img src={Shapes2} className="shapes" alt="shape" />
          <img src={Shapes1} className="shapes" alt="shape" />
      </div>
      <div className="wrap__button">
        <Link to="/home">
          <div className="cta__button">Start now</div>
        </Link>
      </div>
    </div>
  );
};
export default Homepage;
