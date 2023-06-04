const express = require('express')
const app = express()
const port = 8080

app.use(express.json())

let bancoDeDadosProdutos = []

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})

app.get('/listar-produtos', (req, res) => {
    return res.status(200).json(bancoDeDadosProdutos)
})

app.post('/adicionar-produto', (req, res) => {
    const { nome, descricao, valor } = req.body

    let produto = {
        nome,
        descricao,
        valor
    }

    bancoDeDadosProdutos.push(produto)

    return res.status(201).json(`Produto adicionado com sucesso { nome: ${produto.nome}, descricao: ${produto.descricao}, valor: ${produto.valor} }`)
})


