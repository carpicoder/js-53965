const swalbutton = document.querySelector("#apretar");

swalbutton.addEventListener("click", () => {
    Swal.fire({
        title: "Esto es una alerta",
        text: "Esto es una descripción de la alerta.",
    
        showCloseButton: true,
        showConfirmButton: true, // viene por defecto en true
        showCancelButton: true,
        showDenyButton: true,
    
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar",
        denyButtonText: "Denegar",
    
        imageUrl: "../img/perrito.jpg",
        imageWidth: 100,
        imageAlt: "Perrito sonriendo",
    
        footer: "<a href='https://carpicoder.com' target='_blank'>Hola, esto es un footer.</a>"
    }).then((result) => {
        if(result.isConfirmed) {
            Swal.fire({
                text: "Se aceptó la alerta",
                icon: "success"
            })
        } else if (result.isDenied) {
            Swal.fire({
                text: "Se denegó la alerta",
                icon: "error"
            })
        } else {
            Swal.fire({
                text: "Se canceló la alerta",
                icon: "info"
            })
        }
    })
})
