
let prato;
let bebida;
let sobremesa;
let valorprato=0;
let valorbebida=0;
let valorsobremesa=0;
let valortotal=0;
const x0=3;
let x1=3;
let x2=0;
let x3=0;
let x4=0;
let conteudofecharpedido = "Selecione os " +x1+ " item(s) para fechar o pedido";
document.getElementById("fecharpedido").innerHTML = conteudofecharpedido;
function selecionarprato(pratoselecionado){
    const botaoSelecionadoAnteriormente = document.querySelector('.prato .selecionado');
    console.log(botaoSelecionadoAnteriormente);
    // se existir botao selecionado, 
    if ( botaoSelecionadoAnteriormente !== null ){
        //remove a classe selecionado desse botao
        document.querySelector('.prato .selecionado .icon').classList.toggle('icons');
        botaoSelecionadoAnteriormente.classList.remove('selecionado');
        
    }
    
    
    // buscar o novo botqo clicado
    const botao = document.querySelector(pratoselecionado);
    //const icon = document.querySelector(pratoselecionado ,'.icons');
    //icon = document.querySelector(icon);
    //console.log(icon);
    //icon.classList.toggle('icons').lastElementChild;
    //botao.classList.toggle('icons').lastElementChild;
    // adiciona a classe selecionado
    botao.classList.toggle('selecionado');
    document.querySelector('.prato .selecionado .icon').classList.remove('icons');
    //icon.classList.toggle('icon');
    x2=1;
    if (pratoselecionado==='#frango'){
        valorprato=20.9;
    }else if(pratoselecionado==='#carne'){
        valorprato=30.9;
    }else if(pratoselecionado==='#peixe'){
        valorprato=35.9;
    }
    
    console.log(valorprato);
    
}


function selecionarbebida(bebidaselecionado){
    const botaoSelecionadoAnteriormente = document.querySelector('.bebida .selecionado');
    console.log(botaoSelecionadoAnteriormente);
    // se existir botao selecionado, 
    if ( botaoSelecionadoAnteriormente !== null ){
        //remove a classe selecionado desse botao
        document.querySelector('.bebida .selecionado .icon').classList.toggle('icons')
        botaoSelecionadoAnteriormente.classList.remove('selecionado');
    }
    
    
    // buscar o novo botqo clicado
    const botao = document.querySelector(bebidaselecionado);
    
    // adiciona a classe selecionado
    botao.classList.toggle('selecionado');
    document.querySelector('.bebida .selecionado .icon').classList.remove('icons');
    x3=1;
    if (bebidaselecionado==='#coca'){
        valorbebida=6.5;
    }else if(bebidaselecionado==='#suco'){
        valorbebida=10;
    }else if(bebidaselecionado==='#agua'){
        valorbebida=4;
    }
}
function selecionarsobremesa(sobremesaselecionado){
    const botaoSelecionadoAnteriormente = document.querySelector('.sobremesa .selecionado');
    console.log(botaoSelecionadoAnteriormente);
    // se existir botao selecionado, 
    if ( botaoSelecionadoAnteriormente !== null ){
        //remove a classe selecionado desse botao
        document.querySelector('.sobremesa .selecionado .icon').classList.toggle('icons')
        botaoSelecionadoAnteriormente.classList.remove('selecionado');
    }
    
    
    // buscar o novo botqo clicado
    const botao = document.querySelector(sobremesaselecionado);
    
    // adiciona a classe selecionado
    botao.classList.toggle('selecionado');
    document.querySelector('.sobremesa .selecionado .icon').classList.remove('icons');
    x4=1;
    if (sobremesaselecionado==='#pudim'){
        valorsobremesa=6.5;
    }else if(sobremesaselecionado==='#brigadeiro'){
        valorsobremesa=5;
    }else if(sobremesaselecionado==='#churros'){
        valorsobremesa=4;
    }

}

function finalizar(){
    valortotal = valorprato+valorbebida+valorsobremesa;
    x1=x0-(x2+x3+x4);/* contador de items restantes para selecionar */
    conteudofecharpedido = "Selecione os " +x1+ " item(s) restantes para fechar o pedido Valor total R$ "+valortotal;
    document.getElementById("fecharpedido").innerHTML = conteudofecharpedido;
if(valorprato>0&valorbebida>0&valorsobremesa>0){
    valortotal = valorprato+valorbebida+valorsobremesa;
    document.getElementById("fecharpedido").innerHTML = "finalizar pedido! " + "Valor total: R$"+valortotal;
    document.getElementById("finalizarpedido").style.backgroundColor = "green";
    document.getElementById("finalizarpedido").disabled = false;

}}
function finalizarpedido(){



}

