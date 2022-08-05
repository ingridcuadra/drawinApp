const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")
const colorUser = document.getElementById("color")
const lineaUser = document.getElementById("linea")
const palabrAleatorias = document.getElementById("palabrAleatorias")

// El usuario va a poder ingregar el nickname que desee
class Usuario {
    constructor(nickname) {
        this.nickname = nickname
    }
}

function ingresarNick() {
    let userNickname = prompt("Ingrese un nickname")
    alert("Su nickname es " + userNickname)
}

ingresarNick()

// Palabras aleatorias para dibujar

const objetos = ["Goma de borrar", "Lápiz", "Lapicera", "Mouse", "Televisor", "Inodoro", "Cuchara", "Bufanda", "Arroz", "Teléfono celular"]
const objetoAleatorio = Math.floor(Math.random() * objetos.length)

const situaciones = ["gateando", "fumando", "corriendo", "rebotando en el piso", "tomando Smirnoff sabor sandía", "callando a alguien", "metiendo un gol", "friendo un huevo", "bañandose", "llorando viendo una telenovela"]
const situacionAleatoria = Math.floor(Math.random() * situaciones.length)

const animales = ["con un gato", "con un leopardo", "con un lémur", "con un mono", "con una tortuga", "con una jirafa", "con un elefante", "con un perro", "con una paloma", "con un sapo"]
const animalAleatorio = Math.floor(Math.random() * animales.length)

palabrAleatorias.innerText = objetos[objetoAleatorio] + " " + situaciones[situacionAleatoria] + " " + animales[animalAleatorio]

// Funciones principales para dibujar

function encontrarPosMou (canvas, evt) {
    return {
        x: evt.clientX, 
        y: evt.clientY
    }
}

canvas.addEventListener("mousemove", function(evt) {
    const mousePos = encontrarPosMou(canvas, evt)
    console.log(mousePos.x, mousePos.y)
})