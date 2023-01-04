import './App.css';
import React, { useState, useEffect } from "react";

function App() {

  const [equipo, setEquipo] = useState([])

  useEffect(() => {
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await data.json()
    console.log(users)
    setEquipo(users)

  }
  return (
    <div className="App">
      <h1>RECORRIDO DE UNA API CON MAP</h1>
      {equipo.map(item => (
        <li key={item.id}>{item.name} - {item.email}</li>
      ))}
    </div>
  );
}

export default App;
