document.getElementById('soma').onclick = function () {
    let n1 = Number(document.getElementById('numero1').value.trim());
    let n2 = Number(document.getElementById('numero2').value.trim());
    if (!n1) {
        alert("Digite dois números válidos!");
        return;
    }
    if (!n2) {
        alert("Digite dois números válidos!");
        return;
    }
    let resultado = n1 + n2;
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    document.getElementById('resultados').innerHTML = `${resultado}`;
}
document.getElementById('subtracao').onclick = function () {
    let n1 = Number(document.getElementById('numero1').value.trim());
    let n2 = Number(document.getElementById('numero2').value.trim());
    if (!n1) {
        alert("Digite dois números válidos!");
        return;
    }
    if (!n2) {
        alert("Digite dois números válidos!");
        return;
    }
    let resultado = n1 - n2;
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    document.getElementById('resultados').innerHTML = `${resultado}`;
}
document.getElementById('multiplicacao').onclick = function () {
    let n1 = Number(document.getElementById('numero1').value.trim());
    let n2 = Number(document.getElementById('numero2').value.trim());
    if (!n1) {
        alert("Digite dois números válidos!");
        return;
    }
    if (!n2) {
        alert("Digite dois números válidos!");
        return;
    }
    let resultado = n1 * n2;
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    document.getElementById('resultados').innerHTML = `${resultado}`;
}
document.getElementById('divisao').onclick = function () {
    let n1 = Number(document.getElementById('numero1').value.trim());
    let n2 = Number(document.getElementById('numero2').value.trim());
    if (!n1) {
        alert("Digite dois números válidos!");
        return;
    }
    if (!n2) {
        alert("Digite dois números válidos!");
        return;
    }
    let resultado = n1 / n2;
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    document.getElementById('resultados').innerHTML = `${resultado}`;
}