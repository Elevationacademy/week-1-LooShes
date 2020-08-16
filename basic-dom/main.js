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

const moveRight = function(){
    document.getElementById("block").style.left += "15px"
  }
  