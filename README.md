# Ejercicios Basicos para JS

- Ejercicios básicos de JavaSvript para el curso.

Funciones, metodos y propiedades de JavaScript utilizados en los ejemplos:

* document
* windows
* onload
* getElementById
* onclick
* length
* test(): es un método de RegExp que busca una coincidencia en una cadena de texto y devuelve true ( verdadero ) o false ( falso ).
* isNaN
* onsubmit
* write
* prompt
* preventDefault: cancela el evento si es cancelable, lo que significa que la acción predeterminada que pertenece al evento no ocurrirá.
* checked
* addEventListener
* submit
* exec(): ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
* .elements[] Devuelve un array con todos los input del formulario
* getElementById("idElemento") Devuelve un elemento con un id determinado
* getElementsByTagName("etiqueta") Devuelve un array con elementos de un tipo de etiqueta (input, select, entre otros.)
* getElementsByName("nombre") Devuelve un array con elementos que tienen el mismo nombre (por ejemplo, radiobutton).

## Expresiones Regulares en JavaScript

Las expresiones regulares son patrones utilizados para encontrar una determinada combinación de caracteres dentro de una cadena de texto. En JavaScript, las expresiones regulares también son objetos. Estos patrones se utilizan en los métodos exec y test de RegExp.

Algunos significados de que se pueden encontrar en las expresiones regulares:

    - ^: el emparejamiento se debe realizar desde el principio de la cadena.
    - [A-Z]: cualquier carácter entre la A mayúscula y la Z mayúscula.
    - {1,2}: uno o dos caracteres.
    - \s: un espacio en blanco.
    - \d: un dígito.
    - {4}: cuatro dígitos.
    - \s: un espacio en blanco.
    - ([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]): cualquier carácter entre la B mayúscula y la Z mayúscula, excepto las vocales.
    - {3}: tres caracteres.
    - $: el emparejamiento se debe realizar hasta el final de la cadena.

Ejemplos:

/abc/; verifica que existan las tres letras abc en un string cualquiera. 
/(\d{4})-(\d{2})-(\d{2})/; valida una cadena del tipo "1987-09-11".

- Páginas para Consultar:

* [Validaciones HTML5](https://lenguajehtml.com/p/html/formularios/validaciones-html5).
* [Validaciones con HTML y las Pseudoclases de CSS](https://lenguajecss.com/p/css/selectores/pseudoclases#top).
* [Expresiones Regulares](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions).
* [Expresiones Regulares 2](https://www.arkaitzgarro.com/javascript/capitulo-11.html).
* [Expresiones Regulares 3](https://davidinformatico.com/expresiones-regulares-en-javascript/).
* [Probar expresiones regulares](https://regexr.com/).

