/*Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade.*/
let pessoa = {
    nome: "Enzo",
    idade: 24
}

console.log("Idade:", pessoa.idade)

pessoa.email = "enzo@example.com"

console.log("Objeto pessoa atualizado:", pessoa)