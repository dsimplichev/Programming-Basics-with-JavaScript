function building(input) {

    let floorsCount = Number(input[0])
    let roomsPerFloor = Number(input[1])

    for (let currentFloor = floorsCount; currentFloor >= 1; currentFloor--) {
        let curFloorRoom = ''
        for (let currentRoom = 0; currentRoom < roomsPerFloor; currentRoom++) {
            if (currentFloor == floorsCount) {
                curFloorRoom += (`L${currentFloor}${currentRoom} `)
            } else if (currentFloor % 2 == 0) {
                curFloorRoom += (`O${currentFloor}${currentRoom} `)
            } else {
                curFloorRoom += (`A${currentFloor}${currentRoom} `)
            }
        }
        console.log(curFloorRoom)
    }





}
building(["6", "4"])