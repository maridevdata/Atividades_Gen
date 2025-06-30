import leia from "readline-sync";
import { Stack } from "./Stack";

const fila = new Stack<string>();
let opcao = -1;


console.log("\n****************************************");
    console.log("  1 - Adicionar Livro na Pilha");
    console.log("  2 - Listar todos os Livros");
    console.log("  3 - Retirar Livro da Pilha");
    console.log("  0 - Sair");
    console.log("****************************************");

do {
    opcao = leia.questionInt("\nDigite uma opcao: ");

    switch (opcao) {
        case 1: {
        const nome = leia.question("Digite o nome do Livro: ");
        fila.push(nome);

        console.log("\nFila: ");
        fila.printStack();

        console.log("\Livro Adicionado!");
        break;
        }

        case 2:
        fila.printStack();
        break;

        case 3:
        if (fila.isEmpty()) {
            console.log("\nA Pilha esta vazia!");
        } else {
            const chamado = fila.pop();
            console.log("\nFila: ");
            fila.printStack();
            console.log(`\nO Livro ${chamado} foi Chamado!`);
        }
        break;

        case 0:
        console.log("\nPrograma Finalizado!");
        break;

        default:
        console.log("\nOpcao Invalida, tente novamente.");
    }
} while (opcao !== 0);