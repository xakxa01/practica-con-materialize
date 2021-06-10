// Your web app's Firebase configuration


// const auth = firebase.auth();
// const func = firebase.functions();

//registro de usuario
var crearcuenta = document.getElementById('crearcuenta');

crearcuenta.addEventListener('click', () => {

    let email = document.getElementById('email').value;
    let password = document.getElementById('contraseña-2').value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {

        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        M.toast({
            html: 'No pudiste registrarte'
        });

        console.log(errorCode);
        console.log(errorMessage);
    });

});