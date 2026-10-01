// Enunciado
// Leer un número N. Mostrar todos los números primos entre 2 y N, y al final cuántos hay.
// Un número es primo si solo es divisible entre 1 y entre sí mismo. Para saber si n es divisible
// entre d usa n % d === 0.
// Ejemplo de ejecución
// [prompt] Límite: 20
// 2
// 3
// 5
// 7
// 11
// 13
// 17
// 19
// Cantidad de primos: 8
// Funciones sugeridas
// • contarDivisores(numero): retorna cuántos divisores tiene el número.
// • esPrimo(numero): retorna true si el número es primo.
// Pista: Un número primo tiene exactamente 2 divisores. Haz la prueba de escritorio de
// esPrimo(6) y de esPrimo(7) por separado antes de armar el ciclo principal.

function contarDivisores(numero) {
let cantidad = 0;  
 for (let divisor = 1; divisor <= numero; divisor++) {
if (numero % divisor === 0) {
cantidad++;
    }
    }
return cantidad;
}
function esPrimo(numero) {
let divisores = contarDivisores(numero);
if (divisores === 2) {
 return true;
} else {
return false;
}
}
let limite = parseInt(prompt("Límite:"), 10);
let cantidadPrimos = 0;
for (let numero = 2; numero <= limite; numero++) {
if (esPrimo(numero)) {
console.log(numero);
cantidadPrimos++;
}
}
console.log("Cantidad de primos: " + cantidadPrimos);

