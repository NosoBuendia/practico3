import styled, { createGlobalStyle } from 'styled-components';
import { useState } from 'react';
import MensajeBienvenida from './Mensajebienvenida';
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
const Titulo = styled.h1`
text-align: center;
font-size: 3em;
font-family: Fuente;
`
const Resaltado = styled.span`
color: red;
`
const Jugar = styled.button`
font-size: 1.5em;
background-color: #ffffff;
border: 1px solid #070707;
border-radius: 5px;
padding: 10px;
transition: all .1s;
overflow: hidden;
cursor: pointer;
margin: 10px;
&:hover {    
    box-shadow: #3438349f 2px 0 20px;
}
&:active {
    position: relative;
    top: 7px;   
}
`;



export default function Inicio({ nombre, setNombre, setWelcome, setEnJuego }) {
    const [inputNombre, setInputNombre] = useState(``);
    const [saludar, setSaludar] = useState(false);
    const [check, setCheck] = useState(false);


    function ingresarNombre() {
        if (inputNombre !== ``) {
            setNombre(inputNombre);
            setSaludar(true);
            setCheck(true);
        }
        else {
            alert(`Tenes que ingresar tu nombre`);
        }
    };
    function empezar() {
        if (check) {
            setWelcome(false);
            setEnJuego(true);
        }
        else {
            alert(`Tenes que ingresar tu nombre`);
        }
    };
    return (
        <Div className='ventanaInicial'>
            <GlobalStyle />
            <Titulo>PIEDRA PAPEL <Resaltado>TIJERA</Resaltado>!</Titulo>
            <div className='inputNombre'>
                <input
                    type="text"
                    placeholder="Ingrese su nombre"
                    value={inputNombre}
                    onChange={e => setInputNombre(e.target.value)}
                />
                <button onClick={ingresarNombre}>Ingresar nombre</button>
            </div>
            <Jugar onClick={empezar}>Jugar!</Jugar>
            {saludar && <MensajeBienvenida nombre={nombre} />}

        </Div>
    );
}
