//Capturando elementos da pagina HTML.
var converterDe = document.getElementById('converterDe');
var converterPara = document.getElementById('converterPara');
var valorMoeda = document.getElementById('valorMoeda');
var valorMoedaAtual = document.getElementById('valorMoedaAtual');
var valorMoedaConvertida = document.getElementById('valorMoedaConvertida');
var cotacaoAtual = document.getElementById('cotacaoAtual');
var btn = document.querySelector('#btnConverter');







let converteValores = async() => {
    const url = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BRL-USD,EUR-USD,BRL-EUR,USD-EUR'
    const response = await fetch(url).then(response => response.json())

    var dolarReal = response.USDBRL.ask;
    const euroReal = response.EURBRL.ask;

    const realDolar = response.BRLUSD.ask;
    const euroDolar = response.EURUSD.ask;
    
    const realEuro = response.BRLEUR.ask;
    const dolarEuro = response.USDEUR.ask;
}

console.log(converteValores.dolarReal);

converterDe.addEventListener('change', mudaConverterDe = event => {    
    const imgAConverter = document.getElementById('imgAConverter');

    const moedaAtual = event.target.value;
    const classeAtualSimbulo = imgAConverter.className;

    if (moedaAtual === 'Dólar') {
        imgAConverter.classList.replace(classeAtualSimbulo, 'imgDolar');
        valorMoeda.placeholder = 'US$ 5.000,00'
        valorMoedaAtual.innerHTML = valorMoeda.placeholder;
        
    }
    else if (moedaAtual === 'Euro') {
        imgAConverter.classList.replace(classeAtualSimbulo, 'imgEuro');
        valorMoeda.placeholder = '€ 5.000,00'
        valorMoedaAtual.innerHTML = valorMoeda.placeholder;
    }
    else {
        imgAConverter.classList.replace(classeAtualSimbulo, 'imgBr');
        valorMoeda.placeholder = 'R$ 5.000,00'
        valorMoedaAtual.innerHTML = valorMoeda.placeholder;
    }
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

