"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
var valoresInteiros;
var setValoresInteiros = new Set;
for (var contador = 1; contador <= 10; contador++) {
    valoresInteiros = readline_sync_1.default.questionInt("Digite 10 numeros: ");
    setValoresInteiros.add(valoresInteiros);
}
console.log("Numeros digitados: ", setValoresInteiros);
