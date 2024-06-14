/*Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades.*/

function combinarInventarios(inventarioLojaA, inventarioLojaB) {
    let inventarioComb = {}

    for(let item in inventarioLojaA) {
        if(inventarioComb[item] !== undefined) {
            inventarioComb[item] += inventarioLojaA[item]
        }else {
            inventarioComb[item] = inventarioLojaA[item]
        }
    }

    for(let item in inventarioLojaB) {
        if(inventarioComb[item] !== undefined) {
            inventarioComb[item] += inventarioLojaB[item]
        }else {
            inventarioComb[item] = inventarioLojaB[item]
        }
    }

    return inventarioComb
}

let inventarioLojaA = {
    "camisetas": 50,
    "botas": 30,
    "meias": 100,
    "sapatos": 40
}

let inventarioLojaB = {
    "camisetas": 20,
    "botas": 40,
    "sapatos": 50,
    "jaquetas": 20
}

console.log("Inventário combinado das lojas A e B:", combinarInventarios(inventarioLojaA, inventarioLojaB))