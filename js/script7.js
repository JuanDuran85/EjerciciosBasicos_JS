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

var especialidades = [
    {
        Radiologia: 
        {
            paciente1: {
                hora: "11:00",
                especialista: {
                    nombre: "Ignacio",
                    apellido: "Shoulz"
                },
                paciente: {
                    nombre: "Francisca",
                    Apellido: "Roja"
                },
                RUT: {
                    numero: 32435457247,
                },
                prevision: {
                    FONASA: true,
                    ISAPRE: true
                }
            },
            paciente2: {
                hora: "11:00",
                especialista: {
                    nombre: "Ignacio",
                    apellido: "Shoulz"
                },
                paciente: {
                    nombre: "Francisca",
                    Apellido: "Roja"
                },
                RUT: {
                    numero: 32435457247,
                },
                prevision: {
                    FONASA: true,
                    ISAPRE: true
                }
            },
            paciente3: {
                hora: "11:00",
                especialista: {
                    nombre: "Ignacio",
                    apellido: "Shoulz"
                },
                paciente: {
                    nombre: "Francisca",
                    Apellido: "Roja"
                },
                RUT: {
                    numero: 32435457247,
                },
                prevision: {
                    FONASA: true,
                    ISAPRE: true
                }
            }
        }
    },
    {
        Traumatologia: {
            hora: "11:00",
            especialista: {
                nombre: "Ignacio",
                apellido: "Shoulz"
            },
            paciente: {
                nombre: "Francisca",
                Apellido: "Roja"
            },
            RUT: {
                numero: 32435457247,
            },
            prevision: {
                FONASA: true,
                ISAPRE: true
            }
        }
    },
    {
        Dental: {
            hora: "11:00",
            especialista: {
                nombre: "Ignacio",
                apellido: "Shoulz"
            },
            paciente: {
                nombre: "Francisca",
                Apellido: "Roja"
            },
            RUT: {
                numero: 32435457247,
            },
            prevision: {
                FONASA: true,
                ISAPRE: true
            }
        }
    }
]

document.getElementById("muestra1").innerHTML = especialidades[0].Radiologia.paciente1.especialista.nombre;