/*Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor.*/
const prompt= require('prompt-sync')()

function calcularSoma(vetor) {
    let soma = 0
    for(let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }
    return soma
}

function calcularProduto(vetor) {
    let produto = 1
    for(let i = 0; i < vetor.length; i++) {
        produto *= vetor[i]
    }
    return produto
}

function calcularMedia(vetor) {
    let soma = calcularSoma(vetor)
    return soma / vetor.length
}

function ordenarCrescente(vetor) {
    return vetor.slice().sort((a, b) => a - b)
}

function mostrarVetor(vetor) {
    console.log("Vetor:", vetor)
}

//vetor exemplo, escreva o seu
let vetor = [4, 2, 6, 1, 5, 3]

console.log("Escolha a operação:")
console.log("1 - Soma dos elementos")
console.log("2 - Produto dos elementos")
console.log("3 - Média dos elementos")
console.log("4 - Ordenar os elementos em ordem crescente")
console.log("5 - Mostrar o vetor")

let operacao = parseInt(prompt("Digite o número da operação desejada:"))

switch(operacao) {
    case 1:
        console.log("Soma dos elementos:", calcularSoma(vetor))
        break;
    case 2:
        console.log("Produto dos elementos:", calcularProduto(vetor))
        break;
    case 3:
        console.log("Média dos elementos:", calcularMedia(vetor))
        break;
    case 4:
        console.log("Elementos ordenados em ordem crescente:", ordenarCrescente(vetor))
        break;
    case 5:
        mostrarVetor(vetor)
        break;
    default:
        console.log("Operação inválida.")
}