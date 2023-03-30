import "./Homepage.scss";
import {useEffect}from"react"
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux";
import { getMe } from "../../redux/slices/userSlice";
const Homepage = () => {
  const token = useSelector((state:RootState)=> state.token.token)
  const moveTo = useNavigate()
  const asyncDispatch = useAppDispatch()
 useEffect(()=> {
  asyncDispatch(getMe(token)).then(res => {
    if(res.type.includes("rejected")) {
      moveTo("/login")
    }
  })
 }, [])
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
