/*Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.*/
const prompt= require('prompt-sync')();

let ladoA = parseInt(prompt('Digite o primeiro lado: '))
let ladoB = parseInt(prompt('Digite o segundo lado: '))
let ladoC = parseInt(prompt('Digite o terceiro lado: '))

if(ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoB + ladoA)){
    console.log('As medidas podem formar um triângulo.')
}else {
    console.log('As medidas não podem formar um triângulo.')
}