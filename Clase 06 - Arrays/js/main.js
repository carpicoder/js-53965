// { curly brackets }
// [ square brackets ]

// const productos = ["Sillón", "Silla", "Mesa", "Ventana", "Puerta", "Escritorio", "Lámpara"]; // Strings
// const numeros = [1, 2, 5, 10, 24]; // Numbers
// const booleanos = [true, false, false, false, true, true]; // Booleans
// const mezcla = ["Sillón", 2, 3, false, "Carpi"]; // Mezcla de datos
// const usuarios = [
//     {
//         nombre: "Carpi",
//         edad: 28
//     },
//     {
//         nombre: "Gian",
//         edad: 27
//     },
//     {
//         nombre: "Matias",
//         apellido: "Coletta"
//     }
// ]; // Objetos


//! .length => Nos devuelve la cantidad de elementos que hay en un Array.
// for (let i = 0; i < productos.length; i++) {
//     console.log(productos[i]);
// }


//! .push() => Agrega un elemento al final del Array.
// productos.push("Escritorio");

//! .unshift() => Agrega un elemento al comienzo del Array.
// productos.unshift("Escritorio");

//! .pop() => Elimina el último elemento del Array.
// productos.pop();

//! .shift() => Elimina el primer elemento del Array.
// productos.shift();

//! .splice() => Elimina uno o varios elementos en la posición que le digamos.
// Primer parámetro => índice del primer elemento a eliminar
// Segundo parámetro => cantidad de elementos que queremos eliminar
// productos.splice(1, 1);

//! .join() => Genera una string con todos los elementos del Array
// Podemos pasarle el separador por parámetros
// let productosString = productos.join(" > ");
// console.log(productosString);

//! .concat() => Combinar dos Arrays en uno nuevo.
// const comedor = ["Sillón", "Silla", "Mesa"];
// const aberturas = ["Ventana", "Puerta", "Portón"];
// const muebles = comedor.concat(aberturas);
// console.log(muebles);


//! .slice() => Gererar un nuevo Array con una parte del Array original.
// Primer parámetro => índice del primer elemento a copiar
// Segundo parámetro => índice del último elemento a copiar (el último no se incluye);
// const comedor = productos.slice(1, 3);
// console.log(comedor);

//! .indexOf() => Devuelve el índice un elemento en particular de nuestro Array.
// console.log(productos.indexOf("Mesa"));

//! .includes() => Saber si un elemento existe o no en el Array;
// console.log(productos.includes("Puerta"));

//? Combinación de includes + indexOf + splice + condicional + prompt
// let productoBusqueda = prompt("Ingrese el producto que quiere eliminar");
// if (productos.includes(productoBusqueda)) {
//     let index = productos.indexOf(productoBusqueda);
//     productos.splice(index, 1);
//     console.log(productos);
// } else {
//     console.log("No hay " + productoBusqueda);
// }

// //! .reverse() => Invertir el orden de los elementos del Array
// productos.reverse();
// console.log(productos);




// const usuarios = [
//     {
//         nombre: "Carpi",
//         edad: 28
//     },
//     {
//         nombre: "Gian",
//         edad: 27
//     },
//     {
//         nombre: "Matias",
//         edad: 30
//     }
// ];

// for (let usuario of usuarios) {
//     if (usuario.edad === 28) {
//         console.log(usuario);
//     }
// }

const productos = ["Sillón", "Silla", "Mesa", "Ventana", "Puerta", "Escritorio", "Lámpara"];

for (let producto of productos) {
    console.log(producto);
}

for (let i = 0; i < productos.length; i++) {
    console.log(productos[i]);
}