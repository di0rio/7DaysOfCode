// Perguntas obrigatórias
const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

// Exibir a mensagem no console
console.log(
  `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`
);

// Exercício opcional
const gosta = prompt(
  `Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`
);

// Verificar a resposta e exibir a mensagem correspondente no console
if (gosta == 1) {
  console.log("Muito bom! Continue estudando e você terá muito sucesso.");
} else if (gosta == 2) {
  console.log("Ahh que pena... Já tentou aprender outras linguagens?");
} else {
  console.log(
    "Você não digitou uma resposta válida. Por favor, responda com 1 para SIM ou 2 para NÃO."
  );
}
