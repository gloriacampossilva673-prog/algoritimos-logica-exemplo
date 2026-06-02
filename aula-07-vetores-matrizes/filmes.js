// Instalação biblioteca
// npm install prompt-sync

// Importação da biblioteca
const prompt = require('prompt-sync')()

// Criando o vetor (Técnica para guardas informações)
let filmes = []

// Primeira pergunta
console.log('Digite o nome de 5 filmes abaixo:')
console.log('') // Linha em branco

// Laço de repetição para coletar o nome dos filmes
for (let i = 0; i < 5; i++) {
    filmes[i] = prompt(`Digite o nome do ${i + 1}º filme: `)
}

// Exibindo o nome dos filmes
console.log('__________________________________')
console.log('Nomes dos filmes digitados: ')
console.log('')

for (let i = 0; i < 5; i++) {
    console.log(`Ò nome do ${i+1}º filme é: ${filmes[i]}`)
}
