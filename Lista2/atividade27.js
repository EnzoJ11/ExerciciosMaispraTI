/*Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final.*/
const prompt= require('prompt-sync')()

function multiplicarMatriz(matriz, tamanho, valor) {
    let vetorResultado = []

    for(let i = 0; i < tamanho; i++) {
        for(let j = 0; j < tamanho; j++) {
            vetorResultado.push(matriz[i][j] * valor)
        }
    }

    return vetorResultado
}

let matrizM= []
let tamanhoMatriz = 6
let valorA = 3

for(let i = 0; i < tamanhoMatriz; i++) {
    matrizM[i] = []
    for(let j = 0; j < tamanhoMatriz; j++) {
        matrizM[i][j] = parseInt(prompt("Digite o valor para M[" + i + "][" + j + "]: "))
    }
}

let vetorResultado = multiplicarMatriz(matrizM, tamanhoMatriz, valorA)

console.log("Vetor resultado: ")
console.log(vetorResultado)