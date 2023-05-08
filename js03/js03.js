console.log("Sesion Js03");

// --------- Declaracion de bloque ---------------
{
    /*
    Las variables declaradas con let y const
    solo tendrán alcance(scope) dentro del bloque
    o bloques anidados.

    */

 let nombre = "Gaby";
 const apellido = "Peña";
 let edadGaby = 30, edadLuis = 25;
 let numCohorteGaby = numCohorteLuis = 26;
 
 
   {
    /*
     bloque anidado
     Si una variable local tiene el mismo nombre de
     una varible global o de bloque superior, la varible
     local oculta las otras variables, para que la variable
     local sea usada.
     */
    let nombre = "Luis";
    const apellido = "SP";
    console.log(`Me llamo ${nombre} ${apellido}`);
    console.log(`Gaby: ${edadGaby} años`);
    console.log(`Luis ${edadLuis} años`)
    console.log(`Gaby cohorte: ${numCohorteGaby} `);
    console.log(`Luis cohorte ${numCohorteLuis} `)
   }
   console.log( `Me llamo ${nombre} ${apellido}` );
   console.log(`Gaby: ${edadGaby} años`);
   console.log(`Luis ${edadLuis} años`)
   console.log(`Gaby cohorte: ${numCohorteGaby} `);
   console.log(`Luis cohorte ${numCohorteLuis} `)

}
/* console.log(`Sergio: ${edadSergio} años`);
   console.log(`Luis ${edadLuis} años`) */ // Nos da error porque esta fuera de bloque
console.log(`Luis cohorte ${numCohorteLuis} `) // 
// console.log(`Gaby cohorte: ${numCohorteGaby} `); // 

//----------------------Condicional if-else-----------------------------
/*
La condicional if ejecuta una sentencia si una condicion especificada es evaluada como verdadera.

sintaxis:
   if(condicion) sentencia;

   if(condicion){
      sentencia;
   }

   if(condicion)sentencia;
   else sentencia;

   if(condicion) {
      sentencia;
   } else {
      sentencia;
   }


*/

const temperatura = 100;
let mensaje;

//if (temperatura ===21) mensaje = `Temperatura ideal ${temperatura}`;
//else mensaje = `${temperatura} grados no es ideal`;

if (temperatura === 21) 
  mensaje = `Temperatura ideal ${temperatura}`; 
else if( temperatura > 21 && temperatura < 40) 
  mensaje = `Temperatura de ${temperatura} grados es caliente`;
else if( temperatura > 40) 
  mensaje = `Temperatura de ${temperatura} grados es super caliente, bendiciones`; 
else if( temperatura < 21) 
  mensaje = `Temperatura de ${temperatura} grados es fría`;
else 
  mensaje = `Temperatura de ${temperatura} grados no existe`;

console.log(mensaje);

//-------------------Ejercicio------------------------
/*
 Preguntar por el númer de mes, del 1 al 12 (prompt o DOM)
 de acuerdo al mes desplegar en un Alert (o en el DOM) la estación del año.

 mes 12, 1, 2 = invierno
 mes 3, 4, 5 = Primavera
 mes 6, 7, 8 = Verano
 mes 9, 10, 11 = Otoño

 Usar if-else
*/
//EJEMPLO: Aun no imprime
/* const getEstacion = () => {
let mes = parseInt(document.getElementById("Ingresa el número de mes (del 1 al 12):").value);

if (mes === 12 || mes === 1 || mes === 2) 
  alert = ("Estamos en invierno");
else if (mes === 3 || mes === 4 || mes === 5)
  alert("Estamos en primavera.");
else if (mes === 6 || mes === 7 || mes === 8)
  alert("Estamos en verano.");
else if (mes === 9 || mes === 10 || mes === 11)
  alert("Estamos en otoño.");
else 
  alert("El número de mes ingresado es inválido.");

} */

/* let mes = parseInt(prompt("Ingresa el número de mes (del 1 al 12):"));


<div id="message"></div>

const messageDiv = document.getElementById('message');
const response = prompt('Ingresa tu nombre:');
messageDiv.textContent = 'Hola, ' + response + '!'; 

const mes = parseInt(document.getElementById("mes").value) */



//-----------------Switch---------------------



const setVelocidadVentilador= ( velocidad) => {
   let msj;
   switch (velocidad){
     case 0:
       msj = "Apagado";
       break;
     case 1:
       msj = "Velocidad baja";
       break;
     case 2:
       msj = "Velocidad media";
       break;
     case 3:
       msj = "Velocidad alta";
       break;
     case 4:
     case 5:
       msj = "Velocidad super alta";
       break;
     default:
       msj = "el nivel no existe";
   }
   return msj;
 }
 console.log( `El ventilador esta en ${setVelocidadVentilador(5)}` );

 //-------------------Practica------------------------
 // Refactorizar el ejercicio anterior(estaciones) y usar switch.

 const getEstacion = () => {
const mes = parseInt(document.getElementById("mes").value)
   switch (mes){
      case 12: case 1: case 2:
        msj = "Invierno";
        break;
      case 3: case 4: case 5:
        msj = "Primavera";
        break;  
      case 6: case 7: case 8:
        msj = "Verano";
        break;
      case 9: case 10: case 11:
        msj = "Otoño";
        break;
      default:
         msj = "La estación no existe"
   }
   console.log(`La estacion del año es: ${msj}`);
   return msj;

} 

//--------------------Operador condicional ternario----------------------------

const subtotal = 1_000;
const pagoTarjetaCredito = true;

console.log(`La cuenta es de ${pagoTarjetaCredito ? subtotal*1.025 : subtotal*1 } pesos`);

const edad = 18;
//Se permite el acceso al antro de mala muerte?
console.log(`Acceso ${edad >= 18 ? "Permitido" : "Denegado" }`);
// a los de 17 solo con permiso, no es buena pratica:
console.log(`Acceso ${edad >= 18 ? "Permitido" : (edad === 17? "Solo con Permiso" : "Denegado") }`);

//-------------------------Practica-----------------------------
// Refactorizar el ejercicio de saludo con un operador ternario

function saludo(num) {
  num <= 1 ? console.log("Terminado") : (saludo(num - 1), console.log("Saludo " + num));
}

saludo(-1);