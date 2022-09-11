# Pequenos Exercícios de JS
Nesse repositório vou adicionar pequenos exercícios de JS que fiz para praticar.

## Exercício 1: média entre dois números

![media](https://user-images.githubusercontent.com/102995291/189529582-efd65ba7-197a-4cb8-8e48-1a1d27cc2d8f.jpg)

### Sobre o exercício:
O usuário deve digitar dois números no prompt e na tela deve aparecer a mensagem: "A média entre os dois números é:" concatenando com a variável da média.

### Explicando o passo-a-passo do exercício:
Para fazer esse exercício criamos duas variáveis, uma para cada número digitado pelo usuário. (numero1 e numero2)
A média foi obtida pela operação: (numero1 + numero2)/2 - é importante lembrar que toda operação entre parênteses é feita primeiro. - O resultado da média também é armazenado por uma variável.

Dentro do html temos um parágrafo onde será inserida a resposta. Esse parágrafo possui uma classe chamada "resposta". Vamos utilizar essa classe para mostrar na tela o resultado.

Criamos uma variável com a frase que aparecerá no parágrafo: "A média entre os dois números é: "





Abaixo vamos selecionar o elemento onde a frase deve aparecer (parágrafo com a classe "resposta"). Para isso utilizamos <b>document.getElementById( )</b>

Para o resultado ser mostrado na tela utilizamos <b>inner.HTML</b> recebendo as duas variáveis: frase do parágrafo + média adquirida.

## Tecnologias Utilizadas:
<div style="display: inline_block"><br>
  <img align="center" alt="Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
</div>

## Observação:
Foi utlizado operador unário antes do prompt para que a variável sempre seja um número
