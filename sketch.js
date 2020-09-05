function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(30);

    jogo = new Jogo();
    telaInicial = new TelaInicial();
    telaGameOver = new TelaGameOver();
    botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2, 'jogo');

    jogo.setup();

    cenas = {
      telaInicial,
      jogo,
      telaGameOver
    };
}

function keyPressed(){
  jogo.keyPressed(key);
}
  
function draw() {
  cenas[cenaAtual].draw();

}