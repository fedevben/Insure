const mobileMenu = document.querySelector(".mobile-menu")
const divOneMenu = document.querySelector(".divOne")
const divTwoMenu = document.querySelector(".divTwo")
const divThreeMenu = document.querySelector(".divThree")

mobileMenu.addEventListener("click", function(){
    divOneMenu.classList.toggle("divOne-transform")
    divTwoMenu.classList.toggle("divTwo-transform")
    divThreeMenu.classList.toggle("divThree-transform")
})