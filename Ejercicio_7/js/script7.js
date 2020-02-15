function validando() {
    var nombre, apellido, correo, usuario, clave, telefono;

    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("clave").value;
    telefono = document.getElementById("telefono").value;

    const expresion = /\w+@\w+\.+[a-z]/;

    if (nombre === "" || apellido === "" || correo === "" || usuario === "" || clave === "" || telefono === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar valores validos',
            footer: 'No puedes dejar las casillas sin valores'
          });
          return false;
    } else if (nombre.length > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar un nombre valido',
            footer: 'El máximo permitido es de 20 caracteres de largo'
          });
          return false;
    } else if (apellido.length > 50) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar un apellido valido',
            footer: 'El máximo permitido es de 50 caracteres de largo'
          });
          return false;
    } else if (correo.length > 100) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar un correo electrónico valido',
            footer: 'El máximo permitido es de 100 caracteres de largo'
          });
          return false;
    } else if (!expresion.test(correo)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar un correo electrónico valido',
            footer: 'El correo elctrónico no es valido'
          });
          return false;
    } else if (usuario.length > 20 || clave.length > 20 ) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar un usuario y/o contraseña valida',
            footer: 'El máximo permitido es de 20 caracteres de largo para ambos parametros'
          });
          return false;
    } else if (telefono.length > 11 || isNaN(telefono)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar un número telefónico valido',
            footer: 'El máximo permitido es de 11 caracteres de largo'
          });
          return false;
    }
}