import {procesoJuego, plantarse, quePasaria, reinicioPartida} from "./ui"

const botonPedirCarta = document.getElementById("boton-pedir-carta");
if (botonPedirCarta !== null && 
	botonPedirCarta !== undefined && 
  botonPedirCarta instanceof HTMLButtonElement) {
    botonPedirCarta.addEventListener("click", procesoJuego);
  }

export const botonPlantarse = document.getElementById("boton-plantarse");
if (botonPlantarse !== null && 
  botonPlantarse !== undefined && 
  botonPlantarse instanceof HTMLButtonElement) {
    botonPlantarse.addEventListener("click", plantarse);
  }

  const botonQuePasaria = document.getElementById("boton-que-pasaria");
if (botonQuePasaria !== null && 
  botonQuePasaria !== undefined && 
  botonQuePasaria instanceof HTMLButtonElement) {
    botonQuePasaria.addEventListener("click", quePasaria);
  }

  const botonReiniciar = document.getElementById("boton-volver-jugar");
if (botonReiniciar !== null && 
  botonReiniciar !== undefined && 
  botonReiniciar instanceof HTMLButtonElement) {
  botonReiniciar.addEventListener("click", reinicioPartida);
}