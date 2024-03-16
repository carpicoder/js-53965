// string "Matias"
// number 28
// boolean true/false
// object {...}


//! // OBJETO LITERAL
// const usuario1 = {
//     nombre: "Matias",
//     edad: 28,
//     altura: 165,
//     nacionalidad: "Argentino",
//     bebidaFavorita: "Coca Zero",
//     pasatiempos: {
//         pasatiempo1: "Dota",
//         pasatiempo2: "JS"
//     },
// };

// usuario1.edad++;
// let comidaFavoritaIngresada = prompt("Ingrese su comida favorita");
// usuario1.comidaFavorita = comidaFavoritaIngresada;

// console.log(usuario1);

//! // CONSTRUCTORES

// function Usuario(nombre, edad, altura, nacionalidad, bebidaFavorita) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.altura = altura;
//     this.nacionalidad = nacionalidad;
//     this.bebidaFavorita = bebidaFavorita;
//     this.saludar = function() { console.log("Hola, soy " + this.nombre) }
// }

// const usuario1 = new Usuario("Matias", 28, 165, "Argentino", "Coca Zero");
// const usuario2 = new Usuario("Gianluca", 27, 165, "Rosarino", "Agüita");

// console.log(usuario2);
// usuario2.saludar();

//? OPERADOR IN
// console.log("titulo" in usuario1);

//? OPERADOR FOR...IN
// for (const propiedad in usuario1) {
//     console.log(usuario1[propiedad]);
// }

// let nombreIngresado = prompt("Ingrese nombre");
// let edadIngresada = prompt("Ingrese edad");
// let alturaIngresado = prompt("Ingrese altura");
// let nacionalidadIngresada = prompt("Ingrese nacionalidad");
// let bebidaFavoritaIngresada = prompt("Ingrese bebida favorita");

// const usuario3 = new Usuario(nombreIngresado, edadIngresada, alturaIngresado, nacionalidadIngresada, bebidaFavoritaIngresada);
// console.log(usuario3);


// const saludo = "Hola, mundo!";
// console.log(saludo.length); // Longitud de la string
// console.log(saludo.indexOf("a")); // Ubicación del caracter en la string
// console.log(saludo.charAt(6)); // Qué caracter hay en esa posición de la string
// console.log(saludo.substring(0, 3));
// console.log(saludo.toLowerCase());
// console.log(saludo.toUpperCase());
// console.log(saludo);
// console.log(saludo.trim());


//! CLASES

// class Usuario {
//     constructor(nombre, edad, altura, nacionalidad, bebidaFavorita) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.altura = altura;
//         this.nacionalidad = nacionalidad;
//         this.bebidaFavorita = bebidaFavorita;
//     }
//     saludar() {
//         console.log("Hola, soy " + this.nombre);
//     }
//     despedirse() {
//         console.log("Chau, me voy. Mi nombre es " + this.nombre);
//     }
// }

// const usuario1 = new Usuario("Matias", 28, 165, "Argentino", "Coca Zero");
// usuario1.saludar();
// usuario1.despedirse();

let hola = prompt("hola");
console.log(hola);