import { Outlet, Link } from "react-router-dom";
import Logo from "../../src/public/pics/Logo.png"


export default function NavBar() {
    return <>
       <img id='baeco-icon' src={Logo} alt=''/>
        <div id='navbar-links'>
            <Link to="/">Home</Link>
            <Link to="/SearchPage">Search</Link>
            <Link to= '/Blog'> Blog </Link>
            <Link to="/contact">Profile</Link>
        </div>
    </>
}