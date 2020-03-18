//alert("saludos desde archivo externo");
//var edad = prompt("Ingresar tu edad",18);
var edad = "18";
console.log("saludos desde archivo externo");
console.log(edad);
console.log(typeof edad);

console.log(edad);

var nombre = "juan Duran";
var colores = ["rojo", "verde", "azul", "blanco", "negro", "violeta", "salmon"];
console.log(Array.isArray(colores));
var verdadero = false;
var objeto = {
  id: 1,
  nombre: "Juan Duran",
  pais: "venezuela",
  edad: 34
};
console.log(typeof objeto);
console.error("error xyz");
//console.table(colores);
//console.table(objeto);

if (Array.isArray(nombre)) {
  console.log("mostrando arreglo");
  console.table(colores);
} else {
  console.log("No es un arreglo");
}

switch (edad) {
  case "34":
    console.log("la persona tiene 34, no tiene riesgo");
    break;
  case "70":
    console.log("tercer edad, persona de alto riesgo");
    break;
  default:
    if (edad >= 18) {
      console.log("mayor de edad");
    } else {
      console.log("menor de edad");
    }
    break;
}

if (edad != 18) {
  console.log("mayor de edad - paga servicio militar obligatorio");
} else {
  console.log("No paga servicio militar");
}

for (let index = 0; index < colores.length; index++) {
  console.log("Valor del color: " + colores[index]);
}

index = 0;
while (index < colores.length) {
  index++;
  console.log("Valor(while) del color: " + colores[index]);
}

var contador = 0;
var contador = contador + 1;
contador += 4; //contador = contador + 4;
contador++;
let tabla = `
    <table>
        <tbody>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
            </tr>
        </tbody>
    </table>`;

let boton = document.getElementById("boton");
console.log(boton);

var etiquetaLi = document.getElementsByTagName("li");
var classNombre = document.getElementsByClassName("clase1");
classNombre[0].innerHTML = "Modificando desde documento JS";
classNombre[1].setAttribute("class", "clase2");

classNombre[2].appendChild(boton);

var imagen = document.getElementsByTagName("img");
console.log(imagen);
imagen[0].setAttribute(
  "src",
  "https://uniwebsidad.com/static/libros/imagenes/ajax/f0401.gif"
);

console.log(classNombre);

boton.addEventListener("click", mostrarCosas);

function mostrarCosas() {
  var mostrar = document.getElementById("mostrar");
  console.log(mostrar);
  index = 0;
  console.log(index);
  do {
    console.log(index);
    console.log("Valor(do) del color: " + colores[index]);
    mostrar.innerHTML += "<p>Valor(do) del color: " + colores[index] + "</p>";
    index++;
  } while (index < colores.length);
};
