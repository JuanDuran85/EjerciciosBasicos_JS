let edad = 20;
var edad2 = 30;
let edad3 = 35;
const edad4 = 40;

const PI = 3.14;
const IC = 0.35;

var modulo = (edad4 % edad);
let suma = edad + edad3;
const resta = edad2 - edad4;

//console.log(modulo);
//console.log(suma);
//console.log(resta);
//console.log(PI);

//console.log("Edad fuera de funcion1: "+edad);

sumaTotal();

function sumaTotal() {
    var PI = 5.14;
    var PI = 3.14;
    //console.log(PI);
    let edad = 50;
    //console.log("Edad dentro de funcion: "+edad);
    var edad6 = 30;
    var suma3 = edad + edad6;
   // console.log("Suma total: "+suma3);
};

//console.log("Edad fuera de funcion2: "+edad);
//console.log(PI);


// esto es un comentario en JavaScript
/* Esto es un comentario en JavaScript */
// para escribir diractamente en un documento HTML se puede utilizar la instrucción:
document.write("<p>Texto desde JavaScript mostrado en el documento HTML</p>");
document.write("<p>Valor de la variable: "+edad+"</p>");
document.write(edad2);
// El document: se refiere al documento HTML, mientras que el write: se refiere a escribir lo que este dentro de los paréntesis. Tambien, se pueden agregar etiquetas de HTML para especificar la estructura del texto que se desea copiar.
document.write("<br>");
var numero = Math.ceil(Math.random()*100);
//console.log("numero");
//console.log(Math.ceil(20.2345667));
//console.log(Math.ceil(20.9345667));
//console.log(Math.floor(20.9345667));
//console.log(Math.floor(20.2345667));
//console.log("numero round");
//console.log(Math.round(20.2345667));
//console.log(Math.round(20.9345667));

//console.log("resultados");
//console.log(numero);
document.write(numero);

//leyendo las etiquetas del documento HTML con JavaScript
var parrafo2 = document.getElementById("parrafo2");
document.write("<br>");
document.write("<p>"+parrafo2.innerHTML+"</p>");
//console.log(parrafo2);

var parrafos_clases = document.getElementsByClassName("parrafo");
document.write("<br>");
document.write("<p>"+parrafos_clases[0].innerHTML+"</p>");
//console.log("parrafos");
//console.log(parrafos_clases[4]);


var muestra = document.getElementById("muestra");
//console.log(muestra);
muestra.innerHTML = "Mensaje de texto desde JavaScript";
muestra.setAttribute("class","claseNueva");

var parrafo3 = document.getElementById("parrafo3");
//console.log(parrafo3);
parrafo3.addEventListener("click", saludo);

function saludo() {
    alert("Hola desde JS");
}

// ----------------------------------------------------------//

var numero2 = document.getElementById("numero").value;

var boton = document.getElementById("validar");
boton.addEventListener("click", validar);

function validar() {
     console.log(numero2);
}









