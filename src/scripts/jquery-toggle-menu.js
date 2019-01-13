import $ from 'jquery';

$(() => {
    const activeClass = 'toggle-menu--active';
    const $menu = $('.toggle-menu');

    $('.top-menu__link--toggle-icon').on('click', e => {
        e.preventDefault();

        if($menu.hasClass(activeClass)) {        
            $menu.slideUp('fast', () => {
                $menu.toggleClass(activeClass);
            });
        } else {
            $menu.toggleClass(activeClass).slideDown('fast');
        }
    });

    const media = matchMedia('(min-width: 1200px)');
    media.addListener(function() {
        if(this.matches) {
            $menu.removeClass(activeClass);
        }
    });

    $('.toggle-menu__close-link').on('click', e => {
        e.preventDefault();

        $menu.slideToggle('fast', () => {
            $menu.removeClass(activeClass);
        });
    });
});