let n1 = document.getElementById('numero1');
let n2 = document.getElementById('numero2');
let resultados = document.getElementById('resultados');

document.getElementById('soma').onclick = function somar() {
    let num1 = Number(n1.value.trim());
    let num2 = Number(n2.value.trim());
    let resultado = num1 + num2;
    resultados.innerText = "Resultado: " + resultado;
}

document.getElementById('subtracao').onclick = function subtrair() {
    let num1 = Number(n1.value.trim());
    let num2 = Number(n2.value.trim());
    let resultado = num1 - num2;
    resultados.innerText = "Resultado: " + resultado;
}

document.getElementById('multiplicacao').onclick = function multiplicar() {
    let num1 = Number(n1.value.trim());
    let num2 = Number(n2.value.trim());
    let resultado = num1 * num2;
    resultados.innerText = "Resultado: " + resultado;
}

document.getElementById('divisao').onclick = function dividir() {
    let num1 = Number(n1.value.trim());
    let num2 = Number(n2.value.trim());
    let resultado = num1 / num2;
    resultados.innerText = "Resultado: " + resultado;
}