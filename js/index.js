// Ingreso datos cliente

let edadComprador;
let edadIngresada;

// Tiene que ser mayor de edad para realizar la operacion

do{
    edadComprador = parseInt(prompt("Por favor, ingrese su edad"));
    edadIngresada = edadComprador;
    if(isNaN(edadIngresada)){
        alert("Por favor ingrese un valor numerico")
    }
    else if(edadIngresada <18){
        alert("La edad ingresada es: " + edadIngresada + ", no puede efectuar la compra");
    }
}
while(edadIngresada <18 || isNaN(edadIngresada));

// Si cumple con la edad, pasa a la carga de datos personales

let nombreCompleto = prompt("Por favor, ingrese su nombre y apellido");

let emailComprador = prompt("Por favor, ingrese su e-mail");

let ingreseLocalidad = prompt("Por favor, ingrese su localidad de residencia");

// Creacion de la tienda y los productos

class TiendaRopa{
    constructor(){
        this.productos = [];
        this.clientes = [];
    }
    agregarProductos(producto){
        this.productos.push(producto);
    }
    agregarClientes(cliente){
        this.clientes.push(cliente);
    }
    agregarIva(){
        this.productos.forEach(producto => {
            return producto.precio *= 1.21;
        });
    }
    ventaEfectuada(nombreProducto, cantidad){
        // Se busca el producto por nombre y por cantidad de stock
        const producto = this.productos.find((producto => producto.nombre === nombreProducto)); 
        if(producto && producto.cantidad >= cantidad){
        // Se imprime en la consola el stock antes de la venta
        console.log(`El stock del producto ${nombreProducto} antes de la venta era de: ${producto.cantidad}`);
        // Se disminuye el stock al efectuarse la venta
        producto.cantidad -= cantidad;
        // Se imprime en la consola el stock luego de la venta
        console.log(`El stock del producto ${nombreProducto} despues de la venta es de: ${producto.cantidad}`);
        // Se confirma la venta, levantando el importe desde la venta Cconfirmada
        const venta = this.ventaConfirmada(producto.precio, cantidad);
        this.ConfirmacionCompraCliente(nombreCompleto, nombreProducto, cantidad, venta);
        return venta;
        }
        // En caso de ingresar mal el nombre del producto o no haber stock, saldra un alerta
        else{
            alert(`Venta no realizada. Producto no encontrado, verifique el nombre o la cantidad`);
        }
    }
    ventaConfirmada(precio, cantidad){
        return precio * cantidad;
    }
    ConfirmacionCompraCliente(nombreCompleto, nombreProducto, cantidad, venta){
        alert(`${nombreCompleto} confirmamos que vas a comprar ${cantidad} unidadad(des) de ${nombreProducto} por un total de $${venta}`)
    }
    mostrarClientes(){
        console.log("Lista de clientes");
        this.clientes.forEach(cliente => {
            console.log(`Nombre: ${cliente.nombre}, Email: ${cliente.email}, Localidad: ${cliente.localidad}`);
        });
    }
}

// Se define una instancia de tienda de ropa y se agregan los productos

const tienda = new TiendaRopa ();

tienda.agregarProductos({nombre: "buzo con capucha", precio: 50000, cantidad: 50});
tienda.agregarProductos({nombre: "buzo hoodie", precio: 70000, cantidad: 30});
tienda.agregarProductos({nombre: "buzo canguro", precio: 35000, cantidad: 45});
tienda.agregarProductos({nombre: "campera de jean", precio: 65000, cantidad: 75});
tienda.agregarProductos({nombre: "jogger", precio: 45000, cantidad: 35});

// Agregamos iva al precio de los productos

tienda.agregarIva();

// Pedimos al cliente que ingrese los datos de la compra

let ingreseProducto = prompt("Ingrese el producto que desea adquirir");


let ingreseCantidad = parseInt(prompt("Ingrese la cantidad a adquirir"));

// Realizacion de la venta

let venta = tienda.ventaEfectuada(ingreseProducto, ingreseCantidad);

// Damos de alta al cliente

tienda.agregarClientes({nombre: nombreCompleto, email: emailComprador, localidad: ingreseLocalidad});

// Mostrar los clientes agregados

tienda.mostrarClientes();

// Opcion de seguir comprando

let seguirComprando = confirm("¿Desea seguir comprando?");
if(seguirComprando){
    let ingreseProducto2 = prompt("Ingrese el producto que desea adquirir");
    let ingreseCantidad2 = parseInt(prompt("Ingrese la cantidad a adquirir"));
    tienda.ventaEfectuada(ingreseProducto2, ingreseCantidad2);
}
else{
    alert("Gracias por su compra, será re dirijido a la sección de pagos");
    };

