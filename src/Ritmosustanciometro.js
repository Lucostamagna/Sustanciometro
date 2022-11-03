import React from "react";
import styled from "styled-components";
import { carga, aparecerDeAbajo } from "./Animaciones"; // Importamos las animaciones

const Contenedor = styled.div`
  width: 100%;
  height: 36px;
  margin: 6.5px 0;
  animation: ${aparecerDeAbajo} 3.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1.5px solid gainsboro;

  .cantidad {
    z-index: 1;
    font-size: medium;
    font-weight: 520;
  }

  .barra {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    background-color: hsl(${(props) => props.ritmosustancia}, 100%, 50%);
    width: ${(props) => props.ritmosustancia}%;
    animation: ${(props) => carga(props.ritmosustancia)} 3.5s ease-in-out;
    animation-fill-mode: forwards;
  }
`;

const Ritmosustanciometro = ({nombre, ritmosustancia}) => (
  <Contenedor ritmosustancia={ritmosustancia}>
    <div className="cantidad">{nombre}: {ritmosustancia}</div>
    <div className="barra" />
  </Contenedor>
);


export default Ritmosustanciometro;
