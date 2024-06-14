/*Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS.*/
const prompt= require('prompt-sync')()

function lerHorarios() {
    let horarios = [];
    let i = 0;

    while(i < 5) {
        let horario = prompt("Insira o horário " + (i + 1) + " (HH:MM:SS):");

        horarios.push(horario);
        i++;
    }

    return horarios;
}

let horarios = lerHorarios();

console.log("Horários inseridos:");
for (var i = 0; i < horarios.length; i++) {
    console.log(horarios[i]);
}