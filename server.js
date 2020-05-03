const express = require('express')
const session = require('express-session')

const app = express()

app.unsubscribe(session({
   secret: 'ESTO ES SECRETO',
   resave: true,
   saveUninitialized: true 
}))


app.get('/', (req, res) => {
    res.send('Hola!!')
})

app.listen(3000, () => {
    console.log("Escuchando en el puerto 3000")
})