
// Codigo Script

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.placeholder)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerText = "Nuevo titulo"; // ECambiar contenido de una etiqueta

let atributo = h1.getAttribute(`class`);
console.log(atributo);

h1.setAttribute(`class`,`titulo2`); // cambia la clase a titulo2
h1.classList.add(`titulo3`); // añade una clase adicional
h1.classList.remove(`titulo2`); // elimina una clase

input.value="grerbb";  // cambiar el valor de un input

// console.log(document.createElement('img')); // agrega imagen en consola

const img = document.createElement('img'); // se crea la imagen
img.setAttribute(`src`, `./images/imagen1.jpg`); // se asigna la imagen a mostar

pid.appendChild(img);  // insertar imagen en otro contenedor existente, tambien se puede usa .append(img)