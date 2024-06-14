/*Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações.*/

function multiplicarLinhaPeloElementoDiagonal(matriz) {
    for(let i = 0; i < matriz.length; i++) {
        let elementoDiagonal = matriz[i][i]
        for(let j = 0;j < matriz[i].length; j++) {
            matriz[i][j] *= elementoDiagonal
        }
    }
}

function exibirMatriz(matriz) {
    for(let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(" "))
    }
}

//preencher com matriz 50x50
let matriz = [
    [1, 2, 3, 1, 5],
    [3, 2, 1, 5, 4],
    [2, 1, 5, 4, 3],
    [4, 3, 3, 3, 2],
    [5, 2, 1, 2, 1],
    [1, 5, 2, 1, 4]
]

for(let i = 0; i < 50; i++){
    let linha = []
    for(let j = 0; j < 50; j++) {
        linha.push(1.5)
    }
    matriz.push
}

multiplicarLinhaPeloElementoDiagonal(matriz)

console.log("Matriz após multiplicação: ")
exibirMatriz(matriz)