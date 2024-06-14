/*Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.*/

function compactarVetor(vetor) {
    let vetorCompactado = []
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] !== null && vetor[i] >= 0) {
            vetorCompactado.push(vetor[i])
        }
    }
    
    return vetorCompactado;
}

//escreva o vetor de 100 posições
let vetorA = [] 
for(let i = 0; i < 100; i++) {
    vetorA.push(Math.floor(Math.random() * 201) - 100)
}

let vetorB = compactarVetor(vetorA)

console.log("Vetor B compactado:", vetorB)