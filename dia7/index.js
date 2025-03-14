const operacoes = {
  1: { nome: "Soma", simbolo: "+", funcao: (a, b) => a + b },
  2: { nome: "Subtração", simbolo: "-", funcao: (a, b) => a - b },
  3: { nome: "Multiplicação", simbolo: "*", funcao: (a, b) => a * b },
  4: {
    nome: "Divisão",
    simbolo: "/",
    funcao: (a, b) => (b === 0 ? "Erro: Divisão por zero!" : a / b),
  },
};

function obterNumero(mensagem) {
  while (true) {
    const valor = prompt(mensagem);
    if (valor === null) return null;

    const numero = parseFloat(valor);
    if (!isNaN(numero)) return numero;

    alert("Entrada inválida! Digite um número válido.");
  }
}

function calculadora() {
  while (true) {
    const opcao = prompt(
      "Calculadora\nEscolha uma operação:\n" +
        "1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão (/)\n5 - Sair"
    );

    if (opcao === "5" || opcao === null) {
      alert("Até a próxima!");
      break;
    }

    if (!operacoes[opcao]) {
      alert("Opção inválida! Escolha entre 1 e 4.");
      continue;
    }

    const numero1 = obterNumero("Digite o primeiro número:");
    if (numero1 === null) continue;

    const numero2 = obterNumero("Digite o segundo número:");
    if (numero2 === null) continue;

    const { simbolo, funcao } = operacoes[opcao];
    const resultado = funcao(numero1, numero2);

    alert(`${numero1} ${simbolo} ${numero2} = ${resultado}`);
  }
}

calculadora();
