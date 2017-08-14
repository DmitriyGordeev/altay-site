
function onSubmit() {
    var username = jQuery("input[name='username']").val();
    var email = jQuery("input[name='email']").val();
    var message = jQuery("textarea[name='message']").val();

    if(username == "" || email == "" || message == "") {
        alert("Заполните все поля");
        return false;
    }

    return true;
}

function blurElement(element, size) {
    var filterVal = 'blur(' + size + 'px)';
    jQuery(element).css({
        'filter':filterVal,
        'webkitFilter':filterVal,
        'mozFilter':filterVal,
        'oFilter':filterVal,
        'msFilter':filterVal,
        'transition':'all 2.5s ease-out',
        '-webkit-transition':'all 2.5s ease-out',
        '-moz-transition':'all 2.5s ease-out',
        '-o-transition':'all 2.5s ease-out'
    });
}

jQuery(document).ready(function() {
    blurElement(jQuery("#logo"), 0);
    blurElement(jQuery("#main-block-heading"), 0);
    blurElement(jQuery("#main-block-description"), 0);
    blurElement(jQuery("#contact-bar, #contact-bar > a"), 0);
});