// Leer un número y mostrar su tabla de multiplicar del 1 al 10. Cada línea debe mostrar el
// multiplicando, el multiplicador y el producto.
// Funciones sugeridas
// • multiplicar(multiplicando, multiplicador): retorna el producto.
// • mostrarTabla(numero): recorre del 1 al 10 e imprime cada línea usando multiplicar.
let numero = parseInt(prompt("Ingrese el número para mostrar la tabla de multiplicar:"));

function multiplicar(multiplicando, multiplicador) {
    return multiplicando * multiplicador;
}

function mostrarTabla(numero) {
    for (let i = 1; i <= 10; i++) {
        let producto = multiplicar(numero, i);
        console.log(`${numero} x ${i} = ${producto}`);
    }
}
mostrarTabla(numero);
