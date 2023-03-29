# CURSO PRACTICO DE JAVASCRIPT BASICO

En este curso vas a poner en practica los conceptos del curso de [JavaScript Basico](https://github.com/edierbra/JavaScript_Basico)

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

