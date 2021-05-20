const cors = require('cors')
const express = require('express') //chamo o express
const app = express()

app.use(cors())

app.get('/', (req, res)=>{
    return res.json([
        {usuario: 'Carlos Programador'},
        {usuario: 'Fulano beltrano'}
    ])
})

app.listen('7071')