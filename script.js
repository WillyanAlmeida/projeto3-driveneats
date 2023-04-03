
let prato;
let bebida;
let sobremesa;
let valorprato = 0;
let valorbebida = 0;
let valorsobremesa = 0;
let valortotal = 0;
const x0 = 3;
let x1 = 3;
let x2 = 0;
let x3 = 0;
let x4 = 0;
let conteudofecharpedido = "Selecione os 3 itens para fechar o pedido";
document.getElementById("fecharpedido").innerHTML = conteudofecharpedido;
function selecionarprato(pratoselecionado) {
    const botaoSelecionadoAnteriormente = document.querySelector('.prato .selecionado');
    console.log(botaoSelecionadoAnteriormente);
    // se existir botao selecionado, 
    if (botaoSelecionadoAnteriormente !== null) {
        //remove a classe selecionado desse botao
        document.querySelector('.prato .selecionado .icon').classList.toggle('icons');
        botaoSelecionadoAnteriormente.classList.remove('selecionado');

    }


    // buscar o novo botqo clicado
    const botao = document.querySelector(pratoselecionado);

    // adiciona a classe selecionado
    botao.classList.toggle('selecionado');
    prato = document.querySelector('.prato .selecionado .h4').innerHTML;
    console.log(prato);
    document.querySelector('.prato .selecionado .icon').classList.remove('icons');
    //icon.classList.toggle('icon');
    x2 = 1;
    if (pratoselecionado === '#frango') {
        valorprato = 20.9;
    } else if (pratoselecionado === '#carne') {
        valorprato = 30.9;
    } else if (pratoselecionado === '#peixe') {
        valorprato = 35.9;
    }


}


function selecionarbebida(bebidaselecionado) {
    const botaoSelecionadoAnteriormente = document.querySelector('.bebida .selecionado');
    console.log(botaoSelecionadoAnteriormente);
    // se existir botao selecionado, 
    if (botaoSelecionadoAnteriormente !== null) {
        //remove a classe selecionado desse botao
        document.querySelector('.bebida .selecionado .icon').classList.toggle('icons')

        botaoSelecionadoAnteriormente.classList.remove('selecionado');
    }


    // buscar o novo botqo clicado
    const botao = document.querySelector(bebidaselecionado);

    // adiciona a classe selecionado
    botao.classList.toggle('selecionado');
    bebida = document.querySelector('.bebida .selecionado .h4').innerHTML;
    document.querySelector('.bebida .selecionado .icon').classList.remove('icons');
    x3 = 1;
    if (bebidaselecionado === '#coca') {
        valorbebida = 6.5;
    } else if (bebidaselecionado === '#suco') {
        valorbebida = 10;
    } else if (bebidaselecionado === '#agua') {
        valorbebida = 4;
    }
}
function selecionarsobremesa(sobremesaselecionado) {
    const botaoSelecionadoAnteriormente = document.querySelector('.sobremesa .selecionado');
    console.log(botaoSelecionadoAnteriormente);
    // se existir botao selecionado, 
    if (botaoSelecionadoAnteriormente !== null) {
        //remove a classe selecionado desse botao
        document.querySelector('.sobremesa .selecionado .icon').classList.toggle('icons');

        botaoSelecionadoAnteriormente.classList.remove('selecionado');
    }


    // buscar o novo botqo clicado
    const botao = document.querySelector(sobremesaselecionado);

    // adiciona a classe selecionado
    botao.classList.toggle('selecionado');
    sobremesa = document.querySelector('.sobremesa .selecionado .h4').innerHTML;
    console.log(sobremesa);
    document.querySelector('.sobremesa .selecionado .icon').classList.remove('icons');
    x4 = 1;
    if (sobremesaselecionado === '#pudim') {
        valorsobremesa = 6.5;
    } else if (sobremesaselecionado === '#brigadeiro') {
        valorsobremesa = 5;
    } else if (sobremesaselecionado === '#churros') {
        valorsobremesa = 4;
    }

}

function finalizar() {
    valortotal = valorprato + valorbebida + valorsobremesa;

    if (valorprato > 0 & valorbebida > 0 & valorsobremesa > 0) {
        valortotal = valorprato + valorbebida + valorsobremesa;
        document.getElementById("fecharpedido").innerHTML = "Fechar pedido";
        document.getElementById("finalizarpedido").style.backgroundColor = "green";
        document.getElementById("finalizarpedido").disabled = false;

    }
}
function finalizarpedido() {
    if (valorprato > 0 & valorbebida > 0 & valorsobremesa > 0){
    let msg = 'Olá, gostaria de fazer o pedido:' + '\r\n' +
        '- Prato: ' + prato + '\n- Bebida: ' + bebida + '\n- Sobremesa: ' + sobremesa + '\nTotal: R$ ' + valortotal;
        msg =  window.encodeURIComponent(msg);
    let wpplink = "https://api.whatsapp.com/send?phone=5571991137877" + "&text=" + msg;
    window.open(wpplink, "_blank");
    }


}

