/*Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.*/

const prompt= require('prompt-sync')();

let distancia = prompt('Digite a distância desejada para percorrer: ')

if(distancia <= 200){
    console.log('O valor da passagem fica: R$' + (0.5 * distancia))
}else {
    console.log('O valor da passagem fica: R$' + (0.45 * distancia))
}