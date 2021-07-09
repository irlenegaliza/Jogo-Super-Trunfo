var cartaPaulo = {
    nome: "Seiya de Pegaso",
    imagem: "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}

var cartaRafa = {
    nome: "Bulbasauro",
    imagem: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}

var cartaGui = {
    nome: "Lorde Darth Vader",
    imagem: "https://images-na.ssl-images-amazon.com/images/I/51VJBqMZVAL._SX328_BO1,204,203,200_.jpg",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90
    }
}

var cartaLol = {
    nome: "Caitlyn",
    imagem: "http://1.bp.blogspot.com/-K7CbqWc1-p0/VLc98v85s0I/AAAAAAAABqk/-ZB684VVHbg/s1600/Caitlyn_OriginalSkin.jpg",
    atributos: {
        ataque: 95,
        defesa: 40,
        magia: 10
    }
}

var cartaNaruto = {
    nome: "Naruto",
    imagem: "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 100
    }
}

var cartaHarry = {
    nome: "Harry Potter",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/89ff10dd-aa41-4d17-ae8f-835281ebd3fd_49hp.jpg",
    atributos: {
        ataque: 70,
        defesa: 50,
        magia: 95
    }
}

var cartaBatman = {
    nome: "Batman",
    imagem: "https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x677.jpg",
    atributos: {
        ataque: 95,
        defesa: 70,
        magia: 30
    }
}

var cartaMarvel = {
    nome: "Capitã Marvel",
    imagem: "https://cinepop.com.br/wp-content/uploads/2018/09/capitamarvel21.jpg",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 40
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaPaulo, cartaRafa, cartaGui, cartaLol, cartaNaruto, cartaHarry, cartaBatman, cartaMarvel]
//            0           1           2          3         4            5            6           7     
var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantCartas()

function atualizaQuantCartas(){
  var divQuantCartas = document.getElementById("quantidade-cartas")
  var html = "Quantidade de cartas no jogo: " + cartas.length
  
  divQuantCartas.innerHTML = html  
}

function atualizaPlacar(){
  var divPlacar = document.getElementById('placar')
  var html = "Jogador " + pontosJogador + " / " + "Maquina " + pontosMaquina
  
  divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

  //   método "splice" é usado para retirar o elemento em questão
  //   o splice funciona com 2 parametros, nesse caso é a carta máquina que já foi    sorteada e, o proximo parametro, será o numero/quantidade de cartas que serão     retiradas que, nesse caso, é apenas 1 por vez.
  
    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    if(cartas.length == 0){
      alert("Fim de Jogo!!")
      
      if(pontosJogador > pontosMaquina){
        htmlResultado = '<p class="resultado-final">Você venceu a partida</p>'
      }
      else if (pontosMaquina > pontosJogador){
        htmlResultado = '<p class="resultado-final">Você perdeu a partida</p>'
      }
      else {
        htmlResultado = '<p class="resultado-final">Houve empate</p>'
      }
    }
    else {
      document.getElementById('btnProximaRodada').disabled = false
    }
  
    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true
    
    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
  
  var divCartas = document.getElementById('cartas')
  
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
  
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
  
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
}




/*

TRUNFO E LÓGICA DE RODADAS COM JAVASCRIPT
PARTICIPE E VÁ MAIS FUNDO
Nesta nona aula da Imersão Dev, vamos alterar a lógica do jogo para mais rodadas e com mais cartas! O código da aula para você acompanhar está aqui:

https://codepen.io/imersao-dev/pen/eYgYYxG

Neste programa, focamos nas primeiras ferramentas principais de qualquer linguagem de programação: variáveis, operadores, além das funções alert e prompt para trocar nossas primeiras mensagens na tela com o usuário.

Conteúdo detalhado dessa aula
Adicionamos mais cartas no jogo;
Criamos um placar com pontos do jogador e da máquina;
Desenvolvemos uma função que atualiza o placar do jogo;
Incluímos uma lógica para remover as cartas usadas do jogo a cada rodada;
Alteramos a forma de sortear as cartas do jogo;
Manipulamos os botões do jogo alterando a visibilidade.

Desafios dessa aula!
Crie uma carta super trunfo invencível;
Altere as rodadas para a máquina jogar escolhendo um atributo;
Altere para que o vencedor da rodada, ganhe a carta do perdedor.

Links importantes para você acompanhar a aula
Codepen - editor de código online
HTML, CSS e JavaScript, quais as diferenças(https://www.alura.com.br/artigos/html-css-e-js-definicoes)
Repositório do código final da aula 8(https://codepen.io/imersao-dev/pen/dyNyyqQ)

Links citados nessa aula
Mais sobre variáveis(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types#vari%C3%A1veis)
Mais sobre a função parseFloat(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)

Conteúdos extras:
Como abrir um projeto do CodePen no VSCode(https://www.youtube.com/watch?v=xvkuNF_8Coc)
JavaScript segundo a documentação(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
Primeiros passos na programação(https://hipsters.tech/primeiros-passos-na-programacao-a-imersao-dev-hipsters-ponto-tech-243/)
5 minutos de HTML(https://www.youtube.com/watch?v=3oSIqIqzN3M)*/