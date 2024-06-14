/*Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci.*/

let fibonacci = []

fibonacci[0] = 1
fibonacci[1] = 1

for(let i = 2; i < 15; i++) {
//essa parte é para acessar os dois ultimos números da sequência fibonacci e somar eles
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}

console.log(`Os primeiros 15 números da sequência de Fibonacci são: ${fibonacci} `)
