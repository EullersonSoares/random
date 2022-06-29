setTimeout(function(){
//Identificaçao de Elementos e Popups:
var imagensdocatalogo = $('div#imagem-catalogo'); 
var popupsdisponiveis = $('section#popup-container');
var loop = 0;

do {
    texto = loop.toString();
    $(imagensdocatalogo[loop]).addClass(texto);
    $(popupsdisponiveis[loop]).addClass(texto);

    loop++;
} while (loop <= imagensdocatalogo.length);

//abrir popup:
$(imagensdocatalogo).click(function(){
    var classefinal = $(this).attr('class'), 
        ultimaClasse = classefinal.substr( classefinal.lastIndexOf(' ') + 1);
    
    var numeroReferencia = parseInt(ultimaClasse);
    $(popupsdisponiveis[numeroReferencia]).show();

    $('html, body').css('overflow-y', 'hidden');
});

//fechar popup:
$('div#fechar-popup').click(function(){
    var qnt = 0;

    do {
        $(popupsdisponiveis[qnt]).hide();
        qnt++;
    } while(qnt <= imagensdocatalogo.length);

    $('html, body').css('overflow-y', 'auto');
});

},5000);


setTimeout(function(){
    //Identificaçao de Elementos e Popups:
    var imagensdocatalogo = $('div#imagem-catalogo'); 
    var popupsdisponiveis = $('section#popup-container');
    var loop = 0;

    do {
        texto = loop.toString();
        $(imagensdocatalogo[loop]).addClass(texto);
        $(popupsdisponiveis[loop]).addClass(texto);

        loop++;
    } while (loop <= imagensdocatalogo.length);

    //abrir popup:
    $(imagensdocatalogo).click(function(){
        var classefinal = $(this).attr('class'), 
            ultimaClasse = classefinal.substr( classefinal.lastIndexOf(' ') + 1);
        
        var numeroReferencia = parseInt(ultimaClasse);
        $(popupsdisponiveis[numeroReferencia]).show();
        $('html, body').css('overflow-y', 'hidden');

        clickhide();
    });

    //fechar popup:
    $('div#fechar-popup').click(function(){
        var qnt = 0;

        do {
            $(popupsdisponiveis[qnt]).hide();
            qnt++;
        } while(qnt <= imagensdocatalogo.length);

        $('html, body').css('overflow-y', 'auto');
    });
},5000);

function clickhide() {
    let popupshow = $('section#popup-container');
    let verify = 0;
    do {
        if($(popupshow[verify]).css('display') === 'block') {
            $(document).click(function(){
                if($(event.target).closest("section#popup-container .elementor-widget-wrap.elementor-element-populated").length == 0) {
                    $(popupshow[verify]).css('display', 'none');
                }
            });       
        }
    } while(verify <= popupshow.length);
};



let popupshow = $('section#popup-container');
let verify = 0;
do {
    if($(popupshow[verify]).css('display') === 'block') {
        $(document).click(function(){
            if($(event.target).closest("section#popup-container .elementor-widget-wrap.elementor-element-populated").length == 0) {
                var cssdisplay = $(popupshow[verify]).css('display');
                alert(cssdisplay);
            }
        });      
    }

    verify++;
} while(verify <= popupshow.length);


function redfineLink() {

    let buttonName = document.querySelector('.woocommerce-Button.button');

    if (buttonName.innerHTML == "Ver Produtos") {
        buttonName.setAttribute('href', 'https://frosty.com.br/frosty-no-seu-evento/');
    }

}

redfineLink();

$('#card-interacao a').click(function(){
    $('#card-interacao:nth-child(1) #inativo').css('display', 'block');
    $('#card-interacao:nth-child(1) #ativo').css('display', 'none');
    $('#card-interacao:nth-child(2) #inativo').css('display', 'block');
    $('#card-interacao:nth-child(2) #ativo').css('display', 'none');
    $('#card-interacao:nth-child(3) #inativo').css('display', 'block');
    $('#card-interacao:nth-child(3) #ativo').css('display', 'none');
    $('#card-interacao:nth-child(4) #inativo').css('display', 'block');
    $('#card-interacao:nth-child(4) #ativo').css('display', 'none');

    setTimeout(()=>{
        let link = $(this).attr('href');
        switch(link) {
            case "#politica-de-privacidade": 
                $('#card-interacao:nth-child(1) #inativo').css('display', 'none');
                $('#card-interacao:nth-child(1) #ativo').css('display', 'block');
            break;
            case "#politica-de-cookies": 
                $('#card-interacao:nth-child(2) #inativo').css('display', 'none');
                $('#card-interacao:nth-child(2) #ativo').css('display', 'block');
            break;
            case "#pref": 
                $('#card-interacao:nth-child(3) #inativo').css('display', 'none');
                $('#card-interacao:nth-child(3) #ativo').css('display', 'block');
            break;
            case "#dados": 
                $('#card-interacao:nth-child(4) #inativo').css('display', 'none');
                $('#card-interacao:nth-child(4) #ativo').css('display', 'block');
            break;
        }
    },500);
});


$('div#slide-de-oportunidades img').click(function() {
    //modificação do atributo src.
    let src = $(this).attr('src');
    $('.container.full-image #container #full').attr('src', src);

    //exibição do popup;
    $('.container.full-image').css('display', 'flex');
});


$('.container.full-image').click( function() {
    if($(event.target).closest(".container.full-image #container").length == 0) {
        //exibição do popup;
        $('.container.full-image').css('display', 'none');
    }
});      

