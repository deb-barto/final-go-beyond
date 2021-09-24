import '../index.css'
import { motion } from "framer-motion"

const NavLinksMobile = (props) => {

    const animateFrom = {opacity: 0, y:-40}
    const animateTo = {opacity:1, y:120}

    return(
        <ul>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.08}}>
                <a href ="/">a corebiz</a>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.08}}>
                <a href ="/">serviços</a>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.08}}>
                <a href ="/">cases</a>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.08}}>
                <a href ="/">contato</a>
            </motion.li>
        </ul>
    );
}
export default NavLinksMobile;
