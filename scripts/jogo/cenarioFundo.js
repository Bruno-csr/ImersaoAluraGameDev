class CenarioFundo {
  constructor(imagem1, imagem2, velocidade){
    this.imagem1 = imagem1;
    this.imagem2 = imagem2;
    this.velocidade = velocidade;
    this.x1 = 0;
    this.x2 = width;
  }
  
  exibe() {
    //imagem, posicão X na tela, posição Y na tela, largura da imagem, altura da imagem.
    image(this.imagem1, this.x1, 0, width, height);
    image(this.imagem2,this.x2, 0, width, height);
  }
  
  move() {
    this.x1 -= this.velocidade;
    this.x2 -= this.velocidade;
    
    if (this.x1 < -width){
      this.x1 = width - 10;
    }
    if (this.x2 < -width){
      this.x2 = width - 10;
    }
  }
}