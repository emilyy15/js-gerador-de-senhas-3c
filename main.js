const numeroSenha = document.querySelectorAll('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if (tamanhoSenha > 1){
        tamanhoSenha --;
    }
    numeroSenha.textContent = tamamhoSenha;
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
        tamanho++;
    }
    numeroSenha.textContent = tamanhoSenha;
}

console.log(botoes);