/*Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados.*/

//matriz M(5,5)
let matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
]

let SL = []
let SC = []

for(let i = 0; i < matriz.length; i++) {
    let somaLinha = 0
    for(let j = 0; j < matriz[i].length; j++) {
        somaLinha += matriz[i][j]
    }
    SL.push(somaLinha)
}

for(let j = 0; j < matriz[0].length; j++) {
    let somaColuna = 0
    for(let i = 0; i < matriz.length; i++) {
        somaColuna += matriz[i][j]
    }
    SC.push(somaColuna)
}

console.log("Matriz: ")
for(let i = 0; i < matriz.length; i++) {
    console.log(matriz[i])
}

console.log("Vetor SL (soma): ")
console.log(SL)
console.log("Vetor SC (soma): ")
console.log(SC)