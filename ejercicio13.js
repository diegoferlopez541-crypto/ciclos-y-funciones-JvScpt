// Enunciado
// Cinco miembros de un club quieren saber cuánto subieron o bajaron de peso desde la última
// reunión. Por cada miembro se lee su peso anterior y luego se pesa en 10 básculas distintas
// para obtener un promedio.
// Si el promedio es mayor que el peso anterior, imprimir "SUBIÓ" y los kilos. Si es menor,
// imprimir "BAJÓ" y los kilos. Si es igual, imprimir "SE MANTUVO". Los kilos siempre se
// muestran en positivo, sin usar Math.abs.
// Ejemplo de ejecución
// (probando con 2 miembros y 3 básculas)
// Miembro 1
// [prompt] Peso anterior: 80
// [prompt] Báscula 1: 81
// [prompt] Báscula 2: 82
// [prompt] Báscula 3: 83
// SUBIÓ 2 kg
// Miembro 2
// [prompt] Peso anterior: 70
// [prompt] Báscula 1: 68
// [prompt] Báscula 2: 69
// [prompt] Báscula 3: 67
// BAJÓ 2 kg
// Funciones sugeridas
// • leerPromedioBasculas(cantidadBasculas): lee los pesos de las básculas y retorna el
// promedio.
// • obtenerValorAbsoluto(numero): retorna el número en positivo.
// • generarLetrero(diferencia): retorna "SUBIÓ", "BAJÓ" o "SE MANTUVO".
// Pista: El promedio de las básculas es distinto para cada miembro. ¿En qué lugar debe volver
// a 0 la suma de los pesos?
function leerPromedioBasculas(cantidadBasculas) {
    let suma = 0;
    for (let i = 1; i <= cantidadBasculas; i++) {
        let peso = parseFloat(prompt("Báscula " + i + ":"));
        suma = suma + peso;
    }
    return suma / cantidadBasculas;
}
function obtenerValorAbsoluto(numero) {
    if (numero < 0) {
        return numero * -1;
    } else {
        return numero;
    }
}
function generarLetrero(diferencia) {
    if (diferencia > 0) {
        return "SUBIÓ";
    } else if (diferencia < 0) {
        return "BAJÓ";
    } else {
        return "SE MANTUVO";
    }
}
let cantidadMiembros = 5;
let cantidadBasculas = 10;
for (let miembro = 1; miembro <= cantidadMiembros; miembro++) {
    console.log("Miembro " + miembro);
    let pesoAnterior = parseFloat(prompt("Peso anterior:"));
    let promedio = leerPromedioBasculas(cantidadBasculas);
    let diferencia = promedio - pesoAnterior;
    let letrero = generarLetrero(diferencia);
    let kilos = obtenerValorAbsoluto(diferencia);
    if (letrero == "SE MANTUVO") {
        console.log(letrero);
    } else {
        console.log(letrero + " " + kilos + " kg");
    }
}
