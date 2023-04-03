
let prato;
let bebida;
let sobremesa;
let valorprato = 0;
let valorbebida = 0;
let valorsobremesa = 0;
let valortotal = 0;
let conteudofecharpedido = "Selecione os 3 itens</br>" + "para fechar o pedido";
document.getElementById("fecharpedido").innerHTML = conteudofecharpedido;
function selecionarprato(pratoselecionado) {
    const botaoSelecionadoAnteriormente = document.querySelector('.prato .selecionado');
    console.log(botaoSelecionadoAnteriormente);
    // se existir botao selecionado, 
    if (botaoSelecionadoAnteriormente !== null) {
        //remove o icon do selecionado
        document.querySelector('.prato .selecionado .icon').classList.toggle('icons');
        //remove o selecionado do botão
        botaoSelecionadoAnteriormente.classList.remove('selecionado');
    }
    // buscar o novo botao clicado
    const botao = document.querySelector(pratoselecionado);
    // adiciona a classe selecionado
    botao.classList.toggle('selecionado');
    //adiciona o prato selecionado a uma variavel
    prato = document.querySelector('.prato .selecionado .h4').innerHTML;
    //adiciona o icon ao produto selecionado
    document.querySelector('.prato .selecionado .icon').classList.remove('icons');
    if (pratoselecionado === '#frango') {
        valorprato = 20;
    } else if (pratoselecionado === '#carne') {
        valorprato = 30;
    } else if (pratoselecionado === '#peixe') {
        valorprato = 35;
    }
}


function selecionarbebida(bebidaselecionado) {
    const botaoSelecionadoAnteriormente = document.querySelector('.bebida .selecionado');
    console.log(botaoSelecionadoAnteriormente);
    // se existir botao selecionado, 
    if (botaoSelecionadoAnteriormente !== null) {
        //remove o icon do selecionado
        document.querySelector('.bebida .selecionado .icon').classList.toggle('icons')
        //remove o selecionado do botão
        botaoSelecionadoAnteriormente.classList.remove('selecionado');
    }
    // buscar o novo botao clicado
    const botao = document.querySelector(bebidaselecionado);
    // adiciona a classe selecionado
    botao.classList.toggle('selecionado');
    //adiciona a bebida selecionada a uma variavel
    bebida = document.querySelector('.bebida .selecionado .h4').innerHTML;
    //adiciona icon a bebida selecionada
    document.querySelector('.bebida .selecionado .icon').classList.remove('icons');
    if (bebidaselecionado === '#coca') {
        valorbebida = 6.50;
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
        //remove o icon do selecionado
        document.querySelector('.sobremesa .selecionado .icon').classList.toggle('icons');
        //remove o selecionado do botao
        botaoSelecionadoAnteriormente.classList.remove('selecionado');
    }
    // buscar o novo botao clicado
    const botao = document.querySelector(sobremesaselecionado);
    // adiciona a classe selecionado
    botao.classList.toggle('selecionado');
    //adiciona o produto selecionado a uma variavel
    sobremesa = document.querySelector('.sobremesa .selecionado .h4').innerHTML;
    //adiciona icon ao produto selecionado
    document.querySelector('.sobremesa .selecionado .icon').classList.remove('icons');
    if (sobremesaselecionado === '#pudim') {
        valorsobremesa = 6.50;
    } else if (sobremesaselecionado === '#brigadeiro') {
        valorsobremesa = 5;
    } else if (sobremesaselecionado === '#churros') {
        valorsobremesa = 4;
    }
}

function finalizar() {
    valortotal = valorprato + valorbebida + valorsobremesa;
    if (valorprato > 0 & valorbebida > 0 & valorsobremesa > 0) {
        document.getElementById("fecharpedido").innerHTML = "Fechar pedido";
        document.getElementById("finalizarpedido").style.backgroundColor = "green";
        document.getElementById("finalizarpedido").disabled = false;
    }
}

function finalizarpedido() {
    if (valorprato > 0 & valorbebida > 0 & valorsobremesa > 0) {
        let msg = 'Olá, gostaria de fazer o pedido:' + '\r\n' +
            '- Prato: ' + prato + '\n- Bebida: ' + bebida + '\n- Sobremesa: ' + sobremesa + '\nTotal: R$ ' + valortotal;
        let msg1 = msg.replace('.', ',');
        if (msg1 === msg) {
            msg1 = msg + ',00';
        } else { msg1 = msg1 + '0' }
        msg1 = window.encodeURIComponent(msg1);
        let wpplink = "https://api.whatsapp.com/send?phone=5571991137877" + "&text=" + msg1;
        window.open(wpplink, "_blank");
    }
}

