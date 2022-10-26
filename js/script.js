function  trocarBotao (){
 const element1 = document.getElementById('botao').value;
 const element2 = document.getElementById('botao_cod').value;
 const element3 = document.getElementById('botao_desc').value;

 if (document.getElementById('botao_cod').checked){
      document.getElementById('botao').value='Codificar';
 }
 else {
      document.getElementById('botao').value="Decodificar"
 }
}

function codfique (){

}