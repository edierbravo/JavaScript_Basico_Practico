# CURSO PRACTICO DE JAVASCRIPT BASICO PARTE 1

En este curso vas a poner en practica los conceptos del curso de [JavaScript Basico](https://github.com/edierbra/JavaScript_Basico) 

Estos conceptos de aplican al curso [JavaScript Basico Practico 2](https://github.com/edierbra/JavaScript_Basico_Practico2)

## Por: Edier Dario Bravo Bravo

# Variables

let: permite cambiar el valor en un futuro, funciona de forma similar a var

const: no permite cambiar la variable despues de haberlas inicializado

```js
// se usa a menudo ` ` en vez de " "
let nombre = "Edier";
const nombre = "Dario";
```

# prompt

Permite mostrar una ventana emergente similar al alerta donde te muestra una pregunta que enviamos y un input para la pregunta.

```js
let resultado = prompt("¿Cuanto es 2 + 2?")

while(resultado != 4){
    resultado = prompt("¿Cuanto es 2 + 2?")
}

alert("Felicitaciones!!");
```

![prompt](https://github.com/edierbra/JavaScript_Basico_Practico/blob/master/images/prompt.png?raw=true)

# Object

Permite sacar las propiedades, valores y mas de un objeto

[Object](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object)

# Leyendo HTML desde JavaScript


Revisar estos enlaces para mas informacion: 

- [document.getElement](https://www.w3schools.com/js/js_htmldom_document.asp)

- [document.querySelector](https://developer.mozilla.org/es/docs/Web/API/Document/querySelector)

Codigo HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulacion de DOM basico</title>
</head>
<body>
    <h1>Manipulacion de DOM basica</h1>

    <p>Esto es un parrafo</p>
    <p class="parrafito">Esto es un parrafo con clase</p>
    <p id="pid">Esto es un parrafo con ID</p>

    <input type="text" placeholder="Escribe algo aqui">

    <script src="./script.js"></script>

</body>
</html>
```

Codigo JS: Se usa los selectores tal cual como en CSS, para esto se usa la funcion `.querySelector`

```js
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
```
# Escribiendo HTML desde JS

**Modificar el contenido de una etiqueta**

**inner**

```js
h1.innerHTML= "Nuevo titulo";
```

Pero se reomienda innerText para evitar ataques

```js
h1.innerText= "Nuevo titulo";
```

**get y set Attribute y mas**

```js
h1.getAttribute(`class`); // obtiene el atributo clase
h1.setAttribute(`class`,`titulo2`); // cambia la clase a titulo2
```

**Modificar clases**

```js
h1.classList.add(`titulo3`); // añade una clase adicional
h1.classList.remove(`titulo2`); // elimina una clase
```

**Cambiar valor del input**

```js
input.value="grerbb";  // cambiar el valor de un input
```

**Agregar nuevos elementos**

```js
console.log(document.createElement('img'));// agrega imagen en consola
```

Pero si deseamos agregarlo a la interfaz: 

```js
const img = document.createElement('img'); // se crea la imagen
img.setAttribute(`src`, `./images/imagen1.jpg`); // se asigna la imagen a mostar

pid.appendChild(img);  // insertar imagen en otro contenedor existente, tambien se puede usa .append(img)
```

# Eventos en JavaScript: interactuando con usuarios

Para ,mas informacion de los [Eventos](https://www.w3schools.com/js/js_events.asp)

**onchange**

Imprimir en consola un texto

```html
<input onchange="console.log(`Cambio el input 2`)" class="calculo2" placeholder="Escribe algo aqui">
```

**onclick**

Imprimir algo en consola cuando se hace click en un boton

```js
<button id="btnCalcular" onclick="console.log(`click del boton`)">Calcular</button>
```

###### Haciendo lo mismo con una funcion JS

Codigo HTML:

```html
<button id="btnCalcular" onclick="btnOnClick()">Calcular</button>
```

Codigo JS:

```js
function btnOnClick(){
    console.log(`click del boton`)
}
```

Si quiero que se haga una suma de dos imputs

```js
const h1 = document.querySelector('h1');
const input1 = document.querySelector('.calculo1');
const input2 = document.querySelector('.calculo2');
const btn = document.querySelector(`#btnCalcular`);

function btnOnClick() {
    console.log(`La suma es: `+ input1.value + input2.value);
}
```

si quiero imprimir el resultado en una etiquetas parrafo hago:

```js
const h1 = document.querySelector('h1');
const input1 = document.querySelector('.calculo1');
const input2 = document.querySelector('.calculo2');
const btn = document.querySelector(`#btnCalcular`);
const resultado = document.querySelector(`#resultado`);

function btnOnClick() {
    let suma = input1.value + input2.value;
    resultado.innerText="El resultado es: "+suma;
}
```

# addEventListener

Permite por asi decirlo agregar un escuchador de eventos a una eqiqueta, lo cual se usa de la siguiente manera en el codigo JS, no olvidar eliminar el evento en HTML:

```js
btn.addEventListener(`click`, btnOnClick); // la funcion btnOnClick va sin parentesis
```

Si se tiene un formulario, este busca su ultimo boton dentro de el y hace un submit, por lo tanto para implementar la suma con un formulario siguiendo el ejemplo anterior seria:

codigo HTML:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulacion de DOM basico</title>
</head>
<body>
    <h1 class="Titulo">Manipulacion de DOM basica</h1>

    <form class="formulario" action="">
        <input type="number" class="calculo1" placeholder="Escribe algo aqui">
        <input type="number" class="calculo2" placeholder="Escribe algo aqui">
        <button id="btnCalcular" >Calcular</button>

        <p id="resultado"></p>
    </form>

    <script src="./script.js"></script>
</body>
</html>
```

Codigo JS:

```js
const h1 = document.querySelector('h1');
const form = document.querySelector(`.formulario`)
const input1 = document.querySelector('.calculo1');
const input2 = document.querySelector('.calculo2');
const btn = document.querySelector(`#btnCalcular`);
const resultado = document.querySelector(`#resultado`);

form.addEventListener(`submit`, sumFormValue);

function sumFormValue() {
    //console.log({event});
    event.preventDefault(); // evita que el formulario tomo el boton como submit
    let suma = input1.value + input2.value;
    resultado.innerText="El resultado es: "+suma;
}
```

###### Si quiero usar el codigo normalmente como estaba anteriormente:

codigo HTML, se le cambia el tipo de boton a `button`:

```html
<button type="button" id="btnCalcular" >Calcular</button>
```

Codigo JS, aplico el `addEventListener` al boton y la funcion de sumar de forma como estaba al principio:

```js
btn.addEventListener(`click`, btnOnClick);

function btnOnClick() {
    let suma = input1.value + input2.value;
    resultado.innerText="El resultado es: "+suma;
}
```
