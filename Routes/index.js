const { Router } = require('express')
const router = Router()
const { getProduct, postProduct, borrarProd, modificarProd, postCarrito } = require('../public/controllers/controllerProd')

//Routers de los Productos
router.get( '/api/productos/:id?', getProduct)
router.post( 'api/productos', postProduct)
router.put('api/productos/:id', modificarProd)
router.delete('api/productos/:id', borrarProd)

//Routers del Carrito
router.post('/api/carrito', postCarrito)
router.delete('/api/carrito/:id', )
router.get('/api/carrito/:id/productos', )
router.post('/api/carrito/:id/productos', )
router.delete('/api/carrito/:id/productos/:id_prod', )


module.exports = router