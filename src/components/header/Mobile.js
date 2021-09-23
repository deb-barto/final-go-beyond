import NavLinks from './navLinks'
import { FiMenu} from '@react-icons/all-files/fi/FiMenu';
import "./index.css"
import {useState} from 'react'
import Logo from '../img/logo.svg'

const MobileNav = () => {
    const  [open, setOpen] = useState(false);

    return(
        <nav className= "MobileNavegation">
         <img src={Logo} className="image" alt="Avatar" />
        <FiMenu className="fabars" 
        size='30px' 
        color='white'
        onClick={() => setOpen(!open)}/>
        {open && <NavLinks/>}
        </nav>
    );
}
export default MobileNav;