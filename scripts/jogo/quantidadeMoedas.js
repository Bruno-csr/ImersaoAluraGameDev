class QuantidadeMoedas {
    constructor(moedasMaxima, moedasInicial){
        this.moedasMaxima = moedasMaxima;
        this.moedasInicial = moedasInicial;

        this.moedas = moedasInicial;

        this.largura = 32;
        this.altura = 32;
        this.xInicial = 15;
        this.y = 50;
    }

    exibe(){
        textAlign(LEFT);
        fill('#fff');
        textSize(25);
        //texto, x, y
        text(this.moedas, (this.xInicial) + 40, 75);
        image(imagemContaMoeda, this.xInicial , this.y, this.largura, this.altura);
    }
    

    ganhaMoedas(){
        somCoin.play();
        if(this.moedas < this.moedasMaxima){
            this.moedas++;
        }
    }

}