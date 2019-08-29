const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// Configurando o parser
app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ extended: false }))

// Configurando o frontend
app.set('view engine', 'ejs')
app.set('views', 'views')

// Definindo arquivos estáticos
app.use(express.static('public'))

const cliente_route = require('../src/routes/cliente')
app.use('/cliente', cliente_route)

// Chamando rotas
app.use('/', (req, res) => {
    return res.send('Bem-vindos')
})

// Exportando aplicação
module.exports = app
