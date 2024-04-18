// let DateTime = luxon.DateTime;
// let Duration = luxon.Duration;
// let Interval = luxon.Interval;
// const parrafoFecha = document.querySelector("#fecha");

// const now = DateTime.now();
// const mundial = DateTime.local(2022, 12, 18, 18);

// const dt = DateTime.fromObject(
//     { day: 18, month: 12, year: 2022 }
// )

// console.log(now);
// console.log(mundial);
// console.log(dt);

// console.log(((now - mundial) / 86400000).toFixed(2));



//? iso

// const dt = DateTime.fromISO("2022-12-18T18:30:25");
// console.log( dt.toString() );

// console.log( now.year );
// console.log( now.month );
// console.log( now.day );
// console.log( now.weekday ); // día de la semana en número

// console.log( now.zoneName );
// console.log( now.daysInMonth );


//? parseos de fechas y horas

// console.log( now.toLocaleString(DateTime.DATE_SHORT) );
// console.log( now.toLocaleString(DateTime.DATE_MED) );
// console.log( now.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY) );
// console.log( now.toLocaleString(DateTime.DATE_FULL) );
// console.log( now.toLocaleString(DateTime.DATE_HUGE) );
// console.log( now.toLocaleString(DateTime.TIME_SIMPLE) );

// console.log( now.setLocale("es-ar").toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY) );

// const fechaActualString = now.toLocaleString(DateTime.DATE_HUGE);
// const horaActualString = now.toLocaleString(DateTime.TIME_SIMPLE);
// parrafoFecha.innerText = fechaActualString + " " + horaActualString + ":" + now.second;

// const fechaHoraInicio = DateTime.local(2024, 4, 17, 20, 30);

// const duracionClase = Duration.fromObject({
//     hours: 2,
//     minutes: 30
// })

// const fechaHoraFinal = fechaHoraInicio.plus(duracionClase);

// console.log(`La clase comienza a las: ${fechaHoraInicio.toLocaleString(DateTime.TIME_SIMPLE)} y finaliza a las ${fechaHoraFinal.toLocaleString(DateTime.TIME_SIMPLE)}`);

// const fechaHoraAnterior = fechaHoraInicio.minus(duracionClase);
// console.log(fechaHoraAnterior.toLocaleString(DateTime.TIME_SIMPLE));

// const intervaloEntreHoyYElMundial = Interval.fromDateTimes(mundial, now);
// console.log(intervaloEntreHoyYElMundial.length("years"));
// console.log(intervaloEntreHoyYElMundial.length("months"));
// console.log(intervaloEntreHoyYElMundial.length("days"));
// console.log(intervaloEntreHoyYElMundial.length("hours"));
// console.log(intervaloEntreHoyYElMundial.length("minutes"));
// console.log(intervaloEntreHoyYElMundial.length("seconds"));
// console.log(intervaloEntreHoyYElMundial.length());


//! COUNTODOWN / CUENTA ATRÁS

// const end = DateTime.now().plus({ minutes: 1 });
// setInterval(() => {
//     const now = DateTime.now();
//     const restante = end.diff(now);
//     console.log(restante.toFormat(`d'd' h'h' m'm' ss'`))
// }, 1000)