// scripts.js

$(document).ready(function() {
    // Open the modal
    $('.image').click(function() {
        var imgSrc = $(this).find('img').attr('src');
        $('#img01').attr('src', imgSrc);
        $('#myModal').css('display', 'block');
    });

    // Close the modal
    $('.close').click(function() {
        $('#myModal').css('display', 'none');
    });

    // Close the modal when clicking outside of it
    $(window).click(function(event) {
        if (event.target.id === 'myModal') {
            $('#myModal').css('display', 'none');
        }
    });

    // Navigate images in the modal
    var slideIndex = 1;

    $('.prev').click(function() {
        showSlides(slideIndex -= 1);
    });

    $('.next').click(function() {
        showSlides(slideIndex += 1);
    });

    function showSlides(n) {
        var slides = $('.slide');
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        slides.hide();
        slides.eq(slideIndex - 1).show();
    }
});
