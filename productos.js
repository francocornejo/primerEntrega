class Carrito{
    constructor(){
        this.carrito= []
        this.id = 0
    }

    agregar(car){
        const nuevoCarrito = { ...car, id: ++this.id}
        this.carrito.push(nuevoCarrito)
        return nuevoCarrito
    }
}

class Productos {
    constructor(){
        this.productos = []
        this.id = 0
    }

    agregar(product){
        const nuevoProducto = { ...product, id: ++this.id}
        this.productos.push(nuevoProducto)
        return nuevoProducto
    }

}
module.exports = Carrito
module.exports = Productos