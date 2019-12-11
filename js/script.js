$.getJSON("js/database.json", function(data) {
    //setando variavel para receber o json
    var bands = data.bands;

    //buscando no HTML as DIVs para criar depois o conteúdo
    var elemento = document.querySelector('#painel');
    var divSection = document.querySelector('#subPainel');


    //Criando a section
    var subSection = document.createElement('section');                

    divSection.appendChild(subSection);

    //Criando a div do sub botão
    var divButton = document.createElement('div');
    divButton.classList.add('d-flex');
    divButton.classList.add('justify-content-center');
    divButton.classList.add('botoes');


    subSection.appendChild(divButton);

    //percorrendo o JSON
    for(band of bands) {

        var teste = (band.interno.nomeBotao);

        console.log(teste);

        var internos = band.interno;
        var nomeBotoes = "";


        for (interno of internos){

            //Criando o sub botão
            var subButton = document.createElement('button');
            subButton.setAttribute('type', 'button');
            subButton.classList.add('btn');
            subButton.classList.add('btn-outline-info');
            subButton.classList.add('btn-lg');
            subButton.classList.add('subBotao');
            subButton.setAttribute('onclick', 'window.open("'+interno.linkInterno+'")');
            subButton.appendChild(document.createTextNode(interno.nomeBotao));
            subButton.setAttribute('id', interno.nomeBotao);
            subButton.classList.add('toggleClass');

            var imagemSubButton = document.createElement('img');
            imagemSubButton.setAttribute('src', 'img/'+band.imagem);
            imagemSubButton.setAttribute('alt', band.nomeBotao);

            subButton.appendChild(imagemSubButton);

            divButton.appendChild(subButton); 

            if(nomeBotoes == ""){
                nomeBotoes = interno.nomeBotao;
            } else {
                nomeBotoes = interno.nomeBotao+"#"+nomeBotoes;
            }

        }


        //Criando os botões
        var buttonElement = document.createElement('button');
        buttonElement.classList.add('btn');
        buttonElement.classList.add('btn-outline-success');
        buttonElement.setAttribute('onclick', band.link == "" ? "botaoClasse('"+nomeBotoes+"')" : "window.open('"+band.link+"')");

        elemento.appendChild(buttonElement);

        //Criando as imagens
        var imagemElement = document.createElement('img');
        imagemElement.classList.add('card-img-top');
        imagemElement.setAttribute('src', 'img/'+band.imagem);
        imagemElement.setAttribute('alt', band.nomeImagem);

        buttonElement.appendChild(imagemElement);

        //Criando os textos dos botões
        var divTexto = document.createElement('div');
        divTexto.classList.add('card-body');

        var textoElement = document.createElement('h5');
        textoElement.classList.add('card-title');
        textoElement.appendChild(document.createTextNode(band.nomeImagem));

        divTexto.appendChild(textoElement);
        buttonElement.appendChild(divTexto);


    }         

});

//Função para receber os nomes dos sub botões, splitar eles e remover/add a classe "toggleClass"
function botaoClasse(nomeBotoes) {

    var splitBotoes = nomeBotoes.split('#');
    for(splitBotao of splitBotoes) {
        subButton = document.getElementById(splitBotao);
        subButton.classList.toggle("toggleClass");
    }
}