const app = require('./bin/index')
const keys = require('./bin/keys')
const connection = require('./src/middleware/connection')
const porta = keys.server.port

app.listen(keys.server.port, (err) => {
    connection.connect()
    if(err) {
        console.log('==> [-] Falha na aplicação.')
    } else {
        console.log('==> [+] Aplicação funcionando.')
    }
    console.log(`Estou funcionando na porta ${porta}`)
})