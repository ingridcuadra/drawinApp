// Elección de Atavar

const botonAvatar = document.getElementById("botonAvatar")
const avatarUser = document.getElementById("avatarUser")

async function obtenerAvatar() {
    const response = await fetch('./json/avatares.json')
    const avatares = await response.json()
    return avatares
}

fetch('./json/avatares.json')
.then(response => response.json())
.then(avatares => {
    avatares.forEach((avatar, indice) => {
        botonAvatar.addEventListener('click', async () => {
            const avatarBDD = await obtenerAvatar
            console.log(avatarBDD)
            avatarUser.innerHTML += `
            <div id="avatares${indice}">
                <div id="avatarUser">
                    <img src="./img/${avatar.img}" alt="">
                </div>
            </div>
            `
        })
    })
    
    avatares.forEach((avatar, indice) => {
        const avatarImg = document.getElementById(`avatares${indice}`)
        avatarImg.children[0].children[0].addEventListener('click', () => {
            avatarUser.innerHTML += `<p>Elegiste a ${avatar.nombre}</p>`
            console.log(avatar.nombre)
        })
    })
    
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
        <p>¿List@ para jugar, ${userNickname}?</p>
        <button id="botonJugar">Jugar</button>
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

palabrAleatorias.innerText = objetos[objetoAleatorio] + " " + situaciones[situacionAleatoria] + " " + animales[animalAleatorio]

// Funciones principales para dibujar

const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")
const colorUser = document.getElementById("color")
const lineaUser = document.getElementById("linea")

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
        <p id="palabrAleatorias">Se acabó el tiempo</p>
        <p id="tiempoRestante">Adivinen, ¿qué dibujó?</p>`
    }
}, 1000)