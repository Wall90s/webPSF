import Gato from "./gato"
import Pessoa from "./pessoa"

let p1 = new Pessoa("Luis", 17)

console.log(`${p1._nome} tem ${p1._idade} anos`)

let gato = new Gato("Snowbell")
console.log(gato.emitirSom())