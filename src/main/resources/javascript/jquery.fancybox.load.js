$(document).ready(function() {
    // Captions are displayed as plain text.
    function textTitle() {
        if (typeof this.title === 'string') {
            this.title = $('<div/>').text(this.title).html();
        }
    }

    $("a.zoom").fancybox({
        beforeLoad: textTitle
    });

    $("a.zoom1").fancybox({
        'overlayOpacity'    :    0.7,
        'overlayColor'        :    '#FFF',
        beforeLoad: textTitle
    });

    $("a.zoom2").fancybox({
        'zoomSpeedIn'        :    500,
        'zoomSpeedOut'        :    500,
        beforeLoad: textTitle
    });
});
