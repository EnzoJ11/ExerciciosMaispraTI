/*Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS).*/

let listaFuncionarios = [
    {matricula: 101, nome: "Marcos", salarioBruto: 2500},
    {matricula: 102, nome: "Claudio", salarioBruto: 3000},
    {matricula: 103, nome: "Rogério", salarioBruto: 2000},
    //adicionar mais funcionários se for necessário
]

function calcularINSS(salarioBruto) {
    let descontoINSS = salarioBruto * 0.12; // 12% de desconto

    return descontoINSS;
}

function calcularSalarioLiquido(salarioBruto, deducaoINSS) {
    let salarioLiquido = salarioBruto - deducaoINSS;

    return salarioLiquido;
}

for (let i = 0; i < listaFuncionarios.length; i++) {
    let funcionario = listaFuncionarios[i];
    let deducaoINSS = calcularINSS(funcionario.salarioBruto);
    let salarioLiquido = calcularSalarioLiquido(funcionario.salarioBruto, deducaoINSS);
 
    console.log("Matrícula: " + funcionario.matricula);
    console.log("Nome: " + funcionario.nome);
    console.log("Salário bruto: R$" + funcionario.salarioBruto.toFixed(2));
    console.log("Dedução INSS: R$" + deducaoINSS.toFixed(2));
    console.log("Salário líquido: R$" + salarioLiquido.toFixed(2));
}