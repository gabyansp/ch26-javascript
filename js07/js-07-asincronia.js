
// -------------------Desarrollo sincrónico----------------------

const primerPaso = () => {
    console.log("01-Inicio de mi programa JS07");
}

const segundoPaso = () => {
    console.log("02-Desarrollo de mi programa");
}

const tercerPaso = () => {
    console.log("03-Fin de mi programa JS07");
}

primerPaso();
segundoPaso();
tercerPaso();

// --------------------------Programación Asíncrona----------------------------
// setTimeout()
// Establece un temporizador que ejecuta una funcion
// una vez que expire el temporizador.

const desarrolloAsincrono = ( saludo  ) => {
    console.log("Hola " + saludo);
};

const segundoPasoAsincrono = ( saludo  ) => {
    // setTimeout( desarrolloAsincrono, 4000, saludo);
    // setTimeout( (saludoRef) => console.log("Hola" + saludoRef), 4000, saludo );
    setTimeout( () => console.log("Hola " + saludo), 4000 ); // con esta forma ahorramos caracteres/lineas
};

console.log("--------------------------")
primerPaso();
//setTimeout( desarrolloAsincrono, 3000, "ch26" );
segundoPasoAsincrono("ch26 con 4 s. de retardo");
tercerPaso();

// ----------------------------- setInterval ------------------------------------
// Ejecuta una funcion de manera reiterada con un tiempo de retardo fijo entre cada llamada.

const segundoPasoConInterval = ( saludo ) =>{
    setInterval( ()=>console.log("La banda malandra es " + saludo) , 2000 );

}

console.log("-------------setInterval-------------")
primerPaso();
// segundoPasoConInterval("ch26 wu, wu"); comentado para que no siga iterando
tercerPaso();

// ---------------------Iniciar y detener setInterval------------------------

const refStartInterval = document.getElementById("iniciar");
const refStopInterval = document.getElementById("detener");
const refDateH2 = document.getElementById("fecha");
let idInterval;
refStopInterval.disabled = true;

refStartInterval.addEventListener("click" , (event)=>{
    //console.log("se pulsó iniciar");
    idInterval = setInterval(() => {
        refDateH2.innerHTML= new Date().toLocaleString();
    }, 1000);
    refStartInterval.disabled = true;
    refStopInterval.disabled = false;
});

refStopInterval.addEventListener("click" , (event)=>{
    //console.log("se pulsó detener");
    clearInterval(idInterval);
    refStartInterval.disabled = false;
    refStopInterval.disabled = true;

});
// otra forma de arreglar el desabilitado:
// copias en github-sergio