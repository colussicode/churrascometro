let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalAgua = aguaPP(duracao) * adultos + (aguaPP(duracao) / 2 * criancas);
    
    resultado.innerHTML = `<p>Quantidade total de carne: ${qtdTotalCarne}g</p>`
    resultado.innerHTML += `<p>Quantidade total de cerveja: ${qtdTotalCerveja}ml</p>`
    resultado.innerHTML += `<p>Quantidade total de agua e refri: ${qtdTotalAgua}ml</p>`
}

function carnePP (duracao) {
    if(duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP (duracao) {
    if(duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function aguaPP (duracao) {
    if(duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}