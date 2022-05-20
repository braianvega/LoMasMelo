import "./App.css";
import leer from "./Leer";
import Listado from "./Lista.jsx";
import React from 'react'
import ReactDOM from "react-dom";

function App() {
  function Buscar(e) {
    e.preventDefault();
    let VALOR = document.getElementById("VALOR").value;
    let FILTRO = document.getElementById("FILTRO").value;
    const root = ReactDOM.createRoot(document.getElementById("DATOS"));
    root.render(<Listado Datos={leer(FILTRO, VALOR)} />);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>BUSQUEDA</h1>
          <label>Digite el campo de busqueda: </label>
          <input type="text" id="FILTRO"></input>
          <label>Digite el valor: </label>
          <input type="text" id="VALOR"></input>
          <button type="submit" onClick={Buscar}>
            Buscar en Json
          </button>
        </div>
        <div id="DATOS"></div>
      </header>
    </div>
  );
}

export default App;
