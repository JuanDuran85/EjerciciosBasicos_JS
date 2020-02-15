function validando() {
    var nombre, apellido, correo, usuario, clave, telefono;

    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("clave").value;
    telefono = document.getElementById("telefono").value;

    if (nombre === "" || apellido === "" || correo === "" || usuario === "" || clave === "" || telefono === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar valores validos',
            footer: 'No puedes dejar las casillas sin valores'
          })
          return false;
    };
}