let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

fetch("/data/productos.json")
    .then(res => res.json())
    .then(data => {
        mostrarProductos(data);
    })

const contenedorProductos = document.querySelector("#productos");
const carritoVacio = document.querySelector("#carrito-vacio");
const carritoProductos = document.querySelector("#carrito-productos");
const carritoTotal = document.querySelector("#carrito-total");
const btnVaciar = document.querySelector("#vaciar");
const numerito = document.querySelector("#numerito");

// Recorro el array para mostrarlos en pantalla
const mostrarProductos = (productos) => {
    productos.forEach((producto) => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-img" src="${producto.img}" alt="${producto.titulo}">
            <h3>${producto.titulo}</h3>
            <p>$${producto.precio}</p>
        `;
    
        const btn = document.createElement("button");
        btn.classList.add("producto-btn");
        btn.innerText = "Agregar al carrito";
    
        btn.addEventListener("click", () => {
            agregarAlCarrito(producto);
        })
        div.append(btn);
    
        contenedorProductos.append(div);
    })
}


function actualizarCarrito() {
    if (carrito.length === 0) {
        carritoVacio.classList.remove("d-none");
        carritoProductos.classList.add("d-none");
        btnVaciar.classList.add("d-none");
    } else {
        carritoVacio.classList.add("d-none");
        carritoProductos.classList.remove("d-none");
        btnVaciar.classList.remove("d-none");

        carritoProductos.innerHTML = "";
        carrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <h3>${producto.titulo}</h3>
                <p>$${producto.precio}</p>
                <p>Cant: ${producto.cantidad}</p>
                <p>Subt: $${producto.cantidad * producto.precio}</p>
            `;

            const btnRestar = document.createElement("button");
            btnRestar.classList.add("carrito-producto-btn");
            btnRestar.innerText = "⬇️";
            btnRestar.addEventListener("click", () => {
                restarDelCarrito(producto);
            })
            div.append(btnRestar);

            const btnSumar = document.createElement("button");
            btnSumar.classList.add("carrito-producto-btn");
            btnSumar.innerText = "⬆️";
            btnSumar.addEventListener("click", () => {
                sumarDelCarrito(producto);
            })
            div.append(btnSumar);

            const btnEliminar = document.createElement("button");
            btnEliminar.classList.add("carrito-producto-btn");
            btnEliminar.innerText = "✖️";
            btnEliminar.addEventListener("click", () => {
                borrarDelCarrito(producto);
            })
            div.append(btnEliminar);

            carritoProductos.append(div);
        })
    }
    calcularNumerito();
    actualizarTotal();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}



// Se va a llamar cuando agregue un producto al carrito
// Primero chequea si está el elemento, y si está le suma 1 a cantidad; si no está, lo pushea
const agregarAlCarrito = (producto) => {
    const itemEncontrado = carrito.find(item => item.titulo === producto.titulo);
    if (itemEncontrado) {
        itemEncontrado.cantidad++;
    } else {
        carrito.push({...producto, cantidad: 1});
    }

    actualizarCarrito();

    Toastify({
        text: "Producto agregado al carrito.",
        gravity: "bottom", // top o bottom
        position: "right", // left, center o right
        duration: 1000
    }).showToast();
}

const borrarDelCarrito = (producto) => {
    const prodIndex = carrito.findIndex(item => item.titulo === producto.titulo);
    carrito.splice(prodIndex, 1);
    actualizarCarrito();
}

const restarDelCarrito = (producto) => {
    // if (producto.cantidad === 1) {
    //     borrarDelCarrito(producto);
    // } else {
    //     producto.cantidad--;
    // }
    if (producto.cantidad !== 1) {
        producto.cantidad--;
    }
    actualizarCarrito();
}

const sumarDelCarrito = (producto) => {
    producto.cantidad++;
    actualizarCarrito();
}

const actualizarTotal = () => {
    const total = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0);
    carritoTotal.innerText = `$${total}`;
}

const calcularNumerito = () => {
    const numeritoTotal = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    numerito.innerText = numeritoTotal;
}

btnVaciar.addEventListener("click", () => {
    carrito.length = 0;
    actualizarCarrito();
})

actualizarCarrito();

/*
    ! QUEDA PENDIENTE
    LOCALSTORAGE ✅
    SUMAR Y RESTAR CANTIDAD EN CARRITO ✅
    AGREGAR WIDGET DE CARRITO EN HEADER ✅
*/