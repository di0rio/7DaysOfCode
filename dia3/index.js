function iniciarJogo() {
  alert("Bem-vindo ao Jogo de Carreira em Desenvolvimento!");
  alert(
    "Vamos ajudar você a decidir qual caminho seguir no mundo da programação!"
  );

  const areaEscolhida = prompt(
    "Você quer seguir para a área de Front-End ou Back-End? (Digite 'Front-End' ou 'Back-End')"
  );

  // Variável para armazenar tecnologia escolhida
  var tecnologiaEscolhida = "";

  if (areaEscolhida.toLowerCase() === "front-end") {
    const frontEndEscolha = prompt(
      "Você quer aprender React ou Vue? (Digite 'React' ou 'Vue')"
    );

    if (frontEndEscolha.toLowerCase() === "react") {
      alert(
        "Ótima escolha! React é uma biblioteca poderosa mantida pelo Facebook e muito popular no mercado!"
      );
      tecnologiaEscolhida = "React";
    } else if (frontEndEscolha.toLowerCase() === "vue") {
      alert(
        "Excelente! Vue é um framework progressivo que tem ganhado muita popularidade pela sua simplicidade e flexibilidade!"
      );
      tecnologiaEscolhida = "Vue";
    } else {
      alert(
        "Opção não reconhecida. Vamos considerar que você ainda está decidindo."
      );
      tecnologiaEscolhida = "tecnologias de Front-End";
    }
  } else if (areaEscolhida.toLowerCase() === "back-end") {
    const backEndEscolha = prompt(
      "Você quer aprender C# ou Java? (Digite 'C#' ou 'Java')"
    );

    if (backEndEscolha.toLowerCase() === "c#") {
      alert(
        "C# é uma excelente linguagem desenvolvida pela Microsoft, muito usada no desenvolvimento de aplicações empresariais!"
      );
      tecnologiaEscolhida = "C#";
    } else if (backEndEscolha.toLowerCase() === "java") {
      alert(
        "Java é uma das linguagens mais utilizadas no mundo, conhecida por sua portabilidade e robustez!"
      );
      tecnologiaEscolhida = "Java";
    } else {
      alert(
        "Opção não reconhecida. Vamos considerar que você ainda está decidindo."
      );
      tecnologiaEscolhida = "tecnologias de Back-End";
    }
  } else {
    alert(
      "Opção não reconhecida. Vamos considerar que você está interessado em ambas áreas."
    );
    tecnologiaEscolhida = "desenvolvimento de software";
  }

  // Terceira escolha: especialização ou fullstack
  const carreiraEscolha = prompt(
    `Você quer seguir se especializando em ${tecnologiaEscolhida} ou se desenvolver para se tornar Fullstack? (Digite 'Especializar' ou 'Fullstack')`
  );

  if (carreiraEscolha.toLowerCase() === "especializar") {
    alert(
      `Ótimo! A especialização em ${tecnologiaEscolhida} vai te permitir se tornar um expert nessa tecnologia!`
    );
  } else if (carreiraEscolha.toLowerCase() === "fullstack") {
    alert(
      `Legal! Ser Fullstack te dará uma visão compvara do desenvolvimento, combinando ${tecnologiaEscolhida} com outras tecnologias!`
    );
  } else {
    alert(
      "Opção não reconhecida. Qualquer caminho que escolher será uma jornada interessante!"
    );
  }

  // Quarta parte: lista de tecnologias para aprender
  alert(
    "Agora, vamos criar sua lista personalizada de tecnologias para aprender!"
  );

  const tecnologiasParaAprender = [];
  var continuarAdicionando = true;

  while (continuarAdicionando) {
    const novaTecnologia = prompt(
      "Digite o nome de uma tecnologia que você gostaria de aprender:"
    );

    if (novaTecnologia) {
      tecnologiasParaAprender.push(novaTecnologia);

      switch (novaTecnologia.toLowerCase()) {
        case "javascript":
          alert(
            "JavaScript é a linguagem da web! Essencial para qualquer desenvolvedor web moderno."
          );
          break;
        case "python":
          alert(
            "Python é fantástica para iniciantes e profissionais, usada em IA, ciência de dados e muito mais!"
          );
          break;
        case "php":
          alert(
            "PHP é amplamente utilizada para desenvolvimento web e alimenta grandes sites como Facebook e WordPress."
          );
          break;
        case "ruby":
          alert(
            "Ruby é conhecida por sua elegância e produtividade, especialmente com o framework Ruby on Rails."
          );
          break;
        case "typescript":
          alert(
            "TypeScript adiciona tipagem estática ao JavaScript, tornando o código mais seguro e manutenível."
          );
          break;
        case "swift":
          alert(
            "Swift é a linguagem moderna da Apple para desenvolvimento iOS e macOS."
          );
          break;
        case "rust":
          alert(
            "Rust é focada em segurança, velocidade e concorrência, ganhando popularidade rapidamente."
          );
          break;
        case "kotlin":
          alert(
            "Kotlin é moderna e prática, oficialmente adotada para desenvolvimento Android."
          );
          break;
        case "sql":
          alert(
            "SQL é fundamental para trabalhar com bancos de dados relacionais."
          );
          break;
        case "html":
          alert(
            "HTML é a base de qualquer página web, definindo sua estrutura e conteúdo."
          );
          break;
        case "css":
          alert(
            "CSS dá vida às páginas web, controlando a aparência e layout dos elementos."
          );
          break;
        default:
          alert(
            `${novaTecnologia} é uma ótima escolha para adicionar ao seu arsenal de conhecimentos!`
          );
      }

      const continuar = prompt(
        "Tem mais alguma tecnologia que você gostaria de aprender? (Digite 'ok' para continuar ou qualquer outra coisa para finalizar)"
      );
      continuarAdicionando = continuar.toLowerCase() === "ok";
    } else {
      alert("Você não inseriu nenhuma tecnologia. Vamos continuar.");
    }
  }

  // Resumo final
  var mensagemFinal = "Resumo do seu caminho de aprendizado:\n";
  mensagemFinal += `Área principal: ${areaEscolhida}\n`;
  mensagemFinal += `Tecnologia específica: ${tecnologiaEscolhida}\n`;
  mensagemFinal += `Direção de carreira: ${carreiraEscolha}\n`;
  mensagemFinal += "\nLista de tecnologias para aprender:\n";

  if (tecnologiasParaAprender.length > 0) {
    for (var i = 0; i < tecnologiasParaAprender.length; i++) {
      mensagemFinal += `${i + 1}. ${tecnologiasParaAprender[i]}\n`;
    }
  } else {
    mensagemFinal += "Nenhuma tecnologia adicional selecionada.";
  }

  mensagemFinal +=
    "\nLembre-se: o aprendizado é uma jornada contínua. Boa sorte em sua carreira de desenvolvimento!";

  alert(mensagemFinal);
}

// Iniciar o jogo
iniciarJogo();
