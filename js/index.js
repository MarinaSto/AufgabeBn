// Navbar
$(document).ready(function () {
    $('a').click(function () {
        $('a.nav.active').removeClass("active");
        $(this).addClass("active");
    });
});

function myFunction() {
    var x = document.getElementById("myLinks");
    var icon = document.getElementById("iconBar");
    if (x.style.display === "block") {
        x.style.display = "none";
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times");
    } else {
        x.style.display = "block";
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    }
}
// slideshow
$(document).ready(function () {
    $('.image-link').magnificPopup({ type: 'image' }); //Initializing Magnific Popup Gallery
    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});

// Gallery
$(document).ready(function () {
    $('.galleryItem').magnificPopup({ type: 'image' }); //Initializing Magnific Popup Gallery
})
$('.galleryItem').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }

});

// Klippbox
var openCloseTab = document.getElementsByClassName('accordion-item__header');
var openCloseIcon = document.getElementsByClassName('open-close-icon');

for (var i = 0; i < openCloseTab.length; i++) {

    openCloseTab[i].addEventListener('click', function () {
        var textBlock = this.nextElementSibling;
        if (textBlock.style.maxHeight) {
            textBlock.style.maxHeight = null;
            this.style.backgroundColor = '#A2B3AF';
            this.firstElementChild.classList.remove('open');
        } else {
            this.style.backgroundColor = '#A2B3AF';
            console.log(this)
            textBlock.style.maxHeight = textBlock.scrollHeight + 'px';
            this.firstElementChild.classList.add('open');
        }
    });
}
