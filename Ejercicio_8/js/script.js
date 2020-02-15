function validar() {
    alert("enviando");
}

function reset() {
    alert("limpiando");
}

window.onload = function () {      
    var botonEnviar, botonLimpiar;
    botonEnviar = formulario.elements.enviar;
    botonLimpiar = document.getElementById("limpiar");

    botonEnviar.onclick = validar;
    botonLimpiar.onclick = reset;
};