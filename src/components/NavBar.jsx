import { Outlet, Link } from "react-router-dom";
import Logo from '../pics/Logo.png'
import { Navbar } from "flowbite-react";


export default function NavBar() {
    return (<div className='bg-blue-100'>
       <img id='baeco-icon' src={Logo} alt=''/>
        <div id='navbar-links'>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/advert">Advert</Link>
            <Link to= '/profile'>Profile </Link>
        </div>
    </div>)
}
