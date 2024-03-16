function jugarAdivinaNumero() {

    // Un número aleatorio entre 1 y 100
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    console.log(numeroAleatorio)

    let intentosTotales = 0;
    let adivinado = false;

    while(adivinado === false) {

        let intento = parseInt(prompt("Intentá adivinar un número entre 1 y 100:"));
        intentosTotales++;

        if (intento === numeroAleatorio) {
            alert("¡Felicidades! El número era " + numeroAleatorio + ". Lo adivinaste en " + intentosTotales + " intentos.");
            adivinado = true;
            jugarAdivinaNumero();
        } else if (intento < numeroAleatorio) {
            alert("El número que tenés que adivi1nar es más alto. Intentá otra vez.");
        } else {
            alert("El número que tenés que adivinar es más bajo. Intentá otra vez.");
        }

        //! Juego con límite de 10 intentos
        // if (intentosTotales === 10) {
        //     adivinado = true;
        //     alert("¡Perdiste! Te tomó más de 10 intentos.");
        // }

    }

}

jugarAdivinaNumero();