const leia = require('readline-sync');
let numero,soma=0;

do{ 
    numero=leia.questionInt("digite o  numero:");
    if(numero>0){
     soma= soma + numero;
    }
}while(numero != 0); 

console.log("a soma dos numeros positivos é:",soma);