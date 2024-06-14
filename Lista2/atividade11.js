/*Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência.*/
const prompt= require('prompt-sync')()

let primeiroTermo = parseInt(prompt("Digite o primeiro termo da PA: "))
let razao = parseInt(prompt("Digite a razão da PA: "))
let numTermos = 10

let soma = 0
for(let i = 0; i < numTermos; i++) {
    let termo = primeiroTermo + i * razao
    console.log("Termo " + (i + 1) + ": " + termo)
    soma += termo
}

console.log(`A soma dos elementos da PA é: ${soma}`)

