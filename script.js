const etchASketch = document.querySelector(".container")



for (let i = 0; i < 256; i++) {
    const div = document.createElement('div')
    div.classList.add("pixel")
    div.addEventListener("mouseover", () => {
        div.classList.add("pixel-hovered")
    })
    div.textContent = "A"
    etchASketch.appendChild(div)
}