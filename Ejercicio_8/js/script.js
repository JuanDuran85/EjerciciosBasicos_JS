function validar() {
    var validando = true;
    var expresionNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚú\s]+$/;
    var expresionCorreo = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    var inputEmail4, inputPassword4, inputAddress, inputCity, inputState, gridCheck, exampleFormControlTextarea1, formulario;

    inputEmail4 = document.getElementById("inputEmail4");
    inputPassword4 = document.getElementById("inputPassword4");
    inputAddress = document.getElementById("inputAddress");
    inputCity = document.getElementById("inputCity");
    inputState = document.getElementById("inputState");
    gridCheck = document.getElementById("gridCheck");
    exampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1");
    formulario = document.getElementById("formulario");
    
    alert("enviando");
    document.formulario.submit();
}

function reset() {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.value) {
            document.getElementById("formulario").reset();
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
      });
}

window.onload = function () {      
    var botonEnviar, botonLimpiar;
    botonEnviar = formulario.elements.enviar;
    botonLimpiar = document.getElementById("limpiar");

    botonEnviar.onclick = validar;
    botonLimpiar.onclick = reset;
};