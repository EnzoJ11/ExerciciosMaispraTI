/*Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.*/

let dados = {
    nome: "Enzo",
    idade: 24,
    email: "enzo@example.com",
    numeros: [1, 2, 3, 4, 5],
    cores: ["vermelho", "azul", "verde"],
    frutas: ["maçã", "banana", "laranja"]
}

function filtrarArrays(objeto) {
    let novoObjeto = {};
    for(let chave in objeto) {
        if(typeof objeto[chave] === "object" && objeto[chave].length !== undefined) {
            novoObjeto[chave] = objeto[chave]
        }
    }
    return novoObjeto
}

console.log("Novo objeto apenas com as propriedades que são arrays:", filtrarArrays(dados))