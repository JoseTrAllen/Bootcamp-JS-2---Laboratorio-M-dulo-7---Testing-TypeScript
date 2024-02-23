import {vi} from "vitest";
import { partida } from "./modelo";
import { generarNumero, obtenerNumero, obtenerPuntosCarta, puntuacionFinalPartida, sumarPuntuacion } from "./motor";

describe ("puntuacionFinalPartida", () => {
  it("Deberías ganar la partida si consigues 7.5 puntos exactos", () => {
    const puntosParaGanar: number = 7.5;
    const puntosJugador: number = 7.5;
    const estadoEsperado = "HAS_GANADO";

    const resultado = puntuacionFinalPartida(puntosParaGanar, puntosJugador);

    expect(resultado).toBe(estadoEsperado)
  })

  it("Deberías no ganar la partida si te plantas antes de 7.5 puntos", () => {
    const puntosParaGanar: number = 7.5;
    const puntosJugador: number = 5;
    const estadoEsperado = "NO_HAS_GANADO";

    const resultado = puntuacionFinalPartida(puntosParaGanar, puntosJugador);

    expect(resultado).toBe(estadoEsperado)
  })

  it("Deberías perder la partida si te pasas de 7.5 puntos", () => {
    const puntosParaGanar: number = 7.5;
    const puntosJugador: number = 8;
    const estadoEsperado = "GAME_OVER";

    const resultado = puntuacionFinalPartida(puntosParaGanar, puntosJugador);

    expect(resultado).toBe(estadoEsperado)
  })
})

describe("generarNumero", () => {
  it("Vamos a forzar MathRandom para que devuelva un numero entre 1 y 10", () => {
    //Arrange
    const numeroEsperado: number = 10;
    vi.spyOn(global.Math, "random").mockReturnValue(0.999);
    //Act
    const resultado = generarNumero();
    //Assert
    expect(resultado).toBe(numeroEsperado);
  })
})

describe("obtenerNumero", () => {
  it("Vamos a obtener un 1 cuando numeroAleatorio sea = 0", () => {
    //Arrange
    const numeroEsperado: number = 1;
    const numeroAleatorio = 0
    //Act
    const resultado = obtenerNumero(numeroAleatorio)
    //Assert
    expect(resultado).toBe(numeroEsperado);
  });

  it("Si mathRandom nos devuelve un número mayor que 7 va a sumarle 2", () => {
    //Arrange
    const numeroEsperado: number = 10;
    //Act
    const resultado = obtenerNumero(8);
    //Assert
    expect(resultado).toBe(numeroEsperado)
  })
})

describe("obtenerPuntosCarta", () => {
  it("Si el valor nominal de la carta es > 7, puntosCarta debería dar 0.5 puntos", () => {
    //Arrange
    const puntosCartaEsperados: number = 0.5;
    const sotaDeCopasValorNominal = 10;
    //Act
    const resultado = obtenerPuntosCarta(sotaDeCopasValorNominal);
    //Assert
    expect(resultado).toBe(puntosCartaEsperados);
  });

  it("Si puntosCarta < 7, puntosCarta debería dar la puntuación en funcíon del número que generase mathRandom", () => {
    //Arrange
    const puntosCartaEsperados: number = 5;
    //Act
    const resultado = obtenerPuntosCarta(5);
    //Assert
    expect(resultado).toBe(puntosCartaEsperados);
  });
})

describe("sumarPuntuacion", () => {
  
  it("Debería delvolver la suma de la puntuación actual más los puntos obtenidos", () => {

    const puntosTotalesEsperados: number = 7.5;
    vi.spyOn(partida, "puntos", "get").mockReturnValue(7);
    const suma: number = 0.5;

    const resultado = sumarPuntuacion(suma)
    
    expect(resultado).toBe(puntosTotalesEsperados)
  })
})

