/*Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).*/

function jokenpo(jogador1, jogador2) {
    //escolhas válidas
    if (jogador1 !== 'pedra' && jogador1 !== 'papel' && jogador1 !== 'tesoura') {
        console.log('Jogador 1 escolheu uma opção inválida');
        return;
    }
    if (jogador2 !== 'pedra' && jogador2 !== 'papel' && jogador2 !== 'tesoura') {
        console.log('Jogador 2 escolheu uma opção inválida');
        return;
    }

//resultado
    if (jogador1 === jogador2) {
        console.log('Empate!');
    } else if (
        (jogador1 === 'pedra' && jogador2 === 'tesoura') ||
        (jogador1 === 'papel' && jogador2 === 'pedra') ||
        (jogador1 === 'tesoura' && jogador2 === 'papel')
    ) {
        console.log('Jogador 1 ganhou!');
    } else {
        console.log('Jogador 2 ganhou!');
    }
}

//Exemplo para usar, escreva sua escolha e rode o código
let jogador1 = 'pedra';
let jogador2 = 'tesoura';
jokenpo(jogador1, jogador2);