import React from "react";
import './index.css'
import Logo2 from "../img/logo2.svg"
import { FaFacebook} from '@react-icons/all-files/fa/FaFacebook';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
function Footer() {
 
    return (
        <div className="footer">

        <div className="infos-lista">
        <div className="corebiz">
            <div className="coluna-core">
                <div className="logo-core">
                    <img src={Logo2} className="imagem" alt="Avatar" />
                </div>
                <div className="logo-sub">
                    <p>direitos reservados. corebiz 2021</p>
                </div>
            </div>
             <div className="redes-sociais">
                <div className="a"><FaFacebook/></div>
                <div className="a"><FaInstagram/></div>
                <div className="a"><FaLinkedin/></div>
             </div>
        </div>

         <div className="menu-footer">
             <ul>
                 <li><a href ="/">a corebiz</a></li>
                 <li><a href ="/">serviços</a></li>
                 <li><a href ="/">cases</a></li>
                 <li><a href ="/">contato</a></li>
             </ul>
         </div>
        </div>

         <div className="paises-lista">
             <div className="paises">
                <div className="NomePais">.Brasil</div>
                <div className="Endereço">
                    Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP
                </div>
                <div className="Endereço">
                    R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP
                </div>
             </div>
        

         <div className="paises">
             <div className="NomePais">.Argentina</div>
             <div className="Endereço">
                Soler 5518, 3 Piso C1425BYF Palermo Hollywood CABA
             </div>
         </div>

         <div className="paises">
             <div className="NomePais">.México</div>
             <div className="Endereço">
             Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX
             </div>
         </div>

         <div className="paises">
             <div className="NomePais">.Chile</div>
             <div className="Endereço">
             Roberto del Río 1137, Providencia.
             </div>
         </div>

        </div>
        </div>
         
    );
  }
  
  export default Footer;