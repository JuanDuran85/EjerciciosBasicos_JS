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

* El HTML DOM (Modelo de objeto de documento): El DOM es un estándar W3C (World Wide Web Consortium). El DOM define un estándar para acceder a los documentos:

> "El Modelo de objetos de documento (DOM) del W3C es una plataforma y una interfaz de lenguaje neutral que permite que los programas y los scripts accedan y actualicen dinámicamente el contenido, la estructura y el estilo de un documento".

Por lo tanto, el HTML DOM es un modelo de objetos estándar y una interfaz de programación para HTML. Se define:

  - Los elementos HTML como objetos
  - Las propiedades de todos los elementos HTML.
  - Los métodos para acceder a todos los elementos HTML
  - Los eventos para todos los elementos HTML.

En otras palabras: el HTML DOM es un estándar sobre cómo obtener, cambiar, agregar o eliminar elementos HTML.

Con el modelo de objetos, JavaScript obtiene toda la potencia que necesita para crear HTML dinámico:

1. JavaScript puede cambiar todos los elementos HTML en la página
2. JavaScript puede cambiar todos los atributos HTML en la página
3. JavaScript puede cambiar todos los estilos CSS en la página
4. JavaScript puede eliminar elementos y atributos HTML existentes
5. JavaScript puede agregar nuevos elementos y atributos HTML
6. JavaScript puede reaccionar a todos los eventos HTML existentes en la página
7. JavaScript puede crear nuevos eventos HTML en la página

Un ejemplo de un arbol DOM, seria: 
![](https://www.aprenderaprogramar.com/images/stories/Cursos/CU011/CU01123E_2.png)

El DOM, tiene dos carateristicas principales, las cuales son:
1. **Los Metodos:** los métodos HTML DOM son acciones que puede realizar (en HTML Elements).
2. **Las Propiedaddes:** las propiedades HTML DOM son valores (de elementos HTML) que puede establecer o cambiar.

Se puede acceder al HTML DOM con JavaScript (y con otros lenguajes de programación). Para ellos, es importante indicar que el DOM, **todos los elementos HTML se definen como objetos**. Mientras que la *interfaz* de programación son las propiedades y métodos de cada objeto. Por lo tanto, una *propiedad* es un valor que puede obtener o establecer (como cambiar el contenido de un elemento HTML). Un *método* es una acción que puede realizar (como agregar o eliminar un elemento HTML) y el *objeto* de documento DOM HTML es el propietario de todos los demás objetos en su página web.

* Páginas para Consultar:

  * [Validaciones HTML5](https://lenguajehtml.com/p/html/formularios/validaciones-html5).
  * [Validaciones con HTML y las Pseudoclases de CSS](https://lenguajecss.com/p/css/selectores/pseudoclases#top).
  * [Expresiones Regulares](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions).
  * [Expresiones Regulares 2](https://www.arkaitzgarro.com/javascript/capitulo-11.html).
  * [Expresiones Regulares 3](https://davidinformatico.com/expresiones-regulares-en-javascript/).
  * [Probar expresiones regulares](https://regexr.com/).
