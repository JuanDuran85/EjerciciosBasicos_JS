var formulario = document.getElementById("formulario");
//Cualquiera de estas formas es valida para seleccionar un elemento de un documento, en este caso un formulario con todos sus hijos y nietos.
// var formulario2 = document.forms["formulario"];
// var formulario3 = document.getElementsByTagName("form")[0];
// var formulario4 = document.forms[0];

// para iniciar la lectura despues de cargar el documento
window.onload = inicio;

function inicio(){
    var enviar = document.getElementById("enviar");
    enviar.addEventListener('click', validando);
}

function validarNombre () {  
    var nombre = document.getElementById("nombre");
    if (nombre.value == "") {
        alert("El nombre no puede estar vacio");
        return false;
    }
}