/*Você recebe um array de objetos representando transações financeiras. Cada
transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.*/

function agruparTransacoesPorCategoria(transacoes) {
    let categorias = {}

    for(let i = 0; i < transacoes.length; i++) {
        let transacao = transacoes[i]

        if(categorias[transacao.categoria] !== undefined) {
            categorias[transacao.categoria].push(transacao)
            categorias[transacao.categoria].subtotal += transacao.valor
        }else {
            categorias[transacao.categoria] = [transacao]
            categorias[transacao.categoria].subtotal = transacao.valor
        }
    }

    return categorias
}

let transacoes = [
    { id: 1, valor: 100, data: "2024-06-01", categoria: "Alimentação" },
    { id: 2, valor: 200, data: "2024-06-02", categoria: "Transporte" },
    { id: 3, valor: 150, data: "2024-06-03", categoria: "Alimentação" },
    { id: 4, valor: 120, data: "2024-06-04", categoria: "Lazer" },
    { id: 5, valor: 180, data: "2024-06-05", categoria: "Alimentação" }
]

console.log("Transações agrupadas por categoria:", agruparTransacoesPorCategoria(transacoes))