const urlParams = new URLSearchParams(window.location.search);
const idParam = urlParams.get('id');


fetch(`https://fakestoreapi.com/products/${idParam}`)
    .then(res => res.json())
    .then(data => mostrarInfoProducto(data));

const contenedor = document.querySelector("#single-contenedor");

const mostrarInfoProducto = (producto) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <h2>${producto.title}</h2>
        <p>${producto.description}</p>
        <img src="${producto.image}" />
        <p>$${producto.price}</p>
    `;
    contenedor.append(div);
}