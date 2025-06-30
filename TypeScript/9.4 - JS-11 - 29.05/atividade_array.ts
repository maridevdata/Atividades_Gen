import leia from 'readline-sync'
const numeros:number[] = [2,5,1,3,4,9,7,8,10,6];  
const usuario = leia.questionInt('Digite um numero inteiro: ');
const indice = numeros.indexOf(usuario);

if (indice !== -1) {
    console.log(`O numero ${usuario} foi encontrado na posição ${indice}.`);
}
else {
    console.log(`O numero ${usuario} não foi encontrado!`);
}