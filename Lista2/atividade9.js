/*Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.*/
const prompt= require('prompt-sync')()

let totalHomem = 0
let totalMulher = 0

function dadosFuncionarios() {
    let salario = parseFloat(prompt("Digite o salário do funcionário: "))
    let sexo = prompt("Digite o sexo do funcionário (m/f): ")

    if(sexo === 'm') {
        totalHomem += salario
    } else if(sexo === 'f') {
        totalMulher += salario
    }else {
        console.log("Sexo inválido, digite (m) para masculino ou (f) para feminino")
    }
}

let continuar = true

while(continuar) {
    dadosFuncionarios()
    let resposta = prompt("Deseja inserir mais um funcionário? (s/n)")
    if(resposta !== "s") {
        continuar = false
    }
}

console.log(`Total de salário pago aos homens: R$${totalHomem}`)
console.log(`Total de salário pago as mulheres: R$${totalMulher}`)



