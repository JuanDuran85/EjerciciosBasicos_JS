var alumnos = [
    {nombre: "Miguel", nota: 5},
    {nombre: "Tatiana", nota: 10},
    {nombre: "Natalia", nota: 8},
    {nombre: "Paola", nota: 9}
];

console.log(alumnos);

console.log(alumnos[1].nota);

var personas = alumnos.forEach(function (lista) {  
    console.log(lista.nombre + " " + lista.nota);
});

var alumnos = alumnos.map(function (variable) {  
    if (variable.nota > 7) {
        console.log(variable.nota);
        variable.aprobado = true;
    }else {
        variable.aprobado = false;
    }
    return variable;
});

console.log(alumnos);

var alumnos = alumnos.map(function (variable) {  
    if (variable.nota > 7) {
        delete variable.nota;
        delete variable.nombre;
        delete variable.aprobado;
    }else {
        variable.aprobado = false;
    }
    console.log(variable)
    return variable;
});

console.log(alumnos);