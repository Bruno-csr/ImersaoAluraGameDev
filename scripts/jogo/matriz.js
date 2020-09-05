class Matriz {
    constructor(colunas, linhas, tamanhoX, tamanhoY){
        this.colunas = colunas,
        this.linhas = linhas;
        this.tamanhoY = tamanhoY;
        this.tamanhoX = tamanhoX;
        this.matriz = [];
        this.x = 0;
        this.y = 0;
    }

    matrizImagem(){
        for(var i = 0; i < this.linhas; i++){
            this.x = 0
            for(var j = 0; j < this.colunas; j++){
                this.matriz.push([this.x,this.y]);
                this.x += this.tamanhoX;
            }
            this.y += this.tamanhoY;
        }
        return this.matriz;
    }
}