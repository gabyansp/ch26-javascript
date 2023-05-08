console.log("Sesion js06");

// función definida
function findElementByIdFnc01 ( /*parametros*/ ){
    /* instrucciones */
    return 3*4;
}

// función expresada
const findElementByIdFnc02 = function ( /*parámetros*/) {
    return 3*4;
};

const findElementByIdFnc03 = (/*parámetros*/ ) => {
    return 3*4;
};

const findElementByIdFnc04 = () =>  3*4;

const findElementByIdFnc05 = variableParametro =>  3*4;


const findElementById = (nameOfDeveloper) => {
    const tituloRef = document.getElementById("titulo");

    // tituloRef.innerHTML = tituloRef.innerHTML + nameOfDeveloper;
    tituloRef.innerHTML += nameOfDeveloper;

}
findElementById(", Gaby");

const changeSubtitleById = (newTxt) => {
    const subtitleRef = document.getElementById("subtitulo");

    subtitleRef.innerHTML = `${subtitleRef.innerText}, <em>${newTxt}</em>`;
}
changeSubtitleById("Viernes de cholos");

// ------------------Encontrar elementos por su tag(etiqueta)-----------------------
// getElementByIdTagName()

const changeEmphasis = (newTxt, url) => {
    const emphasisRef = document.getElementsByTagName("em");
    //console.log(emphasisRef);
    for (element of emphasisRef){
        console.log(element);
        element.innerHTML = ` <a href="${url}" target="_blank"> ${newTxt} </a> `;
    }
};

changeEmphasis("viernes friki", "https://frikishop.com.mx/");
changeEmphasis("viernes de cholo", "https://www.etsy.com/mx/market/cholo_style");


//--------------- Selector universal ----------------
// querySelector: el primer elemento que encuentre cuando le indicas la variable.

const findElementsByQuerySelector = () => {
    const refElements = document.querySelector("p em");
    refElements.innerHTML = `La Ch 26 es bien <strong>chida</strong> y les gusta el 11:11` ;
}
findElementsByQuerySelector();


//------------------------ Crear nuevo elemento -------------------------
// appendChild

const newElement = () => {
    const newElementRef = document.createElement("p"); // <p> </p>

    newElementRef.innerHTML = `La Ch 26 le gusta: 
    <ul>
        <li>El pan de muerto</li>
        <li>El chismesito</li>
        <li>El pozole</li>
        <li>pizza</li>
        <li>El pulque</li>
    </ul>
    `
    const articleRef = document.querySelector("article");
    articleRef.appendChild( newElementRef ); // se agrega el nuevo elemento
    // clonar el nodo anterior
    // const nodoClonado = articleRef.cloneNode(true);
    // document.querySelector("#article-new").appendChild(nodoClonado);
};

newElement();



const changeColor = (color) =>{
    const refIntro = document.getElementById("noticias");
    refIntro.style.color = color;

}

changeColor("red"); 

// Agregar a un elemento un border
// .style.border
// .style.border = "thick solid #0000FF";

const addBorder = () =>{
    const refTitulo = document.getElementById("titulo");
    refTitulo.style.border = "thick solid #0000FF";

}

addBorder( );

// mismo ejercicio solo con color diferente en noticias y en el de arriba es en titulo.
/* const changeBorder = (color) =>{
    const refIntro = document.getElementById("noticias");
    refIntro.style.border = `thick solid ${color}`;

}

changeBorder( "green" ); */


// -------------Propiedades de visualización (desaparecer elementos) ------------------
// display: none (Quitar el elemento del DOM).
// visibility: hidden (Ocultar el elemento).


const quitarBoton = () => {
    const buttonRef = document.getElementById("button-B");
    buttonRef.style.display = "none"; // quitar elemento

};

const ocultarBoton = () => {
    const buttonRef = document.getElementById("button-B");
    buttonRef.style.visibility = "hidden"; // ocultar elemento

};

const reestablecerBoton = () => {
    const buttonRef = document.getElementById("button-B");
    buttonRef.style.visibility = "hidden"; // reestablecer *falta

} 

// otro ejemplo
/*  const quitarBoton= (status) => {
    const buttonRef = document.getElementById("button-B");
    buttonRef.style.display-status; // quitar elemento

};

const ocultarBoton= (status) => {
    const buttonRef = document.getElementById("button-B");
    buttonRef.style.visibility-status; // ocultar elemento

};

const reestablecerBoton = () => {
    quitarBoton(`inline`);
    ocultarBoton(`visible`);

};  */