class Personagem extends Animacao{
    constructor (matriz, imagem, x, variacaoY, largura, altura, larguraSprite, aluraSprite){
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, aluraSprite)

        this.variacaoY = variacaoY;
        this.chao = height - this.altura - this.variacaoY;
        this.y = this.chao;
        this.pulo = 0;
        this.gravidade = 5;

        this.alturaPulo = -40;
        this.cont = 0;

        this.invencivel = false;

        this.x = x;
        this.velocidadeAnda = 20;

        this.diametro = 1;
        this.multiplicaX = 1;        
        this.multiplicaY = 1;

    }

    pula (){
        if(this.cont < 2){
            this.pulo = this.alturaPulo;
            this.cont++;
        }
    }

    direita (){
        if(this.x < width - this.largura){
            this.x += this.velocidadeAnda;
            //console.log(this.x);
        }
    }

    esquerda (){
        if(this.x > 0){
        this.x -= this.velocidadeAnda;
        //console.log(this.x);
        }
    }

    aplicaGravidade (){
        this.y += this.pulo;
        this.pulo += this.gravidade;

        if(this.y > this.chao){
            this.y = this.chao;
            this.cont =0;
        }
        //console.log(this.y);
    }

    tornarInvencivelInimigo (){
        this.invencivel = true;
        personagem.imagem = imagemPersonagemColidiu;
        setTimeout (() => {
            this.invencivel = false
            personagem.imagem = imagemPersonagem;
        }, 1000);
    }

    tornarInvencivelMoeda (){
        this.invencivel = true;
        setTimeout (() => {
            this.invencivel = false
        }, 500);
    }
    //pode estar dentro de animação
    estaColidindo(coisa){
        if(coisa === inimigoVoador){
            this.diametro = 50;
            this.multiplicaX = 55;
            this.multiplicaY = 40;
        } else if (coisa === inimigoGrande){
            this.diametro = 120;
            this.multiplicaX = 130;
            this.multiplicaY = 110;
        } else if (coisa === inimigo){
            this.diametro = 50;
            this.multiplicaX = 40;
            this.multiplicaY = 30;
        } else if (coisa === moeda){
            this.diametro = 50;
            this.multiplicaX = 60;
            this.multiplicaY = 32;
        }

        if(this.invencivel){
            return false;
        }
        const colisao = collideCircleCircle(
            this.x + 52, 
            this.y + 70,
            this.largura, 
            coisa.x + this.multiplicaX,
            coisa.y + this.multiplicaY,
            this.diametro
        );

        return  colisao;
    }
}