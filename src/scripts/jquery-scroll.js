import $ from 'jquery';

$(() => {
    $('.top-menu__link[data-href]').on('click', function() {
        const href = $(this).attr('data-href');
        
        $("html, body").finish().animate({ 
            scrollTop: $(href).offset().top 
        }, 1500);
    });
});