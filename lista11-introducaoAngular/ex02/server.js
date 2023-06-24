const express = require ('express')
const mongoose = require('mongoose')
const app = express()
const port = 8080
const connectionString = "mongodb+srv://wall:tZtSXIXAQrvKm3OI@appdb.rw5ogbw.mongodb.net/?retryWrites=true&w=majority"

const Produto = require('./models/produto')
const Funcionario = require('./models/funcionario')

app.use(express.json())

app.get('/listar-produtos', async (req, res) => {
    try {
        let produtos = await Produto.find()
        return res.status(200).json(produtos)
    } catch (error) {
        return res.status(500).json(error)
    }
})

app.post('/cadastrar-produto', async (req, res) => {
    const { nome, descricao, valor, emEstoque } = req.body

    let produto = {
        nome,
        descricao,
        valor,
        emEstoque
    }

    try {
        Produto.create(produto)
        return res.status(201).json({message: 'Produto cadastrado com sucesso'})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

})

app.get('/listar-funcionarios', async (req, res) => {
    try {
        let funcionarios = await Funcionario.find()
        return res.status(200).json(funcionarios)
    } catch (error) {
        return res.status(500).json(error)
    }
})

app.post('/cadastrar-funcionario', async (req, res) => {
    const { nome, cargo, funcional } = req.body

    let funcionario = {
        nome,
        cargo,
        funcional
    }

    try {
        Funcionario.create(funcionario)
        return res.status(201).json({message: 'Funcionario cadastrado com sucesso'})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

})

mongoose.connect(connectionString, {
    dbName: 'DevShop'
}).then(() => {
    console.log('Banco MongoDB conectado')
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})