const toggleNav = document.querySelector(".toggleNav");
const navBar= document.querySelector(".navBar");

toggleNav.addEventListener("click", ()=>
{
   
    navBar.classList.toggle("navBar-visible");
});
