matriz = [
    [0,0],
    [220,0],
    [440,0],
    [660,0],
    [0,270],
    [220,270],
    [440,270],
    [660,270],
    [0,540],
    [220,540],
    [440,540],
    [660,540],
    [0,810],
    [220,810],
    [440,810],
    [660,810],
]; 
console.log(matriz);

var x = 0, y = 0, matriz = [];
var colunas = 4, linhas = 7;
var tamanhoX = 104, tamanhoY = 104;

function matrizImagem(){
    for(var i = 0; i < linhas; i++){
        x = 0
        for(var j = 0; j < colunas; j++){
            matriz.push([x,y]);
            x += tamanhoX;
        }
        y += tamanhoY;
    }
    return matriz;
}

console.log(matrizImagem());