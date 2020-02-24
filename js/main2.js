var arreglo1 = [2,4,32,67,1,6];
console.log(arreglo1);
console.log(arreglo1[2]); //se muestra un valor en especifico del array
console.log(arreglo1.length); //se muestra el largo del array
arreglo1.sort(); //permite ordenar el arreglo en orden 
console.log(arreglo1);
arreglo1.push(245); //agrega un elemento al array en la ultima posicion
console.log(arreglo1);
arreglo1.pop(); //elimina el ultimo elemento del array
console.log(arreglo1);
arreglo1.shift(); //elimina el primer elemento del array
console.log(arreglo1);
var arreglo_slice = arreglo1.slice(2); //elimina la cantidad indica de elementos del array desde el primer termino [0]
console.log(arreglo_slice);
console.log(arreglo1);
var arreglo_splice = arreglo1.splice(3,4); // solo deja lo indicado entre los numeros
console.log(arreglo_splice);