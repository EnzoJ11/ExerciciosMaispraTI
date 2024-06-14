/*Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.*/
const prompt= require('prompt-sync')()

const horasAtividade = parseFloat(prompt("Quantas horas de atividade física você fez no mês? "))

let pontos
let dinheiro

if(horasAtividade <= 10) {
    pontos = horasAtividade * 2
} else if(horasAtividade <= 20) {
//Se o número de horas de atividade física for maior que 10 e menor ou igual a 20, a pessoa ganha 2 pontos por hora pelas primeiras 10 horas e 5 pontos por hora para as horas restantes até 20.    
    pontos = 10 * 2 + (horasAtividade - 10) * 5
} else {
//Se o número de horas de atividade física for maior que 20, a pessoa ganha 2 pontos por hora pelas primeiras 10 horas, 5 pontos por hora para as próximas 10 horas e 10 pontos por hora para as horas restantes    
    pontos = 10 * 2 + 10 * 5 + (horasAtividade - 20) * 10
}
//O valor é encontrado pela conta pontos * R$0,05
dinheiro = pontos * 0.05

console.log(`Você ganhou ${pontos} pontos.`)
console.log(`Seus ${pontos} pontos, valem R$${dinheiro.toFixed(2)} reais.`)