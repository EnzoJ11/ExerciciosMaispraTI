/*Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado.*/
const prompt= require('prompt-sync')();

function sorteioNumero() {
    return Math.ceil(Math.random() * 5)
}


const numeroSorteado = sorteioNumero()
let tentativas = 3

console.log("Tente adivinhar um número de 1 a 5, você tem 3 tentativas APENAS: ")

while(tentativas > 0) {
    const palpite = parseInt(prompt("Digite seu palpite: "))

    if (palpite === numeroSorteado) {
         console.log("Parabéns, você acertou o número!!!")
        return
    }else {
        console.log("Que pena... Você errou o número, tente novamente.")
        tentativas --
        console.log(`Você tem ${tentativas} tentativas restantes.`)
     }
}
console.log(`Suas tentativas terminaram o número era ${numeroSorteado}.`)

