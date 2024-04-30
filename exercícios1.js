//Exercício 1: Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.

const prompt = require('prompt-sync')();

// //primeiro criei uma função para fahrenheit
// function celsiusparaFahrenheit(celsius) {
// //pesquisei o calculo e mudei o 1,8 para 9/5
//     let fahrenheit = (celsius * 9/5) + 32
//     return fahrenheit
// }

// //criei uma função para coverter a temperatura 
// function converterTemperatura() {
//     let celsius = parseFloat(prompt("Digite a temperatura em Celsius: "))
//     let fahrenheit = celsiusparaFahrenheit(celsius)
//     console.log("A temperatura em Fahrenheit é: " + fahrenheit)
// }

// //Chama a função para iniciar o processo de conversão
// converterTemperatura()

//Exercício 2: Escreva um algoritmo para ler o número de eleitores de um município, o número de 
//votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
//em relação ao total de eleitores.

// //Entrada: numero de eleitores de um municipio, numero de votos em branco, nulos e válidos
// let eleitores = parseInt(prompt('Digite a quantidade de eleitores: '))
// let brancos = parseInt(prompt('Digite a quantidade de votos brancos: '))
// let percentualVotoBranco
// let nulos = parseInt(prompt('Digite a quantidade de votos nulos: '))
// let percentualVotoNulo
// let validos = parseInt(prompt('Digite a quantidade de votos válidos: '))
// let percentualVotoValido 
// //Processamento: calcular e escrever o percentual que cada um representa em relação ao total de eleitores
// //Cálculo: votos * 100 / eleitores
// if(eleitores < (brancos + nulos + validos)){
//     console.log("Número de votos maior que o de eleitores")
// } else{
//     percentualVotoBranco = (brancos * 100) / eleitores
//     percentualVotoNulo = (nulos * 100) / eleitores
//     percentualVotoValido = (validos * 100) / eleitores
// //Saída
//     console.log(`Percentual de votos em branco: ${percentualVotoBranco}`)
//     console.log(`Percentual de votos nulos: ${percentualVotoNulo}`)
//     console.log(`Percentual de votos válidos: ${percentualVotoValido}`)
// }

//Exercício 3: Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
// // Some 25 ao primeiro inteiro;
// // Triplique o valor do segundo inteiro;
// // Modifique o valor do terceiro inteiro para 12% do valor original;
// // Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou) dos primeiros três inteiros.

// //Entrada: 4 números inteiros
// let num1 = parseInt(prompt('Digite o primeiro número inteiro: '))
// let num2 = parseInt(prompt('Digite o segundo inteiro: '))
// let num3 = parseInt(prompt('Digite o terceiro inteiro: '))
// let num4 = parseInt(prompt('Digite o quarto inteiro: '))
// //Processamento: Some 25 ao primeiro inteiro; Triplique o valor do segundo inteiro; Modifique o valor do terceiro inteiro para 12% do valor original;
// //Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou) dos primeiros três inteiros
// num4 = (num1 + num2 + num3)
// num1 += 25
// num2 *= 3
// num3 = (num3 * 12 / 100)

// //Saída:
// console.log(num1, num2, num3, num4)

//Exercício 4: Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
// calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
// aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
// aprovação).

// //Entrada: nota de duas avaliações de um aluno no semestre
// let nota1 = parseInt(prompt('Digite a primeira nota do semestre: '))
// let nota2 = parseInt(prompt('Digite a segunda nota do semestre: '))
// //Processamento: calcular e escrever a média semestral (considerando 6.0 a nota mínima para aprovação)
// let media = (nota1 + nota2) / 2

// if(media >= 6){
// //Saída: mensagem de PARABENS! você foi aprovado
//     console.log('PARABÉNS! Você foi aprovado')
// }

//Exercício 5: Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
//média calculada seja menor que 6,0

// //Entrada: nota de duas avaliações de um aluno no semestre
// let nota1 = parseInt(prompt('Digite a primeira nota do semestre: '))
// let nota2 = parseInt(prompt('Digite a segunda nota do semestre: '))
// //Processamento: calcular e escrever a média semestral (considerando 6.0 a nota mínima para aprovação)
// let media = (nota1 + nota2) / 2

// if(media >= 6){
// //Saída: mensagem de PARABENS! você foi aprovado
//     console.log('PARABÉNS! Você foi aprovado')
// }else {
//     console.log('Você foi REPROVADO! Estude mais')
// }

//Exercício 6: Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

// //Entrada: ler três valores para os lados do triângulo
// let ladoA = parseInt(prompt('Digite o primeiro lado: '))
// let ladoB = parseInt(prompt('Digite o segundo lado: '))
// let ladoC = parseInt(prompt('Digite o terceiro lado: '))
// //Processamento: verificar se os lados formam um triângulo e especificar qual tipo

// if(ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){
//     if(ladoA === ladoB && ladoB === ladoC){
//         console.log('É um Triângulo Equilátero')
//     }else if(ladoA !== ladoB && ladoB !== ladoC){
//         console.log('É um Triângulo Escaleno')
//     }else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
//         console.log('É um Triangulo Isóceles')
//     }
// }else{
//     console.log('Não é um triângulo')
// }

