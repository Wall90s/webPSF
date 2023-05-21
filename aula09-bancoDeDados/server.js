const express = require('express')
const app = express()
const port = 8080
const mongoose = require('mongoose')
const connection = 'mongodb+srv://wall:tZtSXIXAQrvKm3OI@appdb.rw5ogbw.mongodb.net/?retryWrites=true&w=majority'

const Produto = require('./models/produto')

app.use(express.json())

mongoose.connect(connection, {
    dbName: 'db_produtos'
}).then(() => {
    console.log('MongoDB conectado')
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`)
    })
}).catch((error) => {
    console.log(error)
})

app.get('/', async (req, res) => {
    try {
        const produtos = await Produto.find()
        return res.status(200).json({ produtos: produtos })
    } catch (error) {
        return res.status(400).json({ error: '' })
    }
})

app.post('/adicionar-produto', async (req, res) => {
    try {
        const { nome, descricao, valor } = req.body

        let produto = {
            nome,
            descricao,
            valor
        }

        console.log(produto)

        await Produto.create(produto)
        return res.status(201).json({ message: 'Produto adicionado com sucesso'})
    } catch (error) {
        console.log(error)
        return res.status(400).json({ error: 'Erro ao adicionar um produto'})
    }
})
