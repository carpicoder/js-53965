
//! setTimeOut
// console.log("Comienzo");

// setTimeout(function timeout() {
//     console.log("5000");
// }, 0);

// setTimeout(function timeout() {
//     console.log("1000");
// }, 0);

// console.log("Final");
// console.log("Final");
// console.log("Final");
// console.log("Final");


//! setInterval
// let i = 0;

// const reloj = setInterval(() => {
//     i++;
//     console.log(i);

//     if (i === 10) {
//         clearInterval(reloj);
//     }
// }, 1000)


//! PROMESAS

// function eventoFuturo(res) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             if (res === true) {
//                 resolve("Promesa resuelta");
//             } else {
//                 reject("Promesa rechazada");
//             }
//         }, 2000);
//     })
// }

// eventoFuturo(false)
//     .then((resp) => {
//         console.log(resp);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("Finalizó la promesa")
//     });


//! SIMULAR PEDIDO A BASE DE DATOS

let BD;
BD = [
    {
        id: 1,
        nombre: "Silla",
        precio: 3000
    },
    {
        id: 2,
        nombre: "Mesa",
        precio: 4000
    },
    {
        id: 3,
        nombre: "Ventana",
        precio: 5000
    },
    {
        id: 4,
        nombre: "Puerta",
        precio: 6000
    },
]

const pedirProductos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (BD) {
                resolve(BD);
            } else {
                reject("No hay productos");
            }
        }, 2000)
    })
}

let contenedor = document.querySelector("#contenedor");

pedirProductos()
    .then((data) => {
        contenedor.innerHTML = "";
        data.forEach((item) => {
            const div = document.createElement("div");
            div.innerHTML = item.nombre;
            contenedor.append(div);
        })
    })
    .catch((err) => {
        contenedor.innerHTML = err;
    });