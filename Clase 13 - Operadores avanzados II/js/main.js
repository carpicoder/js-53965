//? primitivos
/* 
string
number
bool
undefined
null
*/

// ? objeto
/*
objetos
arrays
funciones
*/

//! SPREAD DE ARRAYS

// let array1 = ["Carpi", "Leyla", "Eze", "Daiana"];
// let array2 = [...array1];

// console.log(array1)
// console.log(array2)
// console.log(array2 == array1)

// const numeros = [4, 77, 90, 10, -3, 10];
// console.log(Math.max(...numeros))
// console.log(Math.min(...numeros))

// let array1 = ["Carpi", "Leyla", "Eze", "Daiana"];
// let array2 = ["Pablo", "Alfredo"]
// let array3 = [...array1, ...array2, "Xavier"];

// console.log(array3);


//! SPREAD DE OBJETOS

// const usuario1 = {
//     nombre: "Carpi",
//     edad: 28
// }

// const usuario2 = {...usuario1};
// usuario2.pais = "Argentina";

// console.log(usuario1);
// console.log(usuario2);

// const usuario1 = {
//     nombre: "Carpi",
//     edad: 28
// }

// const usuario2 = {
//     pais: "Argentina",
//     pasatiempos: "Dota"
// }

// const usuario3 = {
//     ...usuario1,
//     ...usuario2,
//     trabajo: "Coderhouse"
// };

// console.log(usuario3);

// function sumar(...array) {
//     console.log(array.reduce((acc, num) => acc + num, 0))
// }

// sumar(1, 2, 3, 4, 5);
// sumar(1, 1, 1, 1);
// sumar(15, 15, 15, 15, 15, 15, 10);