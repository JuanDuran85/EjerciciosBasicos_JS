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
    limpiarError(nombre);
    if (nombre.value == "") {
        alert("El nombre no puede estar vacio");
        error(nombre)
        return false;
    }
    return true;
}

function validarEdad () {  
    var edad = document.getElementById("edad");
    limpiarError(edad);
    if (edad.value == "") {
        alert("La edad no puede estar vacia");
        error(edad)
        return false;
    }
    return true;
}

function validarTelefono() {  
    var telefono = document.getElementById("telefono");
    if (isNaN(telefono.value)) {
        alert("campo telefono debe ser numerico");
        return false;
    }
    return true;
}

function validaFecha() {
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var ano = document.getElementById("ano").value;

    var fecha = new Date(ano, mes, dia);
    if (isNaN(fecha)) {
        alert("Los campos de la fecha no cumpolen el formato");
        return false;        
    }
    return true;
}

function validarCheck() {  
    var mayor = document.getElementById("mayor");

    if (!mayor.checked) {
        alert("Debes ser mayor de edad");
        return false;        
    }
    return true;
}

function validando(e) {
    if (validarNombre() && validarTelefono() && validaFecha() && validarCheck() && validarEdad() && confirm("Clic en aceptar para enviar")) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}

function error(elemento) {
    elemento.className = "error";
    elemento.focus();
}

function limpiarError(elemento) {
    elemento.className = "";
}