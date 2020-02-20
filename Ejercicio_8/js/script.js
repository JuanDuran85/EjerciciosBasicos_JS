function validar() {
    var validando = true;
    var expresionCorreo = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var expresionZip = /^[\d]{2,9}/;
    var expresionCity = /^[a-zA-ZáÁéÉíÍóÓúÚñÑüÜ\s]/;

    var inputEmail4, inputPassword4, inputAddress, inputCity, inputState, gridCheck, exampleFormControlTextarea1, formulario, inputZip;

    inputEmail4 = document.getElementById("inputEmail4");
    inputPassword4 = document.getElementById("inputPassword4");
    inputAddress = document.getElementById("inputAddress");
    inputCity = document.getElementById("inputCity");
    inputState = document.getElementById("inputState");
    inputZip = document.getElementById("inputZip");
    gridCheck = document.getElementById("gridCheck");
    exampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1");
    formulario = document.getElementById("formulario");

    if (!inputEmail4.value) {
        inputEmail4.focus();
        Swal.fire({
            title: 'Debe ingresar un email',
            showClass: {
              popup: 'animated rollIn faster'
            },
            hideClass: {
              popup: 'animated rollOut faster'
            }
          });
        validando = false;
    }else if (!expresionCorreo.exec(inputEmail4.value)) {
        inputEmail4.focus();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong with your email!',
            footer: 'Please, check your email'
          })
        validando = false;
    }else if (!inputPassword4.value) {
        inputPassword4.focus();
        Swal.fire({
            title: 'Debe ingresar un password',
            showClass: {
              popup: 'animated rollIn faster'
            },
            hideClass: {
              popup: 'animated rollOut faster'
            }
          });
        validando = false;
    } else if (!inputAddress.value) {
        inputAddress.focus();
        Swal.fire({
            title: 'Debe ingresar una dirección obligatoriamente',
            showClass: {
              popup: 'animated rollIn faster'
            },
            hideClass: {
              popup: 'animated rollOut faster'
            }
          });
        validando = false;
    } else if (!inputCity.value) {
        inputCity.focus();
        Swal.fire({
            title: 'Debe ingresar una Ciudad obligatoriamente',
            showClass: {
              popup: 'animated rollIn faster'
            },
            hideClass: {
              popup: 'animated rollOut faster'
            }
          });
        validando = false;
    } else if (!expresionCity.exec(inputCity.value)) {
        inputCity.focus();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong with the City!',
            footer: 'Please... Check the City'
          });
        validando = false;
    } else if (inputState.value == "Choose...") {
        inputState.focus();
        Swal.fire({
            title: 'Debe seleccionar cualquiera de lo estados disponibles',
            showClass: {
              popup: 'animated rollIn faster'
            },
            hideClass: {
              popup: 'animated rollOut faster'
            }
          });
        validando = false;
    } else if (!inputZip.value) {
        inputZip.focus();
        Swal.fire({
            title: 'Debe ingresar un Código Zip valido',
            showClass: {
              popup: 'animated rollIn faster'
            },
            hideClass: {
              popup: 'animated rollOut faster'
            }
          });
        validando = false;
    } else if (!expresionZip.test(inputZip.value)) {
        inputZip.focus();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong with the Zip Code!',
            footer: 'Please... Check the Zip Code'
          });
        validando = false;
    } else if (exampleFormControlTextarea1.value == ""){
        exampleFormControlTextarea1.focus();
        Swal.fire({
            title: 'Debe ingresar algun texto en el área indicada',
            showClass: {
              popup: 'animated rollIn faster'
            },
            hideClass: {
              popup: 'animated rollOut faster'
            }
          });
        validando = false;
    } else if (exampleFormControlTextarea1.value.length > 20) {
        exampleFormControlTextarea1.focus();
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El campo de texto no puede tener mas de 20 caracteres!',
          footer: 'Please... Check the Text Area'
        });
        validando = false;
    } else if (!gridCheck.checked) {
        gridCheck.focus();
        Swal.fire({
            title: 'Seleccionar la opcion',
            showClass: {
              popup: 'animated rollIn faster'
            },
            hideClass: {
              popup: 'animated rollOut faster'
            }
          });
        validando = false;
    }

    if (validando) {
        Swal.fire(
            'Muy bien!',
            'El formulario fue enviado con éxito!',
            'success'
          )
        // document.formulario.submit();
        var elemento = document.createElement("P");
        var texto = document.createTextNode("Agregando texto al final del formuladio despues de enviarlo");
        elemento.appendChild(texto);
        document.body.appendChild(elemento);
        document.getElementsByTagName("p")[0].className += "textoNuevo";
    };
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
            document.getElementsByTagName("p")[0].classList.remove("textoNuevo");
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