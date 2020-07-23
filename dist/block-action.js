$(document).ready(function(){
    $(".emfl-item-heading").each(function(){
        $(this).bind("click", function(){
            const next = $(this).next();

            reset_all();

            $(next).slideDown(300);
            $(this).find('a').addClass('accord-active');
        });
    });
});

function reset_all() {
    $(".emfl-item-content").each(function(){
        $(this).slideUp(300);
        if( $(this).hasClass('accord-active') ) {
            $(this).removeClass('accord-active');
        }
    });

    $(".emfl-item-heading a").each(function() {
        if( $(this).hasClass('accord-active') ) {
            $(this).removeClass('accord-active');
        }
    });
}