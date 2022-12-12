let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
    let botonAire = document.getElementById("boton-aire")
    botonAire.addEventListener("click", ataqueAire)
    let botonRayo = document.getElementById("boton-rayo")
    botonRayo.addEventListener("click", ataqueRayo)
    let botonHielo = document.getElementById("boton-hielo")
    botonHielo.addEventListener("click", ataqueHielo)


    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)

}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex"

    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo") 
    let inputRatigueya = document.getElementById("ratigueya")
    let inputLangostelvis = document.getElementById("langostelvis")
    let inputYucapalma = document.getElementById("yucapalma")
    let inputPydos = document.getElementById("pydos")

    let spanMascotaJugador = document.getElementById("mascota-jugador")
    

    if(inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge💧"
    } else if(inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo🌱"
    } else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya🔥 "
    } else if(inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = "Langostelvis🌪️"
    } else if(inputYucapalma.checked) {
        spanMascotaJugador.innerHTML = "Yucapalma⚡"
    } else if(inputPydos.checked) {
        spanMascotaJugador.innerHTML = "Pydos❄️"
    } else {
        alert("No has seleccionado a ninguna mascota 🧐")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo () {
    let mascotaAleatoria = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if(mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge💧"
    } else if (mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo🌱"
    } else if (mascotaAleatoria == 3){
        spanMascotaEnemigo.innerHTML = "Ratigueya🔥"
    } else if (mascotaAleatoria == 4){
        spanMascotaEnemigo.innerHTML = "Langostelvis🌪️"
    } else if (mascotaAleatoria == 5){
        spanMascotaEnemigo.innerHTML = "Yucapalma⚡"
    } else {
        spanMascotaEnemigo.innerHTML = "Pydos❄️"
    }
}

function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAire(){
    ataqueJugador = "AIRE"
    ataqueAleatorioEnemigo()
}

function ataqueRayo(){
    ataqueJugador = "RAYO"
    ataqueAleatorioEnemigo()
}
function ataqueHielo(){
    ataqueJugador = "HIELO"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAletario = aleatorio(1,6)

    if(ataqueAletario == 1){
        ataqueEnemigo = "FUEGO"
    } else if(ataqueAletario == 2){
        ataqueEnemigo = "AGUA"
    } else if(ataqueAletario == 3){
        ataqueEnemigo = "TIERRA"
    } else if(ataqueAletario == 4){
        ataqueEnemigo = "AIRE"
    } else if(ataqueAletario == 5){
        ataqueEnemigo = "RAYO"
    } else {
        ataqueEnemigo = "HIELO"
    }
    
    combate()
}

function combate (){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("¡EMPATE! 🎆")
    } else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
        crearMensaje("¡GANASTE! ✌️")
        vidasEnemigo-- 
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        crearMensaje("¡GANASTE! ✌️")
        vidasEnemigo-- 
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearMensaje("¡GANASTE! ✌️")
        vidasEnemigo-- 
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "AIRE" && ataqueEnemigo == "AGUA") {
        crearMensaje("¡GANASTE! ✌️")
        vidasEnemigo-- 
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "RAYO" && ataqueEnemigo == "AGUA") {
        crearMensaje("¡GANASTE! ✌️")
        vidasEnemigo-- 
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "HIELO" && ataqueEnemigo == "AGUA") {
        crearMensaje("¡GANASTE! ✌️")
        vidasEnemigo-- 
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "AIRE" && ataqueEnemigo == "TIERRA") {
        crearMensaje("¡GANASTE! ✌️")
        vidasEnemigo-- 
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("¡PERDISTE! 🧐🧐 ")
        vidasJugador-- 
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal("¡FELICITACIONES GANASTE! 😊✌️")
    } else if(vidasJugador == 0){
        crearMensajeFinal("¡GAME OVER!💀")
    } 
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById("resultado")
    let ataqueDelJugador = document.getElementById("ataques-del-jugador")
    let ataqueDelEnemigo = document.getElementById("ataqued-del-enemigo")

    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById("resultado")

    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true
    let botonAire = document.getElementById("boton-aire")
    botonAire.disabled = true
    let botonRayo = document.getElementById("boton-rayo")
    botonRayo.disabled = true
    let botonHielo = document.getElementById("boton-hielo")
    botonHielo.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)