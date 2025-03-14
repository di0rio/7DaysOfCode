const listaDeCompras = {
  frutas: [],
  laticinios: [],
  congelados: [],
  doces: [],
  outros: [],
};

function capitalizar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function temItensNaLista() {
  return Object.values(listaDeCompras).some(
    (categoria) => categoria.length > 0
  );
}

function exibirLista() {
  let mensagem = "Lista de compras:\n";

  for (let categoria in listaDeCompras) {
    if (listaDeCompras[categoria].length > 0) {
      mensagem += `    ${capitalizar(categoria)}: ${listaDeCompras[
        categoria
      ].join(", ")}\n`;
    }
  }

  return mensagem || "A lista de compras está vazia.";
}

function obterTodosItens() {
  return Object.values(listaDeCompras).flat();
}

function encontrarCategoriaDoItem(item) {
  return (
    Object.keys(listaDeCompras).find((categoria) =>
      listaDeCompras[categoria].includes(item)
    ) || null
  );
}

function removerItem(item) {
  const categoria = encontrarCategoriaDoItem(item);
  if (categoria) {
    listaDeCompras[categoria] = listaDeCompras[categoria].filter(
      (i) => i !== item
    );
    return true;
  }
  return false;
}

let continuar = true;

while (continuar) {
  let opcao = prompt(
    `O que deseja fazer?\n1 - Adicionar item\n${
      temItensNaLista() ? "2 - Remover item\n" : ""
    }3 - Encerrar`
  ).trim();

  switch (opcao) {
    case "1":
      let comida = prompt("Qual comida deseja adicionar?").trim();
      if (!comida) {
        alert("Nome inválido! Tente novamente.");
        break;
      }

      let categoria = prompt(
        "Qual a categoria? (frutas, laticinios, congelados, doces, outros)"
      ).toLowerCase();
      if (!listaDeCompras[categoria]) {
        alert(
          `Categoria não reconhecida! ${comida} será adicionado em 'outros'.`
        );
        categoria = "outros";
      }

      listaDeCompras[categoria].push(comida);
      alert(`${comida} foi adicionado à categoria ${categoria}.`);
      break;

    case "2":
      if (!temItensNaLista()) {
        alert("A lista está vazia!");
        break;
      }

      alert(exibirLista());
      let itemRemover = prompt("Qual item deseja remover?").trim();

      if (!itemRemover) {
        alert("Nome inválido! Tente novamente.");
        break;
      }

      if (removerItem(itemRemover)) {
        alert(`${itemRemover} foi removido.`);
      } else {
        alert("Item não encontrado na lista.");
      }
      break;

    case "3":
      continuar = false;
      break;

    default:
      alert("Opção inválida! Tente novamente.");
  }
}

alert(exibirLista());
console.log(exibirLista());
