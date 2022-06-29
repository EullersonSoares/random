//background-image: url(https://stg.kinghost.net/wp-content/uploads/2021/07/tray.png)

var BI = {
    img0: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/logo-modal.png)',
    img1: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/dooca_commerce_help.png)',
    img2: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/Nuvemshop.png)',
    img3: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/images.png)',
    img4: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/logo-max-commerce-site-2.png)',
    img5: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/logo.png)'
};

var BITwo = {
    img0: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/07/tray.png)',
    img1: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/07/dooca_commerce.png)',
    img2: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/07/nuvemshop-e1627664551863.png)', 
    img3: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/07/tray-corp.png)',
    img4: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/07/max-commerce-site.png)',
    img5: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/logo-lojaintegrada-1.png)'
};

$('#lista-de-parceiros .elementor-widget-container .elementor-swiper .elementor-main-swiper .swiper-wrapper .swiper-slide').hover(function(){
    var valueTag = $(this).attr('data-swiper-slide-index');
    
    switch(valueTag) {
        case '0': var tag = $(this).find('.elementor-carousel-image'); tag.attr('style', BI.img0);
        break;
        case '1': var tag = $(this).find('.elementor-carousel-image'); tag.attr('style', BI.img1);
        break;
        case '2': var tag = $(this).find('.elementor-carousel-image'); tag.attr('style', BI.img2);
        break;
        case '3': var tag = $(this).find('.elementor-carousel-image'); tag.attr('style', BI.img3);
        break;
        case '4': var tag = $(this).find('.elementor-carousel-image'); tag.attr('style', BI.img4);
        break;
        case '5': var tag = $(this).find('.elementor-carousel-image'); tag.attr('style', BI.img5);
        break;
        default: console.log("Não funcionou");
    }

}, function() {
    var valueTagTwo = $(this).attr('data-swiper-slide-index');

    switch(valueTagTwo) {
        case '0': var tagTwo = $(this).find('.elementor-carousel-image'); tagTwo.attr('style', BITwo.img0);
        break;
        case '1': var tagTwo = $(this).find('.elementor-carousel-image'); tagTwo.attr('style', BITwo.img1);
        break;
        case '2': var tagTwo = $(this).find('.elementor-carousel-image'); tagTwo.attr('style', BITwo.img2);
        break;
        case '3': var tagTwo = $(this).find('.elementor-carousel-image'); tagTwo.attr('style', BITwo.img3);
        break;
        case '4': var tagTwo = $(this).find('.elementor-carousel-image'); tagTwo.attr('style', BITwo.img4);
        break;
        case '5': var tagTwo = $(this).find('.elementor-carousel-image'); tagTwo.attr('style', BITwo.img5);
        break;
        default: console.log("Não funcionou");
    }
});

/*--- Alterações ---*/

var BI = {
    img0: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/logo-modal.png)',
    img1: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/dooca_commerce_help.png)',
    img2: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/Nuvemshop.png)',
    img3: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/images.png)',
    img4: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/logo-max-commerce-site-2.png)',
    img5: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/lojaintegrada.png)'
};

var BITwo = {
    img0: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/07/tray.png)',
    img1: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/07/dooca_commerce.png)',
    img2: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/07/nuvemshop-e1627664551863.png)', 
    img3: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/07/tray-corp.png)',
    img4: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/07/max-commerce-site.png)',
    img5: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/lojaintegradapb.png)'
};

$('#lista-de-parceiros .elementor-widget-container .elementor-swiper .elementor-main-swiper .swiper-wrapper .swiper-slide').hover(function (){
    var valueTag = $(this).attr('data-swiper-slide-index');
    
    switch(valueTag) {
        case '0': var tag = $(this).find('.elementor-carousel-image'); tag.attr('style', BI.img0);
        break;
        case '1': var tag = $(this).find('.elementor-carousel-image'); tag.attr('style', BI.img1);
        break;
        case '2': var tag = $(this).find('.elementor-carousel-image'); tag.attr('style', BI.img2);
        break;
        case '3': var tag = $(this).find('.elementor-carousel-image'); tag.attr('style', BI.img3);
        break;
        case '4': var tag = $(this).find('.elementor-carousel-image'); tag.attr('style', BI.img4);
        break;
        case '5': var tag = $(this).find('.elementor-carousel-image'); tag.attr('style', BI.img5);
        break;
        default: console.log("Não funcionou");
    }

}, function() {
    var valueTagTwo = $(this).attr('data-swiper-slide-index');

    switch(valueTagTwo) {
        case '0': var tagTwo = $(this).find('.elementor-carousel-image'); tagTwo.attr('style', BITwo.img0);
        break;
        case '1': var tagTwo = $(this).find('.elementor-carousel-image'); tagTwo.attr('style', BITwo.img1);
        break;
        case '2': var tagTwo = $(this).find('.elementor-carousel-image'); tagTwo.attr('style', BITwo.img2);
        break;
        case '3': var tagTwo = $(this).find('.elementor-carousel-image'); tagTwo.attr('style', BITwo.img3);
        break;
        case '4': var tagTwo = $(this).find('.elementor-carousel-image'); tagTwo.attr('style', BITwo.img4);
        break;
        case '5': var tagTwo = $(this).find('.elementor-carousel-image'); tagTwo.attr('style', BITwo.img5);
        break;
        default: console.log("Não funcionou");
    }
});


