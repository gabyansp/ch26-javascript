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

 // --------------------------Parámetros rest -----------------------------
 // rest parameters sintaxis: ...nombreParametro
 // Nos permite representar una serie de valores indefinidos en los argumentos
 // estos se presentan como un array
 // Debe estar al final de la lista de parametros

 function sumatoriaVariosNumeros (a, b, ...restoDatos ){
   let suma;
   suma = a + b;
   for (let index = 0; index < restoDatos.length; index++) {
      suma += restoDatos [index]; // suma = suma + restoDatos[index]      
   }

   return suma;
 }

 console.log("sumatoria de varios numeros: " + sumatoriaVariosNumeros(5, 6) );
 console.log("sumatoria de varios numeros: " + sumatoriaVariosNumeros(5, 6, 9, 10) );
 console.log("sumatoria: " + sumatoriaVariosNumeros(5, 6, 9, 10, 20, 50) );

//--------------------------- funciones callback ------------------------------
// Funcion que se pasa a otra funcion como argumento, para luego invocarse
// para completar algun tipo de rutina o acción.

// EJERCICIO = 3 funciones: 1.Imprima consola, 2.Alert y 3.DOM h1. 1 parametro de entrada y no tiene return:
// Funcion que imprime un mensaje en la consola
  function imprimirEnConsola(valor) {
   console.log(valor);
 }
// Funcion que muestra una alerta en la pantalla
 function mostrarAlerta(mensaje) {
   alert(mensaje);
 }
// Funcion que agrega un encabezado h1 al DOM
 function actualizarH1(texto) {
   const elementoH1 = document.querySelector('h1');
   elementoH1.textContent = texto;
 }


/*  imprimirEnConsola("Hola, mundo"); llamar imprimir de mis 3 ejercicios de arriba
 mostrarAlerta("¡Bienvenido!");
 actualizarH1("Hola, mundo!"); */ 

/*  function getName(   ){
   const name = prompt("Dime tu nombre");
   const text = `Hola ${name}, espero tengas un gran día`;
   imprimirEnConsola(text);
}
getName(); */

// Otros ejemplos de imprimir en Consola y DOM
function getNamePrintToConsole(   ){
   const name = prompt("Dime tu nombre");
   const text = `Hola ${name}, espero tengas un gran día`;
   imprimirEnConsola(text);
}
function getNamePrintToDOM(   ){
   const name = prompt("Dime tu nombre");
   const text = `Hola ${name}, espero tengas un gran día`;
   actualizarH1(text);
}

/* getNamePrintToConsole(); "Lo comente para que no aparesca cada que actualizo la pag.""
getNamePrintToDOM();                                                                      */

// Ejercicio 2 (Tarea ya hecha)
/* Escribe una función que tome un arreglo de números,
duplique el valor de cada número del arreglo,
e imprima el nuevo arreglo actualizado.
[5, 10, 15, 20, 25] -> [10, 20, 30, 40, 50]
*/

function double(arr) {
const doubleNumbers = [];
for (let i = 0; i < arr.length; i++) {
  const duplicate = arr[i] * 2;
  doubleNumbers.push(duplicate);
}
return doubleNumbers;
}


// Función que nos sirve de callback
// const duplicate = (number) => number * 2;

/*function doubleWithMap( array ){
   const duplicateNumber = array.map( function( number ){
      return number * 2;
   } );
   return duplicateNumber;
} */

function doubleWithMap( array ){
   return array.map( number=> number * 2);
   } 

const numbers = [5, 10, 15, 20, 25]; 
//console.log(double(numbers));
console.log(doubleWithMap(numbers));
console.log(numbers.map( number => number * 2 ) ); // number.map()
console.log(numbers);


/*
  Ejercicio 4
  Crear un programa que itere sobre dos arreglos;
  si hay cursos en común, imprimirlos en la consola.
  salida: cursos en comun: programming, Music
*/


