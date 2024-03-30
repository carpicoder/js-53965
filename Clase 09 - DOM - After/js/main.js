const gastosMensuales = [];

let categorias = [];

let disponible = 100000;

let categoriaIngresada;
do {
    categoriaIngresada = prompt("Ingrese categoría, para salir escriba SALIR.").toUpperCase().trim();
    if (categoriaIngresada !== "SALIR") {
        categorias.push(categoriaIngresada);
    }
} while(categoriaIngresada !== "SALIR");

let categoriaGastoAgregado;
let montoGastoAgregado;
do {

    do {
        categoriaGastoAgregado = prompt(`Ingresá la categoría del gasto que querés registrar:\n${categorias.join(", ")}\nPara terminar, escribí SALIR.`).toUpperCase().trim();
    } while (!categorias.includes(categoriaGastoAgregado) && categoriaGastoAgregado !== "SALIR");
    
    if (categoriaGastoAgregado !== "SALIR") {

        do {
            montoGastoAgregado = parseInt(prompt("Ingresá el monto que querés registrar."));
        } while (isNaN(montoGastoAgregado) || montoGastoAgregado > disponible);
        disponible -= montoGastoAgregado;
        let gastoAgregado = {
            categoria: categoriaGastoAgregado,
            monto: montoGastoAgregado
        };
        gastosMensuales.push(gastoAgregado);
        alert("Te quedan disponibles " + disponible + " pesos.")

    }

} while(categoriaGastoAgregado !== "SALIR");

const calcularTotalGastos = () => {
    // let total = 0;
    // for (let i = 0; i < gastosMensuales.length; i++) {
    //     total += gastosMensuales[i].monto;
    // }
    // console.log(total);
    let total = gastosMensuales.reduce((acc, gasto) => acc + gasto.monto, 0);
    return total;
}

const calcularPromedioGastos = () => {
    const calculoDeTotal = calcularTotalGastos();
    const promedio = calculoDeTotal / gastosMensuales.length;
    return promedio.toFixed(2);
}


console.log("Gastos mensuales: ", gastosMensuales);
console.log("Total de gastos mensuales: ", calcularTotalGastos());
console.log("Promedio de gastos mensuales: ", calcularPromedioGastos());

categorias.forEach((cat) => {
    const categoriaFiltrada = gastosMensuales.filter((gasto) => cat === gasto.categoria);
    const sumaCategoria = categoriaFiltrada.reduce((acc, gasto) => acc + gasto.monto, 0);
    console.log(cat, sumaCategoria);
})