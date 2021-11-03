// Sergio Pacheco - Portfolio Site JS

// Swaps between Hamburger Icon to 'X' and displays the dropdown menu
$(document).ready(function () 
{
    $("#globalHeader").load("./global-header.html");
    $("#globalFooter").load("./global-footer.html");
});

// Initialization for the AOS CSS Animations
AOS.init
({
    duration: 800
});


// Back to Top Button JS
scrollBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function() 
{
    scrollFunction()
};
function scrollFunction() 
{
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) 
    {
        scrollBtn.style.display = "block";
    } 
    else 
    {
        scrollBtn.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() 
{
    document.body.scrollTop = 0; // Safari Compatibility
    document.documentElement.scrollTop = 0; // Chrome, Firefox, & IE Compatibility
}
