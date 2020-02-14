(function () {  
    var formulario = document.getElementById('formulario');
    var elementos = formulario.elements;
    var boton = document.getElementById('boton');
    console.log(formulario);
    console.log(elementos);
    console.log(boton);
    
    var validando = function (e) {
        if (formulario.nombre.value == 0) {
            alert("No ingreso un valor");
            e.preventDefault();
        }
    };

    formulario.addEventListener("submit", validando);

}());