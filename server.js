const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const mongoose = require('mongoose')

const MONGO_URL = 'mongodb://127.0.0.1:27017/auth'
const app = express()

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URL);    
// mongoose.connect.on('error', (err) => {
//     // throw err;
//     // process.exit(1);
// })

// revisar porque pasa este error

const user = require('./Models/user');
const u = new user({
    email: 'gonzalezeniood@gmail.com',
    name: 'Enio',
    password: '123456'
})

u.save()
.then(() => {
    console.log ('guardado')
})
.catch((error) => {
    console.log(error);
})

app.use(session({
   secret: 'ESTO ES SECRETO',
   resave: true,
   saveUninitialized: true,
   store: new MongoStore({
       url: MONGO_URL,
       autoReconnect: true
   })
}))


app.get('/', (req, res) => {
    req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1 : 1; 
    res.send(`Hola! Observaste esta pagina: ${req.session.cuenta}`)
})

app.listen(3000, () => {
    console.log("Escuchando en el puerto 3000")
})