import styled from 'styled-components';

const Div = styled.div`
display: flex; 
justify-content: center;
padding: 10px;
flex-direction: column;;
`
const Texto = styled.p`
margin: 10px;
text-align: center;
font-size: 1.5em;
`
const Resaltado = styled(Texto)`
color: red;
font-size: 2.5em;
`

export default function Info({ nombre, infoPuntaje, infoRonda }) {
    return (
        <Div className="mensajeInfo">
            <Texto className="texto">Eleccion {nombre}: {infoRonda.eleccionUsuario}</Texto>
            <Texto className="texto">Eleccion Computadora: {infoRonda.eleccionComputadora}</Texto>
            <Resaltado className="texto">Ganador: {infoRonda.ganadorParcial}</Resaltado>
            <Texto className="texto">Puntos {nombre}: {infoPuntaje.usuario}</Texto>
            <Texto className="texto">Puntos Computadora: {infoPuntaje.computadora}</Texto>
        </Div>
    );
}

