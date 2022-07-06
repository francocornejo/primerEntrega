const express = require('express')
const app = express()
const puerto = 8080
const rutas = require('./Routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/public/controllers', express.static(__dirname +'public'))
app.use('/', rutas)

app.listen(puerto, (e) => {
    if(e){
        console.log(`Hubo un error ${e}`)
    }else{
        console.log(`Escuchando el puerto: ${puerto}`)
    }
})