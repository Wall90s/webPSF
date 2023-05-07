const express = require('express')
const app = express()
const port = 8081

let bandas = [
    {
        nome: 'Pond',
        principaisMusicas: [
            'Paint Me Silver', 
            'Sweep Me Off My Feet', 
            'Holding Out For You'
        ],
        integrantes: [
            {
                nome: 'Nick Allbrook',
                idade: 35,
                paisOrigem: 'Austrália'
            },
            {
                nome: 'Jay Watson',
                idade: 32,
                paisOrigem: 'Austrália'
            },
            {
                nome: 'Shiny Joe Ryan',
                idade: 35,
                paisOrigem: 'Austrália'
            },
            {
                nome: 'Shiny Joe Ryan',
                idade: 35,
                paisOrigem: 'Irlanda'
            },
            {
                nome: 'Jamie Terry',
                idade: 36,
                paisOrigem: 'Austrália'
            },
            {
                nome: 'James Ireland',
                idade: '~30',
                paisOrigem: 'Austrália'
            }
        ]
    },
    {
        nome: 'Arca',
        principaisMusicas: [
            'El Alma Que Te Trajo',
            'Rakata',
            'KLK'
        ],
        integrantes: [
            {
                nome: 'Alejandra Ghersi Rodríguez',
                idade: 33,
                paisOrigem: 'Venezuela'
            }
        ]

    },
    {
        nome: 'Beach House',
        principaisMusicas: [
            'Space Song',
            'Silver Soul',
            'Myth'
        ],
        integrantes: [
            {
                nome: 'Victoria Legrand',
                idade: 41,
                paisOrigem: 'França'
            },
            {
                nome: 'Alex Scally',
                idade: 40,
                paisOrigem: 'Estados Unidos'
            }
        ]

    }
]

app.listen(port, () => {
    console.log(`Servidor de bandas funcionando em http://localhost:${port}`)
})

app.get('/bandas', (req, res) => {
    return res.send(bandas)
})