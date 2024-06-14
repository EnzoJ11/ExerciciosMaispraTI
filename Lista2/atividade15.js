/*Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados.*/
const prompt= require('prompt-sync')()

let numeros = []

for(let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Digite um número: "))
    numeros.push(numero)
}

console.log("Números pares digitados e suas posições: ")
for(let i = 0; i < numeros.length; i++)
    if(numeros[i] % 2 === 0) {
        console.log(`Número: ${numeros[i]} - Posição: ${i}`)
    }