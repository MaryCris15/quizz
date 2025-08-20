const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Qual sua comida preferida?",
    alternativas: [
      {
        texto: "Biscoito de canela",
        afirmacao: "Cinnamonroll,",
      },
      {
        texto: "Pudim de leite",
        afirmacao: "Pompompurin,",
      },
      {
        texto: "Sorvete de banana",
      afirmacao: "Pochacco,",
      },
    ],
  },
  {
    enunciado: "Qual raça de cachorro você mais gosta?",
    alternativas: [
      {
        texto: "Maltês",
        afirmacao:" Você é calmo e quieto",

      },
      {
        texto: "Golden Retriever",
        afirmacao: "Você é alegre e descontraido,",
      },
      {
        texto: "Beagle",
        afirmacao: "Você é curioso e cheio de energia,",
      },
    ],
  },
  {
    enunciado: "Qual sua cor preferida?",
    alternativas: [
      {
        texto: "Azul",
        afirmacao: "é muito cuidadoso com os outros e sempre tenta ajudar",
      },
      {
        texto: "Amarelo",
        afirmacao: "gosta de viver em seu próprio mundo",
      },
      {
        texto: "Vermelho",
        afirmacao: "adora descobrir coisas novas e explorar o mundo ao seu redor",
      },
    ],
  },
  {
    enunciado: "Depois de um dia cansativo, qual é a melhor opção?",
    alternativas: [
      {
        texto: "Comer",
        afirmacao:  "gosta de fazer amigos",
      },
      {
        texto: "Dormir",
        afirmacao: "tem uma queda por cochilos e momentos de relaxamento",
      },
      {
        texto: "Passear",
        afirmacao: "é curioso, mas também um pouco atrapalhado",
      },
    ],
  },
  {
    enunciado: "Qual é seu hobbie favorito?",
    alternativas: [
      {
        texto: "Confeitar",
        afirmacao: "é naturalmente reservado e pode ficar envergonhado quando recebe muita atenção",
      },
      {
        texto: "Tirar uma soneca",
        afirmacao:"é muito sociável, fazendo amizade facilmente com todos que encontra",
      },
      {
        texto: "Praticar esportes",
        afirmacao: "é naturalmente curioso e gosta de explorar coisas novas, o que às vezes o leva a se meter em encrencas. ",
      },
    ],
  },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacoes + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Você é...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();
