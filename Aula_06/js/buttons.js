import { calculate } from "/js/utilities.js";

// botões laranja

const allButtons = [];

const apagar = document.createElement("button");
apagar.innerHTML = "AC";
apagar.id = "bttn-apagar";
apagar.value = "apagar";
allButtons.push(apagar);

const inverter = document.createElement("button");
inverter.id = "bttn-inverter";
inverter.innerHTML = "+/-";
inverter.value = "inverter";
allButtons.push(inverter);

const porcentagem = document.createElement("button");
porcentagem.id = "bttn-porcentagem";
porcentagem.innerHTML = "%";
porcentagem.value = "porcentagem";
allButtons.push(porcentagem);

const divisao = document.createElement("button");
divisao.id = "bttn-divisao";
divisao.innerHTML = "/";
divisao.value = "divisao";
allButtons.push(divisao);

const sete = document.createElement("button");
sete.id = "bttn-sete";
sete.innerHTML = "7";
sete.value = 7;
allButtons.push(sete);

const oito = document.createElement("button");
oito.id = "bttn-oito";
oito.innerHTML = "8";
oito.value = 8;
allButtons.push(oito);

const nove = document.createElement("button");
nove.id = "bttn-nove";
nove.innerHTML = "9";
nove.value = 9;
allButtons.push(nove);

const multiplicacao = document.createElement("button");
multiplicacao.id = "bttn-multiplicacao";
multiplicacao.innerHTML = "*";
multiplicacao.value = "multiplicacao";
allButtons.push(multiplicacao);

const quatro = document.createElement("button");
quatro.id = "bttn-quatro";
quatro.innerHTML = "4";
quatro.value = 4;
allButtons.push(quatro);

const cinco = document.createElement("button");
cinco.id = "bttn-cinco";
cinco.innerHTML = "5";
cinco.value = 5;
allButtons.push(cinco);

const seis = document.createElement("button");
seis.id = "bttn-seis";
seis.innerHTML = "6";
seis.value = 6;
allButtons.push(seis);

const subtracao = document.createElement("button");
subtracao.id = "bttn-subtracao";
subtracao.innerHTML = "-";
subtracao.value = "subtracao";
allButtons.push(subtracao);

const um = document.createElement("button");
um.id = "bttn-um";
um.innerHTML = "1";
um.value = 1;
allButtons.push(um);

const dois = document.createElement("button");
dois.id = "bttn-dois";
dois.innerHTML = "2";
dois.value = 2;
allButtons.push(dois);

const tres = document.createElement("button");
tres.id = "bttn-tres";
tres.innerHTML = "3";
tres.value = 3;
allButtons.push(tres);

const soma = document.createElement("button");
soma.id = "bttn-soma";
soma.innerHTML = "+";
soma.value = "soma";
allButtons.push(soma);

const zero = document.createElement("button");
zero.id = "bttn-zero";
zero.innerHTML = "0";
zero.value = 0;
allButtons.push(zero);

const virgula = document.createElement("button");
virgula.id = "bttn-virgula";
virgula.innerHTML = ",";
virgula.value = ",";
allButtons.push(virgula);

const igual = document.createElement("button");
igual.id = "bttn-igual";
igual.innerHTML = "=";
igual.value = "=";
allButtons.push(igual);

export { allButtons };
