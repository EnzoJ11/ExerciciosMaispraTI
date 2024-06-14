/*Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número.*/

let exemploObjeto = {
    nome: "Enzo",
    idade: 24,
    email: "enzo@example.com",
    cidade: "Porto Alegre"
}

function contarPropriedadesString(objeto) {
    let contador = 0;

    for (let chave in objeto) {
        if (typeof objeto[chave] === 'string') {
            contador++
        }
    }

    return contador
}

console.log("Número de propriedades do tipo string:", contarPropriedadesString(exemploObjeto))