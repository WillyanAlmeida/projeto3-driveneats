
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
function selecionarfrango(){
    document.getElementById("frango").style.borderColor = "green";
    document.getElementById("carne").style.borderColor = "white";
    document.getElementById("peixe").style.borderColor = "white";
    prato = "frango";
    valorprato = 20;
    x2 = 1; 
   
}
function selecionarcarne() {
    document.getElementById("carne").style.borderColor = "green";
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("peixe").style.borderColor = "white";
    prato = "carne";
    valorprato = 30;
    x2 = 1; 
}
function selecionarpeixe() {
    document.getElementById("peixe").style.borderColor = "green";
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("carne").style.borderColor = "white";
    prato = "peixe";
    valorprato = 35;
    x2 = 1; 
}

function selecionarcoca(){
    document.getElementById("coca").style.borderColor = "green";
    document.getElementById("suco").style.borderColor = "white";
    document.getElementById("agua").style.borderColor = "white";
    bebida = "coca";
    valorbebida = 6.5;
    x3 = 1;
}
function selecionarsuco() {
    document.getElementById("suco").style.borderColor = "green";
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("agua").style.borderColor = "white";
    bebida = "suco";
    valorbebida = 10;
    x3 = 1;
}
function selecionaragua() {
    document.getElementById("agua").style.borderColor = "green";
    document.getElementById("suco").style.borderColor = "white";
    document.getElementById("coca").style.borderColor = "white";
    bebida = "agua";
    valorbebida = 4;
    x3 = 1;
}

function selecionarpudim(){
    document.getElementById("pudim").style.borderColor = "green";
    document.getElementById("churros").style.borderColor = "white";
    document.getElementById("brigadeiro").style.borderColor = "white";
    sobremesa = "pudim";
    valorsobremesa = 6.5;
    x4 = 1;
}
function selecionarbrigadeiro() {
    document.getElementById("brigadeiro").style.borderColor = "green";
    document.getElementById("pudim").style.borderColor = "white";
    document.getElementById("churros").style.borderColor = "white";
    sobremesa = "brigadeiro";
    valorsobremesa = 5;
    x4 = 1;
}
function selecionarchurros() {
    document.getElementById("churros").style.borderColor = "green";
    document.getElementById("brigadeiro").style.borderColor = "white";
    document.getElementById("pudim").style.borderColor = "white";
    sobremesa = "churros";
    valorsobremesa = 4;
    x4 = 1;
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

