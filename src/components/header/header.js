import React from "react";
import './index.css'


function Header() {
 
    return (
          <div className="cards-container">
              <div className="gb1 total">
                <div className="imagem">
                    <a href="https://github.com/hana-bananaa/GoBeyond-Desafio1" className="gb">
                        <h3 className="titlecard">Site Go Beyond - Loja </h3>
                     </a>
                 </div>
              </div>

              <div className="gb2 total">
                <div className="imagem">
                    <a href="https://github.com/hana-bananaa/Go-Beyond-desafio2" className="gb">
                        <h3 className="titlecard">Controle da Vendas </h3>
                    </a>
                </div>
              </div>
              <div className="gb3 total">
              <div className="imagem">
                 <a href="https://github.com/hana-bananaa/go-beyond-desafio3" className="gb">
                     <h3 className="titlecard">Portfólio Pessoal</h3>
                 </a>
              </div>

              </div>
              <div className="gb4 total">
              <div className="imagem">
                 <a href="/" className="gb">
                     <h3 className="titlecard">Desafio Final</h3>
                 </a>
              </div> 
              </div>
        </div>
         
    );
  }
  
  export default Header;