// Qué practicas: encontrar el mayor y el menor dentro de un ciclo.
// Enunciado
// Un centro de verificación quiere saber el promedio de puntos contaminantes de los primeros 25
// automóviles que lleguen. También quiere saber los puntos del auto que menos contaminó y del
// que más contaminó.
// Ejemplo de ejecución
// (probando con 4 autos)
// [prompt] Puntos auto 1: 120
// [prompt] Puntos auto 2: 85
// [prompt] Puntos auto 3: 200
// [prompt] Puntos auto 4: 95
// Promedio: 125
// Menor contaminación: 85
// Mayor contaminación: 200
// Funciones sugeridas
// • obtenerMenor(a, b): retorna el menor de los dos números.
// • obtenerMayor(a, b): retorna el mayor de los dos números.
// • calcularPromedio(suma, cantidad): retorna el promedio.

function obtenerMenor(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
function obtenerMayor(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
function calcularPromedio(suma, cantidad) {
    return suma / cantidad;
}
let cantidadAutos = 25;
let puntos = parseFloat(prompt("Puntos auto 1: "));
let menor = puntos;
let mayor = puntos;
let suma = puntos;
for (let i = 2; i <= cantidadAutos; i++) {
    puntos = parseFloat(prompt("Puntos auto " + i + ": "));

    menor = obtenerMenor(menor, puntos);
    mayor = obtenerMayor(mayor, puntos);

    suma = suma + puntos;
}
let promedio = calcularPromedio(suma, cantidadAutos);
console.log("Promedio: " + promedio);
console.log("Menor contaminación: " + menor);
console.log("Mayor contaminación: " + mayor);

