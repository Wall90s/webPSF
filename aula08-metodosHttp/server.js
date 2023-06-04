const express = require('express')
const app = express()
app.use(express.json())
const port = 8080

let bancoDeProdutos = []

app.get('/produtos', (req, res) => {
    return res.status(200).json(bancoDeProdutos)
})

app.post('/adicionar-produto', (req, res) => {
    let body = req.body

    console.log(body)

    bancoDeProdutos.push(body)
    return res.status(201).json('Produto adicionado com sucesso')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})