const prompt = require("prompt-sync")();

let produto = prompt("O produto está esgotado? (s/n): ");

console.log(""); // Linha em branco

// Verifica se o produto NÃO está esgotado
if (produto.toLowerCase() === "n") {
    console.log("Produto disponível para venda");
    
    // Código de venda
    console.log("Venda realizada com sucesso!");
} else {
    console.log("Por favor, reabasteça o estoque");
}