console.log("js 07 Api Fetch");
 /*
La Api Fetch nos ayuda a acceder y manipular peticiones HTTP. Proporciona una forma lógica y fácil de obtener recursos de la red de manera ASÍNCRONA.

Sintaxis:
solicitud get

fetch ( url )
  .then()
  .catch();

 */
const url = "https://fakestoreapi.com/products";

const getProducts = ( httpUrl ) =>{    
  
    fetch( httpUrl )
        .then( result => {
            console.log("Respuesta: " + result.status );
            return result.json(); // Conversión de JSON a objeto
        })
        .then ( (productsObj)=> {
            console.log(productsObj)
            // Quiero imprimir solo el titulo de cada producto.
            for (let product of productsObj)
                console.log(product.title);
            
  
        })
        .catch( error=> console.log(error)  );
  
}
  
// getProducts( url );

// ---------------------- Consumir Fetch usando async-await --------------------------
const getProductsWithAwait = async ( httpUrl) => {
    try {
        const productsJson = await fetch( httpUrl) ;
        const products = await productsJson.json(); // Conversión de JSON a objeto
        console.log( products );
        localStorage.setItem("mis-productos", JSON.stringify(products) ) // key, value
                                           // convertir a json
        for(let product of products) console.log( product.title );
        } catch (error) {
        console.log(error);    
        }   
};
    
// getProductsWithAwait( url );

// --------------------Realizar una solicitud POST----------------------

const postUser = ( url, userDate ) => {
    //fetch().then(()=>{}).catch(()=>{})
    fetch(url, {
        method: 'POST', // PUT o DELETE
        body: JSON.stringify(userDate)    , // Datos del usuario
        header: { 'Content-Type': 'application/json' }


    } )
      .then( ( response )=> response.json() )
      .then( ( register )=> console.log( register.createdAt ) ) // si quitamos createdAt nos da todo el objeto completo
      .catch( ( error )=> {console.log(error)} );
}

const user = {
    name: "morpheus",
    job: "leader"
};

const urlPOST = "https://reqres.in/api/users";

postUser(urlPOST, user);
