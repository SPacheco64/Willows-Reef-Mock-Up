/*
Content: Stores List Pop-up JavaScript Code
Developer: Sergio Pacheco
*/

const popupOverlay = document.getElementById("popupOverlay"); // Gets the Pop-up Overlay to darken screen
const storePopup = document.getElementById("storePopup"); // Gets the Stores Pop-up itself
$(".link-button").click(function () // When "See Stores" button is pressed, display pop-up and disable page scrolling
{
    popupOverlay.classList.toggle("active");
    pageBody.classList.toggle("no-scroll-all");
    storePopup.classList.toggle("active");
});

$(".close-popup-overlay").click(function () // When "X" button is pressed, close Stores Pop-up
{
    $(".link-button").click();
});