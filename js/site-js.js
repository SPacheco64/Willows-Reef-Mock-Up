/*
Content: Universal Site JavaScript Code
Developer: Sergio Pacheco

--------------------------------------- Index ---------------------------------------                     
                Content                   |         Search Keyword (ctrl+f the following terms)
-------------------------------------------------------------------------------------
Header & Footer Load                      |                     HFLKY
AOS Initialization                        |                     AOSKY
Back to Top Button                        |                     BTTKY
-------------------------------------------------------------------------------------
*/

// Loads in the Global Header & Footer [ HFLKY ]
$(document).ready(function () 
{
    $("#globalHeader").load("./global-header.html");
    $("#globalFooter").load("./global-footer.html");
});

// Initialization for the AOS CSS Animations [ AOSKY ]
AOS.init
({
    duration: 800
});

// Back to Top Button JS [ BTTKY ]
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
function topFunction() // When the user clicks on the button, scroll to the top of the document
{
    document.body.scrollTop = 0; // Safari Compatibility
    document.documentElement.scrollTop = 0; // Chrome, Firefox, & IE Compatibility
}

while($('#mobileNav').classList.contains('collapsing'))
{
    body.style.pointerEvents = "none";
}
