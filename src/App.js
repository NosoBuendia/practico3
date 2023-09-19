import React, { useState } from 'react';
import './App.css';
import Inicio from './componentes/Inicio';
import Botonera from './componentes/Botonera';
import Info from './componentes/Info';
import ResultadoFinal from './componentes/ResultadoFinal';

export default function App() {
  const [nombre, setNombre] = useState(``);
  const [infoPuntaje, setInfoPuntaje] = useState({ usuario: 0, computadora: 0, jugadas: 0 });
  const [infoRonda, setInfoRonda] = useState({ eleccionUsuario: ``, eleccionComputadora: ``, ganadorParcial: `` });
  const [welcome, setWelcome] = useState(true);
  const [enJuego, setEnJuego] = useState(false);
  const [end, setEnd] = useState(false);
  const [ganador, setGanador] = useState(``);

  return (
    <div className="App">
      {welcome && <Inicio nombre={nombre} setNombre={setNombre} setWelcome={setWelcome} setEnJuego={setEnJuego}  />}       
      {enJuego && <div> 
        <Botonera nombre={nombre} infoPuntaje={infoPuntaje} setInfoPuntaje={setInfoPuntaje} infoRonda={infoRonda} setInfoRonda={setInfoRonda} setGanador={setGanador}
        setEnJuego={setEnJuego} setEnd={setEnd} /> 
        <Info nombre={nombre} infoPuntaje={infoPuntaje} infoRonda={infoRonda} />    
      </div>}               
      {end && <ResultadoFinal ganador={ganador} setInfoPuntaje={setInfoPuntaje} setInfoRonda={setInfoRonda} setEnJuego={setEnJuego} setEnd={setEnd} />}
    </div>
  );
}