// Importando o módulo
const prompt = require('prompt-sync')();

// Declarando variável
let senha;

// Estrutura repita...até que (do...while)
do {

    // Solicita a senha ao usuário
    senha = prompt('Digite a senha: ');

} while (senha !== '1234');

// Mensagem de acesso liberado
console.log('Acesso permitido!');