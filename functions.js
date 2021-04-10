let grid = {
    startX: 0,
    startY: 0,
    endX: 9,
    endY: 9
}

let tron = {
    direction: "O",
    x: 0,
    y: 5,
    travelLog: []
}

function turnRight(tron) {
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

function turnLeft(tron) {
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
        if (tron.y < 1 || tron.travelLog.indexOf(`${tron.x},${tron.y}`) > -1) {
            //console.log('Pow');
            document.getElementById(`${tron.x},${tron.y}`).style.backgroundColor = "red";
            clearInterval(intervalId)
        } else {
            tron.travelLog.push(`${tron.x},${tron.y}`)
            document.getElementById(`${tron.x},${tron.y}`).style.backgroundColor = "blue";
        }
    } else if (tron.direction === "O") {
        tron.x += 1;
        if (tron.x >= 9 || tron.travelLog.indexOf(`${tron.x},${tron.y}`) > -1) {
            //console.log('Pow');
            clearInterval(intervalId)
            document.getElementById(`${tron.x},${tron.y}`).style.backgroundColor = "red";
        } else {
            tron.travelLog.push(`${tron.x},${tron.y}`)
            document.getElementById(`${tron.x},${tron.y}`).style.backgroundColor = "blue";
        }
    } else if (tron.direction === "S") {
        tron.y += 1;
        if (tron.y >= 9 || tron.travelLog.indexOf(`${tron.x},${tron.y}`) > -1) {
            //console.log('Pow');
            clearInterval(intervalId)
            document.getElementById(`${tron.x},${tron.y}`).style.backgroundColor = "red";
        } else {
            tron.travelLog.push(`${tron.x},${tron.y}`)
            document.getElementById(`${tron.x},${tron.y}`).style.backgroundColor = "blue";
        }
    } else if (tron.direction === "W") {
        tron.x -= 1;
        if (tron.x < 1 || tron.travelLog.indexOf(`${tron.x},${tron.y}`) > -1) {
            //console.log('Pow');
            clearInterval(intervalId)
            document.getElementById(`${tron.x},${tron.y}`).style.backgroundColor = "red";
        } else {
            tron.travelLog.push(`${tron.x},${tron.y}`)
            document.getElementById(`${tron.x},${tron.y}`).style.backgroundColor = "blue";
        }
    }
    console.log(tron)
}

let intervalId = setInterval(function () {
    moveForward(tron);
}, 1000);



/*class Tron {
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    turnRight() {
        if (this.direction === "N") {
            this.direction = "W"
        } else if (this.direction === "O") {
            this.direction = "N"
        } else if (this.direction === "S") {
            this.direction = "O"
        } else if (this.direction === "W") {
            this.direction = "S"
        }
    }

    turnLeft() {
        if (this.direction === "N") {
            this.direction = "O"
        } else if (this.direction === "O") {
            this.direction = "S"
        } else if (this.direction === "S") {
            this.direction = "W"
        } else if (this.direction === "W") {
            this.direction = "N"
        }
    }

    moveForward() {
        if (this.direction === "N") {
            this.y -= 1;
            let coordinates = `${this.x, this.y}`
            let newMap = new Map(coordinates);
            if (this.y < 1 || newMap.travelLog.indexOf(coordinates) > -1) {
                document.getElementById(coordinates).style.backgroundColor = "red";
                //clearInterval(intervalId)
            } else {
                newMap.memory();
                document.getElementById(coordinates).style.backgroundColor = "blue";
            }
        } else if (this.direction === "O") {
            this.x += 1;
            let coordinates = `${this.x, this.y}`
            let newMap = new Map(coordinates);
            if (this.y < 1 || newMap.travelLog.indexOf(coordinates) > -1) {
                document.getElementById(coordinates).style.backgroundColor = "red";
                //clearInterval(intervalId)
            } else {
                newMap.memory();
                document.getElementById(coordinates).style.backgroundColor = "blue";
            }
        } else if (this.direction === "S") {
            this.y += 1;
            let coordinates = `${this.x, this.y}`
            let newMap = new Map(coordinates);
            if (this.y > 9 || newMap.travelLog.indexOf(coordinates) > -1) {
                document.getElementById(coordinates).style.backgroundColor = "red";
                //clearInterval(intervalId)
            } else {
                newMap.memory();
                document.getElementById(coordinates).style.backgroundColor = "blue";
            }
        } else if (this.direction === "W") {
            this.x -= 1;
            let coordinates = `${this.x, this.y}`
            let newMap = new Map(coordinates);
            if (this.x < 1 || newMap.travelLog.indexOf(coordinates) > -1) {
                document.getElementById(coordinates).style.backgroundColor = "red";
                //clearInterval(intervalId)
            } else {
                newMap.memory();
                document.getElementById(coordinates).style.backgroundColor = "blue";
            }
        }

        let intervalId = setInterval(function () {
            moveForward();
        }, 1000);
    };

};


class Map {
    constructor() {
        this.travelLog = [];
    }
    memory(coordinates) {
        return travelLog.push(coordinates);
    }
}


let tron1 = new Tron(3, 5, "O");

let tron2 = new Tron(4, 6, "W");

*/


/*createNewRow(): TableRow {
    let arrayLength = this.dataArray[0].length;
    this.dataArray.push(new Array(arrayLength))
    const newRow = new TableRow(this.dataArray[0], this.dataArray[this.dataArray.length - 1]);
    return newRow;
}*/

/*
class Game {
    constructor() {
        this.tron1 = tron1



    }
}
*/