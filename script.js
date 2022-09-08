"use strict";

// Elección de Atavar

const botonAvatar = document.getElementById("botonAvatar")
const avatarUser = document.getElementById("avatarUser")

fetch('./json/avatares.json')
.then(response => response.json())
.then(avatares => {
    console.log(avatares)
    avatares.forEach((avatar, indice) => {
        botonAvatar.addEventListener('click', () => {
            avatarUser.innerHTML += `
            <div id="avatarSelect${indice}">
                <div id="avatarUser">
                    <img src="./img/${avatar.img}" alt="">
                    <p class="avatarName">${avatar.nombre}</p>
                    <button id="botonSelect">Seleccionar</button>
                </div>
            </div>
            `
        })
    })
    avatares.forEach((avatar, indice) => {
        const avatarSelect = document.getElementById(`avatarSelect${indice}`)
        avatarSelect.children[0].children[2].addEventListener('click', () => {
            avatarUser.innerHTML += `
            <div id="avatarUser">
                <img src="./img/${avatar.img}" alt="">
                <p class="avatarName">Elegiste a ${avatar.nombre}</p>
            </div>
            `
        })
    })
    console.log(avatares)
})

// Elección de Nickname

const form = document.getElementById("form")
const userIngresado = document.getElementById("userIngresado")

const usuarios = []

form.addEventListener("submit", function(e) {
    e.preventDefault()
    const userNickname = document.getElementById("userNickname").value
    usuarios.push(userNickname)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    form.reset()
    userIngresado.innerHTML = `
    <div class="containerBtnJugar">
        <p>¿List@ para jugar, ${userNickname} 🧸?</p>
    </div>`
})

let nickname

(localStorage.getItem("usuarios")) ? nickname = JSON.parse(localStorage.getItem("usuarios")) : localStorage.setItem("usuarios", JSON.stringify(usuarios))


// Palabras aleatorias para dibujar

const palabrAleatorias = document.getElementById("palabrAleatorias")

const objetos = ["Goma de borrar", "Lápiz", "Lapicera", "Mouse", "Televisor", "Inodoro", "Cuchara", "Bufanda", "Arroz", "Teléfono celular"]
const objetoAleatorio = Math.floor(Math.random() * objetos.length)

const situaciones = ["gateando", "fumando", "corriendo", "rebotando en el piso", "tomando Smirnoff sabor sandía", "callando a alguien", "metiendo un gol", "friendo un huevo", "bañandose", "llorando viendo una telenovela"]
const situacionAleatoria = Math.floor(Math.random() * situaciones.length)

const animales = ["con un gato", "con un leopardo", "con un lémur", "con un mono", "con una tortuga", "con una jirafa", "con un elefante", "con un perro", "con una paloma", "con un sapo"]
const animalAleatorio = Math.floor(Math.random() * animales.length)

// Funciones principales para dibujar

const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")
const colorUser = document.getElementById("color")
const lineaUser = document.getElementById("linea")
// Obtener coordenadas del mouse para dibujar
const xReal = (clientX) => clientX - canvas.getBoundingClientRect().left
const yReal = (clientY) => clientY - canvas.getBoundingClientRect().top
let xAnterior, yAnterior, xActual, yActual
let dibujando = false

function cambiarColor(color) {
    context.strokeStyle = color.value
}

function cambiarLinea(linea) {
    context.lineWidth = linea.value
    document.getElementById("valorLinea").innerText = linea.value
}

canvas.addEventListener('mousedown', evento => {
    dibujando = true
    xAnterior = xActual
    yAnterior = yActual
    xActual = xReal(evento.clientX)
    yActual = yReal(evento.clientY)
    context.beginPath()
    context.lineCap = "round"
    context.lineJoin = "round"
    context.closePath()
})

canvas.addEventListener('mousemove', (evento) => {
    if (!dibujando) {
        return
    }

    xAnterior = xActual
    yAnterior = yActual
    xActual = xReal(evento.clientX)
    yActual = yReal(evento.clientY)
    context.beginPath()
    context.moveTo(xAnterior, yAnterior)
    context.lineTo(xActual, yActual)
    context.stroke()
    context.closePath()
})

canvas.addEventListener("mouseup", function() {
    dibujando = false
})

canvas.addEventListener("mouseout", function() {
    dibujando = false
})

// Comenzar juego

const botonJugar = document.getElementById("botonJugar")
const contBtnJugar = document.getElementById("containerBtnJugar")

botonJugar.addEventListener('click', () => {

    // Mostrar en pantalla las oraciones para dibujar

    palabrAleatorias.innerText = objetos[objetoAleatorio] + " " + situaciones[situacionAleatoria] + " " + animales[animalAleatorio]


    // Función para calcular el tiempo del juego

    const tiempoRestante = document.getElementById("tiempoRestante")
    const palabrasTiempo = document.getElementById("palabrasTiempo")

    let tiempo = 60

    const tiempo0 = setInterval(function() {
        const restarTiempo = tiempo--
        tiempoRestante.innerHTML = `<p id="tiempoRestante">Tiempo: ${tiempo} segundos</p>`

        if(restarTiempo == 0) {
        clearInterval(tiempo0)

        canvas.addEventListener('mousedown', function() {
            dibujando = false
            context.beginPath()
            context.moveTo(x, y)
            canvas.addEventListener("mousemove", dibujar)
        })
        
        palabrasTiempo.innerHTML = `
            <p id="palabrAleatorias">Se acabó el tiempo, mostrale tu dibujo a un amig@</p>
            <p id="tiempoRestante">Adiviná, ¿qué dibujó? 🤪</p>`
        }
    }, 1000)

    // Ocultar botón "Jugar"

    contBtnJugar.innerHTML = ""
})