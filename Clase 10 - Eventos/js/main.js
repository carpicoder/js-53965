const btnAlerta = document.querySelector("#alerta");
const btnConsola = document.querySelector("#consola");

// btnAlerta.addEventListener("click", mostrarTodo);

// function mostrarTodo() {
//     alert("Hola, mundo!");
//     console.log("Hola, mundo!");
// }

// btnAlerta.onclick = () => {
//     alert("Hola, mundo!");
// }

// btnAlerta.onclick = () => {
//     console.log("Hola, mundo!");
// }

// //? CUANDO SE HACE CLIC
// btnAlerta.addEventListener("click", () => {
//     console.log("Click");
// })

// btnConsola.addEventListener("click", () => {
//     console.log("Hola, mundo!");
// })

// //? CUANDO APRIETO EL CLIC
// btnAlerta.addEventListener("mousedown", () => {
//     console.log("Mouse down");
// })

// //? CUANDO SUELTO EL CLIC
// btnAlerta.addEventListener("mouseup", () => {
//     console.log("Mouse up");
// })

//? CUANDO MUEVO EL MOUSE
// document.body.addEventListener("mousemove", (event) => {
//     console.log(event.target);
// })

// document.body.addEventListener("mousemove", (event) => {
//     console.log(event);
// })

//? CUANDO MUEVO EL MOUSE // POINTERMOVE
// document.body.addEventListener("pointermove", (event) => {
//     console.log(event);
// })

//? CUANDO HAGO HOVER
// btnAlerta.addEventListener("mouseover", () => {
//     console.log("Entró en hover");
// })

//? CUANDO SALGO DEL HOVER
// btnAlerta.addEventListener("mouseout", () => {
//     console.log("Salió de hover");
// })

// const btnColorMode = document.querySelector("#color-mode");

// btnColorMode.addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode");

//     if (document.body.classList.contains("dark-mode")) {
//         btnColorMode.innerText = "☀️";
//     } else {
//         btnColorMode.innerText = "🌙";
//     }
// })

const alertaForm = document.querySelector("#alerta-form");
const alertaInput = document.querySelector("#alerta-input");
const alertaSubmit = document.querySelector("#alerta-submit");

//? APRETAMOS UNA TECLA
// alertaInput.addEventListener("keydown", () => {
//     console.log("Apreté una tecla!")
// })

//? SOLTAMOS UNA TECLA
// alertaInput.addEventListener("keyup", (e) => {
//     console.log(e)
// })

//? ENTRÉ A FOCUS DE INPUT Y CAMBIÉ SU VALUE
// alertaInput.addEventListener("change", () => {
//     console.log("Cambió")
// })

//? CAMBIAR EL VALUE DE UN INPUT
// alertaInput.addEventListener("input", (e) => {
//     console.log(e.target.value)
// })

//? CUANDO SE ENVÍA UN FORM

// alertaForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log(alertaInput.value);
//     // alertaForm.reset();
//     alertaInput.value = "";
// })


// const abajoInput = document.querySelector("#abajo-input");
// const abajoParrafo = document.querySelector("#abajo");

// abajoInput.addEventListener("input", () => {
//     abajoParrafo.innerText = abajoInput.value;
// })


// const agregarLista = document.querySelector("#agregar");
// const agregarForm = document.querySelector("#agregar-form");
// const agregarInput = document.querySelector("#agregar-input");

// agregarForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const inputText = agregarInput.value.trim();

//     if (inputText !== "") {
//         const li = document.createElement("li");
//         li.classList.add("lista-item");
//         li.innerHTML = `<span>${inputText}</span>`;

//         const btnBorrar = document.createElement("button");
//         btnBorrar.innerText = "💎";
//         btnBorrar.addEventListener("click", () => {
//             li.remove();
//         })
//         li.append(btnBorrar);

//         agregarLista.append(li);
//     }

//     agregarForm.reset();
// })

// const inputPass = document.querySelector("#pass-input");
// const inputShow = document.querySelector("#pass-show");

// inputShow.addEventListener("click", () => {
//     if (inputPass.type === "text") {
//         inputPass.type = "password"
//     } else {
//         inputPass.type = "text"
//     }
// })