/*Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias.*/
const prompt= require('prompt-sync')()

let pares = []
let impares = []

for(let i = 0; i < 30; i++){
    let valor = parseInt(prompt("Digite o valor" + (i + 1) + ": "))

    if(valor % 2 === 0) {
        pares.push(valor)
        if(pares.length === 5) {
            console.log("Vetores de pares cheio: ", pares)
            pares = []
        }
    }else {
        impares.push(valor)
        if(impares.length === 5) {
            console.log("Vetores de ímpares cheio: ", impares)
            impares = []
        }
    }
}

if(pares.length > 0) {
    console.log("Vetor de pares: ", pares)
}
if(impares.length > 0) {
    console.log("Vetor de ímpares: ", impares)
}
