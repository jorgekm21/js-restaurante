console.log('------- WELCOME TO THE ENGINEERING OF COOK -------')
const productos = [{
    codigo: "H100",
    producto: "Hamburguesa simple",
    costo: 20
},{
    codigo: "H200",
    producto: "Hamburguesa doble",
    costo: 30
},{
    codigo: "P100",
    producto: "Papas Fritas",
    costo: 8
},{
    codigo: "R100",
    producto: "Refresco personal",
    costo: 6
}]

const mostrarMenu = () => {
    console.log("--------------- MENU -----------------")
    return console.table(productos)
}