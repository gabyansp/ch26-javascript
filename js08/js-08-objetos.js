console.log("Js 08 objetos");

// ------------- Crear un objeto en js -------------
const frutasColores = {
    // Clave: valor
    fresa: ["roja"],
    pepino: ["verde"],
    mango: ["amarillo"],
    naranja: ["anaranjado", "amarilla"],
    mandarina: ["anaranjado"],
    mora: ["morada"],
    pitaya: ["rosa", "rojo", "blanco", "amarillo"]
};

// ----------------------Formas de leer un objeto------------------------
// Leer el color del pepino
console.log( "El pepino es " + frutasColores.pepino );
// Leer el color de la pitaya
console.log( "La pitaya es " + frutasColores.pitaya[1] ); // rojo
console.log( "La pitaya es " + frutasColores.pitaya ); // rosa-rojo-blanco-amarillo

// Modificar un valor
// Agregar el color verde al mango
frutasColores.mango.push( "verde" );
//frutasColores.mango = "verde"; // manera erronea porque perdemos el arreglo y lo que hace es sustiturlo.
console.log( "El mango es " + frutasColores.mango );
console.log( "El mango es " + frutasColores["mango"] );


//-------------------------Iterando los objetos---------------------------
// Iterar los valores con for-in
// Iterar sobre todas las propiedades (keys) de un objeto

for (let fruta in frutasColores) { // fruta tendra las claves
    console.log( `${fruta} tiene los colores ${ frutasColores[fruta] }` );
}

// ----------------------------Uso de symbol-----------------------------------
/*
Se utiliza para añadir claves de propiedades unicas y que esten ocultas a otros mecanismos como la iteración y stringify.
Nos sirve para realizar el concepto de encapsulación.

*/
const sueldoOculto = Symbol();

const datosEmpleado = {
    nombre: "El kesa",
    apellido: "Britas",
    [sueldoOculto]: 50_000
}

for (let dato in datosEmpleado){
    console.log(`${dato}: ${datosEmpleado[dato]}`);
}

localStorage.setItem( "datos-empleado", JSON.stringify(datosEmpleado) );
//sessionStorage.setItem( "datos-empleado", JSON.stringify(datosEmpleado) );

// Bote de lunetas
const boteLunetas = {
    gramaje: 20,
    sabor: "chocolate",
    costo: 35,
    color: "rojo",

    abrir: function(){
        return "Despachar producto";
    },

    comer: function(gramosComidos){
        return this.gramaje -= gramosComidos;
    }
}
console.log( "Mi bote de lunetas tiene(g): " + boteLunetas.comer(5) );

// otro ejemplo
const car = {
    color: "black",
    type: "sedan",
    brand: "Hyundai",
    price: 250_000,
   /*  igniteEngine: function (boolean) {
      if (boolean === true) {
        return "Engine is on";
      } else {
        return "Engine is off";
      }
    }, */
    igniteEngine: (state) => state? "Engine is on": "Engine is off"
};
  
console.log(car.igniteEngine(true));
console.log(car.igniteEngine(false));