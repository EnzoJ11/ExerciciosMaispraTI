/*Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.*/

function contarNegativo(matriz) {
    let vetorC = []
    for(let i = 0; i < matriz.length; i++) {
        let contador = 0
        for(let x = 0; x < matriz[i].length; x++){
            if(matriz[i][x] < 0) {
                contador++
            }
        }
        vetorC.push(contador)
    }
    return vetorC
}

let matrizM = [
    [1, -2 , 3, -4, 5, 6, -7, 8],
    [-1, 2 , -3, 4, 5, -6, 7, 8],
    [1, 2, 3, -4, -5, 6, 7, 8],
    [1, -2, 3, 4, 5, -6, 7, -8],
    [-1, 2, -3, 4, 5, 6, 7, -8],
    [1, 2, 3, 4, 5, 6, 7, 8]
]

let vetorC = contarNegativo(matrizM)
console.log("Vetor C com os elementos negativos em cada linha: ")
console.log(vetorC)