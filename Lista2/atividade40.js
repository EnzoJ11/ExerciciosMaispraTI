/*Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.)*/
const prompt= require('prompt-sync')()

function verificarGanhador(aposta, resultadoOficial) {
    for(let i = 0; i < aposta.length; i++) {
        if(aposta[i] !== resultadoOficial[i]) {
            return false
        }
    }

    return true
}
//pode modificar o resultado para algo diferente
let resultadoOficial = [10, 20, 30, 40, 50]

for(let apostaNumero = 1; apostaNumero <= 50; apostaNumero++) {
    let aposta = []
    for(let i = 0; i < 5; i++) {
        aposta.push(parseInt(prompt(`Digite o número ${i + 1} da aposta ${apostaNumero}:`)))
    }
    if(verificarGanhador(aposta, resultadoOficial)) {
        console.log(`Aposta ${apostaNumero}: Parabéns, você é o GANHADOR!!`)
    }else {
        console.log(`Aposta ${apostaNumero}: Infelizmente você não ganhou.`)
    }
}