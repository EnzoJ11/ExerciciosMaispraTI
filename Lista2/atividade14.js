/*Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.*/
const prompt= require('prompt-sync')()
//array para armazenar os nomes
let nomes = []


for(let i = 0; i < 7; i++) {
    let nome = prompt("Digite um nome: ")
    nomes.push(nome)
}

console.log("Lista de nomes na ordem inversa: ")
//ler a lista de nomes de trás para frente começando do ultimo (nomes.length - 1)
for(let i = nomes.length - 1; i >= 0; i--) {
    console.log(nomes[i])
}

