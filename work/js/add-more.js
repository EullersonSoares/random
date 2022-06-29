function addP() {
    let value = $('.input-text.qty.text').val();
    (value < 1) ? value=1 : value++;
    $('.input-text.qty.text').val(value);
}

function removeR() {
    let value = $('.input-text.qty.text').val();
    (value < 2) ? value=1 : value--;
    $('.input-text.qty.text').val(value);
}

$(document).ready(function() {

    let btnP = '<input type="button" value="+" class="button-add" onclick="addP();">';
    let btnR = '<input type="button" value="-" class="button-remove" onclick="removeR();">';

    $('.input-text.qty.text').before(btnP);
    $('.input-text.qty.text').after(btnR);
});