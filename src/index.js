import "./main.css"
import { loadHome } from "./app/load-page"
import { loadAbout } from "./app/load-about"
import { loadMenu } from "./app/menu.js"
import image from "./assets/image.jpg"
import logo from "./assets/logo.png"

loadHome("Welcome to Saffron Garden","A vegeterian delight from the heart of India")
document.body.style.backgroundImage = `url(${image})`


// Adding the logo
document.body.style.backgroundImage = `url(${image})`
const header = document.querySelector("header")
const img = new Image();
img.src = logo;
img.setAttribute("id","logo")
header.prepend(img)



const tabs = document.querySelectorAll(".tabs")

tabs.forEach(element => {
   element.addEventListener("click",()=>{
    if(element.getAttribute("id") == "home"){
        loadHome("Welcome to Saffron Garden","A vegeterian delight from the heart of India")
    }
    else if(element.getAttribute("id") == "about"){
        // document.body.style.backgroundImage = `url(${image})`
        loadAbout();
    }
    else{
      loadMenu();
    }
   })
});
