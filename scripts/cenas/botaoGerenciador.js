class BotaoGerenciador {
    constructor(texto, x, y, fase){
        this.texto = texto;
        this.x = x;
        this.y = y;
        this.fase = fase;
        this.botao = createButton(this.texto);
        this.botao.mousePressed(() => this._alteraCena());
        this.botao.addClass('botao-tela-inicial');
    }

    draw(){
        this.botao.position(this.x, this.y);
        this.botao.center('horizontal');
    }

    _alteraCena(){
        this.botao.remove();
        cenaAtual = this.fase;
        jogo.draw();
        somJogo.loop();
        somGameOver.stop();
    }
}