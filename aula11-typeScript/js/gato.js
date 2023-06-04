"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Gato {
    constructor(nome) {
        this.nome = nome;
    }
    emitirSom() {
        return `O gato ${this.nome} miou`;
    }
}
exports.default = Gato;
