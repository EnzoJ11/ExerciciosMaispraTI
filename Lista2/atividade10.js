/*Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.*/
const prompt= require('prompt-sync')()

let soma = 0
let menor
let qtdValores = 0
let qtdPares = 0
let continuar

do {
    let numero = parseInt(prompt("Digite um número: "))

    soma += numero
//para ver se o valor é menor que o menor valor armazenado
    if(qtdValores === 0 || numero < menor) {
        menor = numero
    }
//para ver se o número é par
    if(numero % 2 === 0) {
        qtdPares++
    }
//incremento para ver quantos números foram inseridos
    qtdValores++
//comando para continuar adicionando números
    continuar = prompt("Deseja continuar? (Digite s/n)")

}while (continuar === 's')
//para saber a media fazemos a soma dividido pela quantidade dos valores adicionados
let media = soma / qtdValores

console.log(`Soma dos valores: ${soma}`)
console.log(`Menor valor digitado: ${menor}`)
console.log(`Media dos valores digitados: ${media.toFixed(3)}`)
console.log(`Quantidade de valores de pares: ${qtdPares}`)