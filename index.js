
let numero1 = +prompt('Digite um número:');
let numero2 = +prompt('Digite outro número:');

let media = (numero1+numero2)/2;

let resposta = "A média entre os dois números é: ";

document.getElementById("resposta").innerHTML = resposta + media;

