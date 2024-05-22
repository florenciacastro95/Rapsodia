/* Registro */

let formulario = document.getElementById("form");

formulario.addEventListener('submit', function(e){

    let nombre = document.getElementById('nombreInput');
    let email = document.getElementById('emailInput');
    let pass = document.getElementById('passInput');
    let confPass = document.getElementById('passConfInput');
    let tel = document.getElementById('telInput');
    
    let errors = document.getElementById('errosContainer');
    let errores = '';

    let expresionNombre = /^[a-z0-9._-]+$/;
    let expresionEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;
    let expresionPass =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/
    let expresionTel = /^\d+$/;
    
    let validacion = true;


    e.preventDefault(); 

    /*VALIDACION CAMPO NOMBRE*/
    if((nombre.value.length < 6 || nombre.value.length > 10) || !expresionNombre.test(nombre.value)){
        errores += `El nombre de usuario no es valido, 
        debe tener una longitud entre 6 y 10 y solo admite guiones, 
        puntos y minúsculas`
        validacion=false;
    }

    /*VALIDACION CAMPO E-MAIL*/
    
    if(!expresionEmail.test(email.value)){
        errores+= `Email inválido`;
        validacion=false;
    }

    /*VALIDACION PASSWORD*/ 

    if((pass.value.length < 8) || !expresionPass.test(pass.value)){
        errores += `Contraseña inválida. La contraseña debe tener 
        mínimo 8 caracteres, y debe contener al menos una mayúscula,
        una minúscula, un número y un símbolo especial`;
        validacion=false;
    }
    
    /*VALIDACION PASSWORD IGUAL A SU CONFIRMACION*/

    if(passConf.value != pass.value){

        errores+=`Las contraseñas no coinciden`;
        validacion=false;
    }

    /*VALIDACION TELEFONO*/

    if((tel.value.length>20 || tel.value.length<11) || !expresionTel.test(tel.value)){
        errores+= `Telefono inválido, solo puede contener números. Longitud máxima de 21
        y longitud mínima de 11`;
        validacion=false;
    }

    if(validacion==false){
        errors.innerHTML=errores;
    }




    


})