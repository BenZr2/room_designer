let isDown = false

function roomSize() {
    let room = document.getElementById("room")
    let height = parseInt(document.getElementById("room_height").value) * 2
    let width = parseInt(document.getElementById("room_width").value) * 2
    console.log(room, length, width)
    room.style.height = height + "px"
    room.style.width= width + "px"
}

function addFurniture() {
    let furniture = document.createElement("div")
    let height = parseInt(document.getElementById("furniture_height").value * 2)
    let width = parseInt(document.getElementById("furniture_width").value * 2)
    furniture.className = "furniture"
    furniture.style.height = height + "px"
    furniture.style.width = width + "px"
    furniture.style.border = "1px solid black"
    furniture.style.position = "absolute"
    furniture.style.textAlign = "center"
    furniture.innerHTML = document.getElementById("furniture_name").value
    
    let button = document.createElement("button")
    button.innerHTML = "\nrotate"
    button.addEventListener("click", function(e) {
        let height = furniture.offsetWidth -2
        let width  = furniture.offsetHeight -2
        furniture.style.height = height + "px"
        furniture.style.width = width + "px"
    })
    furniture.appendChild(button)

    furniture.addEventListener('mousedown', function(e) {
        isDown = true;
        offset = [
            furniture.offsetLeft - e.clientX,
            furniture.offsetTop - e.clientY
        ];
    }, true);

    furniture.addEventListener('mousemove', function(event) {
        event.preventDefault();
        if (isDown) {
            mousePosition = {
    
                x : event.clientX,
                y : event.clientY
    
            };
            furniture.style.left = (mousePosition.x + offset[0]) + 'px';
            furniture.style.top  = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);

    document.getElementById("room").appendChild(furniture)
}






document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

