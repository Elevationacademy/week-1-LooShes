function addItem() {
    let newElem = document.createElement("li")
    newElem.innerHTML = "done"
    document.getElementById("myList").appendChild(newElem)
}

const box = document.createElement("div") // dynamically creating an element
box.setAttribute("class", "box")
box.style.backgroundColor = "red"
box.style.height = "50px"
box.style.width = "50px"
document.getElementById("container").appendChild(box) // now the box will be on the page, and will react to a click!
box.onclick = function changeContent(){       // adding an event to the new element
    box.innerHTML = "I'm alive!"
}