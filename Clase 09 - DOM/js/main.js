// console.log(document);

// console.log(document.getElementById("titulo-principal"));
// console.log(document.getElementsByClassName("parrafo-principal"));
// console.log(document.getElementsByTagName("p"));

// querySelector
// querySelectorAll
// #id .class
// :not()

let tituloPrincipal = document.querySelector("#titulo-principal");
let parrafosPrincipales = document.querySelectorAll(".parrafo-principal");

// console.log(tituloPrincipal.innerText);
// console.log(tituloPrincipal.innerHTML);
// console.log(parrafosPrincipales)
// for (let parrafo of parrafosPrincipales) {
//     console.log(parrafo.innerText);
// }

// parrafosPrincipales.forEach(parrafo => {
//     console.log(parrafo);
// })

// tituloPrincipal.innerText = "Hola, mundo!";
// tituloPrincipal.innerHTML = "<em class='rojo'>Hola</em>, mundo!";

// tituloPrincipal.className = "titulo-principal rojo";

// console.log(tituloPrincipal.classList);
// tituloPrincipal.classList.add("rojo");
// tituloPrincipal.classList.remove("azul");
// tituloPrincipal.classList.toggle("azul");

// const seccion = document.querySelector("#seccion");

// let parrafoNuevo = document.createElement("p");
// parrafoNuevo.innerText = "Hola, mundo! Este párrafo fue creado en JS.";
// parrafoNuevo.classList.add("rojo", "parrafo-principal");
// parrafoNuevo.id = "parrafo-js";

// //! prepend => lo agrega arriba de todo, como primer hijo
// //! append => lo agrega abajo de todo, como último hijo
// seccion.append(parrafoNuevo);

// tituloPrincipal.remove();

// let input = document.querySelector("#nombre");
// let select = document.querySelector("#select");
// console.log(input.value);
// console.log(select.value); 

const productos = [
    {
        titulo: "Silla",
        precio: 3000
    },
    {
        titulo: "Sillón",
        precio: 4000
    },
    {
        titulo: "Mesa",
        precio: 5000
    },
    {
        titulo: "Puerta",
        precio: 5000
    }
];

let sectionProductos = document.querySelector("#productos");

// sectionProductos.innerHTML = "<div class='producto'><h2>";
// sectionProductos.innerHTML += "<h2>" + productos[0].titulo + "</h2>";
// sectionProductos.innerHTML += "<p>" + productos[0].precio + "</p>";
// sectionProductos.innerHTML += "</div>";

productos.forEach(producto => {
    sectionProductos.innerHTML += `
        <div class="producto">
            <h2>${producto.titulo}</h2>
            <p>${producto.precio}</p>
        </div>
    `;
})