/*Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5].*/


function calcularProduto(matrizA, matrizB) {
    if(matrizA.length === 0 || matrizB.length === 0 || matrizA[0].length !== matrizB.length) {
        console.log("A conta não é possível.")
        return
    }

    const produto = []
    for(let i = 0; i < matrizA.length ; i++) {
        produto[i] = []
        for(let j = 0; j < matrizB[0].length; j++) {
            produto[i][j] = 0
        }
    }

    for(let i = 0; i < matrizA.length; i++) {
        for(let j = 0; j < matrizB[0].length; j++) {
            for(let k = 0; k < matrizB.length; k++) {
                produto[i][j] += matrizA[i][k] * matrizB[k][j]
            }
        }
    }

    return produto
}
//colocar matriz para rodar o código
const A = [
    [2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5],
    [3, 4, 5, 6, 7]
]

const B = [
    [1, 2, 1, 2, 1],
    [3, 4, 3, 4, 3],
    [5, 6, 5, 6, 5]
]


const P = calcularProduto(A, B)

if(P) {
    console.log("O calculo do produto P fica: ")
    for(let i = 0; i < P.length; i++) {
        console.log(P[i])
    }
}