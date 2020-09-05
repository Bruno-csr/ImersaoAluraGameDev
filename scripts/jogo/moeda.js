class Moeda extends Animacao{
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade){
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

        this.velocidade = velocidade;
        this.x = width;
        this.xAleatorio = 0;
        this.invencivel = false;
    }

    move(){
        this.x -= this.velocidade * 2.5;
    }

    reaparece(){
        // this.xAletatorio = random(1, 3);
        // console.log(this.xAleatorio);
        // this.x = width * this.xAleatorio;
        this.x = width;
    }

}