import React, { useState } from "react";

import ReactDOM from "react-dom";
import Ritmosustanciometro from "./Ritmosustanciometro";
import styled from "styled-components";
import "./styles.css";

const Contenedor = styled.div`
  width: 100%;
  max-width: 640px;
`;

function App() {
  const [nombre, setNombre] = useState("");
  const [individuo, setIndividuo] = useState([
    {
      nombre: "Lucia",
      ritmosustancia: 100
    },
    {
      nombre: "Cielo",
      ritmosustancia: 50
    }
  ]);

  function actualizarNombre(e) {
    setNombre(e.target.value);
  }
  async function obtenerRitmosustancia(e) {
    e.preventDefault();

    setIndividuo(
      individuo.concat({
        nombre,
        ritmosustancia
      })
    );
    setNombre("");
  }
  return (
    <Contenedor>
      <h1>Ritmosustanciometro</h1>

      {individuo.map((indi) => (
        <Ritmosustanciometro
          nombre={indi.nombre}
          ritmosustancia={indi.ritmosustancia}
        />
      ))}

      <form onsubmit={obtenerRitmosustancia}>
        <input type="text" value={nombre} onChange={actualizarNombre} />
        <button type="submit">Obtener ritmosustancia</button>
      </form>
    </Contenedor>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
