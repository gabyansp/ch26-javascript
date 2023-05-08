console.log("Js07 - promesas");

/*
Una promesa (promise) es un objeto que representa la terminación o fracaso de una operación asíncrona.
Para crear una promesa se usa el contructor new Promise();

*/

// const pinkiPromise = new Promise( Una función de callback);
const pinkiPromise = new Promise( (fncCallBackResolve, fncCallBackReject )=>{
    const menorEdad = false;

    if(menorEdad)
        fncCallBackResolve("Hay que estar siempre juntos");
    else
        fncCallBackReject(" No te conozco");

} );

// consumir las promesas
// usando los metodos then, catch y finally.

console.log("Antes de consumir la promesa");

pinkiPromise
    .then( (response)=> console.log("Promesa Resuelta " + response) )
    .catch( (error)=> console.error("Tu promesa fue rechazada" + error) );

console.log("Despues de consumir la promesa");

//---------------Una promesa que reciba dos numeros a y b y los divida, pero en caso de que b sea 0, me envíe un rechazo diciendome porque no se puede realizar la división ---------------------------

function dividir(a, b) {
    return new Promise((resolve, reject) => {
      if (b === 0) {
        reject('No se puede dividir entre cero.');
      } else {
        const resultado = a / b;
        resolve(resultado);
      }
    });
  }
dividir(10, 0)
.then(resultado => console.log(resultado))
.catch(error => console.error(error));

// otro ejemplo
/* const division = new Promise ( (fncCallBackResolve, fncCallBackReject )=> {
    const a = 10;
    const b = 0;

    if(b != 0){
        fncCallBackResolve( a/b )
    }else{
        fncCallBackReject( "No se puede dividir por cero" )
    }
});

division
    .then( (response)=> console.log("promesa resuelta, la division es: " + response))
    .catch( (error) =>console.error("Tu promesa fue rechazada: " + error )); */
  
// -----------Haciendo la división con parámetros------------

const divisionConParametros = (a, b) =>{
    const myPromise = new Promise(  (resolve, reject ) =>{
        if( b === 0 )
            reject("No se puede realizar una división por cero");
        else
            resolve(a/b);
    } );

    return myPromise;
}

divisionConParametros(3,4)
    .then( (response)=> {
        console.log(response); // 0.75
        return response + 10;
} )
    .then((mas10Unidades)=> console.log(mas10Unidades)) // 10.75
    .catch((error)=> console.log(error) )
    .finally(()=> console.log("Se termino la división"));

divisionConParametros(3,0)
    .then( (response)=> console.log(response) )
    .catch( (error)=> console.log(error) ); // No se puede realizar una división por cero

// Consumir las promesas con async y await = terminar de pasarlo en git sergio

const realizarDivisionSincrona = async () => {
    console.log("----Resolviendo divisiones---->");    
    const resultado = await divisionConParametros(20,4) ; // 5
    console.log( resultado );
    console.log( resultado + 100 ); // 105
   // const resultadoErroneo = await divisionConParametros(20,0) ; // No se puede realizar una división por cero
    //console.log( resultadoErroneo)
    console.log("<----Terminando divisiones-----");
}

realizarDivisionSincrona();


// --------------------- Manejo de exepciones con try y catch --------------------------
/* Sintaxis:
try{

} catch(error){

} */


const manejoDeExepciones = async () =>{
    console.log("----Resolviendo divisiones usando try y catch---->");   
    
    try {
        const resultadoErroneo = await divisionConParametros(20,0) ;
        console.log( resultadoErroneo)
        
    } catch (error) {
        console.error("Asyn-Await" + error );
    }
    
    console.log("<----Terminando divisiones usando try y catch-----");
};

manejoDeExepciones();

//------------Promise.resolve();------------------

const promesaRapida = Promise.resolve(123);
// -------Resolver (consumir) con .then

//en funcion:
const consumirConThen = () => {
    promesaRapida.then( value => console.log("Consumir con Then " + value) );
    console.log(457);
}
consumirConThen();
// modo directa:
/* promesaRapida.then( (valor) => console.log("Promesa Resuelta con Then " + valor) );  */
  

// -------Resolver con try-catch
const consumirConAwait = async () => {
    console.log( "Consumir con Await " + await promesaRapida );
    console.log(781);
};
consumirConAwait();

