# Desafio | Web Developer Intern


## Sobre o desafio

O desafio consiste na resolução de 3 questões, usando a linguagem JavaScript.

## Interface funcional

Fiz uma simples interface gráfica com cada função implementada.
Usei o Netifly como provedor.  
**Link**: https://aurum-intern-test.netlify.app/

## Setup

Para abrir o projeto, basta clonar o repositório e abrir o arquivo index.html
```
$ git clone https://github.com/thiagoreiss45/aurum-webdev
```

## Questões

### Questão 1
Escreva uma função que receba 2 parâmetros, uma String e um Inteiro. Essa função deve ter como retorno outra String.O objetivo da função é remover os caracteres repetidos consecutivamente e que extrapolam o limite (valor inteiro) passado como segundo parâmetro, ou seja, se o limite for 2, os caracteres podem ser repetidos no máximo duas vezes. Exemplos:  
    a. function removeRepeated("xxxyzzaaayy", 1) => "xyzay"  
    b. function removeRepeated("xxxyzzaaayy", 2) => "xxyzzaayy"  

Resolução: [question_1.js](./src/scripts/question_1.js)

### Questão 2
Escreva uma função que receba 2 parâmetros, uma String e um Inteiro.Essa função deve ter como retorno outra String. O Objetivo da função é substituir o caracter "?" criando uma repetição do caracter que está antes dele o número de vezes do parâmetro Inteiro. Caso o caracter "?" seja o primeiro da String fornecida ele deve repetir o último caracter da String. Exemplos:  
   a. function replaceChar("x?yzza?y?", 1) => "xxyzzaayy"  
  b. function replaceChar("x?yzza?y?", 2) => "xxxyzzaaayyy"  
    c. function replaceChar("?x?yzza?y?", 2) => "yyxxxyzzaaayyy"  

Resolução: [question_2.js](./src/scripts/question_2.js)

### Questão 3 
Escreva uma função que receba 2 Strings. Essa função deve ter como retorno um número. O objetivo da função é ordenar as 2 strings alfabeticamente e extrair de cada uma a maior e a menor letra. Transforme essa letra em um número considerando que o alfabeto é uma sequência numérica e a letra "a" é igual a 1 a letra "b" é igual a 2 e assim sucessivamente. O retorno da função deve ser a soma da multiplicação entre a maior letra da primeira String é a menor letra da segunda String com a multiplicação entre a maior letra da segunda String e a menor letra da primeira String.  

retorno =(maiorLetraString1 menorLetraString2 ) + (maiorLetraString2  menorLetraString1)

* a. function lettersSum("dacb", "gdab") =>  11  
* b. function lettersSum("dcb", "gdab") =>  18  

Resolução: [question_3.js](./src/scripts/question_3.js)
