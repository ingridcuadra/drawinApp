// El usuario va a poder ingregar el nickname que desee
class Usuario {
    constructor(nickname) {
        this.nickname = nickname
    }
}

do{
    nicknameUser = prompt("Ingrese un nickname").toLowerCase
}while(nicknameUser == "")

// Palabras aleatorias para dibujar

const objetos = ["Goma de borrar", "Lápiz", "Lapicera", "Mouse", "Televisor", "Inodoro", "Cuchara", "Bufanda", "Arroz", "Teléfono celular"]
const objetoAleatorio = Math.floor(Math.random() * objetos.length)

console.log(objetos[objetoAleatorio])

const situaciones = ["gateando", "fumando", "corriendo", "rebotando en el piso", "tomando Smirnoff sabor sandía", "callando a alguien", "metiendo un gol", "friendo un huevo", "bañandose", "llorando viendo una telenovela"]
const situacionAleatoria = Math.floor(Math.random() * situaciones.length)

console.log(situaciones[situacionAleatoria])

const animales = ["con un gato", "con un leopardo", "con un lémur", "con un mono", "con una tortuga", "con una jirafa", "con un elefante", "con un perro", "con una paloma", "con un sapo"]
const animalAleatorio = Math.floor(Math.random() * animales.length)

console.log(animales[animalAleatorio])