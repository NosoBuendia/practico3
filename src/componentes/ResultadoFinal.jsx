import styled, { createGlobalStyle } from 'styled-components';
import Fuente from './Crazy.ttf';


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Fuente'; 
    src: url(${Fuente}) format('truetype');
  }
`;
const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Boton = styled.button`
font-size: 1.5em;
background-color: #ffffff;
border: 1px solid #070707;
border-radius: 5px;
padding: 10px;
transition: all .1s;
overflow: hidden;
cursor: pointer;
&:hover {    
    box-shadow: #3438349f 2px 0 20px;
}
&:active {
    position: relative;
    top: 7px;   
}
`
const Ganador = styled.h1`
color: red;
font-size: 5em;
padding: 50px;
font-family: Fuente;
`

export default function ResultadoFinal({ ganador, setInfoPuntaje, setInfoRonda, setEnJuego, setEnd }) {
    function reset() {
        setInfoPuntaje({ usuario: 0, computadora: 0, jugadas: 0 });
        setInfoRonda({ eleccionUsuario: ``, eleccionComputadora: ``, ganadorParcial: `` });
        setEnJuego(true);
        setEnd(false);
    }
    return (
        <Div className="mensajeFinal">
            <GlobalStyle />
            <Ganador>{ganador === "Computadora" ? "PERDISTE!" : "GANASTE!"}</Ganador>
            <Boton onClick={reset} >Jugar de nuevo...</Boton>            
        </Div>
    );
}
