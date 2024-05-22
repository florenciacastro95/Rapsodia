/* Registro */

let formulario = document.getElementById("form");

formulario.addEventListener('submit', function(e){

    let nombre = document.getElementById('nombreInput');
    let email = document.getElementById('emailInput');
    let pass = document.getElementById('passInput');
    let tel = document.getElementById('telInput');
    let errors = document.getElementById('errosContainer');
    let errores = '';


    if(nombre.value.length < 6 || nombre.value.length > 10 ){
        errores += `El nombre no es valido, debe tener una longitud entre 6 y 10`
    }


})