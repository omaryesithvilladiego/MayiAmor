import { useState } from "react";
import { Container } from "react-bootstrap";
import * as React from "react";
import { motion } from "framer-motion";
import "./App.css";
import imagen_es from "./assets/mayi.png";

function App() {
  const [hardcore, setHardcore] = useState(1);
  const [ishardcore, setishardcore] = useState(false);
  const [mensaje, setmensaje] = useState("");
  
  const testiong = () => {
    setHardcore(Math.round(hardcore + Math.random() * 100));
    setishardcore(true)
    if(hardcore>150) {
      setmensaje("Oh my god, Mayi te ama muchoooooo!! ")
    } else if(hardcore<150){
      setmensaje("Oww no, Mayi no te ama mucho")
    }
  };
  const showhard = () => {
    console.log(hardcore);
  };

  const restart = () => {
    setHardcore(0)
    setishardcore(false)
  }

 

  return (
    <div className="App">
     
      <div>
        <h1>Mayi's love calculator
</h1>
      </div>
     
        <p>Presiona clic sobre la imagen para descubrir cuánto te ama Mayi</p>
      

      <motion.button
      
        onClick={testiong}
        className="container button"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
      > <img src={imagen_es} alt="" /></motion.button>

      <div id="backgrond" className={ishardcore ? "show":"none"}>
        <p>Mayi te ama un {hardcore}%</p>
      </div>

      <div className={ishardcore ? "show":"none"}>
        <p className="mensaje">{mensaje}</p>
      </div>

      <div className={ishardcore ? "show":"none"}>
        <button onClick={restart}>Restart</button>
      </div>

      

    
     
    </div>
  );
}

export default App;

// import * as React from "react";
// import { motion } from "framer-motion";
