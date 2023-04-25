console.log("Sesion JS02");

//-----------------Función declarada----------------
// function declaration, function statement
// Una caracteristica es que las funciones declaradas tiene hoisting

//console.log("El resultado de 5*10= " + multiplica(5,10)); // Invocando la función
multiplica(5,10); // funcion sin retorno
multiplica(8,8);
multiplica(-4,2);

/* sintáxis
function nombreFuncionCamelCase ( parametros ){

}
*/
function multiplica (operandoA, operandoB){
    const resultado = operandoA * operandoB;
    console.log(resultado);
}

function divide (dividendo, divisor){
    return dividendo/divisor;
}
console.log( divide(5,2) );
console.log( divide(5,"2") );
console.log( divide("5","2") );
console.log( divide("5 0","2") );

/* { // este es un bloque de codigo
   const operandoA = 5
   const operandoB = 10
   const resultado = operandoA * operandoB;
   console.log(resultado); 
}

{ 
    const operandoA = 8
    const operandoB = 8
    const resultado = operandoA * operandoB;
    console.log(resultado); 
 } */

 // ----------------------Funciones expresadas------------------------------------
 // function expressions
 //son declaradas dentro de la asignacion de una variable
 // estas fuciones puede ser anonimas (no tienen nombre)
 // las funciones expresasadas no tienen hoisting, porque no se carga en memoria hasta que se utilice.

 /* Sintaxis
 const nombreVariable = function nombreFuncion (parámetro){
    instrucciónes;
 }
 */

 const sum = function sumatoria(a, b){
    return a + b;
 }

 const resta = function (a, b){
    return a - b;
 }

 const potencia = function (a, b){
    return a**b; // no se imprime
 }

 console.log( sum(9,9) );
 console.log( resta(90,20) );


 //----------------------Funciones autoinvocadas---------------------
 // self-invoking function
 // se autoinvoco, se pueden definir con fuciones anónimas

 (function (){
    console.log("Me autoinvoco en la función");
 }) ();

 //---------------Funciones flecha----------------
 // Arrow functions
 // Son funciones similares a las funciones declaradas, pero: no requieren la palabra function
 // Si tiene una sola instruccion no requiere las {}
 // Si la instrucción es el mismo retorno, no requiere la palabra return

 /* const areaRectangulo = function (base, altura){
    return base * altura;
 } */

 const areaRectangulo = (base, altura) => base * altura;

 console.log( "Área de rectangulo 5x3: " + areaRectangulo(5,3) );

 //------------------------Parámetro default----------------
 /**
  * Este comentario es la documentacion de la funcion
  * @param {number} base 
  * @param {number} altura 
  * @returns 
  */
 const areaTriangulo = (base=1, altura=1) => base * altura / 2;

 console.log("Area de triangulo b:5 a:10 = " + areaTriangulo(5,10) );
 console.log("Area de triangulo b:8 = " + areaTriangulo(8) );