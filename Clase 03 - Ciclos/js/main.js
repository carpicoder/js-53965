// FOR
// for (let x = 1; x <= 10; x++) {
//     if (x === 5) {
//         continue;
//     }
//     console.log(x);
// }

// let ingresarNumero = parseInt(prompt("Ingresar número"));
// for (let i = 1; i <= 10; i++) {
//     let resultado = ingresarNumero * i;
//     console.log(ingresarNumero + " x " + i + " = " + resultado);
// }

// WHILE
// let x = 10; // Inicializador
// while (x > 0) { // Condición
//     console.log("Hola " + x);
//     x = x - 1; // Incrementador
// }

// let nombre = "";
// while(nombre === "") {
//     nombre = prompt("Ingrese su nombre");
//     if (nombre === "") {
//         alert("Un texto vacío no es válido.");
//     }
// }
// console.log(nombre);

// DO...WHILE
// let y = 6;
// do {
//     console.log("Ciclo DO...WHILE n° " + y);
//     y = y + 1;
// } while (y <= 5);

// let nombre;
// do {
//     nombre = prompt("Ingrese su nombre");
// } while (nombre === "" || Number(nombre));
// console.log(nombre);

// isNaN() => Saber si un valor es un número o no
// NaN = Not A Number

// let numero = 1;

// numero = numero + 1;
// numero++;

// numero = numero - 1;
// numero--;

// numero = numero + 5;
// numero += 5;
// numero -= 5;
// numero *= 5;
// numero /= 5;

// console.log(numero);
let diaDeLaSemana = parseInt(prompt("Ingrese el día de la semana en números"));

switch (diaDeLaSemana) {
    case 1:
        alert("Hoy es Lunes");
        break;
    case 2:
        alert("Hoy es Martes");
        break;
    case 3:
        alert("Hoy es Miércoles");
        break;
    case 4:
        alert("Hoy es Jueves");
        break;
    case 5:
        alert("Hoy es Viernes");
        break;
    case 6:
        alert("Hoy es Sábado");
        break;
    case 7:
        alert("Hoy es Domingo");
        break;
    default:
        alert("Ese día no es válido");
        break;
}