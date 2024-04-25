
//! Obtener datos con Fetch

// const API_URL = "https://jsonplaceholder.typicode.com/posts";
// const contenedorPosts = document.querySelector("#contenedor-posts");

// fetch(API_URL)
//     .then(res => res.json())
//     .then(data => mostrarPosts(data));

// const mostrarPosts = (posts) => {
//     contenedorPosts.innerHTML = "";
//     posts.forEach(post => {
//         let div = document.createElement("div");
//         div.id = "post-" + post.id;
//         div.innerHTML = `
//             <h2>${post.title}</h2>
//             <p>${post.body}</p>
//         `;
//         contenedorPosts.append(div);
//     })
// }

//! Enviar datos con Fetch

// const nuevoPost = {
//     title: "Clase de Fetch",
//     body: "Hoy aprendimos Fetch y todas las maravillas de la asincronía.",
//     userId: 1,
//     id: 1
// }

// fetch(API_URL, {
//     method: "POST",
//     body: JSON.stringify(nuevoPost),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     }
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))

//! JSON

// fetch("/data/productos.json")
//     .then(res => res.json())
//     .then(data => setTimeout(() => {
//         mostrarProductos(data);
//     }, 2000));

// const mostrarProductos = (productos) => {
//     contenedorPosts.innerHTML = "";
//     productos.forEach(producto => {
//         let div = document.createElement("div");
//         div.id = "prod-" + producto.id;
//         div.innerHTML = `
//             <h2>${producto.titulo}</h2>
//             <p>$${producto.precio}</p>
//         `;
//         contenedorPosts.append(div);
//     })
// }


//! Async Await

// const API_URL = "https://jsonplaceholder.typicode.com/posts";
// const contenedorPosts = document.querySelector("#contenedor-posts");

// // async function nombre() {}

// const pedirDatos = async () => {
//     const respuesta = await fetch(API_URL);
//     const data = await respuesta.json();

//     mostrarPosts(data);
// }
// pedirDatos();

// const mostrarPosts = (posts) => {
//     contenedorPosts.innerHTML = "";
//     posts.forEach(post => {
//         let div = document.createElement("div");
//         div.id = "post-" + post.id;
//         div.innerHTML = `
//             <h2>${post.title}</h2>
//             <p>${post.body}</p>
//         `;
//         contenedorPosts.append(div);
//     })
// }


//? Async Await va a tener el mismo resultado que fetch+then; simplemente son diferentes sintaxis para la misma tarea