import { Link } from "react-router-dom"
import styles from "./Navbar.module.scss"
export const Navbar = () => {
    return <nav className={styles["nav"]}>
        
        <Link to='/logout' className="nav__item">
            Logout
        </Link>
        <Link to='home' className="nav__item">
            Characters
        </Link>
    </nav>
}