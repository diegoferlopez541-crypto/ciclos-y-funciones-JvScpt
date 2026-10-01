

// function Leer 20 números e imprimir cuántos son positivos, cuántos negativos y cuántos son cero.
// Ejemplo de ejecución
// (probando con 5 números)
// [prompt] Número 1: 4
// [prompt] Número 2: -2
// [prompt] Número 3: 0
// [prompt] Número 4: 9
// [prompt] Número 5: -7
// Positivos: 2
// Negativos: 2
// Ceros: 1
// Funciones sugeridas
// • clasificarNumero(numero): retorna el texto "positivo", "negativo" o "cero".
// • contarNumeros(cantidad): lee los números, usa clasificarNumero y muestra los tres
// conteos. * porcentaje / 100;
//}

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

