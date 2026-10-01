// Qué practicas: while con dos condiciones de salida y números aleatorios.
// Enunciado
// El programa genera un número secreto entre 1 y 100. El usuario tiene máximo 7 intentos para
// adivinarlo. Después de cada intento, el programa dice si el número secreto es mayor o menor.
// El juego termina cuando el usuario adivina o se le acaban los intentos. Si adivina, mostrar en
// cuántos intentos lo logró. Si pierde, mostrar cuál era el número.
// Para generar el número usa: Math.floor(Math.random() * 100) + 1.
// Ejemplo de ejecución
// (número secreto: 42)
// [prompt] Intento 1: 50
// El número secreto es menor
// [prompt] Intento 2: 25
// El número secreto es mayor
// [prompt] Intento 3: 42
// ¡Adivinaste en 3 intentos!

// Página 10

// Funciones sugeridas
// • generarNumeroSecreto(minimo, maximo): retorna un número aleatorio entre minimo y
// maximo.
// • evaluarIntento(intento, secreto): retorna "mayor", "menor" o "correcto".

function generarNumeroSecreto(minimo, maximo) {
    return Math.floor(Math.random() * maximo) + minimo;
}

function evaluarIntento(intento, secreto) {
    if (intento > secreto) {
        return "mayor";
    } else if (intento < secreto) {
        return "menor";
    } else {
        return "correcto";
    }
}

let secreto = generarNumeroSecreto(1, 100);

let intentos = 0;
let resultado = "";

while (intentos < 7 && resultado != "correcto") {
    intentos++;

    let intento = parseInt(prompt("Intento " + intentos + ": "));

    resultado = evaluarIntento(intento, secreto);

    if (resultado == "mayor") {
        console.log("El número secreto es menor");
    } else if (resultado == "menor") {
        console.log("El número secreto es mayor");
    } else {
        console.log("¡Adivinaste en " + intentos + " intentos!");
    }
}

if (resultado != "correcto") {
    console.log("Se acabaron los intentos. El número secreto era: " + secreto);
}

