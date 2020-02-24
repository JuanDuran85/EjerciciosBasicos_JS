var arreglo1 = [2,4,32,67,1,6];
console.log(arreglo1);
console.log(arreglo1[2]); //se muestra un valor en especifico del array
console.log("-------------length---------------");
console.log(arreglo1.length); //se muestra el largo del array
console.log("-------------sort---------------");
arreglo1.sort(); //permite ordenar el arreglo en orden 
console.log(arreglo1);
console.log("-------------push---------------");
arreglo1.push(245); //agrega un elemento al array en la ultima posicion
console.log(arreglo1);
console.log("-------------pop---------------");
arreglo1.pop(); //elimina el ultimo elemento del array
console.log(arreglo1);
console.log("-------------shift---------------");
arreglo1.shift(); //elimina el primer elemento del array
console.log(arreglo1);
console.log("-------------slice---------------");
var arreglo_slice = arreglo1.slice(2); //elimina la cantidad indica de elementos del array desde el primer termino [0]
console.log(arreglo_slice);
console.log("-------------splice---------------");
console.log(arreglo1);
var arreglo_splice = arreglo1.splice(3,4); // solo deja lo indicado entre los numeros
console.log(arreglo_splice);
console.log("-------------some---------------");
var numbers = [1, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
    console.log(value);
    console.log(index);
    console.log(array);
    return value > 15;
}
console.log("someOver18");
console.log(someOver18);

console.log("-------------for en arreglo---------------");
var frutas, texto, largo, i;
frutas = ["Platano", "Naranja", "Pera","Manzana", "Mango"];
largo = frutas.length;

texto = "<ul>";
for (i = 0; i < largo; i++) {
  texto += "<li>" + frutas[i] + "</li>";
}
texto += "</ul>";
document.getElementById("mostrar_ul").innerHTML = texto;

console.log("-------------forEach en arreglo---------------");
var animales, texto2;
animales = ["Perro", "Gato", "Vaca", "Cabra"];

texto2 = "<ul>";
animales.forEach(funcion1);
texto2 += "</ul>";
document.getElementById("mostrar2_ul").innerHTML = texto2;

function funcion1(value) {
  texto2 += "<li>" + value + "</li>";
};