import {Estado, partida} from "./modelo"

export function generarNumero () {
  return Math.floor(Math.random() * 11);
}

export function obtenerNumero (numeroAleatorio: number) {
  if (numeroAleatorio === 0) {
    return 1;
  }
  return numeroAleatorio > 7 ? numeroAleatorio += 2 : numeroAleatorio;
}

export function obtenerPuntosCarta (puntosCarta: number) {
  if (puntosCarta > 7) {
    return puntosCarta = 0.5;
  } else {
    return puntosCarta;
  }
}

export function sumarPuntuacion (suma: number) {
  return partida.puntos + suma;
}

export function puntuacionFinalPartida (puntosParaGanar: number, puntosJugador: number): Estado {

  if (puntosJugador === puntosParaGanar) {
    return "HAS_GANADO";
  } 
  if ( puntosJugador < puntosParaGanar){
      return "NO_HAS_GANADO";
  }
  else {
    return "GAME_OVER";
  }
}



