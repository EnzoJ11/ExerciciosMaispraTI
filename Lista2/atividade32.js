/*Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada.*/

function encontrarMaiorElemento(linha) {
    let maiorElemento = Math.abs(linha[0])//para começar com o primeiro elemento no módulo

    for(let i = 1; i < linha.length; i++) {
        let elementoAtual = linha[i]
        let moduloAtual = elementoAtual < 0 ? -elementoAtual : elementoAtual//calcular o modulo
        if(moduloAtual > maiorElemento) {
            maiorElemento = moduloAtual
        }
    }

    return maiorElemento
}

function dividirPorMaiorElemento(linha, maiorElemento) {
    let linhaModificada = []

    for(let i = 0; i< linha.length; i++) {
        let elementoModificado = (linha[i] / maiorElemento).toFixed(2)
        linhaModificada.push(parseFloat(elementoModificado))
    }

    return linhaModificada
}

function processarMatriz(M) {
    let matrizModificada = []

    for(let i = 0; i < M.length; i++) {
        let linha = M[i]
        let maiorElementoLinha = encontrarMaiorElemento(linha)
        let linhaModificada = dividirPorMaiorElemento(linha, maiorElementoLinha)
        matrizModificada.push(linhaModificada)
    }

    return matrizModificada
}
//Matriz(12,13) valores de exemplo, deve modificar.
let M = [
    [1, -2, 3, 4, -5, 6, 7, -8, 9, 10, -11, 12, 13],
    [14, -15, 16, -17, 18, 19, -20, 21, 22, -23, 24, 25, -26],
]

let matrizModificada = processarMatriz(M)

console.log("Matriz Original: ")
console.log(M)
console.log("Matriz Modificada: ")
console.log(matrizModificada)