let grid = {
    startX: 0,
    startY: 0,
    endX: 99,
    endY: 99
}

let tron = {
    direction: "O",
    x: 1,
    y: 49,
    travelLog: []
}

function turnLeft(tron) {
    if (tron.direction === "N") {
        tron.direction = "W"
    } else if (tron.direction === "O") {
        tron.direction = "N"
    } else if (tron.direction === "S") {
        tron.direction = "O"
    } else if (tron.direction === "W") {
        tron.direction = "S"
    }
    console.log(tron);
}

function turnRight(tron) {
    if (tron.direction === "N") {
        tron.direction = "O"
    } else if (tron.direction === "O") {
        tron.direction = "S"
    } else if (tron.direction === "S") {
        tron.direction = "W"
    } else if (tron.direction === "W") {
        tron.direction = "N"
    }
    console.log(tron);
}


function moveForward(tron) {
    if (tron.direction === "N") {
        tron.y -= 1;
        if (tron.y <= 1 || tron.travelLog.indexOf(`${tron.x},${tron.y}`) > -1) {
            console.log('Pow');
            clearInterval(intervalId)
        } else {
            tron.travelLog.push(`${tron.x},${tron.y}`)
        }
    } else if (tron.direction === "O") {
        tron.x += 1;
        if (tron.x >= 99 || tron.travelLog.indexOf(`${tron.x},${tron.y}`) > -1) {
            console.log('Pow');
            clearInterval(intervalId)
        } else {
            tron.travelLog.push(`${tron.x},${tron.y}`)
        }
    } else if (tron.direction === "S") {
        tron.y += 1;
        if (tron.y >= 99 || tron.travelLog.indexOf(`${tron.x},${tron.y}`) > -1) {
            console.log('Pow');
            clearInterval(intervalId)
        } else {
            tron.travelLog.push(`${tron.x},${tron.y}`)
        }
    } else if (tron.direction === "W") {
        tron.x -= 1;
        if (tron.x <= 1 || tron.travelLog.indexOf(`${tron.x},${tron.y}`) > -1) {
            console.log('Pow');
            clearInterval(intervalId)
        } else {

            tron.travelLog.push(`${tron.x},${tron.y}`)
        }
    } console.log(tron)
}

let intervalId = setInterval(function () {
    moveForward(tron);
}, 1000);

//moveForward(tron);
//turnRight(tron);
//turnLeft(tron);
