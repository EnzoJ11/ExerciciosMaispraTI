/*Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente.*/
const prompt= require('prompt-sync')()

function lerMatriz() {
    let matriz = []
    for(let i = 0; i < 15; i++) {
        matriz[i] = prompt("Digite os 20 elementos da linha" + (i+1) + ", separados por vírgula: ").split(",").map(Number)
    }
    return matriz
}


function calcularSomaColunas(matriz) {
    let somaColunas = []
    for(let x = 0; x < matriz[0].length; x++) {
        let soma = 0
        for(let i = 0; i < matriz.length; i++) {
            soma += matriz[i][x]
        }
        somaColunas.push(soma)
    }
    return somaColunas
}

let matriz = lerMatriz()

let somaColunas = calcularSomaColunas(matriz)

for(let x = 0; x < somaColunas.length; x++) {
    console.log("Soma da coluna" + (x+1) + ": " + somaColunas[x])
}