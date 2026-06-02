const prompt = require('prompt-sync')();

let idade = parseInt(prompt("Qual é a sua idade? "));
let javascript = prompt("Você sabe JavaScript? (s/n) ");
let python = prompt("Você sabe Python? (s/n) ");

console.log(""); // Linha em branco

// Verificação do currículo
if (idade >= 18 && (javascript.toLowerCase() === "s" || python.toLowerCase() === "s")) {
    console.log("Currículo aceito!");
} else {
    console.log("Currículo recusado.");
}