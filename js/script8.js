window.onload = function () {
    var botonLimpiar = document.getElementById("limpiar");
    var fecha = document.getElementById("fecha");
    var botonRaiz = document.getElementById("raiz");
    var botonMas = document.getElementById("mas");
    var botonIgual = document.getElementById("igual");
    var muestra = document.getElementById("muestra");
    var resultado = document.getElementById("resultado");
    var botonUno = document.getElementById("uno");
    var botonDos = document.getElementById("dos");
    var acc = 0;
    var valor = 1;
    var num1 = 1;
    var num2 = 2;
    var horas = new Date();
    fecha.innerHTML = horas;

    botonLimpiar.onclick = limpiar;
    botonRaiz.onclick = raiz;
    botonMas.onclick = suma;
    botonIgual.onclick = igual;
    botonUno.onclick = uno;
    botonDos.onclick = dos;

function uno () {  
    document.getElementById("num1").value = num1;
}

function dos () {  
    document.getElementById("num1").value = num2;
}    

function limpiar() {
    document.getElementById("num1").value = "";
    muestra.innerHTML = "";
    resultado.innerHTML = "";
}

function suma() {
    var num1 = document.getElementById("num1").value;
    if (num1 == "" || isNaN(num1)) {
        muestra.innerHTML = "<p>No puede dejar el campo vacio / debe ingresar un número</p>";
        setTimeout(() => {
            muestra.innerHTML = "";
        }, 5000);
    } else {
        acc = num1;
        console.log(acc);
        valor = 1;
    }
}

function igual() {
    var num1 = document.getElementById("num1").value;
    if (num1 == "" || isNaN(num1)) {
        muestra.innerHTML = "<p>No puede dejar el campo vacio / debe ingresar un número</p>";
        setTimeout(() => {
            muestra.innerHTML = "";
        }, 5000);
    } else {
        switch (valor) {
            case 1:
                    var acc2 = num1;
                    var suma = parseFloat(acc)+ parseFloat(acc2);
                    resultado.innerHTML = " "+suma;
                    document.getElementById("num1").value = suma;
                break;
            default:
                break;
        }
    }
}

function raiz() {
    var num1 = document.getElementById("num1").value;
    if (num1 == "" || isNaN(num1)) {
        muestra.innerHTML = "<p>No puede dejar el campo vacio / debe ingresar un número</p>";
        setTimeout(() => {
            muestra.innerHTML = "";
        }, 5000);
    } else {
        acc = num1;
        var resultado2 = Math.sqrt(acc);
        resultado.innerHTML = resultado2;
        document.getElementById("num1").value = resultado2;
    }
}
}