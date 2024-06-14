/*Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR".*/
const prompt= require('prompt-sync')()

function calcularAcertos(gabarito, respostas) {
    let acertos = 0

    for(let i = 0; i < gabarito.length; i++){
        if(gabarito[i] === respostas[i]) {
            acertos++
        }
    }
    
    return acertos
}

let gabarito = [1, 2, 9, 5, 6, 4, 7, 1, 1, 5, 3, 5, 8]

for(let apostador = 1; apostador <= 100; apostador++) {
    let cartao = Math.floor(Math.random() * 100) + 1

    console.log("Seu número de cartão é: " ,cartao)

    let respostas = []
    for(let i = 0; i < 13; i++) {
        respostas.push(parseInt(prompt("Resposta " + (i + 1) + " do apostador " + cartao + ":")))
    }

    let acertos = calcularAcertos(gabarito, respostas)

    console.log("Apostador do cartao de número " + cartao + " acertou " + acertos + " números.")

    if(acertos === 13) {
        console.log("Parabéns, você foi o GANHADOR!!")
    }
}

