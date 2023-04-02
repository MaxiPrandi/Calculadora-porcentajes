//traemos los valores desde los imput del HTML
const medida1 = document.querySelector('#valor1');
const medida2 = document.querySelector('#valor2');
let porcentaje = document.querySelector('#total');

//hacemos calculo y mostramos en el imput total
function Calcular () {
     const valor1 = Number(medida1.value);
     const valor2 = Number(medida2.value);
     const calculo = (100 / valor1) * valor2;
     porcentaje.value = calculo;


}
