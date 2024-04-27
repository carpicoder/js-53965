let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const carritoContenedor = document.querySelector("#carrito-pagina");

if (carrito.length === 0) {
    carritoContenedor.innerHTML = "<p class='no-hay-productos'>No hay productos en el carrito</p>";
} else {
    carrito.forEach((producto) => {
        let div = document.createElement("div");
        div.innerHTML = `
            Título: ${producto.titulo}
            Precio: ${producto.precio}
        `;
        carritoContenedor.append(div);
    })
}
