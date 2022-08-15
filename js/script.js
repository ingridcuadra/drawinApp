// Interacción con HTML

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

// Función para calcular el tiempo restante

const tiempoRestante = document.getElementById("tiempoRestante")
const palabrasTiempo = document.getElementById("palabrasTiempo")

let tiempo = 60

const tiempo0 = setInterval(function() {
    const restarTiempo = tiempo--
    tiempoRestante.innerHTML = `<p id="tiempoRestante">Tiempo: ${tiempo} segundos</p>`

    if(restarTiempo == 0) {
        clearInterval(tiempo0)

        dibujando = false
        
        palabrasTiempo.innerHTML = `
        <div id="palabrasTiempo">
            <p id="palabrAleatorias">Se acabó el tiempo</p>
            <p id="tiempoRestante">Adivinen, ¿qué dibujó?</p>
        </div>`
    }
}, 1000)