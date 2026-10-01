// Qué practicas: for y una variable que se actualiza con su propio valor en cada vuelta.
// Enunciado
// Una persona invierte su dinero en un banco que paga 2% de interés mensual. La ganancia de
// cada mes se reinvierte. Leer el capital inicial y la cantidad de meses. Mostrar el saldo al final de
// cada mes y la ganancia total.
// Ejemplo de ejecución
// [prompt] Capital inicial: 1000000
// [prompt] Número de meses: 3
// Mes 1: 1020000
// Mes 2: 1040400
// Mes 3: 1061208
// Ganancia total: 61208
// Funciones sugeridas
// • calcularInteres(saldo, porcentaje): retorna el interés que genera el saldo en un
// mes.
// • mostrarInversion(capital, meses): recorre los meses e imprime el saldo de cada
// uno.
function calcularInteres(saldo, porcentaje) {
    return saldo * porcentaje / 100;
}

function mostrarInversion(capital, meses) {
    let saldo = capital;

    for (let i = 1; i <= meses; i++) {
        let interes = calcularInteres(saldo, 2);
        saldo = saldo + interes;

        console.log("Mes " + i + ": " + saldo);
    }
    return saldo;
}
function calcularGananciaTotal(capital, saldoFinal) {
    return saldoFinal - capital;
}
let capital = parseFloat(prompt("Capital inicial: "));
let meses = parseInt(prompt("Número de meses: "));
let saldoFinal = mostrarInversion(capital, meses);
let gananciaTotal = calcularGananciaTotal(capital, saldoFinal);
console.log("Ganancia total: " + gananciaTotal);


