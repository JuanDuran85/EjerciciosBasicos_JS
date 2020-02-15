/*-------------------------------------------------------
            Ejercicio Básico - Segunda Clase
--------------------------------------------------------*/
            /* Ciclos condicionales con IF-ELSE*/
/*--------------------------------------------------------*/       
var numero1 = 20;
var numero2 = 25.5;
var numero3 = -15;

var nombre = "pedro ";
var nombre2 = "maria";

var nombre3 = prompt("Ingrese tu nombre", "nombre del usuario");

if (nombre3 == "pedro") {
    document.write("<p>Nombre de pedro</p>");
} else {
    document.write("<p>No es pedro</p>");
}


var resultado = numero1 - numero3;
            
document.write("<p>El resultado es: "+resultado+"</p>");

if (numero2 >= resultado) {
    alert("numero1 mayor que resultado");
} else if (numero3 > resultado) {
    document.write("<p>El numero 2 no es mayor que el resultado</p>");
} else if (numero2 != numero1){
    document.write("resultado cualquiera");
} else {
    alert("resultado 22222");
}
