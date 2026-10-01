
// Ejercicio 10. Conversión de dólares a pesos
// Qué practicas: while con valor centinela.
// Enunciado
// Un listado de personas recibe una cantidad de dólares. Por cada persona mostrar el
// equivalente en pesos, sabiendo que el dólar cuesta $3.550. El listado termina cuando se
// ingresa 0.
// Al final, mostrar cuántas personas se atendieron y el total en pesos. El 0 no cuenta como
// persona.
// Ejemplo de ejecución
// [prompt] Dólares (0 para terminar): 100
// Equivale a: 355000 pesos
// [prompt] Dólares (0 para terminar): 50
// Equivale a: 177500 pesos
// [prompt] Dólares (0 para terminar): 0
// Personas atendidas: 2
// Total en pesos: 532500

function convertirAPesos(dolares) {
    return dolares * 3550;
}

function mostrarResultado(dolares, pesos) {
    console.log("Equivale a: " + pesos + " pesos");
}

let dolares = parseFloat(prompt("Dólares (0 para terminar): "));

let personasAtendidas = 0;
let totalPesos = 0;

while (dolares != 0) {
    let pesos = convertirAPesos(dolares);

    mostrarResultado(dolares, pesos);

    personasAtendidas++;
    totalPesos = totalPesos + pesos;

    dolares = parseFloat(prompt("Dólares (0 para terminar): "));
}

console.log("Personas atendidas: " + personasAtendidas);
console.log("Total en pesos: " + totalPesos);
