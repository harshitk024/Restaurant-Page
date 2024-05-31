export const load = function(...elements){

    const header = document.createElement("header")

    const nav = document.createElement("nav")
    nav.setAttribute("id","nav")
    
    const container = document.createElement("div")
    container.setAttribute("id","container")

    elements.forEach((ele)=>{
        let button = document.createElement("button")
        button.setAttribute("id",ele)
        button.textContent = ele.charAt(0).toUpperCase() + ele.slice(1)
        nav.appendChild(button);
    })

    header.appendChild(nav)
    document.body.appendChild(header)
    document.body.appendChild(container)

}