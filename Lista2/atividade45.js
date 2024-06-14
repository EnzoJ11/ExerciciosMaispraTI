/*Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array.*/

let arrayStrings = ["a", "b", "c", "a", "b", "a"]

function contarFrequencia(strings) {
    let objetoFrequencia = {}

    for(let i = 0; i < strings.length; i++) {
        let chave = strings[i]

        if(objetoFrequencia[chave] !== undefined) {
            objetoFrequencia[chave]++
        }else {
            objetoFrequencia[chave] = 1
        }
    }

    return objetoFrequencia
}

console.log("Objeto de frequência:", contarFrequencia(arrayStrings))