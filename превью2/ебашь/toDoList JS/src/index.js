import $ from 'jquery';

$('.list-item:first').hover(
    function() {
        $(this).toggleClass('active');
})