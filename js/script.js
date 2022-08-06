const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")
const colorUser = document.getElementById("color")
const lineaUser = document.getElementById("linea")
const palabrAleatorias = document.getElementById("palabrAleatorias")

// Palabras aleatorias para dibujar

const objetos = ["Goma de borrar", "Lápiz", "Lapicera", "Mouse", "Televisor", "Inodoro", "Cuchara", "Bufanda", "Arroz", "Teléfono celular"]
const objetoAleatorio = Math.floor(Math.random() * objetos.length)

const situaciones = ["gateando", "fumando", "corriendo", "rebotando en el piso", "tomando Smirnoff sabor sandía", "callando a alguien", "metiendo un gol", "friendo un huevo", "bañandose", "llorando viendo una telenovela"]
const situacionAleatoria = Math.floor(Math.random() * situaciones.length)

const animales = ["con un gato", "con un leopardo", "con un lémur", "con un mono", "con una tortuga", "con una jirafa", "con un elefante", "con un perro", "con una paloma", "con un sapo"]
const animalAleatorio = Math.floor(Math.random() * animales.length)

palabrAleatorias.innerText = objetos[objetoAleatorio] + " " + situaciones[situacionAleatoria] + " " + animales[animalAleatorio]

// Funciones principales para dibujar

let dibujando = false

function dibujar(evento) {
    x = evento.clientX - canvas.offsetLeft
    y = evento.clientY - canvas.offsetTop

    if(dibujando == true) {
        context.lineTo(x, y)
        console.log("Posición x:" + x + " y:" + y)
        context.stroke()
        context.lineCap = "round"
        context.lineJoin = "round"

    }
}

canvas.addEventListener("mousemove", dibujar)

canvas.addEventListener("mousedown", function() {
    dibujando = true
    context.beginPath()
    context.moveTo(x, y)
    console.log("Posición Inicial x:" + x + " y:" + y)
    canvas.addEventListener("mousemove", dibujar)
})

canvas.addEventListener("mouseup", function() {
    dibujando = false
})

function cambiarColor(color) {
    context.strokeStyle = color.value
}

function cambiarLinea(linea) {
    context.lineWidth = linea.value
    document.getElementById("valorLinea").innerText = linea.value
}