//Exercício 7: As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.

// //Entrada ler o número de maçãs compradas e definir o preço por maça
// let numeroDeMacas = parseInt(prompt("Digite o número de maçãs compradas:"));

// let precoPorMaca;
// if(numeroDeMacas < 12) {
//     precoPorMaca = 0.30
// } else {
//     precoPorMaca = 0.25
// }

// //Processamento calcular o valor total da compra
// let valorTotal = numeroDeMacas * precoPorMaca

// //Saída escrever o valor total da compra
// console.log("O valor total da compra é R$" + valorTotal)

//Exercício 8: Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//e escreve-los em ordem crescente.

// //Entrada: ler 2 valores
// let num1 = parseInt(prompt("Escreva o primeiro número:"))
// let num2 = parseInt(prompt("Escreva o segundo número: "))

// //Processamento: escreve-los em ordem crescente
// if(num1 !== num2) {
//     if(num1 > num2){
//         console.log(`${num1}, ${num2}`)
//     } else if(num1 < num2){
//         console.log(`${num2}, ${num1}`)
//     }
// } else {
//     console.log("Número inválido!")
// }

//Exercício 9: Escreva um algoritmo que leia o código de origem de um produto e imprima a região
//do mesmo, conforme a tabela abaixo:

// //Entrada: ler o código de origem do produto
// let codigo = parseInt(prompt("Escreva o código: "))

// //Processamento: imprimir a região do mesmo
// if(codigo === 1){
//     console.log("Região Sul")
// } else if(codigo === 2){
//     console.log("Região Norte")
// } else if(codigo === 3){
//     console.log("Região Leste")
// } else if(codigo === 4){
//     console.log("Região Oeste")
// } else if(codigo === 5 || codigo === 6){
//     console.log("Região Nordeste")
// } else if(codigo === 7 || codigo === 8 || codigo === 9){
//     console.log("Região Sudeste")
// } else if(codigo >= 10 && codigo <= 20){
//     console.log("Região Centro-Oeste")
// } else if(codigo >= 25 && codigo <= 50){
//     console.log("Região Nordeste")
// }else{
//     console.log("Produto Importado")
// }

//Exercício 10: Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes

// //Entrada: ler um número inteiro
// let num = parseInt(prompt("Escreva um número inteiro: "))

// //Processamento: escreve-lo 10x na tela
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i}: ${num}`)
// }

//Exercício 11: Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
//cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
//ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
//NEGATIVO.

// let valor = parseInt(prompt("Escreva um valor: "))

// while (valor >= 1){
//     if(valor % 2 === 0){
//         console.log("O número é Par")
//     }else {
//         console.log("O número é Ímpar")
//     }
//     valor = parseInt(prompt("Escreva um valor: "))
// }

//Exercício 12: Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
//divididos por 11, dão resto igual a 5.
 
// //Processamento: gerar números de 1000 a 1999
// for(let i = 1000; i <= 1999; i++){
//    if(i % 11 == 5) {
// //Saída: escrever os que divididos por 11 dão resto = a 5
//     console.log(i)
//    }
// }

//Exercício 13: Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
//calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:

// for (let n = 1; n <= 5; n++){
//     let numero = parseInt(prompt("Digite um número"))
//     for (let i = 1; i <= numero; i++){
//         console.log(`${i} x ${numero} = ${i * numero}`)
//     }
// }

//Exercício 14: Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
//a média aritmética desses números.

//Entrada: receber múmeros decimais até 0
//Processamento: fazer a média aritmética desses números

// let num = parseFloat(prompt("Digite o número decimal: "))
// let soma = 0
// let contador = 0

// while (num !== 0){
//     soma = soma + num
//     contador++
//     num = parseFloat(prompt("Digite o número decimal: "))
// }

// console.log(`A média é: ${soma / contador}`)

//Exercício 15: Fazer um algoritmos para receber um número decimal e o peso de cada número até
//que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
//respectivos.

// //Entrada
// let numero
// let somaNumero = 0
// let peso
// let somaPeso = 0
// let total

// //Processamento

// while (numero != 0) {
//   numero = parseInt(prompt("Insira um número: "))
//   if (numero != 0) {
//     peso = parseFloat(prompt("Insira um peso: "))
//     somaNumero += numero * peso
//     somaPeso += peso
//   }
// }
// total = somaNumero / somaPeso

// //Saída
// console.log(`a média dos números inseridos é: ${total}`)


//Exercício 16: Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
//Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.

// //Entrada
// let contador = 100
// let numerosPrimos = 0

// //Processamento
// while (numerosPrimos <= 50) {
//   let qtdDivisor = 0
//   let divisor = 1
//   while (divisor <= contador) {
//     if (contador % divisor === 0) {
//       qtdDivisor++
//     }

//     divisor++
//   }
//   if (qtdDivisor === 2) {
//     console.log(contador)
//     numerosPrimos++
//   }
//   contador++
// }