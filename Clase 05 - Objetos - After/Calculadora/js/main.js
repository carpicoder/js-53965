let num1Elegido;
do {
    num1Elegido = parseFloat(prompt("Ingrese el primer número:"));
    if (isNaN(num1Elegido)) {
        alert("Eso no es un número, no seas gil.")
    }
} while (isNaN(num1Elegido));

let num2Elegido;
do {
    num2Elegido = parseFloat(prompt("Ingrese el segundo número:"));
    if (isNaN(num2Elegido)) {
        alert("Eso no es un número, no seas mamerto.")
    }
} while (isNaN(num2Elegido));

let operacionElegida;
function operacionValidacion() {
    return operacionElegida !== "+" && operacionElegida !== "-" && operacionElegida !== "*" && operacionElegida !== "/";
}

do {
    operacionElegida = prompt("Seleccioná una operación:\n+ para Suma.\n- para Resta.\n* para Multiplicación.\n/ para División.");
    if (operacionValidacion()) {
        alert("Eso es una operación inválida, no seas boludo.");
    }
} while (operacionValidacion());

function calcular(num1, num2, operacion) {

    switch (operacion) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Operación inválida';
    }

}


let resultado = calcular(num1Elegido, num2Elegido, operacionElegida);
alert(num1Elegido + " " + operacionElegida + " " + num2Elegido + " = " + resultado);