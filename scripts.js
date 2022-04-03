//Capturando elementos da pagina HTML.
var converterDe = document.getElementById('converterDe');
var converterPara = document.getElementById('converterPara');
var valorMoeda = document.getElementById('valorMoeda');
var btn = document.querySelector('#btnConverter');

let converteValores = async() => {
    const url = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BRL-USD,EUR-USD,BRL-EUR,USD-EUR'
    const response = await fetch(url).then(response => response.json())

    const dolarReal = response.USDBRL.ask;
    const euroReal = response.EURBRL.ask;

    const realDolar = response.BRLUSD.ask;
    const euroDolar = response.EURUSD.ask;
    
    const realEuro = response.BRLEUR.ask;
    const dolarEuro = response.USDEUR.ask;

        
}

console.log(cotacaoAtual);

converterDe.addEventListener('change', mudaConverterDe = event => {
    var valorMoedaAatual = document.getElementById('valorMoedaAatual');
    const imgAConverter = document.getElementById('imgAConverter');

    const moedaAtual = event.target.value;
    const classeAtualSimbulo = imgAConverter.className;
    var valorPadrao = valorMoeda.placeholder;


    if (moedaAtual === 'Dólar') {
        imgAConverter.classList.replace(classeAtualSimbulo, 'imgDolar');
        valorPadrao = 'US$ 5.000,00'
        valorMoedaAatual.innerHTML = valorPadrao;
        
    }
    else if (moedaAtual === 'Euro') {
        imgAConverter.classList.replace(classeAtualSimbulo, 'imgEuro');
        valorPadrao = '€ 5.000,00'
        valorMoedaAatual.innerHTML = valorPadrao;
    }
    else {
        imgAConverter.classList.replace(classeAtualSimbulo, 'imgBr');
        valorPadrao = 'R$ 5.000,00'
        valorMoedaAatual.innerHTML = valorPadrao;
    }
    console.log(valorMoeda)
});

//Evento responsável por mudar a cor do botão.
converterPara.addEventListener('change', mudaConverterPara = event => {
    const imgConvertido = document.getElementById('imgConvertido')
    const moedaAtual = event.target.value;
    const classeAtualBtn = btn.className;
    const classeAtualSimbulo = imgConvertido.className;

    if (moedaAtual === 'Dólar') {
        btn.classList.replace(classeAtualBtn,'converterUsa');
        imgConvertido.classList.replace(classeAtualSimbulo, 'imgDolar');
    }
    else if (moedaAtual === 'Euro') {
        btn.classList.replace(classeAtualBtn,'converterEro');
        imgConvertido.classList.replace(classeAtualSimbulo, 'imgEuro');
    }
    else {
        btn.classList.replace(classeAtualBtn,'converterBr');
        imgConvertido.classList.replace(classeAtualSimbulo, 'imgBr');
    }
});



btn.addEventListener('click', converteValores);
window.addEventListener('load', carregarTudo = event => {
    valorMoedaAatual.innerHTML = '2'
});