const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8080
const connectionString = "mongodb+srv://wall:tZtSXIXAQrvKm3OI@appdb.rw5ogbw.mongodb.net/?retryWrites=true&w=majority"

const Bebida = require('./models/bebida')
const Lanche = require('./models/lanche')

app.use(express.json())

app.get('/listar-bebidas', async(req, res) =>{
    try {
        let bebidas = await Bebida.find()
        return res.status(200).json(bebidas)
    } catch (error) {
        return res.status(500).json(error)
    }
})

app.post('/cadastrar-bebida', async (req, res) => {
    const { nome, descricao, fabricante, emEstoque} = req.body

    let bebida = {
        nome, 
        descricao, 
        fabricante, 
        emEstoque
    }

    try {
        await Bebida.create(bebida)
        return res.status(201).json({message: 'Bebida cadastrada com sucesso'})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
})

app.get('/listar-lanche', async(req, res) =>{
    try {
        let lanches = await Lanche.find()
        return res.status(200).json(lanches)
    } catch (error) {
        return res.status(500).json(error)
    }
})

app.post('/cadastrar-lanche', async (req, res) => {
    const { nome, descricao, vegano, emEstoque} = req.body

    let lanche = {
        nome, 
        descricao, 
        vegano, 
        emEstoque
    }

    try {
        await Lanche.create(lanche)
        return res.status(201).json({message: 'Lanche cadastrado com sucesso'})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
})

mongoose.connect(connectionString, {
    dbName: 'DevsBar'
}).then(() => {
    console.log('Banco MongoDB conectado')
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})