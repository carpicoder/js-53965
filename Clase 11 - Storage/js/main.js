// let titulo = document.querySelector("#titulo");

//! localStorage guarda la información de forma indefinida en ese dominio en particular, en ese navegador en particular
// let nombre = localStorage.getItem("nombre");

// if (nombre === null) {
//     nombre = prompt("Ingrese su nombre");
//     localStorage.setItem("nombre", nombre);
// }
// titulo.innerText = "Bienvenido, " + nombre;

//! sessionStorage solo guarda la información en la pestaña actual, y hasta que se cierre
// sessionStorage.setItem("clave", "valor");
// sessionStorage.getItem("clave");

//? Recorrer el localStorage
// console.log(localStorage);

// for (let i = 0; i < localStorage.length; i++) {
//     let clave = localStorage.key(i);
//     let valor = localStorage.getItem(clave);
//     console.log( clave + ": " + valor );
// }

//? Eliminar elementos del localStorage

// localStorage.setItem("nombre", "Carpi");
// localStorage.setItem("edad", 28);
// localStorage.setItem("pais", "Argentina");

// let btnEliminarDato = document.querySelector("#eliminar-dato");
// btnEliminarDato.addEventListener("click", () => {
//     let datoAEliminar = prompt("¿Qué dato querés borrar?");
//     localStorage.removeItem(datoAEliminar);
// });

// let btnEliminarTodo = document.querySelector("#eliminar-todo");
// btnEliminarTodo.addEventListener("click", () => {
//     localStorage.clear();
// });

// const usuario = {
//     nombre: "Carpi",
//     edad: 28,
//     pais: "Argentina"
// }

// let usuarioJSON = JSON.stringify(usuario);
// localStorage.setItem("usuario", usuarioJSON);
// // localStorage.setItem("usuario", JSON.stringify(usuario));

// let usuarioEnLS = localStorage.getItem("usuario");
// usuarioEnLS = JSON.parse(usuarioEnLS);
// // let usuarioEnLS = JSON.parse(localStorage.getItem("usuario"));
// console.log(usuarioEnLS);

//! stringify => Convierte Object a String
//! parse => Convierte String a Object


//!? EJEMPLO CON USUARIO

// let usuarioEnLS = JSON.parse(localStorage.getItem("usuarioNuevo"));

// let nombreIngresado = usuarioEnLS?.nombre || undefined;
// let edadIngresada = usuarioEnLS?.edad || undefined;
// let usuarioIngresado;

// if (usuarioEnLS === null) {
//     nombreIngresado = prompt("Ingrese su nombre");
//     edadIngresada = parseInt(prompt("Ingrese su edad"));
    
//     usuarioIngresado = {
//         nombre: nombreIngresado,
//         edad: edadIngresada
//     }
//     localStorage.setItem("usuarioNuevo", JSON.stringify(usuarioIngresado));
// }


// let bienvenido = document.querySelector("#bienvenido");
// bienvenido.innerText = "Bienvenido, " + nombreIngresado + ", tenés " + edadIngresada + " años.";

//!? EJEMPLO DE COLOR-MODE

// const body = document.body;

// let modoColorLS = localStorage.getItem("modo-color");
// if (modoColorLS === "modo-oscuro") {
//     body.classList.add("modo-oscuro");
// }
// const btnModoColor = document.querySelector("#modo-color");

// btnModoColor.addEventListener("click", () => {
//     body.classList.toggle("modo-oscuro");

//     if (body.classList.contains("modo-oscuro")) {
//         localStorage.setItem("modo-color", "modo-oscuro");
//     } else {
//         localStorage.removeItem("modo-color");
//     }
// });