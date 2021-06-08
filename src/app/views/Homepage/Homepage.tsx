import "./Homepage.scss";
import "../../../styling/Media.scss";
import Shapes1 from "../../../assets/obj1.png";
import Shapes2 from "../../../assets/obj2.png";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="home__wrap bg--light">
      <span>
        <h2>
          Keep your characters' sheets, backgrounds and ideas <br /> all in one
          place
          <img src={Shapes2} className="shapes" alt="shape" />
          <img src={Shapes1} className="shapes" alt="shape" />
        </h2>
        <div className="wrap__button">
          <Link to="/login">
            <div className="cta__button">Start now</div>
          </Link>
        </div>
      </span>
    </div>
  );
};
export default Homepage;
