function validarFormaulario() {
    alert("Envió el formulario");
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let correo = document.getElementById("correo");
    let edad = document.getElementById("eddad");
    let mostrar = document.getElementById("mostrar");

    let salida = "<p>Los datos ingresados fueron: "+nombre+" "+apellido+" "+correo+" "+edad+"</p>";
    mostrar.innerHTML = salida;
}