const leia = require('readline-sync')

let nome = leia.question('Por favor, digite seu nome: ')

let salarioBruto = leia.questionFloat(`Ola, ${nome}` + '! Digite seu Salario Bruto: ')
let adicionalNoturno = leia.questionFloat('Digite seu Adicional Noturno: ');
let horaExtra = leia.questionFloat('Digite as horas extras: ')
let descontos = leia.questionFloat('Digite seu desconto: ');

let salarioLiquido = salarioBruto + adicionalNoturno + (horaExtra * 5 - descontos)

console.log(`\nSalário Líquido: ${salarioLiquido.toFixed(2)}`);