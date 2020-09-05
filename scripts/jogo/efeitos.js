class Efeitos extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

        this.x = personagem.x;
        this.variacaoY = personagem.variacaoY - personagem.altura;

    }

    move(){
        this.x -= this.velocidade;
    }

}