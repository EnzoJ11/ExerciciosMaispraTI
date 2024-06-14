/*Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
h na -1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.*/

const prompt= require('prompt-sync')();

let velocidade = prompt('Digite a velocidade do carro: ')

if(velocidade > 80){
    console.log('Você passou do limite de velocidade.')

let multa = (velocidade - 80) * 5
console.log(`Sua multa é de ${multa}.`)
} else {
    console.log('Você esta dentro do limite de velocidade.')
}
