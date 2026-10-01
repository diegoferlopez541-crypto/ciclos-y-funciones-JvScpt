// Enunciado
// Un centro de verificación quiere saber el promedio de puntos contaminantes de los primeros 25
// automóviles que lleguen. También quiere saber los puntos del auto que menos contaminó y del
// que más contaminó.
// Página 8
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
// Ejercicio 9. Promedio de edades por género

function esHombre(genero) {
    if (genero == "H") {
        return true;
    } else {
        return false;
    }
}
function calcularPromedio(suma, cantidad) {
    return suma / cantidad;
}
let cantidadPersonas = parseInt(prompt("¿Cuántas personas?: "));
let hombres = 0;
let mujeres = 0;
let sumaEdadHombres = 0;
let sumaEdadMujeres = 0;
let sumaEdadGrupo = 0;
for (let i = 1; i <= cantidadPersonas; i++) {
    let genero = prompt("Género persona " + i + " (H/M): ");
    let edad = parseInt(prompt("Edad persona " + i + ": "));
    sumaEdadGrupo = sumaEdadGrupo + edad;
    if (esHombre(genero)) {
        hombres++;
        sumaEdadHombres = sumaEdadHombres + edad;
    } else {
        mujeres++;
        sumaEdadMujeres = sumaEdadMujeres + edad;
    }
}
console.log("Hombres: " + hombres);
if (hombres > 0) {
    let promedioHombres = calcularPromedio(sumaEdadHombres, hombres);
    console.log("Promedio de edad: " + promedioHombres);
} else {
    console.log("No hay hombres para calcular el promedio.");
}
console.log("Mujeres: " + mujeres);
if (mujeres > 0) {
    let promedioMujeres = calcularPromedio(sumaEdadMujeres, mujeres);
    console.log("Promedio de edad: " + promedioMujeres);
} else {
    console.log("No hay mujeres para calcular el promedio.");
}
let promedioGrupo = calcularPromedio(sumaEdadGrupo, cantidadPersonas);

console.log("Promedio del grupo: " + promedioGrupo);

