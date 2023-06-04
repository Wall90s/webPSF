import Animal from "./animal"

export default class Gato implements Animal {

    nome: string

    constructor(nome: string) {
        this.nome = nome
    }

    emitirSom(): string {
        return `O gato ${this.nome} miou`
    }
}