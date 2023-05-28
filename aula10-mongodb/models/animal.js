const mongoose = require('mongoose')

const animalSchema = mongoose.Schema({
    nome: { type: String, required: true },
    raca: { type: String, required: true },
    idade: { type: Number, required: true },
    peso: { type: Number, required: true },
    time: { type: Date, default: Date.now }
})

const Animal = mongoose.model('animal', animalSchema)

module.exports = Animal