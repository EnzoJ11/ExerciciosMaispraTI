/*A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00.*/
const prompt= require('prompt-sync')()

function calcularEstatisticas() {
    let totalSalario = 0
    let totalFilhos = 0
    let maiorSalario = 0
    let contadorPessoas = 0
    let conatadorSalario350 = 0

    while(true) {
        let salario = parseFloat(prompt("Digite o salario da pessoa (Digite '0' para encerrar): "))
        if(salario === 0) break

        let numeroFilhos = parseInt(prompt("Digite o número de filhos da pessoa: "))

        totalSalario += salario
        totalFilhos += numeroFilhos
        contadorPessoas++

        if(salario > maiorSalario) maiorSalario = salario
        if(salario <= 350) conatadorSalario350++
    }

    return {
        mediaSalario: totalSalario / contadorPessoas,
        mediaFilhos: totalFilhos / contadorPessoas,
        maiorSalario: maiorSalario,
        percentualSalarioAte350: (conatadorSalario350 / contadorPessoas) * 100
    }
}

let estatiscitas = calcularEstatisticas()

console.log(`Média de salário: R$${estatiscitas.mediaSalario.toFixed(2)}`)
console.log(`Média de filhos: ${estatiscitas.mediaFilhos.toFixed(2)}`)
console.log(`Maior salários: R$${estatiscitas.maiorSalario.toFixed(2)}`)
console.log(`Percentual de pessoas com salário até R$350,00: ${estatiscitas.percentualSalarioAte350.toFixed(2)}%`)