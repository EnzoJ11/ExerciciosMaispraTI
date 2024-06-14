/*Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.*/

function sumarizarVendasPorVendedor(vendas) {
    let sumario = {}

    for(let i = 0; i < vendas.length; i++) {
        let venda = vendas[i]

        if(sumario[venda.vendedor] !== undefined) {
            sumario[venda.vendedor] += venda.valor
        }else {
            sumario[venda.vendedor] = venda.valor
        }
    }

    return sumario
}

let vendas = [
    { vendedor: "Enzo", valor: 100 },
    { vendedor: "Maria", valor: 150 },
    { vendedor: "Marco", valor: 200 },
    { vendedor: "Maria", valor: 120 },
    { vendedor: "Pedro", valor: 180 }
]

console.log("Sumário de vendas por vendedor:", sumarizarVendasPorVendedor(vendas))