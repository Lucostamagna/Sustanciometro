import React, { useState } from "react";

import ReactDOM from "react-dom";
import Ritmosustanciometro from "./Ritmosustanciometro";
import styled from "styled-components";

import "./styles.css";

const Contenedor = styled.div`
  width: 100%;
  max-width: 640px;
  }
`;


function App() {
  const [nombre, setNombre] = useState("");
  const [individuo, setIndividuo] = useState([
    {
      nombre: "Conseguir mi primer empleo IT",
      ritmosustancia: 100
    },
   {
    nombre:"Seguir postulandome a vacantes (junior con  años de experiencia)",
    ritmosustancia:50
   },
   {
    nombre:"Aprender nuevos lenguajes de programación",
    ritmosustancia:90
   },
   {
    nombre:"Ser encontrada por recruiters",
    ritmosustancia:70
   },
   {
    nombre:"No obtener respuesta de mis postulaciones " ,
    ritmosustancia:20 
   },
   
   {
    nombre:"¡Una oportunidad para cada junior!",
    ritmosustancia:100
   },
   
  ]);

 

  return (
    <Contenedor>
      <h2>Lunes con ganas de ...</h2>

      {individuo.map((indi) => (
        <Ritmosustanciometro
          nombre={indi.nombre}
          ritmosustancia={indi.ritmosustancia}
        />
      ))}
    </Contenedor>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);










