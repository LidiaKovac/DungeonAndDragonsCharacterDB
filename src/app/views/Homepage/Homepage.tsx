import "./Homepage.scss";

import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="home__wrap bg--light">
      <div className="home__titles">

        <h1>DAAS</h1>
        <h2>
          Dungeons <br /> As A Service
        </h2>
          <img src="/assets/obj1.png" className="shapes" alt="shape" />
          <img src="/assets/obj2.png" className="shapes" alt="shape" />
      </div>
      <div className="wrap__button">
        <Link to="/login">
          <div className="cta__button">Start now</div>
        </Link>
      </div>
    </div>
  );
};
export default Homepage;
