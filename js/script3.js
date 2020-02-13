/*-------------------------------------------------------
            Ejercicio Básico - Segunda Clase
--------------------------------------------------------*/
            /* Ciclos condicionales y Repetitivos*/
/*--------------------------------------------------------*/

//ciclos switch

var valor = prompt("Ingrese un número del 1 al 5");

switch (valor) {
    case '1':
            document.write("<p>Ingresó el número 1</p>");
            saludos(valor);
        break;
    case '2':
            document.write("<p>Ingresó el número 2</p>");
            saludos(valor);
        break;
    case '3':
            document.write("<p>Ingresó el número 3</p>");
            saludos(valor);
        break;
    case '4':
            document.write("<p>Ingresó el número 4</p>");
            saludos(valor);
        break;
    case '5':
            document.write("<p>Ingresó el número 5</p>");
            saludos(valor);
        break;
    default:
            document.write("No ingreso un número del 1 al 5");
            saludos(valor);
        break;
}


document.write("Valor número: 1 <br>");
document.write("Valor número: 2 <br>");
document.write("Valor número: 3 <br>");
document.write("Valor número: 4 <br>");
document.write("Valor número: 5 <br>");
document.write("Valor número: 6 <br>");
document.write("Valor número: 7 <br>");
document.write("Valor número: 8 <br>");
document.write("Valor número: 9 <br>");
document.write("Valor número: 10 <br>");

//ciclos for

document.write("--------------------------------------- <br>");
var final = 10;
for (let index = 1; index <= final; index++) {
    document.write("Valor número: "+index+"<br>");
}

document.write("--------------------------------------- <br>");
//ciclos while
var num = prompt("Ingrese un numero cualquiera: ");
while (num < 20) {
    document.write("El numero es: "+num+"<br>");
    num++;
}

document.write("--------------------------------------- <br>");
//ciclos Do - while

do {
    var nombre = prompt("Ingresa tu nombre: ");
} while (!nombre);

document.write("El nombre es: "+nombre+"<br>");


document.write("--------------------------------------- <br>");
//funcion

function saludos(valor) {
    var numer34 = numer34 + 5;
    alert("Saludando desde función: "+numer34);
}