/*Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro.*/

let funcionario = {
    nome: "Enzo Janssen",
    cargo: "Estagiário",
    salario: 2000
}

let nomeFuncionario = funcionario.nome
let cargoFuncionario = funcionario.cargo
let salarioFuncionario = funcionario.salario

console.log("Nome do funcionario: " + nomeFuncionario)
console.log("Cargo: " + cargoFuncionario)
console.log("Salário: R$ " + salarioFuncionario.toFixed(2))