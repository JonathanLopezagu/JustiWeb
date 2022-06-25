const toggleNav = document.querySelector(".toggleNav");
const navBar= document.querySelector(".navBar");

toggleNav.addEventListener("click", ()=>
{
   
    navBar.classList.toggle("navBar-visible");
});

/*
let espacio="";
let holamundo= "hola" + espacio +"mundo";

console.log(holamundo);

*/