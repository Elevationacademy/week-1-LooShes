 console.log(document)
 const playingField = document.getElementById("playing-field")
 console.log(playingField)

 const down = document.getElementById("down")
 console.log(down)
 console.log(down.innerHTML)
 down.innerHTML = "Down"
 console.log(playingField.innerHTML)
 playingField.style.backgroundColor = "blue"

const ball = document.getElementById("block")
ball.style.backgroundColor = "yellow"

// moving ball left
document.getElementById("block").style.left = "15px"
const moveRight = function(){
    let left = document.getElementById("block").style.left
    left = parseInt(left)
    left += 15
    left = left + "px"
    document.getElementById("block").style.left = left
  }

// additing elements in html
const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
header.style.position = "absolute"
header.style.textAlign = "center"
document.getElementById("playing-field").appendChild(header)
header.setAttribute("class", "my-header")

// spot check 4
const subHeader = document.createElement("h2")
subHeader.innerHTML = "by Elevation"
subHeader.setAttribute("class", "sub-header")
document.getElementById("playing-field").appendChild(subHeader)

// events
const box = document.getElementById("box")

const enterColor = function () {
    box.style.backgroundColor = "#c0392b"
    box.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    box.style.backgroundColor = "#1abc9c"
    box.innerHTML = "Hover over me!"
}

function clickOn() {
    box.style.backgroundColor = "#8e44ad" 
}

// ex 1
const moveLeft = function(){
    let right = document.getElementById("block").style.left
    right = parseInt(right)
    right -= 15
    right = right + "px"
    document.getElementById("block").style.left = right
  }

  document.getElementById("block").style.top = "15px"
  const moveDown = function(){
    let down = document.getElementById("block").style.top
    down = parseInt(down)
    down += 15
    down = down + "px"
    document.getElementById("block").style.top = down
  }

  const moveUp = function(){
    let down = document.getElementById("block").style.top
    down = parseInt(down)
    down -= 15
    down = down + "px"
    document.getElementById("block").style.top = down
  }
