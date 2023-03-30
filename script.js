
// Codigo Script

const h1 = document.querySelector('h1');
const form = document.querySelector(`.formulario`)
const input1 = document.querySelector('.calculo1');
const input2 = document.querySelector('.calculo2');
const btn = document.querySelector(`#btnCalcular`);
const resultado = document.querySelector(`#resultado`);

btn.addEventListener(`click`, sumFormValue);

function sumFormValue() {
    let suma = input1.value + input2.value;
    resultado.innerText="El resultado es: "+suma;
}