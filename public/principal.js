const sectionListaDeEquipos = document.getElementById("lista-de-equipos")
const sectionSeleccionarEquipo = document.getElementById("seleccionar-equipo")
let botonEquipoA = document.getElementById("elegir-equipo-a")
let botonEquipoB = document.getElementById("elegir-equipo-b")

const inputDublinDelayers = document.getElementById('dublinDelayersBoton')
const inputEisenbergErklings = document.getElementById('eisenbergErklingsBoton')
const inputFirenzeFalcons = document.getElementById('firenzeFalconsBoton')
const inputHolyheadHarpies = document.getElementById('holyheadHarpiesBoton')
const inputKattegatKrakor = document.getElementById('kattegatKrakorBoton')
const inputMontroseMagpies = document.getElementById('montroseMagpiesBoton')
const inputParisPromise = document.getElementById('parisPromiseBoton')
const inputSochiSnidgets = document.getElementById('sochiSnidgetsBoton')
const inputTutshillTornados = document.getElementById('tutshillTornadosBoton')
const inputVratsaVultures = document.getElementById('vratsaVulturesBoton')

let nombreEquipoA = document.getElementById("equipo-a")
let nombreEquipoB = document.getElementById("equipo-b")
let marcadorEquipoA = document.getElementById("marcador-equipo-a")
let marcadorEquipoB = document.getElementById("marcador-equipo-b")
let resultadoEquipoA = document.getElementById("resultado-marcador-equipo-a")
let resultadoEquipoB = document.getElementById("resultado-marcador-equipo-b")

export let equipoA = "Equipo A"
nombreEquipoA.innerHTML = equipoA
let inicialesA = "AA"
marcadorEquipoA.innerHTML = inicialesA
export let equipoB = "Equipo B"
nombreEquipoB.innerHTML = equipoB
let inicialesB = "BB"
marcadorEquipoB.innerHTML = inicialesB

const botonIniciarTurnoImpar = document.getElementById("iniciar-turno-impar")
const botonIniciarTurnoPar = document.getElementById("iniciar-turno-par")
const botonIniciarTurnoBuscador = document.getElementById("iniciar-turno-buscador")
const botonUbicacionSnitch = document.getElementById("ubicacion-snitch")
const botonComportamientoSnitch = document.getElementById("comportamiento-snitch")
const botonAvistamiento = document.getElementById("calcular-avistamiento")
const botonAvance = document.getElementById("calcular-avance")

const botonReflejosGuardianA = document.getElementById("reflejos-guardian-a")
const botonVoladaLateralGuardianA = document.getElementById("volada-guardian-a")
const botonPresionGuardianA = document.getElementById("presion-guardian-a")
const botonEvasionGuardianA = document.getElementById("evasion-guardian-a")
export const botonAtajadaRelampagoA = document.getElementById("atajada-relampago-a")
export const botonStarfishAndStickA = document.getElementById("starfish-and-stick-a")
export const botonDoubleEightLoopA = document.getElementById("double-eight-loop-a")
export const botonAllInA = document.getElementById("all-in-a")
export const botonPaseLargoA = document.getElementById("pase-largo-a")
export const botonTiroResbalonA = document.getElementById("tiro-resbalon-a")

const botonGolpeGolpeador1A = document.getElementById("golpe-golpeador-1a")
const botonIntercepcionGolpeador1A = document.getElementById("intercepcion-golpeador-1a")
const botonEvasionGolpeador1A = document.getElementById("evasion-golpeador-1a")
const botonPasarTurnoGolpeador1A = document.getElementById("pasar-turno-golpeador-1a")
export const botonGolpeDeFrancotirador1A = document.getElementById("golpe-de-francotirador-1a")
export const botonBludgerBackbeat1A = document.getElementById("bludger-backbeat-1a")
export const botonGolpeBombeado1A = document.getElementById("golpe-bombeado-1a")
export const botonGolpeCanon1A = document.getElementById("golpe-canon-1a")
export const botonAngelGuardian1A = document.getElementById("angel-guardian-1a")
export const botonInterferenciaDeAguila1A = document.getElementById("interferencia-de-aguila-1a")

const botonGolpeGolpeador2A = document.getElementById("golpe-golpeador-2a")
const botonIntercepcionGolpeador2A = document.getElementById("intercepcion-golpeador-2a")
const botonEvasionGolpeador2A = document.getElementById("evasion-golpeador-2a")
const botonPasarTurnoGolpeador2A = document.getElementById("pasar-turno-golpeador-2a")
export const botonGolpeDeFrancotirador2A = document.getElementById("golpe-de-francotirador-2a")
export const botonBludgerBackbeat2A = document.getElementById("bludger-backbeat-2a")
export const botonGolpeBombeado2A = document.getElementById("golpe-bombeado-2a")
export const botonGolpeCanon2A = document.getElementById("golpe-canon-2a")
export const botonAngelGuardian2A = document.getElementById("angel-guardian-2a")
export const botonInterferenciaDeAguila2A = document.getElementById("interferencia-de-aguila-2a")

const botonAgilidadCazador1A = document.getElementById("agilidad-cazador-1a")
const botonDefensaCazador1A = document.getElementById("defensa-cazador-1a")
const botonReaccionCazador1A = document.getElementById("reaccion-cazador-1a")
const botonEvasionCazador1A = document.getElementById("evasion-cazador-1a")
const botonDisparoCazador1A = document.getElementById("disparo-cazador-1a")
export const botonFintaDePorskov1A = document.getElementById("finta-de-porskov-1a")
export const botonManoCambiada1A = document.getElementById("mano-cambiada-1a")
export const botonRoboSpeelman1A = document.getElementById("robo-speelman-1a")
export const botonTransylvanianTackle1A = document.getElementById("transylvanian-tackle-1a")
export const botonIntuicionFugaz1A = document.getElementById("intuicion-fugaz-1a")
export const botonReversePass1A = document.getElementById("reverse-pass-1a")
export const botonSlothGripRoll1A = document.getElementById("sloth-grip-roll-1a")
export const botonTiroLargo1A = document.getElementById("tiro-largo-1a")
export const botonDisparoDeTorbellino1A = document.getElementById("disparo-de-torbellino-1a")
export const botonDisparoConAmague1A = document.getElementById("disparo-con-amague-1a")
export const botonEfectoFinbourgh1A = document.getElementById("efecto-finbourgh-1a")
export const botonKnuckleBall1A = document.getElementById("knuckle-ball-1a")
export const botonDisparoDeVolea1A = document.getElementById("disparo-de-volea-1a")

const botonAgilidadCazador2A = document.getElementById("agilidad-cazador-2a")
const botonDefensaCazador2A = document.getElementById("defensa-cazador-2a")
const botonReaccionCazador2A = document.getElementById("reaccion-cazador-2a")
const botonEvasionCazador2A = document.getElementById("evasion-cazador-2a")
const botonDisparoCazador2A = document.getElementById("disparo-cazador-2a")
export const botonFintaDePorskov2A = document.getElementById("finta-de-porskov-2a")
export const botonManoCambiada2A = document.getElementById("mano-cambiada-2a")
export const botonRoboSpeelman2A = document.getElementById("robo-speelman-2a")
export const botonTransylvanianTackle2A = document.getElementById("transylvanian-tackle-2a")
export const botonIntuicionFugaz2A = document.getElementById("intuicion-fugaz-2a")
export const botonReversePass2A = document.getElementById("reverse-pass-2a")
export const botonSlothGripRoll2A = document.getElementById("sloth-grip-roll-2a")
export const botonTiroLargo2A = document.getElementById("tiro-largo-2a")
export const botonDisparoDeTorbellino2A = document.getElementById("disparo-de-torbellino-2a")
export const botonDisparoConAmague2A = document.getElementById("disparo-con-amague-2a")
export const botonEfectoFinbourgh2A = document.getElementById("efecto-finbourgh-2a")
export const botonKnuckleBall2A = document.getElementById("knuckle-ball-2a")
export const botonDisparoDeVolea2A = document.getElementById("disparo-de-volea-2a")

const botonAgilidadCazador3A = document.getElementById("agilidad-cazador-3a")
const botonDefensaCazador3A = document.getElementById("defensa-cazador-3a")
const botonReaccionCazador3A = document.getElementById("reaccion-cazador-3a")
const botonEvasionCazador3A = document.getElementById("evasion-cazador-3a")
const botonDisparoCazador3A = document.getElementById("disparo-cazador-3a")
export const botonFintaDePorskov3A = document.getElementById("finta-de-porskov-3a")
export const botonManoCambiada3A = document.getElementById("mano-cambiada-3a")
export const botonRoboSpeelman3A = document.getElementById("robo-speelman-3a")
export const botonTransylvanianTackle3A = document.getElementById("transylvanian-tackle-3a")
export const botonIntuicionFugaz3A = document.getElementById("intuicion-fugaz-3a")
export const botonReversePass3A = document.getElementById("reverse-pass-3a")
export const botonSlothGripRoll3A = document.getElementById("sloth-grip-roll-3a")
export const botonTiroLargo3A = document.getElementById("tiro-largo-3a")
export const botonDisparoDeTorbellino3A = document.getElementById("disparo-de-torbellino-3a")
export const botonDisparoConAmague3A = document.getElementById("disparo-con-amague-3a")
export const botonEfectoFinbourgh3A = document.getElementById("efecto-finbourgh-3a")
export const botonKnuckleBall3A = document.getElementById("knuckle-ball-3a")
export const botonDisparoDeVolea3A = document.getElementById("disparo-de-volea-3a")

const botonVelocidadBuscadorA = document.getElementById("velocidad-buscador-a")
const botonAvistamientoBuscadorA = document.getElementById("avistamiento-buscador-a")
const botonEvasionBuscadorA = document.getElementById("evasion-buscador-a")
const botonAgarreBuscadorA = document.getElementById("agarre-buscador-a")
const botonContinuarBuscadorA = document.getElementById("continuar-buscador-a")
export const botonAmagoDeWronskiA = document.getElementById("amago-de-wronski-a")
export const botonPerspicaciaA = document.getElementById("perspicacia-a")
export const botonUltimoAlientoA = document.getElementById("ultimo-aliento-a")
export const botonCaidaEnPicadaA = document.getElementById("caida-en-picada-a")
export const botonEscarbatoA = document.getElementById("escarbato-a")
export const botonPlumptonPassA = document.getElementById("plumpton-pass-a")

const botonReflejosGuardianB = document.getElementById("reflejos-guardian-b")
const botonVoladaLateralGuardianB = document.getElementById("volada-guardian-b")
const botonPresionGuardianB = document.getElementById("presion-guardian-b")
const botonEvasionGuardianB = document.getElementById("evasion-guardian-b")
export const botonAtajadaRelampagoB = document.getElementById("atajada-relampago-b")
export const botonStarfishAndStickB = document.getElementById("starfish-and-stick-b")
export const botonDoubleEightLoopB = document.getElementById("double-eight-loop-b")
export const botonAllInB = document.getElementById("all-in-b")
export const botonPaseLargoB = document.getElementById("pase-largo-b")
export const botonTiroResbalonB = document.getElementById("tiro-resbalon-b")

const botonGolpeGolpeador1B = document.getElementById("golpe-golpeador-1b")
const botonIntercepcionGolpeador1B = document.getElementById("intercepcion-golpeador-1b")
const botonEvasionGolpeador1B = document.getElementById("evasion-golpeador-1b")
const botonPasarTurnoGolpeador1B = document.getElementById("pasar-turno-golpeador-1b")
export const botonGolpeDeFrancotirador1B = document.getElementById("golpe-de-francotirador-1b")
export const botonBludgerBackbeat1B = document.getElementById("bludger-backbeat-1b")
export const botonGolpeBombeado1B = document.getElementById("golpe-bombeado-1b")
export const botonGolpeCanon1B = document.getElementById("golpe-canon-1b")
export const botonAngelGuardian1B = document.getElementById("angel-guardian-1b")
export const botonInterferenciaDeAguila1B = document.getElementById("interferencia-de-aguila-1b")

const botonGolpeGolpeador2B = document.getElementById("golpe-golpeador-2b")
const botonIntercepcionGolpeador2B = document.getElementById("intercepcion-golpeador-2b")
const botonEvasionGolpeador2B = document.getElementById("evasion-golpeador-2b")
const botonPasarTurnoGolpeador2B = document.getElementById("pasar-turno-golpeador-2b")
export const botonGolpeDeFrancotirador2B = document.getElementById("golpe-de-francotirador-2b")
export const botonBludgerBackbeat2B = document.getElementById("bludger-backbeat-2b")
export const botonGolpeBombeado2B = document.getElementById("golpe-bombeado-2b")
export const botonGolpeCanon2B = document.getElementById("golpe-canon-2b")
export const botonAngelGuardian2B = document.getElementById("angel-guardian-2b")
export const botonInterferenciaDeAguila2B = document.getElementById("interferencia-de-aguila-2b")

const botonAgilidadCazador1B = document.getElementById("agilidad-cazador-1b")
const botonDefensaCazador1B = document.getElementById("defensa-cazador-1b")
const botonReaccionCazador1B = document.getElementById("reaccion-cazador-1b")
const botonEvasionCazador1B = document.getElementById("evasion-cazador-1b")
const botonDisparoCazador1B = document.getElementById("disparo-cazador-1b")
export const botonFintaDePorskov1B = document.getElementById("finta-de-porskov-1b")
export const botonManoCambiada1B = document.getElementById("mano-cambiada-1b")
export const botonRoboSpeelman1B = document.getElementById("robo-speelman-1b")
export const botonTransylvanianTackle1B = document.getElementById("transylvanian-tackle-1b")
export const botonIntuicionFugaz1B = document.getElementById("intuicion-fugaz-1b")
export const botonReversePass1B = document.getElementById("reverse-pass-1b")
export const botonSlothGripRoll1B = document.getElementById("sloth-grip-roll-1b")
export const botonTiroLargo1B = document.getElementById("tiro-largo-1b")
export const botonDisparoDeTorbellino1B = document.getElementById("disparo-de-torbellino-1b")
export const botonDisparoConAmague1B = document.getElementById("disparo-con-amague-1b")
export const botonEfectoFinbourgh1B = document.getElementById("efecto-finbourgh-1b")
export const botonKnuckleBall1B = document.getElementById("knuckle-ball-1b")
export const botonDisparoDeVolea1B = document.getElementById("disparo-de-volea-1b")

const botonAgilidadCazador2B = document.getElementById("agilidad-cazador-2b")
const botonDefensaCazador2B = document.getElementById("defensa-cazador-2b")
const botonReaccionCazador2B = document.getElementById("reaccion-cazador-2b")
const botonEvasionCazador2B = document.getElementById("evasion-cazador-2b")
const botonDisparoCazador2B = document.getElementById("disparo-cazador-2b")
export const botonFintaDePorskov2B = document.getElementById("finta-de-porskov-2b")
export const botonManoCambiada2B = document.getElementById("mano-cambiada-2b")
export const botonRoboSpeelman2B = document.getElementById("robo-speelman-2b")
export const botonTransylvanianTackle2B = document.getElementById("transylvanian-tackle-2b")
export const botonIntuicionFugaz2B = document.getElementById("intuicion-fugaz-2b")
export const botonReversePass2B = document.getElementById("reverse-pass-2b")
export const botonSlothGripRoll2B = document.getElementById("sloth-grip-roll-2b")
export const botonTiroLargo2B = document.getElementById("tiro-largo-2b")
export const botonDisparoDeTorbellino2B = document.getElementById("disparo-de-torbellino-2b")
export const botonDisparoConAmague2B = document.getElementById("disparo-con-amague-2b")
export const botonEfectoFinbourgh2B = document.getElementById("efecto-finbourgh-2b")
export const botonKnuckleBall2B = document.getElementById("knuckle-ball-2b")
export const botonDisparoDeVolea2B = document.getElementById("disparo-de-volea-2b")

const botonAgilidadCazador3B = document.getElementById("agilidad-cazador-3b")
const botonDefensaCazador3B = document.getElementById("defensa-cazador-3b")
const botonReaccionCazador3B = document.getElementById("reaccion-cazador-3b")
const botonEvasionCazador3B = document.getElementById("evasion-cazador-3b")
const botonDisparoCazador3B = document.getElementById("disparo-cazador-3b")
export const botonFintaDePorskov3B = document.getElementById("finta-de-porskov-3b")
export const botonManoCambiada3B = document.getElementById("mano-cambiada-3b")
export const botonRoboSpeelman3B = document.getElementById("robo-speelman-3b")
export const botonTransylvanianTackle3B = document.getElementById("transylvanian-tackle-3b")
export const botonIntuicionFugaz3B = document.getElementById("intuicion-fugaz-3b")
export const botonReversePass3B = document.getElementById("reverse-pass-3b")
export const botonSlothGripRoll3B = document.getElementById("sloth-grip-roll-3b")
export const botonTiroLargo3B = document.getElementById("tiro-largo-3b")
export const botonDisparoDeTorbellino3B = document.getElementById("disparo-de-torbellino-3b")
export const botonDisparoConAmague3B = document.getElementById("disparo-con-amague-3b")
export const botonEfectoFinbourgh3B = document.getElementById("efecto-finbourgh-3b")
export const botonKnuckleBall3B = document.getElementById("knuckle-ball-3b")
export const botonDisparoDeVolea3B = document.getElementById("disparo-de-volea-3b")

const botonVelocidadBuscadorB = document.getElementById("velocidad-buscador-b")
const botonAvistamientoBuscadorB = document.getElementById("avistamiento-buscador-b")
const botonEvasionBuscadorB = document.getElementById("evasion-buscador-b")
const botonAgarreBuscadorB = document.getElementById("agarre-buscador-b")
const botonContinuarBuscadorB = document.getElementById("continuar-buscador-b")
export const botonAmagoDeWronskiB = document.getElementById("amago-de-wronski-b")
export const botonPerspicaciaB = document.getElementById("perspicacia-b")
export const botonUltimoAlientoB = document.getElementById("ultimo-aliento-b")
export const botonCaidaEnPicadaB = document.getElementById("caida-en-picada-b")
export const botonEscarbatoB = document.getElementById("escarbato-b")
export const botonPlumptonPassB = document.getElementById("plumpton-pass-b")

const botonCalcularGanadorCazadores1 = document.getElementById("calcular-ganador-cazadores-1")
const botonCalcularGanadorCazadores2 = document.getElementById("calcular-ganador-cazadores-2")

const botonReceptorPaseCazador1A = document.getElementById("receptor-pase-cazador-1a")
const botonReceptorPaseCazador2A = document.getElementById("receptor-pase-cazador-2a")
const botonReceptorPaseCazador3A = document.getElementById("receptor-pase-cazador-3a")
const botonReceptorPaseCazador1B = document.getElementById("receptor-pase-cazador-1b")
const botonReceptorPaseCazador2B = document.getElementById("receptor-pase-cazador-2b")
const botonReceptorPaseCazador3B = document.getElementById("receptor-pase-cazador-3b")

// ATRIBUTOS DE JUGADORES

export let guardianA
export let reflejosA
export let voladaLateralA
export let presionA
export let evasionGuardianA
export let atajadaRelampagoA
export let usosAtajadaRelampagoA = 0
export let starfishAndStickA
export let usosStarfishAndStickA = 0
export let doubleEightLoopA
export let usosDoubleEightLoopA = 0
export let allInA
export let usosAllInA = 0
export let paseLargoA
export let usosPaseLargoA = 0
export let tiroResbalonA
export let usosTiroResbalonA = 0

export let golpeador1A
export let fuerza1A
export let precision1A
export let intercepcion1A
export let evasionGolpeador1A
export let energia1A
export let energiaConsumida1A = 0
export let golpeDeFrancotirador1A
export let usosGolpeDeFrancotirador1A = 0
export let bludgerBackbeat1A
export let usosBludgerBackbeat1A = 0
export let golpeBombeado1A
export let usosGolpeBombeado1A = 0
export let golpeCanon1A
export let usosGolpeCanon1A = 0
export let angelGuardian1A
export let usosAngelGuardian1A = 0
export let interferenciaDeAguila1A
export let usosInterferenciaDeAguila1A = 0

export let golpeador2A
export let fuerza2A
export let precision2A
export let intercepcion2A
export let evasionGolpeador2A
export let energia2A
export let energiaConsumida2A = 0
export let golpeDeFrancotirador2A
export let usosGolpeDeFrancotirador2A = 0
export let bludgerBackbeat2A
export let usosBludgerBackbeat2A = 0
export let golpeBombeado2A
export let usosGolpeBombeado2A = 0
export let golpeCanon2A
export let usosGolpeCanon2A = 0
export let angelGuardian2A
export let usosAngelGuardian2A = 0
export let interferenciaDeAguila2A
export let usosInterferenciaDeAguila2A = 0

export let cazador1A
export let agilidad1A
export let defensa1A
export let reaccion1A
export let evasionCazador1A
export let disparo1A
export let disparosRealizados1A = 0
export let fintaDePorskov1A
export let usosFintaDePorskov1A = 0
export let manoCambiada1A
export let usosManoCambiada1A = 0
export let roboSpeelman1A
export let usosRoboSpeelman1A = 0
export let transylvanianTackle1A
export let usosTransylvanianTackle1A = 0
export let intuicionFugaz1A
export let usosIntuicionFugaz1A = 0
export let reversePass1A
export let usosReversePass1A = 0
export let slothGripRoll1A
export let usosSlothGripRoll1A = 0
export let tiroLargo1A
export let usosTiroLargo1A = 0
export let disparoDeTorbellino1A
export let usosDisparoDeTorbellino1A = 0
export let disparoConAmague1A
export let usosDisparoConAmague1A = 0
export let efectoFinbourgh1A
export let usosEfectoFinbourgh1A = 0
export let knuckleBall1A
export let usosKnuckleBall1A = 0
export let disparoDeVolea1A
export let usosDisparoDeVolea1A = 0

export let cazador2A
export let agilidad2A
export let defensa2A
export let reaccion2A
export let evasionCazador2A
export let disparo2A
export let disparosRealizados2A = 0
export let fintaDePorskov2A
export let usosFintaDePorskov2A = 0
export let manoCambiada2A
export let usosManoCambiada2A = 0
export let roboSpeelman2A
export let usosRoboSpeelman2A = 0
export let transylvanianTackle2A
export let usosTransylvanianTackle2A = 0
export let intuicionFugaz2A
export let usosIntuicionFugaz2A = 0
export let reversePass2A
export let usosReversePass2A = 0
export let slothGripRoll2A
export let usosSlothGripRoll2A = 0
export let tiroLargo2A
export let usosTiroLargo2A = 0
export let disparoDeTorbellino2A
export let usosDisparoDeTorbellino2A = 0
export let disparoConAmague2A
export let usosDisparoConAmague2A = 0
export let efectoFinbourgh2A
export let usosEfectoFinbourgh2A = 0
export let knuckleBall2A
export let usosKnuckleBall2A = 0
export let disparoDeVolea2A
export let usosDisparoDeVolea2A = 0

export let cazador3A
export let agilidad3A
export let defensa3A
export let reaccion3A
export let evasionCazador3A
export let disparo3A
export let disparosRealizados3A = 0
export let fintaDePorskov3A
export let usosFintaDePorskov3A = 0
export let manoCambiada3A
export let usosManoCambiada3A = 0
export let roboSpeelman3A
export let usosRoboSpeelman3A = 0
export let transylvanianTackle3A
export let usosTransylvanianTackle3A = 0
export let intuicionFugaz3A
export let usosIntuicionFugaz3A = 0
export let reversePass3A
export let usosReversePass3A = 0
export let slothGripRoll3A
export let usosSlothGripRoll3A = 0
export let tiroLargo3A
export let usosTiroLargo3A = 0
export let disparoDeTorbellino3A
export let usosDisparoDeTorbellino3A = 0
export let disparoConAmague3A
export let usosDisparoConAmague3A = 0
export let efectoFinbourgh3A
export let usosEfectoFinbourgh3A = 0
export let knuckleBall3A
export let usosKnuckleBall3A = 0
export let disparoDeVolea3A
export let usosDisparoDeVolea3A = 3

export let buscadorA
export let velocidadA
export let giroA
export let avistamientoA
export let evasionBuscadorA
export let agarreA
export let amagoDeWronskiA
export let usosAmagoDeWronskiA = 0
export let perspicaciaA
export let usosPerspicaciaA = 0
export let ultimoAlientoA
export let usosUltimoAlientoA = 0
export let caidaEnPicadaA
export let usosCaidaEnPicadaA = 0
export let escarbatoA
export let usosEscarbatoA = 0
export let plumptonPassA
export let usosPlumptonPassA = 0

export let guardianB
export let reflejosB
export let voladaLateralB
export let presionB
export let evasionGuardianB
export let atajadaRelampagoB
export let usosAtajadaRelampagoB = 0
export let starfishAndStickB
export let usosStarfishAndStickB = 0
export let doubleEightLoopB
export let usosDoubleEightLoopB = 0
export let allInB
export let usosAllInB = 0
export let paseLargoB
export let usosPaseLargoB = 0
export let tiroResbalonB
export let usosTiroResbalonB = 0

export let golpeador1B
export let fuerza1B
export let precision1B
export let intercepcion1B
export let evasionGolpeador1B
export let energia1B
export let energiaConsumida1B = 0
export let golpeDeFrancotirador1B
export let usosGolpeDeFrancotirador1B = 0
export let bludgerBackbeat1B
export let usosBludgerBackbeat1B = 0
export let golpeBombeado1B
export let usosGolpeBombeado1B = 0
export let golpeCanon1B
export let usosGolpeCanon1B = 0
export let angelGuardian1B
export let usosAngelGuardian1B = 0
export let interferenciaDeAguila1B
export let usosInterferenciaDeAguila1B = 0

export let golpeador2B
export let fuerza2B
export let precision2B
export let intercepcion2B
export let evasionGolpeador2B
export let energia2B
export let energiaConsumida2B = 0
export let golpeDeFrancotirador2B
export let usosGolpeDeFrancotirador2B = 0
export let bludgerBackbeat2B
export let usosBludgerBackbeat2B = 0
export let golpeBombeado2B
export let usosGolpeBombeado2B = 0
export let golpeCanon2B
export let usosGolpeCanon2B = 0
export let angelGuardian2B
export let usosAngelGuardian2B = 0
export let interferenciaDeAguila2B
export let usosInterferenciaDeAguila2B = 0

export let cazador1B
export let agilidad1B
export let defensa1B
export let reaccion1B
export let evasionCazador1B
export let disparo1B
export let disparosRealizados1B = 0
export let fintaDePorskov1B
export let usosFintaDePorskov1B = 0
export let manoCambiada1B
export let usosManoCambiada1B = 0
export let roboSpeelman1B
export let usosRoboSpeelman1B = 0
export let transylvanianTackle1B
export let usosTransylvanianTackle1B = 0
export let intuicionFugaz1B
export let usosIntuicionFugaz1B = 0
export let reversePass1B
export let usosReversePass1B = 0
export let slothGripRoll1B
export let usosSlothGripRoll1B = 0
export let tiroLargo1B
export let usosTiroLargo1B = 0
export let disparoDeTorbellino1B
export let usosDisparoDeTorbellino1B = 0
export let disparoConAmague1B
export let usosDisparoConAmague1B = 0
export let efectoFinbourgh1B
export let usosEfectoFinbourgh1B = 0
export let knuckleBall1B
export let usosKnuckleBall1B = 0
export let disparoDeVolea1B
export let usosDisparoDeVolea1B = 0

export let cazador2B
export let agilidad2B
export let defensa2B
export let reaccion2B
export let evasionCazador2B
export let disparo2B
export let disparosRealizados2B = 0
export let fintaDePorskov2B
export let usosFintaDePorskov2B = 0
export let manoCambiada2B
export let usosManoCambiada2B = 0
export let roboSpeelman2B
export let usosRoboSpeelman2B = 0
export let transylvanianTackle2B
export let usosTransylvanianTackle2B = 0
export let intuicionFugaz2B
export let usosIntuicionFugaz2B = 0
export let reversePass2B
export let usosReversePass2B = 0
export let slothGripRoll2B
export let usosSlothGripRoll2B = 0
export let tiroLargo2B
export let usosTiroLargo2B = 0
export let disparoDeTorbellino2B
export let usosDisparoDeTorbellino2B = 0
export let disparoConAmague2B
export let usosDisparoConAmague2B = 0
export let efectoFinbourgh2B
export let usosEfectoFinbourgh2B = 0
export let knuckleBall2B
export let usosKnuckleBall2B = 0
export let disparoDeVolea2B
export let usosDisparoDeVolea2B = 0

export let cazador3B
export let agilidad3B
export let defensa3B
export let reaccion3B
export let evasionCazador3B
export let disparo3B
export let disparosRealizados3B = 0
export let fintaDePorskov3B
export let usosFintaDePorskov3B = 0
export let manoCambiada3B
export let usosManoCambiada3B = 0
export let roboSpeelman3B
export let usosRoboSpeelman3B = 0
export let transylvanianTackle3B
export let usosTransylvanianTackle3B = 0
export let intuicionFugaz3B
export let usosIntuicionFugaz3B = 0
export let reversePass3B
export let usosReversePass3B = 0
export let slothGripRoll3B
export let usosSlothGripRoll3B = 0
export let tiroLargo3B
export let usosTiroLargo3B = 0
export let disparoDeTorbellino3B
export let usosDisparoDeTorbellino3B = 0
export let disparoConAmague3B
export let usosDisparoConAmague3B = 0
export let efectoFinbourgh3B
export let usosEfectoFinbourgh3B = 0
export let knuckleBall3B
export let usosKnuckleBall3B = 0
export let disparoDeVolea3B
export let usosDisparoDeVolea3B = 0

export let buscadorB
export let velocidadB
export let giroB
export let avistamientoB
export let evasionBuscadorB
export let agarreB
export let amagoDeWronskiB
export let usosAmagoDeWronskiB = 0
export let perspicaciaB
export let usosPerspicaciaB = 0
export let ultimoAlientoB
export let usosUltimoAlientoB = 0
export let caidaEnPicadaB
export let usosCaidaEnPicadaB = 0
export let escarbatoB
export let usosEscarbatoB = 0
export let plumptonPassB
export let usosPlumptonPassB = 0

let nombreGuardianA = document.getElementById("nombre-guardian-a")
let atributosGuardianA = document.getElementById("atributos-guardian-a")
let nombreGolpeador1A = document.getElementById("nombre-golpeador-1a")
let atributosGolpeador1A = document.getElementById("atributos-golpeador-1a")
let nombreGolpeador2A = document.getElementById("nombre-golpeador-2a")
let atributosGolpeador2A = document.getElementById("atributos-golpeador-2a")
let nombreCazador1A = document.getElementById("nombre-cazador-1a")
let atributosCazador1A = document.getElementById("atributos-cazador-1a")
let nombreCazador2A = document.getElementById("nombre-cazador-2a")
let atributosCazador2A = document.getElementById("atributos-cazador-2a")
let nombreCazador3A = document.getElementById("nombre-cazador-3a")
let atributosCazador3A = document.getElementById("atributos-cazador-3a")
let nombreBuscadorA = document.getElementById("nombre-buscador-a")
let atributosBuscadorA = document.getElementById("atributos-buscador-a")

let nombreGuardianB = document.getElementById("nombre-guardian-b")
let atributosGuardianB = document.getElementById("atributos-guardian-b")
let nombreGolpeador1B = document.getElementById("nombre-golpeador-1b")
let atributosGolpeador1B = document.getElementById("atributos-golpeador-1b")
let nombreGolpeador2B = document.getElementById("nombre-golpeador-2b")
let atributosGolpeador2B = document.getElementById("atributos-golpeador-2b")
let nombreCazador1B = document.getElementById("nombre-cazador-1b")
let atributosCazador1B = document.getElementById("atributos-cazador-1b")
let nombreCazador2B = document.getElementById("nombre-cazador-2b")
let atributosCazador2B = document.getElementById("atributos-cazador-2b")
let nombreCazador3B = document.getElementById("nombre-cazador-3b")
let atributosCazador3B = document.getElementById("atributos-cazador-3b")
let nombreBuscadorB = document.getElementById("nombre-buscador-b")
let atributosBuscadorB = document.getElementById("atributos-buscador-b")

// DESCRIPCIÓN DE LOS TURNOS

var descripcion

// EQUIPOS

function equiposElegidos() {

    if (equipoA == "Dublin Delayers") {
        guardianA = "Barry Ryan"
        reflejosA = 14
        voladaLateralA = 14
        presionA = 13
        evasionGuardianA = 10
        atajadaRelampagoA = 2
        usosAtajadaRelampagoA = 0
        starfishAndStickA = 0
        usosStarfishAndStickA = 0
        doubleEightLoopA = 0
        usosDoubleEightLoopA = 0
        allInA = 1
        usosAllInA = 0
        paseLargoA = 0
        usosPaseLargoA = 0
        tiroResbalonA = 1
        usosTiroResbalonA = 0

        golpeador1A = "Sean Conolly"
        fuerza1A = 47
        precision1A = 16
        intercepcion1A = 12
        evasionGolpeador1A = 12
        energia1A = 9
        energiaConsumida1A = 0
        golpeDeFrancotirador1A = 1
        usosGolpeDeFrancotirador1A = 0
        bludgerBackbeat1A = 0
        usosBludgerBackbeat1A = 0
        golpeBombeado1A = 1
        usosGolpeBombeado1A = 0
        golpeCanon1A = 0
        usosGolpeCanon1A = 0
        angelGuardian1A = 0
        usosAngelGuardian1A = 0
        interferenciaDeAguila1A = 0
        usosInterferenciaDeAguila1A = 0

        golpeador2A = "Cormac Quigley"
        fuerza2A = 42
        precision2A = 17
        intercepcion2A = 15
        evasionGolpeador2A = 11
        energia2A = 8
        energiaConsumida2A = 0
        golpeDeFrancotirador2A = 0
        usosGolpeDeFrancotirador2A = 0
        bludgerBackbeat2A = 1
        usosBludgerBackbeat2A = 0
        golpeBombeado2A = 1
        usosGolpeBombeado2A = 0
        golpeCanon2A = 0
        usosGolpeCanon2A = 0
        angelGuardian2A = 0
        usosAngelGuardian2A = 0
        interferenciaDeAguila2A = 0
        usosInterferenciaDeAguila2A = 0

        cazador1A = "Aislinn Mullet"
        agilidad1A = 15
        defensa1A = 13
        reaccion1A = 12
        evasionCazador1A = 17
        disparo1A = 15
        disparosRealizados1A = 0
        fintaDePorskov1A = 0
        usosFintaDePorskov1A = 0
        manoCambiada1A = 1
        usosManoCambiada1A = 0
        roboSpeelman1A = 0
        usosRoboSpeelman1A = 0
        transylvanianTackle1A = 0
        usosTransylvanianTackle1A = 0
        intuicionFugaz1A = 0
        usosIntuicionFugaz1A = 0
        reversePass1A = 0
        usosReversePass1A = 0
        slothGripRoll1A = 0
        usosSlothGripRoll1A = 0
        tiroLargo1A = 0
        usosTiroLargo1A = 0
        disparoDeTorbellino1A = 0
        usosDisparoDeTorbellino1A = 0
        disparoConAmague1A = 0
        usosDisparoConAmague1A = 0
        efectoFinbourgh1A = 2
        usosEfectoFinbourgh1A = 0
        knuckleBall1A = 0
        usosKnuckleBall1A = 0
        disparoDeVolea1A = 0
        usosDisparoDeVolea1A = 0

        cazador2A = "Maeve Troy"
        agilidad2A = 14
        defensa2A = 17
        reaccion2A = 13
        evasionCazador2A = 13
        disparo2A = 20
        disparosRealizados2A = 0
        fintaDePorskov2A = 0
        usosFintaDePorskov2A = 0
        manoCambiada2A = 0
        usosManoCambiada2A = 0
        roboSpeelman2A = 2
        usosRoboSpeelman2A = 0
        transylvanianTackle2A = 0
        usosTransylvanianTackle2A = 0
        intuicionFugaz2A = 0
        usosIntuicionFugaz2A = 0
        reversePass2A = 0
        usosReversePass2A = 0
        slothGripRoll2A = 0
        usosSlothGripRoll2A = 0
        tiroLargo2A = 0
        usosTiroLargo2A = 0
        disparoDeTorbellino2A = 0
        usosDisparoDeTorbellino2A = 0
        disparoConAmague2A = 0
        usosDisparoConAmague2A = 0
        efectoFinbourgh2A = 1
        usosEfectoFinbourgh2A = 0
        knuckleBall2A = 0
        usosKnuckleBall2A = 0
        disparoDeVolea2A = 1
        usosDisparoDeVolea2A = 0

        cazador3A = "Rosie Moran"
        agilidad3A = 16
        defensa3A = 15
        reaccion3A = 15
        evasionCazador3A = 13
        disparo3A = 13
        disparosRealizados3A = 0
        fintaDePorskov3A = 0
        usosFintaDePorskov3A = 0
        manoCambiada3A = 1
        usosManoCambiada3A = 0
        roboSpeelman3A = 0
        usosRoboSpeelman3A = 0
        transylvanianTackle3A = 2
        usosTransylvanianTackle3A = 0
        intuicionFugaz3A = 1
        usosIntuicionFugaz3A = 0
        reversePass3A = 0
        usosReversePass3A = 0
        slothGripRoll3A = 0
        usosSlothGripRoll3A = 0
        tiroLargo3A = 0
        usosTiroLargo3A = 0
        disparoDeTorbellino3A = 0
        usosDisparoDeTorbellino3A = 0
        disparoConAmague3A = 0
        usosDisparoConAmague3A = 0
        efectoFinbourgh3A = 0
        usosEfectoFinbourgh3A = 0
        knuckleBall3A = 0
        usosKnuckleBall3A = 0
        disparoDeVolea3A = 0
        usosDisparoDeVolea3A = 0

        buscadorA = "Ciara Lynch"
        velocidadA = 19
        giroA = 13
        avistamientoA = 14
        evasionBuscadorA = 17
        agarreA = 12
        amagoDeWronskiA = 1
        usosAmagoDeWronskiA = 0
        perspicaciaA = 0
        usosPerspicaciaA = 0
        ultimoAlientoA = 0
        usosUltimoAlientoA = 0
        caidaEnPicadaA = 0
        usosCaidaEnPicadaA = 0
        escarbatoA = 0
        usosEscarbatoA = 0
        plumptonPassA = 0
        usosPlumptonPassA = 0
    }
    else if (equipoA == "Eisenberg Erklings") {
        guardianA = "Luciana Aymar"
        reflejosA = 14
        voladaLateralA = 16
        presionA = 12
        evasionGuardianA = 8
        atajadaRelampagoA = 1
        usosAtajadaRelampagoA = 0
        starfishAndStickA = 0
        usosStarfishAndStickA = 0
        doubleEightLoopA = 3
        usosDoubleEightLoopA = 0
        allInA = 0
        usosAllInA = 0
        paseLargoA = 0
        usosPaseLargoA = 0
        tiroResbalonA = 1
        usosTiroResbalonA = 0
        
        golpeador1A = "Walda Freites"
        fuerza1A = 41
        precision1A = 20
        intercepcion1A = 15
        evasionGolpeador1A = 14
        energia1A = 8
        energiaConsumida1A = 0
        golpeDeFrancotirador1A = 1
        usosGolpeDeFrancotirador1A = 0
        bludgerBackbeat1A = 0
        usosBludgerBackbeat1A = 0
        golpeBombeado1A = 1
        usosGolpeBombeado1A = 0
        golpeCanon1A = 0
        usosGolpeCanon1A = 0
        angelGuardian1A = 0
        usosAngelGuardian1A = 0
        interferenciaDeAguila1A = 0
        usosInterferenciaDeAguila1A = 0
        
        golpeador2A = "Gretchen Johann"
        fuerza2A = 40
        precision2A = 15
        intercepcion2A = 22
        evasionGolpeador2A = 9
        energia2A = 8
        energiaConsumida2A = 0
        golpeDeFrancotirador2A = 1
        usosGolpeDeFrancotirador2A = 0
        bludgerBackbeat2A = 0
        usosBludgerBackbeat2A = 0
        golpeBombeado2A = 0
        usosGolpeBombeado2A = 0
        golpeCanon2A = 0
        usosGolpeCanon2A = 0
        angelGuardian2A = 2
        usosAngelGuardian2A = 0
        interferenciaDeAguila2A = 0
        usosInterferenciaDeAguila2A = 0
        
        cazador1A = "Jonas Fischer"
        agilidad1A = 15
        defensa1A = 10
        reaccion1A = 13
        evasionCazador1A = 15
        disparo1A = 19
        disparosRealizados1A = 0
        fintaDePorskov1A = 0
        usosFintaDePorskov1A = 0
        manoCambiada1A = 0
        usosManoCambiada1A = 0
        roboSpeelman1A = 0
        usosRoboSpeelman1A = 0
        transylvanianTackle1A = 0
        usosTransylvanianTackle1A = 0
        intuicionFugaz1A = 0
        usosIntuicionFugaz1A = 0
        reversePass1A = 0
        usosReversePass1A = 0
        slothGripRoll1A = 0
        usosSlothGripRoll1A = 0
        tiroLargo1A = 0
        usosTiroLargo1A = 0
        disparoDeTorbellino1A = 0
        usosDisparoDeTorbellino1A = 0
        disparoConAmague1A = 1
        usosDisparoConAmague1A = 0
        efectoFinbourgh1A = 3
        usosEfectoFinbourgh1A = 0
        knuckleBall1A = 0
        usosKnuckleBall1A = 0
        disparoDeVolea1A = 0
        usosDisparoDeVolea1A = 0
        
        cazador2A = "Mina Meyer"
        agilidad2A = 11
        defensa2A = 16
        reaccion2A = 18
        evasionCazador2A = 14
        disparo2A = 18
        disparosRealizados2A = 0
        fintaDePorskov2A = 0
        usosFintaDePorskov2A = 0
        manoCambiada2A = 1
        usosManoCambiada2A = 0
        roboSpeelman2A = 1
        usosRoboSpeelman2A = 0
        transylvanianTackle2A = 0
        usosTransylvanianTackle2A = 0
        intuicionFugaz2A = 0
        usosIntuicionFugaz2A = 0
        reversePass2A = 0
        usosReversePass2A = 0
        slothGripRoll2A = 0
        usosSlothGripRoll2A = 0
        tiroLargo2A = 2
        usosTiroLargo2A = 0
        disparoDeTorbellino2A = 0
        usosDisparoDeTorbellino2A = 0
        disparoConAmague2A = 0
        usosDisparoConAmague2A = 0
        efectoFinbourgh2A = 0
        usosEfectoFinbourgh2A = 0
        knuckleBall2A = 0
        usosKnuckleBall2A = 0
        disparoDeVolea2A = 0
        usosDisparoDeVolea2A = 0
        
        cazador3A = "Berta Meyer"
        agilidad3A = 17
        defensa3A = 11
        reaccion3A = 16
        evasionCazador3A = 10
        disparo3A = 13
        disparosRealizados3A = 0
        fintaDePorskov3A = 2
        usosFintaDePorskov3A = 0
        manoCambiada3A = 1
        usosManoCambiada3A = 0
        roboSpeelman3A = 0
        usosRoboSpeelman3A = 0
        transylvanianTackle3A = 0
        usosTransylvanianTackle3A = 0
        intuicionFugaz3A = 0
        usosIntuicionFugaz3A = 0
        reversePass3A = 0
        usosReversePass3A = 0
        slothGripRoll3A = 0
        usosSlothGripRoll3A = 0
        tiroLargo3A = 0
        usosTiroLargo3A = 0
        disparoDeTorbellino3A = 1
        usosDisparoDeTorbellino3A = 0
        disparoConAmague3A = 0
        usosDisparoConAmague3A = 0
        efectoFinbourgh3A = 0
        usosEfectoFinbourgh3A = 0
        knuckleBall3A = 0
        usosKnuckleBall3A = 0
        disparoDeVolea3A = 0
        usosDisparoDeVolea3A = 0
        
        buscadorA = "Marta Uno"
        velocidadA = 17
        giroA = 9
        avistamientoA = 10
        evasionBuscadorA = 14
        agarreA = 12
        amagoDeWronskiA = 0
        usosAmagoDeWronskiA = 0
        perspicaciaA = 0
        usosPerspicaciaA = 0
        ultimoAlientoA = 0
        usosUltimoAlientoA = 0
        caidaEnPicadaA = 1
        usosCaidaEnPicadaA = 0
        escarbatoA = 0
        usosEscarbatoA = 0
        plumptonPassA = 0
        usosPlumptonPassA = 0
    }
    else if (equipoA == "Firenze Falcons") {
        guardianA = "Gianna Eberle"
        reflejosA = 15
        voladaLateralA = 13
        presionA = 14
        evasionGuardianA = 9
        atajadaRelampagoA = 2
        usosAtajadaRelampagoA = 0
        starfishAndStickA = 0
        usosStarfishAndStickA = 0
        doubleEightLoopA = 0
        usosDoubleEightLoopA = 0
        allInA = 2
        usosAllInA = 0
        paseLargoA = 1
        usosPaseLargoA = 0
        tiroResbalonA = 0
        usosTiroResbalonA = 0
        
        golpeador1A = "Greta Ianello"
        fuerza1A = 41
        precision1A = 23
        intercepcion1A = 20
        evasionGolpeador1A = 11
        energia1A = 8
        energiaConsumida1A = 0
        golpeDeFrancotirador1A = 0
        usosGolpeDeFrancotirador1A = 0
        bludgerBackbeat1A = 0
        usosBludgerBackbeat1A = 0
        golpeBombeado1A = 2
        usosGolpeBombeado1A = 0
        golpeCanon1A = 0
        usosGolpeCanon1A = 0
        angelGuardian1A = 0
        usosAngelGuardian1A = 0
        interferenciaDeAguila1A = 1
        usosInterferenciaDeAguila1A = 0
        
        golpeador2A = "Pietro Ianello"
        fuerza2A = 45
        precision2A = 18
        intercepcion2A = 12
        evasionGolpeador2A = 9
        energia2A = 8
        energiaConsumida2A = 0
        golpeDeFrancotirador2A = 0
        usosGolpeDeFrancotirador2A = 0
        bludgerBackbeat2A = 1
        usosBludgerBackbeat2A = 0
        golpeBombeado2A = 0
        usosGolpeBombeado2A = 0
        golpeCanon2A = 2
        usosGolpeCanon2A = 0
        angelGuardian2A = 0
        usosAngelGuardian2A = 0
        interferenciaDeAguila2A = 0
        usosInterferenciaDeAguila2A = 0
        
        cazador1A = "Branislava Dark B."
        agilidad1A = 13
        defensa1A = 16
        reaccion1A = 17
        evasionCazador1A = 13
        disparo1A = 17
        disparosRealizados1A = 0
        fintaDePorskov1A = 0
        usosFintaDePorskov1A = 0
        manoCambiada1A = 1
        usosManoCambiada1A = 0
        roboSpeelman1A = 1
        usosRoboSpeelman1A = 0
        transylvanianTackle1A = 0
        usosTransylvanianTackle1A = 0
        intuicionFugaz1A = 0
        usosIntuicionFugaz1A = 0
        reversePass1A = 0
        usosReversePass1A = 0
        slothGripRoll1A = 0
        usosSlothGripRoll1A = 0
        tiroLargo1A = 0
        usosTiroLargo1A = 0
        disparoDeTorbellino1A = 1
        usosDisparoDeTorbellino1A = 0
        disparoConAmague1A = 0
        usosDisparoConAmague1A = 0
        efectoFinbourgh1A = 0
        usosEfectoFinbourgh1A = 0
        knuckleBall1A = 0
        usosKnuckleBall1A = 0
        disparoDeVolea1A = 0
        usosDisparoDeVolea1A = 0
        
        cazador2A = "Dimitri Belikov"
        agilidad2A = 14
        defensa2A = 16
        reaccion2A = 15
        evasionCazador2A = 13
        disparo2A = 18
        disparosRealizados2A = 0
        fintaDePorskov2A = 0
        usosFintaDePorskov2A = 0
        manoCambiada2A = 0
        usosManoCambiada2A = 0
        roboSpeelman2A = 1
        usosRoboSpeelman2A = 0
        transylvanianTackle2A = 0
        usosTransylvanianTackle2A = 0
        intuicionFugaz2A = 0
        usosIntuicionFugaz2A = 0
        reversePass2A = 0
        usosReversePass2A = 0
        slothGripRoll2A = 0
        usosSlothGripRoll2A = 0
        tiroLargo2A = 1
        usosTiroLargo2A = 0
        disparoDeTorbellino2A = 1
        usosDisparoDeTorbellino2A = 0
        disparoConAmague2A = 0
        usosDisparoConAmague2A = 0
        efectoFinbourgh2A = 0
        usosEfectoFinbourgh2A = 0
        knuckleBall2A = 0
        usosKnuckleBall2A = 0
        disparoDeVolea2A = 0
        usosDisparoDeVolea2A = 0
        
        cazador3A = "Donnatello Ferrari"
        agilidad3A = 17
        defensa3A = 15
        reaccion3A = 16
        evasionCazador3A = 15
        disparo3A = 12
        disparosRealizados3A = 0
        fintaDePorskov3A = 2
        usosFintaDePorskov3A = 0
        manoCambiada3A = 0
        usosManoCambiada3A = 0
        roboSpeelman3A = 0
        usosRoboSpeelman3A = 0
        transylvanianTackle3A = 1
        usosTransylvanianTackle3A = 0
        intuicionFugaz3A = 0
        usosIntuicionFugaz3A = 0
        reversePass3A = 1
        usosReversePass3A = 0
        slothGripRoll3A = 0
        usosSlothGripRoll3A = 0
        tiroLargo3A = 0
        usosTiroLargo3A = 0
        disparoDeTorbellino3A = 0
        usosDisparoDeTorbellino3A = 0
        disparoConAmague3A = 0
        usosDisparoConAmague3A = 0
        efectoFinbourgh3A = 0
        usosEfectoFinbourgh3A = 0
        knuckleBall3A = 0
        usosKnuckleBall3A = 0
        disparoDeVolea3A = 0
        usosDisparoDeVolea3A = 0
        
        buscadorA = "Leonor Espino"
        velocidadA = 14
        giroA = 9
        avistamientoA = 11
        evasionBuscadorA = 13
        agarreA = 11
        amagoDeWronskiA = 0
        usosAmagoDeWronskiA = 0
        perspicaciaA = 0
        usosPerspicaciaA = 0
        ultimoAlientoA = 0
        usosUltimoAlientoA = 0
        caidaEnPicadaA = 2
        usosCaidaEnPicadaA = 0
        plumptonPassA = 0
        usosPlumptonPassA = 0
        escarbatoA = 0
        usosEscarbatoA = 0
    }
    else if (equipoA == "Holyhead Harpies") {
        guardianA = "Navir Monteiro"
        reflejosA = 13
        voladaLateralA = 14
        presionA = 12
        evasionGuardianA = 12
        atajadaRelampagoA = 2
        usosAtajadaRelampagoA = 0
        starfishAndStickA = 0
        usosStarfishAndStickA = 0
        doubleEightLoopA = 3
        usosDoubleEightLoopA = 0
        allInA = 0
        usosAllInA = 0
        paseLargoA = 1
        usosPaseLargoA = 0
        tiroResbalonA = 0
        usosTiroResbalonA = 0
        
        golpeador1A = "Keyna Rees"
        fuerza1A = 40
        precision1A = 22
        intercepcion1A = 15
        evasionGolpeador1A = 11
        energia1A = 8
        energiaConsumida1A = 0
        golpeDeFrancotirador1A = 0
        usosGolpeDeFrancotirador1A = 0
        bludgerBackbeat1A = 1
        usosBludgerBackbeat1A = 0
        golpeBombeado1A = 2
        usosGolpeBombeado1A = 0
        golpeCanon1A = 0
        usosGolpeCanon1A = 0
        angelGuardian1A = 0
        usosAngelGuardian1A = 0
        interferenciaDeAguila1A = 0
        usosInterferenciaDeAguila1A = 0
        
        golpeador2A = "Elin Hill"
        fuerza2A = 41
        precision2A = 16
        intercepcion2A = 24
        evasionGolpeador2A = 11
        energia2A = 8
        energiaConsumida2A = 0
        golpeDeFrancotirador2A = 1
        usosGolpeDeFrancotirador2A = 0
        bludgerBackbeat2A = 0
        usosBludgerBackbeat2A = 0
        golpeBombeado2A = 0
        usosGolpeBombeado2A = 0
        golpeCanon2A = 0
        usosGolpeCanon2A = 0
        angelGuardian2A = 2
        usosAngelGuardian2A = 0
        interferenciaDeAguila2A = 0
        usosInterferenciaDeAguila2A = 0
        
        cazador1A = "Akihiro Momo"
        agilidad1A = 15
        defensa1A = 15
        reaccion1A = 15
        evasionCazador1A = 16
        disparo1A = 18
        disparosRealizados1A = 0
        fintaDePorskov1A = 0
        usosFintaDePorskov1A = 0
        manoCambiada1A = 0
        usosManoCambiada1A = 0
        roboSpeelman1A = 0
        usosRoboSpeelman1A = 0
        transylvanianTackle1A = 0
        usosTransylvanianTackle1A = 0
        intuicionFugaz1A = 1
        usosIntuicionFugaz1A = 0
        reversePass1A = 0
        usosReversePass1A = 0
        slothGripRoll1A = 0
        usosSlothGripRoll1A = 0
        tiroLargo1A = 0
        usosTiroLargo1A = 0
        disparoDeTorbellino1A = 0
        usosDisparoDeTorbellino1A = 0
        disparoConAmague1A = 0
        usosDisparoConAmague1A = 0
        efectoFinbourgh1A = 1
        usosEfectoFinbourgh1A = 0
        knuckleBall1A = 1
        usosKnuckleBall1A = 0
        disparoDeVolea1A = 0
        usosDisparoDeVolea1A = 0
        
        cazador2A = "Whatu Lloyd"
        agilidad2A = 16
        defensa2A = 18
        reaccion2A = 13
        evasionCazador2A = 15
        disparo2A = 15
        disparosRealizados2A = 0
        fintaDePorskov2A = 0
        usosFintaDePorskov2A = 0
        manoCambiada2A = 1
        usosManoCambiada2A = 0
        roboSpeelman2A = 0
        usosRoboSpeelman2A = 0
        transylvanianTackle2A = 1
        usosTransylvanianTackle2A = 0
        intuicionFugaz2A = 0
        usosIntuicionFugaz2A = 0
        reversePass2A = 1
        usosReversePass2A = 0
        slothGripRoll2A = 0
        usosSlothGripRoll2A = 0
        tiroLargo2A = 0
        usosTiroLargo2A = 0
        disparoDeTorbellino2A = 0
        usosDisparoDeTorbellino2A = 0
        disparoConAmague2A = 0
        usosDisparoConAmague2A = 0
        efectoFinbourgh2A = 0
        usosEfectoFinbourgh2A = 0
        knuckleBall2A = 0
        usosKnuckleBall2A = 0
        disparoDeVolea2A = 0
        usosDisparoDeVolea2A = 0
        
        cazador3A = "Altaira Ashryver"
        agilidad3A = 12
        defensa3A = 15
        reaccion3A = 16
        evasionCazador3A = 14
        disparo3A = 15
        disparosRealizados3A = 0
        fintaDePorskov3A = 0
        usosFintaDePorskov3A = 0
        manoCambiada3A = 1
        usosManoCambiada3A = 0
        roboSpeelman3A = 1
        usosRoboSpeelman3A = 0
        transylvanianTackle3A = 0
        usosTransylvanianTackle3A = 0
        intuicionFugaz3A = 0
        usosIntuicionFugaz3A = 0
        reversePass3A = 0
        usosReversePass3A = 0
        slothGripRoll3A = 0
        usosSlothGripRoll3A = 0
        tiroLargo3A = 0
        usosTiroLargo3A = 0
        disparoDeTorbellino3A = 0
        usosDisparoDeTorbellino3A = 0
        disparoConAmague3A = 0
        usosDisparoConAmague3A = 0
        efectoFinbourgh3A = 1
        usosEfectoFinbourgh3A = 0
        knuckleBall3A = 0
        usosKnuckleBall3A = 0
        disparoDeVolea3A = 0
        usosDisparoDeVolea3A = 0
        
        buscadorA = "Vixen Redwayne"
        velocidadA = 18
        giroA = 13
        avistamientoA = 16
        evasionBuscadorA = 16
        agarreA = 12
        amagoDeWronskiA = 0
        usosAmagoDeWronskiA = 0
        perspicaciaA = 0
        usosPerspicaciaA = 0
        ultimoAlientoA = 0
        usosUltimoAlientoA = 0
        caidaEnPicadaA = 2
        usosCaidaEnPicadaA = 0
        plumptonPassA = 0
        usosPlumptonPassA = 0
        escarbatoA = 0
        usosEscarbatoA = 0
    }
    else if (equipoA == "Kattegat Krakor") {
        guardianA = "Olaf Ragnarsson"
        reflejosA = 18
        voladaLateralA = 17
        presionA = 9
        evasionGuardianA = 8
        atajadaRelampagoA = 0
        usosAtajadaRelampagoA = 0
        starfishAndStickA = 2
        usosStarfishAndStickA = 0
        doubleEightLoopA = 3
        usosDoubleEightLoopA = 0
        allInA = 0
        usosAllInA = 0
        paseLargoA = 0
        usosPaseLargoA = 0
        tiroResbalonA = 1
        usosTiroResbalonA = 0
        
        golpeador1A = "John Smith"
        fuerza1A = 43
        precision1A = 20
        intercepcion1A = 14
        evasionGolpeador1A = 14
        energia1A = 8
        energiaConsumida1A = 0
        golpeDeFrancotirador1A = 1
        usosGolpeDeFrancotirador1A = 0
        bludgerBackbeat1A = 0
        usosBludgerBackbeat1A = 0
        golpeBombeado1A = 0
        usosGolpeBombeado1A = 0
        golpeCanon1A = 2
        usosGolpeCanon1A = 0
        angelGuardian1A = 0
        usosAngelGuardian1A = 0
        interferenciaDeAguila1A = 0
        usosInterferenciaDeAguila1A = 0
        
        golpeador2A = "Ace Williams"
        fuerza2A = 41
        precision2A = 17
        intercepcion2A = 21
        evasionGolpeador2A = 13
        energia2A = 8
        energiaConsumida2A = 0
        golpeDeFrancotirador2A = 0
        usosGolpeDeFrancotirador2A = 0
        bludgerBackbeat2A = 1
        usosBludgerBackbeat2A = 0
        golpeBombeado2A = 0
        usosGolpeBombeado2A = 0
        golpeCanon2A = 0
        usosGolpeCanon2A = 0
        angelGuardian2A = 2
        usosAngelGuardian2A = 0
        interferenciaDeAguila2A = 0
        usosInterferenciaDeAguila2A = 0
        
        cazador1A = "Klaus Thorsen"
        agilidad1A = 20
        defensa1A = 11
        reaccion1A = 16
        evasionCazador1A = 14
        disparo1A = 19
        disparosRealizados1A = 0
        fintaDePorskov1A = 1
        usosFintaDePorskov1A = 0
        manoCambiada1A = 1
        usosManoCambiada1A = 0
        roboSpeelman1A = 0
        usosRoboSpeelman1A = 0
        transylvanianTackle1A = 0
        usosTransylvanianTackle1A = 0
        intuicionFugaz1A = 0
        usosIntuicionFugaz1A = 0
        reversePass1A = 0
        usosReversePass1A = 0
        slothGripRoll1A = 0
        usosSlothGripRoll1A = 0
        tiroLargo1A = 0
        usosTiroLargo1A = 0
        disparoDeTorbellino1A = 0
        usosDisparoDeTorbellino1A = 0
        disparoConAmague1A = 0
        usosDisparoConAmague1A = 0
        efectoFinbourgh1A = 2
        usosEfectoFinbourgh1A = 0
        knuckleBall1A = 0
        usosKnuckleBall1A = 0
        disparoDeVolea1A = 0
        usosDisparoDeVolea1A = 0
        
        cazador2A = "Zahara Nabirye"
        agilidad2A = 13
        defensa2A = 18
        reaccion2A = 13
        evasionCazador2A = 16
        disparo2A = 20
        disparosRealizados2A = 0
        fintaDePorskov2A = 0
        usosFintaDePorskov2A = 0
        manoCambiada2A = 0
        usosManoCambiada2A = 0
        roboSpeelman2A = 0
        usosRoboSpeelman2A = 0
        transylvanianTackle2A = 1
        usosTransylvanianTackle2A = 0
        intuicionFugaz2A = 0
        usosIntuicionFugaz2A = 0
        reversePass2A = 0
        usosReversePass2A = 0
        slothGripRoll2A = 0
        usosSlothGripRoll2A = 0
        tiroLargo2A = 0
        usosTiroLargo2A = 0
        disparoDeTorbellino2A = 0
        usosDisparoDeTorbellino2A = 0
        disparoConAmague2A = 0
        usosDisparoConAmague2A = 0
        efectoFinbourgh2A = 1
        usosEfectoFinbourgh2A = 0
        knuckleBall2A = 0
        usosKnuckleBall2A = 0
        disparoDeVolea2A = 2
        usosDisparoDeVolea2A = 0
        
        cazador3A = "Asa Haraldsson"
        agilidad3A = 15
        defensa3A = 12
        reaccion3A = 17
        evasionCazador3A = 14
        disparo3A = 14
        disparosRealizados3A = 0
        fintaDePorskov3A = 0
        usosFintaDePorskov3A = 0
        manoCambiada3A = 1
        usosManoCambiada3A = 0
        roboSpeelman3A = 0
        usosRoboSpeelman3A = 0
        transylvanianTackle3A = 0
        usosTransylvanianTackle3A = 0
        intuicionFugaz3A = 1
        usosIntuicionFugaz3A = 0
        reversePass3A = 0
        usosReversePass3A = 0
        slothGripRoll3A = 0
        usosSlothGripRoll3A = 0
        tiroLargo3A = 0
        usosTiroLargo3A = 0
        disparoDeTorbellino3A = 0
        usosDisparoDeTorbellino3A = 0
        disparoConAmague3A = 0
        usosDisparoConAmague3A = 0
        efectoFinbourgh3A = 1
        usosEfectoFinbourgh3A = 0
        knuckleBall3A = 0
        usosKnuckleBall3A = 0
        disparoDeVolea3A = 0
        usosDisparoDeVolea3A = 0
        
        buscadorA = "Sigrid Evensen"
        velocidadA = 18
        giroA = 14
        avistamientoA = 16
        evasionBuscadorA = 15
        agarreA = 12
        amagoDeWronskiA = 2
        usosAmagoDeWronskiA = 0
        perspicaciaA = 0
        usosPerspicaciaA = 0
        ultimoAlientoA = 0
        usosUltimoAlientoA = 0
        caidaEnPicadaA = 1
        usosCaidaEnPicadaA = 0
        plumptonPassA = 0
        usosPlumptonPassA = 0
        escarbatoA = 0
        usosEscarbatoA = 0
    }
    else if (equipoA == "Montrose Magpies") {
        guardianA = "Johannes Strauss"
        reflejosA = 17
        voladaLateralA = 16
        presionA = 9
        evasionGuardianA = 12
        atajadaRelampagoA = 2
        usosAtajadaRelampagoA = 0
        starfishAndStickA = 0
        usosStarfishAndStickA = 0
        doubleEightLoopA = 3
        usosDoubleEightLoopA = 0
        allInA = 0
        usosAllInA = 0
        paseLargoA = 1
        usosPaseLargoA = 0
        tiroResbalonA = 0
        usosTiroResbalonA = 0

        golpeador1A = "Noeline McFarlan"
        fuerza1A = 40
        precision1A = 23
        intercepcion1A = 16
        evasionGolpeador1A = 12
        energia1A = 9
        energiaConsumida1A = 0
        golpeDeFrancotirador1A = 1
        usosGolpeDeFrancotirador1A = 0
        bludgerBackbeat1A = 0
        usosBludgerBackbeat1A = 0
        golpeBombeado1A = 2
        usosGolpeBombeado1A = 0
        golpeCanon1A = 0
        usosGolpeCanon1A = 0
        angelGuardian1A = 0
        usosAngelGuardian1A = 0
        interferenciaDeAguila1A = 0
        usosInterferenciaDeAguila1A = 0

        golpeador2A = "Sophie Granger"
        fuerza2A = 41
        precision2A = 22
        intercepcion2A = 18
        evasionGolpeador2A = 12
        energia2A = 9
        energiaConsumida2A = 0
        golpeDeFrancotirador2A = 0
        usosGolpeDeFrancotirador2A = 0
        bludgerBackbeat2A = 1
        usosBludgerBackbeat2A = 0
        golpeBombeado2A = 2
        usosGolpeBombeado2A = 0
        golpeCanon2A = 0
        usosGolpeCanon2A = 0
        angelGuardian2A = 0
        usosAngelGuardian2A = 0
        interferenciaDeAguila2A = 0
        usosInterferenciaDeAguila2A = 0

        cazador1A = "Mica Gryffindor"
        agilidad1A = 18
        defensa1A = 18
        reaccion1A = 15
        evasionCazador1A = 14
        disparo1A = 17
        disparosRealizados1A = 0
        fintaDePorskov1A = 1
        usosFintaDePorskov1A = 0
        manoCambiada1A = 0
        usosManoCambiada1A = 0
        roboSpeelman1A = 0
        usosRoboSpeelman1A = 0
        transylvanianTackle1A = 0
        usosTransylvanianTackle1A = 0
        intuicionFugaz1A = 2
        usosIntuicionFugaz1A = 0
        reversePass1A = 0
        usosReversePass1A = 0
        slothGripRoll1A = 0
        usosSlothGripRoll1A = 0
        tiroLargo1A = 0
        usosTiroLargo1A = 0
        disparoDeTorbellino1A = 2
        usosDisparoDeTorbellino1A = 0
        disparoConAmague1A = 0
        usosDisparoConAmague1A = 0
        efectoFinbourgh1A = 0
        usosEfectoFinbourgh1A = 0
        knuckleBall1A = 0
        usosKnuckleBall1A = 0
        disparoDeVolea1A = 0
        usosDisparoDeVolea1A = 0

        cazador2A = "Auxerre de Rune"
        agilidad2A = 10
        defensa2A = 20
        reaccion2A = 16
        evasionCazador2A = 13
        disparo2A = 19
        disparosRealizados2A = 0
        fintaDePorskov2A = 0
        usosFintaDePorskov2A = 0
        manoCambiada2A = 0
        usosManoCambiada2A = 0
        roboSpeelman2A = 1
        usosRoboSpeelman2A = 0
        transylvanianTackle2A = 0
        usosTransylvanianTackle2A = 0
        intuicionFugaz2A = 0
        usosIntuicionFugaz2A = 0
        reversePass2A = 0
        usosReversePass2A = 0
        slothGripRoll2A = 0
        usosSlothGripRoll2A = 0
        tiroLargo2A = 2
        usosTiroLargo2A = 0
        disparoDeTorbellino2A = 0
        usosDisparoDeTorbellino2A = 0
        disparoConAmague2A = 0
        usosDisparoConAmague2A = 0
        efectoFinbourgh2A = 0
        usosEfectoFinbourgh2A = 0
        knuckleBall2A = 0
        usosKnuckleBall2A = 0
        disparoDeVolea2A = 1
        usosDisparoDeVolea2A = 0

        cazador3A = "Kenzo Ito"
        agilidad3A = 12
        defensa3A = 14
        reaccion3A = 14
        evasionCazador3A = 15
        disparo3A = 20
        disparosRealizados3A = 0
        fintaDePorskov3A = 0
        usosFintaDePorskov3A = 0
        manoCambiada3A = 0
        usosManoCambiada3A = 0
        roboSpeelman3A = 0
        usosRoboSpeelman3A = 0
        transylvanianTackle3A = 0
        usosTransylvanianTackle3A = 0
        intuicionFugaz3A = 1
        usosIntuicionFugaz3A = 0
        reversePass3A = 0
        usosReversePass3A = 0
        slothGripRoll3A = 0
        usosSlothGripRoll3A = 0
        tiroLargo3A = 0
        usosTiroLargo3A = 0
        disparoDeTorbellino3A = 0
        usosDisparoDeTorbellino3A = 0
        disparoConAmague3A = 0
        usosDisparoConAmague3A = 0
        efectoFinbourgh3A = 2
        usosEfectoFinbourgh3A = 0
        knuckleBall3A = 1
        usosKnuckleBall3A = 0
        disparoDeVolea3A = 0
        usosDisparoDeVolea3A = 0

        buscadorA = "Megan Baxter"
        velocidadA = 15
        giroA = 14
        avistamientoA = 15
        evasionBuscadorA = 14
        agarreA = 12
        amagoDeWronskiA = 2
        usosAmagoDeWronskiA = 0
        perspicaciaA = 0
        usosPerspicaciaA = 0
        ultimoAlientoA = 0
        usosUltimoAlientoA = 0
        caidaEnPicadaA = 0
        usosCaidaEnPicadaA = 0
        plumptonPassA = 1
        usosPlumptonPassA = 0
        escarbatoA = 0
        usosEscarbatoA = 0
    }
    else if (equipoA == "Paris Promise") {
        guardianA = "Marius Fric"
        reflejosA = 16
        voladaLateralA = 15
        presionA = 7
        evasionGuardianA = 10
        atajadaRelampagoA = 2
        usosAtajadaRelampagoA = 0
        starfishAndStickA = 0
        usosStarfishAndStickA = 0
        doubleEightLoopA = 3
        usosDoubleEightLoopA = 0
        allInA = 0
        usosAllInA = 0
        paseLargoA = 0
        usosPaseLargoA = 0
        tiroResbalonA = 1
        usosTiroResbalonA = 0

        golpeador1A = "Ferman Eryigit"
        fuerza1A = 42
        precision1A = 23
        intercepcion1A = 17
        evasionGolpeador1A = 12
        energia1A = 8
        energiaConsumida1A = 0
        golpeDeFrancotirador1A = 0
        usosGolpeDeFrancotirador1A = 0
        bludgerBackbeat1A = 2
        usosBludgerBackbeat1A = 0
        golpeBombeado1A = 1
        usosGolpeBombeado1A = 0
        golpeCanon1A = 0
        usosGolpeCanon1A = 0
        angelGuardian1A = 0
        usosAngelGuardian1A = 0
        interferenciaDeAguila1A = 0
        usosInterferenciaDeAguila1A = 0

        golpeador2A = "Natalya Arsenyeva"
        fuerza2A = 45
        precision2A = 18
        intercepcion2A = 7
        evasionGolpeador2A = 10
        energia2A = 8
        energiaConsumida2A = 0
        golpeDeFrancotirador2A = 0
        usosGolpeDeFrancotirador2A = 0
        bludgerBackbeat2A = 1
        usosBludgerBackbeat2A = 0
        golpeBombeado2A = 0
        usosGolpeBombeado2A = 0
        golpeCanon2A = 1
        usosGolpeCanon2A = 0
        angelGuardian2A = 0
        usosAngelGuardian2A = 0
        interferenciaDeAguila2A = 0
        usosInterferenciaDeAguila2A = 0

        cazador1A = "Joanne Fontaine"
        agilidad1A = 21
        defensa1A = 13
        reaccion1A = 14
        evasionCazador1A = 16
        disparo1A = 17
        disparosRealizados1A = 0
        fintaDePorskov1A = 0
        usosFintaDePorskov1A = 0
        manoCambiada1A = 1
        usosManoCambiada1A = 0
        roboSpeelman1A = 0
        usosRoboSpeelman1A = 0
        transylvanianTackle1A = 0
        usosTransylvanianTackle1A = 0
        intuicionFugaz1A = 1
        usosIntuicionFugaz1A = 0
        reversePass1A = 0
        usosReversePass1A = 0
        slothGripRoll1A = 0
        usosSlothGripRoll1A = 0
        tiroLargo1A = 0
        usosTiroLargo1A = 0
        disparoDeTorbellino1A = 0
        usosDisparoDeTorbellino1A = 0
        disparoConAmague1A = 2
        usosDisparoConAmague1A = 0
        efectoFinbourgh1A = 0
        usosEfectoFinbourgh1A = 0
        knuckleBall1A = 0
        usosKnuckleBall1A = 0
        disparoDeVolea1A = 0
        usosDisparoDeVolea1A = 0

        cazador2A = "Belmont Dubois"
        agilidad2A = 16
        defensa2A = 15
        reaccion2A = 14
        evasionCazador2A = 16
        disparo2A = 20
        disparosRealizados2A = 0
        fintaDePorskov2A = 0
        usosFintaDePorskov2A = 0
        manoCambiada2A = 1
        usosManoCambiada2A = 0
        roboSpeelman2A = 0
        usosRoboSpeelman2A = 0
        transylvanianTackle2A = 0
        usosTransylvanianTackle2A = 0
        intuicionFugaz2A = 0
        usosIntuicionFugaz2A = 0
        reversePass2A = 0
        usosReversePass2A = 0
        slothGripRoll2A = 0
        usosSlothGripRoll2A = 0
        tiroLargo2A = 0
        usosTiroLargo2A = 0
        disparoDeTorbellino2A = 0
        usosDisparoDeTorbellino2A = 0
        disparoConAmague2A = 0
        usosDisparoConAmague2A = 0
        efectoFinbourgh2A = 3
        usosEfectoFinbourgh2A = 0
        knuckleBall2A = 0
        usosKnuckleBall2A = 0
        disparoDeVolea2A = 0
        usosDisparoDeVolea2A = 0

        cazador3A = "Melissandre Roux"
        agilidad3A = 12
        defensa3A = 19
        reaccion3A = 16
        evasionCazador3A = 13
        disparo3A = 16
        disparosRealizados3A = 0
        fintaDePorskov3A = 0
        usosFintaDePorskov3A = 0
        manoCambiada3A = 1
        usosManoCambiada3A = 0
        roboSpeelman3A = 1
        usosRoboSpeelman3A = 0
        transylvanianTackle3A = 2
        usosTransylvanianTackle3A = 0
        intuicionFugaz3A = 0
        usosIntuicionFugaz3A = 0
        reversePass3A = 0
        usosReversePass3A = 0
        slothGripRoll3A = 0
        usosSlothGripRoll3A = 0
        tiroLargo3A = 0
        usosTiroLargo3A = 0
        disparoDeTorbellino3A = 0
        usosDisparoDeTorbellino3A = 0
        disparoConAmague3A = 0
        usosDisparoConAmague3A = 0
        efectoFinbourgh3A = 0
        usosEfectoFinbourgh3A = 0
        knuckleBall3A = 0
        usosKnuckleBall3A = 0
        disparoDeVolea3A = 0
        usosDisparoDeVolea3A = 0

        buscadorA = "Elizabeth Wallace"
        velocidadA = 16
        giroA = 14
        avistamientoA = 13
        evasionBuscadorA = 14
        agarreA = 12
        amagoDeWronskiA = 0
        usosAmagoDeWronskiA = 0
        perspicaciaA = 0
        usosPerspicaciaA = 0
        ultimoAlientoA = 0
        usosUltimoAlientoA = 0
        caidaEnPicadaA = 1
        usosCaidaEnPicadaA = 0
        plumptonPassA = 0
        usosPlumptonPassA = 0
        escarbatoA = 0
        usosEscarbatoA = 0
    }
    else if (equipoA == "Tutshill Tornados") {
        guardianA = "Maida Black Yaxley"
        reflejosA = 13
        voladaLateralA = 14
        presionA = 14
        evasionGuardianA = 10
        atajadaRelampagoA = 2
        usosAtajadaRelampagoA = 0
        starfishAndStickA = 0
        usosStarfishAndStickA = 0
        doubleEightLoopA = 3
        usosDoubleEightLoopA = 0
        allInA = 0
        usosAllInA = 0
        paseLargoA = 1
        usosPaseLargoA = 0
        tiroResbalonA = 0
        usosTiroResbalonA = 0
        
        golpeador1A = "Jeremy Triviani"
        fuerza1A = 40
        precision1A = 22
        intercepcion1A = 17
        evasionGolpeador1A = 13
        energia1A = 9
        energiaConsumida1A = 0
        golpeDeFrancotirador1A = 0
        usosGolpeDeFrancotirador1A = 0
        bludgerBackbeat1A = 1
        usosBludgerBackbeat1A = 0
        golpeBombeado1A = 2
        usosGolpeBombeado1A = 0
        golpeCanon1A = 0
        usosGolpeCanon1A = 0
        angelGuardian1A = 0
        usosAngelGuardian1A = 0
        interferenciaDeAguila1A = 0
        usosInterferenciaDeAguila1A = 0
        
        golpeador2A = "Claire Skeeter"
        fuerza2A = 41
        precision2A = 17
        intercepcion2A = 21
        evasionGolpeador2A = 12
        energia2A = 8
        energiaConsumida2A = 0
        golpeDeFrancotirador2A = 0
        usosGolpeDeFrancotirador2A = 0
        bludgerBackbeat2A = 0
        usosBludgerBackbeat2A = 0
        golpeBombeado2A = 2
        usosGolpeBombeado2A = 0
        golpeCanon2A = 0
        usosGolpeCanon2A = 0
        angelGuardian2A = 0
        usosAngelGuardian2A = 0
        interferenciaDeAguila2A = 1
        usosInterferenciaDeAguila2A = 0
        
        cazador1A = "Aedis Greengrass"
        agilidad1A = 17
        defensa1A = 12
        reaccion1A = 12
        evasionCazador1A = 15
        disparo1A = 21
        disparosRealizados1A = 0
        fintaDePorskov1A = 0
        usosFintaDePorskov1A = 0
        manoCambiada1A = 0
        usosManoCambiada1A = 0
        roboSpeelman1A = 0
        usosRoboSpeelman1A = 0
        transylvanianTackle1A = 0
        usosTransylvanianTackle1A = 0
        intuicionFugaz1A = 0
        usosIntuicionFugaz1A = 0
        reversePass1A = 0
        usosReversePass1A = 0
        slothGripRoll1A = 0
        usosSlothGripRoll1A = 0
        tiroLargo1A = 0
        usosTiroLargo1A = 0
        disparoDeTorbellino1A = 0
        usosDisparoDeTorbellino1A = 0
        disparoConAmague1A = 2
        usosDisparoConAmague1A = 0
        efectoFinbourgh1A = 1
        usosEfectoFinbourgh1A = 0
        knuckleBall1A = 0
        usosKnuckleBall1A = 0
        disparoDeVolea1A = 2
        usosDisparoDeVolea1A = 0
        
        cazador2A = "Rowan Ashryver"
        agilidad2A = 15
        defensa2A = 13
        reaccion2A = 15
        evasionCazador2A = 11
        disparo2A = 17
        disparosRealizados2A = 0
        fintaDePorskov2A = 0
        usosFintaDePorskov2A = 0
        manoCambiada2A = 0
        usosManoCambiada2A = 0
        roboSpeelman2A = 0
        usosRoboSpeelman2A = 0
        transylvanianTackle2A = 1
        usosTransylvanianTackle2A = 0
        intuicionFugaz2A = 0
        usosIntuicionFugaz2A = 0
        reversePass2A = 1
        usosReversePass2A = 0
        slothGripRoll2A = 0
        usosSlothGripRoll2A = 0
        tiroLargo2A = 0
        usosTiroLargo2A = 0
        disparoDeTorbellino2A = 0
        usosDisparoDeTorbellino2A = 0
        disparoConAmague2A = 0
        usosDisparoConAmague2A = 0
        efectoFinbourgh2A = 0
        usosEfectoFinbourgh2A = 0
        knuckleBall2A = 1
        usosKnuckleBall2A = 0
        disparoDeVolea2A = 0
        usosDisparoDeVolea2A = 0
        
        cazador3A = "Luca Van Halen"
        agilidad3A = 18
        defensa3A = 14
        reaccion3A = 15
        evasionCazador3A = 13
        disparo3A = 19
        disparosRealizados3A = 0
        fintaDePorskov3A = 0
        usosFintaDePorskov3A = 0
        manoCambiada3A = 0
        usosManoCambiada3A = 0
        roboSpeelman3A = 0
        usosRoboSpeelman3A = 0
        transylvanianTackle3A = 0
        usosTransylvanianTackle3A = 0
        intuicionFugaz3A = 0
        usosIntuicionFugaz3A = 0
        reversePass3A = 0
        usosReversePass3A = 0
        slothGripRoll3A = 0
        usosSlothGripRoll3A = 0
        tiroLargo3A = 0
        usosTiroLargo3A = 0
        disparoDeTorbellino3A = 2
        usosDisparoDeTorbellino3A = 0
        disparoConAmague3A = 1
        usosDisparoConAmague3A = 0
        efectoFinbourgh3A = 0
        usosEfectoFinbourgh3A = 0
        knuckleBall3A = 0
        usosKnuckleBall3A = 0
        disparoDeVolea3A = 0
        usosDisparoDeVolea3A = 0
        
        buscadorA = "Thiago Moraes"
        velocidadA = 19
        giroA = 10
        avistamientoA = 13
        evasionBuscadorA = 15
        agarreA = 10
        amagoDeWronskiA = 0
        usosAmagoDeWronskiA = 0
        perspicaciaA = 1
        usosPerspicaciaA = 0
        ultimoAlientoA = 0
        usosUltimoAlientoA = 0
        caidaEnPicadaA = 0
        usosCaidaEnPicadaA = 0
        plumptonPassA = 0
        usosPlumptonPassA = 0
        escarbatoA = 0
        usosEscarbatoA = 0
    }
    else if (equipoA == "Vratsa Vultures") {
        guardianA = "Lev Zograf"
        reflejosA = 14
        voladaLateralA = 16
        presionA = 10
        evasionGuardianA = 13
        atajadaRelampagoA = 0
        usosAtajadaRelampagoA = 0
        starfishAndStickA = 0
        usosStarfishAndStickA = 0
        doubleEightLoopA = 2
        usosDoubleEightLoopA = 0
        allInA = 0
        usosAllInA = 0
        paseLargoA = 0
        usosPaseLargoA = 0
        tiroResbalonA = 1
        usosTiroResbalonA = 0
        
        golpeador1A = "Pyotr Vulchanov"
        fuerza1A = 45
        precision1A = 15
        intercepcion1A = 9
        evasionGolpeador1A = 9
        energia1A = 8
        energiaConsumida1A = 0
        golpeDeFrancotirador1A = 0
        usosGolpeDeFrancotirador1A = 0
        bludgerBackbeat1A = 1
        usosBludgerBackbeat1A = 0
        golpeBombeado1A = 1
        usosGolpeBombeado1A = 0
        golpeCanon1A = 0
        usosGolpeCanon1A = 0
        angelGuardian1A = 0
        usosAngelGuardian1A = 0
        interferenciaDeAguila1A = 0
        usosInterferenciaDeAguila1A = 0
        
        golpeador2A = "Dimitar Draganov"
        fuerza2A = 42
        precision2A = 17
        intercepcion2A = 14
        evasionGolpeador2A = 10
        energia2A = 9
        energiaConsumida2A = 0
        golpeDeFrancotirador2A = 1
        usosGolpeDeFrancotirador2A = 0
        bludgerBackbeat2A = 0
        usosBludgerBackbeat2A = 0
        golpeBombeado2A = 1
        usosGolpeBombeado2A = 0
        golpeCanon2A = 0
        usosGolpeCanon2A = 0
        angelGuardian2A = 0
        usosAngelGuardian2A = 0
        interferenciaDeAguila2A = 0
        usosInterferenciaDeAguila2A = 0
        
        cazador1A = "Akram Tolkien"
        agilidad1A = 17
        defensa1A = 15
        reaccion1A = 13
        evasionCazador1A = 12
        disparo1A = 15
        disparosRealizados1A = 0
        fintaDePorskov1A = 0
        usosFintaDePorskov1A = 0
        manoCambiada1A = 0
        usosManoCambiada1A = 0
        roboSpeelman1A = 0
        usosRoboSpeelman1A = 0
        transylvanianTackle1A = 1
        usosTransylvanianTackle1A = 0
        intuicionFugaz1A = 0
        usosIntuicionFugaz1A = 0
        reversePass1A = 0
        usosReversePass1A = 0
        slothGripRoll1A = 0
        usosSlothGripRoll1A = 0
        tiroLargo1A = 0
        usosTiroLargo1A = 0
        disparoDeTorbellino1A = 1
        usosDisparoDeTorbellino1A = 0
        disparoConAmague1A = 0
        usosDisparoConAmague1A = 0
        efectoFinbourgh1A = 1
        usosEfectoFinbourgh1A = 0
        knuckleBall1A = 0
        usosKnuckleBall1A = 0
        disparoDeVolea1A = 0
        usosDisparoDeVolea1A = 0
        
        cazador2A = "Anan Kbait"
        agilidad2A = 14
        defensa2A = 15
        reaccion2A = 14
        evasionCazador2A = 14
        disparo2A = 19
        disparosRealizados2A = 0
        fintaDePorskov2A = 0
        usosFintaDePorskov2A = 0
        manoCambiada2A = 1
        usosManoCambiada2A = 0
        roboSpeelman2A = 0
        usosRoboSpeelman2A = 0
        transylvanianTackle2A = 2
        usosTransylvanianTackle2A = 0
        intuicionFugaz2A = 0
        usosIntuicionFugaz2A = 0
        reversePass2A = 0
        usosReversePass2A = 0
        slothGripRoll2A = 0
        usosSlothGripRoll2A = 0
        tiroLargo2A = 0
        usosTiroLargo2A = 0
        disparoDeTorbellino2A = 0
        usosDisparoDeTorbellino2A = 0
        disparoConAmague2A = 0
        usosDisparoConAmague2A = 0
        efectoFinbourgh2A = 0
        usosEfectoFinbourgh2A = 0
        knuckleBall2A = 0
        usosKnuckleBall2A = 0
        disparoDeVolea2A = 0
        usosDisparoDeVolea2A = 0
        
        cazador3A = "Vasily Dimitrov"
        agilidad3A = 19
        defensa3A = 15
        reaccion3A = 11
        evasionCazador3A = 12
        disparo3A = 15
        disparosRealizados3A = 0
        fintaDePorskov3A = 1
        usosFintaDePorskov3A = 0
        manoCambiada3A = 0
        usosManoCambiada3A = 0
        roboSpeelman3A = 0
        usosRoboSpeelman3A = 0
        transylvanianTackle3A = 0
        usosTransylvanianTackle3A = 0
        intuicionFugaz3A = 0
        usosIntuicionFugaz3A = 0
        reversePass3A = 0
        usosReversePass3A = 0
        slothGripRoll3A = 0
        usosSlothGripRoll3A = 0
        tiroLargo3A = 1
        usosTiroLargo3A = 0
        disparoDeTorbellino3A = 2
        usosDisparoDeTorbellino3A = 0
        disparoConAmague3A = 0
        usosDisparoConAmague3A = 0
        efectoFinbourgh3A = 0
        usosEfectoFinbourgh3A = 0
        knuckleBall3A = 0
        usosKnuckleBall3A = 0
        disparoDeVolea3A = 0
        usosDisparoDeVolea3A = 0
        
        buscadorA = "Stoyanka Grozda"
        velocidadA = 19
        giroA = 13
        avistamientoA = 13
        evasionBuscadorA = 11
        agarreA = 11
        amagoDeWronskiA = 1
        usosAmagoDeWronskiA = 0
        perspicaciaA = 0
        usosPerspicaciaA = 0
        ultimoAlientoA = 0
        usosUltimoAlientoA = 0
        caidaEnPicadaA = 0
        usosCaidaEnPicadaA = 0
        plumptonPassA = 0
        usosPlumptonPassA = 0
        escarbatoA = 0
        usosEscarbatoA = 0
    }

    if (equipoB == "Dublin Delayers") {
        guardianB = "Barry Ryan"
        reflejosB = 14
        voladaLateralB = 14
        presionB = 13
        evasionGuardianB = 10
        atajadaRelampagoB = 2
        usosAtajadaRelampagoB = 0
        starfishAndStickB = 0
        usosStarfishAndStickB = 0
        doubleEightLoopB = 0
        usosDoubleEightLoopB = 0
        allInB = 1
        usosAllInB = 0
        paseLargoB = 0
        usosPaseLargoB = 0
        tiroResbalonB = 1
        usosTiroResbalonB = 0

        golpeador1B = "Sean Conolly"
        fuerza1B = 47
        precision1B = 16
        intercepcion1B = 12
        evasionGolpeador1B = 12
        energia1B = 9
        energiaConsumida1B = 0
        golpeDeFrancotirador1B = 1
        usosGolpeDeFrancotirador1B = 0
        bludgerBackbeat1B = 0
        usosBludgerBackbeat1B = 0
        golpeBombeado1B = 1
        usosGolpeBombeado1B = 0
        golpeCanon1B = 0
        usosGolpeCanon1B = 0
        angelGuardian1B = 0
        usosAngelGuardian1B = 0
        interferenciaDeAguila1B = 0
        usosInterferenciaDeAguila1B = 0

        golpeador2B = "Cormac Quigley"
        fuerza2B = 42
        precision2B = 17
        intercepcion2B = 15
        evasionGolpeador2B = 11
        energia2B = 8
        energiaConsumida2B = 0
        golpeDeFrancotirador2B = 0
        usosGolpeDeFrancotirador2B = 0
        bludgerBackbeat2B = 1
        usosBludgerBackbeat2B = 0
        golpeBombeado2B = 1
        usosGolpeBombeado2B = 0
        golpeCanon2B = 0
        usosGolpeCanon2B = 0
        angelGuardian2B = 0
        usosAngelGuardian2B = 0
        interferenciaDeAguila2B = 0
        usosInterferenciaDeAguila2B = 0

        cazador1B = "Aislinn Mullet"
        agilidad1B = 15
        defensa1B = 13
        reaccion1B = 12
        evasionCazador1B = 17
        disparo1B = 15
        disparosRealizados1B = 0
        fintaDePorskov1B = 0
        usosFintaDePorskov1B = 0
        manoCambiada1B = 1
        usosManoCambiada1B = 0
        roboSpeelman1B = 0
        usosRoboSpeelman1B = 0
        transylvanianTackle1B = 0
        usosTransylvanianTackle1B = 0
        intuicionFugaz1B = 0
        usosIntuicionFugaz1B = 0
        reversePass1B = 0
        usosReversePass1B = 0
        slothGripRoll1B = 0
        usosSlothGripRoll1B = 0
        tiroLargo1B = 0
        usosTiroLargo1B = 0
        disparoDeTorbellino1B = 0
        usosDisparoDeTorbellino1B = 0
        disparoConAmague1B = 0
        usosDisparoConAmague1B = 0
        efectoFinbourgh1B = 2
        usosEfectoFinbourgh1B = 0
        knuckleBall1B = 0
        usosKnuckleBall1B = 0
        disparoDeVolea1B = 0
        usosDisparoDeVolea1B = 0

        cazador2B = "Maeve Troy"
        agilidad2B = 14
        defensa2B = 17
        reaccion2B = 13
        evasionCazador2B = 13
        disparo2B = 20
        disparosRealizados2B = 0
        fintaDePorskov2B = 0
        usosFintaDePorskov2B = 0
        manoCambiada2B = 0
        usosManoCambiada2B = 0
        roboSpeelman2B = 2
        usosRoboSpeelman2B = 0
        transylvanianTackle2B = 0
        usosTransylvanianTackle2B = 0
        intuicionFugaz2B = 0
        usosIntuicionFugaz2B = 0
        reversePass2B = 0
        usosReversePass2B = 0
        slothGripRoll2B = 0
        usosSlothGripRoll2B = 0
        tiroLargo2B = 0
        usosTiroLargo2B = 0
        disparoDeTorbellino2B = 0
        usosDisparoDeTorbellino2B = 0
        disparoConAmague2B = 0
        usosDisparoConAmague2B = 0
        efectoFinbourgh2B = 0
        usosEfectoFinbourgh2B = 1
        knuckleBall2B = 0
        usosKnuckleBall2B = 0
        disparoDeVolea2B = 1
        usosDisparoDeVolea2B = 0

        cazador3B = "Rosie Moran"
        agilidad3B = 16
        defensa3B = 15
        reaccion3B = 15
        evasionCazador3B = 13
        disparo3B = 13
        disparosRealizados3B = 0
        fintaDePorskov3B = 0
        usosFintaDePorskov3B = 0
        manoCambiada3B = 1
        usosManoCambiada3B = 0
        roboSpeelman3B = 0
        usosRoboSpeelman3B = 0
        transylvanianTackle3B = 2
        usosTransylvanianTackle3B = 0
        intuicionFugaz3B = 1
        usosIntuicionFugaz3B = 0
        reversePass3B = 0
        usosReversePass3B = 0
        slothGripRoll3B = 0
        usosSlothGripRoll3B = 0
        tiroLargo3B = 0
        usosTiroLargo3B = 0
        disparoDeTorbellino3B = 0
        usosDisparoDeTorbellino3B = 0
        disparoConAmague3B = 0
        usosDisparoConAmague3B = 0
        efectoFinbourgh3B = 0
        usosEfectoFinbourgh3B = 0
        knuckleBall3B = 0
        usosKnuckleBall3B = 0
        disparoDeVolea3B = 0
        usosDisparoDeVolea3B = 0

        buscadorB = "Ciara Lynch"
        velocidadB = 19
        giroB = 13
        avistamientoB = 14
        evasionBuscadorB = 17
        agarreB = 12
        amagoDeWronskiB = 1
        usosAmagoDeWronskiB = 0
        perspicaciaB = 0
        usosPerspicaciaB = 0
        ultimoAlientoB = 0
        usosUltimoAlientoB = 0
        caidaEnPicadaB = 0
        usosCaidaEnPicadaB = 0
        plumptonPassB = 0
        usosPlumptonPassB = 0
        escarbatoB = 0
        usosEscarbatoB = 0
    }
    else if (equipoB == "Eisenberg Erklings") {
        guardianB = "Luciana Aymar"
        reflejosB = 14
        voladaLateralB = 16
        presionB = 12
        evasionGuardianB = 8
        atajadaRelampagoB = 1
        usosAtajadaRelampagoB = 0
        starfishAndStickB = 0
        usosStarfishAndStickB = 0
        doubleEightLoopB = 3
        usosDoubleEightLoopB = 0
        allInB = 0
        usosAllInB = 0
        paseLargoB = 0
        usosPaseLargoB = 0
        tiroResbalonB = 1
        usosTiroResbalonB = 0
        
        golpeador1B = "Walda Freites"
        fuerza1B = 41
        precision1B = 20
        intercepcion1B = 15
        evasionGolpeador1B = 14
        energia1B = 8
        energiaConsumida1B = 0
        golpeDeFrancotirador1B = 1
        usosGolpeDeFrancotirador1B = 0
        bludgerBackbeat1B = 0
        usosBludgerBackbeat1B = 0
        golpeBombeado1B = 1
        usosGolpeBombeado1B = 0
        golpeCanon1B = 0
        usosGolpeCanon1B = 0
        angelGuardian1B = 0
        usosAngelGuardian1B = 0
        interferenciaDeAguila1B = 0
        usosInterferenciaDeAguila1B = 0
        
        golpeador2B = "Gretchen Johann"
        fuerza2B = 40
        precision2B = 15
        intercepcion2B = 22
        evasionGolpeador2B = 9
        energia2B = 8
        energiaConsumida2B = 0
        golpeDeFrancotirador2B = 1
        usosGolpeDeFrancotirador2B = 0
        bludgerBackbeat2B = 0
        usosBludgerBackbeat2B = 0
        golpeBombeado2B = 0
        usosGolpeBombeado2B = 0
        golpeCanon2B = 0
        usosGolpeCanon2B = 0
        angelGuardian2B = 2
        usosAngelGuardian2B = 0
        interferenciaDeAguila2B = 0
        usosInterferenciaDeAguila2B = 0
        
        cazador1B = "Jonas Fischer"
        agilidad1B = 15
        defensa1B = 10
        reaccion1B = 13
        evasionCazador1B = 15
        disparo1B = 19
        disparosRealizados1B = 0
        fintaDePorskov1B = 0
        usosFintaDePorskov1B = 0
        manoCambiada1B = 0
        usosManoCambiada1B = 0
        roboSpeelman1B = 0
        usosRoboSpeelman1B = 0
        transylvanianTackle1B = 0
        usosTransylvanianTackle1B = 0
        intuicionFugaz1B = 0
        usosIntuicionFugaz1B = 0
        reversePass1B = 0
        usosReversePass1B = 0
        slothGripRoll1B = 0
        usosSlothGripRoll1B = 0
        tiroLargo1B = 0
        usosTiroLargo1B = 0
        disparoDeTorbellino1B = 0
        usosDisparoDeTorbellino1B = 0
        disparoConAmague1B = 1
        usosDisparoConAmague1B = 0
        efectoFinbourgh1B = 3
        usosEfectoFinbourgh1B = 0
        knuckleBall1B = 0
        usosKnuckleBall1B = 0
        disparoDeVolea1B = 0
        usosDisparoDeVolea1B = 0
        
        cazador2B = "Mina Meyer"
        agilidad2B = 11
        defensa2B = 16
        reaccion2B = 18
        evasionCazador2B = 14
        disparo2B = 18
        disparosRealizados2B = 0
        fintaDePorskov2B = 0
        usosFintaDePorskov2B = 0
        manoCambiada2B = 1
        usosManoCambiada2B = 0
        roboSpeelman2B = 1
        usosRoboSpeelman2B = 0
        transylvanianTackle2B = 0
        usosTransylvanianTackle2B = 0
        intuicionFugaz2B = 0
        usosIntuicionFugaz2B = 0
        reversePass2B = 0
        usosReversePass2B = 0
        slothGripRoll2B = 0
        usosSlothGripRoll2B = 0
        tiroLargo2B = 2
        usosTiroLargo2B = 0
        disparoDeTorbellino2B = 0
        usosDisparoDeTorbellino2B = 0
        disparoConAmague2B = 0
        usosDisparoConAmague2B = 0
        efectoFinbourgh2B = 0
        usosEfectoFinbourgh2B = 0
        knuckleBall2B = 0
        usosKnuckleBall2B = 0
        disparoDeVolea2B = 0
        usosDisparoDeVolea2B = 0
        
        cazador3B = "Berta Meyer"
        agilidad3B = 17
        defensa3B = 11
        reaccion3B = 16
        evasionCazador3B = 10
        disparo3B = 13
        disparosRealizados3B = 0
        fintaDePorskov3B = 2
        usosFintaDePorskov3B = 0
        manoCambiada3B = 1
        usosManoCambiada3B = 0
        roboSpeelman3B = 0
        usosRoboSpeelman3B = 0
        transylvanianTackle3B = 0
        usosTransylvanianTackle3B = 0
        intuicionFugaz3B = 0
        usosIntuicionFugaz3B = 0
        reversePass3B = 0
        usosReversePass3B = 0
        slothGripRoll3B = 0
        usosSlothGripRoll3B = 0
        tiroLargo3B = 0
        usosTiroLargo3B = 0
        disparoDeTorbellino3B = 1
        usosDisparoDeTorbellino3B = 0
        disparoConAmague3B = 0
        usosDisparoConAmague3B = 0
        efectoFinbourgh3B = 0
        usosEfectoFinbourgh3B = 0
        knuckleBall3B = 0
        usosKnuckleBall3B = 0
        disparoDeVolea3B = 0
        usosDisparoDeVolea3B = 0
        
        buscadorB = "Marta Uno"
        velocidadB = 17
        giroB = 9
        avistamientoB = 10
        evasionBuscadorB = 14
        agarreB = 12
        amagoDeWronskiB = 0
        usosAmagoDeWronskiB = 0
        perspicaciaB = 0
        usosPerspicaciaB = 0
        ultimoAlientoB = 0
        usosUltimoAlientoB = 0
        caidaEnPicadaB = 1
        usosCaidaEnPicadaB = 0
        plumptonPassB = 0
        usosPlumptonPassB = 0
        escarbatoB = 0
        usosEscarbatoB = 0
    }
    else if (equipoB == "Firenze Falcons") {
        guardianB = "Gianna Eberle"
        reflejosB = 15
        voladaLateralB = 13
        presionB = 14
        evasionGuardianB = 9
        atajadaRelampagoB = 2
        usosAtajadaRelampagoB = 0
        starfishAndStickB = 0
        usosStarfishAndStickB = 0
        doubleEightLoopB = 0
        usosDoubleEightLoopB = 0
        allInB = 2
        usosAllInB = 0
        paseLargoB = 1
        usosPaseLargoB = 0
        tiroResbalonB = 0
        usosTiroResbalonB = 0
        
        golpeador1B = "Greta Ianello"
        fuerza1B = 41
        precision1B = 23
        intercepcion1B = 20
        evasionGolpeador1B = 11
        energia1B = 8
        energiaConsumida1B = 0
        golpeDeFrancotirador1B = 0
        usosGolpeDeFrancotirador1B = 0
        bludgerBackbeat1B = 0
        usosBludgerBackbeat1B = 0
        golpeBombeado1B = 2
        usosGolpeBombeado1B = 0
        golpeCanon1B = 0
        usosGolpeCanon1B = 0
        angelGuardian1B = 0
        usosAngelGuardian1B = 0
        interferenciaDeAguila1B = 1
        usosInterferenciaDeAguila1B = 0
        
        golpeador2B = "Pietro Ianello"
        fuerza2B = 45
        precision2B = 18
        intercepcion2B = 12
        evasionGolpeador2B = 9
        energia2B = 8
        energiaConsumida2B = 0
        golpeDeFrancotirador2B = 0
        usosGolpeDeFrancotirador2B = 0
        bludgerBackbeat2B = 1
        usosBludgerBackbeat2B = 0
        golpeBombeado2B = 0
        usosGolpeBombeado2B = 0
        golpeCanon2B = 2
        usosGolpeCanon2B = 0
        angelGuardian2B = 0
        usosAngelGuardian2B = 0
        interferenciaDeAguila2B = 0
        usosInterferenciaDeAguila2B = 0
        
        cazador1B = "Branislava Dark B."
        agilidad1B = 13
        defensa1B = 16
        reaccion1B = 17
        evasionCazador1B = 13
        disparo1B = 17
        disparosRealizados1B = 0
        fintaDePorskov1B = 0
        usosFintaDePorskov1B = 0
        manoCambiada1B = 1
        usosManoCambiada1B = 0
        roboSpeelman1B = 1
        usosRoboSpeelman1B = 0
        transylvanianTackle1B = 0
        usosTransylvanianTackle1B = 0
        intuicionFugaz1B = 0
        usosIntuicionFugaz1B = 0
        reversePass1B = 0
        usosReversePass1B = 0
        slothGripRoll1B = 0
        usosSlothGripRoll1B = 0
        tiroLargo1B = 0
        usosTiroLargo1B = 0
        disparoDeTorbellino1B = 1
        usosDisparoDeTorbellino1B = 0
        disparoConAmague1B = 0
        usosDisparoConAmague1B = 0
        efectoFinbourgh1B = 0
        usosEfectoFinbourgh1B = 0
        knuckleBall1B = 0
        usosKnuckleBall1B = 0
        disparoDeVolea1B = 0
        usosDisparoDeVolea1B = 0
        
        cazador2B = "Dimitri Belikov"
        agilidad2B = 14
        defensa2B = 16
        reaccion2B = 15
        evasionCazador2B = 13
        disparo2B = 18
        disparosRealizados2B = 0
        fintaDePorskov2B = 0
        usosFintaDePorskov2B = 0
        manoCambiada2B = 0
        usosManoCambiada2B = 0
        roboSpeelman2B = 1
        usosRoboSpeelman2B = 0
        transylvanianTackle2B = 0
        usosTransylvanianTackle2B = 0
        intuicionFugaz2B = 0
        usosIntuicionFugaz2B = 0
        reversePass2B = 0
        usosReversePass2B = 0
        slothGripRoll2B = 0
        usosSlothGripRoll2B = 0
        tiroLargo2B = 1
        usosTiroLargo2B = 0
        disparoDeTorbellino2B = 1
        usosDisparoDeTorbellino2B = 0
        disparoConAmague2B = 0
        usosDisparoConAmague2B = 0
        efectoFinbourgh2B = 0
        usosEfectoFinbourgh2B = 0
        knuckleBall2B = 0
        usosKnuckleBall2B = 0
        disparoDeVolea2B = 0
        usosDisparoDeVolea2B = 0
        
        cazador3B = "Donnatello Ferrari"
        agilidad3B = 17
        defensa3B = 15
        reaccion3B = 16
        evasionCazador3B = 15
        disparo3B = 12
        disparosRealizados3B = 0
        fintaDePorskov3B = 2
        usosFintaDePorskov3B = 0
        manoCambiada3B = 0
        usosManoCambiada3B = 0
        roboSpeelman3B = 0
        usosRoboSpeelman3B = 0
        transylvanianTackle3B = 1
        usosTransylvanianTackle3B = 0
        intuicionFugaz3B = 0
        usosIntuicionFugaz3B = 0
        reversePass3B = 1
        usosReversePass3B = 0
        slothGripRoll3B = 0
        usosSlothGripRoll3B = 0
        tiroLargo3B = 0
        usosTiroLargo3B = 0
        disparoDeTorbellino3B = 0
        usosDisparoDeTorbellino3B = 0
        disparoConAmague3B = 0
        usosDisparoConAmague3B = 0
        efectoFinbourgh3B = 0
        usosEfectoFinbourgh3B = 0
        knuckleBall3B = 0
        usosKnuckleBall3B = 0
        disparoDeVolea3B = 0
        usosDisparoDeVolea3B = 0
        
        buscadorB = "Leonor Espino"
        velocidadB = 14
        giroB = 9
        avistamientoB = 11
        evasionBuscadorB = 13
        agarreB = 11
        amagoDeWronskiB = 0
        usosAmagoDeWronskiB = 0
        perspicaciaB = 0
        usosPerspicaciaB = 0
        ultimoAlientoB = 0
        usosUltimoAlientoB = 0
        caidaEnPicadaB = 2
        usosCaidaEnPicadaB = 0
        plumptonPassB = 0
        usosPlumptonPassB = 0
        escarbatoB = 0
        usosEscarbatoB = 0
    }
    else if (equipoB == "Holyhead Harpies") {
        guardianB = "Navir Monteiro"
        reflejosB = 13
        voladaLateralB = 14
        presionB = 12
        evasionGuardianB = 12
        atajadaRelampagoB
        usosAtajadaRelampagoB = 0
        starfishAndStickB = 0
        usosStarfishAndStickB = 0
        doubleEightLoopB = 3
        usosDoubleEightLoopB = 0
        allInB = 0
        usosAllInB = 0
        paseLargoB = 1
        usosPaseLargoB = 0
        tiroResbalonB = 0
        usosTiroResbalonB = 0
        
        golpeador1B = "Keyna Rees"
        fuerza1B = 40
        precision1B = 22
        intercepcion1B = 15
        evasionGolpeador1B = 11
        energia1B = 8
        energiaConsumida1B = 0
        golpeDeFrancotirador1B = 0
        usosGolpeDeFrancotirador1B = 0
        bludgerBackbeat1B = 1
        usosBludgerBackbeat1B = 0
        golpeBombeado1B = 2
        usosGolpeBombeado1B = 0
        golpeCanon1B = 0
        usosGolpeCanon1B = 0
        angelGuardian1B = 0
        usosAngelGuardian1B = 0
        interferenciaDeAguila1B = 0
        usosInterferenciaDeAguila1B = 0
        
        golpeador2B = "Elin Hill"
        fuerza2B = 41
        precision2B = 16
        intercepcion2B = 24
        evasionGolpeador2B = 11
        energia2B = 8
        energiaConsumida2B = 0
        golpeDeFrancotirador2B = 1
        usosGolpeDeFrancotirador2B = 0
        bludgerBackbeat2B = 0
        usosBludgerBackbeat2B = 0
        golpeBombeado2B = 0
        usosGolpeBombeado2B = 0
        golpeCanon2B = 0
        usosGolpeCanon2B = 0
        angelGuardian2B = 2
        usosAngelGuardian2B = 0
        interferenciaDeAguila2B = 0
        usosInterferenciaDeAguila2B = 0
        
        cazador1B = "Akihiro Momo"
        agilidad1B = 15
        defensa1B = 15
        reaccion1B = 15
        evasionCazador1B = 16
        disparo1B = 18
        disparosRealizados1B = 0
        fintaDePorskov1B = 0
        usosFintaDePorskov1B = 0
        manoCambiada1B = 0
        usosManoCambiada1B = 0
        roboSpeelman1B = 0
        usosRoboSpeelman1B = 0
        transylvanianTackle1B = 0
        usosTransylvanianTackle1B = 0
        intuicionFugaz1B = 1
        usosIntuicionFugaz1B = 0
        reversePass1B = 0
        usosReversePass1B = 0
        slothGripRoll1B = 0
        usosSlothGripRoll1B = 0
        tiroLargo1B = 0
        usosTiroLargo1B = 0
        disparoDeTorbellino1B = 0
        usosDisparoDeTorbellino1B = 0
        disparoConAmague1B = 0
        usosDisparoConAmague1B = 0
        efectoFinbourgh1B = 1
        usosEfectoFinbourgh1B = 0
        knuckleBall1B = 1
        usosKnuckleBall1B = 0
        disparoDeVolea1B = 0
        usosDisparoDeVolea1B = 0
        
        cazador2B = "Whatu Lloyd"
        agilidad2B = 16
        defensa2B = 18
        reaccion2B = 13
        evasionCazador2B = 15
        disparo2B = 15
        disparosRealizados2B = 0
        fintaDePorskov2B = 0
        usosFintaDePorskov2B = 0
        manoCambiada2B = 1
        usosManoCambiada2B = 0
        roboSpeelman2B = 0
        usosRoboSpeelman2B = 0
        transylvanianTackle2B = 1
        usosTransylvanianTackle2B = 0
        intuicionFugaz2B = 0
        usosIntuicionFugaz2B = 0
        reversePass2B = 1
        usosReversePass2B = 0
        slothGripRoll2B = 0
        usosSlothGripRoll2B = 0
        tiroLargo2B = 0
        usosTiroLargo2B = 0
        disparoDeTorbellino2B = 0
        usosDisparoDeTorbellino2B = 0
        disparoConAmague2B = 0
        usosDisparoConAmague2B = 0
        efectoFinbourgh2B = 0
        usosEfectoFinbourgh2B = 0
        knuckleBall2B = 0
        usosKnuckleBall2B = 0
        disparoDeVolea2B = 0
        usosDisparoDeVolea2B = 0
        
        cazador3B = "Altaira Ashryver"
        agilidad3B = 12
        defensa3B = 15
        reaccion3B = 16
        evasionCazador3B = 14
        disparo3B = 15
        disparosRealizados3B = 0
        fintaDePorskov3B = 0
        usosFintaDePorskov3B = 0
        manoCambiada3B = 1
        usosManoCambiada3B = 0
        roboSpeelman3B = 1
        usosRoboSpeelman3B = 0
        transylvanianTackle3B = 0
        usosTransylvanianTackle3B = 0
        intuicionFugaz3B = 0
        usosIntuicionFugaz3B = 0
        reversePass3B = 0
        usosReversePass3B = 0
        slothGripRoll3B = 0
        usosSlothGripRoll3B = 0
        tiroLargo3B = 0
        usosTiroLargo3B = 0
        disparoDeTorbellino3B = 0
        usosDisparoDeTorbellino3B = 0
        disparoConAmague3B = 0
        usosDisparoConAmague3B = 0
        efectoFinbourgh3B = 1
        usosEfectoFinbourgh3B = 0
        knuckleBall3B = 0
        usosKnuckleBall3B = 0
        disparoDeVolea3B = 0
        usosDisparoDeVolea3B = 0
        
        buscadorB = "Vixen Redwayne"
        velocidadB = 18
        giroB = 13
        avistamientoB = 16
        evasionBuscadorB = 16
        agarreB = 12
        amagoDeWronskiB = 0
        usosAmagoDeWronskiB = 0
        perspicaciaB = 0
        usosPerspicaciaB = 0
        ultimoAlientoB = 0
        usosUltimoAlientoB = 0
        caidaEnPicadaB = 2
        usosCaidaEnPicadaB = 0
        plumptonPassB = 0
        usosPlumptonPassB = 0
        escarbatoB = 0
        usosEscarbatoB = 0
    }
    else if (equipoB == "Kattegat Krakor") {
        guardianB = "Olaf Ragnarsson"
        reflejosB = 18
        voladaLateralB = 17
        presionB = 9
        evasionGuardianB = 8
        atajadaRelampagoB = 0
        usosAtajadaRelampagoB = 0
        starfishAndStickB = 2
        usosStarfishAndStickB = 0
        doubleEightLoopB = 3
        usosDoubleEightLoopB = 0
        allInB = 0
        usosAllInB = 0
        paseLargoB = 0
        usosPaseLargoB = 0
        tiroResbalonB = 1
        usosTiroResbalonB = 0
        
        golpeador1B = "John Smith"
        fuerza1B = 43
        precision1B = 20
        intercepcion1B = 14
        evasionGolpeador1B = 14
        energia1B = 8
        energiaConsumida1B = 0
        golpeDeFrancotirador1B = 1
        usosGolpeDeFrancotirador1B = 0
        bludgerBackbeat1B = 0
        usosBludgerBackbeat1B = 0
        golpeBombeado1B = 0
        usosGolpeBombeado1B = 0
        golpeCanon1B = 2
        usosGolpeCanon1B = 0
        angelGuardian1B = 0
        usosAngelGuardian1B = 0
        interferenciaDeAguila1B = 0
        usosInterferenciaDeAguila1B = 0
        
        golpeador2B = "Ace Williams"
        fuerza2B = 41
        precision2B = 17
        intercepcion2B = 21
        evasionGolpeador2B = 13
        energia2B = 8
        energiaConsumida2B = 0
        golpeDeFrancotirador2B = 0
        usosGolpeDeFrancotirador2B = 0
        bludgerBackbeat2B = 1
        usosBludgerBackbeat2B = 0
        golpeBombeado2B = 0
        usosGolpeBombeado2B = 0
        golpeCanon2B = 0
        usosGolpeCanon2B = 0
        angelGuardian2B = 2
        usosAngelGuardian2B = 0
        interferenciaDeAguila2B = 0
        usosInterferenciaDeAguila2B = 0
        
        cazador1B = "Klaus Thorsen"
        agilidad1B = 20
        defensa1B = 11
        reaccion1B = 16
        evasionCazador1B = 14
        disparo1B = 19
        disparosRealizados1B = 0
        fintaDePorskov1B = 1
        usosFintaDePorskov1B = 0
        manoCambiada1B = 1
        usosManoCambiada1B = 0
        roboSpeelman1B = 0
        usosRoboSpeelman1B = 0
        transylvanianTackle1B = 0
        usosTransylvanianTackle1B = 0
        intuicionFugaz1B = 0
        usosIntuicionFugaz1B = 0
        reversePass1B = 0
        usosReversePass1B = 0
        slothGripRoll1B = 0
        usosSlothGripRoll1B = 0
        tiroLargo1B = 0
        usosTiroLargo1B = 0
        disparoDeTorbellino1B = 0
        usosDisparoDeTorbellino1B = 0
        disparoConAmague1B = 0
        usosDisparoConAmague1B = 0
        efectoFinbourgh1B = 2
        usosEfectoFinbourgh1B = 0
        knuckleBall1B = 0
        usosKnuckleBall1B = 0
        disparoDeVolea1B = 0
        usosDisparoDeVolea1B = 0
        
        cazador2B = "Zahara Nabirye"
        agilidad2B = 13
        defensa2B = 18
        reaccion2B = 13
        evasionCazador2B = 16
        disparo2B = 20
        disparosRealizados2B = 0
        fintaDePorskov2B = 0
        usosFintaDePorskov2B = 0
        manoCambiada2B = 0
        usosManoCambiada2B = 0
        roboSpeelman2B = 0
        usosRoboSpeelman2B = 0
        transylvanianTackle2B = 1
        usosTransylvanianTackle2B = 0
        intuicionFugaz2B = 0
        usosIntuicionFugaz2B = 0
        reversePass2B = 0
        usosReversePass2B = 0
        slothGripRoll2B = 0
        usosSlothGripRoll2B = 0
        tiroLargo2B = 0
        usosTiroLargo2B = 0
        disparoDeTorbellino2B = 0
        usosDisparoDeTorbellino2B = 0
        disparoConAmague2B = 0
        usosDisparoConAmague2B = 0
        efectoFinbourgh2B = 1
        usosEfectoFinbourgh2B = 0
        knuckleBall2B = 0
        usosKnuckleBall2B = 0
        disparoDeVolea2B = 2
        usosDisparoDeVolea2B = 0
        
        cazador3B = "Asa Haraldsson"
        agilidad3B = 15
        defensa3B = 12
        reaccion3B = 17
        evasionCazador3B = 14
        disparo3B = 14
        disparosRealizados3B = 0
        fintaDePorskov3B = 0
        usosFintaDePorskov3B = 0
        manoCambiada3B = 1
        usosManoCambiada3B = 0
        roboSpeelman3B = 0
        usosRoboSpeelman3B = 0
        transylvanianTackle3B = 0
        usosTransylvanianTackle3B = 0
        intuicionFugaz3B = 1
        usosIntuicionFugaz3B = 0
        reversePass3B = 0
        usosReversePass3B = 0
        slothGripRoll3B = 0
        usosSlothGripRoll3B = 0
        tiroLargo3B = 0
        usosTiroLargo3B = 0
        disparoDeTorbellino3B = 0
        usosDisparoDeTorbellino3B = 0
        disparoConAmague3B = 0
        usosDisparoConAmague3B = 0
        efectoFinbourgh3B = 1
        usosEfectoFinbourgh3B = 0
        knuckleBall3B = 0
        usosKnuckleBall3B = 0
        disparoDeVolea3B = 0
        usosDisparoDeVolea3B = 0
        
        buscadorB = "Sigrid Evensen"
        velocidadB = 18
        giroB = 14
        avistamientoB = 16
        evasionBuscadorB = 15
        agarreB = 12
        amagoDeWronskiB = 2
        usosAmagoDeWronskiB = 0
        perspicaciaB = 0
        usosPerspicaciaB = 0
        ultimoAlientoB = 0
        usosUltimoAlientoB = 0
        caidaEnPicadaB = 1
        usosCaidaEnPicadaB = 0
        plumptonPassB = 0
        usosPlumptonPassB = 0
        escarbatoB = 0
        usosEscarbatoB = 0
    }
    else if (equipoB == "Montrose Magpies") {
        guardianB = "Johannes Strauss"
        reflejosB = 17
        voladaLateralB = 16
        presionB = 9
        evasionGuardianB = 12
        atajadaRelampagoB = 2
        usosAtajadaRelampagoB = 0
        starfishAndStickB = 0
        usosStarfishAndStickB = 0
        doubleEightLoopB = 3
        usosDoubleEightLoopB = 0
        allInB = 0
        usosAllInB = 0
        paseLargoB = 1
        usosPaseLargoB = 0
        tiroResbalonB = 0
        usosTiroResbalonB = 0

        golpeador1B = "Noeline McFarlan"
        fuerza1B = 40
        precision1B = 23
        intercepcion1B = 16
        evasionGolpeador1B = 12
        energia1B = 9
        energiaConsumida1B = 0
        golpeDeFrancotirador1B = 1
        usosGolpeDeFrancotirador1B = 0
        bludgerBackbeat1B = 0
        usosBludgerBackbeat1B = 0
        golpeBombeado1B = 2
        usosGolpeBombeado1B = 0
        golpeCanon1B = 0
        usosGolpeCanon1B = 0
        angelGuardian1B = 0
        usosAngelGuardian1B = 0
        interferenciaDeAguila1B = 0
        usosInterferenciaDeAguila1B = 0

        golpeador2B = "Sophie Granger"
        fuerza2B = 41
        precision2B = 22
        intercepcion2B = 18
        evasionGolpeador2B = 12
        energia2B = 9
        energiaConsumida2B = 0
        golpeDeFrancotirador2B = 0
        usosGolpeDeFrancotirador2B = 0
        bludgerBackbeat2B = 1
        usosBludgerBackbeat2B = 0
        golpeBombeado2B = 2
        usosGolpeBombeado2B = 0
        golpeCanon2B = 0
        usosGolpeCanon2B = 0
        angelGuardian2B = 0
        usosAngelGuardian2B = 0
        interferenciaDeAguila2B = 0
        usosInterferenciaDeAguila2B = 0

        cazador1B = "Mica Gryffindor"
        agilidad1B = 18
        defensa1B = 18
        reaccion1B = 15
        evasionCazador1B = 14
        disparo1B = 17
        disparosRealizados1B = 0
        fintaDePorskov1B = 1
        usosFintaDePorskov1B = 0
        manoCambiada1B = 0
        usosManoCambiada1B = 0
        roboSpeelman1B = 0
        usosRoboSpeelman1B = 0
        transylvanianTackle1B = 0
        usosTransylvanianTackle1B = 0
        intuicionFugaz1B = 2
        usosIntuicionFugaz1B = 0
        reversePass1B = 0
        usosReversePass1B = 0
        slothGripRoll1B = 0
        usosSlothGripRoll1B = 0
        tiroLargo1B = 0
        usosTiroLargo1B = 0
        disparoDeTorbellino1B = 2
        usosDisparoDeTorbellino1B = 0
        disparoConAmague1B = 0
        usosDisparoConAmague1B = 0
        efectoFinbourgh1B = 0
        usosEfectoFinbourgh1B = 0
        knuckleBall1B = 0
        usosKnuckleBall1B = 0
        disparoDeVolea1B = 0
        usosDisparoDeVolea1B = 0

        cazador2B = "Auxerre de Rune"
        agilidad2B = 10
        defensa2B = 20
        reaccion2B = 16
        evasionCazador2B = 13
        disparo2B = 19
        disparosRealizados2B = 0
        fintaDePorskov2B = 0
        usosFintaDePorskov2B = 0
        manoCambiada2B = 0
        usosManoCambiada2B = 0
        roboSpeelman2B = 1
        usosRoboSpeelman2B = 0
        transylvanianTackle2B = 0
        usosTransylvanianTackle2B = 0
        intuicionFugaz2B = 0
        usosIntuicionFugaz2B = 0
        reversePass2B = 0
        usosReversePass2B = 0
        slothGripRoll2B = 0
        usosSlothGripRoll2B = 0
        tiroLargo2B = 2
        usosTiroLargo2B = 0
        disparoDeTorbellino2B = 0
        usosDisparoDeTorbellino2B = 0
        disparoConAmague2B = 0
        usosDisparoConAmague2B = 0
        efectoFinbourgh2B = 0
        usosEfectoFinbourgh2B = 0
        knuckleBall2B = 0
        usosKnuckleBall2B = 0
        disparoDeVolea2B = 1
        usosDisparoDeVolea2B = 0

        cazador3B = "Kenzo Ito"
        agilidad3B = 12
        defensa3B = 14
        reaccion3B = 14
        evasionCazador3B = 15
        disparo3B = 20
        disparosRealizados3B = 0
        fintaDePorskov3B = 0
        usosFintaDePorskov3B = 0
        manoCambiada3B = 0
        usosManoCambiada3B = 0
        roboSpeelman3B = 0
        usosRoboSpeelman3B = 0
        transylvanianTackle3B = 0
        usosTransylvanianTackle3B = 0
        intuicionFugaz3B = 1
        usosIntuicionFugaz3B = 0
        reversePass3B = 0
        usosReversePass3B = 0
        slothGripRoll3B = 0
        usosSlothGripRoll3B = 0
        tiroLargo3B = 0
        usosTiroLargo3B = 0
        disparoDeTorbellino3B = 1
        usosDisparoDeTorbellino3B = 0
        disparoConAmague3B = 0
        usosDisparoConAmague3B = 0
        efectoFinbourgh3B = 2
        usosEfectoFinbourgh3B = 0
        knuckleBall3B = 1
        usosKnuckleBall3B = 0
        disparoDeVolea3B = 0
        usosDisparoDeVolea3B = 0

        buscadorB = "Megan Baxter"
        velocidadB = 15
        giroB = 14
        avistamientoB = 15
        evasionBuscadorB = 14
        agarreB = 12
        amagoDeWronskiB = 2
        usosAmagoDeWronskiB = 0
        perspicaciaB = 0
        usosPerspicaciaB = 0
        ultimoAlientoB = 0
        usosUltimoAlientoB = 0
        caidaEnPicadaB = 0
        usosCaidaEnPicadaB = 0
        plumptonPassB = 1
        usosPlumptonPassB = 0
        escarbatoB = 0
        usosEscarbatoB = 0
    }
    else if (equipoB == "Paris Promise") {
        guardianB = "Marius Fric"
        reflejosB = 16
        voladaLateralB = 15
        presionB = 7
        evasionGuardianB = 10
        atajadaRelampagoB = 2
        usosAtajadaRelampagoB = 0
        starfishAndStickB = 0
        usosStarfishAndStickB = 0
        doubleEightLoopB = 3
        usosDoubleEightLoopB = 0
        allInB = 0
        usosAllInB = 0
        paseLargoB = 0
        usosPaseLargoB = 0
        tiroResbalonB = 1
        usosTiroResbalonB = 0

        golpeador1B = "Ferman Eryigit"
        fuerza1B = 42
        precision1B = 23
        intercepcion1B = 17
        evasionGolpeador1B = 12
        energia1B = 8
        energiaConsumida1B = 0
        golpeDeFrancotirador1B = 0
        usosGolpeDeFrancotirador1B = 0
        bludgerBackbeat1B = 2
        usosBludgerBackbeat1B = 0
        golpeBombeado1B = 1
        usosGolpeBombeado1B = 0
        golpeCanon1B = 0
        usosGolpeCanon1B = 0
        angelGuardian1B = 0
        usosAngelGuardian1B = 0
        interferenciaDeAguila1B = 0
        usosInterferenciaDeAguila1B = 0

        golpeador2B = "Natalya Arsenyeva"
        fuerza2B = 45
        precision2B = 18
        intercepcion2B = 7
        evasionGolpeador2B = 10
        energia2B = 8
        energiaConsumida2B = 0
        golpeDeFrancotirador2B = 0
        usosGolpeDeFrancotirador2B = 0
        bludgerBackbeat2B = 1
        usosBludgerBackbeat2B = 0
        golpeBombeado2B = 0
        usosGolpeBombeado2B = 0
        golpeCanon2B = 1
        usosGolpeCanon2B = 0
        angelGuardian2B = 0
        usosAngelGuardian2B = 0
        interferenciaDeAguila2B = 0
        usosInterferenciaDeAguila2B = 0

        cazador1B = "Joanne Fontaine"
        agilidad1B = 21
        defensa1B = 13
        reaccion1B = 14
        evasionCazador1B = 16
        disparo1B = 17
        disparosRealizados1B = 0
        fintaDePorskov1B = 0
        usosFintaDePorskov1B = 0
        manoCambiada1B = 1
        usosManoCambiada1B = 0
        roboSpeelman1B = 0
        usosRoboSpeelman1B = 0
        transylvanianTackle1B = 0
        usosTransylvanianTackle1B = 0
        intuicionFugaz1B = 1
        usosIntuicionFugaz1B = 0
        reversePass1B = 0
        usosReversePass1B = 0
        slothGripRoll1B = 0
        usosSlothGripRoll1B = 0
        tiroLargo1B = 0
        usosTiroLargo1B = 0
        disparoDeTorbellino1B = 0
        usosDisparoDeTorbellino1B = 0
        disparoConAmague1B = 2
        usosDisparoConAmague1B = 0
        efectoFinbourgh1B = 0
        usosEfectoFinbourgh1B = 0
        knuckleBall1B = 0
        usosKnuckleBall1B = 0
        disparoDeVolea1B = 0
        usosDisparoDeVolea1B = 0

        cazador2B = "Belmont Dubois"
        agilidad2B = 16
        defensa2B = 15
        reaccion2B = 14
        evasionCazador2B = 16
        disparo2B = 20
        disparosRealizados2B = 0
        fintaDePorskov2B = 0
        usosFintaDePorskov2B = 0
        manoCambiada2B = 1
        usosManoCambiada2B = 0
        roboSpeelman2B = 0
        usosRoboSpeelman2B = 0
        transylvanianTackle2B = 0
        usosTransylvanianTackle2B = 0
        intuicionFugaz2B = 0
        usosIntuicionFugaz2B = 0
        reversePass2B = 0
        usosReversePass2B = 0
        slothGripRoll2B = 0
        usosSlothGripRoll2B = 0
        tiroLargo2B = 0
        usosTiroLargo2B = 0
        disparoDeTorbellino2B = 0
        usosDisparoDeTorbellino2B = 0
        disparoConAmague2B = 0
        usosDisparoConAmague2B = 0
        efectoFinbourgh2B = 3
        usosEfectoFinbourgh2B = 0
        knuckleBall2B = 0
        usosKnuckleBall2B = 0
        disparoDeVolea2B = 0
        usosDisparoDeVolea2B = 0

        cazador3B = "Melissandre Roux"
        agilidad3B = 12
        defensa3B = 19
        reaccion3B = 16
        evasionCazador3B = 13
        disparo3B = 16
        disparosRealizados3B = 0
        fintaDePorskov3B = 0
        usosFintaDePorskov3B = 0
        manoCambiada3B = 1
        usosManoCambiada3B = 0
        roboSpeelman3B = 1
        usosRoboSpeelman3B = 0
        transylvanianTackle3B = 2
        usosTransylvanianTackle3B = 0
        intuicionFugaz3B = 0
        usosIntuicionFugaz3B = 0
        reversePass3B = 0
        usosReversePass3B = 0
        slothGripRoll3B = 0
        usosSlothGripRoll3B = 0
        tiroLargo3B = 0
        usosTiroLargo3B = 0
        disparoDeTorbellino3B = 0
        usosDisparoDeTorbellino3B = 0
        disparoConAmague3B = 0
        usosDisparoConAmague3B = 0
        efectoFinbourgh3B = 0
        usosEfectoFinbourgh3B = 0
        knuckleBall3B = 0
        usosKnuckleBall3B = 0
        disparoDeVolea3B = 0
        usosDisparoDeVolea3B = 0

        buscadorB = "Elizabeth Wallace"
        velocidadB = 16
        giroB = 14
        avistamientoB = 13
        evasionBuscadorB = 14
        agarreB = 12
        amagoDeWronskiB = 0
        usosAmagoDeWronskiB = 0
        perspicaciaB = 0
        usosPerspicaciaB = 0
        ultimoAlientoB = 0
        usosUltimoAlientoB = 0
        caidaEnPicadaB = 1
        usosCaidaEnPicadaB = 0
        plumptonPassB = 0
        usosPlumptonPassB = 0
        escarbatoB = 0
        usosEscarbatoB = 0
    }
    else if (equipoB == "Tutshill Tornados") {
        guardianB = "Maida Black Yaxley"
        reflejosB = 13
        voladaLateralB = 14
        presionB = 14
        evasionGuardianB = 10
        atajadaRelampagoB = 2
        usosAtajadaRelampagoB = 0
        starfishAndStickB = 0
        usosStarfishAndStickB = 0
        doubleEightLoopB = 3
        usosDoubleEightLoopB = 0
        allInB = 0
        usosAllInB = 0
        paseLargoB = 1
        usosPaseLargoB = 0
        tiroResbalonB = 0
        usosTiroResbalonB = 0
        
        golpeador1B = "Jeremy Triviani"
        fuerza1B = 40
        precision1B = 22
        intercepcion1B = 17
        evasionGolpeador1B = 13
        energia1B = 9
        energiaConsumida1B = 0
        golpeDeFrancotirador1B = 0
        usosGolpeDeFrancotirador1B = 0
        bludgerBackbeat1B = 1
        usosBludgerBackbeat1B = 0
        golpeBombeado1B = 2
        usosGolpeBombeado1B = 0
        golpeCanon1B = 0
        usosGolpeCanon1B = 0
        angelGuardian1B = 0
        usosAngelGuardian1B = 0
        interferenciaDeAguila1B = 0
        usosInterferenciaDeAguila1B = 0
        
        golpeador2B = "Claire Skeeter"
        fuerza2B = 41
        precision2B = 17
        intercepcion2B = 21
        evasionGolpeador2B = 12
        energia2B = 8
        energiaConsumida2B = 0
        golpeDeFrancotirador2B = 0
        usosGolpeDeFrancotirador2B = 0
        bludgerBackbeat2B = 0
        usosBludgerBackbeat2B = 0
        golpeBombeado2B = 2
        usosGolpeBombeado2B = 0
        golpeCanon2B = 0
        usosGolpeCanon2B = 0
        angelGuardian2B = 0
        usosAngelGuardian2B = 0
        interferenciaDeAguila2B = 1
        usosInterferenciaDeAguila2B = 0
        
        cazador1B = "Aedis Greengrass"
        agilidad1B = 17
        defensa1B = 12
        reaccion1B = 12
        evasionCazador1B = 15
        disparo1B = 21
        disparosRealizados1B = 0
        fintaDePorskov1B = 0
        usosFintaDePorskov1B = 0
        manoCambiada1B = 0
        usosManoCambiada1B = 0
        roboSpeelman1B = 0
        usosRoboSpeelman1B = 0
        transylvanianTackle1B = 0
        usosTransylvanianTackle1B = 0
        intuicionFugaz1B = 0
        usosIntuicionFugaz1B = 0
        reversePass1B = 0
        usosReversePass1B = 0
        slothGripRoll1B = 0
        usosSlothGripRoll1B = 0
        tiroLargo1B = 0
        usosTiroLargo1B = 0
        disparoDeTorbellino1B = 0
        usosDisparoDeTorbellino1B = 0
        disparoConAmague1B = 2
        usosDisparoConAmague1B = 0
        efectoFinbourgh1B = 1
        usosEfectoFinbourgh1B = 0
        knuckleBall1B = 0
        usosKnuckleBall1B = 0
        disparoDeVolea1B = 2
        usosDisparoDeVolea1B = 0
        
        cazador2B = "Rowan Ashryver"
        agilidad2B = 15
        defensa2B = 13
        reaccion2B = 15
        evasionCazador2B = 11
        disparo2B = 17
        disparosRealizados2B = 0
        fintaDePorskov2B = 0
        usosFintaDePorskov2B = 0
        manoCambiada2B = 0
        usosManoCambiada2B = 0
        roboSpeelman2B = 0
        usosRoboSpeelman2B = 0
        transylvanianTackle2B = 1
        usosTransylvanianTackle2B = 0
        intuicionFugaz2B = 0
        usosIntuicionFugaz2B = 0
        reversePass2B = 1
        usosReversePass2B = 0
        slothGripRoll2B = 0
        usosSlothGripRoll2B = 0
        tiroLargo2B = 0
        usosTiroLargo2B = 0
        disparoDeTorbellino2B = 0
        usosDisparoDeTorbellino2B = 0
        disparoConAmague2B = 0
        usosDisparoConAmague2B = 0
        efectoFinbourgh2B = 0
        usosEfectoFinbourgh2B = 0
        knuckleBall2B = 1
        usosKnuckleBall2B = 0
        disparoDeVolea2B = 0
        usosDisparoDeVolea2B = 0
        
        cazador3B = "Luca Van Halen"
        agilidad3B = 18
        defensa3B = 14
        reaccion3B = 15
        evasionCazador3B = 13
        disparo3B = 19
        disparosRealizados3B = 0
        fintaDePorskov3B = 0
        usosFintaDePorskov3B = 0
        manoCambiada3B = 0
        usosManoCambiada3B = 0
        roboSpeelman3B = 0
        usosRoboSpeelman3B = 0
        transylvanianTackle3B = 0
        usosTransylvanianTackle3B = 0
        intuicionFugaz3B = 0
        usosIntuicionFugaz3B = 0
        reversePass3B = 0
        usosReversePass3B = 0
        slothGripRoll3B = 0
        usosSlothGripRoll3B = 0
        tiroLargo3B = 0
        usosTiroLargo3B = 0
        disparoDeTorbellino3B = 2
        usosDisparoDeTorbellino3B = 0
        disparoConAmague3B = 1
        usosDisparoConAmague3B = 0
        efectoFinbourgh3B = 0
        usosEfectoFinbourgh3B = 0
        knuckleBall3B = 0
        usosKnuckleBall3B = 0
        disparoDeVolea3B = 0
        usosDisparoDeVolea3B = 0
        
        buscadorB = "Thiago Moraes"
        velocidadB = 19
        giroB = 10
        avistamientoB = 13
        evasionBuscadorB = 15
        agarreB = 10
        amagoDeWronskiB = 0
        usosAmagoDeWronskiB = 0
        perspicaciaB = 1
        usosPerspicaciaB = 0
        ultimoAlientoB = 0
        usosUltimoAlientoB = 0
        caidaEnPicadaB = 0
        usosCaidaEnPicadaB = 0
        plumptonPassB = 0
        usosPlumptonPassB = 0
        escarbatoB = 0
        usosEscarbatoB = 0
    }
    else if (equipoB == "Vratsa Vultures") {
        guardianB = "Lev Zograf"
        reflejosB = 14
        voladaLateralB = 16
        presionB = 10
        evasionGuardianB = 13
        atajadaRelampagoB = 0
        usosAtajadaRelampagoB = 0
        starfishAndStickB = 0
        usosStarfishAndStickB = 0
        doubleEightLoopB = 2
        usosDoubleEightLoopB = 0
        allInB = 0
        usosAllInB = 0
        paseLargoB = 0
        usosPaseLargoB = 0
        tiroResbalonB = 1
        usosTiroResbalonB = 0
        
        golpeador1B = "Pyotr Vulchanov"
        fuerza1B = 45
        precision1B = 15
        intercepcion1B = 9
        evasionGolpeador1B = 9
        energia1B = 8
        energiaConsumida1B = 0
        golpeDeFrancotirador1B = 0
        usosGolpeDeFrancotirador1B = 0
        bludgerBackbeat1B = 1
        usosBludgerBackbeat1B = 0
        golpeBombeado1B = 1
        usosGolpeBombeado1B = 0
        golpeCanon1B = 0
        usosGolpeCanon1B = 0
        angelGuardian1B = 0
        usosAngelGuardian1B = 0
        interferenciaDeAguila1B = 0
        usosInterferenciaDeAguila1B = 0
        
        golpeador2B = "Dimitar Draganov"
        fuerza2B = 42
        precision2B = 17
        intercepcion2B = 14
        evasionGolpeador2B = 10
        energia2B = 9
        energiaConsumida2B = 0
        golpeDeFrancotirador2B = 1
        usosGolpeDeFrancotirador2B = 0
        bludgerBackbeat2B = 0
        usosBludgerBackbeat2B = 0
        golpeBombeado2B = 1
        usosGolpeBombeado2B = 0
        golpeCanon2B = 0
        usosGolpeCanon2B = 0
        angelGuardian2B = 0
        usosAngelGuardian2B = 0
        interferenciaDeAguila2B = 0
        usosInterferenciaDeAguila2B = 0
        
        cazador1B = "Akram Tolkien"
        agilidad1B = 17
        defensa1B = 15
        reaccion1B = 13
        evasionCazador1B = 12
        disparo1B = 15
        disparosRealizados1B = 0
        fintaDePorskov1B = 0
        usosFintaDePorskov1B = 0
        manoCambiada1B = 0
        usosManoCambiada1B = 0
        roboSpeelman1B = 0
        usosRoboSpeelman1B = 0
        transylvanianTackle1B = 1
        usosTransylvanianTackle1B = 0
        intuicionFugaz1B = 0
        usosIntuicionFugaz1B = 0
        reversePass1B = 0
        usosReversePass1B = 0
        slothGripRoll1B = 0
        usosSlothGripRoll1B = 0
        tiroLargo1B = 0
        usosTiroLargo1B = 0
        disparoDeTorbellino1B = 1
        usosDisparoDeTorbellino1B = 0
        disparoConAmague1B = 0
        usosDisparoConAmague1B = 0
        efectoFinbourgh1B = 1
        usosEfectoFinbourgh1B = 0
        knuckleBall1B = 0
        usosKnuckleBall1B = 0
        disparoDeVolea1B = 0
        usosDisparoDeVolea1B = 0
        
        cazador2B = "Anan Kbait"
        agilidad2B = 14
        defensa2B = 15
        reaccion2B = 14
        evasionCazador2B = 14
        disparo2B = 19
        disparosRealizados2B = 0
        fintaDePorskov2B = 0
        usosFintaDePorskov2B = 0
        manoCambiada2B = 1
        usosManoCambiada2B = 0
        roboSpeelman2B = 0
        usosRoboSpeelman2B = 0
        transylvanianTackle2B = 2
        usosTransylvanianTackle2B = 0
        intuicionFugaz2B = 0
        usosIntuicionFugaz2B = 0
        reversePass2B = 0
        usosReversePass2B = 0
        slothGripRoll2B = 0
        usosSlothGripRoll2B = 0
        tiroLargo2B = 0
        usosTiroLargo2B = 0
        disparoDeTorbellino2B = 0
        usosDisparoDeTorbellino2B = 0
        disparoConAmague2B = 0
        usosDisparoConAmague2B = 0
        efectoFinbourgh2B = 0
        usosEfectoFinbourgh2B = 0
        knuckleBall2B = 0
        usosKnuckleBall2B = 0
        disparoDeVolea2B = 0
        usosDisparoDeVolea2B = 0
        
        cazador3B = "Vasily Dimitrov"
        agilidad3B = 19
        defensa3B = 15
        reaccion3B = 11
        evasionCazador3B = 12
        disparo3B = 15
        disparosRealizados3B = 0
        fintaDePorskov3B = 1
        usosFintaDePorskov3B = 0
        manoCambiada3B = 0
        usosManoCambiada3B = 0
        roboSpeelman3B = 0
        usosRoboSpeelman3B = 0
        transylvanianTackle3B = 0
        usosTransylvanianTackle3B = 0
        intuicionFugaz3B = 0
        usosIntuicionFugaz3B = 0
        reversePass3B = 0
        usosReversePass3B = 0
        slothGripRoll3B = 0
        usosSlothGripRoll3B = 0
        tiroLargo3B = 1
        usosTiroLargo3B = 0
        disparoDeTorbellino3B = 2
        usosDisparoDeTorbellino3B = 0
        disparoConAmague3B = 0
        usosDisparoConAmague3B = 0
        efectoFinbourgh3B = 0
        usosEfectoFinbourgh3B = 0
        knuckleBall3B = 0
        usosKnuckleBall3B = 0
        disparoDeVolea3B = 0
        usosDisparoDeVolea3B = 0
        
        buscadorB = "Stoyanka Grozda"
        velocidadB = 19
        giroB = 13
        avistamientoB = 13
        evasionBuscadorB = 11
        agarreB = 11
        amagoDeWronskiB = 1
        usosAmagoDeWronskiB = 0
        perspicaciaB = 0
        usosPerspicaciaB = 0
        ultimoAlientoB = 0
        usosUltimoAlientoB = 0
        caidaEnPicadaB = 0
        usosCaidaEnPicadaB = 0
        plumptonPassB = 0
        usosPlumptonPassB = 0
        escarbatoB = 0
        usosEscarbatoB = 0
    }
}

// import { equiposElegidosA } from './equipos-elegidos-a.js';
// import { equiposElegidosB } from './equipos-elegidos-b.js'
// import { montroseMagpiesA } from './equipos-a/montrose-magpies.js'
import { ocultarBotonesEspeciales } from './ocultar-botones-especiales.js';

nombreGuardianA.innerHTML = guardianA
nombreGolpeador1A.innerHTML = golpeador1A
nombreGolpeador2A.innerHTML = golpeador2A
nombreCazador1A.innerHTML = cazador1A
nombreCazador2A.innerHTML = cazador2A
nombreCazador3A.innerHTML = cazador3A
nombreBuscadorA.innerHTML = buscadorA
atributosGuardianA.innerHTML = `REF: ${reflejosA} | VOL: ${voladaLateralA} | PRE: ${presionA} | EVA: ${evasionGuardianA}`
atributosGolpeador1A.innerHTML = `FUE: ${fuerza1A} | PRE: ${precision1A} | INT: ${intercepcion1A} | EVA: ${evasionGolpeador1A} | ENE: ${energia1A}`
atributosGolpeador2A.innerHTML = `FUE: ${fuerza2A} | PRE: ${precision2A} | INT: ${intercepcion2A} | EVA: ${evasionGolpeador2A} | ENE: ${energia2A}`
atributosCazador1A.innerHTML = `AGI: ${agilidad1A} | DEF: ${defensa1A} | REA: ${reaccion1A} | EVA: ${evasionCazador1A} | DIS: ${disparo1A}`
atributosCazador2A.innerHTML = `AGI: ${agilidad2A} | DEF: ${defensa2A} | REA: ${reaccion2A} | EVA: ${evasionCazador2A} | DIS: ${disparo2A}`
atributosCazador3A.innerHTML = `AGI: ${agilidad3A} | DEF: ${defensa3A} | REA: ${reaccion3A} | EVA: ${evasionCazador3A} | DIS: ${disparo3A}`
atributosBuscadorA.innerHTML = `VEL: ${velocidadA} | GIR: ${giroA} | PER: ${avistamientoA} | EVA: ${evasionBuscadorA} | AGA: ${agarreA}`

nombreGuardianB.innerHTML = guardianB
nombreGolpeador1B.innerHTML = golpeador1B
nombreGolpeador2B.innerHTML = golpeador2B
nombreCazador1B.innerHTML = cazador1B
nombreCazador2B.innerHTML = cazador2B
nombreCazador3B.innerHTML = cazador3B
nombreBuscadorB.innerHTML = buscadorB
atributosGuardianB.innerHTML = `REF: ${reflejosB} | VOL: ${voladaLateralB} | PRE: ${presionB} | EVA: ${evasionGuardianB}`
atributosGolpeador1B.innerHTML = `FUE: ${fuerza1B} | PRE: ${precision1B} | INT: ${intercepcion1B} | EVA: ${evasionGolpeador1A} | ENE: ${energia1B}`
atributosGolpeador2B.innerHTML = `FUE: ${fuerza2B} | PRE: ${precision2B} | INT: ${intercepcion2B} | EVA: ${evasionGolpeador2A} | ENE: ${energia2B}`
atributosCazador1B.innerHTML = `AGI: ${agilidad1B} | DEF: ${defensa1B} | REA: ${reaccion1B} | EVA: ${evasionCazador1A} | DIS: ${disparo1B}`
atributosCazador2B.innerHTML = `AGI: ${agilidad2B} | DEF: ${defensa2B} | REA: ${reaccion2B} | EVA: ${evasionCazador2A} | DIS: ${disparo2B}`
atributosCazador3B.innerHTML = `AGI: ${agilidad3B} | DEF: ${defensa3B} | REA: ${reaccion3B} | EVA: ${evasionCazador3A} | DIS: ${disparo3B}`
atributosBuscadorB.innerHTML = `VEL: ${velocidadB} | GIR: ${giroB} | PER: ${avistamientoB} | EVA: ${evasionBuscadorA} | AGA: ${agarreB}`

botonReceptorPaseCazador1A.innerHTML = nombreCazador1A.innerHTML;
botonReceptorPaseCazador2A.innerHTML = nombreCazador2A.innerHTML;
botonReceptorPaseCazador3A.innerHTML = nombreCazador3A.innerHTML;
botonReceptorPaseCazador1B.innerHTML = nombreCazador1B.innerHTML;
botonReceptorPaseCazador2B.innerHTML = nombreCazador2B.innerHTML;
botonReceptorPaseCazador3B.innerHTML = nombreCazador3B.innerHTML;

let golesA = 0
let golesB = 0

let golpeCriticoA = false
let golpeCriticoB = false

let posesionEquipoA = false
let posesionEquipoB = false
let quaffleSuelta = false

let ataqueEquipoA = false
let ataqueEquipoB = false

let pasarTurnoA = false
let pasarTurnoB = false

let usoIntercepcionA = false
let usoIntercepcionB = false

let penalParaEquipoA = false
let penalParaEquipoB = false

let penalCazador1A = false
let penalCazador2A = false
let penalCazador3A = false
let penalCazador1B = false
let penalCazador2B = false
let penalCazador3B = false

let golpeadoGuardianA = false
let golpeadoCazador1A = false
let golpeadoCazador2A = false
let golpeadoCazador3A = false
let golpeadoBuscadorA = false
let golpeadoGuardianB = false
let golpeadoCazador1B = false
let golpeadoCazador2B = false
let golpeadoCazador3B = false
let golpeadoBuscadorB = false

let evadidoGuardianA = false
let evadidoGuardianB = false

let paseRecibidoCazador1A = false
let paseRecibidoCazador2A = false
let paseRecibidoCazador3A = false
let paseRecibidoCazador1B = false
let paseRecibidoCazador2B = false
let paseRecibidoCazador3B = false

let avistamientoSnitchA = false
let avistamientoSnitchB = false

// ESPECIALES Y ALTERACIONES

let presionEfectiva = false
let disparoIncomodo = false
let disparoDebil = false
let reversePassActivo = false
let slothGripRollActivo = false
let disparoDeTorbellinoActivo = false
let efectoFinbourghActivo = false
let knuckleBallActivo = false
let disparoDeVoleaActivo = false
let tiroLargoActivo1A = false
let tiroLargoActivo2A = false
let tiroLargoActivo3A = false
let tiroLargoActivo1B = false
let tiroLargoActivo2B = false
let tiroLargoActivo3B = false
let disparoConAmagueActivo1A = false
let disparoConAmagueActivo2A = false
let disparoConAmagueActivo3A = false
let disparoConAmagueActivo1B = false
let disparoConAmagueActivo2B = false
let disparoConAmagueActivo3B = false
let doubleEightLoopActivo = false
let atajadaRelampagoActivo = false
let starfishAndStickActivo = false
let paseLargoActivo = false
let tiroResbalonActivo = false
let atajadaSegura = false
let golpeDeFrancotiradorActivo = false;
let bludgerBackbeatActivo = false;
let golpeBombeadoActivo = false;
let golpeCanonActivo = false;
let angelGuardianActivo = false;
let interferenciaDeAguilaActivo = false;
let amagoDeWronskiActivoA = false;
let perspicaciaActivoA = false;
let ultimoAlientoActivoA = false;
let caidaEnPicadaActivoA = false;
let escarbatoActivoA = false;
let plumptonPassActivoA = false;
let amagoDeWronskiActivoB = false;
let perspicaciaActivoB = false;
let ultimoAlientoActivoB = false;
let caidaEnPicadaActivoB = false;
let escarbatoActivoB = false;
let plumptonPassActivoB = false;

botonReflejosGuardianA.disabled = true;
botonReflejosGuardianB.disabled = true;
botonVoladaLateralGuardianA.disabled = true;
botonVoladaLateralGuardianB.disabled = true;
botonPresionGuardianA.disabled = true;
botonPresionGuardianB.disabled = true;
botonEvasionGuardianA.disabled = true;
botonEvasionGuardianB.disabled = true;
botonAtajadaRelampagoA.disabled = true;
botonAtajadaRelampagoB.disabled = true;
botonStarfishAndStickA.disabled = true;
botonStarfishAndStickB.disabled = true;
botonDoubleEightLoopA.disabled = true;
botonDoubleEightLoopB.disabled = true;
botonAllInA.disabled = true;
botonAllInB.disabled = true;
botonPaseLargoA.disabled = true;
botonPaseLargoB.disabled = true;
botonTiroResbalonA.disabled = true;
botonTiroResbalonB.disabled = true;
botonGolpeGolpeador1A.disabled = true;
botonGolpeGolpeador2A.disabled = true;
botonGolpeGolpeador1B.disabled = true;
botonGolpeGolpeador2B.disabled = true;
botonIntercepcionGolpeador1A.disabled = true;
botonIntercepcionGolpeador2A.disabled = true;
botonIntercepcionGolpeador1B.disabled = true;
botonIntercepcionGolpeador2B.disabled = true;
botonEvasionGolpeador1A.disabled = true;
botonEvasionGolpeador2A.disabled = true;
botonEvasionGolpeador1B.disabled = true;
botonEvasionGolpeador2B.disabled = true;
botonPasarTurnoGolpeador1A.disabled = true;
botonPasarTurnoGolpeador2A.disabled = true;
botonPasarTurnoGolpeador1B.disabled = true;
botonPasarTurnoGolpeador2B.disabled = true;
botonGolpeDeFrancotirador1A.disabled = true;
botonGolpeDeFrancotirador2A.disabled = true;
botonGolpeDeFrancotirador1B.disabled = true;
botonGolpeDeFrancotirador2B.disabled = true;
botonBludgerBackbeat1A.disabled = true;
botonBludgerBackbeat2A.disabled = true;
botonBludgerBackbeat1B.disabled = true;
botonBludgerBackbeat2B.disabled = true;
botonGolpeBombeado1A.disabled = true;
botonGolpeBombeado2A.disabled = true;
botonGolpeBombeado1B.disabled = true;
botonGolpeBombeado2B.disabled = true;
botonGolpeCanon1A.disabled = true;
botonGolpeCanon2A.disabled = true;
botonGolpeCanon1B.disabled = true;
botonGolpeCanon2B.disabled = true;
botonAngelGuardian1A.disabled = true;
botonAngelGuardian2A.disabled = true;
botonAngelGuardian1B.disabled = true;
botonAngelGuardian2B.disabled = true;
botonInterferenciaDeAguila1A.disabled = true;
botonInterferenciaDeAguila2A.disabled = true;
botonInterferenciaDeAguila1B.disabled = true;
botonInterferenciaDeAguila2B.disabled = true;
botonAgilidadCazador1A.disabled = true;
botonFintaDePorskov1A.disabled = true;
botonManoCambiada1A.disabled = true;
botonAgilidadCazador2A.disabled = true;
botonFintaDePorskov2A.disabled = true;
botonManoCambiada2A.disabled = true;
botonAgilidadCazador3A.disabled = true;
botonFintaDePorskov3A.disabled = true;
botonManoCambiada3A.disabled = true;
botonAgilidadCazador1B.disabled = true;
botonFintaDePorskov1B.disabled = true;
botonManoCambiada1B.disabled = true;
botonAgilidadCazador2B.disabled = true;
botonFintaDePorskov2B.disabled = true;
botonManoCambiada2B.disabled = true;
botonAgilidadCazador3B.disabled = true;
botonFintaDePorskov3B.disabled = true;
botonManoCambiada3B.disabled = true;
botonDefensaCazador1A.disabled = true;
botonRoboSpeelman1A.disabled = true;
botonTransylvanianTackle1A.disabled = true;
botonDefensaCazador2A.disabled = true;
botonRoboSpeelman2A.disabled = true;
botonTransylvanianTackle2A.disabled = true;
botonDefensaCazador3A.disabled = true;
botonRoboSpeelman3A.disabled = true;
botonTransylvanianTackle3A.disabled = true;
botonDefensaCazador1B.disabled = true;
botonRoboSpeelman1B.disabled = true;
botonTransylvanianTackle1B.disabled = true;
botonDefensaCazador2B.disabled = true;
botonRoboSpeelman2B.disabled = true;
botonTransylvanianTackle2B.disabled = true;
botonDefensaCazador3B.disabled = true;
botonRoboSpeelman3B.disabled = true;
botonTransylvanianTackle3B.disabled = true;
botonReaccionCazador1A.disabled = true;
botonIntuicionFugaz1A.disabled = true;
botonReaccionCazador2A.disabled = true;
botonIntuicionFugaz2A.disabled = true;
botonReaccionCazador3A.disabled = true;
botonIntuicionFugaz3A.disabled = true;
botonReaccionCazador1B.disabled = true;
botonIntuicionFugaz1B.disabled = true;
botonReaccionCazador2B.disabled = true;
botonIntuicionFugaz2B.disabled = true;
botonReaccionCazador3B.disabled = true;
botonIntuicionFugaz3B.disabled = true;
botonEvasionCazador1A.disabled = true;
botonEvasionCazador2A.disabled = true;
botonEvasionCazador3A.disabled = true;
botonEvasionCazador1B.disabled = true;
botonEvasionCazador2B.disabled = true;
botonEvasionCazador3B.disabled = true;
botonDisparoCazador1A.disabled = true;
botonDisparoCazador2A.disabled = true;
botonDisparoCazador3A.disabled = true;
botonDisparoCazador1B.disabled = true;
botonDisparoCazador2B.disabled = true;
botonDisparoCazador3B.disabled = true;
botonReversePass1A.disabled = true;
botonReversePass2A.disabled = true;
botonReversePass3A.disabled = true;
botonReversePass1B.disabled = true;
botonReversePass2B.disabled = true;
botonReversePass3B.disabled = true;
botonSlothGripRoll1A.disabled = true;
botonSlothGripRoll2A.disabled = true;
botonSlothGripRoll3A.disabled = true;
botonSlothGripRoll1B.disabled = true;
botonSlothGripRoll2B.disabled = true;
botonSlothGripRoll3B.disabled = true;
botonTiroLargo1A.disabled = true;
botonTiroLargo2A.disabled = true;
botonTiroLargo3A.disabled = true;
botonTiroLargo1B.disabled = true;
botonTiroLargo2B.disabled = true;
botonTiroLargo3B.disabled = true;
botonDisparoDeTorbellino1A.disabled = true;
botonDisparoDeTorbellino2A.disabled = true;
botonDisparoDeTorbellino3A.disabled = true;
botonDisparoDeTorbellino1B.disabled = true;
botonDisparoDeTorbellino2B.disabled = true;
botonDisparoDeTorbellino3B.disabled = true;
botonDisparoConAmague1A.disabled = true;
botonDisparoConAmague2A.disabled = true;
botonDisparoConAmague3A.disabled = true;
botonDisparoConAmague1B.disabled = true;
botonDisparoConAmague2B.disabled = true;
botonDisparoConAmague3B.disabled = true;
botonEfectoFinbourgh1A.disabled = true;
botonEfectoFinbourgh2A.disabled = true;
botonEfectoFinbourgh3A.disabled = true;
botonEfectoFinbourgh1B.disabled = true;
botonEfectoFinbourgh2B.disabled = true;
botonEfectoFinbourgh3B.disabled = true;
botonKnuckleBall1A.disabled = true;
botonKnuckleBall2A.disabled = true;
botonKnuckleBall3A.disabled = true;
botonKnuckleBall1B.disabled = true;
botonKnuckleBall2B.disabled = true;
botonKnuckleBall3B.disabled = true;
botonDisparoDeVolea1A.disabled = true;
botonDisparoDeVolea2A.disabled = true;
botonDisparoDeVolea3A.disabled = true;
botonDisparoDeVolea1B.disabled = true;
botonDisparoDeVolea2B.disabled = true;
botonDisparoDeVolea3B.disabled = true;
botonVelocidadBuscadorA.disabled = true;
botonVelocidadBuscadorB.disabled = true;
botonAvistamientoBuscadorA.disabled = true;
botonAvistamientoBuscadorB.disabled = true;
botonEvasionBuscadorA.disabled = true;
botonEvasionBuscadorB.disabled = true;
botonAgarreBuscadorA.disabled = true;
botonAgarreBuscadorB.disabled = true;
botonContinuarBuscadorA.disabled = true;
botonContinuarBuscadorB.disabled = true;
botonAmagoDeWronskiA.disabled = true;
botonPerspicaciaA.disabled = true;
botonUltimoAlientoA.disabled = true;
botonCaidaEnPicadaA.disabled = true;
botonPlumptonPassA.disabled = true;
botonEscarbatoA.disabled = true;
botonPlumptonPassA.disabled = true;
botonAmagoDeWronskiB.disabled = true;
botonPerspicaciaB.disabled = true;
botonUltimoAlientoB.disabled = true;
botonCaidaEnPicadaB.disabled = true;
botonPlumptonPassB.disabled = true;
botonEscarbatoB.disabled = true;
botonPlumptonPassB.disabled = true;
botonCalcularGanadorCazadores1.disabled = true;
botonReceptorPaseCazador1A.disabled = true;
botonReceptorPaseCazador2A.disabled = true;
botonReceptorPaseCazador3A.disabled = true;
botonReceptorPaseCazador1B.disabled = true;
botonReceptorPaseCazador2B.disabled = true;
botonReceptorPaseCazador3B.disabled = true;

botonIniciarTurnoImpar.disabled = true;
botonIniciarTurnoPar.disabled = true;
botonCalcularGanadorCazadores1.disabled = true;
botonCalcularGanadorCazadores2.disabled = true;
botonIniciarTurnoBuscador.disabled = true;
botonUbicacionSnitch.disabled = true;
botonComportamientoSnitch.disabled = true;
botonAvistamiento.disabled = true;
botonAvance.disabled = true;

let numeroTurnoImpar = -1
let numeroTurnoPar = 0
let numeroTurnoBuscador = 0
let numeroTurnoPenal = 0

let valorReflejosGuardianA = 0
let valorVoladaLateralGuardianA = 0
let valorPresionGuardianA = 20
let valorEvasionGuardianA = 25
let valorGolpeGolpeador1A = 1
let valorGolpeGolpeador2A = 1
let valorIntercepcionGolpeador1A = 40
let valorIntercepcionGolpeador2A = 40
let valorAgilidadCazador1A = 0
let valorAgilidadCazador2A = 0
let valorAgilidadCazador3A = 0
let valorDefensaCazador1A = 0
let valorDefensaCazador2A = 0
let valorDefensaCazador3A = 0
let valorReaccionCazador1A = 0
let valorReaccionCazador2A = 0
let valorReaccionCazador3A = 0
let valorEvasionCazador1A = 0
let valorEvasionCazador2A = 0
let valorEvasionCazador3A = 0
let valorDisparoCazador1A = 0
let valorDisparoCazador2A = 0
let valorDisparoCazador3A = 0
let valorAvistamientoBuscadorA1 = 0
let valorAvistamientoBuscadorA2 = 0
let valorAvistamientoBuscadorA3 = 0
let valorAvistamientoTotalBuscadorA = 0
let valorEvasionBuscadorA = 0
let valorAgarreBuscadorA = 0
let valorReflejosGuardianB = 0
let valorVoladaLateralGuardianB = 0
let valorPresionGuardianB = 20
let valorEvasionGuardianB = 25
let valorGolpeGolpeador1B = 1
let valorGolpeGolpeador2B = 1
let valorIntercepcionGolpeador1B = 40
let valorIntercepcionGolpeador2B = 40
let valorAgilidadCazador1B = 0
let valorAgilidadCazador2B = 0
let valorAgilidadCazador3B = 0
let valorDefensaCazador1B = 0
let valorDefensaCazador2B = 0
let valorDefensaCazador3B = 0
let valorReaccionCazador1B = 0
let valorReaccionCazador2B = 0
let valorReaccionCazador3B = 0
let valorEvasionCazador1B = 0
let valorEvasionCazador2B = 0
let valorEvasionCazador3B = 0
let valorDisparoCazador1B = 0
let valorDisparoCazador2B = 0
let valorDisparoCazador3B = 0
let valorAvistamientoBuscadorB1 = 0
let valorAvistamientoBuscadorB2 = 0
let valorAvistamientoBuscadorB3 = 0
let valorAvistamientoTotalBuscadorB = 0
let valorEvasionBuscadorB = 0
let valorAgarreBuscadorB = 0
let valorUbicacionSnitch = 0
let valorComportamientoSnitch = 0
let efectoGiro = 0
let valorVelocidadBuscadorA3 = 0
let valorVelocidadBuscadorA4 = 0
let valorVelocidadBuscadorA5 = 0
let valorVelocidadBuscadorA6 = 0
let valorVelocidadBuscadorB3 = 0
let valorVelocidadBuscadorB4 = 0
let valorVelocidadBuscadorB5 = 0
let valorVelocidadBuscadorB6 = 0
let valorAvanceTotalBuscadorA = 0
let valorAvanceTotalBuscadorB = 0
let valorDisparoGuardianA = 0
let valorDisparoGuardianB = 0

let ubicacionA = false;
let ubicacionB = false;

let agilidadesA = [0, 0, 0]
let agilidadesB = [0, 0, 0]

let defensasA = [0, 0, 0]
let defensasB = [0, 0, 0]

let reaccionesA = [0, 0, 0]
let reaccionesB = [0, 0, 0]

let maxAgilidadA = 0
let maxAgilidadB = 0

let maxDefensaA = 0
let maxDefensaB = 0

let maxReaccionA = 0
let maxReaccionB = 0

let turnoImpar = false;
let turnoPar = false;
let turnoBuscador = false;
let turnoPenal = false;

// FUNCIONES DE PARTIDO

function seleccionarEquipoA() {
    botonEquipoA.disabled = true;
    if (inputDublinDelayers.checked) {
        equipoA = "Dublin Delayers"
        inicialesA = "DD "
    } else if (inputEisenbergErklings.checked) {
        equipoA = "Eisenberg Erklings"
        inicialesA = "EE "
    } else if (inputFirenzeFalcons.checked) {
        equipoA = "Firenze Falcons"
        inicialesA = "FF "
    } else if (inputHolyheadHarpies.checked) {
        equipoA = "Holyhead Harpies"
        inicialesA = "HH "
    } else if (inputKattegatKrakor.checked) {
        equipoA = "Kattegat Krakor"
        inicialesA = "KK "
    } else if (inputMontroseMagpies.checked) {
        equipoA = "Montrose Magpies"
        inicialesA = "MM "
    } else if (inputParisPromise.checked) {
        equipoA = "Paris Promise"
        inicialesA = "PP "
    } else if (inputSochiSnidgets.checked) {
        equipoA = "Sochi Snidgets"
        inicialesA = "SS "
    } else if (inputTutshillTornados.checked) {
        equipoA = "Tutshill Tornados"
        inicialesA = "TT "
    } else if (inputVratsaVultures.checked) {
        equipoA = "Vratsa Vultures"
        inicialesA = "VV "
    } else {
        alert("Elige un equipo.")
        botonEquipoA.disabled = false;
    }
    iniciarPartido()
    equiposElegidos()
    // equiposElegidosA()
    ocultarBotonesEspeciales()
    nombreEquipoA.innerHTML = equipoA
    marcadorEquipoA.innerHTML = inicialesA
    nombreGuardianA.innerHTML = guardianA
    nombreGolpeador1A.innerHTML = golpeador1A
    nombreGolpeador2A.innerHTML = golpeador2A
    nombreCazador1A.innerHTML = cazador1A
    nombreCazador2A.innerHTML = cazador2A
    nombreCazador3A.innerHTML = cazador3A
    nombreBuscadorA.innerHTML = buscadorA
    atributosGuardianA.innerHTML = `REF: ${reflejosA} | VOL: ${voladaLateralA} | PRE: ${presionA} | EVA: ${evasionGuardianA}`
    atributosGolpeador1A.innerHTML = `FUE: ${fuerza1A} | PRE: ${precision1A} | INT: ${intercepcion1A} | EVA: ${evasionGolpeador1A} | ENE: ${energia1A}`
    atributosGolpeador2A.innerHTML = `FUE: ${fuerza2A} | PRE: ${precision2A} | INT: ${intercepcion2A} | EVA: ${evasionGolpeador2A} | ENE: ${energia2A}`
    atributosCazador1A.innerHTML = `AGI: ${agilidad1A} | DEF: ${defensa1A} | REA: ${reaccion1A} | EVA: ${evasionCazador1A} | DIS: ${disparo1A}`
    atributosCazador2A.innerHTML = `AGI: ${agilidad2A} | DEF: ${defensa2A} | REA: ${reaccion2A} | EVA: ${evasionCazador2A} | DIS: ${disparo2A}`
    atributosCazador3A.innerHTML = `AGI: ${agilidad3A} | DEF: ${defensa3A} | REA: ${reaccion3A} | EVA: ${evasionCazador3A} | DIS: ${disparo3A}`
    atributosBuscadorA.innerHTML = `VEL: ${velocidadA} | GIR: ${giroA} | PER: ${avistamientoA} | EVA: ${evasionBuscadorA} | AGA: ${agarreA}`

    botonReceptorPaseCazador1A.innerHTML = nombreCazador1A.innerHTML;
    botonReceptorPaseCazador2A.innerHTML = nombreCazador2A.innerHTML;
    botonReceptorPaseCazador3A.innerHTML = nombreCazador3A.innerHTML;
}

function seleccionarEquipoB() {
    botonEquipoB.disabled = true;
    if (inputDublinDelayers.checked) {
        equipoB = "Dublin Delayers"
        inicialesB = " DD"
    } else if (inputEisenbergErklings.checked) {
        equipoB = "Eisenberg Erklings"
        inicialesB = " EE"
    } else if (inputFirenzeFalcons.checked) {
        equipoB = "Firenze Falcons"
        inicialesB = " FF"
    } else if (inputHolyheadHarpies.checked) {
        equipoB = "Holyhead Harpies"
        inicialesB = " HH"
    } else if (inputKattegatKrakor.checked) {
        equipoB = "Kattegat Krakor"
        inicialesB = " KK"
    } else if (inputMontroseMagpies.checked) {
        equipoB = "Montrose Magpies"
        inicialesB = " MM"
    } else if (inputParisPromise.checked) {
        equipoB = "Paris Promise"
        inicialesB = " PP"
    } else if (inputSochiSnidgets.checked) {
        equipoB = "Sochi Snidgets"
        inicialesB = " SS"
    } else if (inputTutshillTornados.checked) {
        equipoB = "Tutshill Tornados"
        inicialesB = " TT"
    } else if (inputVratsaVultures.checked) {
        equipoB = "Vratsa Vultures"
        inicialesB = " VV"
    } else {
        alert("Elige un equipo.")
        botonEquipoB.disabled = false;
    }
    iniciarPartido()
    equiposElegidos()
    // equiposElegidosB()
    ocultarBotonesEspeciales()
    nombreEquipoB.innerHTML = equipoB
    marcadorEquipoB.innerHTML = inicialesB
    nombreGuardianB.innerHTML = guardianB
    nombreGolpeador1B.innerHTML = golpeador1B
    nombreGolpeador2B.innerHTML = golpeador2B
    nombreCazador1B.innerHTML = cazador1B
    nombreCazador2B.innerHTML = cazador2B
    nombreCazador3B.innerHTML = cazador3B
    nombreBuscadorB.innerHTML = buscadorB
    atributosGuardianB.innerHTML = `REF: ${reflejosB} | VOL: ${voladaLateralB} | PRE: ${presionB} | EVA: ${evasionGuardianB}`
    atributosGolpeador1B.innerHTML = `FUE: ${fuerza1B} | PRE: ${precision1B} | INT: ${intercepcion1B} | EVA: ${evasionGolpeador1B} | ENE: ${energia1B}`
    atributosGolpeador2B.innerHTML = `FUE: ${fuerza2B} | PRE: ${precision2B} | INT: ${intercepcion2B} | EVA: ${evasionGolpeador2B} | ENE: ${energia2B}`
    atributosCazador1B.innerHTML = `AGI: ${agilidad1B} | DEF: ${defensa1B} | REA: ${reaccion1B} | EVA: ${evasionCazador1B} | DIS: ${disparo1B}`
    atributosCazador2B.innerHTML = `AGI: ${agilidad2B} | DEF: ${defensa2B} | REA: ${reaccion2B} | EVA: ${evasionCazador2B} | DIS: ${disparo2B}`
    atributosCazador3B.innerHTML = `AGI: ${agilidad3B} | DEF: ${defensa3B} | REA: ${reaccion3B} | EVA: ${evasionCazador3B} | DIS: ${disparo3B}`
    atributosBuscadorB.innerHTML = `VEL: ${velocidadB} | GIR: ${giroB} | PER: ${avistamientoB} | EVA: ${evasionBuscadorB} | AGA: ${agarreB}`

    botonReceptorPaseCazador1B.innerHTML = nombreCazador1B.innerHTML;
    botonReceptorPaseCazador2B.innerHTML = nombreCazador2B.innerHTML;
    botonReceptorPaseCazador3B.innerHTML = nombreCazador3B.innerHTML;
}

function resultadoAjustadoEquipoA() {
    if (golesA < 10) {
        resultadoEquipoA.innerHTML = "00" + golesA
    } else if (golesA < 100) {
        resultadoEquipoA.innerHTML = "0" + golesA
    } else {
        resultadoEquipoA.innerHTML = golesA
    }
}

function resultadoAjustadoEquipoB() {
    if (golesB < 10) {
        resultadoEquipoB.innerHTML = "00" + golesB
    } else if (golesB < 100) {
        resultadoEquipoB.innerHTML = "0" + golesB
    } else {
        resultadoEquipoB.innerHTML = golesB
    }
}

function iniciarPartido() {
    if (botonEquipoA.disabled == true && botonEquipoB.disabled == true) {
        botonIniciarTurnoImpar.disabled = false;
        sectionListaDeEquipos.style.display = 'none';
        sectionSeleccionarEquipo.style.display = 'none';
    }
}

function iniciarTurnoImpar() {
    amagoDeWronskiActivoA = false;
    amagoDeWronskiActivoB = false;
    caidaEnPicadaActivoA = false;
    caidaEnPicadaActivoB = false;
    botonIniciarTurnoImpar.disabled = true;
    botonTiroResbalonA.disabled = true;
    botonTiroResbalonB.disabled = true;
    botonPaseLargoA.disabled = true;
    botonPaseLargoB.disabled = true;
    botonAmagoDeWronskiA.disabled = true;
    botonAmagoDeWronskiB.disabled = true;
    valorReflejosGuardianA = 0;
    valorReflejosGuardianB = 0;
    valorVoladaLateralGuardianA = 0;
    valorVoladaLateralGuardianB = 0;
    if (penalParaEquipoA == true) {
        turnoPenal = true;
        penalParaEquipoA = false;
        lanzarPenalParaEquipoA()
    } else if (penalParaEquipoB == true) {
        turnoPenal = true;
        penalParaEquipoB = false;
        lanzarPenalParaEquipoB()
    } else {
        numeroTurnoImpar += 2;
        turnoPar = false;
        turnoImpar = true;
        turnoBuscador = false;
        ataqueEquipoA = false
        ataqueEquipoB = false
        agilidadesA = [0, 0, 0]
        agilidadesB = [0, 0, 0]
        defensasA = [0, 0, 0]
        defensasB = [0, 0, 0]
        reaccionesA = [0, 0, 0]
        reaccionesB = [0, 0, 0]
        resultadoAjustadoEquipoA()
        resultadoAjustadoEquipoB()
        descripcion = `____________________`
        mostrarDescripcionTurno(descripcion)
        descripcion = `Turno ` + numeroTurnoImpar;
        mostrarDescripcionTurno(descripcion)
        descripcion = ` - - - - - - - - - - - - - - - - `
        mostrarDescripcionTurno(descripcion)
        botonIniciarTurnoPar.disabled = true;
        botonCalcularGanadorCazadores1.disabled = false;
        botonAgilidadCazador1A.disabled = true;
        botonAgilidadCazador2A.disabled = true;
        botonAgilidadCazador3A.disabled = true;
        botonAgilidadCazador1B.disabled = true;
        botonAgilidadCazador2B.disabled = true;
        botonAgilidadCazador3B.disabled = true;
        botonDefensaCazador1A.disabled = true;
        botonDefensaCazador2A.disabled = true;
        botonDefensaCazador3A.disabled = true;
        botonDefensaCazador1B.disabled = true;
        botonDefensaCazador2B.disabled = true;
        botonDefensaCazador3B.disabled = true;
        botonReaccionCazador1A.disabled = true;
        botonReaccionCazador2A.disabled = true;
        botonReaccionCazador3A.disabled = true;
        botonReaccionCazador1B.disabled = true;
        botonReaccionCazador2B.disabled = true;
        botonReaccionCazador3B.disabled = true;
        botonGolpeGolpeador1A.disabled = true;
        botonGolpeGolpeador2A.disabled = true;
        botonGolpeGolpeador1B.disabled = true;
        botonGolpeGolpeador2B.disabled = true;
        botonIntercepcionGolpeador1A.disabled = true;
        botonIntercepcionGolpeador2A.disabled = true;
        botonIntercepcionGolpeador1B.disabled = true;
        botonIntercepcionGolpeador2B.disabled = true;
        botonEvasionCazador1A.disabled = true;
        botonEvasionCazador2A.disabled = true;
        botonEvasionCazador3A.disabled = true;
        botonEvasionCazador1B.disabled = true;
        botonEvasionCazador2B.disabled = true;
        botonEvasionCazador3B.disabled = true;
        botonReflejosGuardianA.disabled = true;
        botonReflejosGuardianB.disabled = true;
        botonVoladaLateralGuardianA.disabled = true;
        botonVoladaLateralGuardianB.disabled = true;
        usoIntercepcionA = false;
        usoIntercepcionB = false;
        golpeCriticoA = false
        golpeCriticoB = false
        ataqueEquipoA = false
        ataqueEquipoB = false
        presionEfectiva = false
        disparoIncomodo = false
        disparoDebil = false
        pasarTurnoA = false
        pasarTurnoB = false
        golpeadoGuardianA = false
        golpeadoBuscadorA = false
        golpeadoGuardianB = false
        golpeadoBuscadorB = false
        evadidoGuardianA = false
        evadidoGuardianB = false
        paseRecibidoCazador1A = false
        paseRecibidoCazador2A = false
        paseRecibidoCazador3A = false
        paseRecibidoCazador1B = false
        paseRecibidoCazador2B = false
        paseRecibidoCazador3B = false
        if (posesionEquipoA == true) {
            if (golpeadoCazador1A == true) {
                golpeadoCazador1A = false;
            } else {
                botonAgilidadCazador1A.disabled = false;
                if (usosFintaDePorskov1A < fintaDePorskov1A) {
                    botonFintaDePorskov1A.disabled = false;
                }
                if (usosManoCambiada1A < manoCambiada1A) {
                    botonManoCambiada1A.disabled = false;
                }
            }
            if (golpeadoCazador2A == true) {
                golpeadoCazador2A = false;
            } else {
                botonAgilidadCazador2A.disabled = false;
                if (usosFintaDePorskov2A < fintaDePorskov2A) {
                    botonFintaDePorskov2A.disabled = false;
                }
                if (usosManoCambiada2A < manoCambiada2A) {
                    botonManoCambiada2A.disabled = false;
                }
            }
            if (golpeadoCazador3A == true) {
                golpeadoCazador3A = false;
            } else {
                botonAgilidadCazador3A.disabled = false;
                if (usosFintaDePorskov3A < fintaDePorskov3A) {
                    botonFintaDePorskov3A.disabled = false;
                }
                if (usosManoCambiada3A < manoCambiada3A) {
                    botonManoCambiada3A.disabled = false;
                }
            }
            if (golpeadoCazador1B == true) {
                golpeadoCazador1B = false;
            } else {
                botonDefensaCazador1B.disabled = false;
                if (usosRoboSpeelman1B < roboSpeelman1B) {
                    botonRoboSpeelman1B.disabled = false;
                }
                if (usosTransylvanianTackle1B < transylvanianTackle1B) {
                    botonTransylvanianTackle1B.disabled = false;
                }
            }
            if (golpeadoCazador2B == true) {
                golpeadoCazador2B = false;
            } else {
                botonDefensaCazador2B.disabled = false;
                if (usosRoboSpeelman2B < roboSpeelman2B) {
                    botonRoboSpeelman2B.disabled = false;
                }
                if (usosTransylvanianTackle2B < transylvanianTackle2B) {
                    botonTransylvanianTackle2B.disabled = false;
                }
            }
            if (golpeadoCazador3B == true) {
                golpeadoCazador3B = false;
            } else {
                botonDefensaCazador3B.disabled = false;
                if (usosRoboSpeelman3B < roboSpeelman3B) {
                    botonRoboSpeelman3B.disabled = false;
                }
                if (usosTransylvanianTackle3B < transylvanianTackle3B) {
                    botonTransylvanianTackle3B.disabled = false;
                }
            }
        } else if (posesionEquipoB == true) {
            if (golpeadoCazador1B == true) {
                golpeadoCazador1B = false;
            } else {
                botonAgilidadCazador1B.disabled = false;
                if (usosFintaDePorskov1B < fintaDePorskov1B) {
                    botonFintaDePorskov1B.disabled = false;
                }
                if (usosManoCambiada1B < manoCambiada1B) {
                    botonManoCambiada1B.disabled = false;
                }
            }
            if (golpeadoCazador2B == true) {
                golpeadoCazador2B = false;
            } else {
                botonAgilidadCazador2B.disabled = false;
                if (usosFintaDePorskov2B < fintaDePorskov2B) {
                    botonFintaDePorskov2B.disabled = false;
                }
                if (usosManoCambiada2B < manoCambiada2B) {
                    botonManoCambiada2B.disabled = false;
                }
            }
            if (golpeadoCazador3B == true) {
                golpeadoCazador3B = false;
            } else {
                botonAgilidadCazador3B.disabled = false;
                if (usosFintaDePorskov3B < fintaDePorskov3B) {
                    botonFintaDePorskov3B.disabled = false;
                }
                if (usosManoCambiada3B < manoCambiada3B) {
                    botonManoCambiada3B.disabled = false;
                }
            }
            if (golpeadoCazador1A == true) {
                golpeadoCazador1A = false;
            } else {
                botonDefensaCazador1A.disabled = false;
                if (usosRoboSpeelman1A < roboSpeelman1A) {
                    botonRoboSpeelman1A.disabled = false;
                }
                if (usosTransylvanianTackle1A < transylvanianTackle1A) {
                    botonTransylvanianTackle1A.disabled = false;
                }
            }
            if (golpeadoCazador2A == true) {
                golpeadoCazador2A = false;
            } else {
                botonDefensaCazador2A.disabled = false;
                if (usosRoboSpeelman2A < roboSpeelman2A) {
                    botonRoboSpeelman2A.disabled = false;
                }
                if (usosTransylvanianTackle2A < transylvanianTackle2A) {
                    botonTransylvanianTackle2A.disabled = false;
                }
            }
            if (golpeadoCazador3A == true) {
                golpeadoCazador3A = false;
            } else {
                botonDefensaCazador3A.disabled = false;
                if (usosRoboSpeelman3A < roboSpeelman3A) {
                    botonRoboSpeelman3A.disabled = false;
                }
                if (usosTransylvanianTackle3A < transylvanianTackle3A) {
                    botonTransylvanianTackle3A.disabled = false;
                }
            }   
        } else {
            if (golpeadoCazador1A == true) {
                golpeadoCazador1A = false;
            } else {
                botonReaccionCazador1A.disabled = false;
                if (usosIntuicionFugaz1A < intuicionFugaz1A) {
                    botonIntuicionFugaz1A.disabled = false;
                }
            }
            if (golpeadoCazador2A == true) {
                golpeadoCazador2A = false;
            } else {
                botonReaccionCazador2A.disabled = false;
                if (usosIntuicionFugaz2A < intuicionFugaz2A) {
                    botonIntuicionFugaz2A.disabled = false;
                }
            }
            if (golpeadoCazador3A == true) {
                golpeadoCazador3A = false;
            } else {
                botonReaccionCazador3A.disabled = false;
                if (usosIntuicionFugaz3A < intuicionFugaz3A) {
                    botonIntuicionFugaz3A.disabled = false;
                }
            }
            if (golpeadoCazador1B == true) {
                golpeadoCazador1B = false;
            } else {
                botonReaccionCazador1B.disabled = false;
                if (usosIntuicionFugaz1B < intuicionFugaz1B) {
                    botonIntuicionFugaz1B.disabled = false;
                }
            }
            if (golpeadoCazador2B == true) {
                golpeadoCazador2B = false;
            } else {
                botonReaccionCazador2B.disabled = false;
                if (usosIntuicionFugaz2B < intuicionFugaz2B) {
                    botonIntuicionFugaz2B.disabled = false;
                }
            }
            if (golpeadoCazador3B == true) {
                golpeadoCazador3B = false;
            } else {
                botonReaccionCazador3B.disabled = false;
                if (usosIntuicionFugaz3B < intuicionFugaz3B) {
                    botonIntuicionFugaz3B.disabled = false;
                }
            } 
        }
    }
}

function iniciarTurnoPar() {

    numeroTurnoPar += 2;

    turnoImpar = false;
    turnoPar = true;
    
    botonIniciarTurnoImpar.disabled = true;
    botonAgilidadCazador1A.disabled = true;
    botonAgilidadCazador2A.disabled = true;
    botonAgilidadCazador3A.disabled = true;
    botonDefensaCazador1B.disabled = true;
    botonDefensaCazador2B.disabled = true;
    botonDefensaCazador3B.disabled = true;
    botonIniciarTurnoPar.disabled = true;
    botonCalcularGanadorCazadores1.disabled = true;
    botonCalcularGanadorCazadores2.disabled = true;
    botonGolpeGolpeador1A.disabled = true;
    botonGolpeGolpeador1B.disabled = true;
    botonIntercepcionGolpeador1A.disabled = true;
    botonIntercepcionGolpeador1B.disabled = true;
    botonEvasionCazador1A.disabled = true;
    botonEvasionCazador2A.disabled = true;
    botonEvasionCazador3A.disabled = true;
    botonEvasionCazador1B.disabled = true;
    botonEvasionCazador2B.disabled = true;
    botonEvasionCazador3B.disabled = true;

    descripcion = `____________________`
    mostrarDescripcionTurno(descripcion)
    descripcion = `Turno ` + numeroTurnoPar;
    mostrarDescripcionTurno(descripcion);
    descripcion = ` - - - - - - - - - - - - - - - - `
    mostrarDescripcionTurno(descripcion)
    
    if (paseRecibidoCazador1A == true || paseRecibidoCazador2A == true || paseRecibidoCazador3A == true) {
        botonPresionGuardianB.disabled = false
    } else if (paseRecibidoCazador1B == true || paseRecibidoCazador2B == true || paseRecibidoCazador3B == true) {
        botonPresionGuardianA.disabled = false
    } else {
        descripcion = `Ha pasado algo mal.`;
        mostrarDescripcionTurno(descripcion);
    }
}

function iniciarTurnoBuscador() {
    botonIniciarTurnoBuscador.disabled = true;
    numeroTurnoBuscador ++;
    turnoBuscador = true;
    turnoImpar = false;
    turnoPar = false;
    if (numeroTurnoPar == 6) {
        descripcion = `____________________`
        mostrarDescripcionTurno(descripcion)
        descripcion = `Turno de Buscador ` + numeroTurnoBuscador;
        mostrarDescripcionTurno(descripcion);
        descripcion = ` - - - - - - - - - - - - - - - - `
        mostrarDescripcionTurno(descripcion)
        botonUbicacionSnitch.disabled = false;
    } else if (numeroTurnoPar == 12) {
        descripcion = `____________________`
        mostrarDescripcionTurno(descripcion)
        descripcion = `Turno de Buscador ` + numeroTurnoBuscador;
        mostrarDescripcionTurno(descripcion);
        descripcion = ` - - - - - - - - - - - - - - - - `
        mostrarDescripcionTurno(descripcion)
        botonAvistamientoBuscadorA.disabled = false;
        if (usosAmagoDeWronskiA < amagoDeWronskiA) {
            botonAmagoDeWronskiA.disabled = false;
        }
        if (usosPerspicaciaA < perspicaciaA) {
            botonPerspicaciaA.disabled = false;
        }
        botonAvistamientoBuscadorB.disabled = false;
        if (usosAmagoDeWronskiB < amagoDeWronskiB) {
            botonAmagoDeWronskiB.disabled = false;
        }
        if (usosPerspicaciaB < perspicaciaB) {
            botonPerspicaciaB.disabled = false;
        }
    } else if (numeroTurnoPar == 18) {
        descripcion = `____________________`
        mostrarDescripcionTurno(descripcion)
        descripcion = `Turno de Buscador ` + numeroTurnoBuscador;
        mostrarDescripcionTurno(descripcion);
        descripcion = ` - - - - - - - - - - - - - - - - `
        mostrarDescripcionTurno(descripcion)
        botonAvistamientoBuscadorA.disabled = false;
        if (usosAmagoDeWronskiA < amagoDeWronskiA) {
            botonAmagoDeWronskiA.disabled = false;
        }
        if (usosPerspicaciaA < perspicaciaA) {
            botonPerspicaciaA.disabled = false;
        }
        botonAvistamientoBuscadorB.disabled = false;
        if (usosAmagoDeWronskiB < amagoDeWronskiB) {
            botonAmagoDeWronskiB.disabled = false;
        }
        if (usosPerspicaciaB < perspicaciaB) {
            botonPerspicaciaB.disabled = false;
        }
    } else if (numeroTurnoPar == 24) {
        descripcion = `____________________`
        mostrarDescripcionTurno(descripcion)
        descripcion = `Turno de Buscador ` + numeroTurnoBuscador;
        mostrarDescripcionTurno(descripcion);
        descripcion = ` - - - - - - - - - - - - - - - - `
        mostrarDescripcionTurno(descripcion)
        botonComportamientoSnitch.disabled = false;
    } else if (numeroTurnoPar == 30) {
        descripcion = `____________________`
        mostrarDescripcionTurno(descripcion)
        descripcion = `Turno de Buscador ` + numeroTurnoBuscador;
        mostrarDescripcionTurno(descripcion);
        descripcion = ` - - - - - - - - - - - - - - - - `
        mostrarDescripcionTurno(descripcion)
        botonComportamientoSnitch.disabled = false;
    } else if (numeroTurnoPar == 36) {
        descripcion = `____________________`
        mostrarDescripcionTurno(descripcion)
        descripcion = `Turno de Buscador ` + numeroTurnoBuscador;
        mostrarDescripcionTurno(descripcion);
        descripcion = ` - - - - - - - - - - - - - - - - `
        mostrarDescripcionTurno(descripcion)
        botonComportamientoSnitch.disabled = false;
    } else {
        descripcion = `____________________`
        mostrarDescripcionTurno(descripcion)
        descripcion = `Turno de Buscador ` + numeroTurnoBuscador;
        mostrarDescripcionTurno(descripcion);
        descripcion = ` - - - - - - - - - - - - - - - - `
        mostrarDescripcionTurno(descripcion)
    }
}

function lanzarUbicacionSnitch() {
    botonUbicacionSnitch.disabled = true;
    const min = 1;
    const max = 3;
    valorUbicacionSnitch = Math.floor(Math.random() * (max - min + 1)) + min;
    if (valorUbicacionSnitch == 1) {
        descripcion = `El público piensa que la snitch está más cerca de ${buscadorA} pero no ha sido avistada.`;
        mostrarDescripcionTurno(descripcion);
        ubicacionA = true;
    } else if (valorUbicacionSnitch == 3) {
        descripcion = `El público piensa que la snitch está más cerca de ${buscadorB} pero no ha sido avistada.`;
        mostrarDescripcionTurno(descripcion);
        ubicacionB = true;
    } else {
        descripcion = `El público no tiene idea, y los buscadores tampoco, de dónde se encuentra la snitch.`;
        mostrarDescripcionTurno(descripcion);
    }
    botonAvistamientoBuscadorA.disabled = false;
    if (usosAmagoDeWronskiA < amagoDeWronskiA) {
        botonAmagoDeWronskiA.disabled = false;
    }
    if (usosPerspicaciaA < perspicaciaA) {
        botonPerspicaciaA.disabled = false;
    }
    botonAvistamientoBuscadorB.disabled = false;
    if (usosAmagoDeWronskiB < amagoDeWronskiB) {
        botonAmagoDeWronskiB.disabled = false;
    }
    if (usosPerspicaciaB < perspicaciaB) {
        botonPerspicaciaB.disabled = false;
    }
}

function lanzarComportamientoSnitch() {
    botonComportamientoSnitch.disabled = true;
    botonVelocidadBuscadorA.disabled = false;
    if (usosUltimoAlientoA < ultimoAlientoA) {
        botonUltimoAlientoA.disabled = false;
    }
    if (usosCaidaEnPicadaA < caidaEnPicadaA) {
        botonCaidaEnPicadaA.disabled = false;
    }
    botonVelocidadBuscadorB.disabled = false;
    if (usosUltimoAlientoB < ultimoAlientoB) {
        botonUltimoAlientoB.disabled = false;
    }
    if (usosCaidaEnPicadaB < caidaEnPicadaB) {
        botonCaidaEnPicadaB.disabled = false;
    }
    const min = 1;
    const max = 3;
    valorComportamientoSnitch = Math.floor(Math.random() * (max - min + 1)) + min;
    if (valorComportamientoSnitch == 1) {
        descripcion = `La snitch dorada tiene una trayectoria simple para el vuelo de los buscadores.`;
        mostrarDescripcionTurno(descripcion);
    } else if (valorComportamientoSnitch == 2) {
        descripcion = `La snitch tiene una trayectoria compleja para el vuelo de los buscadores.`;
        mostrarDescripcionTurno(descripcion);
        if (giroA > giroB) {
            efectoGiro = giroA - giroB;
        } else if (giroA < giroB) {
            efectoGiro = giroB - giroA;
        } else {
            efectoGiro = 0;
        }
    } else {
        descripcion = `La snitch tiene una trayectoria excesivamente compleja para el vuelo de los buscadores.`;
        mostrarDescripcionTurno(descripcion);
        if (giroA > giroB) {
            efectoGiro = (giroA - giroB) * 2;
        } else if (giroA < giroB) {
            efectoGiro = (giroB - giroA) * 2;
        } else {
            efectoGiro = 0;
        }
    }
}

function lanzarAgilidadCazador(cazador, agilidad, valorAgilidadCazador, penalParaEquipo) {
    const min = 1;
    const max = agilidad;
    valorAgilidadCazador = Math.floor(Math.random() * (max - min + 1)) + min;
    if (valorAgilidadCazador == 1 && penalParaEquipo == false) {
        penalParaEquipo = true;
        descripcion = `${cazador} protesta de forma desmedida y el árbitro anota la infracción.`;
        mostrarDescripcionTurno(descripcion);
    } else if (valorAgilidadCazador == agilidad) {
        valorAgilidadCazador = valorAgilidadCazador + 3;
    }
    descripcion = `${cazador} obtuvo ${valorAgilidadCazador} en agilidad.`;
    mostrarDescripcionTurno(descripcion);
    if (cazador == cazador1A) {
        agilidadesA[0] = valorAgilidadCazador;
        botonAgilidadCazador1A.disabled = true;
        botonFintaDePorskov1A.disabled = true;
        botonManoCambiada1A.disabled = true;
        penalParaEquipoB = penalParaEquipo
    } else if (cazador == cazador2A) {
        agilidadesA[1] = valorAgilidadCazador;
        botonAgilidadCazador2A.disabled = true;
        botonFintaDePorskov2A.disabled = true;
        botonManoCambiada2A.disabled = true;
        penalParaEquipoB = penalParaEquipo
    } else if (cazador == cazador3A) {
        agilidadesA[2] = valorAgilidadCazador;
        botonAgilidadCazador3A.disabled = true;
        botonFintaDePorskov3A.disabled = true;
        botonManoCambiada3A.disabled = true;
        penalParaEquipoB = penalParaEquipo
    } else if (cazador == cazador1B) {
        agilidadesB[0] = valorAgilidadCazador;
        botonAgilidadCazador1B.disabled = true;
        botonFintaDePorskov1B.disabled = true;
        botonManoCambiada1B.disabled = true;
        penalParaEquipoA = penalParaEquipo
    } else if (cazador == cazador2B) {
        agilidadesB[1] = valorAgilidadCazador;
        botonAgilidadCazador2B.disabled = true;
        botonFintaDePorskov2B.disabled = true;
        botonManoCambiada2B.disabled = true;
        penalParaEquipoA = penalParaEquipo
    } else if (cazador == cazador3B) {
        agilidadesB[2] = valorAgilidadCazador;
        botonAgilidadCazador3B.disabled = true;
        botonFintaDePorskov3B.disabled = true;
        botonManoCambiada3B.disabled = true;
        penalParaEquipoA = penalParaEquipo
    }
}

function lanzarDefensaCazador(cazador, defensa, valorDefensaCazador, penalParaEquipo) {
    const min = 1;
    const max = defensa;
    valorDefensaCazador = Math.floor(Math.random() * (max - min + 1)) + min;
    if (valorDefensaCazador == 1 && penalParaEquipo == false) {
        penalParaEquipo = true;
        descripcion = `${cazador} protesta de forma desmedida y el árbitro anota la infracción.`;
        mostrarDescripcionTurno(descripcion);
    } else if (valorDefensaCazador == defensa) {
        valorDefensaCazador = valorDefensaCazador + 3;
    }
    descripcion = `${cazador} obtuvo ${valorDefensaCazador} en defensa.`;
    mostrarDescripcionTurno(descripcion);
    if (cazador == cazador1A) {
        defensasA[0] = valorDefensaCazador;
        botonDefensaCazador1A.disabled = true;
        botonRoboSpeelman1A.disabled = true;
        botonTransylvanianTackle1A.disabled = true;
        penalParaEquipoB = penalParaEquipo
    } else if (cazador == cazador2A) {
        defensasA[1] = valorDefensaCazador;
        botonDefensaCazador2A.disabled = true;
        botonRoboSpeelman2A.disabled = true;
        botonTransylvanianTackle2A.disabled = true;
        penalParaEquipoB = penalParaEquipo
    } else if (cazador == cazador3A) {
        defensasA[2] = valorDefensaCazador;
        botonDefensaCazador3A.disabled = true;
        botonRoboSpeelman3A.disabled = true;
        botonTransylvanianTackle3A.disabled = true;
        penalParaEquipoB = penalParaEquipo
    } else if (cazador == cazador1B) {
        defensasB[0] = valorDefensaCazador;
        botonDefensaCazador1B.disabled = true;
        botonRoboSpeelman1B.disabled = true;
        botonTransylvanianTackle1B.disabled = true;
        penalParaEquipoA = penalParaEquipo
    } else if (cazador == cazador2B) {
        defensasB[1] = valorDefensaCazador;
        botonDefensaCazador2B.disabled = true;
        botonRoboSpeelman2B.disabled = true;
        botonTransylvanianTackle2B.disabled = true;
        penalParaEquipoA = penalParaEquipo
    } else if (cazador == cazador3B) {
        defensasB[2] = valorDefensaCazador;
        botonDefensaCazador3B.disabled = true;
        botonRoboSpeelman3B.disabled = true;
        botonTransylvanianTackle3B.disabled = true;
        penalParaEquipoA = penalParaEquipo
    }
}

function lanzarReaccionCazador(cazador, reaccion, valorReaccionCazador, penalParaEquipo) {
    const min = 1;
    const max = reaccion;
    valorReaccionCazador = Math.floor(Math.random() * (max - min + 1)) + min;
    if (valorReaccionCazador == 1 && penalParaEquipo == false) {
        penalParaEquipo = true;
        descripcion = `${cazador} protesta de forma desmedida y el árbitro anota la infracción.`;
        mostrarDescripcionTurno(descripcion);
    } else if (valorReaccionCazador == reaccion) {
        valorReaccionCazador = valorReaccionCazador + 3;
    }
    descripcion = `${cazador} obtuvo ${valorReaccionCazador} en reacción.`;
    mostrarDescripcionTurno(descripcion)
    if (cazador == cazador1A) {
        reaccionesA[0] = valorReaccionCazador;
        botonReaccionCazador1A.disabled = true;
        botonIntuicionFugaz1A.disabled = true;
        penalParaEquipoB = penalParaEquipo
    } else if (cazador == cazador2A) {
        reaccionesA[1] = valorReaccionCazador;
        botonReaccionCazador2A.disabled = true;
        botonIntuicionFugaz2A.disabled = true;
        penalParaEquipoB = penalParaEquipo
    } else if (cazador == cazador3A) {
        reaccionesA[2] = valorReaccionCazador;
        botonReaccionCazador3A.disabled = true;
        botonIntuicionFugaz3A.disabled = true;
        penalParaEquipoB = penalParaEquipo
    } else if (cazador == cazador1B) {
        reaccionesB[0] = valorReaccionCazador;
        botonReaccionCazador1B.disabled = true;
        botonIntuicionFugaz1B.disabled = true;
        penalParaEquipoA = penalParaEquipo
    } else if (cazador == cazador2B) {
        reaccionesB[1] = valorReaccionCazador;
        botonReaccionCazador2B.disabled = true;
        botonIntuicionFugaz2B.disabled = true;
        penalParaEquipoA = penalParaEquipo
    } else if (cazador == cazador3B) {
        reaccionesB[2] = valorReaccionCazador;
        botonReaccionCazador3B.disabled = true;
        botonIntuicionFugaz3B.disabled = true;
        penalParaEquipoA = penalParaEquipo
    }
}

function lanzarFintaDePorskov(cazador, fintaDePorskov, usosFintaDePorskov, agilidad, valorAgilidadCazador) {
    usosFintaDePorskov ++;
    let usosDisponibles
    usosDisponibles = fintaDePorskov - usosFintaDePorskov
    const min = 1;
    const max = agilidad;
    valorAgilidadCazador = Math.floor(Math.random() * (max - min + 1)) + min;
    if (valorAgilidadCazador == agilidad) {
        valorAgilidadCazador = valorAgilidadCazador + 3;
    }
    valorAgilidadCazador = valorAgilidadCazador + 7
    descripcion = `${cazador} obtuvo ${valorAgilidadCazador} con su Finta de Porskov. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion)
    if (cazador == cazador1A) {
        usosFintaDePorskov1A ++;
        agilidadesA[0] = valorAgilidadCazador;
        botonAgilidadCazador1A.disabled = true;
        botonFintaDePorskov1A.disabled = true;
        botonManoCambiada1A.disabled = true;
    } else if (cazador == cazador2A) {
        usosFintaDePorskov2A ++;
        agilidadesA[1] = valorAgilidadCazador;
        botonAgilidadCazador2A.disabled = true;
        botonFintaDePorskov2A.disabled = true;
        botonManoCambiada2A.disabled = true;
    } else if (cazador == cazador3A) {
        usosFintaDePorskov3A ++;
        agilidadesA[2] = valorAgilidadCazador;
        botonAgilidadCazador3A.disabled = true;
        botonFintaDePorskov3A.disabled = true;
        botonManoCambiada3A.disabled = true;
    } else if (cazador == cazador1B) {
        usosFintaDePorskov1B ++;
        agilidadesB[0] = valorAgilidadCazador;
        botonAgilidadCazador1B.disabled = true;
        botonFintaDePorskov1B.disabled = true;
        botonManoCambiada1B.disabled = true;
    } else if (cazador == cazador2B) {
        usosFintaDePorskov2B ++;
        agilidadesB[1] = valorAgilidadCazador;
        botonAgilidadCazador2B.disabled = true;
        botonFintaDePorskov2B.disabled = true;
        botonManoCambiada2B.disabled = true;
    } else if (cazador == cazador3B) {
        usosFintaDePorskov3B ++;
        agilidadesB[0] = valorAgilidadCazador;
        botonAgilidadCazador3B.disabled = true;
        botonFintaDePorskov3B.disabled = true;
        botonManoCambiada3B.disabled = true;
    }
}

function lanzarManoCambiada(cazador, manoCambiada, usosManoCambiada, agilidad, valorAgilidadCazador) {
    usosManoCambiada ++;
    let usosDisponibles
    usosDisponibles = manoCambiada - usosManoCambiada
    const min = 1;
    const max = agilidad;
    valorAgilidadCazador = Math.floor(Math.random() * (max - min + 1)) + min;
    if (valorAgilidadCazador == agilidad) {
        valorAgilidadCazador = valorAgilidadCazador + 3;
    }
    valorAgilidadCazador = valorAgilidadCazador + 7
    descripcion = `${cazador} obtuvo ${valorAgilidadCazador} con su Cambio de Mano. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion)
    if (cazador == cazador1A) {
        usosManoCambiada1A ++;
        agilidadesA[0] = valorAgilidadCazador;
        botonAgilidadCazador1A.disabled = true;
        botonFintaDePorskov1A.disabled = true;
        botonManoCambiada1A.disabled = true;
    } else if (cazador == cazador2A) {
        usosManoCambiada2A ++;
        agilidadesA[1] = valorAgilidadCazador;
        botonAgilidadCazador2A.disabled = true;
        botonFintaDePorskov2A.disabled = true;
        botonManoCambiada2A.disabled = true;
    } else if (cazador == cazador3A) {
        usosManoCambiada3A ++;
        agilidadesA[2] = valorAgilidadCazador;
        botonAgilidadCazador3A.disabled = true;
        botonFintaDePorskov3A.disabled = true;
        botonManoCambiada3A.disabled = true;
    } else if (cazador == cazador1B) {
        usosManoCambiada1B ++;
        agilidadesB[0] = valorAgilidadCazador;
        botonAgilidadCazador1B.disabled = true;
        botonFintaDePorskov1B.disabled = true;
        botonManoCambiada1B.disabled = true;
    } else if (cazador == cazador2B) {
        usosManoCambiada2B ++;
        agilidadesB[1] = valorAgilidadCazador;
        botonAgilidadCazador2B.disabled = true;
        botonFintaDePorskov2B.disabled = true;
        botonManoCambiada2B.disabled = true;
    } else if (cazador == cazador3B) {
        usosManoCambiada3B ++;
        agilidadesB[0] = valorAgilidadCazador;
        botonAgilidadCazador3B.disabled = true;
        botonFintaDePorskov3B.disabled = true;
        botonManoCambiada3B.disabled = true;
    }
}

function lanzarRoboSpeelman(cazador, roboSpeelman, usosRoboSpeelman, defensa, valorDefensaCazador) {
    usosRoboSpeelman ++;
    let usosDisponibles
    usosDisponibles = roboSpeelman - usosRoboSpeelman
    const min = 1;
    const max = defensa;
    valorDefensaCazador = Math.floor(Math.random() * (max - min + 1)) + min;
    if (valorDefensaCazador == defensa) {
        valorDefensaCazador = valorDefensaCazador + 3;
    }
    valorDefensaCazador = valorDefensaCazador + 7
    descripcion = `${cazador} obtuvo ${valorDefensaCazador} con su Robo Speelman. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion)
    if (cazador == cazador1A) {
        usosRoboSpeelman1A ++;
        defensasA[0] = valorDefensaCazador;
        botonDefensaCazador1A.disabled = true;
        botonRoboSpeelman1A.disabled = true;
        botonTransylvanianTackle1A.disabled = true;
    } else if (cazador == cazador2A) {
        usosRoboSpeelman2A ++;
        defensasA[1] = valorDefensaCazador;
        botonDefensaCazador2A.disabled = true;
        botonRoboSpeelman2A.disabled = true;
        botonTransylvanianTackle2A.disabled = true;
    } else if (cazador == cazador3A) {
        usosRoboSpeelman3A ++;
        defensasA[2] = valorDefensaCazador;
        botonDefensaCazador3A.disabled = true;
        botonRoboSpeelman3A.disabled = true;
        botonTransylvanianTackle3A.disabled = true;
    } else if (cazador == cazador1B) {
        usosRoboSpeelman1B ++;
        defensasB[0] = valorDefensaCazador;
        botonDefensaCazador1B.disabled = true;
        botonRoboSpeelman1B.disabled = true;
        botonTransylvanianTackle1B.disabled = true;
    } else if (cazador == cazador2B) {
        usosRoboSpeelman2B ++;
        defensasB[1] = valorDefensaCazador;
        botonDefensaCazador2B.disabled = true;
        botonRoboSpeelman2B.disabled = true;
        botonTransylvanianTackle2B.disabled = true;
    } else if (cazador == cazador3B) {
        usosRoboSpeelman3B ++;
        defensasB[0] = valorDefensaCazador;
        botonDefensaCazador3B.disabled = true;
        botonRoboSpeelman3B.disabled = true;
        botonTransylvanianTackle3B.disabled = true;
    }
}

function lanzarTransylvanianTackle(cazador, transylvanianTackle, usosTransylvanianTackle, defensa, valorDefensaCazador) {
    usosTransylvanianTackle ++;
    let usosDisponibles
    usosDisponibles = transylvanianTackle - usosTransylvanianTackle
    const min = 1;
    const max = defensa;
    valorDefensaCazador = Math.floor(Math.random() * (max - min + 1)) + min;
    if (valorDefensaCazador == defensa) {
        valorDefensaCazador = valorDefensaCazador + 3;
    }
    valorDefensaCazador = valorDefensaCazador + 5
    descripcion = `${cazador} obtuvo ${valorDefensaCazador} con su Transylvanian Tackle. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion)
    if (cazador == cazador1A) {
        usosTransylvanianTackle1A ++;
        defensasA[0] = valorDefensaCazador;
        botonDefensaCazador1A.disabled = true;
        botonRoboSpeelman1A.disabled = true;
        botonTransylvanianTackle1A.disabled = true;
    } else if (cazador == cazador2A) {
        usosTransylvanianTackle2A ++;
        defensasA[1] = valorDefensaCazador;
        botonDefensaCazador2A.disabled = true;
        botonRoboSpeelman2A.disabled = true;
        botonTransylvanianTackle2A.disabled = true;
    } else if (cazador == cazador3A) {
        usosTransylvanianTackle3A ++;
        defensasA[2] = valorDefensaCazador;
        botonDefensaCazador3A.disabled = true;
        botonRoboSpeelman3A.disabled = true;
        botonTransylvanianTackle3A.disabled = true;
    } else if (cazador == cazador1B) {
        usosTransylvanianTackle1B ++;
        defensasB[0] = valorDefensaCazador;
        botonDefensaCazador1B.disabled = true;
        botonRoboSpeelman1B.disabled = true;
        botonTransylvanianTackle1B.disabled = true;
    } else if (cazador == cazador2B) {
        usosTransylvanianTackle2B ++;
        defensasB[1] = valorDefensaCazador;
        botonDefensaCazador2B.disabled = true;
        botonRoboSpeelman2B.disabled = true;
        botonTransylvanianTackle2B.disabled = true;
    } else if (cazador == cazador3B) {
        usosTransylvanianTackle3B ++;
        defensasB[0] = valorDefensaCazador;
        botonDefensaCazador3B.disabled = true;
        botonRoboSpeelman3B.disabled = true;
        botonTransylvanianTackle3B.disabled = true;
    }
}

function lanzarIntuicionFugaz(cazador, intuicionFugaz, usosIntuicionFugaz, reaccion, valorReaccionCazador) {
    usosIntuicionFugaz ++;
    let usosDisponibles
    usosDisponibles = intuicionFugaz - usosIntuicionFugaz
    const min = 1;
    const max = reaccion;
    valorReaccionCazador = Math.floor(Math.random() * (max - min + 1)) + min;
    if (valorReaccionCazador == reaccion) {
        valorReaccionCazador = valorReaccionCazador + 3;
    }
    valorReaccionCazador = valorReaccionCazador + 5
    descripcion = `${cazador} obtuvo ${valorReaccionCazador} con su Intuición Fugaz. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion)
    if (cazador == cazador1A) {
        usosIntuicionFugaz1A ++;
        reaccionesA[0] = valorReaccionCazador;
        botonReaccionCazador1A.disabled = true;
        botonIntuicionFugaz1A.disabled = true;
    } else if (cazador == cazador2A) {
        usosIntuicionFugaz2A ++;
        reaccionesA[1] = valorReaccionCazador;
        botonReaccionCazador2A.disabled = true;
        botonIntuicionFugaz2A.disabled = true;
    } else if (cazador == cazador3A) {
        usosIntuicionFugaz3A ++;
        reaccionesA[2] = valorReaccionCazador;
        botonReaccionCazador3A.disabled = true;
        botonIntuicionFugaz3A.disabled = true;
    } else if (cazador == cazador1B) {
        usosIntuicionFugaz1B ++;
        reaccionesB[0] = valorReaccionCazador;
        botonReaccionCazador1B.disabled = true;
        botonIntuicionFugaz1B.disabled = true;
    } else if (cazador == cazador2B) {
        usosIntuicionFugaz2B ++;
        reaccionesB[1] = valorReaccionCazador;
        botonReaccionCazador2B.disabled = true;
        botonIntuicionFugaz2B.disabled = true;
    } else if (cazador == cazador3B) {
        usosIntuicionFugaz3B ++;
        reaccionesB[0] = valorReaccionCazador;
        botonReaccionCazador3B.disabled = true;
        botonIntuicionFugaz3B.disabled = true;
    }
}

function lanzarReversePass(cazador, reversePass, usosReversePass) {
    reversePassActivo = true;
    usosReversePass ++;
    let usosDisponibles
    usosDisponibles = reversePass - usosReversePass
    descripcion = `${cazador} realiza un Reverse Pass a uno de sus compañeros. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion)
    if (cazador == cazador1A) {
        usosReversePass1A ++;
        paseRecibidoCazador1A = false;
        botonReversePass1A.disabled = true;
        botonDisparoCazador1A.disabled = true;
        botonReceptorPaseCazador2A.disabled = false;
        botonReceptorPaseCazador3A.disabled = false;
    } else if (cazador == cazador2A) {
        usosReversePass2A ++;
        paseRecibidoCazador2A = false;
        botonReversePass2A.disabled = true;
        botonDisparoCazador2A.disabled = true;
        botonReceptorPaseCazador1A.disabled = false;
        botonReceptorPaseCazador3A.disabled = false;
    } else if (cazador == cazador3A) {
        usosReversePass3A ++;
        paseRecibidoCazador3A = false;
        botonReversePass3A.disabled = true;
        botonDisparoCazador3A.disabled = true;
        botonReceptorPaseCazador1A.disabled = false;
        botonReceptorPaseCazador2A.disabled = false;
    } else if (cazador == cazador1B) {
        usosReversePass1B ++;
        paseRecibidoCazador1B = false;
        botonReversePass1B.disabled = true;
        botonDisparoCazador1B.disabled = true;
        botonReceptorPaseCazador2B.disabled = false;
        botonReceptorPaseCazador3B.disabled = false;
    } else if (cazador == cazador2B) {
        usosReversePass2B ++;
        paseRecibidoCazador2B = false;
        botonReversePass2B.disabled = true;
        botonDisparoCazador2B.disabled = true;
        botonReceptorPaseCazador1B.disabled = false;
        botonReceptorPaseCazador3B.disabled = false;
    } else if (cazador == cazador3B) {
        usosReversePass3B ++;
        paseRecibidoCazador3B = false;
        botonReversePass3B.disabled = true;
        botonDisparoCazador3B.disabled = true;
        botonReceptorPaseCazador1B.disabled = false;
        botonReceptorPaseCazador2B.disabled = false;
    }
}

function agilidadMaximaEquipoA() {
    if (agilidadesA[0] >= agilidadesA[1] && agilidadesA[0] >= agilidadesA[2]) {
        maxAgilidadA = agilidadesA[0];
    } else if (agilidadesA[1] > agilidadesA[0] && agilidadesA[1] >= agilidadesA[2]) {
        maxAgilidadA = agilidadesA[1];
    } else {
        maxAgilidadA = agilidadesA[2];
    }
}

function defensaMaximaEquipoA() {
    if (defensasA[0] >= defensasA[1] && defensasA[0] >= defensasA[2]) {
        maxDefensaA = defensasA[0];
    } else if (defensasA[1] > defensasA[0] && defensasA[1] >= defensasA[2]) {
        maxDefensaA = defensasA[1];
    } else {
        maxDefensaA = defensasA[2];
    }
}

function reaccionMaximaEquipoA () {
    if (reaccionesA[0] >= reaccionesA[1] && reaccionesA[0] >= reaccionesA[2]) {
        maxReaccionA = reaccionesA[0];
    } else if (reaccionesA[1] > reaccionesA[0] && reaccionesA[1] >= reaccionesA[2]) {
        maxReaccionA = reaccionesA[1];
    } else {
        maxReaccionA = reaccionesA[2];
    }
}

function agilidadMaximaEquipoB() {
    if (agilidadesB[0] >= agilidadesB[1] && agilidadesB[0] >= agilidadesB[2]) {
        maxAgilidadB = agilidadesB[0];
    } else if (agilidadesB[1] > agilidadesB[0] && agilidadesB[1] >= agilidadesB[2]) {
        maxAgilidadB = agilidadesB[1];
    } else {
        maxAgilidadB = agilidadesB[2];
    }
}

function defensaMaximaEquipoB() {
    if (defensasB[0] >= defensasB[1] && defensasB[0] >= defensasB[2]) {
        maxDefensaB = defensasB[0];
    } else if (defensasB[1] > defensasB[0] && defensasB[1] >= defensasB[2]) {
        maxDefensaB = defensasB[1];
    } else {
        maxDefensaB = defensasB[2];
    }
}

function reaccionMaximaEquipoB() {
    if (reaccionesB[0] >= reaccionesB[1] && reaccionesB[0] >= reaccionesB[2]) {
        maxReaccionB = reaccionesB[0];
    } else if (reaccionesB[1] > reaccionesB[0] && reaccionesB[1] >= reaccionesB[2]) {
        maxReaccionB = reaccionesB[1];
    } else {
        maxReaccionB = reaccionesB[2];
    }
}

function lanzarGolpeGolpeadorA(golpeador, energiaConsumida, fuerza, precision, valorGolpeGolpeador) {
    habilidadesInactivasGolpes1A()
    habilidadesInactivasGolpes2A()
    energiaConsumida ++;
    if (golpeDeFrancotiradorActivo == true) {
        golpeDeFrancotiradorActivo = false;
        const min = 5;
        const max = fuerza;
        valorGolpeGolpeador = Math.floor(Math.random() * (max - min + 1)) + min;
    } else if (bludgerBackbeatActivo == true) {
        bludgerBackbeatActivo = false;
        const min = 1;
        const max = fuerza + 3;
        valorGolpeGolpeador = Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        const min = 1;
        const max = fuerza;
        valorGolpeGolpeador = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    if (golpeBombeadoActivo == true) {
        golpeBombeadoActivo = false;
        if (valorGolpeGolpeador > 27 - precision) {
            golpeCriticoA = true;
            if (turnoImpar == true) {
                descripcion = `${golpeador} ha realizado un golpe crítico (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
                mostrarDescripcionTurno(descripcion);
                if (energiaConsumida1B < energia1B && usosAngelGuardian1B < angelGuardian1B) {
                    botonAngelGuardian1B.disabled = false;
                }
                if (energiaConsumida2B < energia2B && usosAngelGuardian2B < angelGuardian2B) {
                    botonAngelGuardian2B.disabled = false;
                }
                if ((maxAgilidadB == agilidadesB[0] && maxAgilidadB !== 0) || (maxDefensaB == defensasB[0] && maxDefensaB !== 0) || (maxReaccionB == reaccionesB[0] && maxReaccionB !==0)) {
                    botonEvasionCazador1B.disabled = false;
                } else if ((maxAgilidadB == agilidadesB[1] && maxAgilidadB !== 0) || (maxDefensaB == defensasB[1] && maxDefensaB !== 0) || (maxReaccionB == reaccionesB[1] && maxReaccionB !==0)) {
                    botonEvasionCazador2B.disabled = false;
                } else {
                    botonEvasionCazador3B.disabled = false;
                }
            } else if (turnoPar == true) {
                // TURNO PAR
                descripcion = `${golpeador} ha realizado un golpe crítico (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
                mostrarDescripcionTurno(descripcion);
                if (ataqueEquipoA == true) {
                    botonEvasionGuardianB.disabled = false;
                } else if (ataqueEquipoB == true) {
                    if (energiaConsumida1B < energia1B && usosAngelGuardian1B < angelGuardian1B) {
                        botonAngelGuardian1B.disabled = false;
                    }
                    if (energiaConsumida2B < energia2B && usosAngelGuardian2B < angelGuardian2B) {
                        botonAngelGuardian2B.disabled = false;
                    }
                    if (paseRecibidoCazador1B == true) {
                        botonEvasionCazador1B.disabled = false;
                    } else if (paseRecibidoCazador2B == true) {
                        botonEvasionCazador2B.disabled = false;
                    } else {
                        botonEvasionCazador3B.disabled = false;
                    }
                } else {
                    descripcion = `Situación no pensada 1.`;
                    mostrarDescripcionTurno(descripcion);
                }
            } else {
                // TURNO BUSCADOR
                descripcion = `${golpeador} ha realizado un golpe crítico (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
                mostrarDescripcionTurno(descripcion);
                botonEvasionBuscadorB.disabled = false;
            }
        } else {
            descripcion = `${golpeador} ha fallado su bludger (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                if ((maxAgilidadB == agilidadesB[0] && maxAgilidadB !== 0) || (maxDefensaB == defensasB[0] && maxDefensaB !== 0) || (maxReaccionB == reaccionesB[0] && maxReaccionB !==0)) {
                    if (disparosRealizados2B < 5) {
                        botonReceptorPaseCazador2B.disabled = false;
                    }
                    if (disparosRealizados3B < 5) {
                        botonReceptorPaseCazador3B.disabled = false;
                    }
                    if (usosTiroLargo1B < tiroLargo1B) {
                        botonTiroLargo1B.disabled = false;
                    } else if (usosDisparoConAmague1B < disparoConAmague1B) {
                        botonDisparoConAmague1B.disabled = false;
                } else if (disparosRealizados2B == 5 && disparosRealizados3B == 5) {
                    descripcion = `${cazador1B} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoA = true;
                    botonIniciarTurnoImpar.disabled = false;
                    }
                } else if ((maxAgilidadB == agilidadesB[1] && maxAgilidadB !== 0) || (maxDefensaB == defensasB[1] && maxDefensaB !== 0) || (maxReaccionB == reaccionesB[1] && maxReaccionB !==0)) {
                    if (disparosRealizados1B < 5) {
                        botonReceptorPaseCazador1B.disabled = false;
                    }
                    if (disparosRealizados3B < 5) {
                        botonReceptorPaseCazador3B.disabled = false;
                    }
                    if (usosTiroLargo2B < tiroLargo2B) {
                        botonTiroLargo2B.disabled = false;
                    } else if (usosDisparoConAmague2B < disparoConAmague2B) {
                        botonDisparoConAmague2B.disabled = false;
                    } else if (disparosRealizados1B == 5 && disparosRealizados3B == 5) {
                        descripcion = `${cazador2B} se demora con la quaffle en sus manos y el rival se la quita.`;
                        mostrarDescripcionTurno(descripcion);
                        numeroTurnoPar += 2;
                        posesionEquipoA = true;
                        botonIniciarTurnoImpar.disabled = false;
                    }
                } else {
                    if (disparosRealizados1B < 5) {
                        botonReceptorPaseCazador1B.disabled = false;
                    }
                    if (disparosRealizados2B < 5) {
                        botonReceptorPaseCazador2B.disabled = false;
                    }
                    if (usosTiroLargo3B < tiroLargo3B) {
                        botonTiroLargo3B.disabled = false;
                    } else if (usosDisparoConAmague3B < disparoConAmague3B) {
                        botonDisparoConAmague3B.disabled = false;
                    } else if (disparosRealizados1B == 5 && disparosRealizados2B == 5) {
                        descripcion = `${cazador3B} se demora con la quaffle en sus manos y el rival se la quita.`;
                        mostrarDescripcionTurno(descripcion);
                        numeroTurnoPar += 2;
                        posesionEquipoA = true;
                        botonIniciarTurnoImpar.disabled = false;
                    }
                }
            } else if (turnoPar == true) {
                // TURNO PAR
                if (ataqueEquipoA == true) {
                    disparoIncomodoCazadorGolpeadoA ()
                } else if (ataqueEquipoB == true) {
                    participacionGolpeGolpeadoresB()
                } else {
                    descripcion = `Situación no pensada 3.`;
                    mostrarDescripcionTurno(descripcion);
                }
            } else {
                // TURNO BUSCADOR
                descripcion = `${golpeador} ha fallado su bludger (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
                mostrarDescripcionTurno(descripcion);
                if (numeroTurnoBuscador == 1 || numeroTurnoBuscador == 2) {
                    botonIniciarTurnoImpar.disabled = false;
                } else if (numeroTurnoBuscador == 3) {
                    botonAvistamiento.disabled = false;
                } else {
                    botonAvance.disabled = false;
                }
            }
        }
    } else if (golpeCanonActivo == true) {
        golpeCanonActivo = false;
        valorGolpeGolpeador = valorGolpeGolpeador + 3;
        if (valorGolpeGolpeador > 30 - precision) {
            golpeCriticoA = true;
            if (turnoImpar == true) {
                descripcion = `${golpeador} ha realizado un golpe crítico (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
                mostrarDescripcionTurno(descripcion);
                if (energiaConsumida1B < energia1B && usosAngelGuardian1B < angelGuardian1B) {
                    botonAngelGuardian1B.disabled = false;
                }
                if (energiaConsumida2B < energia2B && usosAngelGuardian2B < angelGuardian2B) {
                    botonAngelGuardian2B.disabled = false;
                }
                if ((maxAgilidadB == agilidadesB[0] && maxAgilidadB !== 0) || (maxDefensaB == defensasB[0] && maxDefensaB !== 0) || (maxReaccionB == reaccionesB[0] && maxReaccionB !==0)) {
                    botonEvasionCazador1B.disabled = false;
                } else if ((maxAgilidadB == agilidadesB[1] && maxAgilidadB !== 0) || (maxDefensaB == defensasB[1] && maxDefensaB !== 0) || (maxReaccionB == reaccionesB[1] && maxReaccionB !==0)) {
                    botonEvasionCazador2B.disabled = false;
                } else {
                    botonEvasionCazador3B.disabled = false;
                }
            } else if (turnoPar == true) {
                // TURNO PAR
                descripcion = `${golpeador} ha realizado un golpe crítico (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
                mostrarDescripcionTurno(descripcion);
                if (ataqueEquipoA == true) {
                    botonEvasionGuardianB.disabled = false;
                } else if (ataqueEquipoB == true) {
                    if (energiaConsumida1B < energia1B && usosAngelGuardian1B < angelGuardian1B) {
                        botonAngelGuardian1B.disabled = false;
                    }
                    if (energiaConsumida2B < energia2B && usosAngelGuardian2B < angelGuardian2B) {
                        botonAngelGuardian2B.disabled = false;
                    }
                    if (paseRecibidoCazador1B == true) {
                        botonEvasionCazador1B.disabled = false;
                    } else if (paseRecibidoCazador2B == true) {
                        botonEvasionCazador2B.disabled = false;
                    } else {
                        botonEvasionCazador3B.disabled = false;
                    }
                } else {
                    descripcion = `Situación no pensada 1.`;
                    mostrarDescripcionTurno(descripcion);
                }
            } else {
                // TURNO BUSCADOR
                descripcion = `${golpeador} ha realizado un golpe crítico (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
                mostrarDescripcionTurno(descripcion);
                botonEvasionBuscadorB.disabled = false;
            }
        } else {
            descripcion = `${golpeador} ha fallado su bludger (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                if ((maxAgilidadB == agilidadesB[0] && maxAgilidadB !== 0) || (maxDefensaB == defensasB[0] && maxDefensaB !== 0) || (maxReaccionB == reaccionesB[0] && maxReaccionB !==0)) {
                    if (disparosRealizados2B < 5) {
                        botonReceptorPaseCazador2B.disabled = false;
                    }
                    if (disparosRealizados3B < 5) {
                        botonReceptorPaseCazador3B.disabled = false;
                    }
                    if (usosTiroLargo1B < tiroLargo1B) {
                        botonTiroLargo1B.disabled = false;
                    } else if (usosDisparoConAmague1B < disparoConAmague1B) {
                        botonDisparoConAmague1B.disabled = false;
                    } else if (disparosRealizados2B == 5 && disparosRealizados3B == 5) {
                        descripcion = `${cazador1B} se demora con la quaffle en sus manos y el rival se la quita.`;
                        mostrarDescripcionTurno(descripcion);
                        numeroTurnoPar += 2;
                        posesionEquipoA = true;
                        botonIniciarTurnoImpar.disabled = false;
                    }
                } else if ((maxAgilidadB == agilidadesB[1] && maxAgilidadB !== 0) || (maxDefensaB == defensasB[1] && maxDefensaB !== 0) || (maxReaccionB == reaccionesB[1] && maxReaccionB !==0)) {
                    if (disparosRealizados1B < 5) {
                        botonReceptorPaseCazador1B.disabled = false;
                    }
                    if (disparosRealizados3B < 5) {
                        botonReceptorPaseCazador3B.disabled = false;
                    }
                    if (usosTiroLargo2B < tiroLargo2B) {
                        botonTiroLargo2B.disabled = false;
                    } else if (usosDisparoConAmague2B < disparoConAmague2B) {
                        botonDisparoConAmague2B.disabled = false;
                    } else if (disparosRealizados1B == 5 && disparosRealizados3B == 5) {
                        descripcion = `${cazador2B} se demora con la quaffle en sus manos y el rival se la quita.`;
                        mostrarDescripcionTurno(descripcion);
                        numeroTurnoPar += 2;
                        posesionEquipoA = true;
                        botonIniciarTurnoImpar.disabled = false;
                    }
                } else {
                    if (disparosRealizados1B < 5) {
                        botonReceptorPaseCazador1B.disabled = false;
                    }
                    if (disparosRealizados2B < 5) {
                        botonReceptorPaseCazador2B.disabled = false;
                    }
                    if (usosTiroLargo3B < tiroLargo3B) {
                        botonTiroLargo3B.disabled = false;
                    } else if (usosDisparoConAmague3B < disparoConAmague3B) {
                        botonDisparoConAmague3B.disabled = false;
                    } else if (disparosRealizados1B == 5 && disparosRealizados2B == 5) {
                        descripcion = `${cazador3B} se demora con la quaffle en sus manos y el rival se la quita.`;
                        mostrarDescripcionTurno(descripcion);
                        numeroTurnoPar += 2;
                        posesionEquipoA = true;
                        botonIniciarTurnoImpar.disabled = false;
                    }
                }
            } else if (turnoPar == true) {
                // TURNO PAR
                if (ataqueEquipoA == true) {
                    disparoIncomodoCazadorGolpeadoA()
                } else if (ataqueEquipoB == true) {
                    participacionGolpeGolpeadoresB()
                } else {
                    descripcion = `Situación no pensada 3.`;
                    mostrarDescripcionTurno(descripcion);
                }
            } else {
                // TURNO BUSCADOR
                if (numeroTurnoBuscador == 1 || numeroTurnoBuscador == 2) {
                    botonIniciarTurnoImpar.disabled = false;
                } else if (numeroTurnoBuscador == 3) {
                    botonAvistamiento.disabled = false;
                } else {
                    botonAvance.disabled = false;
                }
            }
        }
    } else if (valorGolpeGolpeador >= 30) {
        golpeCriticoA = true;
        if (turnoImpar == true) {
            descripcion = `${golpeador} ha realizado un golpe crítico (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
            mostrarDescripcionTurno(descripcion);
            participacionIntercepcionGolpeadoresB()
            if ((maxAgilidadB == agilidadesB[0] && maxAgilidadB !== 0) || (maxDefensaB == defensasB[0] && maxDefensaB !== 0) || (maxReaccionB == reaccionesB[0] && maxReaccionB !==0)) {
                botonEvasionCazador1B.disabled = false;
            } else if ((maxAgilidadB == agilidadesB[1] && maxAgilidadB !== 0) || (maxDefensaB == defensasB[1] && maxDefensaB !== 0) || (maxReaccionB == reaccionesB[1] && maxReaccionB !==0)) {
                botonEvasionCazador2B.disabled = false;
            } else {
                botonEvasionCazador3B.disabled = false;
            }
        } else if (turnoPar == true) {
            // TURNO PAR
            descripcion = `${golpeador} ha realizado un golpe crítico (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
            mostrarDescripcionTurno(descripcion);
            if (ataqueEquipoA == true) {
                botonEvasionGuardianB.disabled = false;
            } else if (ataqueEquipoB == true) {
                participacionIntercepcionGolpeadoresB()
                if (paseRecibidoCazador1B == true) {
                    botonEvasionCazador1B.disabled = false;
                } else if (paseRecibidoCazador2B == true) {
                    botonEvasionCazador2B.disabled = false;
                } else {
                    botonEvasionCazador3B.disabled = false;
                }
            } else {
                descripcion = `Situación no pensada 1.`;
                mostrarDescripcionTurno(descripcion);
            }
        } else {
            // TURNO BUSCADOR
            descripcion = `${golpeador} ha realizado un golpe crítico (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
            mostrarDescripcionTurno(descripcion);
            botonEvasionBuscadorB.disabled = false;
        }
    } else if (valorGolpeGolpeador < 30 && (valorGolpeGolpeador > 30 - precision)) {
        if (turnoImpar == true) {
            descripcion = `${golpeador} ha realizado un golpe (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
            mostrarDescripcionTurno(descripcion);
            participacionIntercepcionGolpeadoresB()
            if ((maxAgilidadB == agilidadesB[0] && maxAgilidadB !== 0) || (maxDefensaB == defensasB[0] && maxDefensaB !== 0) || (maxReaccionB == reaccionesB[0] && maxReaccionB !==0)) {
                botonEvasionCazador1B.disabled = false;
            } else if ((maxAgilidadB == agilidadesB[1] && maxAgilidadB !== 0) || (maxDefensaB == defensasB[1] && maxDefensaB !== 0) || (maxReaccionB == reaccionesB[1] && maxReaccionB !==0)) {
                botonEvasionCazador2B.disabled = false;
            } else {
                botonEvasionCazador3B.disabled = false;
            }
        } else if (turnoPar == true) {
            // TURNO PAR
            descripcion = `${golpeador} ha realizado un golpe (${valorGolpeGolpeador}).`;
            mostrarDescripcionTurno(descripcion);
            if (ataqueEquipoA == true) {
                botonEvasionGuardianB.disabled = false;
            } else if (ataqueEquipoB == true) {
                participacionIntercepcionGolpeadoresB()
                if (paseRecibidoCazador1B == true) {
                    botonEvasionCazador1B.disabled = false;
                } else if (paseRecibidoCazador2B == true) {
                    botonEvasionCazador2B.disabled = false;
                } else {
                    botonEvasionCazador3B.disabled = false;
                }
            } else {
                descripcion = `Situación no pensada 2.`;
                mostrarDescripcionTurno(descripcion);
            }
        } else {
            // TURNO BUSCADOR
            descripcion = `${golpeador} ha realizado un golpe (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
            mostrarDescripcionTurno(descripcion);
            botonEvasionBuscadorB.disabled = false;
        }
    } else {
        descripcion = `${golpeador} ha fallado su bludger (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
        mostrarDescripcionTurno(descripcion);
        if (turnoImpar == true) {
            if ((maxAgilidadB == agilidadesB[0] && maxAgilidadB !== 0) || (maxDefensaB == defensasB[0] && maxDefensaB !== 0) || (maxReaccionB == reaccionesB[0] && maxReaccionB !==0)) {
                if (disparosRealizados2B < 5) {
                    botonReceptorPaseCazador2B.disabled = false;
                }
                if (disparosRealizados3B < 5) {
                    botonReceptorPaseCazador3B.disabled = false;
                }
                if (usosTiroLargo1B < tiroLargo1B) {
                    botonTiroLargo1B.disabled = false;
                } else if (usosDisparoConAmague1B < disparoConAmague1B) {
                    botonDisparoConAmague1B.disabled = false;
                } else if (disparosRealizados2B == 5 && disparosRealizados3B == 5) {
                    descripcion = `${cazador1B} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoA = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else if ((maxAgilidadB == agilidadesB[1] && maxAgilidadB !== 0) || (maxDefensaB == defensasB[1] && maxDefensaB !== 0) || (maxReaccionB == reaccionesB[1] && maxReaccionB !==0)) {
                if (disparosRealizados1B < 5) {
                    botonReceptorPaseCazador1B.disabled = false;
                }
                if (disparosRealizados3B < 5) {
                    botonReceptorPaseCazador3B.disabled = false;
                }
                if (usosTiroLargo2B < tiroLargo2B) {
                    botonTiroLargo2B.disabled = false;
                } else if (usosDisparoConAmague2B < disparoConAmague2B) {
                    botonDisparoConAmague2B.disabled = false;
                } else if (disparosRealizados1B == 5 && disparosRealizados3B == 5) {
                    descripcion = `${cazador2B} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoA = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else {
                if (disparosRealizados1B < 5) {
                    botonReceptorPaseCazador1B.disabled = false;
                }
                if (disparosRealizados2B < 5) {
                    botonReceptorPaseCazador2B.disabled = false;
                }
                if (usosTiroLargo3B < tiroLargo3B) {
                    botonTiroLargo3B.disabled = false;
                } else if (usosDisparoConAmague3B < disparoConAmague3B) {
                    botonDisparoConAmague3B.disabled = false;
                } else if (disparosRealizados1B == 5 && disparosRealizados2B == 5) {
                    descripcion = `${cazador3B} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoA = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            }
        } else if (turnoPar == true) {
            // TURNO PAR
            if (ataqueEquipoA == true) {
                disparoIncomodoCazadorGolpeadoA ()
            } else if (ataqueEquipoB == true) {
                participacionGolpeGolpeadoresB()
            } else {
                descripcion = `Situación no pensada 3.`;
                mostrarDescripcionTurno(descripcion);
            }
        } else {
            // TURNO BUSCADOR
            if (numeroTurnoBuscador == 1 || numeroTurnoBuscador == 2) {
                botonIniciarTurnoImpar.disabled = false;
            } else if (numeroTurnoBuscador == 3) {
                botonAvistamiento.disabled = false;
            } else {
                botonAvance.disabled = false;
            }
        }
    }
    if (golpeador == golpeador1A) {
        energiaConsumida1A ++;
    } else if (golpeador == golpeador2A) {
        energiaConsumida2A ++;
    }
}

function lanzarGolpeGolpeadorB(golpeador, energiaConsumida, fuerza, precision, valorGolpeGolpeador) {
    habilidadesInactivasGolpes1B()
    habilidadesInactivasGolpes2B()
    energiaConsumida ++;
    if (golpeDeFrancotiradorActivo == true) {
        golpeDeFrancotiradorActivo = false;
        const min = 5;
        const max = fuerza;
        valorGolpeGolpeador = Math.floor(Math.random() * (max - min + 1)) + min;
    } else if (bludgerBackbeatActivo == true) {
        bludgerBackbeatActivo = false;
        const min = 1;
        const max = fuerza + 3;
        valorGolpeGolpeador = Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        const min = 1;
        const max = fuerza;
        valorGolpeGolpeador = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    if (golpeBombeadoActivo == true) {
        golpeBombeadoActivo = false;
        if (valorGolpeGolpeador > 30 - precision - 3) {
            golpeCriticoB = true;
            if (turnoImpar == true) {
                descripcion = `${golpeador} ha realizado un golpe crítico (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
                mostrarDescripcionTurno(descripcion);
                if (energiaConsumida1A < energia1A && usosAngelGuardian1A < angelGuardian1A) {
                    botonAngelGuardian1A.disabled = false;
                }
                if (energiaConsumida2A < energia2A && usosAngelGuardian2A < angelGuardian2A) {
                    botonAngelGuardian2A.disabled = false;
                }
                if ((maxAgilidadA == agilidadesA[0] && maxAgilidadA !== 0) || (maxDefensaA == defensasA[0] && maxDefensaA !== 0) || (maxReaccionA == reaccionesA[0] && maxReaccionA !== 0)) {
                    botonEvasionCazador1A.disabled = false;
                } else if ((maxAgilidadA == agilidadesA[1] && maxAgilidadA !== 0) || (maxDefensaA == defensasA[1] && maxDefensaA !== 0) || (maxReaccionA == reaccionesA[1] && maxReaccionA !== 0)) {
                    botonEvasionCazador2A.disabled = false;
                } else {
                    botonEvasionCazador3A.disabled = false;
                }
            } else if (turnoPar == true) {
                // TURNO PAR
                descripcion = `${golpeador} ha realizado un golpe crítico (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
                mostrarDescripcionTurno(descripcion);
                if (ataqueEquipoB == true) {
                    botonEvasionGuardianA.disabled = false;
                } else if (ataqueEquipoA == true) {
                    if (energiaConsumida1A < energia1A && usosAngelGuardian1A < angelGuardian1A) {
                        botonAngelGuardian1A.disabled = false;
                    }
                    if (energiaConsumida2A < energia2A && usosAngelGuardian2A < angelGuardian2A) {
                        botonAngelGuardian2A.disabled = false;
                    }
                    if (paseRecibidoCazador1A == true) {
                        botonEvasionCazador1A.disabled = false;
                    } else if (paseRecibidoCazador2A == true) {
                        botonEvasionCazador2A.disabled = false;
                    } else {
                        botonEvasionCazador3A.disabled = false;
                    }
                } else {
                    descripcion = `Situación no pensada 7.`;
                }
            } else {
                // TURNO BUSCADOR
                descripcion = `${golpeador} ha realizado un golpe crítico (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
                mostrarDescripcionTurno(descripcion);
                botonEvasionBuscadorA.disabled = false;
            }
        } else {
            descripcion = `${golpeador} ha fallado su bludger (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                if (maxAgilidadA == agilidadesA[0] && maxAgilidadA !== 0 || maxDefensaA == defensasA[0] && maxDefensaA !== 0 || maxReaccionA == reaccionesA[0] && maxReaccionA !==0) {
                    if (disparosRealizados2A < 5) {
                        botonReceptorPaseCazador2A.disabled = false;
                    }
                    if (disparosRealizados3A < 5) {
                        botonReceptorPaseCazador3A.disabled = false;
                    }
                    if (usosTiroLargo1A < tiroLargo1A) {
                        botonTiroLargo1A.disabled = false;
                    } else if (usosDisparoConAmague1A < disparoConAmague1A) {
                        botonDisparoConAmague1A.disabled = false;
                    } else if (disparosRealizados2A == 5 && disparosRealizados3A == 5) {
                        descripcion = `${cazador1A} se demora con la quaffle en sus manos y el rival se la quita.`;
                        mostrarDescripcionTurno(descripcion);
                        numeroTurnoPar += 2;
                        posesionEquipoB = true;
                        botonIniciarTurnoImpar.disabled = false;
                    }
                } else if (maxAgilidadA == agilidadesA[1] && maxAgilidadA !== 0 || maxDefensaA == defensasA[1] && maxDefensaA !== 0 || maxReaccionA == reaccionesA[1] && maxReaccionA !==0) {
                    if (disparosRealizados1A < 5) {
                        botonReceptorPaseCazador1A.disabled = false;
                    }
                    if (disparosRealizados3A < 5) {
                        botonReceptorPaseCazador3A.disabled = false;
                    }
                    if (usosTiroLargo2A < tiroLargo2A) {
                        botonTiroLargo2A.disabled = false;
                    } else if (usosDisparoConAmague2A < disparoConAmague2A) {
                        botonDisparoConAmague2A.disabled = false;
                    } else if (disparosRealizados1A == 5 && disparosRealizados3A == 5) {
                        descripcion = `${cazador2A} se demora con la quaffle en sus manos y el rival se la quita.`;
                        mostrarDescripcionTurno(descripcion);
                        numeroTurnoPar += 2;
                        posesionEquipoB = true;
                        botonIniciarTurnoImpar.disabled = false;
                    }
                } else {
                    if (disparosRealizados1A < 5) {
                        botonReceptorPaseCazador1A.disabled = false;
                    }
                    if (disparosRealizados2A < 5) {
                        botonReceptorPaseCazador2A.disabled = false;
                    }
                    if (usosTiroLargo3A < tiroLargo3A) {
                        botonTiroLargo3A.disabled = false;
                    } else if (usosDisparoConAmague3A < disparoConAmague3A) {
                        botonDisparoConAmague3A.disabled = false;
                    } else if (disparosRealizados1A == 5 && disparosRealizados2A == 5) {
                        descripcion = `${cazador3A} se demora con la quaffle en sus manos y el rival se la quita.`;
                        mostrarDescripcionTurno(descripcion);
                        numeroTurnoPar += 2;
                        posesionEquipoB = true;
                        botonIniciarTurnoImpar.disabled = false;
                    }
                }
            } else if (turnoPar == true) {
                // TURNO PAR
                if (ataqueEquipoB == true) {
                    disparoIncomodoCazadorGolpeadoB ()
                } else if (ataqueEquipoA == true) {
                    participacionGolpeGolpeadoresA()
                } else {
                    descripcion = `Situación no pensada 9.`;
                    mostrarDescripcionTurno(descripcion);
                }
            } else {
                // TURNO BUSCADOR
                if (numeroTurnoBuscador == 1 || numeroTurnoBuscador == 2) {
                    botonIniciarTurnoImpar.disabled = false;
                } else if (numeroTurnoBuscador == 3) {
                    botonAvistamiento.disabled = false;
                } else {
                    botonAvance.disabled = false;
                }
            }
        }
    } else if (golpeCanonActivo == true) {
        golpeCanonActivo = false;
        valorGolpeGolpeador = valorGolpeGolpeador + 3;
        if (valorGolpeGolpeador > 30 - precision) {
            if (turnoImpar == true) {
                descripcion = `${golpeador} ha realizado un golpe crítico (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
                mostrarDescripcionTurno(descripcion);
                if (energiaConsumida1A < energia1A && usosAngelGuardian1A < angelGuardian1A) {
                    botonAngelGuardian1A.disabled = false;
                }
                if (energiaConsumida2A < energia2A && usosAngelGuardian2A < angelGuardian2A) {
                    botonAngelGuardian2A.disabled = false;
                }
                if ((maxAgilidadA == agilidadesA[0] && maxAgilidadA !== 0) || (maxDefensaA == defensasA[0] && maxDefensaA !== 0) || (maxReaccionA == reaccionesA[0] && maxReaccionA !== 0)) {
                    botonEvasionCazador1A.disabled = false;
                } else if ((maxAgilidadA == agilidadesA[1] && maxAgilidadA !== 0) || (maxDefensaA == defensasA[1] && maxDefensaA !== 0) || (maxReaccionA == reaccionesA[1] && maxReaccionA !== 0)) {
                    botonEvasionCazador2A.disabled = false;
                } else {
                    botonEvasionCazador3A.disabled = false;
                }
            } else if (turnoPar == true) {
                // TURNO PAR
                descripcion = `${golpeador} ha realizado un golpe crítico (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
                mostrarDescripcionTurno(descripcion);
                if (ataqueEquipoB == true) {
                    botonEvasionGuardianA.disabled = false;
                } else if (ataqueEquipoA == true) {
                    if (energiaConsumida1A < energia1A && usosAngelGuardian1A < angelGuardian1A) {
                        botonAngelGuardian1A.disabled = false;
                    }
                    if (energiaConsumida2A < energia2A && usosAngelGuardian2A < angelGuardian2A) {
                        botonAngelGuardian2A.disabled = false;
                    }
                    if (paseRecibidoCazador1A == true) {
                        botonEvasionCazador1A.disabled = false;
                    } else if (paseRecibidoCazador2A == true) {
                        botonEvasionCazador2A.disabled = false;
                    } else {
                        botonEvasionCazador3A.disabled = false;
                    }
                } else {
                    descripcion = `Situación no pensada 7.`;
                }
            } else {
                // TURNO BUSCADOR
                descripcion = `${golpeador} ha realizado un golpe crítico (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
                mostrarDescripcionTurno(descripcion);
                botonEvasionBuscadorA.disabled = false;
            }
        } else {
            descripcion = `${golpeador} ha fallado su bludger (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                if (maxAgilidadA == agilidadesA[0] && maxAgilidadA !== 0 || maxDefensaA == defensasA[0] && maxDefensaA !== 0 || maxReaccionA == reaccionesA[0] && maxReaccionA !==0) {
                    if (disparosRealizados2A < 5) {
                        botonReceptorPaseCazador2A.disabled = false;
                    }
                    if (disparosRealizados3A < 5) {
                        botonReceptorPaseCazador3A.disabled = false;
                    }
                    if (usosTiroLargo1A < tiroLargo1A) {
                        botonTiroLargo1A.disabled = false;
                    } else if (usosDisparoConAmague1A < disparoConAmague1A) {
                        botonDisparoConAmague1A.disabled = false;
                    } else if (disparosRealizados2A == 5 && disparosRealizados3A == 5) {
                        descripcion = `${cazador1A} se demora con la quaffle en sus manos y el rival se la quita.`;
                        mostrarDescripcionTurno(descripcion);
                        numeroTurnoPar += 2;
                        posesionEquipoB = true;
                        botonIniciarTurnoImpar.disabled = false;
                    }
                } else if (maxAgilidadA == agilidadesA[1] && maxAgilidadA !== 0 || maxDefensaA == defensasA[1] && maxDefensaA !== 0 || maxReaccionA == reaccionesA[1] && maxReaccionA !==0) {
                    if (disparosRealizados1A < 5) {
                        botonReceptorPaseCazador1A.disabled = false;
                    }
                    if (disparosRealizados3A < 5) {
                        botonReceptorPaseCazador3A.disabled = false;
                    }
                    if (usosTiroLargo2A < tiroLargo2A) {
                        botonTiroLargo2A.disabled = false;
                    } else if (usosDisparoConAmague2A < disparoConAmague2A) {
                        botonDisparoConAmague2A.disabled = false;
                    } else if (disparosRealizados1A == 5 && disparosRealizados3A == 5) {
                        descripcion = `${cazador2A} se demora con la quaffle en sus manos y el rival se la quita.`;
                        mostrarDescripcionTurno(descripcion);
                        numeroTurnoPar += 2;
                        posesionEquipoB = true;
                        botonIniciarTurnoImpar.disabled = false;
                    }
                } else {
                    if (disparosRealizados1A < 5) {
                        botonReceptorPaseCazador1A.disabled = false;
                    }
                    if (disparosRealizados2A < 5) {
                        botonReceptorPaseCazador2A.disabled = false;
                    }
                    if (usosTiroLargo3A < tiroLargo3A) {
                        botonTiroLargo3A.disabled = false;
                    } else if (usosDisparoConAmague3A < disparoConAmague3A) {
                        botonDisparoConAmague3A.disabled = false;
                    } else if (disparosRealizados1A == 5 && disparosRealizados2A == 5) {
                        descripcion = `${cazador3A} se demora con la quaffle en sus manos y el rival se la quita.`;
                        mostrarDescripcionTurno(descripcion);
                        numeroTurnoPar += 2;
                        posesionEquipoB = true;
                        botonIniciarTurnoImpar.disabled = false;
                    }
                }
            } else if (turnoPar == true) {
                // TURNO PAR
                if (ataqueEquipoB == true) {
                    disparoIncomodoCazadorGolpeadoB ()
                } else if (ataqueEquipoA == true) {
                    participacionGolpeGolpeadoresA()
                } else {
                    descripcion = `Situación no pensada 9.`;
                    mostrarDescripcionTurno(descripcion);
                }
            } else {
                // TURNO BUSCADOR
                descripcion = `${golpeador1B} ha fallado su bludger (${valorGolpeGolpeador1B}). Energía consumida: ${energiaConsumida1B}.`;
                mostrarDescripcionTurno(descripcion);
                if (numeroTurnoBuscador == 1 || numeroTurnoBuscador == 2) {
                    botonIniciarTurnoImpar.disabled = false;
                } else if (numeroTurnoBuscador == 3) {
                    botonAvistamiento.disabled = false;
                } else {
                    botonAvance.disabled = false;
                }
            }
        }
    } else if (valorGolpeGolpeador >= 30) {
        golpeCriticoB = true;
        if (turnoImpar == true) {
            descripcion = `${golpeador} ha realizado un golpe crítico (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
            mostrarDescripcionTurno(descripcion);
            participacionIntercepcionGolpeadoresA()
            if ((maxAgilidadA == agilidadesA[0] && maxAgilidadA !== 0) || (maxDefensaA == defensasA[0] && maxDefensaA !== 0) || (maxReaccionA == reaccionesA[0] && maxReaccionA !== 0)) {
                botonEvasionCazador1A.disabled = false;
            } else if ((maxAgilidadA == agilidadesA[1] && maxAgilidadA !== 0) || (maxDefensaA == defensasA[1] && maxDefensaA !== 0) || (maxReaccionA == reaccionesA[1] && maxReaccionA !== 0)) {
                botonEvasionCazador2A.disabled = false;
            } else {
                botonEvasionCazador3A.disabled = false;
            }
        } else if (turnoPar == true) {
            // TURNO PAR
            descripcion = `${golpeador} ha realizado un golpe crítico (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
            mostrarDescripcionTurno(descripcion);
            if (ataqueEquipoB == true) {
                botonEvasionGuardianA.disabled = false;
            } else if (ataqueEquipoA == true) {
                participacionIntercepcionGolpeadoresA()
                if (paseRecibidoCazador1A == true) {
                    botonEvasionCazador1A.disabled = false;
                } else if (paseRecibidoCazador2A == true) {
                    botonEvasionCazador2A.disabled = false;
                } else {
                    botonEvasionCazador3A.disabled = false;
                }
            } else {
                descripcion = `Situación no pensada 7.`;
            }
        } else {
            // TURNO BUSCADOR
            descripcion = `${golpeador} ha realizado un golpe crítico (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
            mostrarDescripcionTurno(descripcion);
            botonEvasionBuscadorA.disabled = false;
        }
    } else if (valorGolpeGolpeador < 30 && (valorGolpeGolpeador > 30 - precision)) {
        if (turnoImpar == true) {
            descripcion = `${golpeador} ha realizado un golpe (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
            mostrarDescripcionTurno(descripcion);
            participacionIntercepcionGolpeadoresA()
            if ((maxAgilidadA == agilidadesA[0] && maxAgilidadA !== 0) || (maxDefensaA == defensasA[0] && maxDefensaA !== 0) || (maxReaccionA == reaccionesA[0] && maxReaccionA !== 0)) {
                botonEvasionCazador1A.disabled = false;
            } else if ((maxAgilidadA == agilidadesA[1] && maxAgilidadA !== 0) || (maxDefensaA == defensasA[1] && maxDefensaA !== 0) || (maxReaccionA == reaccionesA[1] && maxReaccionA !== 0)) {
                botonEvasionCazador2A.disabled = false;
            } else {
                botonEvasionCazador3A.disabled = false;
            }   
        } else if (turnoPar == true) {
            // TURNO PAR
            descripcion = `${golpeador} ha realizado un golpe (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
            mostrarDescripcionTurno(descripcion);
            if (ataqueEquipoB == true) {
                botonEvasionGuardianA.disabled = false;
            } else if (ataqueEquipoA == true) {
                participacionIntercepcionGolpeadoresA()
                if (paseRecibidoCazador1A == true) {
                    botonEvasionCazador1A.disabled = false;
                } else if (paseRecibidoCazador2A == true) {
                    botonEvasionCazador2A.disabled = false;
                } else {
                    botonEvasionCazador3A.disabled = false;
                }
            } else {
                descripcion = `Situación no pensada 8.`;
                mostrarDescripcionTurno(descripcion);
            }
        } else {
            // TURNO BUSCADOR
            descripcion = `${golpeador} ha realizado un golpe (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
            mostrarDescripcionTurno(descripcion);
            botonEvasionBuscadorA.disabled = false;
        }
    } else {
        descripcion = `${golpeador} ha fallado su bludger (${valorGolpeGolpeador}). Energía consumida: ${energiaConsumida}.`;
        mostrarDescripcionTurno(descripcion);
        if (turnoImpar == true) {
            if (maxAgilidadA == agilidadesA[0] && maxAgilidadA !== 0 || maxDefensaA == defensasA[0] && maxDefensaA !== 0 || maxReaccionA == reaccionesA[0] && maxReaccionA !==0) {
                if (disparosRealizados2A < 5) {
                    botonReceptorPaseCazador2A.disabled = false;
                }
                if (disparosRealizados3A < 5) {
                    botonReceptorPaseCazador3A.disabled = false;
                }
                if (usosTiroLargo1A < tiroLargo1A) {
                    botonTiroLargo1A.disabled = false;
                } else if (usosDisparoConAmague1A < disparoConAmague1A) {
                    botonDisparoConAmague1A.disabled = false;
                } else if (disparosRealizados2A == 5 && disparosRealizados3A == 5) {
                    descripcion = `${cazador1A} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoB = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else if (maxAgilidadA == agilidadesA[1] && maxAgilidadA !== 0 || maxDefensaA == defensasA[1] && maxDefensaA !== 0 || maxReaccionA == reaccionesA[1] && maxReaccionA !==0) {
                if (disparosRealizados1A < 5) {
                    botonReceptorPaseCazador1A.disabled = false;
                }
                if (disparosRealizados3A < 5) {
                    botonReceptorPaseCazador3A.disabled = false;
                }
                if (usosTiroLargo2A < tiroLargo2A) {
                    botonTiroLargo2A.disabled = false;
                } else if (usosDisparoConAmague2A < disparoConAmague2A) {
                    botonDisparoConAmague2A.disabled = false;
                } else if (disparosRealizados1A == 5 && disparosRealizados3A == 5) {
                    descripcion = `${cazador2A} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoB = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else {
                if (disparosRealizados1A < 5) {
                    botonReceptorPaseCazador1A.disabled = false;
                }
                if (disparosRealizados2A < 5) {
                    botonReceptorPaseCazador2A.disabled = false;
                }
                if (usosTiroLargo3A < tiroLargo3A) {
                    botonTiroLargo3A.disabled = false;
                } else if (usosDisparoConAmague3A < disparoConAmague3A) {
                    botonDisparoConAmague3A.disabled = false;
                } else if (disparosRealizados1A == 5 && disparosRealizados2A == 5) {
                    descripcion = `${cazador3A} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoB = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            }
        } else if (turnoPar == true) {
            // TURNO PAR
            if (ataqueEquipoB == true) {
                disparoIncomodoCazadorGolpeadoB ()
            } else if (ataqueEquipoA == true) {
                participacionGolpeGolpeadoresA()
            } else {
                descripcion = `Situación no pensada 9.`;
                mostrarDescripcionTurno(descripcion);
            }
        } else {
            // TURNO BUSCADOR
            if (numeroTurnoBuscador == 1 || numeroTurnoBuscador == 2) {
                botonIniciarTurnoImpar.disabled = false;
            } else if (numeroTurnoBuscador == 3) {
                botonAvistamiento.disabled = false;
            } else {
                botonAvance.disabled = false;
            }
        }
    }
    if (golpeador == golpeador1B) {
        energiaConsumida1B ++;
    } else if (golpeador == golpeador2B) {
        energiaConsumida2B ++;
    }
}

function lanzarIntercepcionGolpeadorA(golpeador, energiaConsumida, intercepcion, valorIntercepcionGolpeador) {
    habilidadesInactivasIntercepciones1A()
    habilidadesInactivasIntercepciones2A()
    energiaConsumida ++;
    const min = 1;
    const max = 40;
    valorIntercepcionGolpeador = Math.floor(Math.random() * (max - min + 1)) + min;
    if (interferenciaDeAguilaActivo == true) {
        interferenciaDeAguilaActivo = false;
        intercepcion = intercepcion + 7
    } else if (angelGuardianActivo == true) {
        angelGuardianActivo = false;
        intercepcion = intercepcion + 10
    }
    if (valorIntercepcionGolpeador <= 3) {
        energiaConsumida --;
        descripcion = `${golpeador} ha realizado una intercepción perfecta (${valorIntercepcionGolpeador}). Energía consumida: ${energiaConsumida}.`;
        mostrarDescripcionTurno(descripcion);
        golpeCriticoB = false;
        botonEvasionCazador1A.disabled = true;
        botonEvasionCazador2A.disabled = true;
        botonEvasionCazador3A.disabled = true;
        if (turnoImpar == true) {
            if (maxAgilidadA == agilidadesA[0] && maxAgilidadA !== 0 || maxDefensaA == defensasA[0] && maxDefensaA !== 0 || maxReaccionA == reaccionesA[0] && maxReaccionA !==0) {
                if (disparosRealizados2A < 5) {
                    botonReceptorPaseCazador2A.disabled = false;
                }
                if (disparosRealizados3A < 5) {
                    botonReceptorPaseCazador3A.disabled = false;
                }
                if (usosTiroLargo1A < tiroLargo1A) {
                    botonTiroLargo1A.disabled = false;
                } else if (usosDisparoConAmague1A < disparoConAmague1A) {
                    botonDisparoConAmague1A.disabled = false;
                } else if (disparosRealizados2A == 5 && disparosRealizados3A == 5) {
                    descripcion = `${cazador1A} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoB = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else if (maxAgilidadA == agilidadesA[1] && maxAgilidadA !== 0 || maxDefensaA == defensasA[1] && maxDefensaA !== 0 || maxReaccionA == reaccionesA[1] && maxReaccionA !==0) {
                if (disparosRealizados1A < 5) {
                    botonReceptorPaseCazador1A.disabled = false;
                }
                if (disparosRealizados3A < 5) {
                    botonReceptorPaseCazador3A.disabled = false;
                }
                if (usosTiroLargo2A < tiroLargo2A) {
                    botonTiroLargo2A.disabled = false;
                } else if (usosDisparoConAmague2A < disparoConAmague2A) {
                    botonDisparoConAmague2A.disabled = false;
                } else if (disparosRealizados1A == 5 && disparosRealizados3A == 5) {
                    descripcion = `${cazador2A} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoB = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else {
                if (disparosRealizados1A < 5) {
                    botonReceptorPaseCazador1A.disabled = false;
                }
                if (disparosRealizados2A < 5) {
                    botonReceptorPaseCazador2A.disabled = false;
                }
                if (usosTiroLargo3A < tiroLargo3A) {
                    botonTiroLargo3A.disabled = false;
                } else if (usosDisparoConAmague3A < disparoConAmague3A) {
                    botonDisparoConAmague3A.disabled = false;
                } else if (disparosRealizados1A == 5 && disparosRealizados2A == 5) {
                    descripcion = `${cazador3A} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoB = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            }
        } else {
            // TURNO PAR
            usoIntercepcionA = true;
            disparoIncomodoCazadorGolpeadoA()
        }
    } else if (valorIntercepcionGolpeador <= intercepcion) {
        descripcion = `${golpeador} ha realizado una intercepción (${valorIntercepcionGolpeador}). Energía consumida: ${energiaConsumida}.`;
        mostrarDescripcionTurno(descripcion);
        golpeCriticoB = false;
        botonEvasionCazador1A.disabled = true;
        botonEvasionCazador2A.disabled = true;
        botonEvasionCazador3A.disabled = true;
        if (turnoImpar == true) {
            if (maxAgilidadA == agilidadesA[0] && maxAgilidadA !== 0 || maxDefensaA == defensasA[0] && maxDefensaA !== 0 || maxReaccionA == reaccionesA[0] && maxReaccionA !==0) {
                if (disparosRealizados2A < 5) {
                    botonReceptorPaseCazador2A.disabled = false;
                }
                if (disparosRealizados3A < 5) {
                    botonReceptorPaseCazador3A.disabled = false;
                }
                if (usosTiroLargo1A < tiroLargo1A) {
                    botonTiroLargo1A.disabled = false;
                } else if (usosDisparoConAmague1A < disparoConAmague1A) {
                    botonDisparoConAmague1A.disabled = false;
                } else if (disparosRealizados2A == 5 && disparosRealizados3A == 5) {
                    descripcion = `${cazador1A} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoB = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else if (maxAgilidadA == agilidadesA[1] && maxAgilidadA !== 0 || maxDefensaA == defensasA[1] && maxDefensaA !== 0 || maxReaccionA == reaccionesA[1] && maxReaccionA !==0) {
                if (disparosRealizados1A < 5) {
                    botonReceptorPaseCazador1A.disabled = false;
                }
                if (disparosRealizados3A < 5) {
                    botonReceptorPaseCazador3A.disabled = false;
                }
                if (usosTiroLargo2A < tiroLargo2A) {
                    botonTiroLargo2A.disabled = false;
                } else if (usosDisparoConAmague2A < disparoConAmague2A) {
                    botonDisparoConAmague2A.disabled = false;
                } else if (disparosRealizados1A == 5 && disparosRealizados3A == 5) {
                    descripcion = `${cazador2A} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoB = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else {
                if (disparosRealizados1A < 5) {
                    botonReceptorPaseCazador1A.disabled = false;
                }
                if (disparosRealizados2A < 5) {
                    botonReceptorPaseCazador2A.disabled = false;
                }
                if (usosTiroLargo3A < tiroLargo3A) {
                    botonTiroLargo3A.disabled = false;
                } else if (usosDisparoConAmague3A < disparoConAmague3A) {
                    botonDisparoConAmague3A.disabled = false;
                } else if (disparosRealizados1A == 5 && disparosRealizados2A == 5) {
                    descripcion = `${cazador3A} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoB = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            }
        } else {
            // TURNO PAR
            usoIntercepcionA = true;
            disparoIncomodoCazadorGolpeadoA()
        }
    } else {
        descripcion = `${golpeador} no ha podido interceptar la bludger (${valorIntercepcionGolpeador}). Energía consumida: ${energiaConsumida}.`;
        mostrarDescripcionTurno(descripcion);
        if (turnoImpar == true) {
            if ((maxAgilidadA == agilidadesA[0] && maxAgilidadA !== 0) || (maxDefensaA == defensasA[0] && maxDefensaA !== 0) || (maxReaccionA == reaccionesA[0] && maxReaccionA !==0)) {
                botonEvasionCazador1A.disabled = false;
                botonEvasionCazador2A.disabled = true;
                botonEvasionCazador3A.disabled = true;
            } else if ((maxAgilidadA == agilidadesA[1] && maxAgilidadA !== 0) || (maxDefensaA == defensasA[1] && maxDefensaA !== 0) || (maxReaccionA == reaccionesA[1] && maxReaccionA !==0)) {
                botonEvasionCazador2A.disabled = false;
                botonEvasionCazador1A.disabled = true;
                botonEvasionCazador3A.disabled = true;
            } else {
                botonEvasionCazador3A.disabled = false;
                botonEvasionCazador1A.disabled = true;
                botonEvasionCazador2A.disabled = true;
            }
        } else {
            // TURNO PAR
            usoIntercepcionA = true;
            if (paseRecibidoCazador1A == true) {
                botonEvasionCazador1A.disabled = false;
            } else if (paseRecibidoCazador2A == true) {
                botonEvasionCazador2A.disabled = false;
            } else {
                botonEvasionCazador3A.disabled = false;
            }
        }
    }
    if (golpeador == golpeador1A) {
        energiaConsumida1A ++;
    } else if (golpeador == golpeador2A) {
        energiaConsumida2A ++;
    }
}

function lanzarIntercepcionGolpeadorB(golpeador, energiaConsumida, intercepcion, valorIntercepcionGolpeador) {
    habilidadesInactivasIntercepciones1B()
    habilidadesInactivasIntercepciones2B()
    energiaConsumida ++;
    const min = 1;
    const max = 40;
    valorIntercepcionGolpeador = Math.floor(Math.random() * (max - min + 1)) + min;
    if (interferenciaDeAguilaActivo == true) {
        interferenciaDeAguilaActivo = false;
        intercepcion = intercepcion + 7
    } else if (angelGuardianActivo == true) {
        angelGuardianActivo = false;
        intercepcion = intercepcion + 10
    }
    if (valorIntercepcionGolpeador <= 3) {
        energiaConsumida --;
        descripcion = `${golpeador} ha realizado una intercepción perfecta (${valorIntercepcionGolpeador}). Energía consumida: ${energiaConsumida}.`;
        mostrarDescripcionTurno(descripcion);
        golpeCriticoA = false;
        botonEvasionCazador1B.disabled = true;
        botonEvasionCazador2B.disabled = true;
        botonEvasionCazador3B.disabled = true;
        if (turnoImpar == true) {
            if ((maxAgilidadB == agilidadesB[0] && maxAgilidadB !== 0) || (maxDefensaB == defensasB[0] && maxDefensaB !== 0) || (maxReaccionB == reaccionesB[0] && maxReaccionB !==0)) {
                if (disparosRealizados2B < 5) {
                    botonReceptorPaseCazador2B.disabled = false;
                }
                if (disparosRealizados3B < 5) {
                    botonReceptorPaseCazador3B.disabled = false;
                }
                if (usosTiroLargo1B < tiroLargo1B) {
                    botonTiroLargo1B.disabled = false;
                } else if (usosDisparoConAmague1B < disparoConAmague1B) {
                    botonDisparoConAmague1B.disabled = false;
                } else if (disparosRealizados2B == 5 && disparosRealizados3B == 5) {
                    descripcion = `${cazador1B} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoA = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else if ((maxAgilidadB == agilidadesB[1] && maxAgilidadB !== 0) || (maxDefensaB == defensasB[1] && maxDefensaB !== 0) || (maxReaccionB == reaccionesB[1] && maxReaccionB !==0)) {
                if (disparosRealizados1B < 5) {
                    botonReceptorPaseCazador1B.disabled = false;
                }
                if (disparosRealizados3B < 5) {
                    botonReceptorPaseCazador3B.disabled = false;
                }
                if (usosTiroLargo2B < tiroLargo2B) {
                    botonTiroLargo2B.disabled = false;
                } else if (usosDisparoConAmague2B < disparoConAmague2B) {
                    botonDisparoConAmague2B.disabled = false;
                } else if (disparosRealizados1B == 5 && disparosRealizados3B == 5) {
                    descripcion = `${cazador2B} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoA = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else {
                if (disparosRealizados1B < 5) {
                    botonReceptorPaseCazador1B.disabled = false;
                }
                if (disparosRealizados2B < 5) {
                    botonReceptorPaseCazador2B.disabled = false;
                }
                if (usosTiroLargo3B < tiroLargo3B) {
                    botonTiroLargo3B.disabled = false;
                } else if (usosDisparoConAmague3B < disparoConAmague3B) {
                    botonDisparoConAmague3B.disabled = false;
                } else if (disparosRealizados1B == 5 && disparosRealizados2B == 5) {
                    descripcion = `${cazador3B} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoA = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            }
        } else {
            // TURNO PAR
            usoIntercepcionB = true;
            disparoIncomodoCazadorGolpeadoB()
        }
    } else if (valorIntercepcionGolpeador <= intercepcion) {
        descripcion = `${golpeador} ha realizado una intercepción (${valorIntercepcionGolpeador}). Energía consumida: ${energiaConsumida}.`;
        mostrarDescripcionTurno(descripcion);
        golpeCriticoA = false;
        botonEvasionCazador1B.disabled = true;
        botonEvasionCazador2B.disabled = true;
        botonEvasionCazador3B.disabled = true;
        if (turnoImpar == true) {
            if ((maxAgilidadB == agilidadesB[0] && maxAgilidadB !== 0) || (maxDefensaB == defensasB[0] && maxDefensaB !== 0) || (maxReaccionB == reaccionesB[0] && maxReaccionB !==0)) {
                if (disparosRealizados2B < 5) {
                    botonReceptorPaseCazador2B.disabled = false;
                }
                if (disparosRealizados3B < 5) {
                    botonReceptorPaseCazador3B.disabled = false;
                }
                if (usosTiroLargo1B < tiroLargo1B) {
                    botonTiroLargo1B.disabled = false;
                } else if (usosDisparoConAmague1B < disparoConAmague1B) {
                    botonDisparoConAmague1B.disabled = false;
                } else if (disparosRealizados2B == 5 && disparosRealizados3B == 5) {
                    descripcion = `${cazador1B} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoA = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else if ((maxAgilidadB == agilidadesB[1] && maxAgilidadB !== 0) || (maxDefensaB == defensasB[1] && maxDefensaB !== 0) || (maxReaccionB == reaccionesB[1] && maxReaccionB !==0)) {
                if (disparosRealizados1B < 5) {
                    botonReceptorPaseCazador1B.disabled = false;
                }
                if (disparosRealizados3B < 5) {
                    botonReceptorPaseCazador3B.disabled = false;
                }
                if (usosTiroLargo2B < tiroLargo2B) {
                    botonTiroLargo2B.disabled = false;
                } else if (usosDisparoConAmague2B < disparoConAmague2B) {
                    botonDisparoConAmague2B.disabled = false;
                } else if (disparosRealizados1B == 5 && disparosRealizados3B == 5) {
                    descripcion = `${cazador2B} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoA = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else {
                if (disparosRealizados1B < 5) {
                    botonReceptorPaseCazador1B.disabled = false;
                }
                if (disparosRealizados2B < 5) {
                    botonReceptorPaseCazador2B.disabled = false;
                }
                if (usosTiroLargo3B < tiroLargo3B) {
                    botonTiroLargo3B.disabled = false;
                } else if (usosDisparoConAmague3B < disparoConAmague3B) {
                    botonDisparoConAmague3B.disabled = false;
                } else if (disparosRealizados1B == 5 && disparosRealizados2B == 5) {
                    descripcion = `${cazador3B} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoA = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            }
        } else {
            // TURNO PAR
            usoIntercepcionB = true;
            disparoIncomodoCazadorGolpeadoB()
        }
    } else {
        descripcion = `${golpeador} no ha podido interceptar la bludger (${valorIntercepcionGolpeador}). Energía consumida: ${energiaConsumida}.`;
        mostrarDescripcionTurno(descripcion);
        if (turnoImpar == true) {
            if ((maxAgilidadB == agilidadesB[0] && maxAgilidadB !== 0) || (maxDefensaB == defensasB[0] && maxDefensaB !== 0) || (maxReaccionB == reaccionesB[0] && maxReaccionB !==0)) {
                botonEvasionCazador1B.disabled = false;
                botonEvasionCazador2B.disabled = true;
                botonEvasionCazador3B.disabled = true;
            } else if ((maxAgilidadB == agilidadesB[1] && maxAgilidadB !== 0) || (maxDefensaB == defensasB[1] && maxDefensaB !== 0) || (maxReaccionB == reaccionesB[1] && maxReaccionB !==0)) {
                botonEvasionCazador2B.disabled = false;
                botonEvasionCazador1B.disabled = true;
                botonEvasionCazador3B.disabled = true;
            } else {
                botonEvasionCazador3B.disabled = false;
                botonEvasionCazador1B.disabled = true;
                botonEvasionCazador2B.disabled = true;
            }
        } else {
            // TURNO PAR
            usoIntercepcionB = true;
            if (paseRecibidoCazador1B == true) {
                botonEvasionCazador1B.disabled = false;
            } else if (paseRecibidoCazador2B == true) {
                botonEvasionCazador2B.disabled = false;
            } else {
                botonEvasionCazador3B.disabled = false;
            }
        }
    }
    if (golpeador == golpeador1B) {
        energiaConsumida1B ++;
    } else if (golpeador == golpeador2B) {
        energiaConsumida2B ++;
    }
}

function lanzarPasarTurnoGolpeadorA () {
    descripcion = `Los golpeadores de ${equipoA} esperan una mejor oportunidad.`;
    mostrarDescripcionTurno(descripcion);
    pasarTurnoA = true;
    habilidadesInactivasGolpes1A()
    habilidadesInactivasGolpes2A()
    if (turnoImpar == true) {
        if ((maxAgilidadB == agilidadesB[0] && maxAgilidadB !== 0) || (maxDefensaB == defensasB[0] && maxDefensaB !== 0) || (maxReaccionB == reaccionesB[0] && maxReaccionB !==0)) {
            if (disparosRealizados2B < 5) {
                botonReceptorPaseCazador2B.disabled = false;
            }
            if (disparosRealizados3B < 5) {
                botonReceptorPaseCazador3B.disabled = false;
            }
            if (usosTiroLargo1B < tiroLargo1B) {
                botonTiroLargo1B.disabled = false;
            } else if (usosDisparoConAmague1B < disparoConAmague1B) {
                botonDisparoConAmague1B.disabled = false;
            } else if (disparosRealizados2B == 5 && disparosRealizados3B == 5) {
                descripcion = `${cazador1B} se demora con la quaffle en sus manos y el rival se la quita.`;
                mostrarDescripcionTurno(descripcion);
                numeroTurnoPar += 2;
                posesionEquipoA = true;
                botonIniciarTurnoImpar.disabled = false;
            }
        } else if ((maxAgilidadB == agilidadesB[1] && maxAgilidadB !== 0) || (maxDefensaB == defensasB[1] && maxDefensaB !== 0) || (maxReaccionB == reaccionesB[1] && maxReaccionB !==0)) {
            if (disparosRealizados1B < 5) {
                botonReceptorPaseCazador1B.disabled = false;
            }
            if (disparosRealizados3B < 5) {
                botonReceptorPaseCazador3B.disabled = false;
            }
            if (usosTiroLargo2B < tiroLargo2B) {
                botonTiroLargo2B.disabled = false;
            } else if (usosDisparoConAmague2B < disparoConAmague2B) {
                botonDisparoConAmague2B.disabled = false;
            } else if (disparosRealizados1B == 5 && disparosRealizados3B == 5) {
                descripcion = `${cazador2B} se demora con la quaffle en sus manos y el rival se la quita.`;
                mostrarDescripcionTurno(descripcion);
                numeroTurnoPar += 2;
                posesionEquipoA = true;
                botonIniciarTurnoImpar.disabled = false;
            }
        } else {
            if (disparosRealizados1B < 5) {
                botonReceptorPaseCazador1B.disabled = false;
            }
            if (disparosRealizados2B < 5) {
                botonReceptorPaseCazador2B.disabled = false;
            }
            if (usosTiroLargo3B < tiroLargo3B) {
                botonTiroLargo3B.disabled = false;
            } else if (usosDisparoConAmague3B < disparoConAmague3B) {
                botonDisparoConAmague3B.disabled = false;
            } else if (disparosRealizados1B == 5 && disparosRealizados2B == 5) {
                descripcion = `${cazador3B} se demora con la quaffle en sus manos y el rival se la quita.`;
                mostrarDescripcionTurno(descripcion);
                numeroTurnoPar += 2;
                posesionEquipoA = true;
                botonIniciarTurnoImpar.disabled = false;
            }
        }
    } else if (turnoPar == true) {
        // TURNO PAR
        if (ataqueEquipoA == true) {
            disparoIncomodoCazadorGolpeadoA ()
        } else if (ataqueEquipoB == true) {
            participacionGolpeGolpeadoresB()
        } else {
            descripcion = `Situación no pensada 13.`;
            mostrarDescripcionTurno(descripcion);
        }
    } else {
        // TURNO BUSCADOR
        if (numeroTurnoBuscador == 1 || numeroTurnoBuscador == 2) {
            botonIniciarTurnoImpar.disabled = false;
        } else if (numeroTurnoBuscador == 3) {
            botonAvistamiento.disabled = false;
        } else {
            botonAvance.disabled = false;
        }
    }
}

function lanzarPasarTurnoGolpeadorB () {
    descripcion = `Los golpeadores de ${equipoB} esperan una mejor oportunidad.`;
    mostrarDescripcionTurno(descripcion);
    pasarTurnoB = true;
    habilidadesInactivasGolpes1B()
    habilidadesInactivasGolpes2B()
    if (turnoImpar == true) {
        if ((maxAgilidadA == agilidadesA[0] && maxAgilidadA !== 0) || (maxDefensaA == defensasA[0] && maxDefensaA !== 0) || (maxReaccionA == reaccionesA[0] && maxReaccionA !== 0)) {
            if (disparosRealizados2A < 5) {
                botonReceptorPaseCazador2A.disabled = false;
            }
            if (disparosRealizados3A < 5) {
                botonReceptorPaseCazador3A.disabled = false;
            }
            if (usosTiroLargo1A < tiroLargo1A) {
                botonTiroLargo1A.disabled = false;
            } else if (usosDisparoConAmague1A < disparoConAmague1A) {
                botonDisparoConAmague1A.disabled = false;
            } else if (disparosRealizados2A == 5 && disparosRealizados3A == 5) {
                descripcion = `${cazador1A} se demora con la quaffle en sus manos y el rival se la quita.`;
                mostrarDescripcionTurno(descripcion);
                numeroTurnoPar += 2;
                posesionEquipoB = true;
                botonIniciarTurnoImpar.disabled = false;
            }
        } else if ((maxAgilidadA == agilidadesA[1] && maxAgilidadA !== 0) || (maxDefensaA == defensasA[1] && maxDefensaA !== 0) || (maxReaccionA == reaccionesA[1] && maxReaccionA !== 0)) {
            if (disparosRealizados1A < 5) {
                botonReceptorPaseCazador1A.disabled = false;
            }
            if (disparosRealizados3A < 5) {
                botonReceptorPaseCazador3A.disabled = false;
            }
            if (usosTiroLargo2A < tiroLargo2A) {
                botonTiroLargo2A.disabled = false;
            } else if (usosDisparoConAmague2A < disparoConAmague2A) {
                botonDisparoConAmague2A.disabled = false;
            } else if (disparosRealizados1A == 5 && disparosRealizados3A == 5) {
                descripcion = `${cazador2A} se demora con la quaffle en sus manos y el rival se la quita.`;
                mostrarDescripcionTurno(descripcion);
                numeroTurnoPar += 2;
                posesionEquipoB = true;
                botonIniciarTurnoImpar.disabled = false;
            }
        } else {
            if (disparosRealizados1A < 5) {
                botonReceptorPaseCazador1A.disabled = false;
            }
            if (disparosRealizados2A < 5) {
                botonReceptorPaseCazador2A.disabled = false;
            }
            if (usosTiroLargo3A < tiroLargo3A) {
                botonTiroLargo3A.disabled = false;
            } else if (usosDisparoConAmague3A < disparoConAmague3A) {
                botonDisparoConAmague3A.disabled = false;
            } else if (disparosRealizados1A == 5 && disparosRealizados3A == 5) {
                descripcion = `${cazador3A} se demora con la quaffle en sus manos y el rival se la quita.`;
                mostrarDescripcionTurno(descripcion);
                numeroTurnoPar += 2;
                posesionEquipoB = true;
                botonIniciarTurnoImpar.disabled = false;
            }
        }
    } else if (turnoPar == true) {
        // TURNO PAR
        if (ataqueEquipoB == true) {
            disparoIncomodoCazadorGolpeadoB ()
        } else if (ataqueEquipoA == true) {
            participacionGolpeGolpeadoresA()
        } else {
            descripcion = `Situación no pensada 15.`;
            mostrarDescripcionTurno(descripcion);
        }
    } else {
        // TURNO BUSCADOR
        if (numeroTurnoBuscador == 1 || numeroTurnoBuscador == 2) {
            botonIniciarTurnoImpar.disabled = false;
        } else if (numeroTurnoBuscador == 3) {
            botonAvistamiento.disabled = false;
        } else {
            botonAvance.disabled = false;
        }
    }
}

function lanzarGolpeDeFrancotirador(golpeador, usosGolpeDeFrancotirador, golpeDeFrancotirador) {
    golpeDeFrancotiradorActivo = true;
    usosGolpeDeFrancotirador ++;
    let usosDisponibles 
    usosDisponibles = golpeDeFrancotirador - usosGolpeDeFrancotirador
    descripcion = `${golpeador} ha realizado un Golpe de Francotirador. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion);
    if (golpeador == golpeador1A) {
        usosGolpeDeFrancotirador1A ++;
        habilidadesInactivasGolpes1A()
        lanzarGolpeGolpeadorA(golpeador1A, energiaConsumida1A, fuerza1A, precision1A, valorGolpeGolpeador1A);
    } else if (golpeador == golpeador2A) {
        usosGolpeDeFrancotirador2A ++;
        habilidadesInactivasGolpes2A()
        lanzarGolpeGolpeadorA(golpeador2A, energiaConsumida2A, fuerza2A, precision2A, valorGolpeGolpeador2A);
    } else if (golpeador == golpeador1B) {
        usosGolpeDeFrancotirador1B ++;
        habilidadesInactivasGolpes1B()
        lanzarGolpeGolpeadorB(golpeador1B, energiaConsumida1B, fuerza1B, precision1B, valorGolpeGolpeador1B);
    } else if (golpeador == golpeador2B) {
        usosGolpeDeFrancotirador2B ++;
        habilidadesInactivasGolpes2B()
        lanzarGolpeGolpeadorB(golpeador2B, energiaConsumida2B, fuerza2B, precision2B, valorGolpeGolpeador2B);
    }
}

function lanzarBludgerBackbeat(golpeador, usosBludgerBackbeat, bludgerBackbeat) {
    bludgerBackbeatActivo = true;
    usosBludgerBackbeat ++;
    let usosDisponibles 
    usosDisponibles = bludgerBackbeat - usosBludgerBackbeat
    descripcion = `${golpeador} ha realizado un Bludger Backbeat. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion);
    if (golpeador == golpeador1A) {
        usosBludgerBackbeat1A ++;
        habilidadesInactivasGolpes1A();
        lanzarGolpeGolpeadorA(golpeador1A, energiaConsumida1A, fuerza1A, precision1A, valorGolpeGolpeador1A);
    } else if (golpeador == golpeador2A) {
        usosBludgerBackbeat2A ++;
        habilidadesInactivasGolpes2A();
        lanzarGolpeGolpeadorA(golpeador2A, energiaConsumida2A, fuerza2A, precision2A, valorGolpeGolpeador2A);
    } else if (golpeador == golpeador1B) {
        usosBludgerBackbeat1B ++;
        habilidadesInactivasGolpes1B();
        lanzarGolpeGolpeadorB(golpeador1B, energiaConsumida1B, fuerza1B, precision1B, valorGolpeGolpeador1B);
    } else if (golpeador == golpeador2B) {
        usosBludgerBackbeat2B ++;
        habilidadesInactivasGolpes2B();
        lanzarGolpeGolpeadorB(golpeador2B, energiaConsumida2B, fuerza2B, precision2B, valorGolpeGolpeador2B);
    }
}

function lanzarGolpeBombeado(golpeador, usosGolpeBombeado, golpeBombeado) {
    golpeBombeadoActivo = true;
    usosGolpeBombeado ++;
    let usosDisponibles 
    usosDisponibles = golpeBombeado - usosGolpeBombeado
    descripcion = `${golpeador} ha realizado un Golpe Bombeado. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion);
    if (golpeador == golpeador1A) {
        usosGolpeBombeado1A ++;
        habilidadesInactivasGolpes1A()
        lanzarGolpeGolpeadorA(golpeador1A, energiaConsumida1A, fuerza1A, precision1A, valorGolpeGolpeador1A);
    } else if (golpeador == golpeador2A) {
        usosGolpeBombeado2A ++;
        habilidadesInactivasGolpes2A()
        lanzarGolpeGolpeadorA(golpeador2A, energiaConsumida2A, fuerza2A, precision2A, valorGolpeGolpeador2A);
    } else if (golpeador == golpeador1B) {
        usosGolpeBombeado1B ++;
        habilidadesInactivasGolpes1B()
        lanzarGolpeGolpeadorB(golpeador1B, energiaConsumida1B, fuerza1B, precision1B, valorGolpeGolpeador1B);
    } else if (golpeador == golpeador2B) {
        usosGolpeBombeado2B ++;
        habilidadesInactivasGolpes2B()
        lanzarGolpeGolpeadorB(golpeador2B, energiaConsumida2B, fuerza2B, precision2B, valorGolpeGolpeador2B);
    }
}

function lanzarGolpeCanon(golpeador, usosGolpeCanon, golpeCanon) {
    golpeCanonActivo = true;
    usosGolpeCanon ++;
    let usosDisponibles 
    usosDisponibles = golpeCanon - usosGolpeCanon
    descripcion = `${golpeador} ha realizado un Golpe Cañon. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion);
    if (golpeador == golpeador1A) {
        usosGolpeCanon1A ++;
        habilidadesInactivasGolpes1A()
        lanzarGolpeGolpeadorA(golpeador1A, energiaConsumida1A, fuerza1A, precision1A, valorGolpeGolpeador1A);
    } else if (golpeador == golpeador2A) {
        usosGolpeCanon2A ++;
        habilidadesInactivasGolpes2A()
        lanzarGolpeGolpeadorA(golpeador2A, energiaConsumida2A, fuerza2A, precision2A, valorGolpeGolpeador2A);
    } else if (golpeador == golpeador1B) {
        usosGolpeCanon1B ++;
        habilidadesInactivasGolpes1B()
        lanzarGolpeGolpeadorB(golpeador1B, energiaConsumida1B, fuerza1B, precision1B, valorGolpeGolpeador1B);
    } else if (golpeador == golpeador2B) {
        usosGolpeCanon2B ++;
        habilidadesInactivasGolpes2B()
        lanzarGolpeGolpeadorB(golpeador2B, energiaConsumida2B, fuerza2B, precision2B, valorGolpeGolpeador2B);
    }
}

function lanzarInterferenciaDeAguila(golpeador, usosInterferenciaDeAguila, interferenciaDeAguila) {
    interferenciaDeAguilaActivo = true;
    usosInterferenciaDeAguila ++;
    let usosDisponibles
    usosDisponibles = interferenciaDeAguila - usosInterferenciaDeAguila
    descripcion = `${golpeador} ha realizado una Interferencia de Águila. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion);
    if (golpeador == golpeador1A) {
        usosInterferenciaDeAguila1A ++;
        habilidadesInactivasIntercepciones1A()
        lanzarIntercepcionGolpeadorA(golpeador1A, energiaConsumida1A, intercepcion1A, valorIntercepcionGolpeador1A);
    } else if (golpeador == golpeador2A) {
        usosInterferenciaDeAguila2A ++;
        habilidadesInactivasIntercepciones2A()
        lanzarIntercepcionGolpeadorA(golpeador2A, energiaConsumida2A, intercepcion2A, valorIntercepcionGolpeador2A);
    } else if (golpeador == golpeador1B) {
        usosInterferenciaDeAguila1B ++;
        habilidadesInactivasIntercepciones1B()
        lanzarIntercepcionGolpeadorB(golpeador1B, energiaConsumida1B, intercepcion1B, valorIntercepcionGolpeador1B);
    } else if (golpeador == golpeador2B) {
        usosInterferenciaDeAguila2B ++;
        habilidadesInactivasIntercepciones2B()
        lanzarIntercepcionGolpeadorB(golpeador2B, energiaConsumida2B, intercepcion2B, valorIntercepcionGolpeador2B);
    }
}

function lanzarAngelGuardian(golpeador, usosAngelGuardian, angelGuardian) {
    angelGuardianActivo = true;
    usosAngelGuardian ++;
    let usosDisponibles
    usosDisponibles = angelGuardian - usosAngelGuardian
    descripcion = `${golpeador} ha realizado un Ángel Guardián. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion);
    if (golpeador == golpeador1A) {
        usosAngelGuardian1A ++;
        habilidadesInactivasIntercepciones1A()
        lanzarIntercepcionGolpeadorA(golpeador1A, energiaConsumida1A, intercepcion1A, valorIntercepcionGolpeador1A);
    } else if (golpeador == golpeador2A) {
        usosAngelGuardian2A ++;
        habilidadesInactivasIntercepciones2A()
        lanzarIntercepcionGolpeadorA(golpeador2A, energiaConsumida2A, intercepcion2A, valorIntercepcionGolpeador2A);
    } else if (golpeador == golpeador1B) {
        usosAngelGuardian1B ++;
        habilidadesInactivasIntercepciones1B()
        lanzarIntercepcionGolpeadorB(golpeador1B, energiaConsumida1B, intercepcion1B, valorIntercepcionGolpeador1B);
    } else if (golpeador == golpeador2B) {
        usosAngelGuardian2B ++;
        habilidadesInactivasIntercepciones2B()
        lanzarIntercepcionGolpeadorB(golpeador2B, energiaConsumida2B, intercepcion2B, valorIntercepcionGolpeador2B);
    }
}

function lanzarSlothGripRollCazador(cazador) {
    slothGripRollActivo = true
    descripcion = `${cazador} ha realizado un Sloth Grip Roll.`
    mostrarDescripcionTurno(descripcion);
    if (cazador == cazador1A) {
        botonSlothGripRoll1A.disabled = true;
    } else if (cazador == cazador2A) {
        botonSlothGripRoll2A.disabled = true;
    } else if (cazador == cazador3A) {
        botonSlothGripRoll3A.disabled = true;
    } else if (cazador == cazador1B) {
        botonSlothGripRoll1B.disabled = true;
    } else if (cazador == cazador2B) {
        botonSlothGripRoll2B.disabled = true;
    } else if (cazador == cazador3B) {
        botonSlothGripRoll3B.disabled = true;
    }
}

function lanzarEvasionCazador1A() {
    botonIntercepcionGolpeador1A.disabled = true;
    botonIntercepcionGolpeador2A.disabled = true;
    botonEvasionCazador1A.disabled = true;
    botonEvasionCazador2A.disabled = true;
    botonEvasionCazador3A.disabled = true;
    const min = 1;
    const max = 25;
    valorEvasionCazador1A = Math.floor(Math.random() * (max - min + 1)) + min;
    if (slothGripRollActivo == true) {
        slothGripRollActivo = false;
        if (valorEvasionCazador1A <= evasionCazador1A) {
            descripcion = `${cazador1A} ha evadido (${valorEvasionCazador1A}) la bludger con su Sloth Grip Roll.`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                if (disparosRealizados2A < 5) {
                    botonReceptorPaseCazador2A.disabled = false;
                }
                if (disparosRealizados3A < 5) {
                    botonReceptorPaseCazador3A.disabled = false;
                }
                if (usosTiroLargo1A < tiroLargo1A) {
                    botonTiroLargo1A.disabled = false;
                } else if (usosDisparoConAmague1A < disparoConAmague1A) {
                    botonDisparoConAmague1A.disabled = false;
                } else if (disparosRealizados2A == 5 && disparosRealizados3A == 5) {
                    descripcion = `${cazador1A} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoB = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else {
                // TURNO PAR
                if (usoIntercepcionA == true) {
                    if (knuckleBallActivo == true) {
                        knuckleBallActivo = false;
                        disparoIncomodoCazadorGolpeadoA()
                    } else {
                        disparoIncomodo = true;
                        disparoIncomodoCazadorGolpeadoA()
                    }
                } else {
                    participacionGolpeGolpeadoresA()
                }
            }
        } else {
            descripcion = `${cazador1A} no ha evadido (${valorEvasionCazador1A}) la bludger y ha soltado la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                agilidadesA = [0, 0, 0]
                defensasA = [0, 0, 0]
                reaccionesA = [0, 0, 0]
                agilidadesA = [0, 0, 0]
                defensasA = [0, 0, 0]
                reaccionesA = [0, 0, 0]
                agilidadesB = [0, 0, 0]
                defensasB = [0, 0, 0]
                reaccionesB = [0, 0, 0]
                botonCalcularGanadorCazadores1.disabled = true;
                botonReaccionCazador1A.disabled = true;
                botonReaccionCazador2A.disabled = false;
                if (usosIntuicionFugaz2A < intuicionFugaz2A) {
                    botonIntuicionFugaz2A.disabled = false;
                }
                botonReaccionCazador3A.disabled = false;
                if (usosIntuicionFugaz3A < intuicionFugaz3A) {
                    botonIntuicionFugaz3A.disabled = false;
                }
                botonReaccionCazador1B.disabled = false;
                if (usosIntuicionFugaz1B < intuicionFugaz1B) {
                    botonIntuicionFugaz1B.disabled = false;
                }
                botonReaccionCazador2B.disabled = false;
                if (usosIntuicionFugaz2B < intuicionFugaz2B) {
                    botonIntuicionFugaz2B.disabled = false;
                }
                botonReaccionCazador3B.disabled = false;
                if (usosIntuicionFugaz3B < intuicionFugaz3B) {
                    botonIntuicionFugaz3B.disabled = false;
                }
                botonCalcularGanadorCazadores2.disabled = false;
            }  else {
                // TURNO PAR
                golpeadoCazador1A = true;
                if (usoIntercepcionA == false) {
                    participacionGolpeGolpeadoresA()
                } else {
                    if (numeroTurnoPar == 6 || numeroTurnoPar == 12 || numeroTurnoPar == 18 || numeroTurnoPar == 24 || numeroTurnoPar == 30 || numeroTurnoPar == 36) {
                        botonIniciarTurnoBuscador.disabled = false;
                    } else {
                        botonIniciarTurnoImpar.disabled = false;
                    }
                }
            }
        }
    } else if (golpeCriticoB == true) {
        golpeCriticoB = false;
        if (valorEvasionCazador1A <= 3) {
            descripcion = `${cazador1A} de ${equipoA} ha realizado una evasión perfecta (${valorEvasionCazador1A}).`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                if (disparosRealizados2A < 5) {
                    botonReceptorPaseCazador2A.disabled = false;
                }
                if (disparosRealizados3A < 5) {
                    botonReceptorPaseCazador3A.disabled = false;
                }
                if (usosTiroLargo1A < tiroLargo1A) {
                    botonTiroLargo1A.disabled = false;
                } else if (usosDisparoConAmague1A < disparoConAmague1A) {
                    botonDisparoConAmague1A.disabled = false;
                } else if (disparosRealizados2A == 5 && disparosRealizados3A == 5) {
                    descripcion = `${cazador1A} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoB = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else {
                // TURNO PAR
                if (usoIntercepcionA == true) {
                    if (knuckleBallActivo == true) {
                        knuckleBallActivo = false;
                        disparoIncomodoCazadorGolpeadoA()
                    } else {
                        disparoIncomodo = true;
                        disparoIncomodoCazadorGolpeadoA()
                    }
                } else {
                    participacionGolpeGolpeadoresA()
                }
            }
        } else {
            descripcion = `${cazador1A} no ha evadido (${valorEvasionCazador1A}) la bludger y ha soltado la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                agilidadesA = [0, 0, 0]
                defensasA = [0, 0, 0]
                reaccionesA = [0, 0, 0]
                agilidadesB = [0, 0, 0]
                defensasB = [0, 0, 0]
                reaccionesB = [0, 0, 0]
                botonCalcularGanadorCazadores1.disabled = true;
                botonReaccionCazador1A.disabled = true;
                botonReaccionCazador2A.disabled = false;
                if (usosIntuicionFugaz2A < intuicionFugaz2A) {
                    botonIntuicionFugaz2A.disabled = false;
                }
                botonReaccionCazador3A.disabled = false;
                if (usosIntuicionFugaz3A < intuicionFugaz3A) {
                    botonIntuicionFugaz3A.disabled = false;
                }
                botonReaccionCazador1B.disabled = false;
                if (usosIntuicionFugaz1B < intuicionFugaz1B) {
                    botonIntuicionFugaz1B.disabled = false;
                }
                botonReaccionCazador2B.disabled = false;
                if (usosIntuicionFugaz2B < intuicionFugaz2B) {
                    botonIntuicionFugaz2B.disabled = false;
                }
                botonReaccionCazador3B.disabled = false;
                if (usosIntuicionFugaz3B < intuicionFugaz3B) {
                    botonIntuicionFugaz3B.disabled = false;
                }
                botonCalcularGanadorCazadores2.disabled = false;
            } else {
                // TURNO PAR
                golpeadoCazador1A = true;
                if (numeroTurnoPar == 6 || numeroTurnoPar == 12 || numeroTurnoPar == 18 || numeroTurnoPar == 24 || numeroTurnoPar == 30 || numeroTurnoPar == 36) {
                    botonIniciarTurnoBuscador.disabled = false;
                } else {
                    botonIniciarTurnoImpar.disabled = false;
                }
            }
        }
    } else if (presionEfectiva == true) {
        presionEfectiva = false;
        if (valorEvasionCazador1A <= evasionCazador1A) {
            descripcion = `${cazador1A} ha evadido (${valorEvasionCazador1A}) la presión de ${guardianB}.`;
            mostrarDescripcionTurno(descripcion);
            disparoIncomodo = true;
            botonDisparoCazador1A.disabled = false;
            habilidadesDisparoCazador1A()
        } else {
            descripcion = `${cazador1A} no evade (${valorEvasionCazador1A}) la presión de ${guardianB}.`;
            mostrarDescripcionTurno(descripcion);
            disparoIncomodo = true;
            disparoDebil = true;
            botonDisparoCazador1A.disabled = false;
            habilidadesDisparoCazador1A()
        }
    } else {
        if (valorEvasionCazador1A <= evasionCazador1A) {
            descripcion = `${cazador1A} ha evadido (${valorEvasionCazador1A}) la bludger.`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                if (disparosRealizados2A < 5) {
                    botonReceptorPaseCazador2A.disabled = false;
                }
                if (disparosRealizados3A < 5) {
                    botonReceptorPaseCazador3A.disabled = false;
                }
                if (usosTiroLargo1A < tiroLargo1A) {
                    botonTiroLargo1A.disabled = false;
                } else if (usosDisparoConAmague1A < disparoConAmague1A) {
                    botonDisparoConAmague1A.disabled = false;
                } else if (disparosRealizados2A == 5 && disparosRealizados3A == 5) {
                    descripcion = `${cazador1A} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoB = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else {
                // TURNO PAR
                if (usoIntercepcionA == true) {
                    if (knuckleBallActivo == true) {
                        knuckleBallActivo = false;
                        disparoIncomodoCazadorGolpeadoA()
                    } else {
                        disparoIncomodo = true;
                        disparoIncomodoCazadorGolpeadoA()
                    }
                } else {
                    participacionGolpeGolpeadoresA()
                }
            }
        } else {
            descripcion = `${cazador1A} no ha evadido (${valorEvasionCazador1A}) la bludger y ha soltado la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                agilidadesA = [0, 0, 0]
                defensasA = [0, 0, 0]
                reaccionesA = [0, 0, 0]
                agilidadesA = [0, 0, 0]
                defensasA = [0, 0, 0]
                reaccionesA = [0, 0, 0]
                agilidadesB = [0, 0, 0]
                defensasB = [0, 0, 0]
                reaccionesB = [0, 0, 0]
                botonCalcularGanadorCazadores1.disabled = true;
                botonReaccionCazador1A.disabled = true;
                botonReaccionCazador2A.disabled = false;
                if (usosIntuicionFugaz2A < intuicionFugaz2A) {
                    botonIntuicionFugaz2A.disabled = false;
                }
                botonReaccionCazador3A.disabled = false;
                if (usosIntuicionFugaz3A < intuicionFugaz3A) {
                    botonIntuicionFugaz3A.disabled = false;
                }
                botonReaccionCazador1B.disabled = false;
                if (usosIntuicionFugaz1B < intuicionFugaz1B) {
                    botonIntuicionFugaz1B.disabled = false;
                }
                botonReaccionCazador2B.disabled = false;
                if (usosIntuicionFugaz2B < intuicionFugaz2B) {
                    botonIntuicionFugaz2B.disabled = false;
                }
                botonReaccionCazador3B.disabled = false;
                if (usosIntuicionFugaz3B < intuicionFugaz3B) {
                    botonIntuicionFugaz3B.disabled = false;
                }
                botonCalcularGanadorCazadores2.disabled = false;
            }  else {
                // TURNO PAR
                golpeadoCazador1A = true;
                if (usoIntercepcionA == false) {
                    participacionGolpeGolpeadoresA()
                } else {
                    if (numeroTurnoPar == 6 || numeroTurnoPar == 12 || numeroTurnoPar == 18 || numeroTurnoPar == 24 || numeroTurnoPar == 30 || numeroTurnoPar == 36) {
                        botonIniciarTurnoBuscador.disabled = false;
                    } else {
                        botonIniciarTurnoImpar.disabled = false;
                    }
                }
            }
        }
    }      
}

function lanzarEvasionCazador2A() {
    botonIntercepcionGolpeador1A.disabled = true;
    botonIntercepcionGolpeador2A.disabled = true;
    botonEvasionCazador1A.disabled = true;
    botonEvasionCazador2A.disabled = true;
    botonEvasionCazador3A.disabled = true;
    const min = 1;
    const max = 25;
    valorEvasionCazador2A = Math.floor(Math.random() * (max - min + 1)) + min;
    if (slothGripRollActivo == true) {
        slothGripRollActivo = false;
        if (valorEvasionCazador2A <= evasionCazador2A) {
            descripcion = `${cazador2A} de ${equipoA} ha realizado una evasión (${valorEvasionCazador2A}).`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                if (disparosRealizados1A < 5) {
                    botonReceptorPaseCazador1A.disabled = false;
                }
                if (disparosRealizados3A < 5) {
                    botonReceptorPaseCazador3A.disabled = false;
                }
                if (usosTiroLargo2A < tiroLargo2A) {
                    botonTiroLargo2A.disabled = false;
                } else if (usosDisparoConAmague2A < disparoConAmague2A) {
                    botonDisparoConAmague2A.disabled = false;
                } else if (disparosRealizados1A == 5 && disparosRealizados3A == 5) {
                    descripcion = `${cazador2A} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoB = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else {
                // TURNO PAR
                if (usoIntercepcionA == true) {
                    if (knuckleBallActivo == true) {
                        knuckleBallActivo = false;
                        disparoIncomodoCazadorGolpeadoA()
                    } else {
                        disparoIncomodo = true;
                        disparoIncomodoCazadorGolpeadoA()
                    }
                } else {
                    participacionGolpeGolpeadoresA()
                }
            }
        } else {
            descripcion = `${cazador2A} ha sido golpeado (${valorEvasionCazador2A}) y ha soltado la bludger.`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                agilidadesA = [0, 0, 0]
                defensasA = [0, 0, 0]
                reaccionesA = [0, 0, 0]
                agilidadesB = [0, 0, 0]
                defensasB = [0, 0, 0]
                reaccionesB = [0, 0, 0]
                botonCalcularGanadorCazadores1.disabled = true;
                botonReaccionCazador1A.disabled = false;
                if (usosIntuicionFugaz1A < intuicionFugaz1A) {
                    botonIntuicionFugaz1A.disabled = false;
                }
                botonReaccionCazador2A.disabled = true;
                botonReaccionCazador3A.disabled = false;
                if (usosIntuicionFugaz3A < intuicionFugaz3A) {
                    botonIntuicionFugaz3A.disabled = false;
                }
                botonReaccionCazador1B.disabled = false;
                if (usosIntuicionFugaz1B < intuicionFugaz1B) {
                    botonIntuicionFugaz1B.disabled = false;
                }
                botonReaccionCazador2B.disabled = false;
                if (usosIntuicionFugaz2B < intuicionFugaz2B) {
                    botonIntuicionFugaz2B.disabled = false;
                }
                botonReaccionCazador3B.disabled = false;
                if (usosIntuicionFugaz3B < intuicionFugaz3B) {
                    botonIntuicionFugaz3B.disabled = false;
                }
                botonCalcularGanadorCazadores2.disabled = false;
            }  else {
                // TURNO PAR
                golpeadoCazador2A = true;
                if (usoIntercepcionA == false) {
                    participacionGolpeGolpeadoresA()
                } else {
                    if (numeroTurnoPar == 6 || numeroTurnoPar == 12 || numeroTurnoPar == 18 || numeroTurnoPar == 24 || numeroTurnoPar == 30 || numeroTurnoPar == 36) {
                        botonIniciarTurnoBuscador.disabled = false;
                    } else {
                        botonIniciarTurnoImpar.disabled = false;
                    }
                }
            }
        }
    } else if (golpeCriticoB == true) {
        golpeCriticoB = false;
        if (valorEvasionCazador2A <= 3) {
            descripcion = `${cazador2A} de ${equipoA} ha realizado una evasión perfecta (${valorEvasionCazador2A}).`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                if (disparosRealizados1A < 5) {
                    botonReceptorPaseCazador1A.disabled = false;
                }
                if (disparosRealizados3A < 5) {
                    botonReceptorPaseCazador3A.disabled = false;
                }
                if (usosTiroLargo2A < tiroLargo2A) {
                    botonTiroLargo2A.disabled = false;
                } else if (usosDisparoConAmague2A < disparoConAmague2A) {
                    botonDisparoConAmague2A.disabled = false;
                } else if (disparosRealizados1A == 5 && disparosRealizados3A == 5) {
                    descripcion = `${cazador2A} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoB = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else {
                // TURNO PAR
                if (usoIntercepcionA == true) {
                    if (knuckleBallActivo == true) {
                        knuckleBallActivo = false;
                        disparoIncomodoCazadorGolpeadoA()
                    } else {
                        disparoIncomodo = true;
                        disparoIncomodoCazadorGolpeadoA()
                    }
                } else {
                    participacionGolpeGolpeadoresA()
                }
            }
        } else {
            descripcion = `${cazador2A} no ha evadido (${valorEvasionCazador2A}) la bludger y ha soltado la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                agilidadesA = [0, 0, 0]
                defensasA = [0, 0, 0]
                reaccionesA = [0, 0, 0]
                agilidadesB = [0, 0, 0]
                defensasB = [0, 0, 0]
                reaccionesB = [0, 0, 0]
                botonCalcularGanadorCazadores1.disabled = true;
                botonReaccionCazador1A.disabled = false;
                if (usosIntuicionFugaz1A < intuicionFugaz1A) {
                    botonIntuicionFugaz1A.disabled = false;
                }
                botonReaccionCazador2A.disabled = true;
                botonReaccionCazador3A.disabled = false;
                if (usosIntuicionFugaz3A < intuicionFugaz3A) {
                    botonIntuicionFugaz3A.disabled = false;
                }
                botonReaccionCazador1B.disabled = false;
                if (usosIntuicionFugaz1B < intuicionFugaz1B) {
                    botonIntuicionFugaz1B.disabled = false;
                }
                botonReaccionCazador2B.disabled = false;
                if (usosIntuicionFugaz2B < intuicionFugaz2B) {
                    botonIntuicionFugaz2B.disabled = false;
                }
                botonReaccionCazador3B.disabled = false;
                if (usosIntuicionFugaz3B < intuicionFugaz3B) {
                    botonIntuicionFugaz3B.disabled = false;
                }
                botonCalcularGanadorCazadores2.disabled = false;
            } else {
                // TURNO PAR
                golpeadoCazador2A = true;
                if (numeroTurnoPar == 6 || numeroTurnoPar == 12 || numeroTurnoPar == 18 || numeroTurnoPar == 24 || numeroTurnoPar == 30 || numeroTurnoPar == 36) {
                    botonIniciarTurnoBuscador.disabled = false;
                } else {
                    botonIniciarTurnoImpar.disabled = false;
                }
            }
        }
    } else if (presionEfectiva == true) {
        presionEfectiva = false;
        if (valorEvasionCazador2A <= evasionCazador2A) {
            descripcion = `${cazador2A} ha evadido (${valorEvasionCazador2A}) la presión de ${guardianB}.`;
            mostrarDescripcionTurno(descripcion);
            disparoIncomodo = true;
            botonDisparoCazador2A.disabled = false;
            habilidadesDisparoCazador2A()
        } else {
            descripcion = `${cazador2A} no evade (${valorEvasionCazador2A}) la presión de ${guardianB}.`;
            mostrarDescripcionTurno(descripcion);
            disparoIncomodo = true;
            disparoDebil = true;
            botonDisparoCazador2A.disabled = false;
            habilidadesDisparoCazador2A()
        }
    } else {
        if (valorEvasionCazador2A <= evasionCazador2A) {
            descripcion = `${cazador2A} de ${equipoA} ha realizado una evasión (${valorEvasionCazador2A}).`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                if (disparosRealizados1A < 5) {
                    botonReceptorPaseCazador1A.disabled = false;
                }
                if (disparosRealizados3A < 5) {
                    botonReceptorPaseCazador3A.disabled = false;
                }
                if (usosTiroLargo2A < tiroLargo2A) {
                    botonTiroLargo2A.disabled = false;
                } else if (usosDisparoConAmague2A < disparoConAmague2A) {
                    botonDisparoConAmague2A.disabled = false;
                } else if (disparosRealizados1A == 5 && disparosRealizados3A == 5) {
                    descripcion = `${cazador2A} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoB = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else {
                // TURNO PAR
                if (usoIntercepcionA == true) {
                    if (knuckleBallActivo == true) {
                        knuckleBallActivo = false;
                        disparoIncomodoCazadorGolpeadoA()
                    } else {
                        disparoIncomodo = true;
                        disparoIncomodoCazadorGolpeadoA()
                    }
                } else {
                    participacionGolpeGolpeadoresA()
                }
            }
        } else {
            descripcion = `${cazador2A} ha sido golpeado (${valorEvasionCazador2A}) y ha soltado la bludger.`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                agilidadesA = [0, 0, 0]
                defensasA = [0, 0, 0]
                reaccionesA = [0, 0, 0]
                agilidadesB = [0, 0, 0]
                defensasB = [0, 0, 0]
                reaccionesB = [0, 0, 0]
                botonCalcularGanadorCazadores1.disabled = true;
                botonReaccionCazador1A.disabled = false;
                if (usosIntuicionFugaz1A < intuicionFugaz1A) {
                    botonIntuicionFugaz1A.disabled = false;
                }
                botonReaccionCazador2A.disabled = true;
                botonReaccionCazador3A.disabled = false;
                if (usosIntuicionFugaz3A < intuicionFugaz3A) {
                    botonIntuicionFugaz3A.disabled = false;
                }
                botonReaccionCazador1B.disabled = false;
                if (usosIntuicionFugaz1B < intuicionFugaz1B) {
                    botonIntuicionFugaz1B.disabled = false;
                }
                botonReaccionCazador2B.disabled = false;
                if (usosIntuicionFugaz2B < intuicionFugaz2B) {
                    botonIntuicionFugaz2B.disabled = false;
                }
                botonReaccionCazador3B.disabled = false;
                if (usosIntuicionFugaz3B < intuicionFugaz3B) {
                    botonIntuicionFugaz3B.disabled = false;
                }
                botonCalcularGanadorCazadores2.disabled = false;
            }  else {
                // TURNO PAR
                golpeadoCazador2A = true;
                if (usoIntercepcionA == false) {
                    participacionGolpeGolpeadoresA()
                } else {
                    if (numeroTurnoPar == 6 || numeroTurnoPar == 12 || numeroTurnoPar == 18 || numeroTurnoPar == 24 || numeroTurnoPar == 30 || numeroTurnoPar == 36) {
                        botonIniciarTurnoBuscador.disabled = false;
                    } else {
                        botonIniciarTurnoImpar.disabled = false;
                    }
                }
            }
        }
    }      
}

function lanzarEvasionCazador3A() {
    botonIntercepcionGolpeador1A.disabled = true;
    botonIntercepcionGolpeador2A.disabled = true;
    botonEvasionCazador1A.disabled = true;
    botonEvasionCazador2A.disabled = true;
    botonEvasionCazador3A.disabled = true;
    const min = 1;
    const max = 25;
    valorEvasionCazador3A = Math.floor(Math.random() * (max - min + 1)) + min;
    if (slothGripRollActivo == true) {
        slothGripRollActivo = false;
        if (valorEvasionCazador3A <= evasionCazador3A) {
            descripcion = `${cazador3A} de ${equipoA} ha realizado una evasión (${valorEvasionCazador3A}).`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                if (disparosRealizados1A < 5) {
                    botonReceptorPaseCazador1A.disabled = false;
                }
                if (disparosRealizados2A < 5) {
                    botonReceptorPaseCazador2A.disabled = false;
                }
                if (usosTiroLargo3A < tiroLargo3A) {
                    botonTiroLargo3A.disabled = false;
                } else if (usosDisparoConAmague3A < disparoConAmague3A) {
                    botonDisparoConAmague3A.disabled = false;
                } else if (disparosRealizados1A == 5 && disparosRealizados2A == 5) {
                    descripcion = `${cazador3A} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoB = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else {
                // TURNO PAR
                if (usoIntercepcionA == true) {
                    if (knuckleBallActivo == true) {
                        knuckleBallActivo = false;
                        disparoIncomodoCazadorGolpeadoA()
                    } else {
                        disparoIncomodo = true;
                        disparoIncomodoCazadorGolpeadoA()
                    }
                } else {
                    participacionGolpeGolpeadoresA()
                }
            }
        } else {
            descripcion = `${cazador3A} no ha evadido (${valorEvasionCazador3A}) la bludger y ha soltado la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                agilidadesA = [0, 0, 0]
                defensasA = [0, 0, 0]
                reaccionesA = [0, 0, 0]
                agilidadesB = [0, 0, 0]
                defensasB = [0, 0, 0]
                reaccionesB = [0, 0, 0]
                botonCalcularGanadorCazadores1.disabled = true;
                botonReaccionCazador1A.disabled = false;
                if (usosIntuicionFugaz1A < intuicionFugaz1A) {
                    botonIntuicionFugaz1A.disabled = false;
                }
                botonReaccionCazador2A.disabled = false;
                if (usosIntuicionFugaz2A < intuicionFugaz2A) {
                    botonIntuicionFugaz2A.disabled = false;
                }
                botonReaccionCazador3A.disabled = false;
                botonReaccionCazador1B.disabled = false;
                if (usosIntuicionFugaz1B < intuicionFugaz1B) {
                    botonIntuicionFugaz1B.disabled = false;
                }
                botonReaccionCazador2B.disabled = false;
                if (usosIntuicionFugaz2B < intuicionFugaz2B) {
                    botonIntuicionFugaz2B.disabled = false;
                }
                botonReaccionCazador3B.disabled = false;
                if (usosIntuicionFugaz3B < intuicionFugaz3B) {
                    botonIntuicionFugaz3B.disabled = false;
                }
                botonCalcularGanadorCazadores2.disabled = false;
            }  else {
                // TURNO PAR
                golpeadoCazador1A = true;
                if (usoIntercepcionA == false) {
                    participacionGolpeGolpeadoresA()
                } else {
                    if (numeroTurnoPar == 6 || numeroTurnoPar == 12 || numeroTurnoPar == 18 || numeroTurnoPar == 24 || numeroTurnoPar == 30 || numeroTurnoPar == 36) {
                        botonIniciarTurnoBuscador.disabled = false;
                    } else {
                        botonIniciarTurnoImpar.disabled = false;
                    }
                }
            }
        }
    } else if (golpeCriticoB == true) {
        golpeCriticoB = false;
        if (valorEvasionCazador3A <= 3) {
            descripcion = `${cazador3A} de ${equipoA} ha realizado una evasión perfecta (${valorEvasionCazador3A}).`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                if (disparosRealizados1A < 5) {
                    botonReceptorPaseCazador1A.disabled = false;
                }
                if (disparosRealizados2A < 5) {
                    botonReceptorPaseCazador2A.disabled = false;
                }
                if (usosTiroLargo3A < tiroLargo3A) {
                    botonTiroLargo3A.disabled = false;
                } else if (usosDisparoConAmague3A < disparoConAmague3A) {
                    botonDisparoConAmague3A.disabled = false;
                } else if (disparosRealizados1A == 5 && disparosRealizados2A == 5) {
                    descripcion = `${cazador3A} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoB = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else {
                // TURNO PAR
                if (usoIntercepcionA == true) {
                    if (knuckleBallActivo == true) {
                        knuckleBallActivo = false;
                        disparoIncomodoCazadorGolpeadoA()
                    } else {
                        disparoIncomodo = true;
                        disparoIncomodoCazadorGolpeadoA()
                    }
                } else {
                    participacionGolpeGolpeadoresA()
                }
            }
        } else {
            descripcion = `${cazador3A} no ha evadido (${valorEvasionCazador3A}) la bludger y ha soltado la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                agilidadesA = [0, 0, 0]
                defensasA = [0, 0, 0]
                reaccionesA = [0, 0, 0]
                agilidadesB = [0, 0, 0]
                defensasB = [0, 0, 0]
                reaccionesB = [0, 0, 0]
                botonCalcularGanadorCazadores1.disabled = true;
                botonReaccionCazador1A.disabled = false;
                if (usosIntuicionFugaz1A < intuicionFugaz1A) {
                    botonIntuicionFugaz1A.disabled = false;
                }
                botonReaccionCazador2A.disabled = false;
                if (usosIntuicionFugaz2A < intuicionFugaz2A) {
                    botonIntuicionFugaz2A.disabled = false;
                }
                botonReaccionCazador3A.disabled = false;
                botonReaccionCazador1B.disabled = false;
                if (usosIntuicionFugaz1B < intuicionFugaz1B) {
                    botonIntuicionFugaz1B.disabled = false;
                }
                botonReaccionCazador2B.disabled = false;
                if (usosIntuicionFugaz2B < intuicionFugaz2B) {
                    botonIntuicionFugaz2B.disabled = false;
                }
                botonReaccionCazador3B.disabled = false;
                if (usosIntuicionFugaz3B < intuicionFugaz3B) {
                    botonIntuicionFugaz3B.disabled = false;
                }
                botonCalcularGanadorCazadores2.disabled = false;
            }  else {
                // TURNO PAR
                golpeadoCazador3A = true;
                if (numeroTurnoPar == 6 || numeroTurnoPar == 12 || numeroTurnoPar == 18 || numeroTurnoPar == 24 || numeroTurnoPar == 30 || numeroTurnoPar == 36) {
                    botonIniciarTurnoBuscador.disabled = false;
                } else {
                    botonIniciarTurnoImpar.disabled = false;
                }
            }
        }
    } else if (presionEfectiva == true) {
        presionEfectiva = false;
        if (valorEvasionCazador3A <= evasionCazador3A) {
            descripcion = `${cazador3A} ha evadido (${valorEvasionCazador3A}) la presión de ${guardianB}.`;
            mostrarDescripcionTurno(descripcion);
            disparoIncomodo = true;
            botonDisparoCazador3A.disabled = false;
            habilidadesDisparoCazador3A()
        } else {
            descripcion = `${cazador3A} no evade (${valorEvasionCazador3A}) la presión de ${guardianB}.`;
            mostrarDescripcionTurno(descripcion);
            disparoIncomodo = true;
            disparoDebil = true;
            botonDisparoCazador3A.disabled = false;
            habilidadesDisparoCazador3A()
        }
    } else {
        if (valorEvasionCazador3A <= evasionCazador3A) {
            descripcion = `${cazador3A} de ${equipoA} ha realizado una evasión (${valorEvasionCazador3A}).`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                if (disparosRealizados1A < 5) {
                    botonReceptorPaseCazador1A.disabled = false;
                }
                if (disparosRealizados2A < 5) {
                    botonReceptorPaseCazador2A.disabled = false;
                }
                if (usosTiroLargo3A < tiroLargo3A) {
                    botonTiroLargo3A.disabled = false;
                } else if (usosDisparoConAmague3A < disparoConAmague3A) {
                    botonDisparoConAmague3A.disabled = false;
                } else if (disparosRealizados1A == 5 && disparosRealizados2A == 5) {
                    descripcion = `${cazador3A} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoB = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else {
                // TURNO PAR
                if (usoIntercepcionA == true) {
                    if (knuckleBallActivo == true) {
                        knuckleBallActivo = false;
                        disparoIncomodoCazadorGolpeadoA()
                    } else {
                        disparoIncomodo = true;
                        disparoIncomodoCazadorGolpeadoA()
                    }
                } else {
                    participacionGolpeGolpeadoresA()
                }
            }
        } else {
            descripcion = `${cazador3A} no ha evadido (${valorEvasionCazador3A}) la bludger y ha soltado la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                agilidadesA = [0, 0, 0]
                defensasA = [0, 0, 0]
                reaccionesA = [0, 0, 0]
                agilidadesB = [0, 0, 0]
                defensasB = [0, 0, 0]
                reaccionesB = [0, 0, 0]
                botonCalcularGanadorCazadores1.disabled = true;
                botonReaccionCazador1A.disabled = false;
                if (usosIntuicionFugaz1A < intuicionFugaz1A) {
                    botonIntuicionFugaz1A.disabled = false;
                }
                botonReaccionCazador2A.disabled = false;
                if (usosIntuicionFugaz2A < intuicionFugaz2A) {
                    botonIntuicionFugaz2A.disabled = false;
                }
                botonReaccionCazador3A.disabled = false;
                botonReaccionCazador1B.disabled = false;
                if (usosIntuicionFugaz1B < intuicionFugaz1B) {
                    botonIntuicionFugaz1B.disabled = false;
                }
                botonReaccionCazador2B.disabled = false;
                if (usosIntuicionFugaz2B < intuicionFugaz2B) {
                    botonIntuicionFugaz2B.disabled = false;
                }
                botonReaccionCazador3B.disabled = false;
                if (usosIntuicionFugaz3B < intuicionFugaz3B) {
                    botonIntuicionFugaz3B.disabled = false;
                }
                botonCalcularGanadorCazadores2.disabled = false;
            }  else {
                // TURNO PAR
                golpeadoCazador1A = true;
                if (usoIntercepcionA == false) {
                    participacionGolpeGolpeadoresA()
                } else {
                    if (numeroTurnoPar == 6 || numeroTurnoPar == 12 || numeroTurnoPar == 18 || numeroTurnoPar == 24 || numeroTurnoPar == 30 || numeroTurnoPar == 36) {
                        botonIniciarTurnoBuscador.disabled = false;
                    } else {
                        botonIniciarTurnoImpar.disabled = false;
                    }
                }
            }
        }
    }      
}

function lanzarEvasionCazador1B() {
    botonIntercepcionGolpeador1B.disabled = true;
    botonIntercepcionGolpeador2B.disabled = true;
    botonEvasionCazador1B.disabled = true;
    botonEvasionCazador2B.disabled = true;
    botonEvasionCazador3B.disabled = true;
    const min = 1;
    const max = 25;
    valorEvasionCazador1B = Math.floor(Math.random() * (max - min + 1)) + min;
    if (slothGripRollActivo == true) {
        slothGripRollActivo = false
        if (valorEvasionCazador1B <= evasionCazador1B) {
            descripcion = `${cazador1B} ha evadido (${valorEvasionCazador1B}) la bludger.`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                if (disparosRealizados2B < 5) {
                    botonReceptorPaseCazador2B.disabled = false;
                }
                if (disparosRealizados3B < 5) {
                    botonReceptorPaseCazador3B.disabled = false;
                }
                if (usosTiroLargo1B < tiroLargo1B) {
                    botonTiroLargo1B.disabled = false;
                } else if (usosDisparoConAmague1B < disparoConAmague1B) {
                    botonDisparoConAmague1B.disabled = false;
                } else if (disparosRealizados2B == 5 && disparosRealizados3B == 5) {
                    descripcion = `${cazador1B} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoA = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else {
                // TURNO PAR
                if (usoIntercepcionB == true) {
                    if (knuckleBallActivo == true) {
                        knuckleBallActivo = false;
                        disparoIncomodoCazadorGolpeadoB()
                    } else {
                        disparoIncomodo = true;
                        disparoIncomodoCazadorGolpeadoB()
                    }
                } else {
                    participacionGolpeGolpeadoresB()
                }
            }
        } else {
            descripcion = `${cazador1B} no ha evadido (${valorEvasionCazador1B}) la bludger y ha soltado la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                agilidadesA = [0, 0, 0]
                defensasA = [0, 0, 0]
                reaccionesA = [0, 0, 0]
                agilidadesB = [0, 0, 0]
                defensasB = [0, 0, 0]
                reaccionesB = [0, 0, 0]
                botonCalcularGanadorCazadores1.disabled = true;
                botonReaccionCazador1A.disabled = false;
                if (usosIntuicionFugaz1A < intuicionFugaz1A) {
                    botonIntuicionFugaz1A.disabled = false;
                }
                botonReaccionCazador2A.disabled = false;
                if (usosIntuicionFugaz2A < intuicionFugaz2A) {
                    botonIntuicionFugaz2A.disabled = false;
                }
                botonReaccionCazador3A.disabled = false;
                if (usosIntuicionFugaz3A < intuicionFugaz3A) {
                    botonIntuicionFugaz3A.disabled = false;
                }
                botonReaccionCazador1B.disabled = true;
                botonReaccionCazador2B.disabled = false;
                if (usosIntuicionFugaz2B < intuicionFugaz2B) {
                    botonIntuicionFugaz2B.disabled = false;
                }
                botonReaccionCazador3B.disabled = false;
                if (usosIntuicionFugaz3B < intuicionFugaz3B) {
                    botonIntuicionFugaz3B.disabled = false;
                }
                botonCalcularGanadorCazadores2.disabled = false;
            }  else {
                // TURNO PAR
                golpeadoCazador1B = true;
                if (usoIntercepcionB == false) {
                    participacionGolpeGolpeadoresB()
                } else {
                    if (numeroTurnoPar == 6 || numeroTurnoPar == 12 || numeroTurnoPar == 18 || numeroTurnoPar == 24 || numeroTurnoPar == 30 || numeroTurnoPar == 36) {
                        botonIniciarTurnoBuscador.disabled = false;
                    } else {
                        botonIniciarTurnoImpar.disabled = false;
                    }
                }
            }
        }
    } else if (golpeCriticoA == true) {
        golpeCriticoA = false;
        if (valorEvasionCazador1B <= 3) {
            descripcion = `${cazador1B} de ${equipoB} ha realizado una evasión perfecta (${valorEvasionCazador1B}).`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                if (disparosRealizados2B < 5) {
                    botonReceptorPaseCazador2B.disabled = false;
                }
                if (disparosRealizados3B < 5) {
                    botonReceptorPaseCazador3B.disabled = false;
                }
                if (usosTiroLargo1B < tiroLargo1B) {
                    botonTiroLargo1B.disabled = false;
                } else if (usosDisparoConAmague1B < disparoConAmague1B) {
                    botonDisparoConAmague1B.disabled = false;
                } else if (disparosRealizados2B == 5 && disparosRealizados3B == 5) {
                    descripcion = `${cazador1B} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoA = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else {
                // TURNO PAR
                if (usoIntercepcionB == true) {
                    if (knuckleBallActivo == true) {
                        knuckleBallActivo = false;
                        disparoIncomodoCazadorGolpeadoB()
                    } else {
                        disparoIncomodo = true;
                        disparoIncomodoCazadorGolpeadoB()
                    }
                } else {
                    participacionGolpeGolpeadoresB()
                }
            }
        } else {
            descripcion = `${cazador1B} no ha evadido (${valorEvasionCazador1B}) la bludger y ha soltado la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                agilidadesA = [0, 0, 0]
                defensasA = [0, 0, 0]
                reaccionesA = [0, 0, 0]
                agilidadesB = [0, 0, 0]
                defensasB = [0, 0, 0]
                reaccionesB = [0, 0, 0]
                botonCalcularGanadorCazadores1.disabled = true;
                botonReaccionCazador1A.disabled = false;
                if (usosIntuicionFugaz1A < intuicionFugaz1A) {
                    botonIntuicionFugaz1A.disabled = false;
                }
                botonReaccionCazador2A.disabled = false;
                if (usosIntuicionFugaz2A < intuicionFugaz2A) {
                    botonIntuicionFugaz2A.disabled = false;
                }
                botonReaccionCazador3A.disabled = false;
                if (usosIntuicionFugaz3A < intuicionFugaz3A) {
                    botonIntuicionFugaz3A.disabled = false;
                }
                botonReaccionCazador1B.disabled = true;
                botonReaccionCazador2B.disabled = false;
                if (usosIntuicionFugaz2B < intuicionFugaz2B) {
                    botonIntuicionFugaz2B.disabled = false;
                }
                botonReaccionCazador3B.disabled = false;
                if (usosIntuicionFugaz3B < intuicionFugaz3B) {
                    botonIntuicionFugaz3B.disabled = false;
                }
                botonCalcularGanadorCazadores2.disabled = false;
            }  else {
                // TURNO PAR
                golpeadoCazador1B = true;
                if (numeroTurnoPar == 6 || numeroTurnoPar == 12 || numeroTurnoPar == 18 || numeroTurnoPar == 24 || numeroTurnoPar == 30 || numeroTurnoPar == 36) {
                    botonIniciarTurnoBuscador.disabled = false;
                } else {
                    botonIniciarTurnoImpar.disabled = false;
                }
            }
        }
    } else if (presionEfectiva == true) {
        presionEfectiva = false;
        if (valorEvasionCazador1B <= evasionCazador1B) {
            descripcion = `${cazador1B} ha evadido (${valorEvasionCazador1B}) la presión de ${guardianA}.`;
            mostrarDescripcionTurno(descripcion);
            disparoIncomodo = true;
            botonDisparoCazador1B.disabled = false;
            habilidadesDisparoCazador1B()
        } else {
            descripcion = `${cazador1B} no evade (${valorEvasionCazador1B}) la presión de ${guardianA}.`;
            mostrarDescripcionTurno(descripcion);
            disparoIncomodo = true;
            disparoDebil = true;
            botonDisparoCazador1B.disabled = false;
            habilidadesDisparoCazador1B()
        }
    } else {
        if (valorEvasionCazador1B <= evasionCazador1B) {
            descripcion = `${cazador1B} ha evadido (${valorEvasionCazador1B}) la bludger.`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                if (disparosRealizados2B < 5) {
                    botonReceptorPaseCazador2B.disabled = false;
                }
                if (disparosRealizados3B < 5) {
                    botonReceptorPaseCazador3B.disabled = false;
                }
                if (usosTiroLargo1B < tiroLargo1B) {
                    botonTiroLargo1B.disabled = false;
                } else if (usosDisparoConAmague1B < disparoConAmague1B) {
                    botonDisparoConAmague1B.disabled = false;
                } else if (disparosRealizados2B == 5 && disparosRealizados3B == 5) {
                    descripcion = `${cazador1B} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoA = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else {
                // TURNO PAR
                if (usoIntercepcionB == true) {
                    if (knuckleBallActivo == true) {
                        knuckleBallActivo = false;
                        disparoIncomodoCazadorGolpeadoB()
                    } else {
                        disparoIncomodo = true;
                        disparoIncomodoCazadorGolpeadoB()
                    }
                } else {
                    participacionGolpeGolpeadoresB()
                }
            }
        } else {
            descripcion = `${cazador1B} no ha evadido (${valorEvasionCazador1B}) la bludger y ha soltado la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                agilidadesA = [0, 0, 0]
                defensasA = [0, 0, 0]
                reaccionesA = [0, 0, 0]
                agilidadesB = [0, 0, 0]
                defensasB = [0, 0, 0]
                reaccionesB = [0, 0, 0]
                botonCalcularGanadorCazadores1.disabled = true;
                botonReaccionCazador1A.disabled = false;
                if (usosIntuicionFugaz1A < intuicionFugaz1A) {
                    botonIntuicionFugaz1A.disabled = false;
                }
                botonReaccionCazador2A.disabled = false;
                if (usosIntuicionFugaz2A < intuicionFugaz2A) {
                    botonIntuicionFugaz2A.disabled = false;
                }
                botonReaccionCazador3A.disabled = false;
                if (usosIntuicionFugaz3A < intuicionFugaz3A) {
                    botonIntuicionFugaz3A.disabled = false;
                }
                botonReaccionCazador1B.disabled = true;
                botonReaccionCazador2B.disabled = false;
                if (usosIntuicionFugaz2B < intuicionFugaz2B) {
                    botonIntuicionFugaz2B.disabled = false;
                }
                botonReaccionCazador3B.disabled = false;
                if (usosIntuicionFugaz3B < intuicionFugaz3B) {
                    botonIntuicionFugaz3B.disabled = false;
                }
                botonCalcularGanadorCazadores2.disabled = false;
            }  else {
                // TURNO PAR
                golpeadoCazador1B = true;
                if (usoIntercepcionB == false) {
                    participacionGolpeGolpeadoresB()
                } else {
                    if (numeroTurnoPar == 6 || numeroTurnoPar == 12 || numeroTurnoPar == 18 || numeroTurnoPar == 24 || numeroTurnoPar == 30 || numeroTurnoPar == 36) {
                        botonIniciarTurnoBuscador.disabled = false;
                    } else {
                        botonIniciarTurnoImpar.disabled = false;
                    }
                }
            }
        }
    }      
}

function lanzarEvasionCazador2B() {
    botonIntercepcionGolpeador1B.disabled = true;
    botonIntercepcionGolpeador2B.disabled = true;
    botonEvasionCazador1B.disabled = true;
    botonEvasionCazador2B.disabled = true;
    botonEvasionCazador3B.disabled = true;
    const min = 1;
    const max = 25;
    valorEvasionCazador2B = Math.floor(Math.random() * (max - min + 1)) + min;
    if (slothGripRollActivo == true) {
        slothGripRollActivo = false;
        if (valorEvasionCazador2B <= evasionCazador2B) {
            descripcion = `${cazador2B} de ${equipoB} ha realizado una evasión (${valorEvasionCazador2B}).`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                if (disparosRealizados1B < 5) {
                    botonReceptorPaseCazador1B.disabled = false;
                }
                if (disparosRealizados3B < 5) {
                    botonReceptorPaseCazador3B.disabled = false;
                }
                if (usosTiroLargo2B < tiroLargo2B) {
                    botonTiroLargo2B.disabled = false;
                } else if (usosDisparoConAmague2B < disparoConAmague2B) {
                    botonDisparoConAmague2B.disabled = false;
                } else if (disparosRealizados1B == 5 && disparosRealizados3B == 5) {
                    descripcion = `${cazador2B} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoA = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else {
                // TURNO PAR
                if (usoIntercepcionB == true) {
                    if (knuckleBallActivo == true) {
                        knuckleBallActivo = false;
                        disparoIncomodoCazadorGolpeadoB()
                    } else {
                        disparoIncomodo = true;
                        disparoIncomodoCazadorGolpeadoB()
                    }
                } else {
                    participacionGolpeGolpeadoresB()
                }
            }
        } else {
            descripcion = `${cazador2B} no ha evadido (${valorEvasionCazador2B}) la bludger y ha soltado la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                agilidadesA = [0, 0, 0]
                defensasA = [0, 0, 0]
                reaccionesA = [0, 0, 0]
                agilidadesB = [0, 0, 0]
                defensasB = [0, 0, 0]
                reaccionesB = [0, 0, 0]
                botonCalcularGanadorCazadores1.disabled = true;
                botonReaccionCazador1A.disabled = false;
                if (usosIntuicionFugaz1A < intuicionFugaz1A) {
                    botonIntuicionFugaz1A.disabled = false;
                }
                botonReaccionCazador2A.disabled = false;
                if (usosIntuicionFugaz2A < intuicionFugaz2A) {
                    botonIntuicionFugaz2A.disabled = false;
                }
                botonReaccionCazador3A.disabled = false;
                if (usosIntuicionFugaz3A < intuicionFugaz3A) {
                    botonIntuicionFugaz3A.disabled = false;
                }
                botonReaccionCazador1B.disabled = false;
                if (usosIntuicionFugaz1B < intuicionFugaz1B) {
                    botonIntuicionFugaz1B.disabled = false;
                }
                botonReaccionCazador2B.disabled = true;
                botonReaccionCazador3B.disabled = false;
                if (usosIntuicionFugaz3B < intuicionFugaz3B) {
                    botonIntuicionFugaz3B.disabled = false;
                }
                botonCalcularGanadorCazadores2.disabled = false;
            }  else {
                // TURNO PAR
                golpeadoCazador2B = true;
                if (usoIntercepcionB == false) {
                    participacionGolpeGolpeadoresB()
                } else {
                    if (numeroTurnoPar == 6 || numeroTurnoPar == 12 || numeroTurnoPar == 18 || numeroTurnoPar == 24 || numeroTurnoPar == 30 || numeroTurnoPar == 36) {
                        botonIniciarTurnoBuscador.disabled = false;
                    } else {
                        botonIniciarTurnoImpar.disabled = false;
                    }
                }
            }
        }
    }
    else if (golpeCriticoA == true) {
        golpeCriticoA = false;
        if (valorEvasionCazador2B <= 3) {
            descripcion = `${cazador2B} de ${equipoB} ha realizado una evasión perfecta (${valorEvasionCazador2B}).`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                if (disparosRealizados1B < 5) {
                    botonReceptorPaseCazador1B.disabled = false;
                }
                if (disparosRealizados3B < 5) {
                    botonReceptorPaseCazador3B.disabled = false;
                }
                if (usosTiroLargo2B < tiroLargo2B) {
                    botonTiroLargo2B.disabled = false;
                } else if (usosDisparoConAmague2B < disparoConAmague2B) {
                    botonDisparoConAmague2B.disabled = false;
                } else if (disparosRealizados1B == 5 && disparosRealizados3B == 5) {
                    descripcion = `${cazador2B} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoA = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else {
                // TURNO PAR
                if (usoIntercepcionB == true) {
                    if (knuckleBallActivo == true) {
                        knuckleBallActivo = false;
                        disparoIncomodoCazadorGolpeadoB()
                    } else {
                        disparoIncomodo = true;
                        disparoIncomodoCazadorGolpeadoB()
                    }
                } else {
                    participacionGolpeGolpeadoresB()
                }
            }
        } else {
            descripcion = `${cazador2B} ha sido golpeado (${valorEvasionCazador2B}) y ha soltado la bludger.`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                agilidadesA = [0, 0, 0]
                defensasA = [0, 0, 0]
                reaccionesA = [0, 0, 0]
                agilidadesB = [0, 0, 0]
                defensasB = [0, 0, 0]
                reaccionesB = [0, 0, 0]
                botonCalcularGanadorCazadores1.disabled = true;
                botonReaccionCazador1A.disabled = false;
                if (usosIntuicionFugaz1A < intuicionFugaz1A) {
                    botonIntuicionFugaz1A.disabled = false;
                }
                botonReaccionCazador2A.disabled = false;
                if (usosIntuicionFugaz2A < intuicionFugaz2A) {
                    botonIntuicionFugaz2A.disabled = false;
                }
                botonReaccionCazador3A.disabled = false;
                if (usosIntuicionFugaz3A < intuicionFugaz3A) {
                    botonIntuicionFugaz3A.disabled = false;
                }
                botonReaccionCazador1B.disabled = false;
                if (usosIntuicionFugaz1B < intuicionFugaz1B) {
                    botonIntuicionFugaz1B.disabled = false;
                }
                botonReaccionCazador2B.disabled = true;
                botonReaccionCazador3B.disabled = false;
                if (usosIntuicionFugaz3B < intuicionFugaz3B) {
                    botonIntuicionFugaz3B.disabled = false;
                }
                botonCalcularGanadorCazadores2.disabled = false;
            }  else {
                // TURNO PAR
                golpeadoCazador2B = true;
                if (numeroTurnoPar == 6 || numeroTurnoPar == 12 || numeroTurnoPar == 18 || numeroTurnoPar == 24 || numeroTurnoPar == 30 || numeroTurnoPar == 36) {
                    botonIniciarTurnoBuscador.disabled = false;
                } else {
                    botonIniciarTurnoImpar.disabled = false;
                }
            }
        }
    } else if (presionEfectiva == true) {
        presionEfectiva = false;
        if (valorEvasionCazador2B <= evasionCazador2B) {
            descripcion = `${cazador2B} ha evadido (${valorEvasionCazador2B}) la presión de ${guardianA}.`;
            mostrarDescripcionTurno(descripcion);
            disparoIncomodo = true;
            botonDisparoCazador2B.disabled = false;
            habilidadesDisparoCazador2B()
        } else {
            descripcion = `${cazador2B} no evade (${valorEvasionCazador2B}) la presión de ${guardianA}.`;
            mostrarDescripcionTurno(descripcion);
            disparoIncomodo = true;
            disparoDebil = true;
            botonDisparoCazador2B.disabled = false;
            habilidadesDisparoCazador2B()
        }
    } else {
        if (valorEvasionCazador2B <= evasionCazador2B) {
            descripcion = `${cazador2B} de ${equipoB} ha realizado una evasión (${valorEvasionCazador2B}).`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                if (disparosRealizados1B < 5) {
                    botonReceptorPaseCazador1B.disabled = false;
                }
                if (disparosRealizados3B < 5) {
                    botonReceptorPaseCazador3B.disabled = false;
                }
                if (usosTiroLargo2B < tiroLargo2B) {
                    botonTiroLargo2B.disabled = false;
                } else if (usosDisparoConAmague2B < disparoConAmague2B) {
                    botonDisparoConAmague2B.disabled = false;
                } else if (disparosRealizados1B == 5 && disparosRealizados3B == 5) {
                    descripcion = `${cazador2B} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoA = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else {
                // TURNO PAR
                if (usoIntercepcionB == true) {
                    if (knuckleBallActivo == true) {
                        knuckleBallActivo = false;
                        disparoIncomodoCazadorGolpeadoB()
                    } else {
                        disparoIncomodo = true;
                        disparoIncomodoCazadorGolpeadoB()
                    }
                } else {
                    participacionGolpeGolpeadoresB()
                }
            }
        } else {
            descripcion = `${cazador2B} no ha evadido (${valorEvasionCazador2B}) la bludger y ha soltado la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                agilidadesA = [0, 0, 0]
                defensasA = [0, 0, 0]
                reaccionesA = [0, 0, 0]
                agilidadesB = [0, 0, 0]
                defensasB = [0, 0, 0]
                reaccionesB = [0, 0, 0]
                botonCalcularGanadorCazadores1.disabled = true;
                botonReaccionCazador1A.disabled = false;
                if (usosIntuicionFugaz1A < intuicionFugaz1A) {
                    botonIntuicionFugaz1A.disabled = false;
                }
                botonReaccionCazador2A.disabled = false;
                if (usosIntuicionFugaz2A < intuicionFugaz2A) {
                    botonIntuicionFugaz2A.disabled = false;
                }
                botonReaccionCazador3A.disabled = false;
                if (usosIntuicionFugaz3A < intuicionFugaz3A) {
                    botonIntuicionFugaz3A.disabled = false;
                }
                botonReaccionCazador1B.disabled = false;
                if (usosIntuicionFugaz1B < intuicionFugaz1B) {
                    botonIntuicionFugaz1B.disabled = false;
                }
                botonReaccionCazador2B.disabled = true;
                botonReaccionCazador3B.disabled = false;
                if (usosIntuicionFugaz3B < intuicionFugaz3B) {
                    botonIntuicionFugaz3B.disabled = false;
                }
                botonCalcularGanadorCazadores2.disabled = false;
            }  else {
                // TURNO PAR
                golpeadoCazador2B = true;
                if (usoIntercepcionB == false) {
                    participacionGolpeGolpeadoresB()
                } else {
                    if (numeroTurnoPar == 6 || numeroTurnoPar == 12 || numeroTurnoPar == 18 || numeroTurnoPar == 24 || numeroTurnoPar == 30 || numeroTurnoPar == 36) {
                        botonIniciarTurnoBuscador.disabled = false;
                    } else {
                        botonIniciarTurnoImpar.disabled = false;
                    }
                }
            }
        }
    }      
}

function lanzarEvasionCazador3B() {
    botonIntercepcionGolpeador1B.disabled = true;
    botonIntercepcionGolpeador2B.disabled = true;
    botonEvasionCazador1B.disabled = true;
    botonEvasionCazador2B.disabled = true;
    botonEvasionCazador3B.disabled = true;
    const min = 1;
    const max = 25;
    valorEvasionCazador3B = Math.floor(Math.random() * (max - min + 1)) + min;
    if (slothGripRollActivo == true) {
        slothGripRollActivo = false;
        if (valorEvasionCazador3B <= evasionCazador3B) {
            descripcion = `${cazador3B} de ${equipoB} ha realizado una evasión (${valorEvasionCazador3B}).`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                if (disparosRealizados1B < 5) {
                    botonReceptorPaseCazador1B.disabled = false;
                }
                if (disparosRealizados2B < 5) {
                    botonReceptorPaseCazador2B.disabled = false;
                }
                if (usosTiroLargo3B < tiroLargo3B) {
                    botonTiroLargo3B.disabled = false;
                } else if (usosDisparoConAmague3B < disparoConAmague3B) {
                    botonDisparoConAmague3B.disabled = false;
                } else if (disparosRealizados1B == 5 && disparosRealizados2B == 5) {
                    descripcion = `${cazador3B} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoA = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else {
                // TURNO PAR
                if (usoIntercepcionB == true) {
                    if (knuckleBallActivo == true) {
                        knuckleBallActivo = false;
                        disparoIncomodoCazadorGolpeadoB()
                    } else {
                        disparoIncomodo = true;
                        disparoIncomodoCazadorGolpeadoB()
                    }
                } else {
                    participacionGolpeGolpeadoresB()
                }
            }
        } else {
            descripcion = `${cazador3B} no ha evadido (${valorEvasionCazador3B}) la bludger y ha soltado la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                agilidadesA = [0, 0, 0]
                defensasA = [0, 0, 0]
                reaccionesA = [0, 0, 0]
                agilidadesB = [0, 0, 0]
                defensasB = [0, 0, 0]
                reaccionesB = [0, 0, 0]
                botonCalcularGanadorCazadores1.disabled = true;
                botonReaccionCazador1A.disabled = false;
                if (usosIntuicionFugaz1A < intuicionFugaz1A) {
                    botonIntuicionFugaz1A.disabled = false;
                }
                botonReaccionCazador2A.disabled = false;
                if (usosIntuicionFugaz2A < intuicionFugaz2A) {
                    botonIntuicionFugaz2A.disabled = false;
                }
                botonReaccionCazador3A.disabled = false;
                if (usosIntuicionFugaz3A < intuicionFugaz3A) {
                    botonIntuicionFugaz3A.disabled = false;
                }
                botonReaccionCazador1B.disabled = false;
                if (usosIntuicionFugaz1B < intuicionFugaz1B) {
                    botonIntuicionFugaz1B.disabled = false;
                }
                botonReaccionCazador2B.disabled = false;
                if (usosIntuicionFugaz2B < intuicionFugaz2B) {
                    botonIntuicionFugaz2B.disabled = false;
                }
                botonReaccionCazador3B.disabled = true;
                botonCalcularGanadorCazadores2.disabled = false;
            }  else {
                // TURNO PAR
                golpeadoCazador3B = true;
                if (usoIntercepcionB == false) {
                    participacionGolpeGolpeadoresB()
                } else {
                    if (numeroTurnoPar == 6 || numeroTurnoPar == 12 || numeroTurnoPar == 18 || numeroTurnoPar == 24 || numeroTurnoPar == 30 || numeroTurnoPar == 36) {
                        botonIniciarTurnoBuscador.disabled = false;
                    } else {
                        botonIniciarTurnoImpar.disabled = false;
                    }
                }
            }
        }
    } else if (golpeCriticoA == true) {
        golpeCriticoA = false;
        if (valorEvasionCazador3B <= 3) {
            descripcion = `${cazador3B} de ${equipoB} ha realizado una evasión perfecta (${valorEvasionCazador3B}).`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                if (disparosRealizados1B < 5) {
                    botonReceptorPaseCazador1B.disabled = false;
                }
                if (disparosRealizados2B < 5) {
                    botonReceptorPaseCazador2B.disabled = false;
                }
                if (usosTiroLargo3B < tiroLargo3B) {
                    botonTiroLargo3B.disabled = false;
                } else if (usosDisparoConAmague3B < disparoConAmague3B) {
                    botonDisparoConAmague3B.disabled = false;
                } else if (disparosRealizados1B == 5 && disparosRealizados2B == 5) {
                    descripcion = `${cazador3B} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoA = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else {
                // TURNO PAR
                if (usoIntercepcionB == true) {
                    if (knuckleBallActivo == true) {
                        knuckleBallActivo = false;
                        disparoIncomodoCazadorGolpeadoB()
                    } else {
                        disparoIncomodo = true;
                        disparoIncomodoCazadorGolpeadoB()
                    }
                } else {
                    participacionGolpeGolpeadoresB()
                }
            }
        } else {
            descripcion = `${cazador3B} ha sido golpeado (${valorEvasionCazador3B}) y ha soltado la bludger.`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                agilidadesA = [0, 0, 0]
                defensasA = [0, 0, 0]
                reaccionesA = [0, 0, 0]
                agilidadesB = [0, 0, 0]
                defensasB = [0, 0, 0]
                reaccionesB = [0, 0, 0]
                botonCalcularGanadorCazadores1.disabled = true;
                botonReaccionCazador1A.disabled = false;
                if (usosIntuicionFugaz1A < intuicionFugaz1A) {
                    botonIntuicionFugaz1A.disabled = false;
                }
                botonReaccionCazador2A.disabled = false;
                if (usosIntuicionFugaz2A < intuicionFugaz2A) {
                    botonIntuicionFugaz2A.disabled = false;
                }
                botonReaccionCazador3A.disabled = false;
                if (usosIntuicionFugaz3A < intuicionFugaz3A) {
                    botonIntuicionFugaz3A.disabled = false;
                }
                botonReaccionCazador1B.disabled = false;
                if (usosIntuicionFugaz1B < intuicionFugaz1B) {
                    botonIntuicionFugaz1B.disabled = false;
                }
                botonReaccionCazador2B.disabled = false;
                if (usosIntuicionFugaz2B < intuicionFugaz2B) {
                    botonIntuicionFugaz2B.disabled = false;
                }
                botonReaccionCazador3B.disabled = true;
                botonCalcularGanadorCazadores2.disabled = false;
            }  else {
                // TURNO PAR
                golpeadoCazador3B = true;
                if (numeroTurnoPar == 6 || numeroTurnoPar == 12 || numeroTurnoPar == 18 || numeroTurnoPar == 24 || numeroTurnoPar == 30 || numeroTurnoPar == 36) {
                    botonIniciarTurnoBuscador.disabled = false;
                } else {
                    botonIniciarTurnoImpar.disabled = false;
                }
            }
        }
    } else if (presionEfectiva == true) {
        presionEfectiva = false;
        if (valorEvasionCazador3B <= evasionCazador3B) {
            descripcion = `${cazador3B} ha evadido (${valorEvasionCazador3B}) la presión de ${guardianA}.`;
            mostrarDescripcionTurno(descripcion);
            disparoIncomodo = true;
            botonDisparoCazador3B.disabled = false;
            habilidadesDisparoCazador3B()
        } else {
            descripcion = `${cazador3B} no ha evadido (${valorEvasionCazador3B}) la presión de ${guardianA}.`;
            mostrarDescripcionTurno(descripcion);
            disparoIncomodo = true;
            disparoDebil = true;
            botonDisparoCazador3B.disabled = false;
            habilidadesDisparoCazador3B()
        }
    } else {
        if (valorEvasionCazador3B <= evasionCazador3B) {
            descripcion = `${cazador3B} de ${equipoB} ha realizado una evasión (${valorEvasionCazador3B}).`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                if (disparosRealizados1B < 5) {
                    botonReceptorPaseCazador1B.disabled = false;
                }
                if (disparosRealizados2B < 5) {
                    botonReceptorPaseCazador2B.disabled = false;
                }
                if (usosTiroLargo3B < tiroLargo3B) {
                    botonTiroLargo3B.disabled = false;
                } else if (usosDisparoConAmague3B < disparoConAmague3B) {
                    botonDisparoConAmague3B.disabled = false;
                } else if (disparosRealizados1B == 5 && disparosRealizados2B == 5) {
                    descripcion = `${cazador3B} se demora con la quaffle en sus manos y el rival se la quita.`;
                    mostrarDescripcionTurno(descripcion);
                    numeroTurnoPar += 2;
                    posesionEquipoA = true;
                    botonIniciarTurnoImpar.disabled = false;
                }
            } else {
                // TURNO PAR
                if (usoIntercepcionB == true) {
                    if (knuckleBallActivo == true) {
                        knuckleBallActivo = false;
                        disparoIncomodoCazadorGolpeadoB()
                    } else {
                        disparoIncomodo = true;
                        disparoIncomodoCazadorGolpeadoB()
                    }
                } else {
                    participacionGolpeGolpeadoresB()
                }
            }
        } else {
            descripcion = `${cazador3B} no ha evadido (${valorEvasionCazador3B}) la bludger y ha soltado la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            if (turnoImpar == true) {
                agilidadesA = [0, 0, 0]
                defensasA = [0, 0, 0]
                reaccionesA = [0, 0, 0]
                agilidadesB = [0, 0, 0]
                defensasB = [0, 0, 0]
                reaccionesB = [0, 0, 0]
                botonCalcularGanadorCazadores1.disabled = true;
                botonReaccionCazador1A.disabled = false;
                if (usosIntuicionFugaz1A < intuicionFugaz1A) {
                    botonIntuicionFugaz1A.disabled = false;
                }
                botonReaccionCazador2A.disabled = false;
                if (usosIntuicionFugaz2A < intuicionFugaz2A) {
                    botonIntuicionFugaz2A.disabled = false;
                }
                botonReaccionCazador3A.disabled = false;
                if (usosIntuicionFugaz3A < intuicionFugaz3A) {
                    botonIntuicionFugaz3A.disabled = false;
                }
                botonReaccionCazador1B.disabled = false;
                if (usosIntuicionFugaz1B < intuicionFugaz1B) {
                    botonIntuicionFugaz1B.disabled = false;
                }
                botonReaccionCazador2B.disabled = false;
                if (usosIntuicionFugaz2B < intuicionFugaz2B) {
                    botonIntuicionFugaz2B.disabled = false;
                }
                botonReaccionCazador3B.disabled = true;
                botonCalcularGanadorCazadores2.disabled = false;
            }  else {
                // TURNO PAR
                golpeadoCazador3B = true;
                if (usoIntercepcionB == false) {
                    participacionGolpeGolpeadoresB()
                } else {
                    if (numeroTurnoPar == 6 || numeroTurnoPar == 12 || numeroTurnoPar == 18 || numeroTurnoPar == 24 || numeroTurnoPar == 30 || numeroTurnoPar == 36) {
                        botonIniciarTurnoBuscador.disabled = false;
                    } else {
                        botonIniciarTurnoImpar.disabled = false;
                    }
                }
            }
        }
    }      
}

function calcularGanadorCazadores1() {
    botonCalcularGanadorCazadores1.disabled = true;
    if (posesionEquipoA == true) {
        posesionEquipoA = false;
        agilidadMaximaEquipoA()
        defensaMaximaEquipoB()
        if (maxAgilidadA > maxDefensaB) {
            descripcion = `La agilidad ${maxAgilidadA} de ${equipoA} ganó el turno impar.`;
            mostrarDescripcionTurno(descripcion);
            participacionGolpeGolpeadoresB()
        } else if (maxAgilidadA < maxDefensaB) {
            descripcion = `La defensa ${maxDefensaB} de ${equipoB} ganó el turno impar.`;
            mostrarDescripcionTurno(descripcion);
            participacionGolpeGolpeadoresA()
        } else {
            descripcion = `Hubo empate, por lo tanto, la agilidad ${maxAgilidadA} de ${equipoA} ganó el turno impar.`;
            mostrarDescripcionTurno(descripcion);
            participacionGolpeGolpeadoresB()
        }
        botonCalcularGanadorCazadores1.disabled = true;
        botonAgilidadCazador1A.disabled = true;
        botonAgilidadCazador2A.disabled = true;
        botonAgilidadCazador3A.disabled = true;
        botonDefensaCazador1B.disabled = true;
        botonDefensaCazador2B.disabled = true;
        botonDefensaCazador3B.disabled = true;
        botonFintaDePorskov1A.disabled = true;
        botonFintaDePorskov2A.disabled = true;
        botonFintaDePorskov3A.disabled = true;
        botonManoCambiada1A.disabled = true;
        botonManoCambiada2A.disabled = true;
        botonManoCambiada3A.disabled = true;
        botonRoboSpeelman1B.disabled = true;
        botonRoboSpeelman2B.disabled = true;
        botonRoboSpeelman3B.disabled = true;
        botonTransylvanianTackle1B.disabled = true;
        botonTransylvanianTackle2B.disabled = true;
        botonTransylvanianTackle3B.disabled = true;
    } else if (posesionEquipoB == true) {
        posesionEquipoB = false;
        agilidadMaximaEquipoB()
        defensaMaximaEquipoA()
        if (maxAgilidadB >= maxDefensaA) {
            descripcion = `La agilidad ${maxAgilidadB} de ${equipoB} ganó el turno impar.`;
            mostrarDescripcionTurno(descripcion);
            participacionGolpeGolpeadoresA()
        } else if (maxAgilidadB < maxDefensaA) {
            descripcion = `La defensa ${maxDefensaA} de ${equipoA} ganó el turno impar.`;
            mostrarDescripcionTurno(descripcion);
            participacionGolpeGolpeadoresB()
        } else {
            descripcion = `Hubo empate, por lo tanto, la agilidad ${maxAgilidadB} de ${equipoB} ganó el turno impar.`;
            mostrarDescripcionTurno(descripcion);
            participacionGolpeGolpeadoresA()
        }
        botonCalcularGanadorCazadores1.disabled = true;
        botonAgilidadCazador1B.disabled = true;
        botonAgilidadCazador2B.disabled = true;
        botonAgilidadCazador3B.disabled = true;
        botonDefensaCazador1A.disabled = true;
        botonDefensaCazador2A.disabled = true;
        botonDefensaCazador3A.disabled = true;
        botonFintaDePorskov1B.disabled = true;
        botonFintaDePorskov2B.disabled = true;
        botonFintaDePorskov3B.disabled = true;
        botonManoCambiada1B.disabled = true;
        botonManoCambiada2B.disabled = true;
        botonManoCambiada3B.disabled = true;
        botonRoboSpeelman1A.disabled = true;
        botonRoboSpeelman2A.disabled = true;
        botonRoboSpeelman3A.disabled = true;
        botonTransylvanianTackle1A.disabled = true;
        botonTransylvanianTackle2A.disabled = true;
        botonTransylvanianTackle3A.disabled = true;
    }
    // else if (quaffleSuelta = true) {
    // Creo que esto no va.
    // }
    else {
        reaccionMaximaEquipoA()
        reaccionMaximaEquipoB()
        if (maxReaccionA > maxReaccionB) {
            descripcion = `La reacción ${maxReaccionA} de ${equipoA} ganó el turno impar.`;
            mostrarDescripcionTurno(descripcion);
            botonReaccionCazador1A.disabled = true;
            botonReaccionCazador2A.disabled = true;
            botonReaccionCazador3A.disabled = true;
            botonReaccionCazador1B.disabled = true;
            botonReaccionCazador2B.disabled = true;
            botonReaccionCazador3B.disabled = true;
            botonIntuicionFugaz1A.disabled = true;
            botonIntuicionFugaz2A.disabled = true;
            botonIntuicionFugaz3A.disabled = true;
            botonIntuicionFugaz1B.disabled = true;
            botonIntuicionFugaz2B.disabled = true;
            botonIntuicionFugaz3B.disabled = true;
            participacionGolpeGolpeadoresB()
        } else if (maxReaccionB > maxReaccionA) {
            descripcion = `La reacción ${maxReaccionB} de ${equipoB} ganó el turno impar.`;
            mostrarDescripcionTurno(descripcion);
            botonReaccionCazador1A.disabled = true;
            botonReaccionCazador2A.disabled = true;
            botonReaccionCazador3A.disabled = true;
            botonReaccionCazador1B.disabled = true;
            botonReaccionCazador2B.disabled = true;
            botonReaccionCazador3B.disabled = true;
            botonIntuicionFugaz1A.disabled = true;
            botonIntuicionFugaz2A.disabled = true;
            botonIntuicionFugaz3A.disabled = true;
            botonIntuicionFugaz1B.disabled = true;
            botonIntuicionFugaz2B.disabled = true;
            botonIntuicionFugaz3B.disabled = true;
            participacionGolpeGolpeadoresA()
        } else {
            descripcion = `Hubo un empate, por lo tanto, deberán tirar la reacción nuevamente.`;
            mostrarDescripcionTurno(descripcion);
            reaccionesA = [0, 0, 0]
            reaccionesB = [0, 0, 0]
            botonCalcularGanadorCazadores1.disabled = false
            botonReaccionCazador1A.disabled = false
            botonReaccionCazador2A.disabled = false
            botonReaccionCazador3A.disabled = false
            botonReaccionCazador1B.disabled = false
            botonReaccionCazador2B.disabled = false
            botonReaccionCazador3B.disabled = false
            if (usosIntuicionFugaz1A < intuicionFugaz1A) {
                botonIntuicionFugaz1A.disabled = false;
            }
            if (usosIntuicionFugaz2A < intuicionFugaz2A) {
                botonIntuicionFugaz2A.disabled = false;
            }
            if (usosIntuicionFugaz3A < intuicionFugaz3A) {
                botonIntuicionFugaz3A.disabled = false;
            }
            if (usosIntuicionFugaz1B < intuicionFugaz1B) {
                botonIntuicionFugaz1B.disabled = false;
            }
            if (usosIntuicionFugaz2B < intuicionFugaz2B) {
                botonIntuicionFugaz2B.disabled = false;
            }
            if (usosIntuicionFugaz3B < intuicionFugaz3B) {
                botonIntuicionFugaz3B.disabled = false;
            }
        }
    }
}

function calcularGanadorCazadores2() {
    botonCalcularGanadorCazadores2.disabled = true;
    botonReaccionCazador1A.disabled = true;
    botonReaccionCazador2A.disabled = true;
    botonReaccionCazador3A.disabled = true;
    botonReaccionCazador1B.disabled = true;
    botonReaccionCazador2B.disabled = true;
    botonReaccionCazador3B.disabled = true;
    reaccionMaximaEquipoA()
    reaccionMaximaEquipoB()
    if (maxReaccionA > maxReaccionB) {
        descripcion = `La reacción ${maxReaccionA} de ${equipoA} ganó la segunda etapa del turno impar.`;
        mostrarDescripcionTurno(descripcion);
        if (maxAgilidadA == agilidadesA[0] && maxAgilidadA !== 0 || maxDefensaA == defensasA[0] && maxDefensaA !== 0 || maxReaccionA == reaccionesA[0] && maxReaccionA !==0) {
            if (disparosRealizados2A < 5) {
                botonReceptorPaseCazador2A.disabled = false;
            }
            if (disparosRealizados3A < 5) {
                botonReceptorPaseCazador3A.disabled = false;
            }
            if (disparosRealizados2A == 5 && disparosRealizados3A == 5) {
                descripcion = `${cazador1A} se demora con la quaffle en sus manos y el rival se la quita.`;
                mostrarDescripcionTurno(descripcion);
                numeroTurnoPar += 2;
                posesionEquipoB = true;
                botonIniciarTurnoImpar.disabled = false;
            }
        } else if (maxAgilidadA == agilidadesA[1] && maxAgilidadA !== 0 || maxDefensaA == defensasA[1] && maxDefensaA !== 0 || maxReaccionA == reaccionesA[1] && maxReaccionA !==0) {
            if (disparosRealizados1A < 5) {
                botonReceptorPaseCazador1A.disabled = false;
            }
            if (disparosRealizados3A < 5) {
                botonReceptorPaseCazador3A.disabled = false;
            }
            if (disparosRealizados1A == 5 && disparosRealizados3A == 5) {
                descripcion = `${cazador2A} se demora con la quaffle en sus manos y el rival se la quita.`;
                mostrarDescripcionTurno(descripcion);
                numeroTurnoPar += 2;
                posesionEquipoB = true;
                botonIniciarTurnoImpar.disabled = false;
            }
        } else {
            if (disparosRealizados1A < 5) {
                botonReceptorPaseCazador1A.disabled = false;
            }
            if (disparosRealizados2A < 5) {
                botonReceptorPaseCazador2A.disabled = false;
            }
            if (disparosRealizados1A == 5 && disparosRealizados2A == 5) {
                descripcion = `${cazador3A} se demora con la quaffle en sus manos y el rival se la quita.`;
                mostrarDescripcionTurno(descripcion);
                numeroTurnoPar += 2;
                posesionEquipoB = true;
                botonIniciarTurnoImpar.disabled = false;
            }
        }
    } else if (maxReaccionA < maxReaccionB) {
        descripcion = `La reacción ${maxReaccionB} de ${equipoB} ganó la segunda etapa del turno impar.`;
        mostrarDescripcionTurno(descripcion);
        if ((maxAgilidadB == agilidadesB[0] && maxAgilidadB !== 0) || (maxDefensaB == defensasB[0] && maxDefensaB !== 0) || (maxReaccionB == reaccionesB[0] && maxReaccionB !==0)) {
            if (disparosRealizados2B < 5) {
                botonReceptorPaseCazador2B.disabled = false;
            }
            if (disparosRealizados3B < 5) {
                botonReceptorPaseCazador3B.disabled = false;
            }
            if (disparosRealizados2B == 5 && disparosRealizados3B == 5) {
                descripcion = `${cazador1B} se demora con la quaffle en sus manos y el rival se la quita.`;
                mostrarDescripcionTurno(descripcion);
                numeroTurnoPar += 2;
                posesionEquipoA = true;
                botonIniciarTurnoImpar.disabled = false;
            }
        } else if ((maxAgilidadB == agilidadesB[1] && maxAgilidadB !== 0) || (maxDefensaB == defensasB[1] && maxDefensaB !== 0) || (maxReaccionB == reaccionesB[1] && maxReaccionB !==0)) {
            if (disparosRealizados1B < 5) {
                botonReceptorPaseCazador1B.disabled = false;
            }
            if (disparosRealizados3B < 5) {
                botonReceptorPaseCazador3B.disabled = false;
            }
            if (disparosRealizados1B == 5 && disparosRealizados3B == 5) {
                descripcion = `${cazador2B} se demora con la quaffle en sus manos y el rival se la quita.`;
                mostrarDescripcionTurno(descripcion);
                numeroTurnoPar += 2;
                posesionEquipoA = true;
                botonIniciarTurnoImpar.disabled = false;
            }
        } else {
            if (disparosRealizados1B < 5) {
                botonReceptorPaseCazador1B.disabled = false;
            }
            if (disparosRealizados2B < 5) {
                botonReceptorPaseCazador2B.disabled = false;
            }
            if (disparosRealizados1B == 5 && disparosRealizados2B == 5) {
                descripcion = `${cazador3B} se demora con la quaffle en sus manos y el rival se la quita.`;
                mostrarDescripcionTurno(descripcion);
                numeroTurnoPar += 2;
                posesionEquipoA = true;
                botonIniciarTurnoImpar.disabled = false;
            }
        }
    } else {
        descripcion = `Hubo empate. Deben lanzar reacción nuevamente.`;
        mostrarDescripcionTurno(descripcion);
        botonCalcularGanadorCazadores2.disabled = false
        botonReaccionCazador1A.disabled = false
        botonReaccionCazador2A.disabled = false
        botonReaccionCazador3A.disabled = false
        botonReaccionCazador1B.disabled = false
        botonReaccionCazador2B.disabled = false
        botonReaccionCazador3B.disabled = false
    }
    botonCalcularGanadorCazadores1.disabled = true;
    botonAgilidadCazador1A.disabled = true;
    botonAgilidadCazador2A.disabled = true;
    botonAgilidadCazador3A.disabled = true;
    botonDefensaCazador1B.disabled = true;
    botonDefensaCazador2B.disabled = true;
    botonDefensaCazador3B.disabled = true;
}

function lanzarReceptorPaseCazador1A () {
    if (reversePassActivo == true) {
        descripcion = `${cazador1A} ha recibido el Reverse Pass.`;
        mostrarDescripcionTurno(descripcion);
        botonDisparoCazador1A.disabled = false;
    } else if (paseLargoActivo == true) {
        descripcion = `${cazador1A} ha recibido el Pase Largo de ${guardianA}.`;
        mostrarDescripcionTurno(descripcion);
        numeroTurnoPar += 2;
        descripcion = `____________________`
        mostrarDescripcionTurno(descripcion)
        descripcion = `Turno ` + numeroTurnoPar;
        mostrarDescripcionTurno(descripcion);
        descripcion = ` - - - - - - - - - - - - - - - - `
        mostrarDescripcionTurno(descripcion)
        botonDisparoCazador1A.disabled = false;
        habilidadesDisparoCazador1A()
    } else {
        if ((maxAgilidadA == agilidadesA[1] && maxAgilidadA !== 0) || (maxDefensaA == defensasA[1] && maxDefensaA !== 0) || (maxReaccionA == reaccionesA[1] && maxReaccionA !==0)) {
            descripcion = `${cazador2A} le ha pasado la quaffle a ${cazador1A}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            descripcion = `${cazador3A} le ha pasado la quaffle a ${cazador1A}`;
            mostrarDescripcionTurno(descripcion);
        }
        botonIniciarTurnoPar.disabled = false;
    }
    paseRecibidoCazador1A = true;
    botonesInactivosPaseRecibido()
}

function lanzarReceptorPaseCazador2A () {
    if (reversePassActivo == true) {
        descripcion = `${cazador2A} ha recibido el Reverse Pass.`;
        mostrarDescripcionTurno(descripcion);
        botonDisparoCazador2A.disabled = false;
    } else if (paseLargoActivo == true) {
        descripcion = `${cazador2A} ha recibido el Pase Largo de ${guardianA}.`;
        mostrarDescripcionTurno(descripcion);
        numeroTurnoPar += 2;
        descripcion = `____________________`
        mostrarDescripcionTurno(descripcion)
        descripcion = `Turno ` + numeroTurnoPar;
        mostrarDescripcionTurno(descripcion);
        descripcion = ` - - - - - - - - - - - - - - - - `
        mostrarDescripcionTurno(descripcion)
        botonDisparoCazador2A.disabled = false;
        habilidadesDisparoCazador2A()
    } else {
        if ((maxAgilidadA == agilidadesA[0] && maxAgilidadA !== 0) || (maxDefensaA == defensasA[0] && maxDefensaA !== 0) || (maxReaccionA == reaccionesA[0] && maxReaccionA !==0)) {
            descripcion = `${cazador1A} le ha pasado la quaffle a ${cazador2A}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            descripcion = `${cazador3A} le ha pasado la quaffle a ${cazador2A}`;
            mostrarDescripcionTurno(descripcion);
        }
        botonIniciarTurnoPar.disabled = false;
    }
    paseRecibidoCazador2A = true;
    botonesInactivosPaseRecibido()
}

function lanzarReceptorPaseCazador3A () {
    if (reversePassActivo == true) {
        descripcion = `${cazador3A} ha recibido el Reverse Pass.`;
        mostrarDescripcionTurno(descripcion);
        botonDisparoCazador3A.disabled = false;
    } else if (paseLargoActivo == true) {
        descripcion = `${cazador3A} ha recibido el Pase Largo de ${guardianA}.`;
        mostrarDescripcionTurno(descripcion);
        numeroTurnoPar += 2;
        descripcion = `____________________`
        mostrarDescripcionTurno(descripcion)
        descripcion = `Turno ` + numeroTurnoPar;
        mostrarDescripcionTurno(descripcion);
        descripcion = ` - - - - - - - - - - - - - - - - `
        mostrarDescripcionTurno(descripcion)
        botonDisparoCazador3A.disabled = false;
        habilidadesDisparoCazador3A()
    } else {
        if ((maxAgilidadA == agilidadesA[0] && maxAgilidadA !== 0) || (maxDefensaA == defensasA[0] && maxDefensaA !== 0) || (maxReaccionA == reaccionesA[0] && maxReaccionA !==0)) {
            descripcion = `${cazador1A} le ha pasado la quaffle a ${cazador3A}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            descripcion = `${cazador2A} le ha pasado la quaffle a ${cazador3A}`;
            mostrarDescripcionTurno(descripcion);
        }
        botonIniciarTurnoPar.disabled = false;
    }
    paseRecibidoCazador3A = true;
    botonesInactivosPaseRecibido()
}

function lanzarReceptorPaseCazador1B () {
    if (reversePassActivo == true) {
        descripcion = `${cazador1B} ha recibido el Reverse Pass.`;
        mostrarDescripcionTurno(descripcion);
        botonDisparoCazador1B.disabled = false;
    } else if (paseLargoActivo == true) {
        descripcion = `${cazador1B} ha recibido el Pase Largo de ${guardianB}.`;
        mostrarDescripcionTurno(descripcion);
        numeroTurnoPar += 2;
        descripcion = `____________________`
        mostrarDescripcionTurno(descripcion)
        descripcion = `Turno ` + numeroTurnoPar;
        mostrarDescripcionTurno(descripcion);
        descripcion = ` - - - - - - - - - - - - - - - - `
        mostrarDescripcionTurno(descripcion)
        botonDisparoCazador1B.disabled = false;
        habilidadesDisparoCazador1B()
    } else {
        if ((maxAgilidadB == agilidadesB[1] && maxAgilidadB !== 0) || (maxDefensaB == defensasB[1] && maxDefensaB !== 0) || (maxReaccionB == reaccionesB[1] && maxReaccionB !==0)) {
            descripcion = `${cazador2B} le ha pasado la quaffle a ${cazador1B}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            descripcion = `${cazador3B} le ha pasado la quaffle a ${cazador1B}`;
            mostrarDescripcionTurno(descripcion);
        }
        botonIniciarTurnoPar.disabled = false;
    }
    paseRecibidoCazador1B = true;
    botonesInactivosPaseRecibido()
}

function lanzarReceptorPaseCazador2B () {
    if (reversePassActivo == true) {
        descripcion = `${cazador1B} ha recibido el Reverse Pass.`;
        mostrarDescripcionTurno(descripcion);
        botonDisparoCazador2B.disabled = false;
    } else if (paseLargoActivo == true) {
        descripcion = `${cazador2B} ha recibido el Pase Largo de ${guardianB}.`;
        mostrarDescripcionTurno(descripcion);
        numeroTurnoPar += 2;
        descripcion = `____________________`
        mostrarDescripcionTurno(descripcion)
        descripcion = `Turno ` + numeroTurnoPar;
        mostrarDescripcionTurno(descripcion);
        descripcion = ` - - - - - - - - - - - - - - - - `
        mostrarDescripcionTurno(descripcion)
        botonDisparoCazador2B.disabled = false;
        habilidadesDisparoCazador2B()
    } else {
        if ((maxAgilidadB == agilidadesB[0] && maxAgilidadB !== 0) || (maxDefensaB == defensasB[0] && maxDefensaB !== 0) || (maxReaccionB == reaccionesB[0] && maxReaccionB !==0)) {
            descripcion = `${cazador1B} le ha pasado la quaffle a ${cazador2B}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            descripcion = `${cazador3B} le ha pasado la quaffle a ${cazador2B}`;
            mostrarDescripcionTurno(descripcion);
        }
        botonIniciarTurnoPar.disabled = false;
    }
    paseRecibidoCazador2B = true;
    botonesInactivosPaseRecibido()
}

function lanzarReceptorPaseCazador3B () {
    if (reversePassActivo == true) {
        descripcion = `${cazador3B} ha recibido el Reverse Pass.`;
        mostrarDescripcionTurno(descripcion);
        botonDisparoCazador3B.disabled = false;
    } else if (paseLargoActivo == true) {
        descripcion = `${cazador3B} ha recibido el Pase Largo de ${guardianB}.`;
        mostrarDescripcionTurno(descripcion);
        numeroTurnoPar += 2;
        descripcion = `____________________`
        mostrarDescripcionTurno(descripcion)
        descripcion = `Turno ` + numeroTurnoPar;
        mostrarDescripcionTurno(descripcion);
        descripcion = ` - - - - - - - - - - - - - - - - `
        mostrarDescripcionTurno(descripcion)
        botonDisparoCazador3B.disabled = false;
        habilidadesDisparoCazador3B()
    } else {
        if ((maxAgilidadB == agilidadesB[0] && maxAgilidadB !== 0) || (maxDefensaB == defensasB[0] && maxDefensaB !== 0) || (maxReaccionB == reaccionesB[0] && maxReaccionB !==0)) {
            descripcion = `${cazador1B} le ha pasado la quaffle a ${cazador3B}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            descripcion = `${cazador2B} le ha pasado la quaffle a ${cazador3B}`;
            mostrarDescripcionTurno(descripcion);
        }
        botonIniciarTurnoPar.disabled = false;
    }
    paseRecibidoCazador3B = true;
    botonesInactivosPaseRecibido()
}

function lanzarReflejosGuardianA () {
    botonReflejosGuardianA.disabled = true;
    botonAtajadaRelampagoA.disabled = true;
    botonStarfishAndStickA.disabled = true;
    botonDoubleEightLoopA.disabled = true;
    botonAllInA.disabled = true;
    const min = 1;
    const max = reflejosA;
    valorReflejosGuardianA = Math.floor(Math.random() * (max - min + 1)) + min;
    if (turnoPenal == true) {
        turnoPenal = false;
        if (doubleEightLoopActivo == true) {
            doubleEightLoopActivo = false;
            valorReflejosGuardianA = valorReflejosGuardianA + 5;
        }
        penalesCazadoresBreflejosA()
    } else {
        if (atajadaRelampagoActivo == true) {
            atajadaRelampagoActivo = false;
            valorReflejosGuardianA = valorReflejosGuardianA + 5;
        } else if (starfishAndStickActivo == true) {
            starfishAndStickActivo = false;
            valorReflejosGuardianA = valorReflejosGuardianA + 7;
        }
        if (golpeadoGuardianA == true || tiroResbalonActivo == true) {
            valorReflejosGuardianA = valorReflejosGuardianA - 3
            recibenCazadoresBreflejosA()
        } else if (evadidoGuardianA == true) {
            valorReflejosGuardianA = valorReflejosGuardianA - 1
            recibenCazadoresBreflejosA()
        } else {
            valorReflejosGuardianA = valorReflejosGuardianA
            recibenCazadoresBreflejosA()
        }
        if (numeroTurnoPar == 6 || numeroTurnoPar == 12 || numeroTurnoPar == 18 || numeroTurnoPar == 24 || numeroTurnoPar == 30 || numeroTurnoPar == 36) {
            botonIniciarTurnoBuscador.disabled = false;
        } else {
            if (posesionEquipoA == true && atajadaSegura == true) {
                atajadaSegura = false;
                if (usosPaseLargoA < paseLargoA) {
                    botonPaseLargoA.disabled = false;
                } else if (usosTiroResbalonA < tiroResbalonA) {
                    botonTiroResbalonA.disabled = false;
                }
            }
            botonIniciarTurnoImpar.disabled = false;
        }
    }
    descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
    mostrarDescripcionTurno(descripcion);
    resultadoAjustadoEquipoA()
    resultadoAjustadoEquipoB()
}

function lanzarReflejosGuardianB () {
    botonReflejosGuardianB.disabled = true;
    botonAtajadaRelampagoB.disabled = true;
    botonStarfishAndStickB.disabled = true;
    botonDoubleEightLoopB.disabled = true;
    botonAllInB.disabled = true;
    const min = 1;
    const max = reflejosB;
    valorReflejosGuardianB = Math.floor(Math.random() * (max - min + 1)) + min;
    if (turnoPenal == true) {
        turnoPenal = false;
        if (doubleEightLoopActivo == true) {
            doubleEightLoopActivo = false;
            valorReflejosGuardianB = valorReflejosGuardianB + 5;
        }
        penalesCazadoresAreflejosB()
    } else {
        if (atajadaRelampagoActivo == true) {
            atajadaRelampagoActivo = false;
            valorReflejosGuardianB = valorReflejosGuardianB + 5;
        } else if (starfishAndStickActivo == true) {
            starfishAndStickActivo = false;
            valorReflejosGuardianB = valorReflejosGuardianB + 7;
        }
        if (golpeadoGuardianB == true || tiroResbalonActivo == true) {
            valorReflejosGuardianB = valorReflejosGuardianB - 3
            recibenCazadoresAreflejosB()
        } else if (evadidoGuardianB == true) {
            valorReflejosGuardianB = valorReflejosGuardianB - 1
            recibenCazadoresAreflejosB()
        } else {
            valorReflejosGuardianB = valorReflejosGuardianB
            recibenCazadoresAreflejosB()
        }
        if (numeroTurnoPar == 6 || numeroTurnoPar == 12 || numeroTurnoPar == 18 || numeroTurnoPar == 24 || numeroTurnoPar == 30 || numeroTurnoPar == 36) {
            botonIniciarTurnoBuscador.disabled = false;
        } else {
            if (posesionEquipoB == true && atajadaSegura == true) {
                atajadaSegura = false;
                if (usosPaseLargoB < paseLargoB) {
                    botonPaseLargoB.disabled = false;
                } else if (usosTiroResbalonB < tiroResbalonB) {
                    botonTiroResbalonB.disabled = false;
                }
            }
            botonIniciarTurnoImpar.disabled = false;
        }
    }
    descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
    mostrarDescripcionTurno(descripcion);
    resultadoAjustadoEquipoA()
    resultadoAjustadoEquipoB()
}

function lanzarVoladaLateralGuardianA () {
    botonVoladaLateralGuardianA.disabled = true;
    botonAtajadaRelampagoA.disabled = true;
    botonStarfishAndStickA.disabled = true;
    botonDoubleEightLoopA.disabled = true;
    botonAllInA.disabled = true;
    const min = 1;
    const max = voladaLateralA;
    valorVoladaLateralGuardianA = Math.floor(Math.random() * (max - min + 1)) + min;
    if (turnoPenal == true) {
        turnoPenal = false;
        if (doubleEightLoopActivo == true) {
            doubleEightLoopActivo = false;
            valorVoladaLateralGuardianA = valorVoladaLateralGuardianA + 5;
        }
        penalesCazadoresBvoladaLateralA()
    } else {
        if (atajadaRelampagoActivo == true) {
            atajadaRelampagoActivo = false;
            valorVoladaLateralGuardianA = valorVoladaLateralGuardianA + 5;
        } else if (starfishAndStickActivo == true) {
            starfishAndStickActivo = false;
            valorVoladaLateralGuardianA = valorVoladaLateralGuardianA + 7;
        }
        if (golpeadoGuardianA == true || tiroResbalonActivo == true) {
            valorVoladaLateralGuardianA = valorVoladaLateralGuardianA - 3
            recibenCazadoresBvoladaLateralA()
        } else if (evadidoGuardianA == true) {
            valorVoladaLateralGuardianA = valorVoladaLateralGuardianA - 1
            recibenCazadoresBvoladaLateralA()
        } else {
            valorVoladaLateralGuardianA = valorVoladaLateralGuardianA
            recibenCazadoresBvoladaLateralA()
        }
        if (numeroTurnoPar == 6 || numeroTurnoPar == 12 || numeroTurnoPar == 18 || numeroTurnoPar == 24 || numeroTurnoPar == 30 || numeroTurnoPar == 36) {
            botonIniciarTurnoBuscador.disabled = false;
        } else {
            if (posesionEquipoA == true && atajadaSegura == true) {
                atajadaSegura = false;
                if (usosPaseLargoA < paseLargoA) {
                    botonPaseLargoA.disabled = false;
                } else if (usosTiroResbalonA < tiroResbalonA) {
                    botonTiroResbalonA.disabled = false;
                }
            }
            botonIniciarTurnoImpar.disabled = false;
        }
    }
    descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
    mostrarDescripcionTurno(descripcion);
    resultadoAjustadoEquipoA()
    resultadoAjustadoEquipoB()
}

function lanzarVoladaLateralGuardianB () {
    botonVoladaLateralGuardianB.disabled = true;
    botonAtajadaRelampagoB.disabled = true;
    botonStarfishAndStickB.disabled = true;
    botonDoubleEightLoopB.disabled = true;
    botonAllInB.disabled = true;
    const min = 1;
    const max = voladaLateralB;
    valorVoladaLateralGuardianB = Math.floor(Math.random() * (max - min + 1)) + min;
    if (turnoPenal == true) {
        turnoPenal = false;
        if (doubleEightLoopActivo == true) {
            doubleEightLoopActivo = false;
            valorVoladaLateralGuardianB = valorVoladaLateralGuardianB + 5;
        }
        penalesCazadoresAvoladaLateralB()
    } else {
        if (atajadaRelampagoActivo == true) {
            atajadaRelampagoActivo = false;
            valorVoladaLateralGuardianB = valorVoladaLateralGuardianB + 5;
        } else if (starfishAndStickActivo == true) {
            starfishAndStickActivo = false;
            valorVoladaLateralGuardianB = valorVoladaLateralGuardianB + 7;
        }
        if (golpeadoGuardianB == true || tiroResbalonActivo == true) {
            valorVoladaLateralGuardianB = valorVoladaLateralGuardianB - 3;
            descripcion = `Entré por aquí, wachin`;
            mostrarDescripcionTurno(descripcion);
            recibenCazadoresAvoladaLateralB()
        } else if (evadidoGuardianB == true) {
            valorVoladaLateralGuardianB = valorVoladaLateralGuardianB - 1;
            recibenCazadoresAvoladaLateralB()
        } else {
            valorVoladaLateralGuardianB = valorVoladaLateralGuardianB
            recibenCazadoresAvoladaLateralB()
        }
        if (numeroTurnoPar == 6 || numeroTurnoPar == 12 || numeroTurnoPar == 18 || numeroTurnoPar == 24 || numeroTurnoPar == 30 || numeroTurnoPar == 36) {
            botonIniciarTurnoBuscador.disabled = false;
        } else {
            if (posesionEquipoB == true && atajadaSegura == true) {
                atajadaSegura = false;
                if (usosPaseLargoB < paseLargoB) {
                    botonPaseLargoB.disabled = false;
                } else if (usosTiroResbalonB < tiroResbalonB) {
                    botonTiroResbalonB.disabled = false;
                }
            }
            botonIniciarTurnoImpar.disabled = false;
        } 
    }
    descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
    mostrarDescripcionTurno(descripcion);
    resultadoAjustadoEquipoA()
    resultadoAjustadoEquipoB()
}

function lanzarPresionGuardianA () {
    botonPresionGuardianA.disabled = true;
    const min = 1;
    const max = 20;
    valorPresionGuardianA = Math.floor(Math.random() * (max - min + 1)) + min;

    if (valorPresionGuardianA <= presionA) {
        presionEfectiva = true
        if (paseRecibidoCazador1B == true) {
            descripcion = `${guardianA} ha presionado (${valorPresionGuardianA}) a ${cazador1B}.`;
            mostrarDescripcionTurno(descripcion);
            botonEvasionCazador1B.disabled = false;
        } else if (paseRecibidoCazador2B == true) {
            botonEvasionCazador2B.disabled = false;
            descripcion = `${guardianA} ha presionado (${valorPresionGuardianA}) a ${cazador2B}.`;
            mostrarDescripcionTurno(descripcion);
        } else {
            botonEvasionCazador3B.disabled = false;
            descripcion = `${guardianA} ha presionado (${valorPresionGuardianA}) a ${cazador3B}.`;
            mostrarDescripcionTurno(descripcion);
        }
    } else {
        if (paseRecibidoCazador1B == true) {
            descripcion = `${guardianA} no ha presionado (${valorPresionGuardianA}) a ${cazador1B}.`;
            mostrarDescripcionTurno(descripcion);
            botonDisparoCazador1B.disabled = false;
            habilidadesDisparoCazador1B()
        } else if (paseRecibidoCazador2B == true) {
            descripcion = `${guardianA} no ha presionado (${valorPresionGuardianA}) a ${cazador2B}.`;
            mostrarDescripcionTurno(descripcion);
            botonDisparoCazador2B.disabled = false;
            habilidadesDisparoCazador2B()
        } else {
            descripcion = `${guardianA} no ha presionado (${valorPresionGuardianA}) a ${cazador3B}.`;
            mostrarDescripcionTurno(descripcion);
            botonDisparoCazador3B.disabled = false;
            habilidadesDisparoCazador3B()
        }
    }
}

function lanzarPresionGuardianB () {
    botonPresionGuardianB.disabled = true;
    const min = 1;
    const max = 20;
    valorPresionGuardianB = Math.floor(Math.random() * (max - min + 1)) + min;

    if (valorPresionGuardianB <= presionB) {
        presionEfectiva = true
        if (paseRecibidoCazador1A == true) {
            descripcion = `${guardianB} ha presionado (${valorPresionGuardianB}) a ${cazador1A}.`;
            mostrarDescripcionTurno(descripcion);
            botonEvasionCazador1A.disabled = false;
        } else if (paseRecibidoCazador2A == true) {
            botonEvasionCazador2A.disabled = false;
            descripcion = `${guardianB} ha presionado (${valorPresionGuardianB}) a ${cazador2A}.`;
            mostrarDescripcionTurno(descripcion);
        } else {
            botonEvasionCazador3A.disabled = false;
            descripcion = `${guardianB} ha presionado (${valorPresionGuardianB}) a ${cazador3A}.`;
            mostrarDescripcionTurno(descripcion);
        }
    } else {
        if (paseRecibidoCazador1A == true) {
            descripcion = `${guardianB} no ha presionado (${valorPresionGuardianB}) a ${cazador1A}.`;
            mostrarDescripcionTurno(descripcion);
            botonDisparoCazador1A.disabled = false;
            habilidadesDisparoCazador1A()
        } else if (paseRecibidoCazador2A == true) {
            descripcion = `${guardianB} no ha presionado (${valorPresionGuardianB}) a ${cazador2A}.`;
            mostrarDescripcionTurno(descripcion);
            botonDisparoCazador2A.disabled = false;
            habilidadesDisparoCazador2A()
        } else {
            descripcion = `${guardianB} no ha presionado (${valorPresionGuardianB}) a ${cazador3A}.`;
            mostrarDescripcionTurno(descripcion);
            botonDisparoCazador3A.disabled = false;
            habilidadesDisparoCazador3A()
        }
    }
}

function lanzarAtajadaRelampago (guardian, usosAtajadaRelampago, atajadaRelampago) {
    atajadaRelampagoActivo = true;
    usosAtajadaRelampago ++;
    let usosDisponibles
    usosDisponibles = atajadaRelampago - usosAtajadaRelampago
    descripcion = `${guardian} ha realizado una Atajada Relampago. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion);
    if (guardian == guardianA) {
        usosAtajadaRelampagoA ++;
        botonAtajadaRelampagoA.disabled = true;
        botonStarfishAndStickA.disabled = true;
    } else if (guardian == guardianB) {
        usosAtajadaRelampagoB ++;
        botonAtajadaRelampagoB.disabled = true;
        botonStarfishAndStickB.disabled = true;
    }
}

function lanzarStarfishAndStick (guardian, usosStarfishAndStick, starfishAndStick) {
    starfishAndStickActivo = true;
    usosStarfishAndStick ++;
    let usosDisponibles
    usosDisponibles = starfishAndStick - usosStarfishAndStick
    descripcion = `${guardian} ha realizado una Starfish and Stick. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion);
    if (guardian == guardianA) {
        usosStarfishAndStickA ++;
        botonStarfishAndStickA.disabled = true;
        botonAtajadaRelampagoA.disabled = true;
    } else if (guardian == guardianB) {
        usosStarfishAndStickB ++;
        botonStarfishAndStickB.disabled = true;
        botonAtajadaRelampagoB.disabled = true;
    }
}

function lanzarAllIn (guardian, usosAllIn, allIn, presion, valorPresionGuardian) {
    usosAllIn ++;
    let usosDisponibles
    usosDisponibles = allIn - usosAllIn
    const min = 1;
    const max = 20;
    valorPresionGuardian = Math.floor(Math.random() * (max - min + 1)) + min;
    if (valorPresionGuardian <= presion + 3) {
        descripcion = `${guardian} ha realizado un All In de forma exitosa (${valorPresionGuardian}) y recupera la quaffle. Usos disponibles: ${usosDisponibles}.`;
        mostrarDescripcionTurno(descripcion);
        if (numeroTurnoPar == 6 || numeroTurnoPar == 12 || numeroTurnoPar == 18 || numeroTurnoPar == 24 || numeroTurnoPar == 30 || numeroTurnoPar == 36) {
            botonIniciarTurnoBuscador.disabled = false;
        } else {
            if (guardian == guardianA) {
                if (usosPaseLargoA < paseLargoA) {
                    botonPaseLargoA.disabled = false;
                }
            } else if (guardian == guardianB) {
                if (usosPaseLargoB < paseLargoB) {
                    botonPaseLargoB.disabled = false;
                }
            }
            botonIniciarTurnoImpar.disabled = false;
        }
    } else {
        if (guardian == guardianA) {
            if (paseRecibidoCazador1B == true) {
                descripcion = `${guardian} ha fallado su All In (${valorPresionGuardian}) y ${cazador1B} consigue marcar el tanto. Usos disponibles: ${usosDisponibles}.`;
                mostrarDescripcionTurno(descripcion);
            } else if (paseRecibidoCazador2B == true) {
                descripcion = `${guardian} ha fallado su All In (${valorPresionGuardian}) y ${cazador2B} consigue marcar el tanto. Usos disponibles: ${usosDisponibles}.`;
                mostrarDescripcionTurno(descripcion);
            } else if (paseRecibidoCazador3B == true) {
                descripcion = `${guardian} ha fallado su All In (${valorPresionGuardian}) y ${cazador3B} consigue marcar el tanto. Usos disponibles: ${usosDisponibles}.`;
                mostrarDescripcionTurno(descripcion);
            }
            golesB = golesB + 10;
            posesionEquipoA = true;
        } else if (guardian == guardianB) {
            if (paseRecibidoCazador1A == true) {
                descripcion = `${guardian} ha fallado su All In (${valorPresionGuardian}) y ${cazador1A} consigue marcar el tanto. Usos disponibles: ${usosDisponibles}.`;
                mostrarDescripcionTurno(descripcion);
            } else if (paseRecibidoCazador2A == true) {
                descripcion = `${guardian} ha fallado su All In (${valorPresionGuardian}) y ${cazador2A} consigue marcar el tanto. Usos disponibles: ${usosDisponibles}.`;
                mostrarDescripcionTurno(descripcion);
            } else if (paseRecibidoCazador3A == true) {
                descripcion = `${guardian} ha fallado su All In (${valorPresionGuardian}) y ${cazador3A} consigue marcar el tanto. Usos disponibles: ${usosDisponibles}.`;
                mostrarDescripcionTurno(descripcion);
            }
            golesA = golesA + 10;
            posesionEquipoB = true;
        }
    }
    if (guardian == guardianA) {
        usosAllInA ++;
        botonAllInA.disabled = true;
        botonReflejosGuardianA.disabled = true;
        botonVoladaLateralGuardianA.disabled = true;
        botonStarfishAndStickA.disabled = true;
        botonAtajadaRelampagoA.disabled = true;
    } else if (guardian == guardianB) {
        usosAllInB ++;
        botonAllInB.disabled = true;
        botonReflejosGuardianB.disabled = true;
        botonVoladaLateralGuardianB.disabled = true;
        botonStarfishAndStickB.disabled = true;
        botonAtajadaRelampagoB.disabled = true;
    }
    descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
    mostrarDescripcionTurno(descripcion);
    resultadoAjustadoEquipoA()
    resultadoAjustadoEquipoB()
    if (numeroTurnoPar == 6 || numeroTurnoPar == 12 || numeroTurnoPar == 18 || numeroTurnoPar == 24 || numeroTurnoPar == 30 || numeroTurnoPar == 36) {
        botonIniciarTurnoBuscador.disabled = false;
    } else {
        botonIniciarTurnoImpar.disabled = false;
    }
}

function lanzarDoubleEightLoop (guardian, usosDoubleEightLoop, doubleEightLoop) {
    doubleEightLoopActivo = true;
    usosDoubleEightLoop ++;
    let usosDisponibles
    usosDisponibles = doubleEightLoop - usosDoubleEightLoop
    descripcion = `${guardian} ha realizado un Double Eight Loop. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion);
    if (guardian == guardianA) {
        usosDoubleEightLoopA ++;
        botonDoubleEightLoopA.disabled = true;
    } else if (guardian == guardianB) {
        usosDoubleEightLoopB ++;
        botonDoubleEightLoopB.disabled = true;
    }
}

function lanzarPaseLargo (guardian, usosPaseLargo, paseLargo) {
    paseLargoActivo = true;
    usosPaseLargo ++;
    let usosDisponibles
    usosDisponibles = paseLargo - usosPaseLargo
    numeroTurnoImpar +=2;
    descripcion = `____________________`
    mostrarDescripcionTurno(descripcion)
    descripcion = `Turno ` + numeroTurnoImpar;
    mostrarDescripcionTurno(descripcion)
    descripcion = ` - - - - - - - - - - - - - - - - `
    mostrarDescripcionTurno(descripcion)
    descripcion = `${guardian} ha realizado un Pase largo. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion);
    if (guardian == guardianA) {
        botonPaseLargoA.disabled = true;
        if (disparosRealizados1A < 5) {
            botonReceptorPaseCazador1A.disabled = false;
        }
        if (disparosRealizados2A < 5) {
            botonReceptorPaseCazador2A.disabled = false;
        }
        if (disparosRealizados3A < 5) {
            botonReceptorPaseCazador3A.disabled = false;
        }
    } else if (guardian == guardianB) {
        botonPaseLargoB.disabled = true;
        if (disparosRealizados1B < 5) {
            botonReceptorPaseCazador1B.disabled = false;
        }
        if (disparosRealizados2B < 5) {
            botonReceptorPaseCazador2B.disabled = false;
        }
        if (disparosRealizados3B < 5) {
            botonReceptorPaseCazador3B.disabled = false;
        }
    }
}

function lanzarTiroResbalon (guardian, usosTiroResbalon, tiroResbalon, valorReflejos, valorVoladaLateral, valorDisparoGuardian) {
    botonTiroResbalonA.disabled = true;
    botonTiroResbalonB.disabled = true;
    // paseRecibidoCazador1A = false;
    // paseRecibidoCazador1B = false;
    // paseRecibidoCazador2A = false;
    // paseRecibidoCazador2B = false;
    // paseRecibidoCazador3A = false;
    // paseRecibidoCazador3B = false;
    tiroResbalonActivo = true;
    usosTiroResbalon ++;
    let usosDisponibles
    usosDisponibles = tiroResbalon - usosTiroResbalon
    numeroTurnoImpar +=2;
    descripcion = `____________________`
    mostrarDescripcionTurno(descripcion)
    descripcion = `Turno ` + numeroTurnoImpar;
    mostrarDescripcionTurno(descripcion)
    descripcion = ` - - - - - - - - - - - - - - - - `
    mostrarDescripcionTurno(descripcion)
    descripcion = `${guardian} ha realizado un Tiro de resbalón. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion);
    let disparoGuardian
    if (guardian == guardianA) {
        if (valorReflejos < valorVoladaLateral) {
            disparoGuardian = valorVoladaLateral
        } else {
            disparoGuardian = valorReflejos
        }
    } else if (guardian == guardianB) {
        if (valorReflejos < valorVoladaLateral) {
            disparoGuardian = valorVoladaLateral
        } else {
            disparoGuardian = valorReflejos
        }
    }
    const min = 1;
    const max = disparoGuardian;
    valorDisparoGuardian = Math.floor(Math.random() * (max - min + 1)) + min;
    numeroTurnoPar +=2;
    descripcion = `____________________`
    mostrarDescripcionTurno(descripcion)
    descripcion = `Turno ` + numeroTurnoPar;
    mostrarDescripcionTurno(descripcion)
    descripcion = ` - - - - - - - - - - - - - - - - `
    mostrarDescripcionTurno(descripcion)
    descripcion = `${guardian} ha realizado un disparo (${valorDisparoGuardian}) lejano y sorpresivo.`;
    mostrarDescripcionTurno(descripcion);
    if (guardian == guardianA) {
        usosTiroResbalonA ++;
        valorDisparoGuardianA = valorDisparoGuardian
        eleccionAtajadaGuardianB();
    } else {
        usosTiroResbalonB ++;
        valorDisparoGuardianB = valorDisparoGuardian
        eleccionAtajadaGuardianA();
    }
}

function lanzarEvasionGuardianA () {
    botonEvasionGuardianA.disabled = true;
    const min = 1;
    const max = 25;
    valorEvasionGuardianA = Math.floor(Math.random() * (max - min + 1)) + min;
    if (golpeCriticoB == true) {
        if (valorEvasionGuardianA <= 3) {
            evadidoGuardianA = true;
            descripcion = `${guardianA} ha evadido (${valorEvasionGuardianA}) la bludger de forma perfecta.`;
            mostrarDescripcionTurno(descripcion);
            disparoIncomodoCazadorGolpeadoB ()
        } else {
            golpeadoGuardianA = true;
            descripcion = `${guardianA} no ha evadido (${valorEvasionGuardianA}) la bludger y recibe un golpe crítico.`;
            mostrarDescripcionTurno(descripcion);
            disparoIncomodoCazadorGolpeadoB ()
        }
    } else {
        if (valorEvasionGuardianA <= 3) {
            evadidoGuardianA = true;
            descripcion = `${guardianA} ha evadido (${valorEvasionGuardianA}) la bludger de forma perfecta.`;
            mostrarDescripcionTurno(descripcion);
            disparoIncomodoCazadorGolpeadoB ()
        } else if (valorEvasionGuardianA <= evasionGuardianA) {
            evadidoGuardianA = true;
            descripcion = `${guardianA} ha evadido (${valorEvasionGuardianA}) la bludger.`;
            mostrarDescripcionTurno(descripcion);
            disparoIncomodoCazadorGolpeadoB ()
        } else {
            golpeadoGuardianA = true;
            descripcion = `${guardianA} no ha evadido (${valorEvasionGuardianA}) la bludger y recibe un golpe crítico.`;
            mostrarDescripcionTurno(descripcion);
            disparoIncomodoCazadorGolpeadoB ()
        }
    }
}

function lanzarEvasionGuardianB () {
    botonEvasionGuardianB.disabled = true;
    const min = 1;
    const max = 25;
    valorEvasionGuardianB = Math.floor(Math.random() * (max - min + 1)) + min;
    if (golpeCriticoA == true) {
        if (valorEvasionGuardianB <= 3) {
            evadidoGuardianB = true;
            descripcion = `${guardianB} ha evadido (${valorEvasionGuardianB}) la bludger de forma perfecta.`;
            mostrarDescripcionTurno(descripcion);
            disparoIncomodoCazadorGolpeadoA ()
        } else {
            golpeadoGuardianB = true;
            descripcion = `${guardianB} no ha evadido (${valorEvasionGuardianB}) la bludger y recibe un golpe crítico.`;
            mostrarDescripcionTurno(descripcion);
            disparoIncomodoCazadorGolpeadoA ()
        }
    } else {
        if (valorEvasionGuardianB <= 3) {
            evadidoGuardianB = true;
            descripcion = `${guardianB} ha evadido (${valorEvasionGuardianB}) la bludger de forma perfecta.`;
            mostrarDescripcionTurno(descripcion);
            disparoIncomodoCazadorGolpeadoA ()
        } else if (valorEvasionGuardianB <= evasionGuardianB) {
            evadidoGuardianB = true;
            descripcion = `${guardianB} ha evadido (${valorEvasionGuardianB}) la bludger.`;
            mostrarDescripcionTurno(descripcion);
            disparoIncomodoCazadorGolpeadoA ()
        } else {
            golpeadoGuardianB = true;
            descripcion = `${guardianB} no ha evadido (${valorEvasionGuardianB}) la bludger y recibe un golpe crítico.`;
            mostrarDescripcionTurno(descripcion);
            disparoIncomodoCazadorGolpeadoA ()
        }
    }
}

function lanzarDisparoCazadorA (cazador, disparo, valorDisparoCazador, disparosRealizados) {
    turnoImpar = false;
    if (reversePassActivo == true) {
        reversePassActivo = false;
        disparosRealizados ++;
        const min = 1;
        const max = disparo;
        valorDisparoCazador = Math.floor(Math.random() * (max - min + 1)) + min;
        valorDisparoCazador = valorDisparoCazador + 3;
        descripcion = `${cazador} ha realizado un disparo (${valorDisparoCazador}). Disparos realizados: ${disparosRealizados}.`;
        mostrarDescripcionTurno(descripcion);
        eleccionAtajadaGuardianB();
    } else if (turnoPenal == true) {
        if (cazador == cazador1A) {
            penalCazador1A = true;
        } else if (cazador == cazador2A) {
            penalCazador2A = true;
        } else if (cazador == cazador3A) {
            penalCazador3A = true;
        }
        const min = 1;
        const max = disparo;
        valorDisparoCazador = Math.floor(Math.random() * (max - min + 1)) + min;
        if (efectoFinbourghActivo == true) {
            efectoFinbourghActivo = false;
            valorDisparoCazador = valorDisparoCazador + 5;
        } else if (knuckleBallActivo == true) {
            knuckleBallActivo = false;
            valorDisparoCazador = valorDisparoCazador + 7;
        }
        descripcion = `${cazador} ha realizado un disparo (${valorDisparoCazador}) de penal.`;
        mostrarDescripcionTurno(descripcion);
        eleccionAtajadaGuardianB();
    } else if (tiroLargoActivo1A == true || tiroLargoActivo2A == true || tiroLargoActivo3A == true) {
        turnoPar = true;
        ataqueEquipoA = true;
        disparosRealizados ++;
        const min = 1;
        const max = disparo;
        valorDisparoCazador = Math.floor(Math.random() * (max - min + 1)) + min;
        valorDisparoCazador = valorDisparoCazador + 5;
        descripcion = `${cazador} ha realizado un disparo de ${valorDisparoCazador}. Disparos realizados: ${disparosRealizados}.`;
        mostrarDescripcionTurno(descripcion);
        eleccionAtajadaGuardianB();
    } else if (disparoDeVoleaActivo == true) {
        disparoDeVoleaActivo = false;
        turnoPar = true;
        ataqueEquipoA = true;
        disparosRealizados ++;
        const min = 1;
        const max = disparo;
        valorDisparoCazador = Math.floor(Math.random() * (max - min + 1)) + min;
        valorDisparoCazador = valorDisparoCazador + 5;
        descripcion = `${cazador} ha realizado un disparo de ${valorDisparoCazador}. Disparos realizados: ${disparosRealizados}.`;
        mostrarDescripcionTurno(descripcion);
        if (paseLargoActivo == true) {
            paseLargoActivo = false;
            eleccionAtajadaGuardianB();
        } else {
            participacionGolpeGolpeadoresA()
        }
    } else {
        turnoPar = true;
        ataqueEquipoA = true;
        if (paseLargoActivo == true) {
            paseLargoActivo = false
            eleccionAtajadaGuardianB();
        } else {
            participacionGolpeGolpeadoresB()
        }
        disparosRealizados ++;
        const min = 1;
        const max = disparo;
        valorDisparoCazador = Math.floor(Math.random() * (max - min + 1)) + min;
        if (disparoDeTorbellinoActivo == true) {
            disparoDeTorbellinoActivo = false;
            valorDisparoCazador = valorDisparoCazador + 5;
        } else if (efectoFinbourghActivo == true) {
            efectoFinbourghActivo = false;
            valorDisparoCazador = valorDisparoCazador + 5;
        } else if (knuckleBallActivo == true) {
            valorDisparoCazador = valorDisparoCazador + 7;
        }
        if (disparoIncomodo == true && disparoDebil == true) {
            disparoDebil = false;
            valorDisparoCazador = valorDisparoCazador - 3;
            descripcion = `${cazador} ha realizado un disparo de ${valorDisparoCazador}. Disparos realizados: ${disparosRealizados}.`;
            mostrarDescripcionTurno(descripcion);
        } else if (disparoDebil == true) {
            // Escenario de Knuckle Ball.
            disparoDebil = false;
            valorDisparoCazador = valorDisparoCazador - 3;
            descripcion = `${cazador} ha realizado un disparo de ${valorDisparoCazador}. Disparos realizados: ${disparosRealizados}.`;
            mostrarDescripcionTurno(descripcion);
        } else {
            descripcion = `${cazador} ha realizado un disparo de ${valorDisparoCazador}. Disparos realizados: ${disparosRealizados}.`;
            mostrarDescripcionTurno(descripcion);
        }
    }
    botonDisparoCazador1A.disabled = true;
    habilidadesInactivasDisparoCazador1A()
    botonDisparoCazador2A.disabled = true;
    habilidadesInactivasDisparoCazador2A()
    botonDisparoCazador3A.disabled = true;
    habilidadesInactivasDisparoCazador3A()
    if (cazador == cazador1A) {
        valorDisparoCazador1A = valorDisparoCazador;
    } else if (cazador == cazador2A) {
        valorDisparoCazador2A = valorDisparoCazador;
    } else if (cazador == cazador3A) {
        valorDisparoCazador3A = valorDisparoCazador;
    }
    if (cazador == cazador1A && turnoPenal == false) {
        disparosRealizados1A ++;
    } else if (cazador == cazador2A && turnoPenal == false) {
        disparosRealizados2A ++;
    } else if (cazador == cazador3A && turnoPenal == false) {
        disparosRealizados3A ++;
    }
}

function lanzarDisparoCazadorB (cazador, disparo, valorDisparoCazador, disparosRealizados) {
    turnoImpar = false;
    if (reversePassActivo == true) {
        reversePassActivo = false;
        disparosRealizados ++;
        const min = 1;
        const max = disparo;
        valorDisparoCazador = Math.floor(Math.random() * (max - min + 1)) + min;
        valorDisparoCazador = valorDisparoCazador + 3;
        descripcion = `${cazador} ha realizado un disparo (${valorDisparoCazador}). Disparos realizados: ${disparosRealizados}.`;
        mostrarDescripcionTurno(descripcion);
        eleccionAtajadaGuardianA();
    } else if (turnoPenal == true) {
        if (cazador == cazador1B) {
            penalCazador1B = true;
        } else if (cazador == cazador2B) {
            penalCazador2B = true;
        } else if (cazador == cazador3B) {
            penalCazador3B = true;
        }
        const min = 1;
        const max = disparo;
        valorDisparoCazador = Math.floor(Math.random() * (max - min + 1)) + min;
        if (efectoFinbourghActivo == true) {
            efectoFinbourghActivo = false;
            valorDisparoCazador = valorDisparoCazador + 5;
        } else if (knuckleBallActivo == true) {
            knuckleBallActivo = false;
            valorDisparoCazador = valorDisparoCazador + 7;
        }
        descripcion = `${cazador} ha realizado un disparo (${valorDisparoCazador}) de penal.`;
        mostrarDescripcionTurno(descripcion);
        eleccionAtajadaGuardianA();
    } else if (tiroLargoActivo1B == true || tiroLargoActivo2B == true || tiroLargoActivo3B == true) {
        turnoPar = true;
        ataqueEquipoB = true;
        disparosRealizados ++;
        const min = 1;
        const max = disparo;
        valorDisparoCazador = Math.floor(Math.random() * (max - min + 1)) + min;
        valorDisparoCazador = valorDisparoCazador + 5;
        descripcion = `${cazador} ha realizado un disparo de ${valorDisparoCazador}. Disparos realizados: ${disparosRealizados}.`;
        mostrarDescripcionTurno(descripcion);
        eleccionAtajadaGuardianA();
    } else if (disparoDeVoleaActivo == true) {
        disparoDeVoleaActivo = false;
        turnoPar = true;
        ataqueEquipoB = true;
        disparosRealizados ++;
        const min = 1;
        const max = disparo;
        valorDisparoCazador = Math.floor(Math.random() * (max - min + 1)) + min;
        valorDisparoCazador = valorDisparoCazador + 5;
        descripcion = `${cazador} ha realizado un disparo de ${valorDisparoCazador}. Disparos realizados: ${disparosRealizados}.`;
        mostrarDescripcionTurno(descripcion);
        if (paseLargoActivo == true) {
            paseLargoActivo = false;
            eleccionAtajadaGuardianA();
        } else {
            participacionGolpeGolpeadoresB()
        }
    } else {
        turnoPar = true;
        ataqueEquipoB = true;
        if (paseLargoActivo == true) {
            paseLargoActivo = false;
            eleccionAtajadaGuardianA();
        } else {
            participacionGolpeGolpeadoresA()
        }
        disparosRealizados ++;
        const min = 1;
        const max = disparo;
        if (disparoDeTorbellinoActivo == true) {
            disparoDeTorbellinoActivo = false;
            valorDisparoCazador = valorDisparoCazador + 5;
        } else if (efectoFinbourghActivo == true) {
            efectoFinbourghActivo = false;
            valorDisparoCazador = valorDisparoCazador + 5;
        } else if (knuckleBallActivo == true) {
            knuckleBallActivo = false;
            valorDisparoCazador = valorDisparoCazador + 7;
        }
        valorDisparoCazador = Math.floor(Math.random() * (max - min + 1)) + min;
        if (disparoIncomodo == true && disparoDebil == true) {
            disparoDebil = false;
            valorDisparoCazador = valorDisparoCazador - 3;
            descripcion = `${cazador} ha realizado un disparo de ${valorDisparoCazador}. Disparos realizados: ${disparosRealizados}.`;
            mostrarDescripcionTurno(descripcion);
        } else if (disparoDebil == true) {
            // Escenario de Knuckle Ball.
            disparoDebil = false;
            valorDisparoCazador = valorDisparoCazador - 3;
            descripcion = `${cazador} ha realizado un disparo de ${valorDisparoCazador}. Disparos realizados: ${disparosRealizados}.`;
            mostrarDescripcionTurno(descripcion);
        } else {
            descripcion = `${cazador} ha realizado un disparo de ${valorDisparoCazador}. Disparos realizados: ${disparosRealizados}.`;
            mostrarDescripcionTurno(descripcion);
        }
    }
    botonDisparoCazador1B.disabled = true;
    habilidadesInactivasDisparoCazador1B()
    botonDisparoCazador2B.disabled = true;
    habilidadesInactivasDisparoCazador2B()
    botonDisparoCazador3B.disabled = true;
    habilidadesInactivasDisparoCazador3B()
    if (cazador == cazador1B) {
        valorDisparoCazador1B = valorDisparoCazador;
    } else if (cazador == cazador2B) {
        valorDisparoCazador2B = valorDisparoCazador;
    } else if (cazador == cazador3B) {
        valorDisparoCazador3B = valorDisparoCazador;
    }
    if (cazador == cazador1B && turnoPenal == false) {
        disparosRealizados1B ++;
    } else if (cazador == cazador2B && turnoPenal == false) {
        disparosRealizados2B ++;
    } else if (cazador == cazador3B && turnoPenal == false) {
        disparosRealizados3B ++;
    }
}

function lanzarTiroLargo (cazador, usosTiroLargo, tiroLargo) {
    if (turnoImpar == true) {
        if (cazador == cazador1A) {
            tiroLargoActivo1A = true;
        } else if (cazador == cazador2A) {
            tiroLargoActivo2A = true;
        } else if (cazador == cazador3A) {
            tiroLargoActivo3A = true;
        } else if (cazador == cazador1B) {
            tiroLargoActivo1B = true;
        } else if (cazador == cazador2B) {
            tiroLargoActivo2B = true;
        } else if (cazador == cazador3B) {
            tiroLargoActivo3B = true;
        }
        numeroTurnoPar += 2;
        descripcion = `____________________`
        mostrarDescripcionTurno(descripcion)
        descripcion = `Turno ` + numeroTurnoPar;
        mostrarDescripcionTurno(descripcion);
        descripcion = ` - - - - - - - - - - - - - - - - `
        mostrarDescripcionTurno(descripcion)
    } else if (turnoPar == true) {
        if (cazador == cazador1A) {
            tiroLargoActivo1A = true;
        } else if (cazador == cazador2A) {
            tiroLargoActivo2A = true;
        } else if (cazador == cazador3A) {
            tiroLargoActivo3A = true;
        } else if (cazador == cazador1B) {
            tiroLargoActivo1B = true;
        } else if (cazador == cazador2B) {
            tiroLargoActivo2B = true;
        } else if (cazador == cazador3B) {
            tiroLargoActivo3B = true;
        }
    }
    disparoIncomodo = false;
    usosTiroLargo ++;
    let usosDisponibles
    usosDisponibles = tiroLargo - usosTiroLargo
    descripcion = `${cazador} ha realizado un Tiro Largo. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion);
    if (cazador == cazador1A) {
        usosTiroLargo1A ++;
        lanzarDisparoCazadorA(cazador1A, disparo1A, valorDisparoCazador1A, disparosRealizados1A);
        botonTiroLargo1A.disabled = true;
        habilidadesInactivasDisparoCazador1A()
        botonReceptorPaseCazador2A.disabled = true;
        botonReceptorPaseCazador3A.disabled = true;
    } else if (cazador == cazador2A) {
        usosTiroLargo2A ++;
        lanzarDisparoCazadorA(cazador2A, disparo2A, valorDisparoCazador2A, disparosRealizados2A);
        botonTiroLargo2A.disabled = true;
        habilidadesInactivasDisparoCazador2A()
        botonReceptorPaseCazador1A.disabled = true;
        botonReceptorPaseCazador3A.disabled = true;
    } else if (cazador == cazador3A) {
        usosTiroLargo3A ++;
        lanzarDisparoCazadorA(cazador3A, disparo3A, valorDisparoCazador3A, disparosRealizados3A);
        botonTiroLargo3A.disabled = true;
        habilidadesInactivasDisparoCazador3A()
        botonReceptorPaseCazador1A.disabled = true;
        botonReceptorPaseCazador2A.disabled = true;
    } else if (cazador == cazador1B) {
        usosTiroLargo1B ++;
        lanzarDisparoCazadorB(cazador1B, disparo1B, valorDisparoCazador1B, disparosRealizados1B);
        botonTiroLargo1B.disabled = true;
        habilidadesInactivasDisparoCazador1B()
        botonReceptorPaseCazador2B.disabled = true;
        botonReceptorPaseCazador3B.disabled = true;
    } else if (cazador == cazador2B) {
        usosTiroLargo2B ++;
        lanzarDisparoCazadorB(cazador2B, disparo2B, valorDisparoCazador2B, disparosRealizados2B);
        botonTiroLargo2B.disabled = true;
        habilidadesInactivasDisparoCazador2B()
        botonReceptorPaseCazador1B.disabled = true;
        botonReceptorPaseCazador3B.disabled = true;
    } else if (cazador == cazador3B) {
        usosTiroLargo3B ++;
        lanzarDisparoCazadorB(cazador3B, disparo3B, valorDisparoCazador3B, disparosRealizados3B);
        botonTiroLargo3B.disabled = true;
        habilidadesInactivasDisparoCazador3B()
        botonReceptorPaseCazador1B.disabled = true;
        botonReceptorPaseCazador2B.disabled = true;
    }
}

function lanzarDisparoDeTorbellino (cazador, usosDisparoDeTorbellino, disparoDeTorbellino) {
    disparoDeTorbellinoActivo = true;
    presionEfectiva = false;
    usosDisparoDeTorbellino ++;
    let usosDisponibles
    usosDisponibles = disparoDeTorbellino - usosDisparoDeTorbellino
    descripcion = `${cazador} ha realizado un Disparo de Torbellino. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion);
    if (cazador == cazador1A) {
        usosDisparoDeTorbellino1A ++;
        lanzarDisparoCazadorA(cazador1A, disparo1A, valorDisparoCazador1A, disparosRealizados1A);
        botonDisparoDeTorbellino1A.disabled = true;
        habilidadesInactivasDisparoCazador1A()
    } else if (cazador == cazador2A) {
        usosDisparoDeTorbellino2A ++;
        lanzarDisparoCazadorA(cazador2A, disparo2A, valorDisparoCazador2A, disparosRealizados2A);
        botonDisparoDeTorbellino2A.disabled = true;
        habilidadesInactivasDisparoCazador2A()
    } else if (cazador == cazador3A) {
        usosDisparoDeTorbellino3A ++;
        lanzarDisparoCazadorA(cazador3A, disparo3A, valorDisparoCazador3A, disparosRealizados3A);
        botonDisparoDeTorbellino3A.disabled = true;
        habilidadesInactivasDisparoCazador3A()
    } else if (cazador == cazador1B) {
        usosDisparoDeTorbellino1B ++;
        lanzarDisparoCazadorB(cazador1B, disparo1B, valorDisparoCazador1B, disparosRealizados1B);
        botonDisparoDeTorbellino1B.disabled = true;
        habilidadesInactivasDisparoCazador1B()
    } else if (cazador == cazador2B) {
        usosDisparoDeTorbellino2B ++;
        lanzarDisparoCazadorB(cazador2B, disparo2B, valorDisparoCazador2B, disparosRealizados2B);
        botonDisparoDeTorbellino2B.disabled = true;
        habilidadesInactivasDisparoCazador2B()
    } else if (cazador == cazador3B) {
        usosDisparoDeTorbellino3B ++;
        lanzarDisparoCazadorB(cazador3B, disparo3B, valorDisparoCazador3B, disparosRealizados3B);
        botonDisparoDeTorbellino3B.disabled = true;
        habilidadesInactivasDisparoCazador3B()
    }
}

function lanzarDisparoConAmague (cazador, usosDisparoConAmague, disparoConAmague) {
    if (turnoImpar == true) {
        if (cazador == cazador1A) {
            disparoConAmagueActivo1A = true;
        } else if (cazador == cazador2A) {
            disparoConAmagueActivo2A = true;
        } else if (cazador == cazador3A) {
            disparoConAmagueActivo3A = true;
        } else if (cazador == cazador1B) {
            disparoConAmagueActivo1B = true;
        } else if (cazador == cazador2B) {
            disparoConAmagueActivo2B = true;
        } else if (cazador == cazador3B) {
            disparoConAmagueActivo3B = true;
        }
        numeroTurnoPar += 2;
        descripcion = `____________________`
        mostrarDescripcionTurno(descripcion)
        descripcion = `Turno ` + numeroTurnoPar;
        mostrarDescripcionTurno(descripcion);
        descripcion = ` - - - - - - - - - - - - - - - - `
        mostrarDescripcionTurno(descripcion)
    } else if (turnoPar == true) {
        if (cazador == cazador1A) {
            disparoConAmagueActivo1A = true;
        } else if (cazador == cazador2A) {
            disparoConAmagueActivo2A = true;
        } else if (cazador == cazador3A) {
            disparoConAmagueActivo3A = true;
        } else if (cazador == cazador1B) {
            disparoConAmagueActivo1B = true;
        } else if (cazador == cazador2B) {
            disparoConAmagueActivo2B = true;
        } else if (cazador == cazador3B) {
            disparoConAmagueActivo3B = true;
        }
    }
    disparoIncomodo = false;
    usosDisparoConAmague ++;
    let usosDisponibles
    usosDisponibles = disparoConAmague - usosDisparoConAmague
    descripcion = `${cazador} ha realizado un Disparo con amague. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion);
    if (cazador == cazador1A) {
        usosDisparoConAmague1A ++;
        lanzarDisparoCazadorA(cazador1A, disparo1A, valorDisparoCazador1A, disparosRealizados1A);
        botonDisparoConAmague1A.disabled = true;
        habilidadesInactivasDisparoCazador1A()
        botonReceptorPaseCazador2A.disabled = true;
        botonReceptorPaseCazador3A.disabled = true;
    } else if (cazador == cazador2A) {
        usosDisparoConAmague2A ++;
        lanzarDisparoCazadorA(cazador2A, disparo2A, valorDisparoCazador2A, disparosRealizados2A);
        botonDisparoConAmague2A.disabled = true;
        habilidadesInactivasDisparoCazador2A()
        botonReceptorPaseCazador1A.disabled = true;
        botonReceptorPaseCazador3A.disabled = true;
    } else if (cazador == cazador3A) {
        usosDisparoConAmague3A ++;
        lanzarDisparoCazadorA(cazador3A, disparo3A, valorDisparoCazador3A, disparosRealizados3A);
        botonDisparoConAmague3A.disabled = true;
        habilidadesInactivasDisparoCazador3A()
        botonReceptorPaseCazador1A.disabled = true;
        botonReceptorPaseCazador2A.disabled = true;
    } else if (cazador == cazador1B) {
        usosDisparoConAmague1B ++;
        lanzarDisparoCazadorB(cazador1B, disparo1B, valorDisparoCazador1B, disparosRealizados1B);
        botonDisparoConAmague1B.disabled = true;
        habilidadesInactivasDisparoCazador1B()
        botonReceptorPaseCazador2B.disabled = true;
        botonReceptorPaseCazador3B.disabled = true;
    } else if (cazador == cazador2B) {
        usosDisparoConAmague2B ++;
        lanzarDisparoCazadorB(cazador2B, disparo2B, valorDisparoCazador2B, disparosRealizados2B);
        botonDisparoConAmague2B.disabled = true;
        habilidadesInactivasDisparoCazador2B()
        botonReceptorPaseCazador1B.disabled = true;
        botonReceptorPaseCazador3B.disabled = true;
    } else if (cazador == cazador3B) {
        usosDisparoConAmague3B ++;
        lanzarDisparoCazadorB(cazador3B, disparo3B, valorDisparoCazador3B, disparosRealizados3B);
        botonDisparoConAmague3B.disabled = true;
        habilidadesInactivasDisparoCazador3B()
        botonReceptorPaseCazador1B.disabled = true;
        botonReceptorPaseCazador2B.disabled = true;
    }
}

function lanzarEfectoFinbourgh (cazador, usosEfectoFinbourgh, efectoFinbourgh) {
    efectoFinbourghActivo = true;
    usosEfectoFinbourgh ++;
    let usosDisponibles
    usosDisponibles = efectoFinbourgh - usosEfectoFinbourgh
    descripcion = `${cazador} ha realizado un Efecto Finbourgh. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion);
    if (cazador == cazador1A) {
        usosEfectoFinbourgh1A ++;
        lanzarDisparoCazadorA(cazador1A, disparo1A, valorDisparoCazador1A, disparosRealizados1A);
        botonEfectoFinbourgh1A.disabled = true;
        habilidadesInactivasDisparoCazador1A()
    } else if (cazador == cazador2A) {
        usosEfectoFinbourgh2A ++;
        lanzarDisparoCazadorA(cazador2A, disparo2A, valorDisparoCazador2A, disparosRealizados2A);
        botonEfectoFinbourgh2A.disabled = true;
        habilidadesInactivasDisparoCazador2A()
    } else if (cazador == cazador3A) {
        usosEfectoFinbourgh3A ++;
        lanzarDisparoCazadorA(cazador3A, disparo3A, valorDisparoCazador3A, disparosRealizados3A);
        botonEfectoFinbourgh3A.disabled = true;
        habilidadesInactivasDisparoCazador3A()
    } else if (cazador == cazador1B) {
        usosEfectoFinbourgh1B ++;
        lanzarDisparoCazadorB(cazador1B, disparo1B, valorDisparoCazador1B, disparosRealizados1B);
        botonEfectoFinbourgh1B.disabled = true;
        habilidadesInactivasDisparoCazador1B()
    } else if (cazador == cazador2B) {
        usosEfectoFinbourgh2B ++;
        lanzarDisparoCazadorB(cazador2B, disparo2B, valorDisparoCazador2B, disparosRealizados2B);
        botonEfectoFinbourgh2B.disabled = true;
        habilidadesInactivasDisparoCazador2B()
    } else if (cazador == cazador3B) {
        usosEfectoFinbourgh3B ++;
        lanzarDisparoCazadorB(cazador3B, disparo3B, valorDisparoCazador3B, disparosRealizados3B);
        botonEfectoFinbourgh3B.disabled = true;
        habilidadesInactivasDisparoCazador3B()
    }
}

function lanzarKnuckleBall (cazador, usosKnuckleBall, knuckleBall) {
    knuckleBallActivo = true;
    disparoIncomodo = false;
    usosKnuckleBall ++;
    let usosDisponibles
    usosDisponibles = knuckleBall - usosKnuckleBall
    descripcion = `${cazador} ha realizado un Knuckle Ball. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion);
    if (cazador == cazador1A) {
        usosKnuckleBall1A ++;
        lanzarDisparoCazadorA(cazador1A, disparo1A, valorDisparoCazador1A, disparosRealizados1A);
        botonKnuckleBall1A.disabled = true;
        habilidadesInactivasDisparoCazador1A()
    } else if (cazador == cazador2A) {
        usosKnuckleBall2A ++;
        lanzarDisparoCazadorA(cazador2A, disparo2A, valorDisparoCazador2A, disparosRealizados2A);
        botonKnuckleBall2A.disabled = true;
        habilidadesInactivasDisparoCazador2A()
    } else if (cazador == cazador3A) {
        usosKnuckleBall3A ++;
        lanzarDisparoCazadorA(cazador3A, disparo3A, valorDisparoCazador3A, disparosRealizados3A);
        botonKnuckleBall3A.disabled = true;
        habilidadesInactivasDisparoCazador3A()
    } else if (cazador == cazador1B) {
        usosKnuckleBall1B ++;
        lanzarDisparoCazadorB(cazador1B, disparo1B, valorDisparoCazador1B, disparosRealizados1B);
        botonKnuckleBall1B.disabled = true;
        habilidadesInactivasDisparoCazador1B()
    } else if (cazador == cazador2B) {
        usosKnuckleBall2B ++;
        lanzarDisparoCazadorB(cazador2B, disparo2B, valorDisparoCazador2B, disparosRealizados2B);
        botonKnuckleBall2B.disabled = true;
        habilidadesInactivasDisparoCazador2B()
    } else if (cazador == cazador3B) {
        usosKnuckleBall3B ++;
        lanzarDisparoCazadorB(cazador3B, disparo3B, valorDisparoCazador3B, disparosRealizados3B);
        botonKnuckleBall3B.disabled = true;
        habilidadesInactivasDisparoCazador3B()
    }
}

function lanzarDisparoDeVolea (cazador, usosDisparoDeVolea, disparoDeVolea) {
    disparoDeVoleaActivo = true;
    disparoIncomodo = false;
    usosDisparoDeVolea ++;
    let usosDisponibles
    usosDisponibles = disparoDeVolea - usosDisparoDeVolea
    descripcion = `${cazador} ha realizado un Disparo de volea. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion);
    if (cazador == cazador1A) {
        usosDisparoDeVolea1A ++;
        lanzarDisparoCazadorA(cazador1A, disparo1A, valorDisparoCazador1A, disparosRealizados1A);
        botonDisparoDeVolea1A.disabled = true;
        habilidadesInactivasDisparoCazador1A()
    } else if (cazador == cazador2A) {
        usosDisparoDeVolea2A ++;
        lanzarDisparoCazadorA(cazador2A, disparo2A, valorDisparoCazador2A, disparosRealizados2A);
        botonDisparoDeVolea2A.disabled = true;
        habilidadesInactivasDisparoCazador2A()
    } else if (cazador == cazador3A) {
        usosDisparoDeVolea3A ++;
        lanzarDisparoCazadorA(cazador3A, disparo3A, valorDisparoCazador3A, disparosRealizados3A);
        botonDisparoDeVolea3A.disabled = true;
        habilidadesInactivasDisparoCazador3A()
    } else if (cazador == cazador1B) {
        usosDisparoDeVolea1B ++;
        lanzarDisparoCazadorB(cazador1B, disparo1B, valorDisparoCazador1B, disparosRealizados1B);
        botonDisparoDeVolea1B.disabled = true;
        habilidadesInactivasDisparoCazador1B()
    } else if (cazador == cazador2B) {
        usosDisparoDeVolea2B ++;
        lanzarDisparoCazadorB(cazador2B, disparo2B, valorDisparoCazador2B, disparosRealizados2B);
        botonDisparoDeVolea2B.disabled = true;
        habilidadesInactivasDisparoCazador2B()
    } else if (cazador == cazador3B) {
        usosDisparoDeVolea3B ++;
        lanzarDisparoCazadorB(cazador3B, disparo3B, valorDisparoCazador3B, disparosRealizados3B);
        botonDisparoDeVolea3B.disabled = true;
        habilidadesInactivasDisparoCazador3B()
    }
}

function lanzarAvistamientoBuscadorA() {
    avistamientoA = true;
    botonAvistamientoBuscadorA.disabled = true;
    botonAmagoDeWronskiA.disabled = true;
    botonPerspicaciaA.disabled = true;
    participacionGolpeGolpeadoresB()
    const min = 1;
    const max = avistamientoA;
    if (numeroTurnoBuscador == 1) {
        valorAvistamientoBuscadorA1 = Math.floor(Math.random() * (max - min + 1)) + min;
        if (ubicacionA == true) {
            valorAvistamientoBuscadorA1 = valorAvistamientoBuscadorA1 + 3;
        }
        if (amagoDeWronskiActivoA == true) {
            valorAvistamientoBuscadorA1 = valorAvistamientoBuscadorA1 + 3;
        } else if (perspicaciaActivoA == true) {
            valorAvistamientoBuscadorA1 = valorAvistamientoBuscadorA1 + 5;
        }
        descripcion = `${buscadorA} mira a sus alrededores (${valorAvistamientoBuscadorA1}) en busca de la snitch.`;
        mostrarDescripcionTurno(descripcion);
    } else if (numeroTurnoBuscador == 2) {
        valorAvistamientoBuscadorA2 = Math.floor(Math.random() * (max - min + 1)) + min;
        if (amagoDeWronskiActivoA == true) {
            valorAvistamientoBuscadorA2 = valorAvistamientoBuscadorA2 + 3;
        } else if (perspicaciaActivoA == true) {
            valorAvistamientoBuscadorA2 = valorAvistamientoBuscadorA2 + 5;
        }
        descripcion = `${buscadorA} mira a sus alrededores (${valorAvistamientoBuscadorA2}) en busca de la snitch.`;
        mostrarDescripcionTurno(descripcion);
    } else if (numeroTurnoBuscador == 3) {
        valorAvistamientoBuscadorA3 = Math.floor(Math.random() * (max - min + 1)) + min;
        if (amagoDeWronskiActivoA == true) {
            valorAvistamientoBuscadorA3 = valorAvistamientoBuscadorA3 + 3;
        } else if (perspicaciaActivoA == true) {
            valorAvistamientoBuscadorA2 = valorAvistamientoBuscadorA2 + 5;
        }
        descripcion = `${buscadorA} mira a sus alrededores (${valorAvistamientoBuscadorA3}) en busca de la snitch.`;
        mostrarDescripcionTurno(descripcion);
    } else {
        descripcion = `Situación inesperada 70.`;
        mostrarDescripcionTurno(descripcion);
    }
}

function lanzarAvistamientoBuscadorB() {
    avistamientoB = true;
    botonAvistamientoBuscadorB.disabled = true;
    botonAmagoDeWronskiB.disabled = true;
    botonPerspicaciaB.disabled = true;
    participacionGolpeGolpeadoresA()
    const min = 1;
    const max = avistamientoB;
    if (numeroTurnoBuscador == 1) {
        valorAvistamientoBuscadorB1 = Math.floor(Math.random() * (max - min + 1)) + min;
        if (ubicacionB == true) {
            valorAvistamientoBuscadorB1 = valorAvistamientoBuscadorB1 + 3;
        }
        if (amagoDeWronskiActivoB == true) {
            valorAvistamientoBuscadorB1 = valorAvistamientoBuscadorB1 + 3;
        } else if (perspicaciaActivoB == true) {
            valorAvistamientoBuscadorB1 = valorAvistamientoBuscadorB1 + 5;
        }
        descripcion = `${buscadorB} mira a sus alrededores (${valorAvistamientoBuscadorB1}) en busca de la snitch.`;
        mostrarDescripcionTurno(descripcion);
    } else if (numeroTurnoBuscador == 2) {
        valorAvistamientoBuscadorB2 = Math.floor(Math.random() * (max - min + 1)) + min;
        if (amagoDeWronskiActivoB == true) {
            valorAvistamientoBuscadorB2 = valorAvistamientoBuscadorB2 + 3;
        } else if (perspicaciaActivoB == true) {
            valorAvistamientoBuscadorB2 = valorAvistamientoBuscadorB2 + 5;
        }
        descripcion = `${buscadorB} mira a sus alrededores (${valorAvistamientoBuscadorB2}) en busca de la snitch.`;
        mostrarDescripcionTurno(descripcion);
    } else if (numeroTurnoBuscador == 3) {
        valorAvistamientoBuscadorB3 = Math.floor(Math.random() * (max - min + 1)) + min;
        if (amagoDeWronskiActivoB == true) {
            valorAvistamientoBuscadorB3 = valorAvistamientoBuscadorB3 + 3;
        } else if (perspicaciaActivoB == true) {
            valorAvistamientoBuscadorB3 = valorAvistamientoBuscadorB3 + 5;
        }
        descripcion = `${buscadorB} mira a sus alrededores (${valorAvistamientoBuscadorB3}) en busca de la snitch.`;
        mostrarDescripcionTurno(descripcion);
    } else {
        descripcion = `Situación inesperada 71.`;
        mostrarDescripcionTurno(descripcion);
    }
}

function calcularAvistamientoTotal() {
    botonAvistamiento.disabled = true;
    valorAvistamientoTotalBuscadorA = valorAvistamientoBuscadorA1 + valorAvistamientoBuscadorA2 + valorAvistamientoBuscadorA3;
    valorAvistamientoTotalBuscadorB = valorAvistamientoBuscadorB1 + valorAvistamientoBuscadorB2 + valorAvistamientoBuscadorB3;
    if (valorAvistamientoTotalBuscadorA > valorAvistamientoTotalBuscadorB) {
        descripcion = `${buscadorA} ha avistado la snitch (${valorAvistamientoTotalBuscadorA} a ${valorAvistamientoTotalBuscadorB}) y se lanza hacia ella.`;
        mostrarDescripcionTurno(descripcion);
        botonVelocidadBuscadorA.disabled = false;
        if (usosUltimoAlientoA < ultimoAlientoA) {
            botonUltimoAlientoA.disabled = false;
        }
        if (usosCaidaEnPicadaA < caidaEnPicadaA) {
            botonCaidaEnPicadaA.disabled = false;
        }
        botonGolpeGolpeador1A.disabled = true;
        botonGolpeGolpeador2A.disabled = true;
        valorVelocidadBuscadorB3 = 0;
    } else if (valorAvistamientoTotalBuscadorB > valorAvistamientoTotalBuscadorA) {
        descripcion = `${buscadorB} ha avistado la snitch (${valorAvistamientoTotalBuscadorB} a ${valorAvistamientoTotalBuscadorA}) y se lanza hacia ella.`;
        mostrarDescripcionTurno(descripcion);
        botonVelocidadBuscadorB.disabled = false;
        if (usosUltimoAlientoB < ultimoAlientoB) {
            botonUltimoAlientoB.disabled = false;
        }
        if (usosCaidaEnPicadaB < caidaEnPicadaB) {
            botonCaidaEnPicadaB.disabled = false;
        }
        botonGolpeGolpeador1B.disabled = true;
        botonGolpeGolpeador2B.disabled = true;
        valorVelocidadBuscadorA3 = 0;
    } else {
        descripcion = `Ambos buscadores han avistado la snitch (${valorAvistamientoTotalBuscadorA} a ${valorAvistamientoTotalBuscadorB}) y se lanzan hacia ella.`;
        mostrarDescripcionTurno(descripcion);
        botonVelocidadBuscadorA.disabled = false;
        if (usosUltimoAlientoA < ultimoAlientoA) {
            botonUltimoAlientoA.disabled = false;
        }
        if (usosCaidaEnPicadaA < caidaEnPicadaA) {
            botonCaidaEnPicadaA.disabled = false;
        }
        botonVelocidadBuscadorB.disabled = false;
        if (usosUltimoAlientoB < ultimoAlientoB) {
            botonUltimoAlientoB.disabled = false;
        }
        if (usosCaidaEnPicadaB < caidaEnPicadaB) {
            botonCaidaEnPicadaB.disabled = false;
        }
    }
}

function lanzarVelocidadBuscadorA() {
    botonVelocidadBuscadorA.disabled = true;
    botonCaidaEnPicadaA.disabled = true;
    botonUltimoAlientoA.disabled = true;
    botonAvance.disabled = false;
    const min = 1;
    const max = velocidadA;
    if (numeroTurnoBuscador == 3) {
        valorVelocidadBuscadorA3 = Math.floor(Math.random() * (max - min + 1)) + min;
        if (caidaEnPicadaActivoA == true) {
            valorVelocidadBuscadorA3 = valorVelocidadBuscadorA3 + 5;
        } else if (ultimoAlientoActivoA == true) {
            valorVelocidadBuscadorA3 = valorVelocidadBuscadorA3 + 7;
        }
        descripcion = `${buscadorA} ha avanzado ${valorVelocidadBuscadorA3} metros.`;
        mostrarDescripcionTurno(descripcion);
    } else if (numeroTurnoBuscador == 4) {
        valorVelocidadBuscadorA4 = Math.floor(Math.random() * (max - min + 1)) + min;
        if (giroA > giroB) {
            valorVelocidadBuscadorA4 = valorVelocidadBuscadorA4 + efectoGiro
        }
        if (caidaEnPicadaActivoA == true) {
            valorVelocidadBuscadorA4 = valorVelocidadBuscadorA4 + 5;
        } else if (ultimoAlientoActivoA == true) {
            valorVelocidadBuscadorA4 = valorVelocidadBuscadorA4 + 7;
        }
        participacionGolpeGolpeadoresB()
        descripcion = `${buscadorA} ha avanzado ${valorVelocidadBuscadorA4} metros.`;
        mostrarDescripcionTurno(descripcion);
    } else if (numeroTurnoBuscador == 5) {
        valorVelocidadBuscadorA5 = Math.floor(Math.random() * (max - min + 1)) + min;
        if (giroA > giroB) {
            valorVelocidadBuscadorA5 = valorVelocidadBuscadorA5 + efectoGiro
        }
        if (caidaEnPicadaActivoA == true) {
            valorVelocidadBuscadorA5 = valorVelocidadBuscadorA5 + 5;
        } else if (ultimoAlientoActivoA == true) {
            valorVelocidadBuscadorA5 = valorVelocidadBuscadorA5 + 7;
        }
        participacionGolpeGolpeadoresB()
        descripcion = `${buscadorA} ha avanzado ${valorVelocidadBuscadorA5} metros.`;
        mostrarDescripcionTurno(descripcion);
    } else if (numeroTurnoBuscador == 6) {
        valorVelocidadBuscadorA6 = Math.floor(Math.random() * (max - min + 1)) + min;
        if (giroA > giroB) {
            valorVelocidadBuscadorA6 = valorVelocidadBuscadorA6 + efectoGiro
        }
        if (caidaEnPicadaActivoA == true) {
            valorVelocidadBuscadorA6 = valorVelocidadBuscadorA6 + 5;
        } else if (ultimoAlientoActivoA == true) {
            valorVelocidadBuscadorA6 = valorVelocidadBuscadorA6 + 7;
        }
        participacionGolpeGolpeadoresB()
        descripcion = `${buscadorA} ha avanzado ${valorVelocidadBuscadorA6} metros.`;
        mostrarDescripcionTurno(descripcion);
    } else {
        descripcion = `Situación inesperada 90.`;
        mostrarDescripcionTurno(descripcion);
    }
}

function lanzarVelocidadBuscadorB() {
    botonVelocidadBuscadorB.disabled = true;
    botonCaidaEnPicadaB.disabled = true;
    botonUltimoAlientoB.disabled = true;
    botonAvance.disabled = false;
    const min = 1;
    const max = velocidadB;
    if (numeroTurnoBuscador == 3) {
        valorVelocidadBuscadorB3 = Math.floor(Math.random() * (max - min + 1)) + min;
        if (caidaEnPicadaActivoB == true) {
            valorVelocidadBuscadorB3 = valorVelocidadBuscadorB3 + 5;
        } else if (ultimoAlientoActivoB == true) {
            valorVelocidadBuscadorB3 = valorVelocidadBuscadorB3 + 7;
        }
        descripcion = `${buscadorB} ha avanzado ${valorVelocidadBuscadorB3} metros.`;
        mostrarDescripcionTurno(descripcion);
    } else if (numeroTurnoBuscador == 4) {
        valorVelocidadBuscadorB4 = Math.floor(Math.random() * (max - min + 1)) + min;
        if (giroB > giroA) {
            valorVelocidadBuscadorB4 = valorVelocidadBuscadorB4 + efectoGiro
        }
        if (caidaEnPicadaActivoB == true) {
            valorVelocidadBuscadorB4 = valorVelocidadBuscadorB4 + 5;
        } else if (ultimoAlientoActivoB == true) {
            valorVelocidadBuscadorB4 = valorVelocidadBuscadorB4 + 7;
        }
        participacionGolpeGolpeadoresA()
        descripcion = `${buscadorB} ha avanzado ${valorVelocidadBuscadorB4} metros.`;
        mostrarDescripcionTurno(descripcion);
    } else if (numeroTurnoBuscador == 5) {
        valorVelocidadBuscadorB5 = Math.floor(Math.random() * (max - min + 1)) + min;
        if (giroB > giroA) {
            valorVelocidadBuscadorB5 = valorVelocidadBuscadorB5 + efectoGiro
        }
        if (caidaEnPicadaActivoB == true) {
            valorVelocidadBuscadorB5 = valorVelocidadBuscadorB5 + 5;
        } else if (ultimoAlientoActivoB == true) {
            valorVelocidadBuscadorB5 = valorVelocidadBuscadorB5 + 7;
        }
        participacionGolpeGolpeadoresA()
        descripcion = `${buscadorB} ha avanzado ${valorVelocidadBuscadorB5} metros.`;
        mostrarDescripcionTurno(descripcion);
    } else if (numeroTurnoBuscador == 6) {
        valorVelocidadBuscadorB6 = Math.floor(Math.random() * (max - min + 1)) + min;
        if (giroB > giroA) {
            valorVelocidadBuscadorB6 = valorVelocidadBuscadorB6 + efectoGiro
        }
        if (caidaEnPicadaActivoB == true) {
            valorVelocidadBuscadorB6 = valorVelocidadBuscadorB6 + 5;
        } else if (ultimoAlientoActivoB == true) {
            valorVelocidadBuscadorB6 = valorVelocidadBuscadorB6 + 7;
        }
        participacionGolpeGolpeadoresA()
        descripcion = `${buscadorB} ha avanzado ${valorVelocidadBuscadorB6} metros.`;
        mostrarDescripcionTurno(descripcion);
    } else {
        descripcion = `Situación inesperada 91.`;
        mostrarDescripcionTurno(descripcion);
    }
}

function lanzarEvasionBuscadorA() {
    botonEvasionBuscadorA.disabled = true;
    if (numeroTurnoBuscador == 3) {
        botonAvistamiento.disabled = false;
    } else if (numeroTurnoBuscador > 3) {
        botonAvance.disabled = false;
    } else {
        botonIniciarTurnoImpar.disabled = false;
    }
    const min = 1;
    const max = 25;
    valorEvasionBuscadorA = Math.floor(Math.random() * (max - min + 1)) + min;
    if (amagoDeWronskiActivoB == true) {
        amagoDeWronskiActivoB = false;
        valorEvasionBuscadorA = valorEvasionBuscadorA + 3;
    } else if (caidaEnPicadaActivoB == true) {
        caidaEnPicadaActivoB = false;
        valorEvasionBuscadorA = valorEvasionBuscadorA + 3;
    }
    if (numeroTurnoBuscador == 1) {
        if (golpeCriticoB == true && valorEvasionBuscadorA <= 3) {
            descripcion = `${buscadorA} ha evadido de forma perfecta la bludger (${valorEvasionBuscadorA}).`;
            mostrarDescripcionTurno(descripcion);
            valorAvistamientoBuscadorA1 = valorAvistamientoBuscadorA1 - 3;
        } else if (golpeCriticoB == true && valorEvasionBuscadorA > 3) {
            descripcion = `${buscadorA} ha sido golpeado por la bludger crítica (${valorEvasionBuscadorA}).`;
            mostrarDescripcionTurno(descripcion);
            if (valorAvistamientoBuscadorA1 <= 10) {
                valorAvistamientoBuscadorA1 = valorAvistamientoBuscadorA1 - 5;
            } else {
                valorAvistamientoBuscadorA1 = valorAvistamientoBuscadorA1 / 2;
            }
        } else if (valorEvasionBuscadorA <= evasionBuscadorA) {
            descripcion = `${buscadorA} ha evadido la bludger (${valorEvasionBuscadorA}).`;
            mostrarDescripcionTurno(descripcion);
            valorAvistamientoBuscadorA1 = valorAvistamientoBuscadorA1 - 3;
        } else {
            descripcion = `${buscadorA} ha sido golpeado por la bludger (${valorEvasionBuscadorA}).`;
            mostrarDescripcionTurno(descripcion);
            if (valorAvistamientoBuscadorA1 <= 10) {
                valorAvistamientoBuscadorA1 = valorAvistamientoBuscadorA1 - 5;
            } else {
                valorAvistamientoBuscadorA1 = valorAvistamientoBuscadorA1 / 2;
            }
        }
    } else if (numeroTurnoBuscador == 2) {
        if (golpeCriticoB == true && valorEvasionBuscadorA <= 3) {
            descripcion = `${buscadorA} ha evadido de forma perfecta la bludger (${valorEvasionBuscadorA}).`;
            mostrarDescripcionTurno(descripcion);
            valorAvistamientoBuscadorA2 = valorAvistamientoBuscadorA2 - 3;
        } else if (golpeCriticoB == true && valorEvasionBuscadorA > 3) {
            descripcion = `${buscadorA} ha sido golpeado por la bludger crítica (${valorEvasionBuscadorA}).`;
            mostrarDescripcionTurno(descripcion);
            if (valorAvistamientoBuscadorA2 <= 10) {
                valorAvistamientoBuscadorA2 = valorAvistamientoBuscadorA2 - 5;
            } else {
                valorAvistamientoBuscadorA2 = valorAvistamientoBuscadorA2 / 2;
            }
        } else if (valorEvasionBuscadorA <= evasionBuscadorA) {
            descripcion = `${buscadorA} ha evadido la bludger (${valorEvasionBuscadorA}).`;
            mostrarDescripcionTurno(descripcion);
            valorAvistamientoBuscadorA2 = valorAvistamientoBuscadorA2 - 3;
        } else {
            descripcion = `${buscadorA} ha sido golpeado por la bludger (${valorEvasionBuscadorA}).`;
            mostrarDescripcionTurno(descripcion);
            if (valorAvistamientoBuscadorA2 <= 10) {
                valorAvistamientoBuscadorA2 = valorAvistamientoBuscadorA2 - 5;
            } else {
                valorAvistamientoBuscadorA2 = valorAvistamientoBuscadorA2 / 2;
            }
        }
    } else if (numeroTurnoBuscador == 3) {
        if (avistamientoSnitchA == true) {
            avistamientoSnitchA == false;
            if (golpeCriticoB == true && valorEvasionBuscadorA <= 3) {
                golpeCriticoB = false;
                descripcion = `${buscadorA} ha evadido de forma perfecta la bludger (${valorEvasionBuscadorA}).`;
                mostrarDescripcionTurno(descripcion);
                valorAvistamientoBuscadorA3 = valorAvistamientoBuscadorA3 - 3;
            } else if (golpeCriticoB == true && valorEvasionBuscadorA > 3) {
                golpeCriticoB = false;
                descripcion = `${buscadorA} ha sido golpeado por la bludger crítica (${valorEvasionBuscadorA}).`;
                mostrarDescripcionTurno(descripcion);
                if (valorAvistamientoBuscadorA3 <= 10) {
                    valorAvistamientoBuscadorA3 = valorAvistamientoBuscadorA3 - 5;
                } else {
                    valorAvistamientoBuscadorA3 = valorAvistamientoBuscadorA3 / 2;
                }
            } else if (valorEvasionBuscadorA <= evasionBuscadorA) {
                descripcion = `${buscadorA} ha evadido la bludger (${valorEvasionBuscadorA}).`;
                mostrarDescripcionTurno(descripcion);
                valorAvistamientoBuscadorA3 = valorAvistamientoBuscadorA3 - 3;
            } else {
                descripcion = `${buscadorA} ha sido golpeado por la bludger (${valorEvasionBuscadorA}).`;
                mostrarDescripcionTurno(descripcion);
                if (valorAvistamientoBuscadorA3 <= 10) {
                    valorAvistamientoBuscadorA3 = valorAvistamientoBuscadorA3 - 5;
                } else {
                    valorAvistamientoBuscadorA3 = valorAvistamientoBuscadorA3 / 2;
                }
            }
        } else {
            if (golpeCriticoB == true && valorEvasionBuscadorA <= 3) {
                golpeCriticoB = false;
                descripcion = `${buscadorA} ha evadido de forma perfecta la bludger (${valorEvasionBuscadorA}).`;
                mostrarDescripcionTurno(descripcion);
                valorVelocidadBuscadorA3 = valorVelocidadBuscadorA3 - 3;
            } else if (golpeCriticoB == true && valorEvasionBuscadorA > 3) {
                golpeCriticoB = false;
                descripcion = `${buscadorA} ha sido golpeado por la bludger crítica (${valorEvasionBuscadorA}).`;
                mostrarDescripcionTurno(descripcion);
                if (valorVelocidadBuscadorA3 <= 10) {
                    valorVelocidadBuscadorA3 = valorVelocidadBuscadorA3 - 5;
                } else {
                    valorVelocidadBuscadorA3 = valorVelocidadBuscadorA3 / 2;
                }
            } else if (valorEvasionBuscadorA <= evasionBuscadorA) {
                descripcion = `${buscadorA} ha evadido la bludger (${valorEvasionBuscadorA}).`;
                mostrarDescripcionTurno(descripcion);
                valorVelocidadBuscadorA3 = valorVelocidadBuscadorA3 - 3;
            } else {
                descripcion = `${buscadorA} ha sido golpeado por la bludger (${valorEvasionBuscadorA}).`;
                mostrarDescripcionTurno(descripcion);
                if (valorVelocidadBuscadorA3 <= 10) {
                    valorVelocidadBuscadorA3 = valorVelocidadBuscadorA3 - 5;
                } else {
                    valorVelocidadBuscadorA3 = valorVelocidadBuscadorA3 / 2;
                }
            }
        }
    } else if (numeroTurnoBuscador == 4) {
        if (golpeCriticoB == true && valorEvasionBuscadorA <= 3) {
            golpeCriticoB = false;
            descripcion = `${buscadorA} ha evadido de forma perfecta la bludger (${valorEvasionBuscadorA}).`;
            mostrarDescripcionTurno(descripcion);
            valorVelocidadBuscadorA4 = valorVelocidadBuscadorA4 - 3;
        } else if (golpeCriticoB == true && valorEvasionBuscadorA > 3) {
            golpeCriticoB = false;
            descripcion = `${buscadorA} ha sido golpeado por la bludger crítica (${valorEvasionBuscadorA}).`;
            mostrarDescripcionTurno(descripcion);
            if (valorVelocidadBuscadorA4 <= 10) {
                valorVelocidadBuscadorA4 = valorVelocidadBuscadorA4 - 5;
            } else {
                valorVelocidadBuscadorA4 = valorVelocidadBuscadorA4 / 2;
            }
        } else if (valorEvasionBuscadorA <= evasionBuscadorA) {
            descripcion = `${buscadorA} ha evadido la bludger (${valorEvasionBuscadorA}).`;
            mostrarDescripcionTurno(descripcion);
            valorVelocidadBuscadorA4 = valorVelocidadBuscadorA4 - 3;
        } else {
            descripcion = `${buscadorA} ha sido golpeado por la bludger (${valorEvasionBuscadorA}).`;
            mostrarDescripcionTurno(descripcion);
            if (valorVelocidadBuscadorA4 <= 10) {
                valorVelocidadBuscadorA4 = valorVelocidadBuscadorA4 - 5;
            } else {
                valorVelocidadBuscadorA4 = valorVelocidadBuscadorA4 / 2;
            }
        }
    } else if (numeroTurnoBuscador == 5) {
        if (golpeCriticoB == true && valorEvasionBuscadorA <= 3) {
            golpeCriticoB = false;
            descripcion = `${buscadorA} ha evadido de forma perfecta la bludger (${valorEvasionBuscadorA}).`;
            mostrarDescripcionTurno(descripcion);
            valorVelocidadBuscadorA5 = valorVelocidadBuscadorA5 - 3;
        } else if (golpeCriticoB == true && valorEvasionBuscadorA > 3) {
            golpeCriticoB = false;
            descripcion = `${buscadorA} ha sido golpeado por la bludger crítica (${valorEvasionBuscadorA}).`;
            mostrarDescripcionTurno(descripcion);
            if (valorVelocidadBuscadorA5 <= 10) {
                valorVelocidadBuscadorA5 = valorVelocidadBuscadorA5 - 5;
            } else {
                valorVelocidadBuscadorA5 = valorVelocidadBuscadorA5 / 2;
            }
        } else if (valorEvasionBuscadorA <= evasionBuscadorA) {
            descripcion = `${buscadorA} ha evadido la bludger (${valorEvasionBuscadorA}).`;
            mostrarDescripcionTurno(descripcion);
            valorVelocidadBuscadorA5 = valorVelocidadBuscadorA5 - 3;
        } else {
            descripcion = `${buscadorA} ha sido golpeado por la bludger (${valorEvasionBuscadorA}).`;
            mostrarDescripcionTurno(descripcion);
            if (valorVelocidadBuscadorA5 <= 10) {
                valorVelocidadBuscadorA5 = valorVelocidadBuscadorA5 - 5;
            } else {
                valorVelocidadBuscadorA5 = valorVelocidadBuscadorA5 / 2;
            }
        }
    } else if (numeroTurnoBuscador == 6) {
        if (golpeCriticoB == true && valorEvasionBuscadorA <= 3) {
            golpeCriticoB = false;
            descripcion = `${buscadorA} ha evadido de forma perfecta la bludger (${valorEvasionBuscadorA}).`;
            mostrarDescripcionTurno(descripcion);
            valorVelocidadBuscadorA6 = valorVelocidadBuscadorA6 - 3;
        } else if (golpeCriticoB == true && valorEvasionBuscadorA > 3) {
            golpeCriticoB = false;
            descripcion = `${buscadorA} ha sido golpeado por la bludger crítica (${valorEvasionBuscadorA}).`;
            mostrarDescripcionTurno(descripcion);
            if (valorVelocidadBuscadorA6 <= 10) {
                valorVelocidadBuscadorA6 = valorVelocidadBuscadorA6 - 5;
            } else {
                valorVelocidadBuscadorA6 = valorVelocidadBuscadorA6 / 2;
            }
        } else if (valorEvasionBuscadorA <= evasionBuscadorA) {
            descripcion = `${buscadorA} ha evadido la bludger (${valorEvasionBuscadorA}).`;
            mostrarDescripcionTurno(descripcion);
            valorVelocidadBuscadorA6 = valorVelocidadBuscadorA6 - 3;
        } else {
            descripcion = `${buscadorA} ha sido golpeado por la bludger (${valorEvasionBuscadorA}).`;
            mostrarDescripcionTurno(descripcion);
            if (valorVelocidadBuscadorA6 <= 10) {
                valorVelocidadBuscadorA6 = valorVelocidadBuscadorA6 - 5;
            } else {
                valorVelocidadBuscadorA6 = valorVelocidadBuscadorA6 / 2;
            }
        }
    } else {
        descripcion = `Error inesperado 114(a).`;
        mostrarDescripcionTurno(descripcion);
    }
}

function lanzarEvasionBuscadorB() {
    botonEvasionBuscadorB.disabled = true;
    if (numeroTurnoBuscador == 3) {
        botonAvistamiento.disabled = false;
    } else if (numeroTurnoBuscador > 3) {
        botonAvance.disabled = false;
    } else {
        botonIniciarTurnoImpar.disabled = false;
    }
    const min = 1;
    const max = 25;
    valorEvasionBuscadorB = Math.floor(Math.random() * (max - min + 1)) + min;
    if (amagoDeWronskiActivoA == true) {
        amagoDeWronskiActivoA = false;
        valorEvasionBuscadorB = valorEvasionBuscadorB + 3;
    } else if (caidaEnPicadaActivoA == true) {
        caidaEnPicadaActivoA = false;
        valorEvasionBuscadorB = valorEvasionBuscadorB + 3;
    }
    if (numeroTurnoBuscador == 1) {
        if (golpeCriticoA == true && valorEvasionBuscadorA <= 3) {
            golpeCriticoA = false;
            descripcion = `${buscadorB} ha evadido de forma perfecta la bludger (${valorEvasionBuscadorB}).`;
            mostrarDescripcionTurno(descripcion);
            valorAvistamientoBuscadorB1 = valorAvistamientoBuscadorB1 - 3;
        } else if (golpeCriticoA == true && valorEvasionBuscadorB > 3) {
            golpeCriticoA = false;
            descripcion = `${buscadorB} ha sido golpeado por la bludger crítica (${valorEvasionBuscadorB}).`;
            mostrarDescripcionTurno(descripcion);
            if (valorAvistamientoBuscadorB1 <= 10) {
                valorAvistamientoBuscadorB1 = valorAvistamientoBuscadorB1 - 5;
            } else {
                valorAvistamientoBuscadorB1 = valorAvistamientoBuscadorB1 / 2;
            }
        } else if (valorEvasionBuscadorB <= evasionBuscadorB) {
            descripcion = `${buscadorB} ha evadido la bludger (${valorEvasionBuscadorB}).`;
            mostrarDescripcionTurno(descripcion);
            valorAvistamientoBuscadorB1 = valorAvistamientoBuscadorB1 - 3;
        } else {
            descripcion = `${buscadorB} ha sido golpeado por la bludger (${valorEvasionBuscadorB}).`;
            mostrarDescripcionTurno(descripcion);
            if (valorAvistamientoBuscadorB1 <= 10) {
                valorAvistamientoBuscadorB1 = valorAvistamientoBuscadorB1 - 5;
            } else {
                valorAvistamientoBuscadorB1 = valorAvistamientoBuscadorB1 / 2;
            }
        }
    } else if (numeroTurnoBuscador == 2) {
        if (golpeCriticoA == true && valorEvasionBuscadorB <= 3) {
            golpeCriticoA = false;
            descripcion = `${buscadorB} ha evadido de forma perfecta la bludger (${valorEvasionBuscadorB}).`;
            mostrarDescripcionTurno(descripcion);
            valorAvistamientoBuscadorB2 = valorAvistamientoBuscadorB2 - 3;
        } else if (golpeCriticoA == true && valorEvasionBuscadorB > 3) {
            golpeCriticoA = false;
            descripcion = `${buscadorB} ha sido golpeado por la bludger crítica (${valorEvasionBuscadorB}).`;
            mostrarDescripcionTurno(descripcion);
            if (valorAvistamientoBuscadorB2 <= 10) {
                valorAvistamientoBuscadorB2 = valorAvistamientoBuscadorB2 - 5;
            } else {
                valorAvistamientoBuscadorB2 = valorAvistamientoBuscadorB2 / 2;
            }
        } else if (valorEvasionBuscadorB <= evasionBuscadorB) {
            descripcion = `${buscadorB} ha evadido la bludger (${valorEvasionBuscadorB}).`;
            mostrarDescripcionTurno(descripcion);
            valorAvistamientoBuscadorB2 = valorAvistamientoBuscadorB2 - 3;
        } else {
            descripcion = `${buscadorB} ha sido golpeado por la bludger (${valorEvasionBuscadorB}).`;
            mostrarDescripcionTurno(descripcion);
            if (valorAvistamientoBuscadorB2 <= 10) {
                valorAvistamientoBuscadorB2 = valorAvistamientoBuscadorB2 - 5;
            } else {
                valorAvistamientoBuscadorB2 = valorAvistamientoBuscadorB2 / 2;
            }
        }
    } else if (numeroTurnoBuscador == 3) {
        if (avistamientoSnitchB == true) {
            avistamientoSnitchB == false;
            if (golpeCriticoA == true && valorEvasionBuscadorB <= 3) {
                golpeCriticoA = false;
                descripcion = `${buscadorB} ha evadido de forma perfecta la bludger (${valorEvasionBuscadorB}).`;
                mostrarDescripcionTurno(descripcion);
                valorAvistamientoBuscadorB3 = valorAvistamientoBuscadorB3 - 3;
            } else if (golpeCriticoA == true && valorEvasionBuscadorB > 3) {
                golpeCriticoA = false;
                descripcion = `${buscadorB} ha sido golpeado por la bludger crítica (${valorEvasionBuscadorB}).`;
                mostrarDescripcionTurno(descripcion);
                if (valorAvistamientoBuscadorB3 <= 10) {
                    valorAvistamientoBuscadorB3 = valorAvistamientoBuscadorB3 - 5;
                } else {
                    valorAvistamientoBuscadorB3 = valorAvistamientoBuscadorB3 / 2;
                }
            } else if (valorEvasionBuscadorB <= evasionBuscadorB) {
                descripcion = `${buscadorB} ha evadido la bludger (${valorEvasionBuscadorB}).`;
                mostrarDescripcionTurno(descripcion);
                valorAvistamientoBuscadorB3 = valorAvistamientoBuscadorB3 - 3;
            } else {
                descripcion = `${buscadorB} ha sido golpeado por la bludger (${valorEvasionBuscadorB}).`;
                mostrarDescripcionTurno(descripcion);
                if (valorAvistamientoBuscadorB3 <= 10) {
                    valorAvistamientoBuscadorB3 = valorAvistamientoBuscadorB3 - 5;
                } else {
                    valorAvistamientoBuscadorB3 = valorAvistamientoBuscadorB3 / 2;
                }
            }
        } else {
            if (golpeCriticoA == true && valorEvasionBuscadorA <= 3) {
                golpeCriticoA = false;
                descripcion = `${buscadorB} ha evadido de forma perfecta la bludger (${valorEvasionBuscadorB}).`;
                mostrarDescripcionTurno(descripcion);
                valorVelocidadBuscadorB3 = valorVelocidadBuscadorB3 - 3;
            } else if (golpeCriticoA == true && valorEvasionBuscadorB > 3) {
                golpeCriticoA = false;
                descripcion = `${buscadorB} ha sido golpeado por la bludger crítica (${valorEvasionBuscadorB}).`;
                mostrarDescripcionTurno(descripcion);
                if (valorVelocidadBuscadorB3 <= 10) {
                    valorVelocidadBuscadorB3 = valorVelocidadBuscadorB3 - 5;
                } else {
                    valorVelocidadBuscadorB3 = valorVelocidadBuscadorB3 / 2;
                }
            } else if (valorEvasionBuscadorB <= evasionBuscadorB) {
                descripcion = `${buscadorB} ha evadido la bludger (${valorEvasionBuscadorB}).`;
                mostrarDescripcionTurno(descripcion);
                valorVelocidadBuscadorB3 = valorVelocidadBuscadorB3 - 3;
            } else {
                descripcion = `${buscadorB} ha sido golpeado por la bludger (${valorEvasionBuscadorB}).`;
                mostrarDescripcionTurno(descripcion);
                if (valorVelocidadBuscadorB3 <= 10) {
                    valorVelocidadBuscadorB3 = valorVelocidadBuscadorB3 - 5;
                } else {
                    valorVelocidadBuscadorB3 = valorVelocidadBuscadorB3 / 2;
                }
            }
        }
    } else if (numeroTurnoBuscador == 4) {
        if (golpeCriticoA == true && valorEvasionBuscadorB <= 3) {
            golpeCriticoA = false;
            descripcion = `${buscadorB} ha evadido de forma perfecta la bludger (${valorEvasionBuscadorB}).`;
            mostrarDescripcionTurno(descripcion);
            valorVelocidadBuscadorB4 = valorVelocidadBuscadorB4 - 3;
        } else if (golpeCriticoA == true && valorEvasionBuscadorB > 3) {
            golpeCriticoA = false;
            descripcion = `${buscadorB} ha sido golpeado por la bludger crítica (${valorEvasionBuscadorB}).`;
            mostrarDescripcionTurno(descripcion);
            if (valorVelocidadBuscadorB4 <= 10) {
                valorVelocidadBuscadorB4 = valorVelocidadBuscadorB4 - 5;
            } else {
                valorVelocidadBuscadorB4 = valorVelocidadBuscadorB4 / 2;
            }
        } else if (valorEvasionBuscadorB <= evasionBuscadorB) {
            descripcion = `${buscadorB} ha evadido la bludger (${valorEvasionBuscadorB}).`;
            mostrarDescripcionTurno(descripcion);
            valorVelocidadBuscadorB4 = valorVelocidadBuscadorB4 - 3;
        } else {
            descripcion = `${buscadorB} ha sido golpeado por la bludger (${valorEvasionBuscadorB}).`;
            mostrarDescripcionTurno(descripcion);
            if (valorVelocidadBuscadorB4 <= 10) {
                valorVelocidadBuscadorB4 = valorVelocidadBuscadorB4 - 5;
            } else {
                valorVelocidadBuscadorB4 = valorVelocidadBuscadorB4 / 2;
            }
        }
    } else if (numeroTurnoBuscador == 5) {
        if (golpeCriticoA == true && valorEvasionBuscadorB <= 3) {
            golpeCriticoA = false;
            descripcion = `${buscadorB} ha evadido de forma perfecta la bludger (${valorEvasionBuscadorB}).`;
            mostrarDescripcionTurno(descripcion);
            valorVelocidadBuscadorB5 = valorVelocidadBuscadorB5 - 3;
        } else if (golpeCriticoA == true && valorEvasionBuscadorB > 3) {
            golpeCriticoA = false;
            descripcion = `${buscadorB} ha sido golpeado por la bludger crítica (${valorEvasionBuscadorB}).`;
            mostrarDescripcionTurno(descripcion);
            if (valorVelocidadBuscadorB5 <= 10) {
                valorVelocidadBuscadorB5 = valorVelocidadBuscadorB5 - 5;
            } else {
                valorVelocidadBuscadorB5 = valorVelocidadBuscadorB5 / 2;
            }
        } else if (valorEvasionBuscadorB <= evasionBuscadorB) {
            descripcion = `${buscadorB} ha evadido la bludger (${valorEvasionBuscadorB}).`;
            mostrarDescripcionTurno(descripcion);
            valorVelocidadBuscadorB5 = valorVelocidadBuscadorB5 - 3;
        } else {
            descripcion = `${buscadorB} ha sido golpeado por la bludger (${valorEvasionBuscadorB}).`;
            mostrarDescripcionTurno(descripcion);
            if (valorVelocidadBuscadorB5 <= 10) {
                valorVelocidadBuscadorB5 = valorVelocidadBuscadorB5 - 5;
            } else {
                valorVelocidadBuscadorB5 = valorVelocidadBuscadorB5 / 2;
            }
        }
    } else if (numeroTurnoBuscador == 6) {
        if (golpeCriticoA == true && valorEvasionBuscadorB <= 3) {
            golpeCriticoA = false;
            descripcion = `${buscadorB} ha evadido de forma perfecta la bludger (${valorEvasionBuscadorB}).`;
            mostrarDescripcionTurno(descripcion);
            valorVelocidadBuscadorB6 = valorVelocidadBuscadorB6 - 3;
        } else if (golpeCriticoA == true && valorEvasionBuscadorB > 3) {
            golpeCriticoA = false;
            descripcion = `${buscadorB} ha sido golpeado por la bludger crítica (${valorEvasionBuscadorB}).`;
            mostrarDescripcionTurno(descripcion);
            if (valorVelocidadBuscadorB6 <= 10) {
                valorVelocidadBuscadorB6 = valorVelocidadBuscadorB6 - 5;
            } else {
                valorVelocidadBuscadorB6 = valorVelocidadBuscadorB6 / 2;
            }
        } else if (valorEvasionBuscadorB <= evasionBuscadorB) {
            descripcion = `${buscadorB} ha evadido la bludger (${valorEvasionBuscadorB}).`;
            mostrarDescripcionTurno(descripcion);
            valorVelocidadBuscadorB6 = valorVelocidadBuscadorB6 - 3;
        } else {
            descripcion = `${buscadorB} ha sido golpeado por la bludger (${valorEvasionBuscadorB}).`;
            mostrarDescripcionTurno(descripcion);
            if (valorVelocidadBuscadorB6 <= 10) {
                valorVelocidadBuscadorB6 = valorVelocidadBuscadorB6 - 5;
            } else {
                valorVelocidadBuscadorB6 = valorVelocidadBuscadorB6 / 2;
            }
        }
    } else {
        descripcion = `Error inesperado 114(b).`;
        mostrarDescripcionTurno(descripcion);
    }
}

function calcularAvanceTotal() {
    botonAvance.disabled = true;
    if (numeroTurnoBuscador == 3) {
        valorAvanceTotalBuscadorA = valorVelocidadBuscadorA3;
        valorAvanceTotalBuscadorB = valorVelocidadBuscadorB3;
        if (valorAvanceTotalBuscadorA > valorAvanceTotalBuscadorB) {
            descripcion = `${buscadorA} va por delante en la persecución: ${valorAvanceTotalBuscadorA} a ${valorAvanceTotalBuscadorB}.`;
            mostrarDescripcionTurno(descripcion);
            botonAgarreBuscadorA.disabled = false;
            if (usosEscarbatoA < escarbatoA) {
                botonEscarbatoA.disabled = false;
            }
            if (usosPlumptonPassA < plumptonPassA) {
                botonPlumptonPassA.disabled = false;
            }
            botonContinuarBuscadorA.disabled = false;
        } else if (valorAvanceTotalBuscadorA < valorAvanceTotalBuscadorB) {
            descripcion = `${buscadorB} va por delante en la persecución: ${valorAvanceTotalBuscadorB} a ${valorAvanceTotalBuscadorA}.`;
            mostrarDescripcionTurno(descripcion);
            botonAgarreBuscadorB.disabled = false;
            if (usosEscarbatoB < escarbatoB) {
                botonEscarbatoB.disabled = false;
            }
            if (usosPlumptonPassB < plumptonPassB) {
                botonPlumptonPassB.disabled = false;
            }
            botonContinuarBuscadorB.disabled = false;
        } else {
            if (numeroTurnoPar == 36) {
                descripcion = `El partido ha finalizado.`;
                mostrarDescripcionTurno(descripcion);
                descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
                mostrarDescripcionTurno(descripcion);
                resultadoAjustadoEquipoA()
                resultadoAjustadoEquipoB()
            } else {
                botonIniciarTurnoImpar.disabled = false;
            }
        }
    } else if (numeroTurnoBuscador == 4) {
        valorAvanceTotalBuscadorA = valorVelocidadBuscadorA3 + valorVelocidadBuscadorA4;
        valorAvanceTotalBuscadorB = valorVelocidadBuscadorB3 + valorVelocidadBuscadorB4;
        if (valorAvanceTotalBuscadorA > valorAvanceTotalBuscadorB) {
            descripcion = `${buscadorA} va por delante en la persecución: ${valorAvanceTotalBuscadorA} a ${valorAvanceTotalBuscadorB}.`;
            mostrarDescripcionTurno(descripcion);
            botonAgarreBuscadorA.disabled = false;
            if (usosEscarbatoA < escarbatoA) {
                botonEscarbatoA.disabled = false;
            }
            if (usosPlumptonPassA < plumptonPassA) {
                botonPlumptonPassA.disabled = false;
            }
            botonContinuarBuscadorA.disabled = false;
        } else if (valorAvanceTotalBuscadorA < valorAvanceTotalBuscadorB) {
            descripcion = `${buscadorB} va por delante en la persecución: ${valorAvanceTotalBuscadorB} a ${valorAvanceTotalBuscadorA}.`;
            mostrarDescripcionTurno(descripcion);
            botonAgarreBuscadorB.disabled = false;
            if (usosEscarbatoB < escarbatoB) {
                botonEscarbatoB.disabled = false;
            }
            if (usosPlumptonPassB < plumptonPassB) {
                botonPlumptonPassB.disabled = false;
            }
            botonContinuarBuscadorB.disabled = false;
        } else {
            if (numeroTurnoPar == 36) {
                descripcion = `El partido ha finalizado.`;
                mostrarDescripcionTurno(descripcion);
                descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
                mostrarDescripcionTurno(descripcion);
                resultadoAjustadoEquipoA()
                resultadoAjustadoEquipoB()
            } else {
                botonIniciarTurnoImpar.disabled = false;
            }
        }
    } else if (numeroTurnoBuscador == 5) {
        valorAvanceTotalBuscadorA = valorVelocidadBuscadorA3 + valorVelocidadBuscadorA4 + valorVelocidadBuscadorA5;
        valorAvanceTotalBuscadorB = valorVelocidadBuscadorB3 + valorVelocidadBuscadorB4 + valorVelocidadBuscadorB5;
        if (valorAvanceTotalBuscadorA > valorAvanceTotalBuscadorB) {
            descripcion = `${buscadorA} va por delante en la persecución: ${valorAvanceTotalBuscadorA} a ${valorAvanceTotalBuscadorB}.`;
            mostrarDescripcionTurno(descripcion);
            botonAgarreBuscadorA.disabled = false;
            if (usosEscarbatoA < escarbatoA) {
                botonEscarbatoA.disabled = false;
            }
            if (usosPlumptonPassA < plumptonPassA) {
                botonPlumptonPassA.disabled = false;
            }
            botonContinuarBuscadorA.disabled = false;
        } else if (valorAvanceTotalBuscadorA < valorAvanceTotalBuscadorB) {
            descripcion = `${buscadorB} va por delante en la persecución: ${valorAvanceTotalBuscadorB} a ${valorAvanceTotalBuscadorA}.`;
            mostrarDescripcionTurno(descripcion);
            botonAgarreBuscadorB.disabled = false;
            if (usosEscarbatoB < escarbatoB) {
                botonEscarbatoB.disabled = false;
            }
            if (usosPlumptonPassB < plumptonPassB) {
                botonPlumptonPassB.disabled = false;
            }
            botonContinuarBuscadorB.disabled = false;
        } else {
            if (numeroTurnoPar == 36) {
                descripcion = `El partido ha finalizado.`;
                mostrarDescripcionTurno(descripcion);
                descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
                mostrarDescripcionTurno(descripcion);
                resultadoAjustadoEquipoA()
                resultadoAjustadoEquipoB()
            } else {
                botonIniciarTurnoImpar.disabled = false;
            }
        }
    } else {
        valorAvanceTotalBuscadorA = valorVelocidadBuscadorA3 + valorVelocidadBuscadorA4 + valorVelocidadBuscadorA5 + valorVelocidadBuscadorA6;
        valorAvanceTotalBuscadorB = valorVelocidadBuscadorB3 + valorVelocidadBuscadorB4 + valorVelocidadBuscadorB5 + valorVelocidadBuscadorB6;
        if (valorAvanceTotalBuscadorA > valorAvanceTotalBuscadorB) {
            descripcion = `${buscadorA} va por delante en la persecución: ${valorAvanceTotalBuscadorA} a ${valorAvanceTotalBuscadorB}.`;
            mostrarDescripcionTurno(descripcion);
            botonAgarreBuscadorA.disabled = false;
            if (usosEscarbatoA < escarbatoA) {
                botonEscarbatoA.disabled = false;
            }
            if (usosPlumptonPassA < plumptonPassA) {
                botonPlumptonPassA.disabled = false;
            }
        } else if (valorAvanceTotalBuscadorA < valorAvanceTotalBuscadorB) {
            descripcion = `${buscadorB} va por delante en la persecución: ${valorAvanceTotalBuscadorB} a ${valorAvanceTotalBuscadorA}.`;
            mostrarDescripcionTurno(descripcion);
            botonAgarreBuscadorB.disabled = false;
            if (usosEscarbatoB < escarbatoB) {
                botonEscarbatoB.disabled = false;
            }
            if (usosPlumptonPassB < plumptonPassB) {
                botonPlumptonPassB.disabled = false;
            }
        } else {
            if (numeroTurnoPar == 36) {
                descripcion = `El partido ha finalizado.`;
                mostrarDescripcionTurno(descripcion);
                descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
                mostrarDescripcionTurno(descripcion);
            } else {
                botonIniciarTurnoImpar.disabled = false;
            }
        }
    }
}

function lanzarAgarreBuscadorA() {
    botonAgarreBuscadorA.disabled = true;
    botonContinuarBuscadorA.disabled = true;
    if (numeroTurnoBuscador == 3 && valorAvanceTotalBuscadorA > valorAvanceTotalBuscadorB) {
        const min = 1;
        const max = 80;
        valorAgarreBuscadorA = Math.floor(Math.random() * (max - min + 1)) + min;
        if (escarbatoActivoA == true) {
            escarbatoActivoA = false;
            agarreA = agarreA + 9;
        } else if (plumptonPassActivoA == true) {
            plumptonPassActivoA = false;
            let valorAgarreExtra
            const min = 1;
            const max = 80;
            valorAgarreExtra = Math.floor(Math.random() * (max - min + 1)) + min;
            if (valorAgarreExtra < valorAgarreBuscadorA) {
                valorAgarreBuscadorA = valorAgarreExtra;
            }
        }
        if (valorAgarreBuscadorA <= agarreA) {
            descripcion = `${buscadorA} ha capturado (${valorAgarreBuscadorA}) la snitch dorada. El partido ha finalizado.`;
            mostrarDescripcionTurno(descripcion);
            golesA = golesA + 30;
            descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            descripcion = `${buscadorA} ha fallado el intento de captura (${valorAgarreBuscadorA}) de la snitch.`;
            mostrarDescripcionTurno(descripcion);
            botonAgarreBuscadorB.disabled = false;
            if (usosEscarbatoB < escarbatoB) {
                botonEscarbatoB.disabled = false;
            }
            if (usosPlumptonPassB < plumptonPassB) {
                botonPlumptonPassB.disabled = false;
            }
            botonContinuarBuscadorB.disabled = false;
        }
    } else if (numeroTurnoBuscador == 3 && (valorAvanceTotalBuscadorB - valorAvanceTotalBuscadorA >= 10)) {
        const min = 1;
        const max = 120;
        valorAgarreBuscadorA = Math.floor(Math.random() * (max - min + 1)) + min;
        if (escarbatoActivoA == true) {
            escarbatoActivoA = false;
            agarreA = agarreA + 9;
        } else if (plumptonPassActivoA == true) {
            plumptonPassActivoA = false;
            let valorAgarreExtra
            const min = 1;
            const max = 120;
            valorAgarreExtra = Math.floor(Math.random() * (max - min + 1)) + min;
            if (valorAgarreExtra < valorAgarreBuscadorA) {
                valorAgarreBuscadorA = valorAgarreExtra;
            }
        }
        if (valorAgarreBuscadorA <= agarreA) {
            descripcion = `${buscadorA} ha capturado (${valorAgarreBuscadorA}) la snitch dorada. El partido ha finalizado.`;
            mostrarDescripcionTurno(descripcion);
            golesA = golesA + 30;
            descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            if (numeroTurnoPar == 36) {
                descripcion = `El partido ha finalizado.`;
                mostrarDescripcionTurno(descripcion);
                descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
                mostrarDescripcionTurno(descripcion);
            } else {
                descripcion = `${buscadorA} ha fallado el intento de captura (${valorAgarreBuscadorA}) de la snitch.`;
                mostrarDescripcionTurno(descripcion);
                botonIniciarTurnoImpar.disabled = false;
            }
        }
    } else if (numeroTurnoBuscador == 3 && valorAvanceTotalBuscadorB > valorAvanceTotalBuscadorA) {
        const min = 1;
        const max = 100;
        valorAgarreBuscadorA = Math.floor(Math.random() * (max - min + 1)) + min;
        if (escarbatoActivoA == true) {
            escarbatoActivoA = false;
            agarreA = agarreA + 9;
        } else if (plumptonPassActivoA == true) {
            plumptonPassActivoA = false;
            let valorAgarreExtra
            const min = 1;
            const max = 100;
            valorAgarreExtra = Math.floor(Math.random() * (max - min + 1)) + min;
            if (valorAgarreExtra < valorAgarreBuscadorA) {
                valorAgarreBuscadorA = valorAgarreExtra;
            }
        }
        if (valorAgarreBuscadorA <= agarreA) {
            descripcion = `${buscadorA} ha capturado (${valorAgarreBuscadorA}) la snitch dorada. El partido ha finalizado.`;
            mostrarDescripcionTurno(descripcion);
            golesA = golesA + 30;
            descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            if (numeroTurnoPar == 36) {
                descripcion = `El partido ha finalizado.`;
                mostrarDescripcionTurno(descripcion);
                descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
                mostrarDescripcionTurno(descripcion);
            } else {
                descripcion = `${buscadorA} ha fallado el intento de captura (${valorAgarreBuscadorA}) de la snitch.`;
                mostrarDescripcionTurno(descripcion);
                botonIniciarTurnoImpar.disabled = false;
            }
        }
    } else if (numeroTurnoBuscador == 4 && valorAvanceTotalBuscadorA > valorAvanceTotalBuscadorB) {
        const min = 1;
        const max = 60;
        valorAgarreBuscadorA = Math.floor(Math.random() * (max - min + 1)) + min;
        if (escarbatoActivoA == true) {
            escarbatoActivoA = false;
            agarreA = agarreA + 7;
        } else if (plumptonPassActivoA == true) {
            plumptonPassActivoA = false;
            let valorAgarreExtra
            const min = 1;
            const max = 60;
            valorAgarreExtra = Math.floor(Math.random() * (max - min + 1)) + min;
            if (valorAgarreExtra < valorAgarreBuscadorA) {
                valorAgarreBuscadorA = valorAgarreExtra;
            }
        }
        if (valorAgarreBuscadorA <= agarreA) {
            descripcion = `${buscadorA} ha capturado (${valorAgarreBuscadorA}) la snitch dorada. El partido ha finalizado.`;
            mostrarDescripcionTurno(descripcion);
            golesA = golesA + 30;
            descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            descripcion = `${buscadorA} ha fallado el intento de captura (${valorAgarreBuscadorA}) de la snitch.`;
            mostrarDescripcionTurno(descripcion);
            botonAgarreBuscadorB.disabled = false;
            if (usosEscarbatoB < escarbatoB) {
                botonEscarbatoB.disabled = false;
            }
            if (usosPlumptonPassB < plumptonPassB) {
                botonPlumptonPassB.disabled = false;
            }
            botonContinuarBuscadorB.disabled = false;
        }
    } else if (numeroTurnoBuscador == 4 && (valorAvanceTotalBuscadorB - valorAvanceTotalBuscadorA >= 10)) {
        const min = 1;
        const max = 100;
        valorAgarreBuscadorA = Math.floor(Math.random() * (max - min + 1)) + min;
        if (escarbatoActivoA == true) {
            escarbatoActivoA = false;
            agarreA = agarreA + 7;
        } else if (plumptonPassActivoA == true) {
            plumptonPassActivoA = false;
            let valorAgarreExtra
            const min = 1;
            const max = 100;
            valorAgarreExtra = Math.floor(Math.random() * (max - min + 1)) + min;
            if (valorAgarreExtra < valorAgarreBuscadorA) {
                valorAgarreBuscadorA = valorAgarreExtra;
            }
        }
        if (valorAgarreBuscadorA <= agarreA) {
            descripcion = `${buscadorA} ha capturado (${valorAgarreBuscadorA}) la snitch dorada. El partido ha finalizado.`;
            mostrarDescripcionTurno(descripcion);
            golesA = golesA + 30;
            descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            if (numeroTurnoPar == 36) {
                descripcion = `El partido ha finalizado.`;
                mostrarDescripcionTurno(descripcion);
                descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
                mostrarDescripcionTurno(descripcion);
            } else {
                descripcion = `${buscadorA} ha fallado el intento de captura (${valorAgarreBuscadorA}) de la snitch.`;
                mostrarDescripcionTurno(descripcion);
                botonIniciarTurnoImpar.disabled = false;
            }
        }
    } else if (numeroTurnoBuscador == 4 && valorAvanceTotalBuscadorB > valorAvanceTotalBuscadorA) {
        const min = 1;
        const max = 80;
        valorAgarreBuscadorA = Math.floor(Math.random() * (max - min + 1)) + min;
        if (escarbatoActivoA == true) {
            escarbatoActivoA = false;
            agarreA = agarreA + 7;
        } else if (plumptonPassActivoA == true) {
            plumptonPassActivoA = false;
            let valorAgarreExtra
            const min = 1;
            const max = 80;
            valorAgarreExtra = Math.floor(Math.random() * (max - min + 1)) + min;
            if (valorAgarreExtra < valorAgarreBuscadorA) {
                valorAgarreBuscadorA = valorAgarreExtra;
            }
        }
        if (valorAgarreBuscadorA <= agarreA) {
            descripcion = `${buscadorA} ha capturado (${valorAgarreBuscadorA}) la snitch dorada. El partido ha finalizado.`;
            mostrarDescripcionTurno(descripcion);
            golesA = golesA + 30;
            descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            if (numeroTurnoPar == 36) {
                descripcion = `El partido ha finalizado.`;
                mostrarDescripcionTurno(descripcion);
                descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
                mostrarDescripcionTurno(descripcion);
            } else {
                descripcion = `${buscadorA} ha fallado el intento de captura (${valorAgarreBuscadorA}) de la snitch.`;
                mostrarDescripcionTurno(descripcion);
                botonIniciarTurnoImpar.disabled = false;
            }
        }
    } else if (numeroTurnoBuscador == 5 && valorAvanceTotalBuscadorA > valorAvanceTotalBuscadorB) {
        const min = 1;
        const max = 40;
        valorAgarreBuscadorA = Math.floor(Math.random() * (max - min + 1)) + min;
        if (escarbatoActivoA == true) {
            escarbatoActivoA = false;
            agarreA = agarreA + 5;
        } else if (plumptonPassActivoA == true) {
            plumptonPassActivoA = false;
            let valorAgarreExtra
            const min = 1;
            const max = 40;
            valorAgarreExtra = Math.floor(Math.random() * (max - min + 1)) + min;
            if (valorAgarreExtra < valorAgarreBuscadorA) {
                valorAgarreBuscadorA = valorAgarreExtra;
            }
        }
        if (valorAgarreBuscadorA <= agarreA) {
            descripcion = `${buscadorA} ha capturado (${valorAgarreBuscadorA}) la snitch dorada. El partido ha finalizado.`;
            mostrarDescripcionTurno(descripcion);
            golesA = golesA + 30;
            descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            descripcion = `${buscadorA} ha fallado el intento de captura (${valorAgarreBuscadorA}) de la snitch.`;
            mostrarDescripcionTurno(descripcion);
            botonAgarreBuscadorB.disabled = false;
            if (usosEscarbatoB < escarbatoB) {
                botonEscarbatoB.disabled = false;
            }
            if (usosPlumptonPassB < plumptonPassB) {
                botonPlumptonPassB.disabled = false;
            }
            botonContinuarBuscadorB.disabled = false;
        }
    } else if (numeroTurnoBuscador == 5 && (valorAvanceTotalBuscadorB - valorAvanceTotalBuscadorA >= 10)) {
        const min = 1;
        const max = 80;
        valorAgarreBuscadorA = Math.floor(Math.random() * (max - min + 1)) + min;
        if (escarbatoActivoA == true) {
            escarbatoActivoA = false;
            agarreA = agarreA + 5;
        } else if (plumptonPassActivoA == true) {
            plumptonPassActivoA = false;
            let valorAgarreExtra
            const min = 1;
            const max = 80;
            valorAgarreExtra = Math.floor(Math.random() * (max - min + 1)) + min;
            if (valorAgarreExtra < valorAgarreBuscadorA) {
                valorAgarreBuscadorA = valorAgarreExtra;
            }
        }
        if (valorAgarreBuscadorA <= agarreA) {
            descripcion = `${buscadorA} ha capturado (${valorAgarreBuscadorA}) la snitch dorada. El partido ha finalizado.`;
            mostrarDescripcionTurno(descripcion);
            golesA = golesA + 30;
            descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            if (numeroTurnoPar == 36) {
                descripcion = `El partido ha finalizado.`;
                mostrarDescripcionTurno(descripcion);
                descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
                mostrarDescripcionTurno(descripcion);
            } else {
                descripcion = `${buscadorA} ha fallado el intento de captura (${valorAgarreBuscadorA}) de la snitch.`;
                mostrarDescripcionTurno(descripcion);
                botonIniciarTurnoImpar.disabled = false;
            }
        }
    } else if (numeroTurnoBuscador == 5 && (valorAvanceTotalBuscadorB > valorAvanceTotalBuscadorA)) {
        const min = 1;
        const max = 60;
        valorAgarreBuscadorA = Math.floor(Math.random() * (max - min + 1)) + min;
        if (escarbatoActivoA == true) {
            escarbatoActivoA = false;
            agarreA = agarreA + 5;
        } else if (plumptonPassActivoA == true) {
            plumptonPassActivoA = false;
            let valorAgarreExtra
            const min = 1;
            const max = 60;
            valorAgarreExtra = Math.floor(Math.random() * (max - min + 1)) + min;
            if (valorAgarreExtra < valorAgarreBuscadorA) {
                valorAgarreBuscadorA = valorAgarreExtra;
            }
        }
        if (valorAgarreBuscadorA <= agarreA) {
            descripcion = `${buscadorA} ha capturado (${valorAgarreBuscadorA}) la snitch dorada. El partido ha finalizado.`;
            mostrarDescripcionTurno(descripcion);
            golesA = golesA + 30;
            descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            if (numeroTurnoPar == 36) {
                descripcion = `El partido ha finalizado.`;
                mostrarDescripcionTurno(descripcion);
                descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
                mostrarDescripcionTurno(descripcion);
            } else {
                descripcion = `${buscadorA} ha fallado el intento de captura (${valorAgarreBuscadorA}) de la snitch.`;
                mostrarDescripcionTurno(descripcion);
                botonIniciarTurnoImpar.disabled = false;
            }
        }
    } else if (numeroTurnoBuscador == 6 && valorAvanceTotalBuscadorA > valorAvanceTotalBuscadorB) {
        const min = 1;
        const max = 20;
        valorAgarreBuscadorA = Math.floor(Math.random() * (max - min + 1)) + min;
        if (escarbatoActivoA == true) {
            escarbatoActivoA = false;
            agarreA = agarreA + 3;
        } else if (plumptonPassActivoA == true) {
            plumptonPassActivoA = false;
            let valorAgarreExtra
            const min = 1;
            const max = 20;
            valorAgarreExtra = Math.floor(Math.random() * (max - min + 1)) + min;
            if (valorAgarreExtra < valorAgarreBuscadorA) {
                valorAgarreBuscadorA = valorAgarreExtra;
            }
        }
        if (valorAgarreBuscadorA <= agarreA) {
            descripcion = `${buscadorA} ha capturado (${valorAgarreBuscadorA}) la snitch dorada. El partido ha finalizado.`;
            mostrarDescripcionTurno(descripcion);
            golesA = golesA + 30;
            descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            descripcion = `${buscadorA} ha fallado el intento de captura (${valorAgarreBuscadorA}) de la snitch.`;
            mostrarDescripcionTurno(descripcion);
            botonAgarreBuscadorB.disabled = false;
            if (usosEscarbatoB < escarbatoB) {
                botonEscarbatoB.disabled = false;
            }
            if (usosPlumptonPassB < plumptonPassB) {
                botonPlumptonPassB.disabled = false;
            }
        }
    } else if (numeroTurnoBuscador == 6 && (valorAvanceTotalBuscadorB - valorAvanceTotalBuscadorA >= 10)) {
        const min = 1;
        const max = 60;
        valorAgarreBuscadorA = Math.floor(Math.random() * (max - min + 1)) + min;
        if (escarbatoActivoA == true) {
            escarbatoActivoA = false;
            agarreA = agarreA + 3;
        } else if (plumptonPassActivoA == true) {
            plumptonPassActivoA = false;
            let valorAgarreExtra
            const min = 1;
            const max = 60;
            valorAgarreExtra = Math.floor(Math.random() * (max - min + 1)) + min;
            if (valorAgarreExtra < valorAgarreBuscadorA) {
                valorAgarreBuscadorA = valorAgarreExtra;
            }
        }
        if (valorAgarreBuscadorA <= agarreA) {
            descripcion = `${buscadorA} ha capturado (${valorAgarreBuscadorA}) la snitch dorada. El partido ha finalizado.`;
            mostrarDescripcionTurno(descripcion);
            golesA = golesA + 30;
            descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            if (numeroTurnoPar == 36) {
                descripcion = `El partido ha finalizado.`;
                mostrarDescripcionTurno(descripcion);
                descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
                mostrarDescripcionTurno(descripcion);
            } else {
                descripcion = `${buscadorA} ha fallado el intento de captura (${valorAgarreBuscadorA}) de la snitch.`;
                mostrarDescripcionTurno(descripcion);
                botonIniciarTurnoImpar.disabled = false;
            }
        }
    } else if (numeroTurnoBuscador == 6 && valorAvanceTotalBuscadorB > valorAvanceTotalBuscadorA) {
        const min = 1;
        const max = 40;
        valorAgarreBuscadorA = Math.floor(Math.random() * (max - min + 1)) + min;
        if (escarbatoActivoA == true) {
            escarbatoActivoA = false;
            agarreA = agarreA + 3;
        } else if (plumptonPassActivoA == true) {
            plumptonPassActivoA = false;
            let valorAgarreExtra
            const min = 1;
            const max = 40;
            valorAgarreExtra = Math.floor(Math.random() * (max - min + 1)) + min;
            if (valorAgarreExtra < valorAgarreBuscadorA) {
                valorAgarreBuscadorA = valorAgarreExtra;
            }
        }
        if (valorAgarreBuscadorA <= agarreA) {
            descripcion = `${buscadorA} ha capturado (${valorAgarreBuscadorA}) la snitch dorada. El partido ha finalizado.`;
            mostrarDescripcionTurno(descripcion);
            golesA = golesA + 30;
            descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            if (numeroTurnoPar == 36) {
                descripcion = `El partido ha finalizado.`;
                mostrarDescripcionTurno(descripcion);
                descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
                mostrarDescripcionTurno(descripcion);
            } else {
                descripcion = `${buscadorA} ha fallado el intento de captura (${valorAgarreBuscadorA}) de la snitch.`;
                mostrarDescripcionTurno(descripcion);
                botonIniciarTurnoImpar.disabled = false;
            }
        }
    } else {
        descripcion = `Situación inesperada 98.`;
        mostrarDescripcionTurno(descripcion);
    }
}

function lanzarAgarreBuscadorB() {
    botonAgarreBuscadorB.disabled = true;
    botonContinuarBuscadorB.disabled = true;
    if (numeroTurnoBuscador == 3 && valorAvanceTotalBuscadorB > valorAvanceTotalBuscadorA) {
        const min = 1;
        const max = 80;
        valorAgarreBuscadorB = Math.floor(Math.random() * (max - min + 1)) + min;
        if (escarbatoActivoB == true) {
            escarbatoActivoB = false;
            agarreB = agarreB + 9;
        } else if (plumptonPassActivoB == true) {
            plumptonPassActivoB = false;
            let valorAgarreExtra
            const min = 1;
            const max = 80;
            valorAgarreExtra = Math.floor(Math.random() * (max - min + 1)) + min;
            if (valorAgarreExtra < valorAgarreBuscadorB) {
                valorAgarreBuscadorB = valorAgarreExtra;
            }
        }
        if (valorAgarreBuscadorB <= agarreB) {
            descripcion = `${buscadorB} ha capturado (${valorAgarreBuscadorB}) la snitch dorada. El partido ha finalizado.`;
            mostrarDescripcionTurno(descripcion);
            golesB = golesB + 30;
            descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            descripcion = `${buscadorB} ha fallado el intento de captura (${valorAgarreBuscadorB}) de la snitch.`;
            mostrarDescripcionTurno(descripcion);
            botonAgarreBuscadorA.disabled = false;
            if (usosEscarbatoA < escarbatoA) {
                botonEscarbatoA.disabled = false;
            }
            if (usosPlumptonPassA < plumptonPassA) {
                botonPlumptonPassA.disabled = false;
            }
            botonContinuarBuscadorA.disabled = false;
        }
    } else if (numeroTurnoBuscador == 3 && (valorAvanceTotalBuscadorA - valorAvanceTotalBuscadorB >= 10)) {
        const min = 1;
        const max = 120;
        valorAgarreBuscadorB = Math.floor(Math.random() * (max - min + 1)) + min;
        if (escarbatoActivoB == true) {
            escarbatoActivoB = false;
            agarreB = agarreB + 9;
        } else if (plumptonPassActivoB == true) {
            plumptonPassActivoB = false;
            let valorAgarreExtra
            const min = 1;
            const max = 120;
            valorAgarreExtra = Math.floor(Math.random() * (max - min + 1)) + min;
            if (valorAgarreExtra < valorAgarreBuscadorB) {
                valorAgarreBuscadorB = valorAgarreExtra;
            }
        }
        if (valorAgarreBuscadorB <= agarreB) {
            descripcion = `${buscadorB} ha capturado (${valorAgarreBuscadorB}) la snitch dorada. El partido ha finalizado.`;
            mostrarDescripcionTurno(descripcion);
            golesB = golesB + 30;
            descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            if (numeroTurnoPar == 36) {
                descripcion = `El partido ha finalizado.`;
                mostrarDescripcionTurno(descripcion);
                descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
                mostrarDescripcionTurno(descripcion);
            } else {
                descripcion = `${buscadorB} ha fallado el intento de captura (${valorAgarreBuscadorB}) de la snitch.`;
                mostrarDescripcionTurno(descripcion);
                botonIniciarTurnoImpar.disabled = false;
            }
        }
    } else if (numeroTurnoBuscador == 3 && valorAvanceTotalBuscadorA > valorAvanceTotalBuscadorB) {
        const min = 1;
        const max = 100;
        valorAgarreBuscadorB = Math.floor(Math.random() * (max - min + 1)) + min;
        if (escarbatoActivoB == true) {
            escarbatoActivoB = false;
            agarreB = agarreB + 9;
        } else if (plumptonPassActivoB == true) {
            plumptonPassActivoB = false;
            let valorAgarreExtra
            const min = 1;
            const max = 100;
            valorAgarreExtra = Math.floor(Math.random() * (max - min + 1)) + min;
            if (valorAgarreExtra < valorAgarreBuscadorB) {
                valorAgarreBuscadorB = valorAgarreExtra;
            }
        }
        if (valorAgarreBuscadorB <= agarreB) {
            descripcion = `${buscadorB} ha capturado (${valorAgarreBuscadorB}) la snitch dorada. El partido ha finalizado.`;
            mostrarDescripcionTurno(descripcion);
            golesB = golesB + 30;
            descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            if (numeroTurnoPar == 36) {
                descripcion = `El partido ha finalizado.`;
                mostrarDescripcionTurno(descripcion);
                descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
                mostrarDescripcionTurno(descripcion);
            } else {
                descripcion = `${buscadorB} ha fallado el intento de captura (${valorAgarreBuscadorB}) de la snitch.`;
                mostrarDescripcionTurno(descripcion);
                botonIniciarTurnoImpar.disabled = false;
            }
        }
    } else if (numeroTurnoBuscador == 4 && valorAvanceTotalBuscadorB > valorAvanceTotalBuscadorA) {
        const min = 1;
        const max = 60;
        valorAgarreBuscadorB = Math.floor(Math.random() * (max - min + 1)) + min;
        if (escarbatoActivoB == true) {
            escarbatoActivoB = false;
            agarreA = agarreB + 7;
        } else if (plumptonPassActivoB == true) {
            plumptonPassActivoB = false;
            let valorAgarreExtra
            const min = 1;
            const max = 60;
            valorAgarreExtra = Math.floor(Math.random() * (max - min + 1)) + min;
            if (valorAgarreExtra < valorAgarreBuscadorB) {
                valorAgarreBuscadorB = valorAgarreExtra;
            }
        }
        if (valorAgarreBuscadorB <= agarreB) {
            descripcion = `${buscadorB} ha capturado (${valorAgarreBuscadorB}) la snitch dorada. El partido ha finalizado.`;
            mostrarDescripcionTurno(descripcion);
            golesB = golesB + 30;
            descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            descripcion = `${buscadorB} ha fallado el intento de captura (${valorAgarreBuscadorB}) de la snitch.`;
            mostrarDescripcionTurno(descripcion);
            botonAgarreBuscadorA.disabled = false;
            if (usosEscarbatoA < escarbatoA) {
                botonEscarbatoA.disabled = false;
            }
            if (usosPlumptonPassA < plumptonPassA) {
                botonPlumptonPassA.disabled = false;
            }
            botonContinuarBuscadorA.disabled = false;
        }
    } else if (numeroTurnoBuscador == 4 && (valorAvanceTotalBuscadorA - valorAvanceTotalBuscadorB >= 10)) {
        const min = 1;
        const max = 100;
        valorAgarreBuscadorB = Math.floor(Math.random() * (max - min + 1)) + min;
        if (escarbatoActivoB == true) {
            escarbatoActivoB = false;
            agarreA = agarreB + 7;
        } else if (plumptonPassActivoB == true) {
            plumptonPassActivoB = false;
            let valorAgarreExtra
            const min = 1;
            const max = 100;
            valorAgarreExtra = Math.floor(Math.random() * (max - min + 1)) + min;
            if (valorAgarreExtra < valorAgarreBuscadorB) {
                valorAgarreBuscadorB = valorAgarreExtra;
            }
        }
        if (valorAgarreBuscadorB <= agarreB) {
            descripcion = `${buscadorB} ha capturado (${valorAgarreBuscadorB}) la snitch dorada. El partido ha finalizado.`;
            mostrarDescripcionTurno(descripcion);
            golesB = golesB + 30;
            descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            if (numeroTurnoPar == 36) {
                descripcion = `El partido ha finalizado.`;
                mostrarDescripcionTurno(descripcion);
                descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
                mostrarDescripcionTurno(descripcion);
            } else {
                descripcion = `${buscadorB} ha fallado el intento de captura (${valorAgarreBuscadorB}) de la snitch.`;
                mostrarDescripcionTurno(descripcion);
                botonIniciarTurnoImpar.disabled = false;
            }
        }
    } else if (numeroTurnoBuscador == 4 && valorAvanceTotalBuscadorA > valorAvanceTotalBuscadorB) {
        const min = 1;
        const max = 80;
        valorAgarreBuscadorB = Math.floor(Math.random() * (max - min + 1)) + min;
        if (escarbatoActivoB == true) {
            escarbatoActivoB = false;
            agarreA = agarreB + 7;
        } else if (plumptonPassActivoB == true) {
            plumptonPassActivoB = false;
            let valorAgarreExtra
            const min = 1;
            const max = 80;
            valorAgarreExtra = Math.floor(Math.random() * (max - min + 1)) + min;
            if (valorAgarreExtra < valorAgarreBuscadorB) {
                valorAgarreBuscadorB = valorAgarreExtra;
            }
        }
        if (valorAgarreBuscadorB <= agarreB) {
            descripcion = `${buscadorB} ha capturado (${valorAgarreBuscadorB}) la snitch dorada. El partido ha finalizado.`;
            mostrarDescripcionTurno(descripcion);
            golesB = golesB + 30;
            descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            if (numeroTurnoPar == 36) {
                descripcion = `El partido ha finalizado.`;
                mostrarDescripcionTurno(descripcion);
                descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
                mostrarDescripcionTurno(descripcion);
            } else {
                descripcion = `${buscadorB} ha fallado el intento de captura (${valorAgarreBuscadorB}) de la snitch.`;
                mostrarDescripcionTurno(descripcion);
                botonIniciarTurnoImpar.disabled = false;
            }
        }
    } else if (numeroTurnoBuscador == 5 && valorAvanceTotalBuscadorB > valorAvanceTotalBuscadorA) {
        const min = 1;
        const max = 40;
        valorAgarreBuscadorB = Math.floor(Math.random() * (max - min + 1)) + min;
        if (escarbatoActivoB == true) {
            escarbatoActivoB = false;
            agarreA = agarreB + 5;
        } else if (plumptonPassActivoB == true) {
            plumptonPassActivoB = false;
            let valorAgarreExtra
            const min = 1;
            const max = 40;
            valorAgarreExtra = Math.floor(Math.random() * (max - min + 1)) + min;
            if (valorAgarreExtra < valorAgarreBuscadorB) {
                valorAgarreBuscadorB = valorAgarreExtra;
            }
        }
        if (valorAgarreBuscadorB <= agarreB) {
            descripcion = `${buscadorB} ha capturado (${valorAgarreBuscadorB}) la snitch dorada. El partido ha finalizado.`;
            mostrarDescripcionTurno(descripcion);
            golesB = golesB + 30;
            descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            descripcion = `${buscadorB} ha fallado el intento de captura (${valorAgarreBuscadorB}) de la snitch.`;
            mostrarDescripcionTurno(descripcion);
            botonAgarreBuscadorA.disabled = false;
            if (usosEscarbatoA < escarbatoA) {
                botonEscarbatoA.disabled = false;
            }
            if (usosPlumptonPassA < plumptonPassA) {
                botonPlumptonPassA.disabled = false;
            }
            botonContinuarBuscadorA.disabled = false;
        }
    } else if (numeroTurnoBuscador == 5 && (valorAvanceTotalBuscadorA - valorAvanceTotalBuscadorB >= 10)) {
        const min = 1;
        const max = 80;
        valorAgarreBuscadorB = Math.floor(Math.random() * (max - min + 1)) + min;
        if (escarbatoActivoB == true) {
            escarbatoActivoB = false;
            agarreA = agarreB + 5;
        } else if (plumptonPassActivoB == true) {
            plumptonPassActivoB = false;
            let valorAgarreExtra
            const min = 1;
            const max = 80;
            valorAgarreExtra = Math.floor(Math.random() * (max - min + 1)) + min;
            if (valorAgarreExtra < valorAgarreBuscadorB) {
                valorAgarreBuscadorB = valorAgarreExtra;
            }
        }
        if (valorAgarreBuscadorB <= agarreB) {
            descripcion = `${buscadorB} ha capturado (${valorAgarreBuscadorB}) la snitch dorada. El partido ha finalizado.`;
            mostrarDescripcionTurno(descripcion);
            golesB = golesB + 30;
            descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            if (numeroTurnoPar == 36) {
                descripcion = `El partido ha finalizado.`;
                mostrarDescripcionTurno(descripcion);
                descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
                mostrarDescripcionTurno(descripcion);
            } else {
                descripcion = `${buscadorB} ha fallado el intento de captura (${valorAgarreBuscadorB}) de la snitch.`;
                mostrarDescripcionTurno(descripcion);
                botonIniciarTurnoImpar.disabled = false;
            }
        }
    } else if (numeroTurnoBuscador == 5 && (valorAvanceTotalBuscadorA > valorAvanceTotalBuscadorB)) {
        const min = 1;
        const max = 60;
        valorAgarreBuscadorB = Math.floor(Math.random() * (max - min + 1)) + min;
        if (escarbatoActivoB == true) {
            escarbatoActivoB = false;
            agarreA = agarreB + 5;
        } else if (plumptonPassActivoB == true) {
            plumptonPassActivoB = false;
            let valorAgarreExtra
            const min = 1;
            const max = 60;
            valorAgarreExtra = Math.floor(Math.random() * (max - min + 1)) + min;
            if (valorAgarreExtra < valorAgarreBuscadorB) {
                valorAgarreBuscadorB = valorAgarreExtra;
            }
        }
        if (valorAgarreBuscadorB <= agarreB) {
            descripcion = `${buscadorB} ha capturado (${valorAgarreBuscadorB}) la snitch dorada. El partido ha finalizado.`;
            mostrarDescripcionTurno(descripcion);
            golesB = golesB + 30;
            descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            if (numeroTurnoPar == 36) {
                descripcion = `El partido ha finalizado.`;
                mostrarDescripcionTurno(descripcion);
                descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
                mostrarDescripcionTurno(descripcion);
            } else {
                descripcion = `${buscadorB} ha fallado el intento de captura (${valorAgarreBuscadorB}) de la snitch.`;
                mostrarDescripcionTurno(descripcion);
                botonIniciarTurnoImpar.disabled = false;
            }
        }
    } else if (numeroTurnoBuscador == 6 && valorAvanceTotalBuscadorB > valorAvanceTotalBuscadorA) {
        const min = 1;
        const max = 20;
        valorAgarreBuscadorB = Math.floor(Math.random() * (max - min + 1)) + min;
        if (escarbatoActivoB == true) {
            escarbatoActivoB = false;
            agarreA = agarreB + 3;
        } else if (plumptonPassActivoB == true) {
            plumptonPassActivoB = false;
            let valorAgarreExtra
            const min = 1;
            const max = 20;
            valorAgarreExtra = Math.floor(Math.random() * (max - min + 1)) + min;
            if (valorAgarreExtra < valorAgarreBuscadorB) {
                valorAgarreBuscadorB = valorAgarreExtra;
            }
        }
        if (valorAgarreBuscadorB <= agarreB) {
            descripcion = `${buscadorB} ha capturado (${valorAgarreBuscadorB}) la snitch dorada. El partido ha finalizado.`;
            mostrarDescripcionTurno(descripcion);
            golesB = golesB + 30;
            descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            descripcion = `${buscadorB} ha fallado el intento de captura (${valorAgarreBuscadorB}) de la snitch.`;
            mostrarDescripcionTurno(descripcion);
            botonAgarreBuscadorA.disabled = false;
            if (usosEscarbatoA < escarbatoA) {
                botonEscarbatoA.disabled = false;
            }
            if (usosPlumptonPassA < plumptonPassA) {
                botonPlumptonPassA.disabled = false;
            }
        }
    } else if (numeroTurnoBuscador == 6 && (valorAvanceTotalBuscadorA - valorAvanceTotalBuscadorB >= 10)) {
        const min = 1;
        const max = 60;
        valorAgarreBuscadorB = Math.floor(Math.random() * (max - min + 1)) + min;
        if (escarbatoActivoB == true) {
            escarbatoActivoB = false;
            agarreA = agarreB + 3;
        } else if (plumptonPassActivoB == true) {
            plumptonPassActivoB = false;
            let valorAgarreExtra
            const min = 1;
            const max = 60;
            valorAgarreExtra = Math.floor(Math.random() * (max - min + 1)) + min;
            if (valorAgarreExtra < valorAgarreBuscadorB) {
                valorAgarreBuscadorB = valorAgarreExtra;
            }
        }
        if (valorAgarreBuscadorB <= agarreB) {
            descripcion = `${buscadorB} ha capturado (${valorAgarreBuscadorB}) la snitch dorada. El partido ha finalizado.`;
            mostrarDescripcionTurno(descripcion);
            golesB = golesB + 30;
            descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            if (numeroTurnoPar == 36) {
                descripcion = `El partido ha finalizado.`;
                mostrarDescripcionTurno(descripcion);
                descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
                mostrarDescripcionTurno(descripcion);
            } else {
                descripcion = `${buscadorB} ha fallado el intento de captura (${valorAgarreBuscadorB}) de la snitch.`;
                mostrarDescripcionTurno(descripcion);
                botonIniciarTurnoImpar.disabled = false;
            }
        }
    } else if (numeroTurnoBuscador == 6 && valorAvanceTotalBuscadorA > valorAvanceTotalBuscadorB) {
        const min = 1;
        const max = 40;
        valorAgarreBuscadorB = Math.floor(Math.random() * (max - min + 1)) + min;
        if (escarbatoActivoB == true) {
            escarbatoActivoB = false;
            agarreA = agarreB + 3;
        } else if (plumptonPassActivoB == true) {
            plumptonPassActivoB = false;
            let valorAgarreExtra
            const min = 1;
            const max = 40;
            valorAgarreExtra = Math.floor(Math.random() * (max - min + 1)) + min;
            if (valorAgarreExtra < valorAgarreBuscadorB) {
                valorAgarreBuscadorB = valorAgarreExtra;
            }
        }
        if (valorAgarreBuscadorB <= agarreB) {
            descripcion = `${buscadorB} ha capturado (${valorAgarreBuscadorB}) la snitch dorada. El partido ha finalizado.`;
            mostrarDescripcionTurno(descripcion);
            golesB = golesB + 30;
            descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
            mostrarDescripcionTurno(descripcion);
        } else {
            if (numeroTurnoPar == 36) {
                descripcion = `El partido ha finalizado.`;
                mostrarDescripcionTurno(descripcion);
                descripcion = `${equipoA} ${golesA}-${golesB} ${equipoB}`;
                mostrarDescripcionTurno(descripcion);
            } else {
                descripcion = `${buscadorB} ha fallado el intento de captura (${valorAgarreBuscadorB}) de la snitch.`;
                mostrarDescripcionTurno(descripcion);
                botonIniciarTurnoImpar.disabled = false;
            }
        }
    } else {
        descripcion = `Situación inesperada 99.`;
        mostrarDescripcionTurno(descripcion);
    }
    resultadoAjustadoEquipoA()
    resultadoAjustadoEquipoB()
}

function lanzarContinuarBuscadorA() {
    botonAgarreBuscadorA.disabled = true;
    botonContinuarBuscadorA.disabled = true;
    if (numeroTurnoBuscador == 3 && valorAvanceTotalBuscadorA > valorAvanceTotalBuscadorB) {
        descripcion = `${buscadorA} ha decidido no capturar la snitch. ¡${equipoA} necesita una menor diferencia de goles!`;
        mostrarDescripcionTurno(descripcion);
        botonAgarreBuscadorB.disabled = false;
        if (usosEscarbatoB < escarbatoB) {
            botonEscarbatoB.disabled = false;
        }
        if (usosPlumptonPassB < plumptonPassB) {
            botonPlumptonPassB.disabled = false;
        }
        botonContinuarBuscadorB.disabled = false;
    } else if (numeroTurnoBuscador == 3 && valorAvanceTotalBuscadorB > valorAvanceTotalBuscadorA) {
        descripcion = `${buscadorA} ha decidido no capturar la snitch. ¡${equipoA} necesita una menor diferencia de goles!`;
        mostrarDescripcionTurno(descripcion);
        botonIniciarTurnoImpar.disabled = false;
    } else if (numeroTurnoBuscador == 4 && valorAvanceTotalBuscadorA > valorAvanceTotalBuscadorB) {
        descripcion = `${buscadorA} ha decidido no capturar la snitch. ¡${equipoA} necesita una menor diferencia de goles!`;
        mostrarDescripcionTurno(descripcion);
        botonAgarreBuscadorB.disabled = false;
        if (usosEscarbatoB < escarbatoB) {
            botonEscarbatoB.disabled = false;
        }
        if (usosPlumptonPassB < plumptonPassB) {
            botonPlumptonPassB.disabled = false;
        }
        botonContinuarBuscadorB.disabled = false;
    } else if (numeroTurnoBuscador == 4 && valorAvanceTotalBuscadorB > valorAvanceTotalBuscadorA) {
        descripcion = `${buscadorA} ha decidido no capturar la snitch. ¡${equipoA} necesita una menor diferencia de goles!`;
        mostrarDescripcionTurno(descripcion);
        botonIniciarTurnoImpar.disabled = false;
    } else if (numeroTurnoBuscador == 5 && valorAvanceTotalBuscadorA > valorAvanceTotalBuscadorB) {
        descripcion = `${buscadorA} ha decidido no capturar la snitch. ¡${equipoA} necesita una menor diferencia de goles!`;
        mostrarDescripcionTurno(descripcion);
        botonAgarreBuscadorB.disabled = false;
        if (usosEscarbatoB < escarbatoB) {
            botonEscarbatoB.disabled = false;
        }
        if (usosPlumptonPassB < plumptonPassB) {
            botonPlumptonPassB.disabled = false;
        }
        botonContinuarBuscadorB.disabled = false;
    } else if (numeroTurnoBuscador == 5 && (valorAvanceTotalBuscadorB > valorAvanceTotalBuscadorA)) {
        descripcion = `${buscadorA} ha decidido no capturar la snitch. ¡${equipoA} necesita una menor diferencia de goles!`;
        mostrarDescripcionTurno(descripcion);
        botonIniciarTurnoImpar.disabled = false;
    } else {
        descripcion = `Situación inesperada 987 a.`;
        mostrarDescripcionTurno(descripcion);
    }
}

function lanzarContinuarBuscadorB() {
    botonAgarreBuscadorB.disabled = true;
    botonContinuarBuscadorB.disabled = true;
    if (numeroTurnoBuscador == 3 && valorAvanceTotalBuscadorB > valorAvanceTotalBuscadorA) {
        descripcion = `${buscadorB} ha decidido no capturar la snitch. ¡${equipoB} necesita una menor diferencia de goles!`;
        mostrarDescripcionTurno(descripcion);
        botonAgarreBuscadorA.disabled = false;
        if (usosEscarbatoA < escarbatoA) {
            botonEscarbatoA.disabled = false;
        }
        if (usosPlumptonPassA < plumptonPassA) {
            botonPlumptonPassA.disabled = false;
        }
        botonContinuarBuscadorA.disabled = false;
    } else if (numeroTurnoBuscador == 3 && valorAvanceTotalBuscadorA > valorAvanceTotalBuscadorB) {
        descripcion = `${buscadorB} ha decidido no capturar la snitch. ¡${equipoB} necesita una menor diferencia de goles!`;
        mostrarDescripcionTurno(descripcion);
        botonIniciarTurnoImpar.disabled = false;
    } else if (numeroTurnoBuscador == 4 && valorAvanceTotalBuscadorB > valorAvanceTotalBuscadorA) {
        descripcion = `${buscadorB} ha decidido no capturar la snitch. ¡${equipoB} necesita una menor diferencia de goles!`;
        mostrarDescripcionTurno(descripcion);
        botonAgarreBuscadorA.disabled = false;
        if (usosEscarbatoA < escarbatoA) {
            botonEscarbatoA.disabled = false;
        }
        if (usosPlumptonPassA < plumptonPassA) {
            botonPlumptonPassA.disabled = false;
        }
        botonContinuarBuscadorA.disabled = false;
    } else if (numeroTurnoBuscador == 4 && valorAvanceTotalBuscadorA > valorAvanceTotalBuscadorB) {
        descripcion = `${buscadorB} ha decidido no capturar la snitch. ¡${equipoB} necesita una menor diferencia de goles!`;
        mostrarDescripcionTurno(descripcion);
        botonIniciarTurnoImpar.disabled = false;
    } else if (numeroTurnoBuscador == 5 && valorAvanceTotalBuscadorB > valorAvanceTotalBuscadorA) {
        descripcion = `${buscadorB} ha decidido no capturar la snitch. ¡${equipoB} necesita una menor diferencia de goles!`;
        mostrarDescripcionTurno(descripcion);
        botonAgarreBuscadorA.disabled = false;
        if (usosEscarbatoA < escarbatoA) {
            botonEscarbatoA.disabled = false;
        }
        if (usosPlumptonPassA < plumptonPassA) {
            botonPlumptonPassA.disabled = false;
        }
        botonContinuarBuscadorA.disabled = false;
    } else if (numeroTurnoBuscador == 5 && (valorAvanceTotalBuscadorA > valorAvanceTotalBuscadorB)) {
        descripcion = `${buscadorB} ha decidido no capturar la snitch. ¡${equipoB} necesita una menor diferencia de goles!`;
        mostrarDescripcionTurno(descripcion);
        botonIniciarTurnoImpar.disabled = false;
    } else {
        descripcion = `Situación inesperada 987 b.`;
        mostrarDescripcionTurno(descripcion);
    }
}

function lanzarAmagoDeWronski(buscador, usosAmagoDeWronski, amagoDeWronski) {
    let usosDisponibles
    usosDisponibles = amagoDeWronski - usosAmagoDeWronski
    descripcion = `${buscador} ha realizado un Amago de Wronski. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion);
    if (buscador == buscadorA) {
        amagoDeWronskiActivoA = true;
        usosAmagoDeWronskiA ++;
        botonAmagoDeWronskiA.disabled = true;
        botonPerspicaciaA.disabled = true;
        botonAvistamientoBuscadorA.disabled = true;
        lanzarAvistamientoBuscadorA()
    } else {
        amagoDeWronskiActivoB = true;
        usosAmagoDeWronskiB ++;
        botonAmagoDeWronskiB.disabled = true;
        botonPerspicaciaB.disabled = true;
        botonAvistamientoBuscadorB.disabled = true;
        lanzarAvistamientoBuscadorB()
    }
}

function lanzarPerspicacia(buscador, usosPerspicacia, perspicacia) {
    let usosDisponibles
    usosDisponibles = perspicacia - usosPerspicacia
    descripcion = `${buscador} ha realizado una visión de Perspicacia. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion);
    if (buscador == buscadorA) {
        perspicaciaActivoA = true;
        usosPerspicaciaA ++;
        botonAmagoDeWronskiA.disabled = true;
        botonPerspicaciaA.disabled = true;
        botonAvistamientoBuscadorA.disabled = true;
        lanzarAvistamientoBuscadorA()
    } else {
        perspicaciaActivoB = true;
        usosPerspicaciaB ++;
        botonAmagoDeWronskiB.disabled = true;
        botonPerspicaciaB.disabled = true;
        botonAvistamientoBuscadorB.disabled = true;
        lanzarAvistamientoBuscadorB()
    }
}

function lanzarUltimoAliento(buscador, usosUltimoAliento, ultimoAliento) {
    let usosDisponibles
    usosDisponibles = ultimoAliento - usosUltimoAliento
    descripcion = `${buscador} ha realizado un Último aliento. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion);
    if (buscador == buscadorA) {
        ultimoAlientoActivoA = true;
        usosUltimoAlientoA ++;
        botonUltimoAlientoA.disabled = true;
        botonCaidaEnPicadaA.disabled = true;
        botonVelocidadBuscadorA.disabled = true;
        lanzarVelocidadBuscadorA()
    } else {
        ultimoAlientoActivoB = true;
        usosUltimoAlientoB ++;
        botonUltimoAlientoB.disabled = true;
        botonCaidaEnPicadaB.disabled = true;
        botonVelocidadBuscadorB.disabled = true;
        lanzarVelocidadBuscadorB()
    }
}

function lanzarCaidaEnPicada(buscador, usosCaidaEnPicada, caidaEnPicada) {
    let usosDisponibles
    usosDisponibles = caidaEnPicada - usosCaidaEnPicada
    descripcion = `${buscador} ha realizado una Caída en picada. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion);
    if (buscador == buscadorA) {
        caidaEnPicadaActivoA = true;
        usosCaidaEnPicadaA ++;
        botonUltimoAlientoA.disabled = true;
        botonCaidaEnPicadaA.disabled = true;
        botonVelocidadBuscadorA.disabled = true;
        lanzarVelocidadBuscadorA()
    } else {
        caidaEnPicadaActivoB = true;
        usosCaidaEnPicadaB ++;
        botonUltimoAlientoB.disabled = true;
        botonCaidaEnPicadaB.disabled = true;
        botonVelocidadBuscadorB.disabled = true;
        lanzarVelocidadBuscadorB()
    }
}

function lanzarEscarbato(buscador, usosEscarbato, escarbato) {
    let usosDisponibles
    usosDisponibles = escarbato - usosEscarbato
    descripcion = `${buscador} ha realizado una Captura de Escarbato. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion);
    if (buscador == buscadorA) {
        escarbatoActivoA = true;
        usosEscarbatoA ++;
        botonEscarbatoA.disabled = true;
        botonPlumptonPassA.disabled = true;
        botonAgarreBuscadorA.disabled = true;
        botonContinuarBuscadorA.disabled = true;
        lanzarAgarreBuscadorA()
    } else {
        escarbatoActivoB = true;
        usosEscarbatoB ++;
        botonEscarbatoB.disabled = true;
        botonPlumptonPassB.disabled = true;
        botonAgarreBuscadorB.disabled = true;
        botonContinuarBuscadorB.disabled = true;
        lanzarAgarreBuscadorB()
    }
}

function lanzarPlumptonPass(buscador, usosPlumptonPass, plumptonPass) {
    let usosDisponibles
    usosDisponibles = plumptonPass - usosPlumptonPass
    descripcion = `${buscador} ha realizado una Plumpton Pass. Usos disponibles: ${usosDisponibles}.`;
    mostrarDescripcionTurno(descripcion);
    if (buscador == buscadorA) {
        plumptonPassActivoA = true;
        usosPlumptonPassA ++;
        botonEscarbatoA.disabled = true;
        botonPlumptonPassA.disabled = true;
        botonAgarreBuscadorA.disabled = true;
        botonContinuarBuscadorA.disabled = true;
        lanzarAgarreBuscadorA()
    } else {
        plumptonPassActivoB = true;
        usosPlumptonPassB ++;
        botonEscarbatoB.disabled = true;
        botonPlumptonPassB.disabled = true;
        botonAgarreBuscadorB.disabled = true;
        botonContinuarBuscadorB.disabled = true;
        lanzarAgarreBuscadorB()
    }
}

function mostrarDescripcionTurno(descripcion) {
    var divContainer = document.getElementById("turno-a-turno-container")
    var div = document.getElementById("turno-a-turno");
    var nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = descripcion;
    div.appendChild(nuevoParrafo)

    setTimeout(function() {
        divContainer.scrollTop = divContainer.scrollHeight;
      }, 0);
}

botonEquipoA.addEventListener('click', seleccionarEquipoA)
botonEquipoB.addEventListener('click', seleccionarEquipoB)
botonIniciarTurnoImpar.addEventListener('click', iniciarTurnoImpar)
botonIniciarTurnoPar.addEventListener('click', iniciarTurnoPar)
botonIniciarTurnoBuscador.addEventListener('click', iniciarTurnoBuscador)

// BOTONES GUARDIAN A
botonReflejosGuardianA.addEventListener('click', lanzarReflejosGuardianA)
botonVoladaLateralGuardianA.addEventListener('click', lanzarVoladaLateralGuardianA)
botonPresionGuardianA.addEventListener('click', lanzarPresionGuardianA)
botonEvasionGuardianA.addEventListener('click', lanzarEvasionGuardianA)
botonAtajadaRelampagoA.addEventListener('click', function () {
    lanzarAtajadaRelampago (guardianA, usosAtajadaRelampagoA, atajadaRelampagoA);
});
botonStarfishAndStickA.addEventListener('click', function () {
    lanzarStarfishAndStick (guardianA, usosStarfishAndStickA, starfishAndStickA);
});
botonDoubleEightLoopA.addEventListener('click', function () {
    lanzarDoubleEightLoop (guardianA, usosDoubleEightLoopA, doubleEightLoopA);
});
botonAllInA.addEventListener('click', function () {
    lanzarAllIn (guardianA, usosAllInA, allInA, presionA, valorPresionGuardianA);
});
botonPaseLargoA.addEventListener('click', function () {
    lanzarPaseLargo (guardianA, usosPaseLargoA, paseLargoA);
});
botonTiroResbalonA.addEventListener('click', function () {
    lanzarTiroResbalon (guardianA, usosTiroResbalonA, tiroResbalonA, valorReflejosGuardianA, valorVoladaLateralGuardianA, valorDisparoGuardianA);
});

// BOTONES GUARDIAN B
botonReflejosGuardianB.addEventListener('click', lanzarReflejosGuardianB)
botonVoladaLateralGuardianB.addEventListener('click', lanzarVoladaLateralGuardianB)
botonPresionGuardianB.addEventListener('click', lanzarPresionGuardianB)
botonEvasionGuardianB.addEventListener('click', lanzarEvasionGuardianB)
botonAtajadaRelampagoB.addEventListener('click', function () {
    lanzarAtajadaRelampago (guardianB, usosAtajadaRelampagoB, atajadaRelampagoB);
});
botonStarfishAndStickB.addEventListener('click', function () {
    lanzarStarfishAndStick (guardianB, usosStarfishAndStickB, starfishAndStickB);
});
botonDoubleEightLoopB.addEventListener('click', function () {
    lanzarDoubleEightLoop (guardianB, usosDoubleEightLoopB, doubleEightLoopB);
});
botonAllInB.addEventListener('click', function () {
    lanzarAllIn (guardianB, usosAllInB, allInB, presionB, valorPresionGuardianB);
});
botonPaseLargoB.addEventListener('click', function () {
    lanzarPaseLargo (guardianB, usosPaseLargoB, paseLargoB);
});
botonTiroResbalonB.addEventListener('click', function () {
    lanzarTiroResbalon (guardianB, usosTiroResbalonB, tiroResbalonB, valorReflejosGuardianB, valorVoladaLateralGuardianB, valorDisparoGuardianB);
});

// BOTONES GOLPEADOR 1A
botonGolpeGolpeador1A.addEventListener('click', function () {
    lanzarGolpeGolpeadorA(golpeador1A, energiaConsumida1A, fuerza1A, precision1A, valorGolpeGolpeador1A);
});
botonIntercepcionGolpeador1A.addEventListener('click', function () {
    lanzarIntercepcionGolpeadorA(golpeador1A, energiaConsumida1A, intercepcion1A, valorIntercepcionGolpeador1A);
});
botonGolpeDeFrancotirador1A.addEventListener('click', function () {
    lanzarGolpeDeFrancotirador(golpeador1A, usosGolpeDeFrancotirador1A, golpeDeFrancotirador1A);
});
botonBludgerBackbeat1A.addEventListener('click', function () {
    lanzarBludgerBackbeat(golpeador1A, usosBludgerBackbeat1A, bludgerBackbeat1A);
});
botonGolpeBombeado1A.addEventListener('click', function () {
    lanzarGolpeBombeado(golpeador1A, usosGolpeBombeado1A, golpeBombeado1A);
});
botonGolpeCanon1A.addEventListener('click', function () {
    lanzarGolpeCanon(golpeador1A, usosGolpeCanon1A, golpeCanon1A);
});
botonInterferenciaDeAguila1A.addEventListener('click', function () {
    lanzarInterferenciaDeAguila(golpeador1A, usosInterferenciaDeAguila1A, interferenciaDeAguila1A);
});
botonAngelGuardian1A.addEventListener('click', function () {
    lanzarAngelGuardian(golpeador1A, usosAngelGuardian1A, angelGuardian1A);
});
botonPasarTurnoGolpeador1A.addEventListener('click', lanzarPasarTurnoGolpeadorA);

// BOTONES GOLPEADOR 2A
botonGolpeGolpeador2A.addEventListener('click', function () {
    lanzarGolpeGolpeadorA(golpeador2A, energiaConsumida2A, fuerza2A, precision2A, valorGolpeGolpeador2A);
});
botonIntercepcionGolpeador2A.addEventListener('click', function () {
    lanzarIntercepcionGolpeadorA(golpeador2A, energiaConsumida2A, intercepcion2A, valorIntercepcionGolpeador2A);
});
botonGolpeDeFrancotirador2A.addEventListener('click', function () {
    lanzarGolpeDeFrancotirador(golpeador2A, usosGolpeDeFrancotirador2A, golpeDeFrancotirador2A);
});
botonBludgerBackbeat2A.addEventListener('click', function () {
    lanzarBludgerBackbeat(golpeador2A, usosBludgerBackbeat2A, bludgerBackbeat2A);
});
botonGolpeBombeado2A.addEventListener('click', function () {
    lanzarGolpeBombeado(golpeador2A, usosGolpeBombeado2A, golpeBombeado2A);
});
botonGolpeCanon2A.addEventListener('click', function () {
    lanzarGolpeCanon(golpeador2A, usosGolpeCanon2A, golpeCanon2A);
});
botonInterferenciaDeAguila2A.addEventListener('click', function () {
    lanzarInterferenciaDeAguila(golpeador2A, usosInterferenciaDeAguila2A, interferenciaDeAguila2A);
});
botonAngelGuardian2A.addEventListener('click', function () {
    lanzarAngelGuardian(golpeador2A, usosAngelGuardian2A, angelGuardian2A);
});
botonPasarTurnoGolpeador2A.addEventListener('click', lanzarPasarTurnoGolpeadorA);

// BOTONES GOLPEADOR 1B
botonGolpeGolpeador1B.addEventListener('click', function () {
    lanzarGolpeGolpeadorB(golpeador1B, energiaConsumida1B, fuerza1B, precision1B, valorGolpeGolpeador1B);
});
botonIntercepcionGolpeador1B.addEventListener('click', function () {
    lanzarIntercepcionGolpeadorB(golpeador1B, energiaConsumida1B, intercepcion1B, valorIntercepcionGolpeador1B);
});
botonGolpeDeFrancotirador1B.addEventListener('click', function () {
    lanzarGolpeDeFrancotirador(golpeador1B, usosGolpeDeFrancotirador1B, golpeDeFrancotirador1B);
});
botonBludgerBackbeat1B.addEventListener('click', function () {
    lanzarBludgerBackbeat(golpeador1B, usosBludgerBackbeat1B, bludgerBackbeat1B);
});
botonGolpeBombeado1B.addEventListener('click', function () {
    lanzarGolpeBombeado(golpeador1B, usosGolpeBombeado1B, golpeBombeado1B);
});
botonGolpeCanon1B.addEventListener('click', function () {
    lanzarGolpeCanon(golpeador1B, usosGolpeCanon1B, golpeCanon1B);
});
botonInterferenciaDeAguila1B.addEventListener('click', function () {
    lanzarInterferenciaDeAguila(golpeador1B, usosInterferenciaDeAguila1B, interferenciaDeAguila1B);
});
botonAngelGuardian1B.addEventListener('click', function () {
    lanzarAngelGuardian(golpeador1B, usosAngelGuardian1B, angelGuardian1B);
});
botonPasarTurnoGolpeador1B.addEventListener('click', lanzarPasarTurnoGolpeadorB);

// BOTONES GOLPEADOR 2B
botonGolpeGolpeador2B.addEventListener('click', function () {
    lanzarGolpeGolpeadorB(golpeador2B, energiaConsumida2B, fuerza2B, precision2B, valorGolpeGolpeador2B);
});
botonIntercepcionGolpeador2B.addEventListener('click', function () {
    lanzarIntercepcionGolpeadorB(golpeador2B, energiaConsumida2B, intercepcion2B, valorIntercepcionGolpeador2B);
});
botonGolpeDeFrancotirador2B.addEventListener('click', function () {
    lanzarGolpeDeFrancotirador(golpeador2B, usosGolpeDeFrancotirador2B, golpeDeFrancotirador2B);
});
botonBludgerBackbeat2B.addEventListener('click', function () {
    lanzarBludgerBackbeat(golpeador2B, usosBludgerBackbeat2B, bludgerBackbeat2B);
});
botonGolpeBombeado2B.addEventListener('click', function () {
    lanzarGolpeBombeado(golpeador2B, usosGolpeBombeado2B, golpeBombeado2B);
});
botonGolpeCanon2B.addEventListener('click', function () {
    lanzarGolpeCanon(golpeador2B, usosGolpeCanon2B, golpeCanon2B);
});
botonInterferenciaDeAguila2B.addEventListener('click', function () {
    lanzarInterferenciaDeAguila(golpeador2B, usosInterferenciaDeAguila2B, interferenciaDeAguila2B);
});
botonAngelGuardian2B.addEventListener('click', function () {
    lanzarAngelGuardian(golpeador2B, usosAngelGuardian2B, angelGuardian2B);
});
botonPasarTurnoGolpeador2B.addEventListener('click', lanzarPasarTurnoGolpeadorB);

// BOTONES CAZADOR 1A
botonAgilidadCazador1A.addEventListener('click', function () {
    lanzarAgilidadCazador(cazador1A, agilidad1A, valorAgilidadCazador1A, penalParaEquipoB);
});
botonDefensaCazador1A.addEventListener('click', function () {
    lanzarDefensaCazador(cazador1A, defensa1A, valorDefensaCazador1A, penalParaEquipoB);
});
botonReaccionCazador1A.addEventListener('click', function () {
    lanzarReaccionCazador(cazador1A, reaccion1A, valorReaccionCazador1A, penalParaEquipoB);
});
botonEvasionCazador1A.addEventListener('click', lanzarEvasionCazador1A);
botonDisparoCazador1A.addEventListener('click', function () {
    lanzarDisparoCazadorA(cazador1A, disparo1A, valorDisparoCazador1A, disparosRealizados1A);
});
botonFintaDePorskov1A.addEventListener('click', function () {
    lanzarFintaDePorskov(cazador1A, fintaDePorskov1A, usosFintaDePorskov1A, agilidad1A, valorAgilidadCazador1A);
});
botonManoCambiada1A.addEventListener('click', function () {
    lanzarManoCambiada(cazador1A, manoCambiada1A, usosManoCambiada1A, agilidad1A, valorAgilidadCazador1A);
});
botonRoboSpeelman1A.addEventListener('click', function () {
    lanzarRoboSpeelman(cazador1A, roboSpeelman1A, usosRoboSpeelman1A, defensa1A, valorDefensaCazador1A);
});
botonTransylvanianTackle1A.addEventListener('click', function () {
    lanzarTransylvanianTackle(cazador1A, transylvanianTackle1A, usosTransylvanianTackle1A, defensa1A, valorDefensaCazador1A);
});
botonIntuicionFugaz1A.addEventListener('click', function () {
    lanzarIntuicionFugaz(cazador1A, intuicionFugaz1A, usosIntuicionFugaz1A, reaccion1A, valorReaccionCazador1A);
});
botonReversePass1A.addEventListener('click', function () {
    lanzarReversePass(cazador1A, reversePass1A, usosReversePass1A);
});
botonSlothGripRoll1A.addEventListener('click', function () {
    lanzarSlothGripRollCazador(cazador1A);
});
botonTiroLargo1A.addEventListener('click', function () {
    lanzarTiroLargo(cazador1A, usosTiroLargo1A, tiroLargo1A);
});
botonDisparoDeTorbellino1A.addEventListener('click', function () {
    lanzarDisparoDeTorbellino(cazador1A, usosDisparoDeTorbellino1A, disparoDeTorbellino1A);
});
botonDisparoConAmague1A.addEventListener('click', function () {
    lanzarDisparoConAmague(cazador1A, usosDisparoConAmague1A, disparoConAmague1A);
});
botonEfectoFinbourgh1A.addEventListener('click', function () {
    lanzarEfectoFinbourgh(cazador1A, usosEfectoFinbourgh1A, efectoFinbourgh1A);
});
botonKnuckleBall1A.addEventListener('click', function () {
    lanzarKnuckleBall(cazador1A, usosKnuckleBall1A, knuckleBall1A);
});
botonDisparoDeVolea1A.addEventListener('click', function () {
    lanzarDisparoDeVolea(cazador1A, usosDisparoDeVolea1A, disparoDeVolea1A);
});


// BOTONES CAZADOR 2A
botonAgilidadCazador2A.addEventListener('click', function () {
    lanzarAgilidadCazador(cazador2A, agilidad2A, valorAgilidadCazador2A, penalParaEquipoB);
});
botonDefensaCazador2A.addEventListener('click', function () {
    lanzarDefensaCazador(cazador2A, defensa2A, valorDefensaCazador2A, penalParaEquipoB);
});
botonReaccionCazador2A.addEventListener('click', function () {
    lanzarReaccionCazador(cazador2A, reaccion2A, valorReaccionCazador2A, penalParaEquipoB);
});
botonEvasionCazador2A.addEventListener('click', lanzarEvasionCazador2A);
botonDisparoCazador2A.addEventListener('click', function () {
    lanzarDisparoCazadorA(cazador2A, disparo2A, valorDisparoCazador2A, disparosRealizados2A);
});
botonFintaDePorskov2A.addEventListener('click', function () {
    lanzarFintaDePorskov(cazador2A, fintaDePorskov2A, usosFintaDePorskov2A, agilidad2A, valorAgilidadCazador2A);
});
botonManoCambiada2A.addEventListener('click', function () {
    lanzarManoCambiada(cazador2A, manoCambiada2A, usosManoCambiada2A, agilidad2A, valorAgilidadCazador2A);
});
botonRoboSpeelman2A.addEventListener('click', function () {
    lanzarRoboSpeelman(cazador2A, roboSpeelman2A, usosRoboSpeelman2A, defensa2A, valorDefensaCazador2A);
});
botonTransylvanianTackle2A.addEventListener('click', function () {
    lanzarTransylvanianTackle(cazador2A, transylvanianTackle2A, usosTransylvanianTackle2A, defensa2A, valorDefensaCazador2A);
});
botonIntuicionFugaz2A.addEventListener('click', function () {
    lanzarIntuicionFugaz(cazador2A, intuicionFugaz2A, usosIntuicionFugaz2A, reaccion2A, valorReaccionCazador2A);
});
botonReversePass2A.addEventListener('click', function () {
    lanzarReversePass(cazador2A, reversePass2A, usosReversePass2A);
});
botonSlothGripRoll2A.addEventListener('click', function () {
    lanzarSlothGripRollCazador(cazador2A);
});
botonTiroLargo2A.addEventListener('click', function () {
    lanzarTiroLargo(cazador2A, usosTiroLargo2A, tiroLargo2A);
});
botonDisparoDeTorbellino2A.addEventListener('click', function () {
    lanzarDisparoDeTorbellino(cazador2A, usosDisparoDeTorbellino2A, disparoDeTorbellino2A);
});
botonDisparoConAmague2A.addEventListener('click', function () {
    lanzarDisparoConAmague(cazador2A, usosDisparoConAmague2A, disparoConAmague2A);
});
botonEfectoFinbourgh2A.addEventListener('click', function () {
    lanzarEfectoFinbourgh(cazador2A, usosEfectoFinbourgh2A, efectoFinbourgh2A);
});
botonKnuckleBall2A.addEventListener('click', function () {
    lanzarKnuckleBall(cazador2A, usosKnuckleBall2A, knuckleBall2A);
});
botonDisparoDeVolea2A.addEventListener('click', function () {
    lanzarDisparoDeVolea(cazador2A, usosDisparoDeVolea2A, disparoDeVolea2A);
});

// BOTONES CAZADOR 3A
botonAgilidadCazador3A.addEventListener('click', function () {
    lanzarAgilidadCazador(cazador3A, agilidad3A, valorAgilidadCazador3A, penalParaEquipoB);
});
botonDefensaCazador3A.addEventListener('click', function () {
    lanzarDefensaCazador(cazador3A, defensa3A, valorDefensaCazador3A, penalParaEquipoB);
});
botonReaccionCazador3A.addEventListener('click', function () {
    lanzarReaccionCazador(cazador3A, reaccion3A, valorReaccionCazador3A, penalParaEquipoB);
});
botonEvasionCazador3A.addEventListener('click', lanzarEvasionCazador3A)
botonDisparoCazador3A.addEventListener('click', function () {
    lanzarDisparoCazadorA(cazador3A, disparo3A, valorDisparoCazador3A, disparosRealizados3A);
});
botonFintaDePorskov3A.addEventListener('click', function () {
    lanzarFintaDePorskov(cazador3A, fintaDePorskov3A, usosFintaDePorskov3A, agilidad3A, valorAgilidadCazador3A);
});
botonManoCambiada3A.addEventListener('click', function () {
    lanzarManoCambiada(cazador3A, manoCambiada3A, usosManoCambiada3A, agilidad3A, valorAgilidadCazador3A);
});
botonRoboSpeelman3A.addEventListener('click', function () {
    lanzarRoboSpeelman(cazador3A, roboSpeelman3A, usosRoboSpeelman3A, defensa3A, valorDefensaCazador3A);
});
botonTransylvanianTackle3A.addEventListener('click', function () {
    lanzarTransylvanianTackle(cazador3A, transylvanianTackle3A, usosTransylvanianTackle3A, defensa3A, valorDefensaCazador3A);
});
botonIntuicionFugaz3A.addEventListener('click', function () {
    lanzarIntuicionFugaz(cazador3A, intuicionFugaz3A, usosIntuicionFugaz3A, reaccion3A, valorReaccionCazador3A);
});
botonReversePass3A.addEventListener('click', function () {
    lanzarReversePass(cazador3A, reversePass3A, usosReversePass3A);
});
botonSlothGripRoll3A.addEventListener('click', function () {
    lanzarSlothGripRollCazador(cazador3A);
});
botonTiroLargo3A.addEventListener('click', function () {
    lanzarTiroLargo(cazador3A, usosTiroLargo3A, tiroLargo3A);
});
botonDisparoDeTorbellino3A.addEventListener('click', function () {
    lanzarDisparoDeTorbellino(cazador3A, usosDisparoDeTorbellino3A, disparoDeTorbellino3A);
});
botonDisparoConAmague3A.addEventListener('click', function () {
    lanzarDisparoConAmague(cazador3A, usosDisparoConAmague3A, disparoConAmague3A);
});
botonEfectoFinbourgh3A.addEventListener('click', function () {
    lanzarEfectoFinbourgh(cazador3A, usosEfectoFinbourgh3A, efectoFinbourgh3A);
});
botonKnuckleBall3A.addEventListener('click', function () {
    lanzarKnuckleBall(cazador3A, usosKnuckleBall3A, knuckleBall3A);
});
botonDisparoDeVolea3A.addEventListener('click', function () {
    lanzarDisparoDeVolea(cazador3A, usosDisparoDeVolea3A, disparoDeVolea3A);
});

// BOTONES CAZADOR 1B
botonAgilidadCazador1B.addEventListener('click', function () {
    lanzarAgilidadCazador(cazador1B, agilidad1B, valorAgilidadCazador1B, penalParaEquipoA);
});
botonDefensaCazador1B.addEventListener('click', function () {
    lanzarDefensaCazador(cazador1B, defensa1B, valorDefensaCazador1B, penalParaEquipoA);
});
botonReaccionCazador1B.addEventListener('click', function () {
    lanzarReaccionCazador(cazador1B, reaccion1B, valorReaccionCazador1B, penalParaEquipoA);
});
botonEvasionCazador1B.addEventListener('click', lanzarEvasionCazador1B);
botonDisparoCazador1B.addEventListener('click', function () {
    lanzarDisparoCazadorB(cazador1B, disparo1B, valorDisparoCazador1B, disparosRealizados1B);
});
botonFintaDePorskov1B.addEventListener('click', function () {
    lanzarFintaDePorskov(cazador1B, fintaDePorskov1B, usosFintaDePorskov1B, agilidad1B, valorAgilidadCazador1B);
});
botonManoCambiada1B.addEventListener('click', function () {
    lanzarManoCambiada(cazador1B, manoCambiada1B, usosManoCambiada1B, agilidad1B, valorAgilidadCazador1B);
});
botonRoboSpeelman1B.addEventListener('click', function () {
    lanzarRoboSpeelman(cazador1B, roboSpeelman1B, usosRoboSpeelman1B, defensa1B, valorDefensaCazador1B);
});
botonTransylvanianTackle1B.addEventListener('click', function () {
    lanzarTransylvanianTackle(cazador1B, transylvanianTackle1B, usosTransylvanianTackle1B, defensa1B, valorDefensaCazador1B);
});
botonIntuicionFugaz1B.addEventListener('click', function () {
    lanzarIntuicionFugaz(cazador1B, intuicionFugaz1B, usosIntuicionFugaz1B, reaccion1B, valorReaccionCazador1B);
});
botonReversePass1B.addEventListener('click', function () {
    lanzarReversePass(cazador1B, reversePass1B, usosReversePass1B);
});
botonSlothGripRoll1B.addEventListener('click', function () {
    lanzarSlothGripRollCazador(cazador1B);
});
botonTiroLargo1B.addEventListener('click', function () {
    lanzarTiroLargo(cazador1B, usosTiroLargo1B, tiroLargo1B);
});
botonDisparoDeTorbellino1B.addEventListener('click', function () {
    lanzarDisparoDeTorbellino(cazador1B, usosDisparoDeTorbellino1B, disparoDeTorbellino1B);
});
botonDisparoConAmague1B.addEventListener('click', function () {
    lanzarDisparoConAmague(cazador1B, usosDisparoConAmague1B, disparoConAmague1B);
});
botonEfectoFinbourgh1B.addEventListener('click', function () {
    lanzarEfectoFinbourgh(cazador1B, usosEfectoFinbourgh1B, efectoFinbourgh1B);
});
botonKnuckleBall1B.addEventListener('click', function () {
    lanzarKnuckleBall(cazador1B, usosKnuckleBall1B, knuckleBall1B);
});
botonDisparoDeVolea1B.addEventListener('click', function () {
    lanzarDisparoDeVolea(cazador1B, usosDisparoDeVolea1B, disparoDeVolea1B);
});

// BOTONES CAZADOR 2B
botonAgilidadCazador2B.addEventListener('click', function () {
    lanzarAgilidadCazador(cazador2B, agilidad2B, valorAgilidadCazador2B, penalParaEquipoA);
});
botonDefensaCazador2B.addEventListener('click', function () {
    lanzarDefensaCazador(cazador2B, defensa2B, valorDefensaCazador2B, penalParaEquipoA);
});
botonReaccionCazador2B.addEventListener('click', function () {
    lanzarReaccionCazador(cazador2B, reaccion2B, valorReaccionCazador2B, penalParaEquipoA);
});
botonEvasionCazador2B.addEventListener('click', lanzarEvasionCazador2B);
botonDisparoCazador2B.addEventListener('click', function () {
    lanzarDisparoCazadorB(cazador2B, disparo2B, valorDisparoCazador2B, disparosRealizados2B);
});
botonFintaDePorskov2B.addEventListener('click', function () {
    lanzarFintaDePorskov(cazador2B, fintaDePorskov2B, usosFintaDePorskov2B, agilidad2B, valorAgilidadCazador2B);
});
botonManoCambiada2B.addEventListener('click', function () {
    lanzarManoCambiada(cazador2B, manoCambiada2B, usosManoCambiada2B, agilidad2B, valorAgilidadCazador2B);
});
botonRoboSpeelman2B.addEventListener('click', function () {
    lanzarRoboSpeelman(cazador2B, roboSpeelman2B, usosRoboSpeelman2B, defensa2B, valorDefensaCazador2B);
});
botonTransylvanianTackle2B.addEventListener('click', function () {
    lanzarTransylvanianTackle(cazador2B, transylvanianTackle2B, usosTransylvanianTackle2B, defensa2B, valorDefensaCazador2B);
});
botonIntuicionFugaz2B.addEventListener('click', function () {
    lanzarIntuicionFugaz(cazador2B, intuicionFugaz2B, usosIntuicionFugaz2B, reaccion2B, valorReaccionCazador2B);
});
botonReversePass2B.addEventListener('click', function () {
    lanzarReversePass(cazador2B, reversePass2B, usosReversePass2B);
});
botonSlothGripRoll2B.addEventListener('click', function () {
    lanzarSlothGripRollCazador(cazador2B);
});
botonTiroLargo2B.addEventListener('click', function () {
    lanzarTiroLargo(cazador2B, usosTiroLargo2B, tiroLargo2B);
});
botonDisparoDeTorbellino2B.addEventListener('click', function () {
    lanzarDisparoDeTorbellino(cazador2B, usosDisparoDeTorbellino2B, disparoDeTorbellino2B);
});
botonDisparoConAmague2B.addEventListener('click', function () {
    lanzarDisparoConAmague(cazador2B, usosDisparoConAmague2B, disparoConAmague2B);
});
botonEfectoFinbourgh2B.addEventListener('click', function () {
    lanzarEfectoFinbourgh(cazador2B, usosEfectoFinbourgh2B, efectoFinbourgh2B);
});
botonKnuckleBall2B.addEventListener('click', function () {
    lanzarKnuckleBall(cazador2B, usosKnuckleBall2B, knuckleBall2B);
});
botonDisparoDeVolea2B.addEventListener('click', function () {
    lanzarDisparoDeVolea(cazador2B, usosDisparoDeVolea2B, disparoDeVolea2B);
});

// BOTONES CAZADOR 3B
botonAgilidadCazador3B.addEventListener('click', function () {
    lanzarAgilidadCazador(cazador3B, agilidad3B, valorAgilidadCazador3B, penalParaEquipoA);
});
botonDefensaCazador3B.addEventListener('click', function () {
    lanzarDefensaCazador(cazador3B, defensa3B, valorDefensaCazador3B, penalParaEquipoA);
});
botonReaccionCazador3B.addEventListener('click', function () {
    lanzarReaccionCazador(cazador3B, reaccion3B, valorReaccionCazador3B, penalParaEquipoA);
});
botonEvasionCazador3B.addEventListener('click', lanzarEvasionCazador3B);
botonDisparoCazador3B.addEventListener('click', function () {
    lanzarDisparoCazadorB(cazador3B, disparo3B, valorDisparoCazador3B, disparosRealizados3B);
});
botonFintaDePorskov3B.addEventListener('click', function () {
    lanzarFintaDePorskov(cazador3B, fintaDePorskov3B, usosFintaDePorskov3B, agilidad3B, valorAgilidadCazador3B);
});
botonManoCambiada3B.addEventListener('click', function () {
    lanzarManoCambiada(cazador3B, manoCambiada3B, usosManoCambiada3B, agilidad3B, valorAgilidadCazador3B);
});
botonRoboSpeelman3B.addEventListener('click', function () {
    lanzarRoboSpeelman(cazador3B, roboSpeelman3B, usosRoboSpeelman3B, defensa3B, valorDefensaCazador3B);
});
botonTransylvanianTackle3B.addEventListener('click', function () {
    lanzarTransylvanianTackle(cazador3B, transylvanianTackle3B, usosTransylvanianTackle3B, defensa3B, valorDefensaCazador3B);
});
botonIntuicionFugaz3B.addEventListener('click', function () {
    lanzarIntuicionFugaz(cazador3B, intuicionFugaz3B, usosIntuicionFugaz3B, reaccion3B, valorReaccionCazador3B);
});
botonReversePass3B.addEventListener('click', function () {
    lanzarReversePass(cazador3B, reversePass3B, usosReversePass3B);
});
botonSlothGripRoll3B.addEventListener('click', function () {
    lanzarSlothGripRollCazador(cazador3B);
});
botonTiroLargo3B.addEventListener('click', function () {
    lanzarTiroLargo(cazador3B, usosTiroLargo3B, tiroLargo3B);
});
botonDisparoDeTorbellino3B.addEventListener('click', function () {
    lanzarDisparoDeTorbellino(cazador3B, usosDisparoDeTorbellino3B, disparoDeTorbellino3B);
});
botonDisparoConAmague3B.addEventListener('click', function () {
    lanzarDisparoConAmague(cazador3B, usosDisparoConAmague3B, disparoConAmague3B);
});
botonEfectoFinbourgh3B.addEventListener('click', function () {
    lanzarEfectoFinbourgh(cazador3B, usosEfectoFinbourgh3B, efectoFinbourgh3B);
});
botonKnuckleBall3B.addEventListener('click', function () {
    lanzarKnuckleBall(cazador3B, usosKnuckleBall3B, knuckleBall3B);
});
botonDisparoDeVolea3B.addEventListener('click', function () {
    lanzarDisparoDeVolea(cazador3B, usosDisparoDeVolea3B, disparoDeVolea3B);
});

botonCalcularGanadorCazadores1.addEventListener('click', calcularGanadorCazadores1);
botonCalcularGanadorCazadores2.addEventListener('click', calcularGanadorCazadores2);

botonReceptorPaseCazador1A.addEventListener('click', lanzarReceptorPaseCazador1A);
botonReceptorPaseCazador2A.addEventListener('click', lanzarReceptorPaseCazador2A);
botonReceptorPaseCazador3A.addEventListener('click', lanzarReceptorPaseCazador3A);
botonReceptorPaseCazador1B.addEventListener('click', lanzarReceptorPaseCazador1B);
botonReceptorPaseCazador2B.addEventListener('click', lanzarReceptorPaseCazador2B);
botonReceptorPaseCazador3B.addEventListener('click', lanzarReceptorPaseCazador3B);

botonUbicacionSnitch.addEventListener('click', lanzarUbicacionSnitch);
botonComportamientoSnitch.addEventListener('click', lanzarComportamientoSnitch);
botonAvistamiento.addEventListener('click', calcularAvistamientoTotal);
botonAvance.addEventListener('click', calcularAvanceTotal);

// BUSCADOR A
botonAvistamientoBuscadorA.addEventListener('click', lanzarAvistamientoBuscadorA);
botonVelocidadBuscadorA.addEventListener('click', lanzarVelocidadBuscadorA);
botonEvasionBuscadorA.addEventListener('click', lanzarEvasionBuscadorA);
botonAgarreBuscadorA.addEventListener('click', lanzarAgarreBuscadorA);
botonContinuarBuscadorA.addEventListener('click', lanzarContinuarBuscadorA);
botonAmagoDeWronskiA.addEventListener('click', function () {
    lanzarAmagoDeWronski(buscadorA, usosAmagoDeWronskiA, amagoDeWronskiA);
});
botonPerspicaciaA.addEventListener('click', function () {
    lanzarPerspicacia(buscadorA, usosPerspicaciaA, perspicaciaA);
});
botonUltimoAlientoA.addEventListener('click', function () {
    lanzarUltimoAliento(buscadorA, usosUltimoAlientoA, ultimoAlientoA);
});
botonCaidaEnPicadaA.addEventListener('click', function () {
    lanzarCaidaEnPicada(buscadorA, usosCaidaEnPicadaA, caidaEnPicadaA);
});
botonEscarbatoA.addEventListener('click', function () {
    lanzarEscarbato(buscadorA, usosEscarbatoA, escarbatoA);
});
botonPlumptonPassA.addEventListener('click', function () {
    lanzarPlumptonPass(buscadorA, usosPlumptonPassA, plumptonPassA);
});

// BUSCADOR B
botonAvistamientoBuscadorB.addEventListener('click', lanzarAvistamientoBuscadorB);
botonVelocidadBuscadorB.addEventListener('click', lanzarVelocidadBuscadorB);
botonEvasionBuscadorB.addEventListener('click', lanzarEvasionBuscadorB);
botonAgarreBuscadorB.addEventListener('click', lanzarAgarreBuscadorB);
botonContinuarBuscadorB.addEventListener('click', lanzarContinuarBuscadorB);
botonAmagoDeWronskiB.addEventListener('click', function () {
    lanzarAmagoDeWronski(buscadorB, usosAmagoDeWronskiB, amagoDeWronskiB);
});
botonPerspicaciaB.addEventListener('click', function () {
    lanzarPerspicacia(buscadorB, usosPerspicaciaB, perspicaciaB);
});
botonUltimoAlientoB.addEventListener('click', function () {
    lanzarUltimoAliento(buscadorB, usosUltimoAlientoB, ultimoAlientoB);
});
botonCaidaEnPicadaB.addEventListener('click', function () {
    lanzarCaidaEnPicada(buscadorB, usosCaidaEnPicadaB, caidaEnPicadaB);
});
botonEscarbatoB.addEventListener('click', function () {
    lanzarEscarbato(buscadorB, usosEscarbatoB, escarbatoB);
});
botonPlumptonPassB.addEventListener('click', function () {
    lanzarPlumptonPass(buscadorB, usosPlumptonPassB, plumptonPassB);
});

// FUNCIONES AUXILIARES

function disparoIncomodoCazadorGolpeadoA () {
    if (golpeadoCazador1A == true || golpeadoCazador2A == true || golpeadoCazador3A == true) {
        if (numeroTurnoPar == 6 || numeroTurnoPar == 12 || numeroTurnoPar == 18 || numeroTurnoPar == 24 || numeroTurnoPar == 30 || numeroTurnoPar == 36) {
            botonIniciarTurnoBuscador.disabled = false;
        } else {
            botonIniciarTurnoImpar.disabled = false;
        }
    } else {
        if (disparoIncomodo == true) {
            if (reflejosB < voladaLateralB) {
                botonVoladaLateralGuardianB.disabled = false;
            } else if (reflejosB > voladaLateralB) {
                botonReflejosGuardianB.disabled = false;
            } else {
                botonVoladaLateralGuardianB.disabled = false;
                botonReflejosGuardianB.disabled = false;
            } 
            if (usosAtajadaRelampagoB < atajadaRelampagoB) {
                botonAtajadaRelampagoB.disabled = false;
            }
            if (usosStarfishAndStickB < starfishAndStickB) {
                botonStarfishAndStickB.disabled = false;
            }
            if (usosAllInB < allInB) {
                botonAllInB.disabled = false;
            }
        } else {
            if (reflejosB > voladaLateralB) {
                botonVoladaLateralGuardianB.disabled = false;
            } else if (reflejosB < voladaLateralB) {
                botonReflejosGuardianB.disabled = false;
            } else {
                botonVoladaLateralGuardianB.disabled = false;
                botonReflejosGuardianB.disabled = false;
            }
            if (usosAtajadaRelampagoB < atajadaRelampagoB) {
                botonAtajadaRelampagoB.disabled = false;
            }
            if (usosStarfishAndStickB < starfishAndStickB) {
                botonStarfishAndStickB.disabled = false;
            }
            if (usosAllInB < allInB) {
                botonAllInB.disabled = false;
            }
        }
    }
}

function disparoIncomodoCazadorGolpeadoB () {
    if (golpeadoCazador1B == true || golpeadoCazador2B == true || golpeadoCazador3B == true) {
        if (numeroTurnoPar == 6 || numeroTurnoPar == 12 || numeroTurnoPar == 18 || numeroTurnoPar == 24 || numeroTurnoPar == 30 || numeroTurnoPar == 36) {
            botonIniciarTurnoBuscador.disabled = false;
        } else {
            botonIniciarTurnoImpar.disabled = false;
        }
    } else {
        if (disparoIncomodo == true) {
            if (reflejosA < voladaLateralA) {
                botonVoladaLateralGuardianA.disabled = false;
            } else if (reflejosA > voladaLateralA) {
                botonReflejosGuardianA.disabled = false;
            } else {
                botonVoladaLateralGuardianA.disabled = false;
                botonReflejosGuardianA.disabled = false;
            }
            if (usosAtajadaRelampagoA < atajadaRelampagoA) {
                botonAtajadaRelampagoA.disabled = false;
            }
            if (usosStarfishAndStickA < starfishAndStickA) {
                botonStarfishAndStickA.disabled = false;
            }
            if (usosAllInA < allInA) {
                botonAllInA.disabled = false;
            }
        } else {
            if (reflejosA > voladaLateralA) {
                botonVoladaLateralGuardianA.disabled = false;
            } else if (reflejosA < voladaLateralA) {
                botonReflejosGuardianA.disabled = false;
            } else {
                botonVoladaLateralGuardianA.disabled = false;
                botonReflejosGuardianA.disabled = false;
            }
            if (usosAtajadaRelampagoA < atajadaRelampagoA) {
                botonAtajadaRelampagoA.disabled = false;
            }
            if (usosStarfishAndStickA < starfishAndStickA) {
                botonStarfishAndStickA.disabled = false;
            }
            if (usosAllInA < allInA) {
                botonAllInA.disabled = false;
            }
        }
    }
}

function eleccionAtajadaGuardianA() {
    // TURNO DE PENAL Y ESPECIALES SIN PRESIÓN
    botonDisparoCazador1B.disabled = true;
    botonDisparoCazador2B.disabled = true;
    botonDisparoCazador3B.disabled = true;
    if (turnoPenal == true) {
        if (reflejosA < voladaLateralA) {
            botonReflejosGuardianA.disabled = false;
        } else if (voladaLateralA < reflejosA) {
            botonVoladaLateralGuardianA.disabled = false;
        } else {
            botonReflejosGuardianA.disabled = false;
            botonVoladaLateralGuardianA.disabled = false;
        }
        if (usosDoubleEightLoopA < doubleEightLoopA) {
            botonDoubleEightLoopA.disabled = false;
        }
    } else {
        if (reflejosA < voladaLateralA) {
            botonReflejosGuardianA.disabled = false;
        } else if (voladaLateralA < reflejosA) {
            botonVoladaLateralGuardianA.disabled = false;
        } else {
            botonReflejosGuardianA.disabled = false;
            botonVoladaLateralGuardianA.disabled = false;
        }
        if (usosAtajadaRelampagoA < atajadaRelampagoA) {
            botonAtajadaRelampagoA.disabled = false;
        }
        if (usosStarfishAndStickA < starfishAndStickA) {
            botonStarfishAndStickA.disabled = false;
        }
    }
}

function eleccionAtajadaGuardianB() {
    // TURNO DE PENAL Y ESPECIALES SIN PRESIÓN
    botonDisparoCazador1A.disabled = true;
    botonDisparoCazador2A.disabled = true;
    botonDisparoCazador3A.disabled = true;
    if (turnoPenal == true) {
        if (reflejosB < voladaLateralB) {
            botonReflejosGuardianB.disabled = false;
        } else if (voladaLateralB < reflejosB) {
            botonVoladaLateralGuardianB.disabled = false;
        } else {
            botonReflejosGuardianB.disabled = false;
            botonVoladaLateralGuardianB.disabled = false;
        }
        if (usosDoubleEightLoopB < doubleEightLoopB) {
            botonDoubleEightLoopB.disabled = false;
        }
    } else {
        if (reflejosB < voladaLateralB) {
            botonReflejosGuardianB.disabled = false;
        } else if (voladaLateralB < reflejosB) {
            botonVoladaLateralGuardianB.disabled = false;
        } else {
            botonReflejosGuardianB.disabled = false;
            botonVoladaLateralGuardianB.disabled = false;
        }
        if (usosAtajadaRelampagoB < atajadaRelampagoB) {
            botonAtajadaRelampagoB.disabled = false;
        }
        if (usosStarfishAndStickB < starfishAndStickB) {
            botonStarfishAndStickB.disabled = false;
        }
    } 
}

function lanzarPenalParaEquipoA() {
    numeroTurnoPenal ++;
    descripcion = `____________________`
    mostrarDescripcionTurno(descripcion)
    descripcion = `Turno de Penal: ` + numeroTurnoPenal;
    mostrarDescripcionTurno(descripcion)
    descripcion = ` - - - - - - - - - - - - - - - - `
    mostrarDescripcionTurno(descripcion)
    botonDisparoCazador1A.disabled = false;
    if (usosDisparoDeTorbellino1A < disparoDeTorbellino1A) {
        botonDisparoDeTorbellino1A.disabled = false;
    }
    if (usosEfectoFinbourgh1A < efectoFinbourgh1A) {
        botonEfectoFinbourgh1A.disabled = false;
    }
    if (usosKnuckleBall1A < knuckleBall1A) {
        botonKnuckleBall1A.disabled = false;
    }
    botonDisparoCazador2A.disabled = false;
    if (usosDisparoDeTorbellino2A < disparoDeTorbellino2A) {
        botonDisparoDeTorbellino2A.disabled = false;
    }
    if (usosEfectoFinbourgh2A < efectoFinbourgh2A) {
        botonEfectoFinbourgh2A.disabled = false;
    }
    if (usosKnuckleBall2A < knuckleBall2A) {
        botonKnuckleBall2A.disabled = false;
    }
    botonDisparoCazador3A.disabled = false;
    if (usosDisparoDeTorbellino3A < disparoDeTorbellino3A) {
        botonDisparoDeTorbellino3A.disabled = false;
    }
    if (usosEfectoFinbourgh3A < efectoFinbourgh3A) {
        botonEfectoFinbourgh3A.disabled = false;
    }
    if (usosKnuckleBall3A < knuckleBall3A) {
        botonKnuckleBall3A.disabled = false;
    }
}

function lanzarPenalParaEquipoB() {
    numeroTurnoPenal ++;
    descripcion = `____________________`
    mostrarDescripcionTurno(descripcion)
    descripcion = `Turno de Penal: ` + numeroTurnoPenal;
    mostrarDescripcionTurno(descripcion)
    descripcion = ` - - - - - - - - - - - - - - - - `
    mostrarDescripcionTurno(descripcion)
    botonDisparoCazador1B.disabled = false;
    if (usosDisparoDeTorbellino1B < disparoDeTorbellino1B) {
        botonDisparoDeTorbellino1B.disabled = false;
    }
    if (usosEfectoFinbourgh1B < efectoFinbourgh1B) {
        botonEfectoFinbourgh1B.disabled = false;
    }
    if (usosKnuckleBall1B < knuckleBall1B) {
        botonKnuckleBall1B.disabled = false;
    }
    botonDisparoCazador2B.disabled = false;
    if (usosDisparoDeTorbellino2B < disparoDeTorbellino2B) {
        botonDisparoDeTorbellino2B.disabled = false;
    }
    if (usosEfectoFinbourgh2B < efectoFinbourgh2B) {
        botonEfectoFinbourgh2B.disabled = false;
    }
    if (usosKnuckleBall2B < knuckleBall2B) {
        botonKnuckleBall2B.disabled = false;
    }
    botonDisparoCazador3B.disabled = false;
    if (usosDisparoDeTorbellino3B < disparoDeTorbellino3B) {
        botonDisparoDeTorbellino3B.disabled = false;
    }
    if (usosEfectoFinbourgh3B < efectoFinbourgh3B) {
        botonEfectoFinbourgh3B.disabled = false;
    }
    if (usosKnuckleBall3B < knuckleBall3B) {
        botonKnuckleBall3B.disabled = false;
    }
}

function recibenCazadoresBreflejosA() {
    if (tiroResbalonActivo == true) {
        tiroResbalonActivo = false;
        if ((valorReflejosGuardianA == reflejosA) || valorReflejosGuardianA > valorDisparoGuardianB + 1) {
            descripcion = `${guardianA} ha bloqueado (${valorReflejosGuardianA}) el disparo (${valorDisparoGuardianB}) de ${guardianB} con sus Reflejos y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoA = true;
            atajadaSegura = true;
        } else if (valorReflejosGuardianA < valorDisparoGuardianB) {
            descripcion = `${guardianB} con su disparo (${valorDisparoGuardianB}) ha superado a ${guardianA} (${valorReflejosGuardianA}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesB = golesB + 10;
            posesionEquipoA = true;
        } else {
            descripcion = `${guardianA} ha bloqueado (${valorReflejosGuardianA}) de forma crítica el disparo (${valorDisparoGuardianB}) de ${guardianB} con sus Reflejos y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    } else if (paseRecibidoCazador1B == true || tiroLargoActivo1B == true || disparoConAmagueActivo1B == true) {
        tiroLargoActivo1B = false;
        disparoConAmagueActivo1B = false;
        if ((valorReflejosGuardianA == reflejosA) || valorReflejosGuardianA > valorDisparoCazador1B + 1) {
            descripcion = `${guardianA} ha bloqueado (${valorReflejosGuardianA}) el disparo (${valorDisparoCazador1B}) de ${cazador1B} con sus Reflejos y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoA = true;
            atajadaSegura = true;
        } else if (valorReflejosGuardianA < valorDisparoCazador1B) {
            descripcion = `${cazador1B} con su disparo (${valorDisparoCazador1B}) ha superado a ${guardianA} (${valorReflejosGuardianA}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesB = golesB + 10;
            posesionEquipoA = true;
        } else {
            descripcion = `${guardianA} ha bloqueado (${valorReflejosGuardianA}) de forma crítica el disparo (${valorDisparoCazador1B}) de ${cazador1B} con sus Reflejos y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    } else if (paseRecibidoCazador2B == true || tiroLargoActivo2B == true || disparoConAmagueActivo2B == true) {
        tiroLargoActivo2B = false;
        disparoConAmagueActivo2B = false;
        if ((valorReflejosGuardianA == reflejosA) || valorReflejosGuardianA > valorDisparoCazador2B + 1) {
            descripcion = `${guardianA} ha bloqueado (${valorReflejosGuardianA}) el disparo (${valorDisparoCazador2B}) de ${cazador2B} con sus Reflejos y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoA = true;
            atajadaSegura = true;
        } else if (valorReflejosGuardianA < valorDisparoCazador2B) {
            descripcion = `${cazador2B} con su disparo (${valorDisparoCazador2B}) ha superado a ${guardianA} (${valorReflejosGuardianA}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesB = golesB + 10;
            posesionEquipoA = true;
        } else {
            descripcion = `${guardianA} ha bloqueado (${valorReflejosGuardianA}) de forma crítica el disparo (${valorDisparoCazador2B}) de ${cazador2B} con sus Reflejos y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    } else if (paseRecibidoCazador3B == true || tiroLargoActivo3B == true || disparoConAmagueActivo3B == true) {
        tiroLargoActivo3B = false;
        disparoConAmagueActivo3B = false;
        if ((valorReflejosGuardianA == reflejosA) || valorReflejosGuardianA > valorDisparoCazador3B + 1) {
            descripcion = `${guardianA} ha bloqueado (${valorReflejosGuardianA}) el disparo (${valorDisparoCazador3B}) de ${cazador3B} con sus Reflejos y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoA = true;
            atajadaSegura = true;
        } else if (valorReflejosGuardianA < valorDisparoCazador3B) {
            descripcion = `${cazador3B} con su disparo (${valorDisparoCazador3B}) ha superado a ${guardianA} (${valorReflejosGuardianA}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesB = golesB + 10;
            posesionEquipoA = true;
        } else {
            descripcion = `${guardianA} ha bloqueado (${valorReflejosGuardianA}) de forma crítica el disparo (${valorDisparoCazador3B}) de ${cazador3B} con sus Reflejos y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    }
}

function recibenCazadoresAreflejosB() {
    if (tiroResbalonActivo == true) {
        tiroResbalonActivo = false;
        if ((valorReflejosGuardianB == reflejosB) || valorReflejosGuardianB > valorDisparoGuardianA + 1) {
            descripcion = `${guardianB} ha bloqueado (${valorReflejosGuardianB}) el disparo (${valorDisparoGuardianA}) de ${guardianA} con sus Reflejos y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoB = true;
            atajadaSegura = true;
        } else if (valorReflejosGuardianB < valorDisparoGuardianA) {
            descripcion = `${guardianA} con su disparo (${valorDisparoGuardianA}) ha superado a ${guardianB} (${valorReflejosGuardianB}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesA = golesA + 10;
            posesionEquipoB = true;
        } else {
            descripcion = `${guardianB} ha bloqueado (${valorReflejosGuardianB}) de forma crítica el disparo (${valorDisparoGuardianA}) de ${guardianA} con sus Reflejos y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    } else if (paseRecibidoCazador1A == true || tiroLargoActivo1A == true || disparoConAmagueActivo1A == true) {
        tiroLargoActivo1A = false;
        disparoConAmagueActivo1A = false;
        if ((valorReflejosGuardianB == reflejosB) || valorReflejosGuardianB > valorDisparoCazador1A + 1) {
            descripcion = `${guardianB} ha bloqueado el disparo (${valorDisparoCazador1A}) de ${cazador1A} con sus Reflejos (${valorReflejosGuardianB}) y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoB = true;
            atajadaSegura = true;
        } else if (valorReflejosGuardianB < valorDisparoCazador1A) {
            descripcion = `${cazador1A} con su disparo (${valorDisparoCazador1A}) ha superado a ${guardianB} (${valorReflejosGuardianB}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesA = golesA + 10;
            posesionEquipoB = true;
        } else {
            descripcion = `${guardianB} ha bloqueado de forma crítica el disparo (${valorDisparoCazador1A}) de ${cazador1A} con sus Reflejos (${valorReflejosGuardianB}) y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    } else if (paseRecibidoCazador2A == true || tiroLargoActivo2A == true || disparoConAmagueActivo2A == true) {
        tiroLargoActivo2A = false;
        disparoConAmagueActivo2A = false;
        if ((valorReflejosGuardianB == reflejosB) || valorReflejosGuardianB > valorDisparoCazador2A + 1) {
            descripcion = `${guardianB} ha bloqueado el disparo (${valorDisparoCazador2A}) de ${cazador2A} con sus Reflejos (${valorReflejosGuardianB}) y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoB = true;
            atajadaSegura = true;
        } else if (valorReflejosGuardianB < valorDisparoCazador2A) {
            descripcion = `${cazador2A} con su disparo (${valorDisparoCazador2A}) ha superado a ${guardianB} (${valorReflejosGuardianB}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesA = golesA + 10;
            posesionEquipoB = true;
        } else {
            descripcion = `${guardianB} ha bloqueado de forma crítica el disparo (${valorDisparoCazador2A}) de ${cazador2A} con sus Reflejos (${valorReflejosGuardianB}) y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    } else if (paseRecibidoCazador3A == true || tiroLargoActivo3A == true || disparoConAmagueActivo3A == true) {
        tiroLargoActivo3A = false;
        disparoConAmagueActivo3A = false;
        if ((valorReflejosGuardianB == reflejosB) || valorReflejosGuardianB > valorDisparoCazador3A + 1) {
            descripcion = `${guardianB} ha bloqueado el disparo (${valorDisparoCazador3A}) de ${cazador3A} con sus Reflejos (${valorReflejosGuardianB}) y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoB = true;
            atajadaSegura = true;
        } else if (valorReflejosGuardianB < valorDisparoCazador3A) {
            descripcion = `${cazador3A} con su disparo (${valorDisparoCazador3A}) ha superado a ${guardianB} (${valorReflejosGuardianB}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesA = golesA + 10;
            posesionEquipoB = true;
        } else {
            descripcion = `${guardianB} ha bloqueado de forma crítica el disparo (${valorDisparoCazador3A}) de ${cazador3A} con sus Reflejos (${valorReflejosGuardianB}) y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    }
}

function recibenCazadoresBvoladaLateralA() {
    if (tiroResbalonActivo == true) {
        tiroResbalonActivo = false;
        if ((valorVoladaLateralGuardianA == voladaLateralA) || valorVoladaLateralGuardianA > valorDisparoGuardianB + 1) {
            descripcion = `${guardianA} ha bloqueado (${valorVoladaLateralGuardianA}) el disparo (${valorDisparoGuardianB}) de ${guardianB} con su Volada lateral y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoA = true;
            atajadaSegura = true;
        } else if (valorVoladaLateralGuardianA < valorDisparoGuardianB) {
            descripcion = `${guardianB} con su disparo (${valorDisparoGuardianB}) ha superado a ${guardianA} (${valorVoladaLateralGuardianA}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesB = golesB + 10;
            posesionEquipoA = true;
        } else {
            descripcion = `${guardianA} ha bloqueado (${valorVoladaLateralGuardianA}) de forma crítica el disparo (${valorDisparoGuardianB}) de ${guardianB} con su Volada lateral y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    } else if (paseRecibidoCazador1B == true || tiroLargoActivo1B == true || disparoConAmagueActivo1B == true) {
        tiroLargoActivo1B = false;
        disparoConAmagueActivo1B = false;
        if ((valorVoladaLateralGuardianA == voladaLateralA) || valorVoladaLateralGuardianA > valorDisparoCazador1B + 1) {
            descripcion = `${guardianA} ha bloqueado (${valorVoladaLateralGuardianA}) el disparo (${valorDisparoCazador1B}) de ${cazador1B} con su Volada lateral y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoA = true;
            atajadaSegura = true;
        } else if (valorVoladaLateralGuardianA < valorDisparoCazador1B) {
            descripcion = `${cazador1B} con su disparo (${valorDisparoCazador1B}) ha superado a ${guardianA} (${valorVoladaLateralGuardianA}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesB = golesB + 10;
            posesionEquipoA = true;
        } else {
            descripcion = `${guardianA} ha bloqueado (${valorVoladaLateralGuardianA}) de forma crítica el disparo (${valorDisparoCazador1B}) de ${cazador1B} con su Volada lateral y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    } else if (paseRecibidoCazador2B == true || tiroLargoActivo2B == true || disparoConAmagueActivo2B == true) {
        tiroLargoActivo2B = false;
        disparoConAmagueActivo2B = false;
        if ((valorVoladaLateralGuardianA == voladaLateralA) || valorVoladaLateralGuardianA > valorDisparoCazador2B + 1) {
            descripcion = `${guardianA} ha bloqueado el disparo (${valorDisparoCazador2B}) de ${cazador2B} con su Volada lateral (${valorVoladaLateralGuardianA}) y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoA = true;
            atajadaSegura = true;
        } else if (valorVoladaLateralGuardianA < valorDisparoCazador2B) {
            descripcion = `${cazador2B} con su disparo (${valorDisparoCazador2B}) ha superado a ${guardianA} (${valorVoladaLateralGuardianA}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesB = golesB + 10;
            posesionEquipoA = true;
        } else {
            descripcion = `${guardianA} ha bloqueado de forma crítica el disparo (${valorDisparoCazador2B}) de ${cazador2B} con su Volada lateral (${valorVoladaLateralGuardianA}) y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    } else if (paseRecibidoCazador3B == true || tiroLargoActivo3B == true || disparoConAmagueActivo3B == true) {
        tiroLargoActivo3B = false;
        disparoConAmagueActivo3B = false;
        if ((valorVoladaLateralGuardianA == voladaLateralA) || valorVoladaLateralGuardianA > valorDisparoCazador3B + 1) {
            descripcion = `${guardianA} ha bloqueado el disparo (${valorDisparoCazador3B}) de ${cazador3B} con su Volada lateral (${valorVoladaLateralGuardianA}) y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoA = true;
            atajadaSegura = true;
        } else if (valorVoladaLateralGuardianA < valorDisparoCazador3B) {
            descripcion = `${cazador3B} con su disparo (${valorDisparoCazador3B}) ha superado a ${guardianA} (${valorVoladaLateralGuardianA}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesB = golesB + 10;
            posesionEquipoA = true;
        } else {
            descripcion = `${guardianA} ha bloqueado de forma crítica el disparo (${valorDisparoCazador3B}) de ${cazador3B} con su Volada lateral (${valorVoladaLateralGuardianA}) y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    }
}

function recibenCazadoresAvoladaLateralB() {
    if (tiroResbalonActivo == true) {
        tiroResbalonActivo = false;
        descripcion = `Mensajito de prueba.`;
        mostrarDescripcionTurno(descripcion);
        if ((valorVoladaLateralGuardianB == voladaLateralB) || valorVoladaLateralGuardianB > valorDisparoGuardianA + 1) {
            descripcion = `${guardianB} ha bloqueado (${valorVoladaLateralGuardianB}) el disparo (${valorDisparoGuardianA}) de ${guardianA} con su Volada lateral y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoB = true;
            atajadaSegura = true;
        } else if (valorVoladaLateralGuardianB < valorDisparoGuardianA) {
            descripcion = `${guardianA} con su disparo (${valorDisparoGuardianA}) ha superado a ${guardianB} (${valorVoladaLateralGuardianB}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesA = golesA + 10;
            posesionEquipoB = true;
        } else {
            descripcion = `${guardianB} ha bloqueado (${valorVoladaLateralGuardianB}) de forma crítica el disparo (${valorDisparoGuardianA}) de ${guardianA} con su Volada lateral y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    } else if (paseRecibidoCazador1A == true || tiroLargoActivo1A == true || disparoConAmagueActivo1A == true) {
        tiroLargoActivo1A = false;
        disparoConAmagueActivo1A = false;
        if ((valorVoladaLateralGuardianB == voladaLateralB) || valorVoladaLateralGuardianB > valorDisparoCazador1A + 1) {
            descripcion = `${guardianB} ha bloqueado (${valorVoladaLateralGuardianB}) el disparo (${valorDisparoCazador1A}) de ${cazador1A} con su Volada lateral y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoB = true;
            atajadaSegura = true;
        } else if (valorVoladaLateralGuardianB < valorDisparoCazador1A) {
            descripcion = `${cazador1A} con su disparo (${valorDisparoCazador1A}) ha superado a ${guardianB} (${valorVoladaLateralGuardianB}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesA = golesA + 10;
            posesionEquipoB = true;
        } else {
            descripcion = `${guardianB} ha bloqueado (${valorVoladaLateralGuardianB}) de forma crítica el disparo (${valorDisparoCazador1A}) de ${cazador1A} con su Volada lateral y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    } else if (paseRecibidoCazador2A == true || tiroLargoActivo2A == true || disparoConAmagueActivo2A == true) {
        tiroLargoActivo2A = false;
        disparoConAmagueActivo2A = false;
        if ((valorVoladaLateralGuardianB == voladaLateralB) || valorVoladaLateralGuardianB > valorDisparoCazador2A + 1) {
            descripcion = `${guardianB} ha bloqueado (${valorVoladaLateralGuardianB}) el disparo (${valorDisparoCazador2A}) de ${cazador2A} con su Volada lateral y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoB = true;
            atajadaSegura = true;
        } else if (valorVoladaLateralGuardianB < valorDisparoCazador2A) {
            descripcion = `${cazador2A} con su disparo (${valorDisparoCazador2A}) ha superado a ${guardianB} (${valorVoladaLateralGuardianB}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesA = golesA + 10;
            posesionEquipoB = true;
        } else {
            descripcion = `${guardianB} ha bloqueado (${valorVoladaLateralGuardianB}) de forma crítica el disparo (${valorDisparoCazador2A}) de ${cazador2A} con su Volada lateral y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    } else if (paseRecibidoCazador3A == true || tiroLargoActivo3A == true || disparoConAmagueActivo3A == true) {
        tiroLargoActivo3A = false;
        disparoConAmagueActivo3A = false;
        if ((valorVoladaLateralGuardianB == voladaLateralB) || valorVoladaLateralGuardianB > valorDisparoCazador3A + 1) {
            descripcion = `${guardianB} ha bloqueado (${valorVoladaLateralGuardianB}) el disparo (${valorDisparoCazador3A}) de ${cazador3A} con su Volada lateral y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoB = true;
            atajadaSegura = true;
        } else if (valorVoladaLateralGuardianB < valorDisparoCazador3A) {
            descripcion = `${cazador3A} con su disparo (${valorDisparoCazador3A}) ha superado a ${guardianB} (${valorVoladaLateralGuardianB}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesA = golesA + 10;
            posesionEquipoB = true;
        } else {
            descripcion = `${guardianB} ha bloqueado (${valorVoladaLateralGuardianB}) de forma crítica el disparo (${valorDisparoCazador3A}) de ${cazador3A} con su Volada lateral y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    }
}

function penalesCazadoresBreflejosA() {
    botonIniciarTurnoImpar.disabled = false;
    if (penalCazador1B == true) {
        penalCazador1B = false;
        if ((valorReflejosGuardianA == reflejosA) || valorReflejosGuardianA > valorDisparoCazador1B + 1) {
            descripcion = `${guardianA} ha bloqueado (${valorReflejosGuardianA}) el disparo (${valorDisparoCazador1B}) de ${cazador1B} con sus Reflejos y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoA = true;
            atajadaSegura = true;
        } else if (valorReflejosGuardianA < valorDisparoCazador1B) {
            descripcion = `${cazador1B} con su disparo (${valorDisparoCazador1B}) ha superado a ${guardianA} (${valorReflejosGuardianA}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesB = golesB + 10;
            posesionEquipoA = true;
        } else {
            descripcion = `${guardianA} ha bloqueado (${valorReflejosGuardianA}) de forma crítica el disparo (${valorDisparoCazador1B}) de ${cazador1B} con sus Reflejos y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    } else if (penalCazador2B == true) {
        penalCazador2B = false;
        if ((valorReflejosGuardianA == reflejosA) || valorReflejosGuardianA > valorDisparoCazador2B + 1) {
            descripcion = `${guardianA} ha bloqueado (${valorReflejosGuardianA}) el disparo (${valorDisparoCazador2B}) de ${cazador2B} con sus Reflejos y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoA = true;
            atajadaSegura = true;
        } else if (valorReflejosGuardianA < valorDisparoCazador2B) {
            descripcion = `${cazador2B} con su disparo (${valorDisparoCazador2B}) ha superado a ${guardianA} (${valorReflejosGuardianA}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesB = golesB + 10;
            posesionEquipoA = true;
        } else {
            descripcion = `${guardianA} ha bloqueado (${valorReflejosGuardianA}) de forma crítica el disparo (${valorDisparoCazador2B}) de ${cazador2B} con sus Reflejos y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    } else if (penalCazador3B == true) {
        penalCazador3B = false;
        if ((valorReflejosGuardianA == reflejosA) || valorReflejosGuardianA > valorDisparoCazador3B + 1) {
            descripcion = `${guardianA} ha bloqueado (${valorReflejosGuardianA}) el disparo (${valorDisparoCazador3B}) de ${cazador3B} con sus Reflejos y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoA = true;
            atajadaSegura = true;
        } else if (valorReflejosGuardianA < valorDisparoCazador3B) {
            descripcion = `${cazador3B} con su disparo (${valorDisparoCazador3B}) ha superado a ${guardianA} (${valorReflejosGuardianA}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesB = golesB + 10;
            posesionEquipoA = true;
        } else {
            descripcion = `${guardianA} ha bloqueado (${valorReflejosGuardianA}) de forma crítica el disparo (${valorDisparoCazador3B}) de ${cazador3B} con sus Reflejos y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    }
}

function penalesCazadoresAreflejosB() {
    botonIniciarTurnoImpar.disabled = false;
    if (penalCazador1A == true) {
        penalCazador1A = false;
        if ((valorReflejosGuardianB == reflejosB) || valorReflejosGuardianB > valorDisparoCazador1A + 1) {
            descripcion = `${guardianB} ha bloqueado el disparo (${valorDisparoCazador1A}) de ${cazador1A} con sus Reflejos (${valorReflejosGuardianB}) y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoB = true;
            atajadaSegura = true;
        } else if (valorReflejosGuardianB < valorDisparoCazador1A) {
            descripcion = `${cazador1A} con su disparo (${valorDisparoCazador1A}) ha superado a ${guardianB} (${valorReflejosGuardianB}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesA = golesA + 10;
            posesionEquipoB = true;
        } else {
            descripcion = `${guardianB} ha bloqueado de forma crítica el disparo (${valorDisparoCazador1A}) de ${cazador1A} con sus Reflejos (${valorReflejosGuardianB}) y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    } else if (penalCazador2A == true) {
        penalCazador2A = false;
        if ((valorReflejosGuardianB == reflejosB) || valorReflejosGuardianB > valorDisparoCazador2A + 1) {
            descripcion = `${guardianB} ha bloqueado el disparo (${valorDisparoCazador2A}) de ${cazador2A} con sus Reflejos (${valorReflejosGuardianB}) y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoB = true;
            atajadaSegura = true;
        } else if (valorReflejosGuardianB < valorDisparoCazador2A) {
            descripcion = `${cazador2A} con su disparo (${valorDisparoCazador2A}) ha superado a ${guardianB} (${valorReflejosGuardianB}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesA = golesA + 10;
            posesionEquipoB = true;
        } else {
            descripcion = `${guardianB} ha bloqueado de forma crítica el disparo (${valorDisparoCazador2A}) de ${cazador2A} con sus Reflejos (${valorReflejosGuardianB}) y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    } else if (penalCazador3A == true) {
        penalCazador3A = false;
        if ((valorReflejosGuardianB == reflejosB) || valorReflejosGuardianB > valorDisparoCazador3A + 1) {
            descripcion = `${guardianB} ha bloqueado el disparo (${valorDisparoCazador3A}) de ${cazador3A} con sus Reflejos (${valorReflejosGuardianB}) y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoB = true;
            atajadaSegura = true;
        } else if (valorReflejosGuardianB < valorDisparoCazador3A) {
            descripcion = `${cazador3A} con su disparo (${valorDisparoCazador3A}) ha superado a ${guardianB} (${valorReflejosGuardianB}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesA = golesA + 10;
            posesionEquipoB = true;
        } else {
            descripcion = `${guardianB} ha bloqueado de forma crítica el disparo (${valorDisparoCazador3A}) de ${cazador3A} con sus Reflejos (${valorReflejosGuardianB}) y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    }
}

function penalesCazadoresBvoladaLateralA() {
    botonIniciarTurnoImpar.disabled = false;
    if (penalCazador1B == true) {
        penalCazador1B = false;
        if ((valorVoladaLateralGuardianA == voladaLateralA) || valorVoladaLateralGuardianA > valorDisparoCazador1B + 1) {
            descripcion = `${guardianA} ha bloqueado (${valorVoladaLateralGuardianA}) el disparo (${valorDisparoCazador1B}) de ${cazador1B} con su Volada lateral y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoA = true;
            atajadaSegura = true;
        } else if (valorVoladaLateralGuardianA < valorDisparoCazador1B) {
            descripcion = `${cazador1B} con su disparo (${valorDisparoCazador1B}) ha superado a ${guardianA} (${valorVoladaLateralGuardianA}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesB = golesB + 10;
            posesionEquipoA = true;
        } else {
            descripcion = `${guardianA} ha bloqueado (${valorVoladaLateralGuardianA}) de forma crítica el disparo (${valorDisparoCazador1B}) de ${cazador1B} con su Volada lateral y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    } else if (penalCazador2B == true) {
        penalCazador2B = false;
        if ((valorVoladaLateralGuardianA == voladaLateralA) || valorVoladaLateralGuardianA > valorDisparoCazador2B + 1) {
            descripcion = `${guardianA} ha bloqueado el disparo (${valorDisparoCazador2B}) de ${cazador2B} con su Volada lateral (${valorVoladaLateralGuardianA}) y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoA = true;
            atajadaSegura = true;
        } else if (valorVoladaLateralGuardianA < valorDisparoCazador2B) {
            descripcion = `${cazador2B} con su disparo (${valorDisparoCazador2B}) ha superado a ${guardianA} (${valorVoladaLateralGuardianA}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesB = golesB + 10;
            posesionEquipoA = true;
        } else {
            descripcion = `${guardianA} ha bloqueado de forma crítica el disparo (${valorDisparoCazador2B}) de ${cazador2B} con su Volada lateral (${valorVoladaLateralGuardianA}) y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    } else if (penalCazador3B == true) {
        penalCazador3B = false;
        if ((valorVoladaLateralGuardianA == voladaLateralA) || valorVoladaLateralGuardianA > valorDisparoCazador3B + 1) {
            descripcion = `${guardianA} ha bloqueado el disparo (${valorDisparoCazador3B}) de ${cazador3B} con su Volada lateral (${valorVoladaLateralGuardianA}) y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoA = true;
            atajadaSegura = true;
        } else if (valorVoladaLateralGuardianA < valorDisparoCazador3B) {
            descripcion = `${cazador3B} con su disparo (${valorDisparoCazador3B}) ha superado a ${guardianA} (${valorVoladaLateralGuardianA}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesB = golesB + 10;
            posesionEquipoA = true;
        } else {
            descripcion = `${guardianA} ha bloqueado de forma crítica el disparo (${valorDisparoCazador3B}) de ${cazador3B} con su Volada lateral (${valorVoladaLateralGuardianA}) y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    }
}

function penalesCazadoresAvoladaLateralB() {
    botonIniciarTurnoImpar.disabled = false;
    if (penalCazador1A == true) {
        penalCazador1A = false;
        if ((valorVoladaLateralGuardianB == voladaLateralB) || valorVoladaLateralGuardianB > valorDisparoCazador1A + 1) {
            descripcion = `${guardianB} ha bloqueado (${valorVoladaLateralGuardianB}) el disparo (${valorDisparoCazador1A}) de ${cazador1A} con su Volada lateral y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoB = true;
            atajadaSegura = true;
        } else if (valorVoladaLateralGuardianB < valorDisparoCazador1A) {
            descripcion = `${cazador1A} con su disparo (${valorDisparoCazador1A}) ha superado a ${guardianB} (${valorVoladaLateralGuardianB}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesA = golesA + 10;
            posesionEquipoB = true;
        } else {
            descripcion = `${guardianB} ha bloqueado (${valorVoladaLateralGuardianB}) de forma crítica el disparo (${valorDisparoCazador1A}) de ${cazador1A} con su Volada lateral y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    } else if (penalCazador2A == true) {
        penalCazador2A = false;
        if ((valorVoladaLateralGuardianB == voladaLateralB) || valorVoladaLateralGuardianB > valorDisparoCazador2A + 1) {
            descripcion = `${guardianB} ha bloqueado (${valorVoladaLateralGuardianB}) el disparo (${valorDisparoCazador2A}) de ${cazador2A} con su Volada lateral y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoB = true;
            atajadaSegura = true;
        } else if (valorVoladaLateralGuardianB < valorDisparoCazador2A) {
            descripcion = `${cazador2A} con su disparo (${valorDisparoCazador2A}) ha superado a ${guardianB} (${valorVoladaLateralGuardianB}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesA = golesA + 10;
            posesionEquipoB = true;
        } else {
            descripcion = `${guardianB} ha bloqueado (${valorVoladaLateralGuardianB}) de forma crítica el disparo (${valorDisparoCazador2A}) de ${cazador2A} con su Volada lateral y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    } else if (penalCazador3A == true) {
        penalCazador3A = false;
        if ((valorVoladaLateralGuardianB == voladaLateralB) || valorVoladaLateralGuardianB > valorDisparoCazador3A + 1) {
            descripcion = `${guardianB} ha bloqueado (${valorVoladaLateralGuardianB}) el disparo (${valorDisparoCazador3A}) de ${cazador3A} con su Volada lateral y retiene la quaffle.`;
            mostrarDescripcionTurno(descripcion);
            posesionEquipoB = true;
            atajadaSegura = true;
        } else if (valorVoladaLateralGuardianB < valorDisparoCazador3A) {
            descripcion = `${cazador3A} con su disparo (${valorDisparoCazador3A}) ha superado a ${guardianB} (${valorVoladaLateralGuardianB}) y consigue marcar un tanto.`;
            mostrarDescripcionTurno(descripcion);
            golesA = golesA + 10;
            posesionEquipoB = true;
        } else {
            descripcion = `${guardianB} ha bloqueado (${valorVoladaLateralGuardianB}) de forma crítica el disparo (${valorDisparoCazador3A}) de ${cazador3A} con su Volada lateral y la quaffle sale rebotada.`;
            mostrarDescripcionTurno(descripcion);
            quaffleSuelta = true;
        }
    }
}

function participacionGolpeGolpeadoresA() {
    if (energiaConsumida1A < energia1A) {
        botonGolpeGolpeador1A.disabled = false;
        if (usosGolpeDeFrancotirador1A < golpeDeFrancotirador1A) {
            botonGolpeDeFrancotirador1A.disabled = false;
        }
        if (usosBludgerBackbeat1A < bludgerBackbeat1A) {
            botonBludgerBackbeat1A.disabled = false;
        }
        if (usosGolpeBombeado1A < golpeBombeado1A) {
            botonGolpeBombeado1A.disabled = false;
        }
        if (usosGolpeCanon1A < golpeCanon1A) {
            botonGolpeCanon1A.disabled = false;
        }
    } else {
        botonGolpeGolpeador1A.disabled = true;
    }
    if (energiaConsumida2A < energia2A) {
        botonGolpeGolpeador2A.disabled = false;
        if (usosGolpeDeFrancotirador2A < golpeDeFrancotirador2A) {
            botonGolpeDeFrancotirador2A.disabled = false;
        }
        if (usosBludgerBackbeat2A < bludgerBackbeat2A) {
            botonBludgerBackbeat2A.disabled = false;
        }
        if (usosGolpeBombeado2A < golpeBombeado2A) {
            botonGolpeBombeado2A.disabled = false;
        }
        if (usosGolpeCanon2A < golpeCanon2A) {
            botonGolpeCanon2A.disabled = false;
        }
    } else {
        botonGolpeGolpeador2A.disabled = true;
    }
    botonPasarTurnoGolpeador1A.disabled = false;
    botonPasarTurnoGolpeador2A.disabled = false;
}

function participacionGolpeGolpeadoresB() {
    if (energiaConsumida1B < energia1B) {
        botonGolpeGolpeador1B.disabled = false;
        if (usosGolpeDeFrancotirador1B < golpeDeFrancotirador1B) {
            botonGolpeDeFrancotirador1B.disabled = false;
        }
        if (usosBludgerBackbeat1B < bludgerBackbeat1B) {
            botonBludgerBackbeat1B.disabled = false;
        }
        if (usosGolpeBombeado1B < golpeBombeado1B) {
            botonGolpeBombeado1B.disabled = false;
        }
        if (usosGolpeCanon1B < golpeCanon1B) {
            botonGolpeCanon1B.disabled = false;
        }
    } else {
        botonGolpeGolpeador1B.disabled = true;
    }
    if (energiaConsumida2B < energia2B) {
        botonGolpeGolpeador2B.disabled = false;
        if (usosGolpeDeFrancotirador2B < golpeDeFrancotirador2B) {
            botonGolpeDeFrancotirador2B.disabled = false;
        }
        if (usosBludgerBackbeat2B < bludgerBackbeat2B) {
            botonBludgerBackbeat2B.disabled = false;
        }
        if (usosGolpeBombeado2B < golpeBombeado2B) {
            botonGolpeBombeado2B.disabled = false;
        }
        if (usosGolpeCanon2B < golpeCanon2B) {
            botonGolpeCanon2B.disabled = false;
        }
    } else {
        botonGolpeGolpeador2B.disabled = true;
    }
    botonPasarTurnoGolpeador1B.disabled = false;
    botonPasarTurnoGolpeador2B.disabled = false;
}

function participacionIntercepcionGolpeadoresA() {
    if (energiaConsumida1A < energia1A) {
        botonIntercepcionGolpeador1A.disabled = false;
        if (usosInterferenciaDeAguila1A < interferenciaDeAguila1A) {
            botonIntercepcionGolpeador1A.disabled = false;
        }
        if (usosAngelGuardian1A < angelGuardian1A) {
            botonAngelGuardian1A.disabled = false;
        }
    }
    if (energiaConsumida2A < energia2A) {
        botonIntercepcionGolpeador2A.disabled = false;
        if (usosInterferenciaDeAguila2A < interferenciaDeAguila2A) {
            botonIntercepcionGolpeador2A.disabled = false;
        }
        if (usosAngelGuardian2A < angelGuardian2A) {
            botonAngelGuardian2A.disabled = false;
        }
    }
}

function participacionIntercepcionGolpeadoresB() {
    if (energiaConsumida1B < energia1B) {
        botonIntercepcionGolpeador1B.disabled = false;
        if (usosInterferenciaDeAguila1B < interferenciaDeAguila1B) {
            botonIntercepcionGolpeador1B.disabled = false;
        }
        if (usosAngelGuardian1B < angelGuardian1B) {
            botonAngelGuardian1B.disabled = false;
        }
    }
    if (energiaConsumida2B < energia2B) {
        botonIntercepcionGolpeador2B.disabled = false;
        if (usosInterferenciaDeAguila2B < interferenciaDeAguila2B) {
            botonIntercepcionGolpeador2B.disabled = false;
        }
        if (usosAngelGuardian2B < angelGuardian2A) {
            botonAngelGuardian2B.disabled = false;
        }
    }
}

function habilidadesDisparoCazador1A() {
    if (usosReversePass1A < reversePass1A) {
        botonReversePass1A.disabled = false;
    }
    if (usosTiroLargo1A < tiroLargo1A) {
        botonTiroLargo1A.disabled = false;
    }
    if (usosDisparoDeTorbellino1A < disparoDeTorbellino1A) {
        botonDisparoDeTorbellino1A.disabled = false;
    }
    if (usosDisparoConAmague1A < disparoConAmague1A) {
        botonDisparoConAmague1A.disabled = false;
    }
    if (usosEfectoFinbourgh1A < efectoFinbourgh1A) {
        botonEfectoFinbourgh1A.disabled = false;
    }
    if (usosKnuckleBall1A < knuckleBall1A) {
        botonKnuckleBall1A.disabled = false;
    }
    if (usosDisparoDeVolea1A < disparoDeVolea1A) {
        botonDisparoDeVolea1A.disabled = false;
    }
}

function habilidadesDisparoCazador2A() {
    if (usosReversePass2A < reversePass2A) {
        botonReversePass2A.disabled = false;
    }
    if (usosTiroLargo2A < tiroLargo2A) {
        botonTiroLargo2A.disabled = false;
    }
    if (usosDisparoDeTorbellino2A < disparoDeTorbellino2A) {
        botonDisparoDeTorbellino2A.disabled = false;
    }
    if (usosDisparoConAmague2A < disparoConAmague2A) {
        botonDisparoConAmague2A.disabled = false;
    }
    if (usosEfectoFinbourgh2A < efectoFinbourgh2A) {
        botonEfectoFinbourgh2A.disabled = false;
    }
    if (usosKnuckleBall2A < knuckleBall2A) {
        botonKnuckleBall2A.disabled = false;
    }
    if (usosDisparoDeVolea2A < disparoDeVolea2A) {
        botonDisparoDeVolea2A.disabled = false;
    }
}

function habilidadesDisparoCazador3A() {
    if (usosReversePass3A < reversePass3A) {
        botonReversePass3A.disabled = false;
    }
    if (usosTiroLargo3A < tiroLargo3A) {
        botonTiroLargo3A.disabled = false;
    }
    if (usosDisparoDeTorbellino3A < disparoDeTorbellino3A) {
        botonDisparoDeTorbellino3A.disabled = false;
    }
    if (usosDisparoConAmague3A < disparoConAmague3A) {
        botonDisparoConAmague3A.disabled = false;
    }
    if (usosEfectoFinbourgh3A < efectoFinbourgh3A) {
        botonEfectoFinbourgh3A.disabled = false;
    }
    if (usosKnuckleBall3A < knuckleBall3A) {
        botonKnuckleBall3A.disabled = false;
    }
    if (usosDisparoDeVolea3A < disparoDeVolea3A) {
        botonDisparoDeVolea3A.disabled = false;
    }
}

function habilidadesDisparoCazador1B() {
    if (usosReversePass1B < reversePass1B) {
        botonReversePass1B.disabled = false;
    }
    if (usosTiroLargo1B < tiroLargo1B) {
        botonTiroLargo1B.disabled = false;
    }
    if (usosDisparoDeTorbellino1B < disparoDeTorbellino1B) {
        botonDisparoDeTorbellino1B.disabled = false;
    }
    if (usosDisparoConAmague1B < disparoConAmague1B) {
        botonDisparoConAmague1B.disabled = false;
    }
    if (usosEfectoFinbourgh1B < efectoFinbourgh1B) {
        botonEfectoFinbourgh1B.disabled = false;
    }
    if (usosKnuckleBall1B < knuckleBall1B) {
        botonKnuckleBall1B.disabled = false;
    }
    if (usosDisparoDeVolea1B < disparoDeVolea1B) {
        botonDisparoDeVolea1B.disabled = false;
    }
}

function habilidadesDisparoCazador2B () {
    if (usosReversePass2B < reversePass2B) {
        botonReversePass2B.disabled = false;
    }
    if (usosTiroLargo2B < tiroLargo2B) {
        botonTiroLargo2B.disabled = false;
    }
    if (usosDisparoDeTorbellino2B < disparoDeTorbellino2B) {
        botonDisparoDeTorbellino2B.disabled = false;
    }
    if (usosDisparoConAmague2B < disparoConAmague2B) {
        botonDisparoConAmague2B.disabled = false;
    }
    if (usosEfectoFinbourgh2B < efectoFinbourgh2B) {
        botonEfectoFinbourgh2B.disabled = false;
    }
    if (usosKnuckleBall2B < knuckleBall2B) {
        botonKnuckleBall2B.disabled = false;
    }
    if (usosDisparoDeVolea2B < disparoDeVolea2B) {
        botonDisparoDeVolea2B.disabled = false;
    }
}

function habilidadesDisparoCazador3B () {
    if (usosReversePass3B < reversePass3B) {
        botonReversePass3B.disabled = false;
    }
    if (usosTiroLargo3B < tiroLargo3B) {
        botonTiroLargo3B.disabled = false;
    }
    if (usosDisparoDeTorbellino3B < disparoDeTorbellino3B) {
        botonDisparoDeTorbellino3B.disabled = false;
    }
    if (usosDisparoConAmague3B < disparoConAmague3B) {
        botonDisparoConAmague3B.disabled = false;
    }
    if (usosEfectoFinbourgh3B < efectoFinbourgh3B) {
        botonEfectoFinbourgh3B.disabled = false;
    }
    if (usosKnuckleBall3B < knuckleBall3B) {
        botonKnuckleBall3B.disabled = false;
    }
    if (usosDisparoDeVolea3B < disparoDeVolea3B) {
        botonDisparoDeVolea3B.disabled = false;
    }
}

function habilidadesInactivasDisparoCazador1A() {
    botonReversePass1A.disabled = true;
    botonTiroLargo1A.disabled = true;
    botonDisparoDeTorbellino1A.disabled = true;
    botonDisparoConAmague1A.disabled = true;
    botonEfectoFinbourgh1A.disabled = true;
    botonKnuckleBall1A.disabled = true;
    botonDisparoDeVolea1A.disabled = true;
}

function habilidadesInactivasDisparoCazador2A() {
    botonReversePass2A.disabled = true;
    botonTiroLargo2A.disabled = true;
    botonDisparoDeTorbellino2A.disabled = true;
    botonDisparoConAmague2A.disabled = true;
    botonEfectoFinbourgh2A.disabled = true;
    botonKnuckleBall2A.disabled = true;
    botonDisparoDeVolea2A.disabled = true;
}

function habilidadesInactivasDisparoCazador3A() {
    botonReversePass3A.disabled = true;
    botonTiroLargo3A.disabled = true;
    botonDisparoDeTorbellino3A.disabled = true;
    botonDisparoConAmague3A.disabled = true;
    botonEfectoFinbourgh3A.disabled = true;
    botonKnuckleBall3A.disabled = true;
    botonDisparoDeVolea3A.disabled = true;
}

function habilidadesInactivasDisparoCazador1B() {
    botonReversePass1B.disabled = true;
    botonTiroLargo1B.disabled = true;
    botonDisparoDeTorbellino1B.disabled = true;
    botonDisparoConAmague1B.disabled = true;
    botonEfectoFinbourgh1B.disabled = true;
    botonKnuckleBall1B.disabled = true;
    botonDisparoDeVolea1B.disabled = true;
}

function habilidadesInactivasDisparoCazador2B() {
    botonReversePass2B.disabled = true;
    botonTiroLargo2B.disabled = true;
    botonDisparoDeTorbellino2B.disabled = true;
    botonDisparoConAmague2B.disabled = true;
    botonEfectoFinbourgh2B.disabled = true;
    botonKnuckleBall2B.disabled = true;
    botonDisparoDeVolea2B.disabled = true;
}

function habilidadesInactivasDisparoCazador3B() {
    botonReversePass3B.disabled = true;
    botonTiroLargo3B.disabled = true;
    botonDisparoDeTorbellino3B.disabled = true;
    botonDisparoConAmague3B.disabled = true;
    botonEfectoFinbourgh3B.disabled = true;
    botonKnuckleBall3B.disabled = true;
    botonDisparoDeVolea3B.disabled = true;
}

function habilidadesInactivasGolpes1A() {
    botonGolpeGolpeador1A.disabled = true;
    botonGolpeDeFrancotirador1A.disabled = true;
    botonBludgerBackbeat1A.disabled = true;
    botonGolpeBombeado1A.disabled = true;
    botonGolpeCanon1A.disabled = true;
    botonPasarTurnoGolpeador1A.disabled = true;
}

function habilidadesInactivasGolpes2A() {
    botonGolpeGolpeador2A.disabled = true;
    botonGolpeDeFrancotirador2A.disabled = true;
    botonBludgerBackbeat2A.disabled = true;
    botonGolpeBombeado2A.disabled = true;
    botonGolpeCanon2A.disabled = true;
    botonPasarTurnoGolpeador2A.disabled = true;
}

function habilidadesInactivasGolpes1B() {
    botonGolpeGolpeador1B.disabled = true;
    botonGolpeDeFrancotirador1B.disabled = true;
    botonBludgerBackbeat1B.disabled = true;
    botonGolpeBombeado1B.disabled = true;
    botonGolpeCanon1B.disabled = true;
    botonPasarTurnoGolpeador1B.disabled = true;
}

function habilidadesInactivasGolpes2B() {
    botonGolpeGolpeador2B.disabled = true;
    botonGolpeDeFrancotirador2B.disabled = true;
    botonBludgerBackbeat2B.disabled = true;
    botonGolpeBombeado2B.disabled = true;
    botonGolpeCanon2B.disabled = true;
    botonPasarTurnoGolpeador2B.disabled = true;
}

function habilidadesInactivasIntercepciones1A() {
    botonIntercepcionGolpeador1A.disabled = true;
    botonInterferenciaDeAguila1A.disabled = true;
    botonAngelGuardian1A.disabled = true;
}

function habilidadesInactivasIntercepciones2A() {
    botonIntercepcionGolpeador2A.disabled = true;
    botonInterferenciaDeAguila2A.disabled = true;
    botonAngelGuardian2A.disabled = true;
}

function habilidadesInactivasIntercepciones1B() {
    botonIntercepcionGolpeador1B.disabled = true;
    botonInterferenciaDeAguila1B.disabled = true;
    botonAngelGuardian1B.disabled = true;
}

function habilidadesInactivasIntercepciones2B() {
    botonIntercepcionGolpeador2B.disabled = true;
    botonInterferenciaDeAguila2B.disabled = true;
    botonAngelGuardian2B.disabled = true;
}

function botonesInactivosPaseRecibido() {
    botonReceptorPaseCazador1A.disabled = true;
    botonReceptorPaseCazador2A.disabled = true;
    botonReceptorPaseCazador3A.disabled = true;
    botonTiroLargo1A.disabled = true;
    botonTiroLargo2A.disabled = true;
    botonTiroLargo3A.disabled = true;
    botonDisparoConAmague1A.disabled = true;
    botonDisparoConAmague2A.disabled = true;
    botonDisparoConAmague3A.disabled = true;
    botonReceptorPaseCazador1B.disabled = true;
    botonReceptorPaseCazador2B.disabled = true;
    botonReceptorPaseCazador3B.disabled = true;
    botonTiroLargo1B.disabled = true;
    botonTiroLargo2B.disabled = true;
    botonTiroLargo3B.disabled = true;
    botonDisparoConAmague1B.disabled = true;
    botonDisparoConAmague2B.disabled = true;
    botonDisparoConAmague3B.disabled = true;
}