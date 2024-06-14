/*Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.*/

const prompt= require('prompt-sync')();

let qtdCigarro = prompt('Diga a quantidade de cigarros consumida por dia: ')
let anos = prompt('Diga a quantidade de anos que você fuma: ')

let contaCigarros = qtdCigarro * anos * 365

let minutosPerdidos = contaCigarros * 10

let diasAnos = minutosPerdidos / 60 / 24

console.log(`Você perdeu ${parseInt(diasAnos)} dias para o cigarro nojento.`)