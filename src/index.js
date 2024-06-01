import "./main.css"
import { loadHome } from "./app/load-page"
import image from "./assets/image.jpg"
import logo from "./assets/logo.png"


// Adding the logo
document.body.style.backgroundImage = `url(${image})`
const header = document.querySelector("header")
const img = new Image();
img.src = logo;
img.setAttribute("id","logo")
header.prepend(img)



loadHome("Welcome to Saffron Garden","A vegeterian delight from the heart of India")

