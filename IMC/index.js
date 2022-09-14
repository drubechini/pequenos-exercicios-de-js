
function calcularIMC() {

    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

    let resultado = document.getElementById('resultado');
    let texto = document.getElementById('texto');

    let formula = peso / (Math.pow(altura, 2));

    resultado.innerHTML = ` O seu IMC é ${formula.toFixed(1)}`;

    if (formula <= 18.5) {
        texto.innerHTML = 'Você está abaixo do peso.';
    } else if (formula > 18.5 && formula <= 24.9) {
        texto.innerHTML = 'O seu peso está normal.';
    } else if (formula >= 25 && formula <= 29.9) {
        texto.innerHTML = 'Você está com sobrepeso.';
    } else if (formula >= 30 && formula <= 39.9) {
        texto.innerHTML = 'Você está com obesidade.';
    }else {
        texto.innerHTML = 'Você está com obesidade grave.';
    }

}






