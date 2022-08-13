// Registro del usuario

// function ingresarNick() {
//     let userNickname = prompt("Ingrese un nickname")
//     alert("¡Bienvenid@, " + userNickname + "!")
// }

// ingresarNick()

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
        <a class="botonJugar" href="./sections/juego.html">Jugar</a>
    </div>`
})

let nickname

if(localStorage.getItem("usuarios")) {
    nickname = JSON.parse(localStorage.getItem("usuarios"))
} else {
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}