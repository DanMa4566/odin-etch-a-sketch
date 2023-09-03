const etchASketch = document.querySelector(".container")
const button = document.querySelector("#change")
let rowsAndColumns = 0
let oldRowsAndColumns = 0

function changeGridSize() {
    while (true) {
        rowsAndColumns = prompt("How many squares do you want in each row and column, the value cannot be higher than 100")
        
        if (rowsAndColumns === null) {
            break;
        }

        rowsAndColumns = Number(rowsAndColumns)

        if (rowsAndColumns <= 100 && rowsAndColumns > 0) {
            oldRowsAndColumns = rowsAndColumns
            addRowsAndColumns(oldRowsAndColumns, rowsAndColumns);
            break;
        } else {
            alert("The value cannot be higher than 100, be negative or a random word")
        }
    }
}

button.addEventListener("click", changeGridSize)

function addRowsAndColumns(oldRowAndColumn, rowAndColumn) {

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
                row.classList.add("row-hovered")
            })

            column.appendChild(row)
        }
        
        etchASketch.appendChild(column)
    }
}

changeGridSize()