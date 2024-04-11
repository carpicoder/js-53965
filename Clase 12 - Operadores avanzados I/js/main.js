// let num1 = 0;

// num1++;
// num1 = num1 + 1;

// num1--;
// num1 = num1 - 1;

// num1 += 5;
// num1 = num1 + 5;

// num1 -= 5;

// // *=
// // /=

// console.log(num1);

//? CONDICIONALES / FALSY / TRUTHY

//! FALSY
//! null, undefined, 0, "", false, NaN

// let variable = null;

// if (variable !== null) {
//     console.log("Hola, mundo!");
// } else {
//     console.log("Negativo");
// }

// let nombre;
// do {
//     nombre = prompt("Ingresá tu nombre");
// } while(!nombre);

// let edad;
// do {
//     edad = parseInt(prompt("Ingresá tu edad"));
// } while(!edad)

//! OPERADOR TERNARIO

// let temperatura = 31;
// let comoEstaElDia;

// if (temperatura > 30) {
//     comoEstaElDia = "Caluroso";
// } else {
//     comoEstaElDia = "Agradable";
// }

// temperatura > 30 ? console.log("Día caluroso") : console.log("Día agradable");
// temperatura > 30 ? comoEstaElDia = "Caluroso" : comoEstaElDia = "Agradable";

// comoEstaElDia = temperatura > 30 ? "Caluroso" : "Agradable";

// console.log(temperatura > 30 ? "Caluroso" : "Agradable");

// const usuario = {
//     nombre: "Carpi",
//     edad: 28
// }

// const permiso = usuario.edad >= 18 ? true : false;

// // permiso ? alert("Puede comprar cerveza") : alert("No puede comprar");
// alert(permiso ? "Puede comprar cerveza" : "No puede comprar");

//! OPERADOR LÓGICO AND &&

// const carrito = [];

// if (carrito.length === 0) {
//     console.log("Carrito vacío");
// }

// carrito.length === 0 && console.log("Carrito vacío");

//! OPERADOR LÓGICO OR ||
//! Chequea que NO sea FALSY


// const usuario1 = {
//     nombre: "Carpi",
//     edad: 28
// }
// const usuario2 = null;

// console.log(usuario1 || "No existe ese usuario");

// if (usuario1.edad > 18) {
//     console.log(usuario1);
// } else {
//     console.log("No existe ese usuario");
// }

// let carrito;

// let carritoEnLS = JSON.parse(localStorage.getItem("carrito"));

// if (carritoEnLS) {
//     carrito = carritoEnLS;
// } else {
//     carrito = [];
// }

// //////

// let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//! OPERADOR LÓGICO NULLISH
//! Chequea que NO sea NULL ni UNDEFINED

// console.log(undefined ?? "Hola!");

// const db = [
//     { nombre: "Silla", precio: 3000, descripcion: "lorem ipsum" },
//     { nombre: "Sillón", precio: 3000, descripcion: "lorem ipsum" },
//     { nombre: "Sillón", precio: 3000 }
// ]

// const usuario = null;
// console.log( usuario?.nombre || "El usuario no existe" );

// const usuario = {
//     nombre: "Carpi",
//     edad: 28,
//     cursos: {
//         js: "javascript",
//     },
// }

// console.log(usuario?.trabajos?.coderhouse || "No existe ese trabajo");

//! DESESTRUCTURACIÓN DE OBJETOS

// const usuario1 = {
//     nombre: "Carpi",
//     edad: 28,
// }
// const usuario2 = {
//     nombre: "Walter",
//     edad: 32,
// }

// function mostrarInfoDeCarpi(usuarioParam) {
    
//     let { edad: anios = 18, nombre: apodo } = usuarioParam;

//     console.log("Nombre", apodo);
//     console.log("Nombre", apodo);
//     console.log("Edad", anios);
// }

// mostrarInfoDeCarpi(usuario1);

// function mostrarInfoDeCarpi({ edad: edad1, nombre: nombre1 }, { edad: edad2, nombre: nombre2 }) {

//     console.log("Nombre1", nombre1);
//     console.log("Edad1", edad1);
//     console.log("Nombre2", nombre2)
//     console.log("Edad2", edad2);
// }

// mostrarInfoDeCarpi(usuario1, usuario2);


//! DESESTRUCTURACIÓN DE ARRAYS

// const nombres = ["Carpi", "Gian", "Milton", "Luis", "Yann"];

// const [a, b] = nombres;
// const [,,,pepito] = nombres;

// console.log(a);
// console.log(b);
// console.log(pepito);