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
console.log(`Gaby cohorte: ${numCohorteGaby} `); // 

