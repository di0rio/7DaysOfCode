const listaDeCompras = {
  frutas: [],
  laticinios: [],
  congelados: [],
  doces: [],
  outros: [],
};

let adicionarMais = true;

while (adicionarMais) {
  const resposta = prompt(
    "Deseja adicionar uma comida na lista de compras? (sim/não)"
  ).toLowerCase();

  if (resposta === "não" || resposta === "nao") {
    adicionarMais = false;
    break;
  }

  if (resposta !== "sim") {
    alert("Resposta inválida. Por favor, responda com 'sim' ou 'não'.");
    continue;
  }

  const comida = prompt("Qual comida você deseja inserir?").toLowerCase();

  const categoria = prompt(
    "Em qual categoria essa comida se encaixa? (frutas, laticinios, congelados, doces, outros)"
  ).toLowerCase();

  if (listaDeCompras[categoria] !== undefined) {
    listaDeCompras[categoria].push(comida);
  } else {
    alert("Categoria não reconhecida. O item será adicionado em 'outros'.");
    listaDeCompras.outros.push(comida);
  }
}

let mensagem = "Lista de compras:\n";

for (let categoria in listaDeCompras) {
  const itens = listaDeCompras[categoria];

  if (itens.length > 0) {
    mensagem += `    ${
      categoria.charAt(0).toUpperCase() + categoria.slice(1)
    }: ${itens.join(", ")}\n`;
  } else {
    mensagem += `    ${
      categoria.charAt(0).toUpperCase() + categoria.slice(1)
    }:\n`;
  }
}

alert(mensagem);
console.log(mensagem);
