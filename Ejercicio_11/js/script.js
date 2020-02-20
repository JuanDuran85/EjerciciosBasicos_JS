window.addEventListener("load",iniciando);

function iniciando() {  
    document.getElementById("cambiar_Texto").addEventListener("click",cambia_Texto);
    document.getElementById("cambiar_Clase").addEventListener("click",cambiar_Clase);
    document.getElementById("quitar_Clase").addEventListener("click",quitar_Clase);
}

//funcion para modificar los textos
function cambia_Texto() { 
    //seleccionando con getElementById y cambiando con innerHTML 
    document.getElementById("p1").innerHTML = "párrafo seleccionado con getElementById y cambiando con innerHTML";

    //seleccionando con getElementsByTagName (regresa un array) y cambiando con innerHTML 
    document.getElementsByTagName("p")[1].innerHTML = "párrafo seleccionado con getElementById y cambiando con innerHTML";

    //seleccionando con getElementClassName (regresa un array) y cambiando con innerHTML
    document.getElementsByClassName("parrafo")[0].innerHTML = "párrafo seleccionado con getElementClassName y cambiando con innerHTML";

    //seleccionando con getElementsByName (regresa un array) y cambiando con value
    document.getElementsByName("nombre")[0].value = "Betsi";
    document.getElementsByName("nombre")[1].value = "Bello";

    //seleccionando de padres a hijos
    var padre = document.getElementById("principal");
    console.log(padre);
    var etiquetas_p = padre.getElementsByTagName("p");
    console.log(etiquetas_p);

    document.getElementById("p4").innerHTML = "el cuarto parrafo con el index 3 dentro del id principal es: " + etiquetas_p[3].innerHTML;

    //El método querySelector devuelve el primer elemento que coincide con un selector CSS especificado en el documento.
    document.querySelector("p").style.backgroundColor = "green";

    //El método querySelectorAll devuelve un arreglo de elemento que coincide con un selector CSS especificado en el documento.
    console.log(document.querySelectorAll("p.otra_clase"));
    document.querySelectorAll("p.otra_clase")[1].style.fontSize = 20+"px";
    document.querySelectorAll("p.otra_clase")[1].innerHTML = "Nuevo texto Modificado con querySelectorAll";
    
}

function cambiar_Clase() {
    document.getElementById("entrada1").setAttribute("class","clase_nueva");
    document.getElementById("entrada2").className = "clase_nueva";
}

function quitar_Clase() {
    document.getElementById("p3").setAttribute("class","");
    
    document.getElementById("p4").className = "";
    
    for (let index = 0; index < document.getElementsByTagName("input").length; index++) {
        document.getElementsByTagName("input")[index].className = "";
    }

    //Eliminando una clase en especifico.
    document.getElementById("p2").classList.remove('clase3');
}