// console.log(Math.E);
// console.log(Math.PI);

//! Min y Max
// console.log(Math.max(15, 25, 3, 18, 48, 99));
// console.log(Math.min(15, 25, 3, 18, 48, 99));

// console.log(Math.max(15, 25, 3, 18, Infinity));
// console.log(Math.min(15, 25, 3, 18, -Infinity));

// const array = [10, 20, 30, 40, 50];
// const suma = array.reduce((acc, num) => acc + num, 0);
// const resultado = suma / array.length;
// console.log(resultado);

// const numero = 5.5;

// //! Ceil: SIEMPRE REDONDEA HACIA ARRIBA
// // Ceil = Techo / Cielorrazo
// console.log( Math.ceil(numero) );

// //! Floor: SIEMPRE REDONDEA HACIA ABAJO
// // Floor = Piso / Suelo
// console.log( Math.floor(numero) );

// //! Round: Siempre redondea hacia el entero más cercano
// // Floor = Piso / Suelo
// console.log( Math.round(5.5) );

//! Sqrt = Raíz cuadrada de un número
// console.log( Math.sqrt(15656) );

//! Sqrt = Combinar estos métodos
// console.log( Math.floor(Math.sqrt(15656)) );

//! Generar número random que no se repita con los anteriores
// let randoms = [];
// for (let i = 0; i < 10; i++) {
//     let random;
//     do {
//         random = Math.floor(Math.random() * 10  + 1);
//     } while(randoms.includes(random));
//     randoms.push(random);
//     console.log(random);
// }
// console.log(randoms);

// console.log( Math.floor(Math.random() * 11 + 20));

// const fechaActual = new Date();
// const fechaMundial = new Date(2022, 11, 18, 18, 30);
// const diferenciaFechasMundialYHoy = fechaActual - fechaMundial;
// const msPorDia = 86400000;
// console.log("Entre el mundial y hoy pasaron " + Math.floor(diferenciaFechasMundialYHoy / msPorDia) + " días.");

// const mesMundial = fechaMundial.getMonth();
// console.log(fechaMundial.getFullYear())
// console.log(fechaMundial.getDay())

// const nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
// console.log( nombresMeses[mesMundial] );

// console.log(fechaMundial.toDateString());
// console.log(fechaMundial.toLocaleString());
// console.log(fechaMundial.toLocaleDateString());
// console.log(fechaMundial.toTimeString());

// let number = 12000;
// console.log(number.toLocaleString());
// console.log(Math.PI.toFixed(3));