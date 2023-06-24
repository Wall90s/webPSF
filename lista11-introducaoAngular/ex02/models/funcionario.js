const mongoose = require('mongoose')

const funcionarioSchema = mongoose.Schema({
    nome: { type: String, required: true },
    cargo: { type: String, required: true },
    funcional: { type: Number, required: true },
    admitidoEm: { type: Date, default: Date.now }
})

const Funcionario = mongoose.model('funcionario', funcionarioSchema)

module.exports = Funcionario