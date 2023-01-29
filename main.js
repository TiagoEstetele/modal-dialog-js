const modal = document.querySelector('dialog');
const buttonClose = document.querySelector('dialog button');


//Função de mostrar o modal
function showModal() {
    modal.showModal();
}
showModal();

//Botão de fechar modal
buttonClose.onclick = function() {
    modal.close();
}

