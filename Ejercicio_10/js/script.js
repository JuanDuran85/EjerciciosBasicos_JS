window.onload = inicio;
console.log("entro");
function inicio () {
    console.log("inicio");
    document.getElementById("enviar").addEventListener('click', validando);
}

function validar_nombre() {
    console.log("nombre");
    var nombre = document.getElementById("nombre");
    borrar_error(nombre);
    if (!nombre.checkValidity()) {
        console.log("entro malo");
        error(nombre);
        return false;
    };
    console.log("nombre bueno");
    return true;
}

function validar_edad() {
    var edad = document.getElementById("edad");
    borrar_error(edad);
    if (!edad.checkValidity()) {
        error(edad);
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
        console.log("todo bien");
        return true;
    } else {
        e.preventDefault();
        console.log("todo mal");
        return false;
    }
}

function error(elemento) {
    console.log("error de validacion");
    document.getElementById("muestraError").innerHTML = elemento.validationMessage;
    elemento.className = "error";
    elemento.focus();
}

function borrar_error () {
    console.log("borrar mensaje");
    var formulario = document.forms[0];
    for (let index = 0; index < formulario.elements.length; index++) {
        formulario.elements[index].className = "";
    }
}

