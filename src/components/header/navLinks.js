import './index.css'
import { motion } from "framer-motion"

const NavLinks = (props) => {

    const animateFrom = {opacity: 0, y:-40}
    const animateTo = {opacity:1, y:0}

    return(
        <ul>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.08}}>
                <a href ="https://www.corebiz.ag/pt/about/">a corebiz</a>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.08}}>
                <a href ="https://www.corebiz.ag/pt/#framework-title">serviços</a>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.08}}>
                <a href ="https://www.corebiz.ag/pt/cases/">cases</a>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.08}}>
                <a href ="https://www.corebiz.ag/pt/contato/">contato</a>
            </motion.li>
        </ul>
    );
}
export default NavLinks;
