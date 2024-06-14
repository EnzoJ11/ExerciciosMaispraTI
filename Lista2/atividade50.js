/*Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
informações. Não é necessário interface gráfica, apenas funcionalidade lógica.

1. Estrutura de Dados:
○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
cidade, quartos totais e quartos disponiveis.
○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
nomeCliente.

2. Funcionalidades:
○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
disponíveis em uma cidade específica.
○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
deve diminuir o número de quartos disponiveis do hotel.
○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
aumentar o número de quartos disponiveis no hotel correspondente.
○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
cliente.

3. Regras de Negócio:
○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
○ As reservas devem ser identificadas por um ID único e associadas a um
único hotel.

4. Desafios Adicionais (Opcionais):
○ Implementar uma função de check-in e check-out que atualize a
disponibilidade de quartos.
○ Gerar relatórios de ocupação para um hotel.
○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
avaliações dentro do objeto do hotel.*/
const prompt= require('prompt-sync')()

let hoteisDisponiveis = []
let reservas = []

//Adicionar Hoteis
function adicionarHotel() {
    let id = parseInt(prompt("Digite o ID do hotel(Número):"))
    let nome = prompt("Digite o nome do hotel:")
    let cidade = prompt("Digite a cidade do hotel:")
    let quartosDisponiveis = parseInt(prompt("Digite a quantidade de quartos disponíveis:"))
    let hotel = { id, nome, cidade, quartosDisponiveis }
    hoteisDisponiveis.push(hotel)
    console.log(`Hotel "${nome}" adicionado com ID ${id}.`)
}

//Buscar Hoteis
function buscarHoteisPorCidade() {
    let cidade = prompt("Digite a cidade para buscar hotéis:")
    let hoteisNaCidade = hoteisDisponiveis.filter(hotel => hotel.cidade === cidade)
    console.log(`Hotéis disponíveis em ${cidade}:`)
    hoteisNaCidade.forEach(hotel => console.log(`${hotel.nome} - Quartos disponíveis: ${hotel.quartosDisponiveis}`))
}

//Fazer reservas
function fazerReserva() {
    let idHotel = parseInt(prompt("Digite o ID do hotel para fazer a reserva:"))
    let nomeCliente = prompt("Digite o nome do cliente:")
    let hotel = hoteisDisponiveis.find(hotel => hotel.id === idHotel)
    if(hotel && hotel.quartosDisponiveis > 0) {
        let reserva = { idReserva: reservas.length + 1, idHotel, nomeCliente }
        reservas.push(reserva)
        hotel.quartosDisponiveis--
        console.log(`Reserva feita para ${nomeCliente} no hotel "${hotel.nome}".`)
    }else {
        console.log(`Desculpe, não há quartos disponíveis neste hotel.`)
    }
}

//Cancelar reservas
function cancelarReserva() {
    let cancelar = prompt("Deseja cancelar uma reserva? (S/N)").toUpperCase()
    if(cancelar === 'S') {
        let idReserva = parseInt(prompt("Digite o ID da reserva para cancelar:"))
        let reservaIndex = reservas.findIndex(reserva => reserva.idReserva === idReserva)
        if(reservaIndex !== -1) {
            let reserva = reservas[reservaIndex]
            let hotel = hoteisDisponiveis.find(hotel => hotel.id === reserva.idHotel)
            if(hotel) {
                reservas.splice(reservaIndex, 1)
                hotel.quartosDisponiveis++
                console.log(`Reserva cancelada para ${reserva.nomeCliente} no hotel "${hotel.nome}".`)
            }
        }else {
            console.log(`Reserva não encontrada.`)
        }
    }else {
        console.log("Operação cancelada.")
    }
}

//Adicionar hotéis até que o usuário decida parar
let continuarAdicionando = true
while(continuarAdicionando) {
    let adicionarOutro = prompt("Deseja adicionar um hotel? (S/N)").toUpperCase()
    if(adicionarOutro === 'S') {
        adicionarHotel()
    }else {
        continuarAdicionando = false
    }
}

//Exibir opções de reserva
let opcaoReserva = prompt("Deseja fazer uma reserva? (S/N)").toUpperCase()
buscarHoteisPorCidade()
if(opcaoReserva === 'S') {
    fazerReserva()
}else {
    console.log("Obrigado por usar nosso sistema de reservas!")
}

cancelarReserva()