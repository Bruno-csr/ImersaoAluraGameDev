function preload (){
    imagemCenario = loadImage('.//assets/imagens/cenario/edson/arvore1.png');
    imagemFundoCenario = loadImage('.//assets/imagens/cenario/edson/montanha1.png');
    otaImagemFundo = loadImage('.//assets/imagens/cenario/edson/montanha2.png');

    imagemTelainicial = loadImage('.//assets/imagens/cenario/telaInicial.png');

    imagemPersonagem = loadImage('.//assets/imagens/personagem/correndo.png');
    imagemPulo = loadImage('.//assets/imagens/personagem/pulando.png');
    imagemPersonagemColidiu = loadImage('.//assets/imagens/personagem/correndoColidiu.png');
    imagemVida = loadImage('.//assets/imagens/assets/coracao.png');

    imagemMoeda = loadImage('.//assets/imagens/coletaveis/coins.png');
    imagemContaMoeda = loadImage('.//assets/imagens/coletaveis/contaMoeda.png');

    imagemInimigo = loadImage('.//assets/imagens/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('.//assets/imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('./assets/imagens/inimigos/gotinha-voadora.png');

    imagemGameOver = loadImage('.//assets/imagens/assets/game-over.png');

    somJogo = loadSound('.//assets/sons/trilha_jogo.mp3');
    somPulo = loadSound ('.//assets/sons/somPulo.mp3');
    somGameOver = loadSound ('.//assets/sons/somGameOver.mp3');
    somColide = loadSound ('.//assets/sons/somColide.mp3');
    somCoin = loadSound ('.//assets/sons/somCoin.mp3');
    somGanhaVida = loadSound ('.//assets/sons/somGanhaVida.mp3');
    

    fonteTelaInicial = loadFont('.//assets/imagens/assets/fonteTelaInicial.otf');

    fita = loadJSON('.//fita/fita.json');
}