(function () {  
    var formulario = document.getElementById('formulario');
    var elementos = formulario.elements;
    var boton = document.getElementById('boton');
    var i=0;

    var validando = function (e) {
                
        if (formulario.nombre.value == 0) {
            alert("No ingreso un valor en el Nombre");
            e.preventDefault();
            i++;
        }
        
        if (formulario.correo.value == 0) {
            alert("No ingreso un valor en el Correo");
            e.preventDefault();
            i++;
        }

        if (i  > 0) {
            i=0;
            alert("No se puede enviar el Formulario");
        }else {
            alert("Formulario enviado");
        }
    };

    formulario.addEventListener("submit", validando);

}());