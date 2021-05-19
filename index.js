const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('Conectado ao servidor')
})

app.get('/', (req, res) => {
    res.send("Olá Mundo")
})

app.get('/2', (req, res) => {
    res.send("Olá Mundo 2")
})