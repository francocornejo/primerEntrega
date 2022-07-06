const Carrito = require('../../productos')
const Productos = require('../../productos')
const prodNuevo = new Productos
const carritoNuevo = new Carrito

//Funciones de Productos
const getProduct = (req, res) => {
    if(req.params.id){
        const param = Number(req.params.id)
        const itemId = prodNuevo.find(item => item.id === param)
        res.json(itemId)
    }else{
        const totalProduct = prodNuevo.productos;
        res.json(totalProduct)
    }
}

const postProduct = (req, res) => {
    const { id, timestamp, nombre, description, codigo, foto, price, stock } = req.body
    prodNuevo.agregar(req.body)
    res.sendStatus(201)
}

const borrarProd = (req, res) => {
    const param = req.params.id
    const nuevoProd = prodNuevo.productos.findIndex(prod => prod.id === param)

    if(param > 0 && param <= prodNuevo.productos.length){
        prodNuevo.productos.splice(nuevoProd, 1)
        res.sendStatus(201).json(prodNuevo)  
    }else{
        res.sendStatus(400).json('Error debe ingresar un ID que contenga un producto')
    }
}

const modificarProd = (req, res) => {
    const param = Number(req.params.id);
    const itemId = prodNuevo.productos.find(item => item.id === param)

    if(isNaN(param)){
        res.status(400).json('Error, el id debe ser un numero')
    }else{
        const { timestamp, nombre, description, codigo, foto, price, stock } = req.body
        prodNuevo.productos.forEach( prod => {
            if(prod.id == param){
                prod.timestamp = timestamp
                prod.nombre = nombre
                prod.description = description
                prod.codigo = codigo
                prod.foto = foto
                prod.price = price
                prod.stock = stock
            }
        })
        res.sendStatus(201).json(producto)
    }
}

//Funciones de Carrito
const postCarrito = (req, res) => {
    const { id, timestamp, prodNuevo } = req.body
    carritoNuevo.agregar(req.body)
    res.sendStatus(201)
}

module.exports = {
    getProduct,
    postProduct,
    borrarProd,
    modificarProd,
    postCarrito
}