import NavLinks from "./navLinks"
import "./index.css"
import Logo from "../img/logo.svg"
const Navegation = () => {
    return(
        <nav className= "navegation">
        <img src={Logo} className="image" alt="Avatar" />
        <NavLinks/>
        </nav>
    );
}
export default Navegation;