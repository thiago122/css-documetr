$(document).ready(function() {

    (function ($) {
        $('.tab-st ul.tabs-st').addClass('active').find('> li:eq(0)').addClass('tab-current-st');

        $('.tab-st ul.tabs-st li').click(function (g) {
            var tab = $(this).closest('.tab-st'),
                index = $(this).index();

            tab.find('ul.tabs-st > li').removeClass('tab-current-st');
            $(this).addClass('tab-current-st');

            tab.find('.tab-content-st').find('div.tabs-item-st').not('div.tabs-item-st:eq(' + index + ')').hide();
            tab.find('.tab-content-st').find('div.tabs-item-st:eq(' + index + ')').show();

            g.preventDefault();
        } );
    })(jQuery);

});
