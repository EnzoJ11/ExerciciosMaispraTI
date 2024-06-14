/*Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz.*/
//escrever a matrz 5x5
let matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
]

let somaLinha4 = 0
let somaColuna2 = 0
let somaDiagonal = 0
let somaTodos = 0

for(let i = 0; i < matriz.length; i++) {
    somaLinha4 += matriz[3][i]
    somaColuna2 += matriz[i][1]
    somaDiagonal += matriz[i][i]
    for(let j = 0; j < matriz[0].length; j++) {
        somaTodos += matriz[i][j]
    }
}

console.log("Soma linha 4: " + somaLinha4)
console.log("Soma coluna 2: " + somaColuna2)
console.log("Soma diagonal: " + somaDiagonal)
console.log("Soma todos elementos da matriz: " + somaTodos)
console.log("Matriz")
console.log(matriz)

