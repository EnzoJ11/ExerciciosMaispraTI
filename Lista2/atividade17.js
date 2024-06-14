/*Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.*/
const prompt= require('prompt-sync')()

let nomes = []
let idades = []

for(let i = 0; i < 9; i++){
    let nome = prompt("Digite um nome: ")
    let idade = parseInt(prompt(`Digite a sua idade ${nome}: `))

    nomes.push(nome)
    idades.push(idade)
}

console.log("Pessoas menores de idade: ")
for(let i = 0; i < idades.length; i ++) {
    if(idades[i] < 18) {
        console.log(`Nome: ${nomes[i]} - Idade: ${idades[i]}`)
    }
}
