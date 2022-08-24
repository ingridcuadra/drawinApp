// Elección de Atavar

const avatarUser = document.getElementById("avatarUser")

fetch('../json/avatares.json')
.then(response => response.json())
.then(avatares => {
    avatares.forEach((avatar, indice) => {
        avatarUser.innerHTML += `
        <div id="avatarUser">
            <img src="./img/${avatar.img}" alt="">
        </div>
        `
        console.log(avatar.nombre)
    })
    
    avatares.forEach((avatar, indice) => {
        const avatarImg = document.getElementById(`avatares${indice}`)
        avatarImg.children[0].children[0].addEventListener('mouseDown', () => {
            avatarUser.innerHTML += `
            <div id="avatarUser">
                <p>Elegiste a ${avatar.nombre}</p>
            </div>
            `
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
        <a class="botonJugar" href="./sections/juego.html">Jugar</a>
    </div>`
})

let nickname

(localStorage.getItem("usuarios")) ? nickname = JSON.parse(localStorage.getItem("usuarios")) : localStorage.setItem("usuarios", JSON.stringify(usuarios))