$(document).on(function() {
    insertImgBG();
});


var BI = {
    img0: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/logo-modal.png)',
    img1: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/dooca_commerce_help.png)',
    img2: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/Nuvemshop.png)',
    img3: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/images.png)',
    img4: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/logo-max-commerce-site-2.png)',
    img5: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/lojaintegrada.png)'
};

var BITwo = {
    img0: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/07/tray.png)',
    img1: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/07/dooca_commerce.png)',
    img2: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/07/nuvemshop-e1627664551863.png)', 
    img3: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/07/tray-corp.png)',
    img4: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/07/max-commerce-site.png)',
    img5: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/lojaintegradapb.png)'
};

$('#lista-de-parceiros .elementor-widget-container .elementor-swiper .elementor-main-swiper .swiper-wrapper div').hover(function insertImgBG(){
    var valueTag = $(this).attr('data-swiper-slide-index');
    
    switch(valueTag) {
        case '0': var tag = $(this).find('.elementor-carousel-image'); tag.attr('style', BI.img0);
        break;
        case '1': var tag = $(this).find('.elementor-carousel-image'); tag.attr('style', BI.img1);
        break;
        case '2': var tag = $(this).find('.elementor-carousel-image'); tag.attr('style', BI.img2);
        break;
        case '3': var tag = $(this).find('.elementor-carousel-image'); tag.attr('style', BI.img3);
        break;
        case '4': var tag = $(this).find('.elementor-carousel-image'); tag.attr('style', BI.img4);
        break;
        case '5': var tag = $(this).find('.elementor-carousel-image'); tag.attr('style', BI.img5);
        break;
        default: console.log("Não funcionou");
    }

}, function() {
    var valueTagTwo = $(this).attr('data-swiper-slide-index');

    switch(valueTagTwo) {
        case '0': var tagTwo = $(this).find('.elementor-carousel-image'); tagTwo.attr('style', BITwo.img0);
        break;
        case '1': var tagTwo = $(this).find('.elementor-carousel-image'); tagTwo.attr('style', BITwo.img1);
        break;
        case '2': var tagTwo = $(this).find('.elementor-carousel-image'); tagTwo.attr('style', BITwo.img2);
        break;
        case '3': var tagTwo = $(this).find('.elementor-carousel-image'); tagTwo.attr('style', BITwo.img3);
        break;
        case '4': var tagTwo = $(this).find('.elementor-carousel-image'); tagTwo.attr('style', BITwo.img4);
        break;
        case '5': var tagTwo = $(this).find('.elementor-carousel-image'); tagTwo.attr('style', BITwo.img5);
        break;
        default: console.log("Não funcionou");
    }
});

$(document).ready(function() {
    insertImgBG();
});


var BI = {
    img0: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/logo-modal.png)',
    img1: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/dooca_commerce_help.png)',
    img2: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/Nuvemshop.png)',
    img3: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/images.png)',
    img4: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/logo-max-commerce-site-2.png)',
    img5: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/lojaintegrada.png)'
};

var BITwo = {
    img0: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/07/tray.png)',
    img1: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/07/dooca_commerce.png)',
    img2: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/07/nuvemshop-e1627664551863.png)', 
    img3: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/07/tray-corp.png)',
    img4: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/07/max-commerce-site.png)',
    img5: 'background-image: url(http://stg.kinghost.net/wp-content/uploads/2021/08/lojaintegradapb.png)'
};

$('#lista-de-parceiros .elementor-widget-container .elementor-swiper .elementor-main-swiper .swiper-wrapper div').hover(function insertImgBG(){
    var valueTag = $(this).attr('data-swiper-slide-index');
    
    switch(valueTag) {
        case '0': var tag = $(this).find('.elementor-carousel-image'); tag.attr('style', BI.img0);
        break;
        case '1': var tag = $(this).find('.elementor-carousel-image'); tag.attr('style', BI.img1);
        break;
        case '2': var tag = $(this).find('.elementor-carousel-image'); tag.attr('style', BI.img2);
        break;
        case '3': var tag = $(this).find('.elementor-carousel-image'); tag.attr('style', BI.img3);
        break;
        case '4': var tag = $(this).find('.elementor-carousel-image'); tag.attr('style', BI.img4);
        break;
        case '5': var tag = $(this).find('.elementor-carousel-image'); tag.attr('style', BI.img5);
        break;
        default: console.log("Não funcionou");
    }

}, function() {
    var valueTagTwo = $(this).attr('data-swiper-slide-index');

    switch(valueTagTwo) {
        case '0': var tagTwo = $(this).find('.elementor-carousel-image'); tagTwo.attr('style', BITwo.img0);
        break;
        case '1': var tagTwo = $(this).find('.elementor-carousel-image'); tagTwo.attr('style', BITwo.img1);
        break;
        case '2': var tagTwo = $(this).find('.elementor-carousel-image'); tagTwo.attr('style', BITwo.img2);
        break;
        case '3': var tagTwo = $(this).find('.elementor-carousel-image'); tagTwo.attr('style', BITwo.img3);
        break;
        case '4': var tagTwo = $(this).find('.elementor-carousel-image'); tagTwo.attr('style', BITwo.img4);
        break;
        case '5': var tagTwo = $(this).find('.elementor-carousel-image'); tagTwo.attr('style', BITwo.img5);
        break;
        default: console.log("Não funcionou");
    }
});
