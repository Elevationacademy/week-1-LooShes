for(let i=1; i<7; i++) {
    let box = document.createElement("div")
    box.setAttribute("class", "box")
    box.style.height = "50px"
    box.style.width = "50px"
    box.style.position = "absolute"
    box.style.left = i*55 + "px"
    box.style.right = i*55 + "px"
    box.style.top = "35px"
    box.setAttribute("onmouseenter", "enterColor()")
    box.setAttribute("onmouseleave", "leaveColor()")
    box.onmouseenter = function() {
        box.style.backgroundColor = generateRandomColor()
    }
    box.onmouseleave = function() {
        box.style.backgroundColor = generateRandomColor()
    }
    document.getElementById("container").appendChild(box)
}

function generateRandomColor()
{
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor)
    return randomColor;
}



