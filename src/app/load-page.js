import image from "../assets/image.jpg"

export const loadHome = function(name,des){
    const container = document.querySelector("#container")
    container.innerHTML = ""


    const title = document.createElement("div")
    title.setAttribute("id","title")

    const description = document.createElement("div")
    description.setAttribute("id","description")

    title.textContent = name
    description.textContent = des

    container.append(title)
    container.append(description)


}
