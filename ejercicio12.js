// Qué practicas: while con centinela y validación de datos.
// Enunciado
// Leer las calificaciones de un grupo (escala de 0.0 a 5.0) sin saber cuántas son. La lectura
// termina cuando se ingresa -1.
// Si una nota está fuera del rango, mostrar "Nota inválida" y no tenerla en cuenta. Al final
// mostrar: cantidad de notas válidas, promedio, nota más baja y cuántos aprobaron (nota mayor
// o igual a 3.0).
// Ejemplo de ejecución
// [prompt] Nota (-1 para terminar): 4.5
// [prompt] Nota (-1 para terminar): 2.8
// [prompt] Nota (-1 para terminar): 7
// Nota inválida, debe estar entre 0 y 5
// [prompt] Nota (-1 para terminar): 3
// [prompt] Nota (-1 para terminar): -1
// Notas válidas: 3
// Promedio: 3.43 (en consola sale con más decimales)
// Nota más baja: 2.8
// Aprobados: 2
// Funciones sugeridas
// • esNotaValida(nota): retorna true si la nota está entre 0 y 5.
// • estaAprobado(nota): retorna true si la nota es mayor o igual a 3.
let nota;
let cantidadNotas = 0;
let sumaNotas = 0;
let notaBaja = 5;
let aprobados = 0;
function esNotaValida(nota) {
    return nota >= 0 && nota <= 5;
}
function estaAprobado(nota) {
    return nota >= 3;
}
while (true) {
    nota = parseFloat(prompt("Nota (-1 para terminar):"));
    if (nota == -1) {
        break;
    }
    if (esNotaValida(nota)) {
        cantidadNotas++;
        sumaNotas = sumaNotas + nota;
        if (nota < notaBaja) {
            notaBaja = nota;
        }
        if (estaAprobado(nota)) {
            aprobados++;
        }
    } else {
        console.log("Nota inválida, debe estar entre 0 y 5");
    }
}
if (cantidadNotas > 0) {
    let promedio = sumaNotas / cantidadNotas;
    console.log("Notas válidas: " + cantidadNotas);
    console.log("Promedio: " + promedio);
    console.log("Nota más baja: " + notaBaja);
    console.log("Aprobados: " + aprobados);
} 

