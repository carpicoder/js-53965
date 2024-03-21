// let total = 0

// // for (let i = 1; i <= 10; i++) {
// //     console.log(i)
// //     total += i
// // }

// // console.log(total)  //  55

// function sumarRango(a,b){
//     for (let i = a; i <= b; i++) {
//         console.log(i)
//         total += i
//     }
//     return total
// }


// console.log(sumarRango(1,10))


// Ejemplo de funcion que retorna una función

// function mayorQue(numero) {
//     return (numero2) => numero2 > numero
// }

// let mayorQueDiez = mayorQue(10)

// console.log(mayorQueDiez)
// console.log(mayorQueDiez(12))
// console.log(mayorQueDiez(5))



// Ejemplo de funcion que recibe una función como parametro

// function porCadaUno(array, funcion) {
//     for (const el of array) {
//         funcion(el)
//     }
// }

// porCadaUno(numeros,console.log)

// const numeros = [1,2,3,4,5]
const cursos = [
    {
        nombre: "JavaSrcipt",
        precio: 2000,
        categoria: "programacion",
    },
    {
        nombre: "React JS",
        precio: 3000,
        categoria: "programacion"
    },
    {
        nombre: "Next JS",
        precio: 3000,
        categoria: "programacion"
    },
    {
        nombre: "UX/UI",
        precio: 1000,
        categoria: "diseño"
    },
    {
        nombre: "Backend",
        precio: 5000,
        categoria: "programacion"
    },
    {
        nombre: "Facebook Ads",
        precio: 1500,
        categoria: "marketing"
    }
]


// Ejemplo de forEach con función flecha
// numeros.forEach((numero) => {
//     console.log(numero)
// })

// // Ejemplo de forEach con función anonima
// numeros.forEach(function (numero) {
//     console.log(numero)
// })

// cursos.forEach((curso) => {
//     console.log(curso.nombre)
// })



//Ejemplo de find y filter

// let buscador = prompt("¿Qué estilo de curso te gustaria ver?").toLowerCase()
// // const cursoEncontrado = cursos.find((curso) => curso.categoria === buscador)
// // console.log(cursoEncontrado)


// const cursosEncontrados = cursos.filter((curso) => curso.categoria === buscador)
// console.log(cursosEncontrados)


// Ejemplo de map 

// const porcentajeDeAumento = 0.5

// const cursosConAumento = cursos.map((curso) => {
//     return {
//         nombre: curso.nombre,
//         precio: curso.precio * porcentajeDeAumento,
//         categoria: curso.categoria
//     }
// })
// console.log(cursosConAumento)
// console.log(cursos)



// Ejemplo de reduce

// const totalCompra = carrito.reduce((acc,curso) => acc + curso.precio, 0)
// console.log(totalCompra)


//Ejemplo de sort

// const numeros = [ 40, 1, 5, 200 ];


// numeros.sort((a, b) => a - b); 
// console.log(numeros)

// numeros.sort((a, b) => b - a); 
// console.log(numeros)


cursos.sort((a,b) => {
    if(a.nombre < b.nombre){
        return 1 // Quiere decir que B es mayor que A
    }else if (a.nombre > b.nombre){
        return -1 // Quiere decir que A es mayor que B
    }else{
        return 0 // Que ambos son exactamente iguales
    }
})

console.log(cursos)