//<section>
// <div class="remera-carrito">
//   <div class="cont-img-carrito">
//      <img class="img-carrito" src="../img/ropa KODE/remeras/REMERA0.jpg">
//      <button class="borrar">X</button>
//   </div>
//   <div class="d-block">
//      <div class="nombre">
//          <p>REMERA BLANCA</p>
//      </div>
//      <div class="cantidad-y-precio">
//          <div class="cantidad">
//              <p>CANTIDAD: 1</p>
//          </div>
//          <div class="precio">
//              <p>$3000</p>
//          </div>
//      </div>
//  </div>
// </div>
//</section>

let contenedor = document.querySelector("#contenedor");

carrito.forEach(producto => {
    const section = document.createElement("section");

    const divRemeraCarrito = document.createElement("div");

    const contImgCarrito = document.createElement("div");
    contImgCarrito.innerHTML = `<img class="img-carrito" src="../img/ropa KODE/remeras/REMERA0.jpg">`;
    const btnBorrar = document.createElement("button");
    btnBorrar.addEventListener("click", () => { funcion() });
    contImgCarrito.append(btnBorrar);
    divRemeraCarrito.append(contImgCarrito);

    const dBlock = document.createElement("div");
    dBlock.innerHTML = "TODO EL QUILOMBITO";
    divRemeraCarrito.append(dBlock);

    section.append(divRemeraCarrito);

    contenedor.append(section);

})