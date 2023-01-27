import { useState } from "react";
import { Container } from "react-bootstrap";
import * as React from "react";
import { motion } from "framer-motion";
import "./App.css";
import imagen_es from "./assets/WhatsApp Image 2023-01-27 at 8.41.47 AM.jpeg";

function App() {
  const [hardcore, setHardcore] = useState(1);
  const [ishardcore, setishardcore] = useState(false);
  const [mensaje, setmensaje] = useState("");
  
  const testiong = () => {
    setHardcore(Math.round(hardcore + Math.random() * 2));
    setishardcore(true)
    if(hardcore<50) {
      setmensaje("Oh no, Brenda no te ama casi")
    } else if(hardcore>50 && hardcore<100){
      setmensaje("Ella te esta amando un poquito más")
    } else if(hardcore>100 && hardcore<150){
      setmensaje("Ohh my god, Brenda te amaaaaa")
    }else if(hardcore>150 && hardcore<200){
      setmensaje("Ella te adora....")
    }else if(hardcore>200 && hardcore<250){
      setmensaje("Ahhhhhh mucho amor")
    }else if(hardcore>250 && hardcore<300){
      setmensaje("En el aire se respira amor por Montón")
    }else if(hardcore>300 && hardcore<350){
      setmensaje("Brenda está sintiendo mucho amor por ti")
    }else if(hardcore>350 && hardcore<400){
      setmensaje("Love Love Love")
    }else{
      setmensaje("Te informo que Brenda tiene novio, Ella no te puede amar más")
      setHardcore(0)
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
        <h1>Brenda Love
</h1>
      </div>
     
        <p>Presiona clic sobre la imagen para que Brenda te ame</p>
      

      <motion.button
      
        onClick={testiong}
        className="container button"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
      > <img src={imagen_es} alt="" /></motion.button>

      <div id="backgrond" className={ishardcore ? "show":"none"}>
        <p>Brenda te ama un {hardcore}%</p>
      </div>

      <div id="mensaje" className={ishardcore ? "show":"none"}>
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
