import styled from 'styled-components';

const Texto = styled.p`
margin: 10px;
text-align: center;
font-size: 1.5em;
`

export default function MensajeBienvenida({ nombre }) {
    return (
        <div className="mensajeBienvenida">
            <Texto className="texto">Bienvenid@ {nombre}</Texto>
            <Texto className="texto">La partida la gana el mejor de 5.</Texto>
            <Texto className="texto">Las reglas las sabemos todos...</Texto>
            <Texto className="texto">Crees que podes ganarle a la Computadora?</Texto>
        </div>
    );
}
