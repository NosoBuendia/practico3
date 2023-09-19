import styled from "styled-components";

const ImgContenedor = styled.img`
max-width: 17vw;
border-radius: 50%;
`
const Boton = styled.button`
border-radius: 50%;
margin: 20px;
padding: 0;
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

function obtenerJugadaComputadora() {
    let opciones = ["piedra", "papel", "tijera"];
    let jugada = opciones[(Math.floor(Math.random() * 3))];
    return jugada;
};
function determinarGanadorParcial(eleccionUsuario, eleccionComputadora) {
    if (eleccionUsuario === eleccionComputadora) {
        return "Empate";
    }
    else if ((eleccionUsuario === "piedra" && eleccionComputadora === "tijera") ||
        (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
        (eleccionUsuario === "tijera" && eleccionComputadora === "papel")) {
        return "Usuario";
    }
    else {
        return "Computadora";
    }
};
export default function Botoncito({ nombre, eleccion, infoPuntaje, setInfoPuntaje, setInfoRonda, imagen }) {
    function jugarRonda() {
        let eleccionUsuario = eleccion;
        let eleccionComputadora = obtenerJugadaComputadora();
        let ganadorParcial = determinarGanadorParcial(eleccionUsuario, eleccionComputadora);
        if (ganadorParcial === "Usuario") {
            setInfoPuntaje({ usuario: infoPuntaje.usuario + 1, computadora: infoPuntaje.computadora, jugadas: infoPuntaje.jugadas + 1 });
            ganadorParcial = nombre;
        }
        if (ganadorParcial === "Computadora") {
            setInfoPuntaje({ usuario: infoPuntaje.usuario, computadora: infoPuntaje.computadora + 1, jugadas: infoPuntaje.jugadas + 1 });
        }
        setInfoRonda({ eleccionUsuario: eleccionUsuario, eleccionComputadora: eleccionComputadora, ganadorParcial: ganadorParcial });
    };
    return (
        <div>
            <Boton onClick={jugarRonda}><ImgContenedor src={imagen} /></Boton>
        </div>
    );
}

