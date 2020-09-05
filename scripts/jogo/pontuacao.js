class Pontuacao{
    constructor(){
        this.pontos = 0;
        this.cont = 1;
    }

    exibe() {
        textAlign(RIGHT);
        fill('#fff');
        textSize(50);
        text(parseInt(this.pontos), width - 30, 50);
    }

    adicionarPonto(){
        this.pontos += .2;
        if(parseInt(this.pontos) % 75.0 === 0 && velocidade < 50){
            if(this.cont === 0){
                velocidade += 5;
                this.cont++;
            }
            console.log(velocidade);
        }else{
            this.cont = 0;
        }
    }
}