// Un cajero registra los precios de los artículos de cada cliente. Un precio de 0 cierra la cuenta de
// ese cliente y se muestra su total. Después se pregunta si hay otro cliente (S/N).
// Al final del día mostrar: cuántos clientes se atendieron, el total cobrado y cuál cliente hizo la
// compra más alta (número de cliente y monto).

// Página 12

// Ejemplo de ejecución
// Cliente 1
// [prompt] Precio (0 para cerrar la cuenta): 3500
// [prompt] Precio (0 para cerrar la cuenta): 12000
// [prompt] Precio (0 para cerrar la cuenta): 0
// Total cliente 1: 15500
// [prompt] ¿Hay otro cliente? (S/N): S
// Cliente 2
// [prompt] Precio (0 para cerrar la cuenta): 8000
// [prompt] Precio (0 para cerrar la cuenta): 0
// Total cliente 2: 8000
// [prompt] ¿Hay otro cliente? (S/N): N
// Clientes atendidos: 2
// Total cobrado: 23500
// Compra más alta: cliente 1 con 15500
// Funciones sugeridas
// • atenderCliente(numeroCliente): lee los precios hasta el 0 y retorna el total del cliente.
// • hayOtroCliente(): pregunta y retorna true o false.
// Pista: El total del cliente vuelve a 0 con cada cliente nuevo; el total del día no. Además de la
// compra más alta, ¿qué otro dato necesitas guardar para mostrar el número del cliente?
function atenderCliente(numeroCliente) {
    let precio;
    let totalCliente = 0;
    while (true) {
        precio = parseFloat(prompt("Precio (0 para cerrar la cuenta):"));
        if (precio == 0) {
            break;
        }
        totalCliente = totalCliente + precio;
    }
    console.log("Total cliente " + numeroCliente + ": " + totalCliente);
    return totalCliente;
}
function hayOtroCliente() {
    let respuesta = prompt("¿Hay otro cliente? (S/N):");

    if (respuesta == "S" || respuesta == "s") {
        return true;
    } else {
        return false;
    }
}
let numeroCliente = 0;
let clientesAtendidos = 0;
let totalDia = 0;
let mayorCompra = 0;
let clienteMayorCompra = 0;
let continuar = true;
while (continuar) {
    numeroCliente++;
    console.log("Cliente " + numeroCliente);
    let totalCliente = atenderCliente(numeroCliente);
    clientesAtendidos++;
    totalDia = totalDia + totalCliente;
    if (totalCliente > mayorCompra) {
        mayorCompra = totalCliente;
        clienteMayorCompra = numeroCliente;
    }
    continuar = hayOtroCliente();
}
console.log("Clientes atendidos: " + clientesAtendidos);
console.log("Total cobrado: " + totalDia);
console.log("Compra más alta: cliente " + clienteMayorCompra + " con " + mayorCompra);

