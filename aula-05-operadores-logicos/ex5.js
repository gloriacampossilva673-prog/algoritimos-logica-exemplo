const prompt = require("prompt-sync")();

console.log("... Análise de Empréstimo ...");
console.log("") // Linha em branco

let salario = parseFloat(prompt("Qual o seu salário mensal? R$ "));
let temFiador = prompt("Você possui um afiador? (s/n): ") === "s";
let nomeSujo = prompt("seu nome esta sujo no Serasa? (s/n): ") === "s";
console.log ("") // Linha em branco

// Prioridade 1: não(!nomeSujo)
// Prioridade 2 e 3: agrupamos o 'ou' (||) e depois juntamos com o 'o' (&&)
if (!nomeSujo && (salario > 2000 || temFiador)) {
    console.log("Resultado: Empréstimo APROVADO!");
} else {
    console.log("Resultado: Empréstimo NEGADO.");
}