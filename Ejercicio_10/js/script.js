window.onload = inicio;

function inicio () {

    document.getElementById("enviar").addEventListener('click', validando);
}

function validar_nombre() {

    var nombre = document.getElementById("nombre");
    borrar_error(nombre);
    if (!nombre.checkValidity()) {
        if (nombre.validity.valueMissing) {
            error2(nombre,"Debe ingresar un nombre");
        }
        if (nombre.validity.patternMismatch) {
            error2(nombre,"Debe ingresar un nombre valido entre 2 y 30 caracteres");
        }
        //error(nombre);
        return false;
    };
    return true;
}

function validar_edad() {
    var edad = document.getElementById("edad");
    borrar_error(edad);
    if (!edad.checkValidity()) {
        if(edad.validity.valueMissing) {
            error2(nombre,"Debe ingresar una edad");
        }
        if (edad.validity.rangeOverflow) {
            error2(nombre,"el valor debe ser menor a 100");
        }
        if (edad.validity.rangeUnderflow) {
            error2(nombre,"el valor debe ser mayor o igual a 18");
        }
        //error(edad);
        return false;
    };
    return true;
}

function validar_telefono() {
    var telefono = document.getElementById("telefono");
    borrar_error(telefono);
    if (!telefono.checkValidity()) {
        error(telefono);
        return false;
    };
    return true;
}

function validando (e) {  
    if (validar_nombre() && validar_edad() && validar_telefono() && confirm("Clic para enviar")) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}

function error(elemento) {
    document.getElementById("muestraError").innerHTML = elemento.validationMessage;
    elemento.className = "error";
    elemento.focus();
}

function error2(elemento,mensaje) {
    document.getElementById("muestraError").innerHTML = mensaje;
    elemento.className = "error";
    elemento.focus();
}


function borrar_error () {
    var formulario = document.forms[0];
    for (let index = 0; index < formulario.elements.length; index++) {
        formulario.elements[index].className = "";
    }
}

