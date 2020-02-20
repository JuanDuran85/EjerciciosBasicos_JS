window.addEventListener("load",iniciando);

function iniciando() {  
    document.getElementById("crear_parrafo").addEventListener("click",crear_parrafo);
    document.getElementById("cear_imagen").addEventListener("click",cear_imagen);
    document.getElementById("borrar_ultimo").addEventListener("click",borrar_ultimo);
    document.getElementById("borrar_primero").addEventListener("click",borrar_primero);
}

function crear_parrafo() {  
    var parrafo_nuevo = document.createElement("p");
    var textoArea = document.getElementById("textoArea");
    var texto_nuevo = document.createTextNode(textoArea.value);
    parrafo_nuevo.appendChild(texto_nuevo);
    parrafo_nuevo.setAttribute("class","nueva_clase");
    var mostrar = document.getElementById("mostrar");
    mostrar.appendChild(parrafo_nuevo);
}

function cear_imagen() {  
    var imagen_nueva = document.createElement("img");
    var direccion = prompt("Por favor ingrese la URL de la imagen que desea agregar", "http://www.domino.com/imagen.jpg");
    imagen_nueva.setAttribute("src",direccion);
    imagen_nueva.setAttribute("class","img_nueva");
    imagen_nueva.setAttribute("alt",prompt("Por favor ingrese el texto alternativo de la imagen","Imagen nueva de ejemplo"));
    var mostrar = document.getElementById("mostrar");
    mostrar.appendChild(imagen_nueva);
}

function borrar_ultimo() {  
    var mostrar = document.getElementById("mostrar");
    var ultimo_hijo = mostrar.lastChild;
    mostrar.removeChild(ultimo_hijo);
}

function borrar_primero() {  
    var mostrar = document.getElementById("mostrar");
    var primer_hijo = mostrar.firstChild;
    mostrar.removeChild(primer_hijo);
}