const student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
const student2Courses = ["Geography", "Spanish", "Programming", "Music"];
const student3Courses = ["Music"];

function cursosEnComun (student1Courses,student2Courses) {
   const courses = [];
   for (let i=0; i < student1Courses.length; i++) {
    for (let j=0; j < student2Courses.length; j++) {
     if (student1Courses[i] == student2Courses[j]){
      courses.push ( student1Courses[i] );
     }
    }
   } 
   return `Cursos en común: ${courses}`;
 }

console.log(cursosEnComun( student1Courses, student2Courses ));

// usar filter y usar includes 
function getCommonCoursesWithFilter(student1Courses,student2Courses) {
   return student1Courses.filter(course => student2Courses.includes(course));
}

const commonCourses = getCommonCoursesWithFilter(student1Courses, student2Courses);
const getCommonCoursesWithStudent3 = getCommonCoursesWithFilter(commonCourses, student3Courses);
console.log("Common courses:", getCommonCoursesWithStudent3.join(", "));

// -------------------------- Contar la cantidad de carcateres de una frase ----------------------------------
// pepe pecas pica papas con un pico y una pala
// la cantidad de letras 'p': 8
// resolver usando arrow function

// 1° opcion
/* const frase = "pepe pecas pica papas con un pico y una pala";

const count = [...frase].reduce((accumulator, currentValue) => currentValue === "p" ? accumulator + 1 : accumulator, 0);


console.log("La cantidad de letras p: ", count); */
// 2° opcion
phrase = 'pepe pecas pica papas con un pico y una pala'

const countChar = (p, phrase) => phrase.split("").filter(c => c == p).length;

console.log("Cantidad de letras 'p':", countChar('p', phrase));

//------------------- Funciones Recursivas ------------------
// Es una técnica de programación en donde la funcion se llama así misma.
// Se debe tener precausión de no entrar a un bucle infinito.

/*
  function funcionRecursiva( valor ){
    if ( condiciónDeParo ){

    }
    else {
        // Llamada recursiva.
    }
  }

*/
// forma descendente:
/* const factorialConCicloFor = numero =>{
   let resultadoFactorial = 1;
   
   for(let i = numero; i > 0; i-- ){
       resultadoFactorial *= i;
   }
   return resultadoFactorial;
}

console.log("El factorial de 5: " + factorialConCicloFor(10)); */

// forma acendente:
const factorialConCicloFor = ( numero ) => {
   let factorial = 1;
   for (let i = 1; i <= numero; i++) {
       factorial *= i; // factorial = factorial * i;
       
   }
   return factorial;
}

function factorialRecursivo ( numero ){
   if(numero === 1){ // ciclo de paro bien definido
      return 1;

   }
   else{
      return numero * factorialRecursivo( numero - 1);

   }
}

// Esto siguiente es igual a la funcion anterior pero mas simplificada:
/* function factorialRecursivo ( numero ){
   if(numero === 1)
      return 1;
   return numero * factorialRecursivo( numero - 1);

} */

console.log("Factorial de 5: " + factorialConCicloFor(5));
console.log("Factorial de 5: " + factorialRecursivo(5));

// ------------ Ejercicio ------------
// Una función recursiva que muestre en consola
/*
Saludo 1
Saludo 2
Saludo 3
 ...
Saludo 10

saludo(10);
*/
function saludo(numero) {
   if (numero > 0) {
     saludo(numero - 1);
     console.log("Saludo " + numero);
   }
 }
 
 saludo(10);

// otro ejemplo:
/* const saludar = ( numero ) => {
   if( numero === 1){
       console.log("Saludo " + numero);
   }else{
       saludar(numero - 1)
       console.log("Saludo " + numero);
   };
};

saludar(10); */
// otro ejemplo:
/* function saludo(cantidad){
   if(cantidad == 0){
     return;
   }
   else{
     saludo(cantidad-1);
   }
   console.log(`Saludo ${cantidad}`);
 }
 
 saludo(10); */
