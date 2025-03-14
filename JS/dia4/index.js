const AREAS = {
  FRONTEND: "Front-End",
  BACKEND: "Back-End",
};

const TECNOLOGIAS = {
  [AREAS.FRONTEND]: ["React", "Vue"],
  [AREAS.BACKEND]: ["C#", "Java"],
};

const OPCOES_CARREIRA = {
  ESPECIALIZAR: "1",
  FULLSTACK: "2",
};

const CONTINUAR = "ok";

function iniciarJornada() {
  const area = obterAreaDesenvolvimento();

  if (!area) {
    alert("Programa encerrado.");
    return;
  }

  const linguagem = obterTecnologiaEspecifica(area);

  if (!linguagem) {
    alert("Programa encerrado.");
    return;
  }

  const caminhoCarreira = obterCaminhoCarreira();

  if (!caminhoCarreira) {
    alert("Programa encerrado.");
    return;
  }

  if (caminhoCarreira === OPCOES_CARREIRA.ESPECIALIZAR) {
    alert(
      `Continue se especializando em ${linguagem} para dominar a área de ${area}!`
    );
  } else {
    alert(
      `Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`
    );
  }

  coletarTecnologiasAdicionais();
}

function obterAreaDesenvolvimento() {
  const opcoes = Object.values(AREAS).join(" ou ");
  let tentativas = 0;
  const maxTentativas = 3;

  while (tentativas < maxTentativas) {
    const input = prompt(
      `Você quer seguir para área de ${opcoes}? Digite o nome da área:`
    );

    if (input === null) {
      alert("Operação cancelada pelo usuário.");
      return null;
    }

    const escolha = normalizarEntrada(input);

    if (
      Object.values(AREAS).some((area) => normalizarEntrada(area) === escolha)
    ) {
      return Object.values(AREAS).find(
        (area) => normalizarEntrada(area) === escolha
      );
    } else {
      tentativas++;
      if (tentativas < maxTentativas) {
        alert(`Área inválida! Por favor, digite ${opcoes}.`);
      } else {
        alert(`Você excedeu o número máximo de tentativas (${maxTentativas}).`);
        return null;
      }
    }
  }

  return null;
}

function obterTecnologiaEspecifica(area) {
  const tecnologiasDisponiveis = TECNOLOGIAS[area];
  const opcoes = tecnologiasDisponiveis.join(" ou ");
  let tentativas = 0;
  const maxTentativas = 3;

  while (tentativas < maxTentativas) {
    const input = prompt(`Você quer aprender ${opcoes}?`);

    if (input === null) {
      alert("Operação cancelada pelo usuário.");
      return null;
    }

    const escolha = normalizarEntrada(input);

    if (
      tecnologiasDisponiveis.some((tech) => normalizarEntrada(tech) === escolha)
    ) {
      return tecnologiasDisponiveis.find(
        (tech) => normalizarEntrada(tech) === escolha
      );
    } else {
      tentativas++;
      if (tentativas < maxTentativas) {
        alert(`Opção inválida! Por favor, digite ${opcoes}.`);
      } else {
        alert(`Você excedeu o número máximo de tentativas (${maxTentativas}).`);
        return null;
      }
    }
  }

  return null;
}

function obterCaminhoCarreira() {
  let tentativas = 0;
  const maxTentativas = 3;

  while (tentativas < maxTentativas) {
    const escolha = prompt(
      "Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack"
    );

    if (escolha === null) {
      alert("Operação cancelada pelo usuário.");
      return null;
    }

    if (
      escolha === OPCOES_CARREIRA.ESPECIALIZAR ||
      escolha === OPCOES_CARREIRA.FULLSTACK
    ) {
      return escolha;
    } else {
      tentativas++;
      if (tentativas < maxTentativas) {
        alert("Valor inválido! Por favor, digite 1 ou 2.");
      } else {
        alert(`Você excedeu o número máximo de tentativas (${maxTentativas}).`);
        return null;
      }
    }
  }

  return null;
}

function coletarTecnologiasAdicionais() {
  const tecnologiasAdicionais = [];
  let continuarAdicionando = true;

  while (continuarAdicionando) {
    const input = prompt(
      "Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo."
    );

    if (input === null) {
      alert("Coleta de tecnologias adicionais encerrada.");
      break;
    }

    if (normalizarEntrada(input) === normalizarEntrada(CONTINUAR)) {
      const novaTecnologia = prompt(
        "Qual tecnologia você gostaria de aprender?"
      );

      if (novaTecnologia === null || novaTecnologia.trim() === "") {
        alert("Tecnologia inválida ou operação cancelada.");
        continue;
      }

      tecnologiasAdicionais.push(novaTecnologia);
      exibirComentarioTecnologia(novaTecnologia);
    } else {
      continuarAdicionando = false;
    }
  }

  exibirResumoTecnologias(tecnologiasAdicionais);
}

function exibirComentarioTecnologia(tecnologia) {
  const comentariosEspeciais = {
    javascript:
      "JavaScript é a linguagem da web e uma habilidade essencial para qualquer desenvolvedor!",
    python:
      "Python é excelente para iniciantes e muito usada em ciência de dados e IA!",
    typescript:
      "TypeScript adiciona tipagem estática ao JavaScript, tornando seu código mais seguro!",
    html: "HTML é a base de toda página web, um conhecimento fundamental!",
    css: "CSS transforma suas páginas da web em experiências visuais incríveis!",
    "react native":
      "Com React Native você pode criar apps móveis usando seus conhecimentos de React!",
    "node.js":
      "Node.js permite usar JavaScript no backend, expandindo suas possibilidades!",
    sql: "SQL é fundamental para trabalhar com bancos de dados relacionais!",
  };

  const tecnologiaLowerCase = normalizarEntrada(tecnologia);

  const comentarioEspecial = Object.keys(comentariosEspeciais).find(
    (tech) => normalizarEntrada(tech) === tecnologiaLowerCase
  );

  const comentario = comentarioEspecial
    ? comentariosEspeciais[comentarioEspecial]
    : `${tecnologia} é realmente uma tecnologia muito legal! Ótima escolha!`;

  alert(comentario);
}

function exibirResumoTecnologias(tecnologias) {
  if (tecnologias.length === 0) {
    alert("Você não adicionou tecnologias extras à sua lista de aprendizado.");
    return;
  }

  let mensagem =
    "Resumo das tecnologias adicionais que você gostaria de aprender:\n\n";
  tecnologias.forEach((tech, index) => {
    mensagem += `${index + 1}. ${tech}\n`;
  });

  mensagem +=
    "\nContinue aprendendo e boa sorte na sua jornada de desenvolvimento!";
  alert(mensagem);
}

function normalizarEntrada(texto) {
  if (!texto) return "";
  return texto.trim().toLowerCase();
}

iniciarJornada();
