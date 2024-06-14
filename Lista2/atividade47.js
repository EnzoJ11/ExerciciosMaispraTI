/*Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados.*/

function aplicarFuncaoAoObjeto(objeto, funcao) {
    let novoObjeto = {}

    for(let chave in objeto) {
        novoObjeto[chave] = funcao(objeto[chave])
    }

    return novoObjeto
}

//a funcção nesse caso seria dobrar os valores
function dobrarValor(numero) {
    return numero * 2
}

let objetoEntrada = {
    a: 1,
    b: 2,
    c: 3
}

console.log("Novo objeto com valores dobrados:", aplicarFuncaoAoObjeto(objetoEntrada, dobrarValor))