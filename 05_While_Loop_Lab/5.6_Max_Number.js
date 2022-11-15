function maxNumbers(input) {

    let index = 0;
    let command = input[index]
    index++

    let maxNumber = Number.MIN_SAFE_INTEGER;
    while (command !== "Stop") {
        let currentNumber = Number(command)
        if (maxNumber < currentNumber) {
            maxNumber = currentNumber
        }
        command = input[index]
        index++
    }

    console.log(maxNumber)





}
maxNumbers(["45",
    "-20",
    "7",
    "99",
    "Stop"])