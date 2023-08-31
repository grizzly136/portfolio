const contact=document.querySelector(".contact");
const form=document.querySelector(".contact-form");
const close=document.querySelector(".close");
contact.addEventListener("click",()=>{
form.classList.toggle("active");
form.classList.toggle("inactive");

});
close.addEventListener("click",()=>{
    form.classList.toggle("active");
    form.classList.toggle("inactive");
});