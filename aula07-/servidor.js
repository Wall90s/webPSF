const express = require('express')
const app = express()
const port = 8080

let produtos = [
    {
        id: 1,
        nome: 'Bolo de Fubá com goiabada',
        descrição: 'Bolo caseiro de Fubá cremoso com pedaços de goiabada',
        valor: 25
    },
    {
        id: 2,
        nome: 'Bolo de Leite ninho com abacaxi',
        descrição: 'Bolo caseiro de Leite ninho cremoso com pedaços de abacaxi',
        valor: 25
    }
]

app.get('/produtos', (req, res) => {
    return res.send(produtos)
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})