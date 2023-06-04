"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gato_1 = __importDefault(require("./gato"));
const pessoa_1 = __importDefault(require("./pessoa"));
let p1 = new pessoa_1.default("Luis", 17);
console.log(`${p1._nome} tem ${p1._idade} anos`);
let gato = new gato_1.default("Snowbell");
console.log(gato.emitirSom());
