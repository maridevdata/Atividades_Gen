import leia from "readline-sync";
import { Queue } from "./Queue"

const fila = new Queue<string>();
let opcao = -1;


console.log("\n****************************************");
    console.log("  1 - Adicionar Cliente na Fila");
    console.log("  2 - Listar todos os Clientes");
    console.log("  3 - Retirar Cliente da Fila");
    console.log("  0 - Sair");
    console.log("****************************************");

do {
    opcao = leia.questionInt("\nDigite uma opcao: ");

    switch (opcao) {
        case 1: {
        const nome = leia.question("Digite o nome do Cliente: ");
        fila.enqueue(nome);

        console.log("\nFila: ");
        fila.printQueue();

        console.log("\nCliente Adicionado!");
        break;
        }

        case 2:
        fila.printQueue();
        break;

        case 3:
        if (fila.isEmpty()) {
            console.log("\nA Fila esta vazia!");
        } else {
            const chamado = fila.dequeue();
            console.log("\nFila: ");
            fila.printQueue();
            console.log(`\nO Cliente ${chamado} foi Chamado!`);
        }
        break;

        case 0:
        console.log("\nPrograma Finalizado!");
        break;

        default:
        console.log("\nOpcao Invalida, tente novamente.");
    }
} while (opcao !== 0);