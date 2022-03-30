//Capturando elementos da pagina HTML.
var converterDe = document.getElementById('converterDe');
var converterPara = document.getElementById('converterPara');
var btn = document.querySelector('#btnConverter');

const url = ''

converterDe.addEventListener('change', mudaConverterDe = evento => {
    const imgAConverter = document.getElementById('imgAConverter');
    const moedaAtual = evento.target.value;
    const classeAtualSimbulo = imgAConverter.className;

    if (moedaAtual === 'Dólar') {
        imgAConverter.classList.replace(classeAtualSimbulo, 'imgDolar');
    }
    else if (moedaAtual === 'Euro') {
        imgAConverter.classList.replace(classeAtualSimbulo, 'imgEuro');
    }
    else {
        imgAConverter.classList.replace(classeAtualSimbulo, 'imgBr');
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

btn.addEventListener('click' converter = evet => {

})