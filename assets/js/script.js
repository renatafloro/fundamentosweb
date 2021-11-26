/* 
Case sensitive: reconhece letras maiusculas e minusculas
por tag: getElementyByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let mensagem = document.querySelector("#mensagem")
let nomeOk = false
let emailOk = false
let mensagemOk = false
let mapa= document.querySelector("#mapa")

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3){
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color= "red"
    } else{
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color= "green"
        nomeOk = true
    }
}
function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf("@")== -1 ||email.value.indexOf(".")== -1){
        txtEmail.innerHTML= "Insira um E-mail válido"
        txtEmail.style.color= "red"
    } else{
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color= "green"
        emailOk= true
    }
}
function validaMensagem(){
    let mensagem= document.querySelector("#mensagem")
    let txtMensagem= document.querySelector("#txtMensagem")

    if (mensagem.value.length >=100) {
        txtMensagem.innerHTML = "Texto muito grande, por favor digite no máximo 100 caracteres"
        txtMensagem.style.color ="red"
        txtMensagem.style.display = "block"
        } else{
        txtMensagem.innerHTML= "Texto válido"
        txtMensagem.style.color = "green"
        mensagemOk= true
        }       
}
function enviar(){
    if(nomeOk == true && emailOk == true && mensagemOk == true){
        alert("Formulário enviado com sucesso")
    }else{
        alert("Preencha o formulário corretamente antes de enviar")
    }
}

/*Não funcionou*/
function mapaZoom(){
    mapa.style.width = "900px"
    mapa.style.heigth = '900px'
}

function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = '250px'
}