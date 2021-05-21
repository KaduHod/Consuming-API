const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/',async (req, res)=>{
    try {
        // response é a resposta o axios mas eu tiro o data de dentro do response
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')

        return res.json(data)
    } catch (error) {
        console.error(error)
    }
    
})

var porta = '7071'

app.listen(porta, ()=>{
    console.log(`Servidor rodando em - http://localhost:${porta}:`)
})