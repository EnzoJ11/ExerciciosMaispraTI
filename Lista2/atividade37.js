/*Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário.*/
const prompt= require('prompt-sync')()

//escreva o gabarito da prova (Ex:)
let gabarito = ["A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D"]

function contarAcertos(gabarito, respostas) {
    let acertos = 0
    
    for (let i = 0; i < gabarito.length; i++) {
        if (gabarito[i] === respostas[i]) {
            acertos++
        }
    }
    
    return acertos
}

for (let aluno = 1; aluno <= 50; aluno++) {
    let respostasAluno = []
    for (let i = 0; i < 20; i++) {
        respostasAluno.push(prompt("Digite a resposta da questão " + (i + 1) + " do aluno " + aluno + ":"))
    }
    
    let acertos = contarAcertos(gabarito, respostasAluno)
    
    if (acertos >= 12) {
        console.log("Aluno " + aluno + " acertou " + acertos + " questões. APROVADO");
    } else {
        console.log("Aluno " + aluno + " acertou " + acertos + " questões. REPROVADO");
    }
}