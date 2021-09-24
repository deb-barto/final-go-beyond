import React, { useEffect, useState } from "react";
import "./tabmenu.css";
import { IoIosArrowDroprightCircle } from '@react-icons/all-files/io/IoIosArrowDroprightCircle'

export default function TabMenu() {
   
const [dados, setDados] = useState([
    { title: " ", imgUrl: " ", thumb: " "},
    { title: " ", imgUrl: " ", thumb: " "},
    { title: " ", imgUrl: " ", thumb: " "},
    { title: " ", imgUrl: " ", thumb: " "},
]);
    
    
  const [indice, setIndice] = useState(0);
  useEffect(() => {
    async function getPhoto() {
      const response = await fetch(
        "https://my-json-server.typicode.com/hana-bananaa/Api-gobeyond/dados"
      );
      const data = await response.json();

      setDados(data);

      console.log(data);
    }

    getPhoto();
  }, []);

  return (
    <main>
    <div className="container-main">

          
    <div className="main-title">
    <h1>{dados[indice].title}</h1>
            <button type="button" className="botao-main">  
                <h4 className="titulo-botao"> 
                Veja Mais  <IoIosArrowDroprightCircle className="icon-arrow"/>
                </h4>
             </button>
    </div>


    <div className="thumb-images">
        
        <button onClick={() => setIndice(0)}>
            <img
                className={indice === 0 ? "active" : "normal"}
                src={dados[0].thumb}
                alt="imagem"
              />
        </button>
        
        <button onClick={() => setIndice(1)}>
              <img
                className={indice === 1 ? "active" : "normal"}
                src={dados[1].thumb}
                alt="imagem"
                 />
        </button>
        
        <button onClick={() => setIndice(2)}>
            <img
                className={indice === 2 ? "active" : "normal"}
                src={dados[2].thumb}
                alt="imagem"
              />
        </button>

        <button onClick={() => setIndice(3)}>
            <img
                className={indice === 3 ? "active" : "normal"}
                src={dados[3].thumb}
                alt="imagem"
              />
        </button>
    </div>


        <div className="banner">
          <div className="container-banner">
            <img src={dados[indice].imgUrl} alt="banner" className="imagemTab" />
          </div>
        </div>

      </div>
    </main>
  );
}