

function myFunction() {
    // document.getElementById("bgCarrousel").style.backgroundImage = url('../images/bg.jpg');

    document.getElementById("carrouselId").fadeTo('slow', 0.3, function () {
        $(this).css('background-image', "url('../images/bg.jpg')");
    }).delay(1000).fadeTo('slow', 1)
}
