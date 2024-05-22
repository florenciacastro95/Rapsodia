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
    let expresionPass =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,;:])[A-Za-z\d@$!%*?&.,;:]{8,}$/;
    let expresionTel = /^\d+$/;
    
    let validacion = true;


    e.preventDefault(); 

    /*RESETEAR LOS INPUTS CON ERRORES*/

    let limpiarInputs = document.querySelectorAll('.form-input');
    for (let index = 0; index < limpiarInputs.length; index++) {
        limpiarInputs[index].classList.remove('errorInput');
        
    }
    errors.innerHTML=errores;

    /*VALIDACION CAMPO NOMBRE*/
    if((nombre.value.length < 6 || nombre.value.length > 10) || !expresionNombre.test(nombre.value)){
        errores += `El nombre de usuario no es valido <br>`
        validacion=false;
        nombre.classList.add('errorInput');
    }

    /*VALIDACION CAMPO E-MAIL*/
    
    if(!expresionEmail.test(email.value)){
        errores+= `Email inválido <br>`;
        validacion=false;
        email.classList.add('errorInput');
    }

    /*VALIDACION PASSWORD*/ 

    if((pass.value.length < 8) || !expresionPass.test(pass.value)){
        errores += `Contraseña inválida.<br>`;
        validacion=false;
        pass.classList.add('errorInput');
    }
    
    /*VALIDACION PASSWORD IGUAL A SU CONFIRMACION*/

    if(confPass.value != pass.value){

        errores+=`Las contraseñas no coinciden <br>`;
        validacion=false;
        confPass.classList.add('errorInput');
    }

    /*VALIDACION TELEFONO*/

    if((tel.value.length>20 || tel.value.length<11) || !expresionTel.test(tel.value)){
        errores+= `Teléfono inválido <br>`;
        validacion=false;
        tel.classList.add('errorInput');
    }

    if(validacion==false){
        errors.innerHTML=errores;
    }




    


})