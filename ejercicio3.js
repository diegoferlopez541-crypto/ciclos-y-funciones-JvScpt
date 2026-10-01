// Enunciado
// Leer cuántos días se van a registrar. Luego leer la temperatura en grados centígrados de cada
// día y mostrar su equivalente en Kelvin y en Fahrenheit. Al final, mostrar la temperatura
// promedio en °C.
// Fórmulas: K = C + 273.15 y F = C * 9 / 5 + 32.
// Ejemplo de ejecución
// [prompt] ¿Cuántos días?: 2
// [prompt] Temperatura día 1 (°C): 25
// Día 1: 25 °C = 298.15 K = 77 °F
// [prompt] Temperatura día 2 (°C): 15
// Día 2: 15 °C = 288.15 K = 59 °F
// Promedio: 20 °C
// Funciones sugeridas
// • convertirAKelvin(celsius): retorna la temperatura en Kelvin.
// • convertirAFahrenheit(celsius): retorna la temperatura en Fahrenheit.
// • calcularPromedio(suma, cantidad): retorna el promedio.

// Enunciado
// Leer cuántos días se van a registrar. Luego leer la temperatura en grados centígrados de cada
// día y mostrar su equivalente en Kelvin y en Fahrenheit. Al final, mostrar la temperatura
// promedio en °C.
// Fórmulas: K = C + 273.15 y F = C * 9 / 5 + 32.

function convertirAKelvin(celsius) {
    return celsius + 273.15;
}
function convertirAFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}
function calcularPromedio(suma, cantidad) {
    return suma / cantidad;
}
let cantidadDias = parseInt(prompt("¿Cuántos días se iran a registrar?"));
let suma = 0;

for (let i = 1; i <= cantidadDias; i++) {
    let celsius = parseFloat(prompt("Temperatura día " + i + " (°C): "));

    let kelvin = convertirAKelvin(celsius);
    let fahrenheit = convertirAFahrenheit(celsius);

    console.log("Día " + i + ": " + celsius + " °C = " + kelvin + " K = " + fahrenheit + " °F");

    suma = suma + celsius;
}

let promedio = calcularPromedio(suma, cantidadDias);

console.log("Promedio: " + promedio + " °C");
