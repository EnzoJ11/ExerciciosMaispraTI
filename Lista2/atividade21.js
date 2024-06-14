/*Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.*/
const prompt= require('prompt-sync')()

function calcularPesoIdeal(altura, sexo) {
    if(sexo === 'masculino') {
        return 72.7 * altura - 58
    }else if(sexo === 'feminino') {
        return 62.1 * altura - 44.7
    }else {
        return "Sexo não reconhecido, favor digitar 'masculino' ou 'feminino'."
    }
}

let altura = parseFloat(prompt("Insira sua altura em metros (ex: 1.70): "))
let sexo = prompt("Insira seu sexo (masculino/feminino): ")

let pesoIdeal = calcularPesoIdeal(altura, sexo)

console.log(`Seu peso ideal seria ${pesoIdeal.toFixed(2)} kg.`)
