console.log('------- WELCOME TO THE ENGINEERING OF COOK -------')

const pedido = []

const mostrarMenu = () => {
    console.log("--------------- MENU -----------------")
    return console.table(productos)
}

const pedirProducto = cod => {
    if (!cod) {
        return "Ingrese un codigo valido"
    }

    const productoEncontrado = productos.find(producto => producto.codigo === cod)
    if (!productoEncontrado){
        return "El producto no existe"
    }

    pedido.push(productoEncontrado)
    console.log("Su producto ha sido agregado a su pedido. Su pedido es: ")
    console.table(pedido)
}

const verPedido = () => {
    console.table(pedido)
}

const calcularCosto = () => {
    total = 0
    for (registro of pedido){
        total += registro.costo
    }
    console.log(`Tienes que pagar un total de ${total}`)
}