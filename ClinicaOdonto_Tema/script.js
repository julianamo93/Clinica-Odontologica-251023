
//preenchendo a minha VAR com meu elemento title-text do index
function mudarLinguagem(linguagem){
    var titleText = document.getElementById('title-text')
    if(linguagem =='pt'){
    //verdadeiro para PT
    titleText.innerText='Clinica Odontológica'
    }
    else{
        //inglês
        titleText.innerText='Dental Clinic'
    }
}



//função para alterar entres os temas
function mudarTema(){

    //pegando elemento body
    //document.body é um atalho direto já fornecido pelo
    //objeto document para acessar o elemento <body>.
    var body = document.body;

    //Para elementos semânticos, ou de texto, 
    //precisamos utilizar métodos de seleção do DOM, como querySelector
    var header = document.querySelector("Header");

    //verifica se o body possui a classe 'light-theme'
    if(body.classList.contains('light-theme')){
        //se for verdadeiro
        //removendo a classe light-theme
        body.classList.remove('light-theme')
        //adicionando a classe dark-theme
        body.classList.add('dark-theme')
    }
    else{
        body.classList.remove('dark-theme')
        body.classList.add('light-theme')
    }
    if(header.classList.contains('header-light')){
        header.classList.remove('header-light')
        header.classList.add('header-dark')
    }
    else{
        header.classList.remove('header-dark')
        header.classList.add('header-light')
    }
}
