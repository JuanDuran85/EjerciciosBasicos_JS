function validarFormaulario() {
    alert("Envió el formulario");
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let correo = document.getElementById("correo");
    let edad = document.getElementById("edad");
    let mostrar = document.getElementById("mostrar");

    alert("Los datos ingresados fueron: "+nombre.value+" "+apellido.value+" "+correo.value+" "+edad.value);
}