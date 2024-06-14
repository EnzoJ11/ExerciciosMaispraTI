/*Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados.*/

function contarIguais(A, V) {
    let contador = 0

    for(let i = 0; i < V.length; i++) {
        for(let j = 0; j < V[i].length; j++) {
            if(V[i][j] === A) {
                contador++
            }
        }
    }

    return contador
}

function criarMatrizX(A, V) {
    let X = []

    for(let i = 0; i < V.length; i++) {
        let linha = []
        for(let j = 0; j < V[i].length; j++) {
            if(V[i][j] !== A) {
                linha.push(V[i][j])
            }
        }
        if(linha.length > 0) {
            X.push(linha)
        }
    }

    return X
}


//escreva a matriz V 30x30
let V = [
    [1, 5, 3, 7, 5],
    [5, 2, 9, 5, 4],
    [8, 5, 6, 1, 0],
]

//numero inteiro A
let A = 5
let quantidadeA = contarIguais(A, V)
console.log("Quantidade de valores iguais de A:", A, "na matriz V:", quantidadeA )

let X = criarMatrizX(A, V)
console.log("Matriz X contendo elementos diferentes de", A, ":", X)