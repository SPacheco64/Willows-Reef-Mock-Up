// Developer: Sergio Pacheco
// Content: Product Page Stores Pop-up JS

const pageBody = document.body;
const popupOverlay = document.getElementById("popupOverlay");
const storePopup = document.getElementById("storePopup");
$(".link-button").click(function () 
{
    popupOverlay.classList.toggle("active");
    pageBody.classList.toggle("no-scroll-all");
    storePopup.classList.toggle("active");
});

$(".close-popup-overlay").click(function () 
{
    $(".link-button").click();
});