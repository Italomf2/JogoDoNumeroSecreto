/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';
*/
let listaDeNumerosSorteados = [];
let numeroLimite = 50;

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

exibirMensagemInicial();

function verificarChute(){
    
    
    let chute = document.querySelector('input').value;

    let numeroTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';

    let mensagemTentativa = `Você descobriu o número secreto após ${tentativas} ${numeroTentativas}`;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!!!');
        exibirTextoNaTela('p',mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('h1', 'Você Errou!');
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}, tente novamente`);
        }else{
            exibirTextoNaTela('h1', 'Você Errou!');
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}, tente novamente`);
        }
        tentativas++;
        limparCampoInput();
    }
        
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um numero entre 1 e 50');
}

function limparCampoInput(){
    chute = document.querySelector('input');

    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampoInput();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}


console.log(numeroSecreto);