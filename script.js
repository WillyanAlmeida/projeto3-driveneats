
let prato;
let bebida;
let sobremesa;
let valorprato=0;
let valorbebida=0;
let valorsobremesa=0;
let valortotal=0;
function selecionarfrango(){
    document.getElementById("frango").style.borderColor = "green";
    document.getElementById("carne").style.borderColor = "white";
    document.getElementById("peixe").style.borderColor = "white";
    prato = "frango";
    valorprato = 20.9;

}
function selecionarcarne() {
    document.getElementById("carne").style.borderColor = "green";
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("peixe").style.borderColor = "white";
    prato = "carne";
    valorprato = 30.9;
}
function selecionarpeixe() {
    document.getElementById("peixe").style.borderColor = "green";
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("carne").style.borderColor = "white";
    prato = "peixe";
    valorprato = 35.9;
}

function selecionarcoca(){
    document.getElementById("coca").style.borderColor = "green";
    document.getElementById("suco").style.borderColor = "white";
    document.getElementById("agua").style.borderColor = "white";
    bebida = "coca";
    valorbebida = 6.5;
}
function selecionarsuco() {
    document.getElementById("suco").style.borderColor = "green";
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("agua").style.borderColor = "white";
    bebida = "suco";
    valorbebida = 10;
}
function selecionaragua() {
    document.getElementById("agua").style.borderColor = "green";
    document.getElementById("suco").style.borderColor = "white";
    document.getElementById("coca").style.borderColor = "white";
    bebida = "agua";
    valorbebida = 4;
}

function selecionarpudim(){
    document.getElementById("pudim").style.borderColor = "green";
    document.getElementById("churros").style.borderColor = "white";
    document.getElementById("brigadeiro").style.borderColor = "white";
    sobremesa = "pudim";
    valorsobremesa = 6.5;
}
function selecionarbrigadeiro() {
    document.getElementById("brigadeiro").style.borderColor = "green";
    document.getElementById("pudim").style.borderColor = "white";
    document.getElementById("churros").style.borderColor = "white";
    sobremesa = "brigadeiro";
    valorsobremesa = 5;
}
function selecionarchurros() {
    document.getElementById("churros").style.borderColor = "green";
    document.getElementById("brigadeiro").style.borderColor = "white";
    document.getElementById("pudim").style.borderColor = "white";
    sobremesa = "churros";
    valorsobremesa = 4;
}

valortotal = valorprato+valorbebida+valorsobremesa;