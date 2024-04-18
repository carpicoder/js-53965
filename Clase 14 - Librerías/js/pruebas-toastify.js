const apretar = document.querySelector("#apretar");

apretar.addEventListener("click", () => {

    Toastify({
        text: "Esto es una tostadita.",
        duration: 3000,
    
        // destination: "https://carpicoder.com",
        // newWindow: true,
    
        gravity: "top",
        position: "right",
    
        stopOnFocus: false,
    
        style: {
            background: "linear-gradient(to right, red, blue)",
            borderRadius: "1rem",
            color: "white"
        },
    
        // offset: {
        //     x: 100,
        //     y: 100
        // },
    
        close: true,
    
        // onClick: function() {
        //     saludar();
        // },
    
    }).showToast();
})



// function saludar() {
//     alert("Hola!")
// }