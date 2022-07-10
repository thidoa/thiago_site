// const html = document.querySelector("html")
// const checkbox = document.querySelector("input[name=theme]")

// const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style)

// const initialColors = {
//     bg: getStyle(html, "--bg"),
// }

// const darkMode = {
//     bg: "blue",
// }

// const changeColors = (colors) => {
//     console.log(colors)
// }

// checkbox.addEventListener("change", ({target}) => {
//     target.checked ? changeColors(darkMode) : changeColors(initialColors)
// })

function mudaModo(){
    document.body.classList.toggle('dark')
    
}