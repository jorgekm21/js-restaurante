console.log('------- WELCOME TO THE ENGINEERING OF COOK -------')

let pedido = []

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
    return total
}

const finalizarPedido = () => {
    total = calcularCosto()
    usuario.deuda += total

    pedido = []

    console.log(`Usted debe un total de: ${usuario.deuda}`)
}

const pagarPedido = (montoEntregado) => {
    if (usuario.deuda > montoEntregado){
        devolucion = usuario.deuda - montoEntregado
        usuario.deuda = devolucion
        return console.log(`Falta un total de ${devolucion} por pagar`)
    } else {
        devolucion = montoEntregado - usuario.deuda
        usuario.deuda = 0
        return console.log(`Tu deuda fue cancelada de forma exitosa. El cliente debe recibir el siguiente cambio: ${devolucion}`)
    }
}