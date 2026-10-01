// Solo puedes usar los ciclos for y while
// • Cada ejercicio usa mínimo dos funciones. Al menos una debe recibir parámetros y
// devolver un resultado con return.
// • Las funciones que calculan no usan prompt ni console.log: reciben datos y retornan el
// resultado.
// • Lee los datos con prompt y muestra los resultados con console.log.
// • prompt siempre devuelve texto. Convierte con Number()o parseInt o parseFloat: sin
// eso, "5" + "3" da "53".
// • Nombra las funciones con un verbo en camelCase: calcularPromedio, esPrimo.
// • Las funciones sugeridas son el mínimo. Puedes crear más si lo necesitas.
// • Hacer la prueba de escritorio con los datos del ejemplo.
// • Si el enunciado pide 20 o 25 datos, prueba primero con 3 cambiando la cantidad
// temporalmente. Cuando funcione, vuelve al valor del enunciado.
// • Todos los ejercicios deben llevar prueba de escritorio, a mano, en hojas o el cuaderno,
// para la entrega tomar foto de cada uno y armar un pdf llamado pruebas de escritorio y
// subirlo junto con los ejercicios en el repositorio.
// // Enunciado
// Leer 10 números. Por cada número mostrar su cubo y su cuarta parte. Al terminar, mostrar la
// suma de todos los cubos.
// Ejemplo de ejecución
// [prompt] Número 1: 2
// Número: 2 | Cubo: 8 | Cuarta parte: 0.5
// [prompt] Número 2: 8
// Número: 8 | Cubo: 512 | Cuarta parte: 2
// ... (8 números más)
// Suma de los cubos: (según los 10 números)
// Funciones sugeridas
// • calcularCubo(numero): retorna el número elevado al cubo.
// • calcularCuartaParte(numero): retorna la cuarta parte del número.
// Primero haz que funcione con un solo número, sin ciclo. Cuando funcione, mete esa
// lógica dentro del for.

let sumaCubos = 0;
let cantidadNumeros = 10;
let 
function calcularCubo(numero) {
    return Math.pow(numero, 3);
}
let
function calcularCuartaParte(numero) {
    return numero / 4;
}

for (let i = 1; i <= cantidadNumeros; i++) {
    let numero = parseInt(prompt(`Ingrese el número ${i}:`));
    let cubo = calcularCubo(numero);
    let cuartaParte = calcularCuartaParte(numero);
    console.log(`Número: ${numero} | Cubo: ${cubo} | Cuarta parte: ${cuartaParte}`);
    sumaCubos += cubo;
}
console.log(`Suma de los cubos: ${sumaCubos}`);
sumaCubos += cubo;
console.log(`Número: ${numero} | Cubo: ${cubo} | Cuarta parte: ${cuartaParte}`);
