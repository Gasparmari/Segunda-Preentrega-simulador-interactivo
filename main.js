function productoBuzo () {

    seleccionarcantidad = prompt('el productgo seleccionado es buzo, indique la cantidad')
    while (seleccionarcantidad <= 0) {
        seleccionarcantidad = parseInt(prompt('Ingrese una cantidad valida mayor a 0: '))
    }
    carrito.push(new Producto('buzo', seleccionarcantidad, 3000));

    alert('PRODUCTO AGREGADO CORRECTAMENTE')
    total += cantidad(seleccionarcantidad, 3000)

}

function productoRemera () {

    seleccionarcantidad = prompt('el productgo seleccionado es remera, indique la cantidad')
    while (seleccionarcantidad <= 0) {
        seleccionarcantidad = parseInt(prompt('Ingrese una cantidad valida mayor a 0: '))
    }
    carrito.push(new Producto('remera', seleccionarcantidad, 2000));

    alert('PRODUCTO AGREGADO CORRECTAMENTE')
    total += cantidad(seleccionarcantidad, 2000)

}

function productoJean () {

    seleccionarcantidad = prompt('el productgo seleccionado es jean, indique la cantidad')
    while (seleccionarcantidad <= 0) {
        seleccionarcantidad = parseInt(prompt('Ingrese una cantidad valida mayor a 0: '))
    }
    carrito.push(new Producto('jean', seleccionarcantidad, 5000));

    alert('PRODUCTO AGREGADO CORRECTAMENTE')
    total += cantidad(seleccionarcantidad, 5000)

}

function productoZapatilla () {

    seleccionarcantidad = prompt('el productgo seleccionado es zapatilla, indique la cantidad')
    while (seleccionarcantidad <= 0) {
        seleccionarcantidad = parseInt(prompt('Ingrese una cantidad valida mayor a 0: '))
    }
    carrito.push(new Producto('zapatilla', seleccionarcantidad, 8000));

    alert('PRODUCTO AGREGADO CORRECTAMENTE')
    total += cantidad(seleccionarcantidad, 8000)

}


function finalizarCompra () {

    let mostrar = "Los productos agregados son: \n"

    for(const productoAgregadoAlCarrito of carrito) {

        mostrar += productoAgregadoAlCarrito.nombre + ' - CANTIDAD: ' + productoAgregadoAlCarrito.cantidad + '\n'

    
    }
    alert(mostrar)
}


const cantidad = (cant, precio) => {
    return cant * precio
}





class Producto {

    constructor(nombre, cantidad, precio) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}



let operacion = prompt('A-agrgar productos B- finalizar compra C- SI DESEA SALIR');
const carrito = []

total = 0

while(operacion !== "C") {
    
    switch(operacion){

        case "A":
            let comprar = prompt('1-buzo $3000 2-remera $2000 3-jeans 5000$ 4-zapatillas 8000$ - 0. SI DESEA SALIR');
            while(comprar !== "0"){

                switch(comprar){

                    case "1":
                        productoBuzo();
                        
                        break
                    
                    case "2":

                        productoRemera();
                        
                        break
            
                        
                    case "3":
                        
                        productoJean();
                        
                        break
                        
            
                    case "4":
            
                        productoZapatilla();
                        
                        break
                    
                    default:
            
                        alert("INGRESE ALGUNA DE LAS OPCIONES MOSTRADAS")
                        break;
                    
                }
                comprar = prompt('SI DESEA VOLVER A AGREGAR ALGUN PRODUCTO INGRESE ALGUNAS DE LAS OPCIONES ANTERIORES (0. SI DESEA SALI): 1-buzo $3000 2-remera $2000 3-jeans 5000$ 4-zapatillas 8000$');
            }
            break;
        
        case "B":
            finalizarCompra();
            alert('EL TOTAL DE LA COMPRA ES ' + total + '$')

            break
        
        default:

            alert("INGRESE ALGUNA DE LAS OPCIONES MOSTRADAS")
            break;
            
        
    }
    
    operacion = prompt('A-agrgar productos B- REMOVER PRODUCTOS C- FINALIZAR COMPRA D- SI DESEA SALIR');
}



alert('Gracias por usar nuestro sistema :)')


