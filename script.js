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
        afirmacao: "Você é calmo e quieto,",
      },
      {
        texto: "Pudim de leite",
        afirmacao: "Você é alegre e descontraido,",
      },
      {
        texto: "Sorvete de banana",
      afirmacao: "Você é curioso e cheio de energia,",
      },
    ],
  },
  {
    enunciado: "Qual raça de cachorro você mais gosta?",
    alternativas: [
      {
        texto: "Maltês",
        afirmacao: "é muito cuidadoso com os outros,",
      },
      {
        texto: "Golden Retriever",
        afirmacao: "gosta de viver em seu próprio mundo",
      },
      {
        texto: "Beagle",
        afirmacao: "adora descobrir coisas novas",
      },
    ],
  },
  {
    enunciado: "Qual sua cor preferida?",
    alternativas: [
      {
        texto: "Azul",
        afirmacao: "gosta de fazer amigos",
      },
      {
        texto: "Amarelo",
        afirmacao: "tem uma queda por cochilos e momentos de relaxamento",
      },
      {
        texto: "Vermelho",
        afirmacao: "é curioso, mas também um pouco atrapalhado",
      },
    ],
  },
  {
    enunciado: "Depois de um dia cansativo, qual é a melhor opção?",
    alternativas: [
      {
        texto: "Comer",
        afirmacao:  "está sempre disposto a ajudar quando necessário",
      },
      {
        texto: "Dormir",
        afirmacao: "muito sociável, fazendo amizade facilmente com todos que encontra",
      },
      {
        texto: "Passear",
        afirmacao: "muito amigável e adora fazer amigos",
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
        afirmacao: "é responsável que leva seus deveres a sério e está sempre disposto a fazer o melhor para ajudar os outros.",
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
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();
