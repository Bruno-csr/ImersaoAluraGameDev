class Cenario {
  constructor(imagem, velocidade){
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.x1 = 0;
    this.x2 = width;
  }
  
  exibe() {
    //imagem, posicão X na tela, posição Y na tela, largura da imagem, altura da imagem.
    image(this.imagem, this.x1, 0, width + 10, height);
    image(this.imagem, this.x2, 0, width + 10, height);
  }
  
  move() {
    this.x1 -= this.velocidade;
    this.x2 -= this.velocidade;
    
    if (this.x1 < -width){
      this.x1 = width;
    }
    if (this.x2 < -width){
      this.x2 = width;
    }
  }
}