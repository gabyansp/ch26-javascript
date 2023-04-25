console.log("Sesion JS01");

// Son 7 datos primitivos:
// String: "Hola"
console.log("Tipo de dato String: ", "Hola");

//Number: 12,-45 367.12 Infinity -Infinity NaN
// Los numéricos usan 64 bits para almacenar, pero solo se usan 53 bits
// para represntar el número.
console.log("Tipo de dato Number: ", 12, -45, 367.12, 45/0, -56/0, 56*"hola");
console.log("Valor maximo: ", Number.MAX_VALUE);
console.log("Valor seguro: ",  Number.MAX_SAFE_INTEGER);

// BigInt
// Sirven para reresentar valor numérico enteros, de los que el tipo number
// no puede representar o no es seguro.

console.log("MAX_SAFE_INTEGER + 1 : ", Number.MAX_SAFE_INTEGER + 1);
console.log("MAX_SAFE_INTEGER + 2 : ", Number.MAX_SAFE_INTEGER + 2);
let myBigInt = 9007199254740991n; // Se agrega la letra N al final
console.log("Valor de dato BigInt: ", myBigInt);
console.log("MAX_SAFE_INTEGER + 1n", myBigInt + 1n );
console.log("MAX_SAFE_INTEGER + 1n", myBigInt + 2n );

// Boolean
// Tenemos 2 estados: true/false
console.log("Tipo de dato boolean: ", true );
console.log("Tipo de dato boolean: ", false );

//Undefined
// Un dato que es declarado, pero no definido en el tipo
let myVar; // Solo se declara 
console.log("Tipo de dato undefined: ", myVar);

// null
// Intensionalmente se borra el tipo de dato
let myVarNull; // solo se declara
console.log("Tipo de dato myVarNull: ", typeof(myVarNull) ); // undefined
myVarNull = "Saludo Sr. PP"; // Se asigna un dato string
console.log("Tipo de dato myVarNull: ", typeof(myVarNull) ); // string
myVarNull = null;
console.log("Tipo de dato myVarNull: ", typeof(myVarNull) ); // object

// symbol
// crea propiedades privadas en los objetos

//---------------------------------------------------------------------------
// Tipos de datos Object
// Object:
const misDatos = {
    // clave: valor
    nombre: "Gabriela",
    apellido: "Peña",
    edad: 30,
    isBelicoso: false,
    musicaPreferidaPorGenero: {
        rock: "Red hot chili peppers",
        corridosTumbados: "Ella baila sola"
    },
    nombreCompleto: function fullName(){
        return this.nombre + " " + this.apellido + ", soy el belicon";
    }
}

console.log("Datos completos: ", misDatos );
console.log("Nombre: ", misDatos.nombre );
console.log("Música de fin de semana: ", misDatos.musicaPreferidaPorGenero.corridosTumbados );
console.log("Nombre completo: ", misDatos.nombreCompleto() );


// Array
// Almacena diferentres tipos de datos, su primer elemento es el indice 0

const cancionesPP = [
    "Soy el Belicón",
    "El azul",
    "El tsurito",
    "AMG",
    {
        2020: 5,
        2021: 30,
        2022: 56,
        total: 91
    }
];

console.log("Canción con color: ", cancionesPP[1] );
console.log("Canciónes hechas en el año 2021: ", cancionesPP[4].total );
console.log("Canciónes hechas en el año 2021: ", cancionesPP[4]["total"] );
console.log("Canciónes hechas en el año 2021: ", cancionesPP[4][2021] ); // no genera buena practica porq podriamos leerlo como un array dentro de un array
console.log("Canciónes hechas en el año 2021: ", cancionesPP[4]["2021"] );

console.log("Num total de elementos: ", cancionesPP.length );
console.log("Contiene la canción AMG: ", cancionesPP.indexOf("AMG")>-1 );

//---------------------------------------------------------------
// Conversión de datos
const myNumber = 420; // Minuto en la sesión JS 01
console.log("Num. minutos en la sesión: " + myNumber );
// toString
const myNumberTxt = String(myNumber);
console.log("Num. minutos en la sesión: " + myNumberTxt );

// toNumber
const myString = "420";
const sumatoria = 80 + Number(myString);
console.log("Valor de sumatoria: " + sumatoria); // 500

// TiParseInt
const myStringInteger = "420.2020";
const sumatoriaEntera = 80 + parseInt(myStringInteger);
console.log("Valor de sumatoria entera: " + sumatoriaEntera ); // 500


// toParseFloat
const isBelicoso = "false"
console.log( typeof isBelicoso);
console.log( Boolean(isBelicoso) );

if ( isBelicoso === "false" )
    console.log("Denle su belikin");
else
    console.log("Abra paso a la barredora");
 
//Boolean
// para que sea False, debe ser: "", 0, null, undefined
// Number
// [] = 0, [30] = 30, [3,1] = NaN, false = 0, true = 1
//String
// []= "", [1,2] = "1,2", function(){} = function(){}, {} = [object Object]