
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

jQuery(document).ready(function() {
    // jQuery(window).scroll( function(){
    //
    //     /* Check the location of each desired element */
    //     jQuery('.block').each( function(i){
    //
    //         var bottom_of_object = jQuery(this).offset().top + jQuery(this).outerHeight();
    //         var bottom_of_window = jQuery(window).scrollTop() + jQuery(window).height();
    //
    //         /* If the object is completely visible in the window, fade it it */
    //         if( bottom_of_window > bottom_of_object - 250 ){
    //             jQuery(this).animate({'opacity':'1'}, 500);
    //         }
    //
    //     });
    //
    // });
});