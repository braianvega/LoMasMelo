import React from "react";

function Lista(props) {
    const Datos = props.Datos;
    const listItems = Datos.map((Datos) =>
      <li>{Datos}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
export default Lista;
