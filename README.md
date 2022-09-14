# Pequenos Exercícios de JS
Nesse repositório adicionei pequenos exercícios de JS que fiz para praticar. Abaixo coloquei uma pequena explicação de como resolvi cada um.


## Exercício 1: média entre dois números

![media](https://user-images.githubusercontent.com/102995291/190232056-85adfca2-0262-4af7-aff7-5e3ae154b014.gif)

### Sobre o exercício:
O usuário deve digitar dois números no prompt e na tela deve aparecer a mensagem: "A média entre os dois números é:" concatenando com a variável da média.

Para fazer esse exercício criamos duas variáveis, uma para cada número digitado pelo usuário. (numero1 e numero2)
A média foi obtida pela operação: (numero1 + numero2)/2 - é importante lembrar que toda operação entre parênteses é feita primeiro. - O resultado da média também é armazenado por uma variável.

Dentro do html temos um parágrafo onde será inserida a resposta. Esse parágrafo possui uma classe chamada "resposta". Vamos utilizar essa classe para mostrar na tela o resultado.

Criamos uma variável com a frase que aparecerá no parágrafo: "A média entre os dois números é: "

Abaixo vamos selecionar o elemento onde a frase deve aparecer (parágrafo com a classe "resposta"). Para isso utilizamos <b>document.getElementById( )</b>

Para o resultado ser mostrado na tela utilizamos <b>inner.HTML</b> recebendo as duas variáveis: frase do parágrafo + média adquirida.

### Tecnologias Utilizadas:
<div style="display: inline_block"><br>
  <img align="center" alt="Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
</div>

### Observação:
Foi utlizado operador unário antes do prompt para que a variável sempre seja um número

<hr>

## Exercício 2: Conversos de Temperatura (Celsius para Fahrenheit)

![conversor](https://user-images.githubusercontent.com/102995291/189658836-9538266e-7102-48fd-ac3f-f157b4a90879.gif)

### Sobre o exercício:
O usuário deve digitar um número que representa a temperatura em Celsius e receberá a temperatura convertida em Fahrenheit

Sabemos que a fórmula de conversão Celsius para Fahrenheit é: 9/5C + 32 - criamos uma variável para a conversão.
O número digitado pelo usuário também está em uma variável.

Criamos uma função <b>converter( )</b> e utilizamos <b>innerHTML</b> para mostrar o resultado na tela.

### Tecnologias Utilizadas:
<div style="display: inline_block"><br>
  <img align="center" alt="Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
</div>

<hr>

## Exercício 3: Trocando a cor do tema da página

![Trocando Tema](https://user-images.githubusercontent.com/102995291/189661408-cf0c154f-883a-42b1-a7d2-e55593562b43.gif)

### Sobre o exercício
O usuário pode escolher o tema da página clicando nos botões

Na página temos 2 opões de botões: Tema Escuro/Tema Claro. Ao clicar no botão 'Tema Escuro', a página fica com fundo cinza escuro e letras brancas. Se clicar no botão 'Tema Claro' volta ao padrão. 

Para isso, criamos duas funções. A primeira adiciona uma classe <b>.escuro</b> ao body. Utilizamos <b>onclick=" "</b> no botão para acionar essa função.
Da mesma forma foi feito para o tema claro, mas dessa vez a classe <b>.escuro</b> foi retirada.

### Tecnologias Utilizadas:
<div style="display: inline_block"><br>
  <img align="center" alt="Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
</div>

<hr>

## Exercício 4: Calculando IMC (índice de massa corporal)

![IMC](https://user-images.githubusercontent.com/102995291/190229604-f3233377-40d3-4de4-9310-8fbd3677fabc.gif)

O usuário deve inserir o seu peso e altura e clicar em enviar. Na tela deve ser mostrado o valor do IMC e o que significa na classificação (abaixo do peso, normal, sobrepeso, obesidade ou obesidade grave).

Utilizamos a fórmula de IMC: peso / altura x altura. Para calcular a altura x altura, usamos a <b> função Math.pow( ).  </b> Como o resultado calculado pode gerar um decimal, utilizamos a <b>função toFixed( )</b> para deixar apenas 1 número após a vírgula.
Tudo está dentro de uma única função que é acionado com o <b>onclick=" "</b> do botão Enviar.
Peso e altura são variáveis, assim como o resultado e o texto que aparecerá na tela.
Utilizamos <b>if/else</b> para mostrar os diferentes resultados do IMC e sua respectiva classificação.

### Tecnologias Utilizadas:
<div style="display: inline_block"><br>
  <img align="center" alt="Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
</div>
