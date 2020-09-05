var imagemCenario, imagemFundoCenario, otaImagemFundo, imagemTelainicial;

var imagemPersonagem, imagemPersonagemColidiu, imagemInimigo, imagemInimigoGrande, 
    imagemInimigoVoador, imagemGameOver, imagemVida, imagemMoeda;

var fonteTelaInicial, botaoGerenciador;

var cenario, cenarioFundo;

var somJogo, somPulo, somGameOver, somColide, somCoin, somGanhaVida;

var personagem, vida, personagemColidiu, pulando,
    inimigo, inimigoGrande, inimigoVoador;

var imagemContaMoeda, moeda, quantidadeMoedas;

var pontuacao, gameOver, cont, velocidade = 10, botaoReiniciar;


var fita;

var cenaAtual = 'telaInicial';
var cenas;
var telaInicial, jogo, novoJogo, telaGameOver;

var matrizInimigo, matrizInimigoGrande, matrizInimigoVoador, matrizMoeda, matrizPersoagem,
    matrizPulando;

const arrayInimigos = [];