const express = require('express')
const cowsay = require('cowsay')

const calculator = require('./utils/calculator')
const morgan = require('./utils/morgan')
const error404 = require('./middlewares/error404')

// Módulos de Rutas
const entriesApiRoutes = require('./routes/entriesApiRoutes')
const authorsApiRoutes = require('./routes/authorsApiRoutes')

const app = express()
const port = 3000

// Middlewares
app.use(express.json()); // Habilitar tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));
// Logger
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));
//Public folder
app.use(express.static('public'))

app.get('/', (req, res) => {
    const calc = calculator.add(2, 2);
    //res.send(`Hello World! La suma es ${suma}`)
    res.render('content', { msj: "The Bridge", calc })
})

//Rutas 
app.use('/api/entries',entriesApiRoutes);
app.use('/api/authors',authorsApiRoutes);
app.use(error404); // Middleware Para ruta no encontrada (404)

app.listen(port, () => {
    console.log(
        cowsay.say({
            text: `El servidor esta operativo :D Example app listening on port http://localhost:${port}`,
            e: "oO",
            T: "U "
        }))
})