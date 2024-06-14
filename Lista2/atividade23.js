/*Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos.*/

function criarMatriz() {
    let matriz = []

    for(let i = 0; i < 7; i++) {
        matriz[i] = []
        for(let x = 0; x < 7; x++) {
            matriz[i][x] = 0
        }
    }

    for(let i = 0; i < 7; i++) {
        matriz[i][i] = 1
    }
    return matriz
}

function imprimirMatriz(matriz) {
    for(let i = 0; i < matriz.length; i++) {
//usei o .join (nunca tinha usado) para unir dentro da matriz e criar a diagonal certa
        console.log(matriz[i].join(" "))
    }
}

let matriz = criarMatriz()

console.log("Matriz Identica 7x7: ")
imprimirMatriz(matriz)