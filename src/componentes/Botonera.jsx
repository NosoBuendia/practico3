import styled from 'styled-components';
import React, { useEffect } from 'react';
import Botoncito from "./Botoncito";
import Piedra from "./Piedra.png";
import Papel from "./Papel.png";
import Tijera from "./Tijera.png";

const Div = styled.div`
display: flex;
`;

export default function Botonera({ nombre, infoPuntaje, setInfoPuntaje, setInfoRonda, setEnJuego, setEnd, setGanador}) {
    
    function hayGanador() {
      setEnJuego(false);
      setEnd(true);      
    };
    function DeterminarGanador() {
        if (infoPuntaje.usuario === 3) {
            setGanador(nombre);
            hayGanador();            
        }
        else if (infoPuntaje.computadora === 3) {
            setGanador("Computadora");
            hayGanador();            
        }
    };
    useEffect(() => { DeterminarGanador() }, [infoPuntaje]);
    return (
        <Div>
            <Botoncito eleccion="piedra" infoPuntaje={infoPuntaje} setInfoPuntaje={setInfoPuntaje} setInfoRonda={setInfoRonda} nombre={nombre} imagen={Piedra} />
            <Botoncito eleccion="papel" infoPuntaje={infoPuntaje} setInfoPuntaje={setInfoPuntaje} setInfoRonda={setInfoRonda} nombre={nombre} imagen={Papel} />
            <Botoncito eleccion="tijera" infoPuntaje={infoPuntaje} setInfoPuntaje={setInfoPuntaje} setInfoRonda={setInfoRonda} nombre={nombre} imagen={Tijera} />            
        </Div>
    );
}

