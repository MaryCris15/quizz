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
        afirmacao: "Cinnamonroll",
      },
      {
        texto: "Pudim de leite",
        afirmacao: "Pompompurim",
      },
      {
        texto: "Sorvete de banana",
        afirmacao: "Pochacco",
      },
    ],
  },
  {
    enunciado: "Qual raça de cachorro você mais gosta?",
    alternativas: [
      {
        texto: "Maltês",
        afirmacao: "Cinnamonroll",
      },
      {
        texto: "Golden Retriever",
        afirmacao: "Pompompurim",
      },
      {
        texto: "Beagle",
        afirmacao: "Pochacco",
      },
    ],
  },
  {
    enunciado: "Qual sua cor preferida?",
    alternativas: [
      {
        texto: "Azul",
        afirmacao: "Cinnamonroll",
      },
      {
        texto: "Amarelo",
        afirmacao: "Pompompurim",
      },
      {
        texto: "Vermelho",
        afirmacao: "Pochacco",
      },
    ],
  },
  {
    enunciado: "Depois de um dia cansativo, qual é a melhor opção?",
    alternativas: [
      {
        texto: "Comer",
        afirmacao: "Cinnamonroll",
      },
      {
        texto: "Dormir",
        afirmacao: "Pompompurim",
      },
      {
        texto: "Passear",
        afirmacao: "Pochacco",
      },
    ],
  },
  {
    enunciado: "Qual é seu hobbie favorito?",
    alternativas: [
      {
        texto: "Confeitar",
        afirmacao: "Cinnamonroll",
      },
      {
        texto: "Tirar uma soneca",
        afirmacao: "Pompompurim",
      },
      {
        texto: "Praticar esportes",
        afirmacao: "Pochacco",
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
