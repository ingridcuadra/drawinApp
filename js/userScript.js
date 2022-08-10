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
    console.log(userNickname)
    form.reset()
    userIngresado.innerHTML = `<p>¿List@ para jugar, ${userNickname}?</p>`
})