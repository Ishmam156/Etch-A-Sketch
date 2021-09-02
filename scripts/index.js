let initialGrid = 16
const gridContainer = document.getElementById('gridContainer')

function addColor(event) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    const element = event.target

    if (!element.style.backgroundColor) {
        element.style.backgroundColor = `#${randomColor}`
        element.style.filter = 'brightness(100%)'
    } else {
        const regEx = /\(([^)]+%)\)/
        const value = element.style.filter.match(regEx)[1]
        let number = Number(value.substring(0, value.length - 1))
        
        if (number) {
            number -= 10
            element.style.filter = `brightness(${number}%)`
        }
    }
}

function addDivToGrid(gridSize) {

    gridContainer.style.setProperty('grid-template-columns', `repeat(${gridSize}, 1fr)`)
    gridContainer.style.setProperty('grid-template-rows', `repeat(${gridSize}, 1fr)`)

    for (let index = 0; index < (gridSize * gridSize); index++) {
        
        const element = document.createElement('div')
        element.addEventListener('mouseenter', addColor)
        document.getElementById('gridContainer').appendChild(element)
    }
    
}

function resetGrid() {
    
    gridContainer.innerHTML = ''
    let userChoice = Number(prompt('What size grid do you want between (1-100)?'))
    
    while (userChoice < 0 || userChoice > 100 || isNaN(userChoice)) {
        alert('Please select a number between (1-100)!')
        userChoice = Number(prompt('What size grid do you want?'))
    }
    addDivToGrid(userChoice)
}

addDivToGrid(initialGrid)
document.getElementById('reset').addEventListener('click', resetGrid)