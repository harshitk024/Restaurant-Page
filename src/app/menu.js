
import samosa from "../assets/Samosa.webp"
import paneerTikka from "../assets/PaneerTikka.webp"
import alooChat from "../assets/Aaloochaat.webp"
import butterMasala from "../assets/Pbm.webp"
import riceCurry from "../assets/riceCurry.webp"
import PavBhaji from "../assets/PavBhaji.webp"
import lassi  from "../assets/lassi.webp"
import gulab from "../assets/gulabjamoon.webp"
import ras from "../assets/rasmalai-indian-dessert.webp"

export const loadMenu = function(){
  const menu = [
    {header : "Starters",items:[{img : paneerTikka, about : "Paneer Tikka"},{img: alooChat, about : "Aloo Chaat"},{img: samosa,about: "Samosa"}]},
    {header : "Main Course",items:[{img : butterMasala, about : "Paneer Butter Masala"},{img: riceCurry, about : "Rice Curry"},{img: PavBhaji,about: "Pav Bhaji"}]},
    {header : "Desserts",items:[{img : lassi, about : "Lassi"},{img: gulab, about : "Gulab Jamoon"},{img: ras,about: "Ras malai"}]}]

  const div = document.querySelector("#container")
  div.innerHTML = ""

  const section = document.createElement("div")
  section.setAttribute("id","menu-section")

  menu.forEach((ele) => {
    const header = document.createElement("div")
    header.setAttribute("class","menu-header")

    header.textContent = ele.header

    const menuItems = document.createElement("div")
    menuItems.setAttribute("class","items-list")

    ele.items.forEach((item) => {
         const div = document.createElement("div")
         div.setAttribute("class","item")
         const image = new Image();
         image.src = item.img
         image.setAttribute("class","item-image")

         const itemInfo = document.createElement("div")
         itemInfo.setAttribute("class","menu-item-info")
         itemInfo.textContent = item.about
         div.append(image)
         div.append(itemInfo)
         menuItems.append(div)
    });

    section.append(header)
    section.append(menuItems)
  });


  div.append(section)


}
