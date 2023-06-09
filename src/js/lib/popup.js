;(function($) {
    $(function() {
        $('.popup-show').bind('click', function(e) {
            e.preventDefault();
            var button_id = $(this).attr('id');
            console.log(button_id + 'が押されました。');
            $('.' + button_id).bPopup({
                position: ['auto', 'auto'],
                positionStyle: 'fixed',
                closeClass: 'close-popup',
            });
            $('.close-popup').click(function() {
                $('.' + button_id).bPopup().close();
                $('.b-modal').remove();
            });
        });
        

    });
})(jQuery);