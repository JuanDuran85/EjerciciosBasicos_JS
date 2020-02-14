(function () {  
    var formulario = document.getElementById('formulario');
    var elementros = formulario.elements;
    var boton = document.getElementById('boton');

    formulario.addEventListener('submit', validando());
}());