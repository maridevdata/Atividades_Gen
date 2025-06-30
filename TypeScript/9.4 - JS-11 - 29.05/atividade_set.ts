import leia from 'readline-sync'
let valoresInteiros: number;
const setValoresInteiros: Set<number> = new Set<number>

for (let contador = 1; contador <= 10; contador++){
    valoresInteiros = leia.questionInt("Digite 10 numeros: ");
    setValoresInteiros.add(valoresInteiros);
}

console.log("Numeros digitados: ", setValoresInteiros);