//jshint esversion:6

//hamburger
const hamBurger=document.querySelector(".burger");
// hamburger-click
hamBurger.addEventListener("click",()=>{

    const navLink=document.querySelector(".nav-links");
    const navLinks=document.querySelectorAll(".nav-links li");
    
    hamBurger.classList.toggle("hamBurgerShape");
    navLink.classList.toggle("nav-active");

    /*links popup in nav bar*/
    navLinks.forEach(element => {
        if(element.style.animation){
            element.style.animation="";
            }
        else{
            element.style.animation="navLinkFade .75s ease forwards .75s ";
            }

                                });

});
