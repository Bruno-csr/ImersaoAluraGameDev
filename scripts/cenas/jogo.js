class Jogo{
    constructor(){
        //this.inimigoAtual = parseInt(random(0,2));
        //this.inimigoAtual = 0;
        this.indice = 0;

        this.mapa = fita.mapa;

        this.fase = 'jogo';
    }

    setup(){

        matrizInimigo = new Matriz (4, 7, 104, 104);
        matrizInimigoGrande = new Matriz(4, 7, 400, 400);
        matrizInimigoVoador = new Matriz(4, 4, 200, 150);
        matrizMoeda = new Matriz(4, 4, 64, 64);
        matrizPersoagem = new Matriz(4, 4, 220, 270);
        matrizPulando = new Matriz (3, 4, 96, 96);

        cenario = new Cenario(imagemCenario, velocidade);
        cenarioFundo = new CenarioFundo(imagemFundoCenario, otaImagemFundo, velocidade/5);
    
        personagem = new Personagem(matrizPersoagem.matrizImagem(), imagemPersonagem, 0, 30, 110, 135, 220, 270);
        vida = new Vida(fita.configVida.vidaMaxima, fita.configVida.vidaInicial);

        pulando = new Efeitos(matrizPulando.matrizImagem(), imagemPulo,  0 + personagem.altura, 30, 110, 135, 32, 32);

        moeda = new Moeda(matrizMoeda.matrizImagem(), imagemMoeda, width - 100, 300, 64, 64, 64, 64, 10);
        quantidadeMoedas = new QuantidadeMoedas (fita.configMoeda.moedaMaxima, fita.configMoeda.moedaInicial)
    
        inimigo = new Inimigo(matrizInimigo.matrizImagem(), imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);
        inimigoGrande = new Inimigo(matrizInimigoGrande.matrizImagem(), imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10);
        inimigoVoador = new Inimigo(matrizInimigoVoador.matrizImagem(), imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 15);
    
        pontuacao = new Pontuacao();
    
        gameOver = new Cenario (imagemGameOver, 0);

        arrayInimigos.push(inimigo);
        arrayInimigos.push(inimigoGrande);
        arrayInimigos.push(inimigoVoador);

    }

    keyPressed(key){
        if(key === "ArrowUp"){
            pulando.frameAtual = 0;
            personagem.pula();
            somPulo.play();
        }
    }
    
    draw(){
        cenarioFundo.exibe();
        cenarioFundo.move();

        cenario.exibe();
        cenario.move();

        pontuacao.exibe();
        pontuacao.adicionarPonto();

        personagem.exibe();
        personagem.aplicaGravidade();

        moeda.exibe();
        moeda.move();

        if (keyIsDown(LEFT_ARROW)){
            personagem.esquerda();
        }
        
        if (keyIsDown(RIGHT_ARROW)){
            personagem.direita();
        }

        if (keyIsDown(UP_ARROW)){
            pulando.exibe();
        }

        vida.exibe();
        quantidadeMoedas.exibe();

        const linhaAtual = this.mapa[this.indice];
        const inimigo = arrayInimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < -inimigo.largura;
        
        inimigo.velocidade = linhaAtual.velocidade;

        inimigo.exibe();
        inimigo.move();

        if (inimigoVisivel){
            //this.inimigoAtual = parseInt(random(0,3));
            this.indice++;
            inimigo.reaparece();
            if(this.indice > this.mapa.length - 1){
                this.indice = 0;
            }
            //console.log('inimigo' + this.inimigoAtual);
            moeda.reaparece();
        }else{
            this.mapa.velocidade += velocidade;
        }

     if (personagem.estaColidindo(inimigo)){

         vida.perdeVida();
         personagem.tornarInvencivelInimigo();
         somColide.play();
            
         if(vida.vidas === 0){
             image(imagemGameOver, width/2 - 200, height/3);
             
             somJogo.stop();
             somGameOver.loop();
             
             botaoReiniciar = new BotaoGerenciador('Reiniciar', width/2, height/2, 'jogo');

             this.indice = 0;
             velocidade = 10;
             inimigo.reaparece();

             jogo.setup(); 

             cenaAtual = 'telaGameOver';

             //console.log(cenaAtual);
         }

        } else if (personagem.estaColidindo(moeda)) {

            quantidadeMoedas.ganhaMoedas();
            personagem.tornarInvencivelMoeda();
            
            if(quantidadeMoedas.moedas === quantidadeMoedas.moedasMaxima){
                console.log("Ganhou Vida");
                vida.ganhaVida();
                quantidadeMoedas.moedas = 0;
                somGanhaVida.play();
            }
        }
    }
}