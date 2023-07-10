const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const port = 8080
const connectionString = "mongodb+srv://wall:tZtSXIXAQrvKm3OI@appdb.rw5ogbw.mongodb.net/?retryWrites=true&w=majority"

const Animal = require('./models/animal')

app.use(express.json())
app.use(cors())

app.get('/listar-animais', async (req, res) => {
    try {
        let animais = await Animal.find()
        return res.status(200).json(animais)
    } catch (error) {
        return res.status(500).json(error)
    }
})

app.post('/adicionar-animal', async (req, res) => {
    const { nome, raca, idade, peso } = req.body

    let animal = {
        nome,
        raca,
        idade,
        peso
    }

    try {
        Animal.create(animal)
        return res.status(201).json({message: 'Animal cadastrado com sucesso'})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

})

app.put('/editar-animal', (req, res) => {
    const { id, nome, raca, idade, peso } = req.body

    let animal = {
        id, 
        nome,
        raca,
        idade,
        peso
    }
    try {
        Animal.find(id, animal)
        return res.status(200).json({message: `Cadastro do animal ${nome} editado com sucesso`})
    } catch (error) {
        return res.status(500).json({message: error.message})   
    }
})

mongoose.connect(connectionString, {
    dbName: 'PetShop'
}).then(() => {
    console.log('Banco MongoDB conectado')
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})

