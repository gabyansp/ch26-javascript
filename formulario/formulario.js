console.log("Sesión JS06-Formulario");

const refForm = document.forms["registro"];


refForm.addEventListener('submit', (event) =>{
    event.preventDeFault(); // omita las acciones por default
    // console.log(event);
    const email = refForm.elements["inputEmail4"];
    console.log(email.value);
    // Crear el objeto con los datos del formulario
    user = {
        email: refForm.elements["inputEmail4"].value || "sin email",
        password: refForm.elements["inputPassword4"].value,
        checkbox: refForm.elements["gridcheckbox"].checkbox,


    }
    console.log(user);

} );