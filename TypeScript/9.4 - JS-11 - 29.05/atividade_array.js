"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
var numeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
var usuario = readline_sync_1.default.questionInt('Digite um numero inteiro: ');
var indice = numeros.indexOf(usuario); // busca o índice do número digitado pelo usuário
// Se o número for encontrado, o índice será >= 0, caso contrário será -1
if (indice !== -1) {
    console.log("O numero ".concat(usuario, " foi encontrado na posi\u00E7\u00E3o ").concat(indice, "."));
}
else {
    console.log("O numero ".concat(usuario, " n\u00E3o foi encontrado!"));
}
