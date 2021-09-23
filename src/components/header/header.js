import React from "react";
import './index.css'
import MobileNav from "./Mobile"
import Navegation from "./navegation"

function Header() {
 
    return (
        <div className="header">
          <div className="NavBar">
             <MobileNav/>
             <Navegation/>
        </div>
        </div>
         
    );
  }
  
  export default Header;