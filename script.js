const etchASketch = document.querySelector(".container")
const button = document.querySelector("#change")
button.addEventListener("click", changeGridSize)
const rainbow = document.querySelector("#rainbow")
rainbow.addEventListener("click", toggleRainbow)

let rowsAndColumns = 16
let oldRowsAndColumns = 1
let rainbowToggle = false

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
            addRowsAndColumns(oldRowsAndColumns, rowsAndColumns, rainbowToggle);
            break;
        } else {
            alert("The value cannot be higher than 100, be negative, a random word or 0")
        }
    }
}

function toggleRainbow() {
    if (rainbowToggle) {
        rainbow.classList.remove("active")
        rainbowToggle = false
        addRowsAndColumns(oldRowsAndColumns, rowsAndColumns, rainbowToggle)
    } else {
        rainbow.classList.add("active")
        rainbowToggle = true
        addRowsAndColumns(oldRowsAndColumns, rowsAndColumns, rainbowToggle)
    }
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

function addRowsAndColumns(oldRowAndColumn, rowAndColumn, rainbowM) {

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
                } else {
                    row.classList.add("row-hovered")
                }
            })

            column.appendChild(row)
        }
        
        etchASketch.appendChild(column)
    }
}

addRowsAndColumns(oldRowsAndColumns, rowsAndColumns, rainbowToggle);