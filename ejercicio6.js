// Enunciado
// Una empresa necesita calcular el salario semanal de N obreros. Leer N y luego las horas
// trabajadas de cada obrero.
// Si el obrero trabaja 40 horas o menos, se le paga $12.000 por hora. Si trabaja más de 40, se le
// pagan $12.000 por cada una de las primeras 40 horas y $15.000 por cada hora extra. Mostrar
// el salario de cada obrero y el total de la nómina.
// Ejemplo de ejecución
// [prompt] ¿Cuántos obreros?: 2
// [prompt] Horas obrero 1: 38
// Obrero 1: 456000
// [prompt] Horas obrero 2: 45
// Obrero 2: 555000
// Total nómina: 1011000

// Página 7

// Funciones sugeridas
// • calcularHorasExtra(horas): retorna cuántas horas pasan de 40 (0 si no hay).
// • calcularSalarioSemanal(horas): retorna el salario de la semana.
function calcularHorasExtra(horas) {
    if (horas > 40) {
        return horas - 40;
    } else {
        return 0;
    }
}
function calcularSalarioSemanal(horas) {
    let horasExtra = calcularHorasExtra(horas);
    let salario = 0;
    if (horas <= 40) {
        salario = horas * 12000;
    } else {
        salario = 40 * 12000 + horasExtra * 15000;
    }
    return salario;
}
let cantidadObreros = parseInt(prompt("¿Cuántos obreros?: "));
let totalNomina = 0;
for (let i = 1; i <= cantidadObreros; i++) {
    let horas = parseInt(prompt("Horas obrero " + i + ": "));
    let salario = calcularSalarioSemanal(horas);
    console.log("Obrero " + i + ": " + salario);
    totalNomina += salario;
}
console.log("Total nómina: " + totalNomina);