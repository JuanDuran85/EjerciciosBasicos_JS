window.addEventListener("load",iniciando);

function iniciando() {  
    document.getElementById("crear_parrafo").addEventListener("click",crear_parrafo);
    document.getElementById("cear_imagen").addEventListener("click",cear_imagen);
    document.getElementById("borrar_ultimo").addEventListener("click",borrar_ultimo);
    document.getElementById("borrar_primero").addEventListener("click",borrar_primero);
    document.getElementById("sustituir").addEventListener("click",sustituir);
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