// Creo el Formulario de datos del cliente

// Declaracion de las constantes

const h1 = document.createElement("h1");
const clienteForm = document.createElement("form");
const labelNombre = document.createElement("label");
const inputNombre = document.createElement("input");
const labelEmail = document.createElement("label");
const inputEmail = document.createElement("input");
const labelLocalidad = document.createElement("label");
const inputLocalidad = document.createElement("input");
const labelProducto = document.createElement("label");
const inputProducto = document.createElement("input");
const labelCantidad = document.createElement("label");
const inputCantidad = document.createElement("input");
const valorCompra = document.createElement("div");

// Incorporacion de las constantes en su elemento padre

body.appendChild(h1);
body.appendChild(clienteForm);
clienteForm.appendChild(labelNombre);
clienteForm.appendChild(inputNombre);
clienteForm.appendChild(labelEmail);
clienteForm.appendChild(inputEmail);
clienteForm.appendChild(labelLocalidad);
clienteForm.appendChild(inputLocalidad);
clienteForm.appendChild(labelProducto);
clienteForm.appendChild(inputProducto);
clienteForm.appendChild(labelCantidad);
clienteForm.appendChild(inputCantidad);
clienteForm.appendChild(valorCompra);

// Asignacion de texto a las etiquetas

h1.textContent = "Datos del cliente";
labelNombre.textContent = "Nombre Completo";
labelEmail.textContent = "Email";
labelLocalidad.textContent = "Localidad";
labelProducto.textContent = "Producto";
labelCantidad.textContent = "Cantidad";

// Asignacion ID y type

clienteForm.id = "formulario";
labelNombre.for = "nombre";
labelEmail.for = "email";
labelLocalidad.for = "localidad";
labelProducto.for = "producto";
labelCantidad.for = "cantidad";
inputNombre.id = "nombre";
inputNombre.type = "text";
inputEmail.id = "email";
inputEmail.type = "text";
inputLocalidad.id = "localidad";
inputLocalidad.type = "text";
inputProducto.id = "producto";
inputProducto.type = "text";
inputCantidad.id = "cantidad";
inputCantidad.type = "number";
valorCompra.id = "valorCompra";

// Se actualizan los campos del formulario con los datos ingresados por el cliente

document.getElementById("nombre").value = nombreCompleto;
document.getElementById("email").value = emailComprador;
document.getElementById("localidad").value = ingreseLocalidad;
document.getElementById("producto").value = ingreseProducto;
document.getElementById("cantidad").value = ingreseCantidad;
document.getElementById("valorCompra").textContent = `Valor de la compra: $${venta}`;

// Estilos

// Titulos

h1.style.textAlign = "center";
h1.style.fontFamily = "Roboto";
h1.style.fontSize = "medium";
h1.style.color = "#246f9d";
h1.style.padding = "20px";
h1.style.marginBottom = "40px";

// Formulario Clientes

clienteForm.style.display = "flex";
clienteForm.style.justifyContent = "space-around";
clienteForm.style.alignContent = "center";
labelNombre.style.fontFamily = "Roboto";
labelNombre.style.fontSize = "medium";
labelNombre.style.color = "#246f9d";
labelEmail.style.fontFamily = "Roboto";
labelEmail.style.fontSize = "medium";
labelEmail.style.color = "#246f9d";
labelLocalidad.style.fontFamily = "Roboto";
labelLocalidad.style.fontSize = "medium";
labelLocalidad.style.color = "#246f9d";
inputNombre.style.borderBlockColor = "#246f9d";
inputNombre.style.borderRadius = "1rem";
inputEmail.style.borderBlockColor = "#246f9d";
inputEmail.style.borderRadius = "1rem";
inputLocalidad.style.borderBlockColor = "#246f9d";
inputLocalidad.style.borderRadius = "1rem";
labelProducto.style.fontFamily = "Roboto";
labelProducto.style.fontSize = "medium";
labelProducto.style.color = "#246f9d";
inputProducto.style.borderBlockColor = "#246f9d";
inputProducto.style.borderRadius = "1rem";
labelCantidad.style.fontFamily = "Roboto";
labelCantidad.style.fontSize = "medium";
labelCantidad.style.color = "#246f9d";
inputCantidad.style.borderBlockColor = "#246f9d";
inputCantidad.style.borderRadius = "1rem";
valorCompra.style.fontFamily = "Roboto";
valorCompra.style.fontSize = "medium";
valorCompra.style.color = "#246f9d";









