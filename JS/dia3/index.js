const AREAS = {
  FRONT_END: "front-end",
  BACK_END: "back-end",
};

const TECNOLOGIAS_FRONTEND = {
  REACT: "react",
  VUE: "vue",
};

const TECNOLOGIAS_BACKEND = {
  CSHARP: "c#",
  JAVA: "java",
};

const CAMINHOS_CARREIRA = {
  ESPECIALIZAR: "especializar",
  FULLSTACK: "fullstack",
};

const CONTINUAR = "ok";

function iniciarJogo() {
  saudarUsuario();

  const areaEscolhida = obterAreaDesenvolvimento();
  const tecnologiaEscolhida = obterTecnologiaEspecifica(areaEscolhida);
  const caminhoCarreira = obterCaminhoCarreira(tecnologiaEscolhida);
  const tecnologiasAdicionais = obterListaTecnologiasAdicionais();

  exibirResumoFinal(
    areaEscolhida,
    tecnologiaEscolhida,
    caminhoCarreira,
    tecnologiasAdicionais
  );
}

function saudarUsuario() {
  alert("Bem-vindo ao Jogo de Carreira em Desenvolvimento!");
  alert(
    "Vamos ajudar você a decidir qual caminho seguir no mundo da programação!"
  );
}

function obterAreaDesenvolvimento() {
  const resposta = prompt(
    "Você quer seguir para a área de Front-End ou Back-End? (Digite 'Front-End' ou 'Back-End')"
  )
    .trim()
    .toLowerCase();

  if (resposta === AREAS.FRONT_END || resposta === AREAS.BACK_END) {
    return resposta;
  }

  alert(
    "Opção não reconhecida. Vamos considerar que você está interessado em ambas áreas."
  );
  return "desenvolvimento geral";
}

function obterTecnologiaEspecifica(area) {
  switch (area) {
    case AREAS.FRONT_END:
      return obterTecnologiaFrontEnd();
    case AREAS.BACK_END:
      return obterTecnologiaBackEnd();
    default:
      return "desenvolvimento de software";
  }
}

function obterTecnologiaFrontEnd() {
  const escolha = prompt(
    "Você quer aprender React ou Vue? (Digite 'React' ou 'Vue')"
  )
    .trim()
    .toLowerCase();

  switch (escolha) {
    case TECNOLOGIAS_FRONTEND.REACT:
      alert(
        "Ótima escolha! React é uma biblioteca poderosa mantida pelo Facebook e muito popular no mercado!"
      );
      return "react";
    case TECNOLOGIAS_FRONTEND.VUE:
      alert(
        "Excelente! Vue é um framework progressivo que tem ganhado muita popularidade pela sua simplicidade e flexibilidade!"
      );
      return "vue";
    default:
      alert(
        "Opção não reconhecida. Vamos considerar que você ainda está decidindo."
      );
      return "tecnologias de Front-End";
  }
}

function obterTecnologiaBackEnd() {
  const escolha = prompt(
    "Você quer aprender C# ou Java? (Digite 'C#' ou 'Java')"
  )
    .trim()
    .toLowerCase();

  switch (escolha) {
    case TECNOLOGIAS_BACKEND.CSHARP:
      alert(
        "C# é uma excelente linguagem desenvolvida pela Microsoft, muito usada no desenvolvimento de aplicações empresariais!"
      );
      return "c#";
    case TECNOLOGIAS_BACKEND.JAVA:
      alert(
        "Java é uma das linguagens mais utilizadas no mundo, conhecida por sua portabilidade e robustez!"
      );
      return "java";
    default:
      alert(
        "Opção não reconhecida. Vamos considerar que você ainda está decidindo."
      );
      return "tecnologias de Back-End";
  }
}

function obterCaminhoCarreira(tecnologia) {
  const escolha = prompt(
    `Você quer seguir se especializando em ${tecnologia} ou se desenvolver para se tornar Fullstack? (Digite 'Especializar' ou 'Fullstack')`
  )
    .trim()
    .toLowerCase();

  switch (escolha) {
    case CAMINHOS_CARREIRA.ESPECIALIZAR:
      alert(
        `Ótimo! A especialização em ${tecnologia} vai te permitir se tornar um expert nessa tecnologia!`
      );
      return "especialização";
    case CAMINHOS_CARREIRA.FULLSTACK:
      alert(
        `Legal! Ser Fullstack te dará uma visão completa do desenvolvimento, combinando ${tecnologia} com outras tecnologias!`
      );
      return "fullstack";
    default:
      alert(
        "Opção não reconhecida. Qualquer caminho que escolher será uma jornada interessante!"
      );
      return "indefinido";
  }
}

function obterListaTecnologiasAdicionais() {
  alert(
    "Agora, vamos criar sua lista personalizada de tecnologias para aprender!"
  );
  const tecnologias = [];
  let continuarAdicionando;

  do {
    const novaTecnologia = prompt(
      "Digite o nome de uma tecnologia que você gostaria de aprender:"
    ).trim();

    if (novaTecnologia) {
      tecnologias.push(novaTecnologia.toLowerCase());
      exibirComentarioSobreTecnologia(novaTecnologia);
    }

    continuarAdicionando =
      prompt(
        "Tem mais alguma tecnologia que você gostaria de aprender? (Digite 'ok' para continuar ou qualquer outra coisa para finalizar)"
      )
        .trim()
        .toLowerCase() === CONTINUAR;
  } while (continuarAdicionando);

  return tecnologias;
}

function exibirComentarioSobreTecnologia(tecnologia) {
  const comentarios = {
    javascript:
      "JavaScript é a linguagem da web! Essencial para qualquer desenvolvedor web moderno.",
    python:
      "Python é fantástica para iniciantes e profissionais, usada em IA, ciência de dados e muito mais!",
    php: "PHP é amplamente utilizada para desenvolvimento web e alimenta grandes sites como Facebook e WordPress.",
  };

  alert(
    comentarios[tecnologia.toLowerCase()] ||
      `${tecnologia} é uma ótima escolha para adicionar ao seu arsenal de conhecimentos!`
  );
}

function exibirResumoFinal(area, tecnologia, carreira, listaTecnologias) {
  let mensagem = `Resumo do seu caminho de aprendizado:\nÁrea principal: ${area}\nTecnologia específica: ${tecnologia}\nDireção de carreira: ${carreira}\n\nLista de tecnologias para aprender:\n`;
  mensagem +=
    listaTecnologias.length > 0
      ? listaTecnologias
          .map((tech, index) => `${index + 1}. ${tech}`)
          .join("\n")
      : "Nenhuma tecnologia adicional selecionada.";
  mensagem +=
    "\nLembre-se: o aprendizado é uma jornada contínua. Boa sorte em sua carreira de desenvolvimento!";
  alert(mensagem);
}

iniciarJogo();
