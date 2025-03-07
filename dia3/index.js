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
  ).toLowerCase();

  if (resposta === AREAS.FRONT_END || resposta === AREAS.BACK_END) {
    return resposta;
  }

  alert(
    "Opção não reconhecida. Vamos considerar que você está interessado em ambas áreas."
  );
  return "desenvolvimento geral";
}

function obterTecnologiaEspecifica(area) {
  if (area === AREAS.FRONT_END) {
    return obterTecnologiaFrontEnd();
  } else if (area === AREAS.BACK_END) {
    return obterTecnologiaBackEnd();
  }

  return "desenvolvimento de software";
}

function obterTecnologiaFrontEnd() {
  const escolha = prompt(
    "Você quer aprender React ou Vue? (Digite 'React' ou 'Vue')"
  ).toLowerCase();

  if (escolha === TECNOLOGIAS_FRONTEND.REACT) {
    alert(
      "Ótima escolha! React é uma biblioteca poderosa mantida pelo Facebook e muito popular no mercado!"
    );
    return "React";
  } else if (escolha === TECNOLOGIAS_FRONTEND.VUE) {
    alert(
      "Excelente! Vue é um framework progressivo que tem ganhado muita popularidade pela sua simplicidade e flexibilidade!"
    );
    return "Vue";
  }

  alert(
    "Opção não reconhecida. Vamos considerar que você ainda está decidindo."
  );
  return "tecnologias de Front-End";
}

function obterTecnologiaBackEnd() {
  const escolha = prompt(
    "Você quer aprender C# ou Java? (Digite 'C#' ou 'Java')"
  ).toLowerCase();

  if (escolha === TECNOLOGIAS_BACKEND.CSHARP) {
    alert(
      "C# é uma excelente linguagem desenvolvida pela Microsoft, muito usada no desenvolvimento de aplicações empresariais!"
    );
    return "C#";
  } else if (escolha === TECNOLOGIAS_BACKEND.JAVA) {
    alert(
      "Java é uma das linguagens mais utilizadas no mundo, conhecida por sua portabilidade e robustez!"
    );
    return "Java";
  }

  alert(
    "Opção não reconhecida. Vamos considerar que você ainda está decidindo."
  );
  return "tecnologias de Back-End";
}

function obterCaminhoCarreira(tecnologia) {
  const escolha = prompt(
    `Você quer seguir se especializando em ${tecnologia} ou se desenvolver para se tornar Fullstack? (Digite 'Especializar' ou 'Fullstack')`
  ).toLowerCase();

  if (escolha === CAMINHOS_CARREIRA.ESPECIALIZAR) {
    alert(
      `Ótimo! A especialização em ${tecnologia} vai te permitir se tornar um expert nessa tecnologia!`
    );
    return "Especialização";
  } else if (escolha === CAMINHOS_CARREIRA.FULLSTACK) {
    alert(
      `Legal! Ser Fullstack te dará uma visão completa do desenvolvimento, combinando ${tecnologia} com outras tecnologias!`
    );
    return "Fullstack";
  }

  alert(
    "Opção não reconhecida. Qualquer caminho que escolher será uma jornada interessante!"
  );
  return "Indefinido";
}

function obterListaTecnologiasAdicionais() {
  alert(
    "Agora, vamos criar sua lista personalizada de tecnologias para aprender!"
  );

  const tecnologias = [];
  let continuarAdicionando = true;

  while (continuarAdicionando) {
    const novaTecnologia = prompt(
      "Digite o nome de uma tecnologia que você gostaria de aprender:"
    );

    if (novaTecnologia && novaTecnologia.trim() !== "") {
      tecnologias.push(novaTecnologia);
      exibirComentarioSobreTecnologia(novaTecnologia);

      continuarAdicionando =
        prompt(
          "Tem mais alguma tecnologia que você gostaria de aprender? (Digite 'ok' para continuar ou qualquer outra coisa para finalizar)"
        ).toLowerCase() === CONTINUAR;
    } else {
      alert("Você não inseriu nenhuma tecnologia. Vamos continuar.");
    }
  }

  return tecnologias;
}

function exibirComentarioSobreTecnologia(tecnologia) {
  const tecnologiaLowerCase = tecnologia.toLowerCase();
  const comentarios = {
    javascript:
      "JavaScript é a linguagem da web! Essencial para qualquer desenvolvedor web moderno.",
    python:
      "Python é fantástica para iniciantes e profissionais, usada em IA, ciência de dados e muito mais!",
    php: "PHP é amplamente utilizada para desenvolvimento web e alimenta grandes sites como Facebook e WordPress.",
    ruby: "Ruby é conhecida por sua elegância e produtividade, especialmente com o framework Ruby on Rails.",
    typescript:
      "TypeScript adiciona tipagem estática ao JavaScript, tornando o código mais seguro e manutenível.",
    swift:
      "Swift é a linguagem moderna da Apple para desenvolvimento iOS e macOS.",
    rust: "Rust é focada em segurança, velocidade e concorrência, ganhando popularidade rapidamente.",
    kotlin:
      "Kotlin é moderna e prática, oficialmente adotada para desenvolvimento Android.",
    sql: "SQL é fundamental para trabalhar com bancos de dados relacionais.",
    html: "HTML é a base de qualquer página web, definindo sua estrutura e conteúdo.",
    css: "CSS dá vida às páginas web, controlando a aparência e layout dos elementos.",
  };

  const mensagem =
    comentarios[tecnologiaLowerCase] ||
    `${tecnologia} é uma ótima escolha para adicionar ao seu arsenal de conhecimentos!`;
  alert(mensagem);
}

function exibirResumoFinal(area, tecnologia, carreira, listaTecnologias) {
  let mensagem = montarMensagemResumo(
    area,
    tecnologia,
    carreira,
    listaTecnologias
  );
  alert(mensagem);
}

function montarMensagemResumo(area, tecnologia, carreira, listaTecnologias) {
  let mensagem = "Resumo do seu caminho de aprendizado:\n";
  mensagem += `Área principal: ${area}\n`;
  mensagem += `Tecnologia específica: ${tecnologia}\n`;
  mensagem += `Direção de carreira: ${carreira}\n`;
  mensagem += "\nLista de tecnologias para aprender:\n";

  if (listaTecnologias.length > 0) {
    mensagem += formatarListaTecnologias(listaTecnologias);
  } else {
    mensagem += "Nenhuma tecnologia adicional selecionada.";
  }

  mensagem +=
    "\nLembre-se: o aprendizado é uma jornada contínua. Boa sorte em sua carreira de desenvolvimento!";

  return mensagem;
}

function formatarListaTecnologias(tecnologias) {
  return tecnologias.map((tech, index) => `${index + 1}. ${tech}`).join("\n");
}

// Iniciar o jogo
iniciarJogo();
