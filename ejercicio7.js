// Qué practicas: funciones que retornan booleanos, contador y acumulador.
// Enunciado
// Al cerrar un expendio de naranjas, 15 clientes que no han pagado reciben un 15% de
// descuento si compraron más de 10 kilos. Leer primero el precio por kilo y luego los kilos de
// cada cliente.
// Mostrar cuánto paga cada cliente, el total que recibe la tienda y cuántos clientes obtuvieron
// descuento.
// Ejemplo de ejecución
// (probando con 3 clientes)
// [prompt] Precio por kilo: 4000
// [prompt] Kilos cliente 1: 5
// Cliente 1 paga: 20000
// [prompt] Kilos cliente 2: 12
// Cliente 2 paga: 40800 (con descuento)
// [prompt] Kilos cliente 3: 10
// Cliente 3 paga: 40000
// Total recaudado: 100800
// Clientes con descuento: 1
// Funciones sugeridas
// • tieneDescuento(kilos): retorna true o false.
// • calcularTotalCliente(kilos, precioKilo): retorna lo que paga el cliente, con o sin
// descuento.

function tieneDescuento(kilos) {
    if (kilos > 10) {
        return true;
    } else {
        return false;
    }
}
function calcularTotalCliente(kilos, precioKilo) {
    let total = kilos * precioKilo;
    if (tieneDescuento(kilos)) {
        total = total * 0.85;
    }
   return total;
}
let precioKilo = parseFloat(prompt("Precio por kilo: "));
let cantidadClientes = 15;
let totalRecaudado = 0;
let clientesDescuento = 0;
for (let i = 1; i <= cantidadClientes; i++) {
    let kilos = parseFloat(prompt("Kilos cliente " + i + ": "));
    let totalCliente = calcularTotalCliente(kilos, precioKilo);
    console.log("Cliente " + i + " paga: " + totalCliente);
    if (tieneDescuento(kilos)) {
        console.log("(con descuento)");
        clientesDescuento++;
    }
    totalRecaudado = totalRecaudado + totalCliente;
}
console.log("Total recaudado: " + totalRecaudado);
console.log("Clientes con descuento: " + clientesDescuento);

