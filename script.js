const etchASketch = document.querySelector(".container")
const button = document.querySelector("#change")
button.addEventListener("click", changeGridSize)
const rainbow = document.querySelector("#rainbow")
rainbow.addEventListener("click", toggleModes)
const dark = document.querySelector("#darkening")
dark.addEventListener("click", toggleModes)
const clear = document.querySelector("#clear")
clear.addEventListener("click", clearCanvas)

let rowsAndColumns = 16
let oldRowsAndColumns = 1
let rainbowToggle = false
let darkeningToggle = false

function changeGridSize() {
    while (true) {
        rowsAndColumns = prompt("How many squares do you want in each row and column, the value cannot be higher than 100")
        
        // if the user cancels the prompt, stop the function from executing so it doesn't change anything
        if (rowsAndColumns === null) {
            break;
        }

        rowsAndColumns = Number(rowsAndColumns)

        if (rowsAndColumns <= 100 && rowsAndColumns > 0) {
            oldRowsAndColumns = rowsAndColumns
            addRowsAndColumns(oldRowsAndColumns, rowsAndColumns, rainbowToggle, darkeningToggle);
            break;
        } else {
            alert("The value cannot be higher than 100, be negative, a random word or 0")
        }
    }
}

function clearCanvas() {
    addRowsAndColumns(oldRowsAndColumns, rowsAndColumns, rainbowToggle, darkeningToggle)
}

function toggleModes(e) {

    if (e.target.id === "rainbow") {

        if (rainbowToggle) {
            rainbow.classList.remove("active")
            rainbowToggle = false
        } else {
            rainbow.classList.add("active")
            dark.classList.remove("active")

            rainbowToggle = true
            darkeningToggle = false
        }

    } else if (e.target.id === "darkening") {

        if (darkeningToggle) {
            dark.classList.remove("active")
            darkeningToggle = false
        } else {
            dark.classList.add("active")
            rainbow.classList.remove("active")

            darkeningToggle = true
            rainbowToggle = false
        }
    }

    addRowsAndColumns(oldRowsAndColumns, rowsAndColumns, rainbowToggle, darkeningToggle)
}

function rainbowMode(row) {
    let color = Math.floor(Math.random() * 7)
    // deletes classes from the divs, otherwise color that were defined later on the css will take priority over earlier ones
    // in the end purple can overwrite any other color when you hover over already 'painted' divs
    while (row.classList.length > 0) {
        row.classList.remove(row.classList.item(0))
    }
    row.classList.add("row")

    switch (color) {
        case 0:
            row.classList.add("red");
            break;
        case 1:
            row.classList.add("orange");
            break;
        case 2:
            row.classList.add("yellow");
            break;
        case 3:
            row.classList.add("green");
            break;
        case 4:
            row.classList.add("lightblue");
            break;
        case 5:
            row.classList.add("blue");
            break;
        case 6:
            row.classList.add("purple");
            break;
    }
}

function darkeningMode(row) {
    let lastAddedClass = row.classList[row.classList.length - 1]

    switch (lastAddedClass) {
        case "row":
            row.classList.add("d90")
            break;
        case "d90":
            row.classList.add("d80")
            break;
        case "d80":
            row.classList.add("d70")
            break;
        case "d70":
            row.classList.add("d60")
            break;
        case "d60":
            row.classList.add("d50")
            break;
        case "d50":
            row.classList.add("d40")
            break;
        case "d40":
            row.classList.add("d30")
            break;
        case "d30":
            row.classList.add("d20")
            break;
        case "d20":
            row.classList.add("d10")
            break;
        case "d10":
            row.classList.add("d0")
            break;
    }
}

function addRowsAndColumns(oldRowAndColumn, rowAndColumn, rainbowM, darkeningM) {

    if (oldRowAndColumn) {
        etchASketch.innerHTML = ""
    }

    for (let i = 0; i < rowAndColumn; i++) {
        const column = document.createElement('div')
        column.classList.add("column")

        for (let j = 0; j < rowAndColumn; j++) {
            const row = document.createElement('div')
            row.classList.add("row")

            row.addEventListener("mouseover", () => {
                if (rainbowM) {
                    rainbowMode(row)
                } else if (darkeningM){
                    darkeningMode(row)
                } else {
                    row.classList.add("row-hovered")
                }
            })

            column.appendChild(row)
        }
        
        etchASketch.appendChild(column)
    }
}

addRowsAndColumns(oldRowsAndColumns, rowsAndColumns, rainbowToggle, darkeningToggle);