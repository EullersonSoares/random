

const total = document.querySelectorAll('.sem-pro'), vp = document.querySelectorAll('.preco-do-produto');
let parcela = price => `${price/10},00`;

for(i=0;i<total.length;i++){
    let stringV = total[i].innerText, numberV = stringV.match(/\d/g), val = parseInt(stringV);
    let valor = parcela(val);
    vp[i].innerHTML = valor;
}





const card = document.querySelectorAll('.card-do-produto');
const sempromocao = document.querySelectorAll('.sem-promocao .woocommerce-Price-amount bdi'), promocional = document.querySelectorAll('.sale-price .woocommerce-Price-amount bdi'), precoparcela = document.querySelectorAll('.preco-parcelado');

let numero = (texto) => {
    let array = texto.match(/\d+/g), preco, valorEmTexto = ""; //variáveis da aplicação

    //junção das strings separadas na array
    for(e = 0; e < array.length; e++) {  
        valorEmTexto = valorEmTexto + array[e];
    };

    //conversão de string para number (preparação para o cálculo);
    let n = parseInt(valorEmTexto);

    let div = n/100; //calculo;

    let valor = div/10;

    return `R$${valor.toLocaleString('de-DE', {minimumFractionDigits: 2})}`; //valor da porcentagem em string
};    

function qualAClasse() {
    if(card.length > 0) {
        for(i=0;i<card.length;i++) {
            if(card[i].children[0].children[0].children[0].children[10].classList.contains('sem-promocao')) {
                let parcela = numero(sempromocao[i].textContent);
                precoparcela[i].innerHTML = parcela;
            } else {
                let parcela = numero(promocional[i].textContent);
                precoparcela[i].innerHTML = parcela;
            };
        }
    } else {
        if(promocional.length > 0) {
            let parcela = numero(promocional[i].textContent);
            precoparcela[i].innerHTML = parcela;
        } else {
            let parcela = numero(sempromocao[i].textContent);
            precoparcela[i].innerHTML = parcela;
        };
    }      
};

setTimeout(() => {
    qualAClasse();
}, 600);
