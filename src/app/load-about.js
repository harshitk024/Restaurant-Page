import image from "../assets/restaurant.jpg"
import defaultImage from "../assets/image.jpg"

export const loadAbout = function(){

    const container  = document.querySelector("#container")
    container.innerHTML  = ""


    const section = document.createElement("div")
    section.setAttribute("id","about-section")

    const head = document.createElement("div")
    head.setAttribute("id","about-section-heading")
    head.textContent = "About us"

    const para = document.createElement("div")
    para.setAttribute("id","about-para")
    para.textContent = "At Saffron Garden, we bring the vibrant and diverse flavors of India's vegetarian cuisine to your table. Located in the heart of the city, our restaurant offers a serene and welcoming atmosphere, perfect for family gatherings, intimate dinners, and casual meals with friends. We are dedicated to providing an exceptional dining experience, combining traditional Indian hospitality with modern comfort."

    section.append(head)
    section.append(para)



    const storySection = document.createElement("div")
    storySection.setAttribute("id","story-section")

    const storyDiv = document.createElement("div")
    storyDiv.setAttribute("id","story-div")

    const storyHead = document.createElement("div")
    storyHead.setAttribute("id","story-section-heading")
    storyHead.textContent = "Our Story"

    const storyPara = document.createElement("div")
    storyPara.setAttribute("id","story-para")
    storyPara.textContent = "Founded in 2012 by Chef Priya Mehta, Saffron Garden is a celebration of India's rich vegetarian culinary heritage. Chef Mehta, a passionate advocate for vegetarianism from Gujarat, brings her extensive expertise and love for Indian cuisine to every dish. Our menu is crafted with the finest ingredients, traditional techniques, and a touch of creativity to ensure a memorable dining experience"

    storyDiv.append(storyHead)
    storyDiv.append(storyPara)

    const imageDiv = document.createElement("div")
    const myImage = new Image();
    myImage.src = image;
    myImage.setAttribute("id","story-image")
    imageDiv.append(myImage)



    storySection.append(storyDiv)
    storySection.appendChild(imageDiv)


    // aboutSection.append(section)

    container.append(section)
    container.append(storySection)


}
