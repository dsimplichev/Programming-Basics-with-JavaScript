function minNumber(input) {

    let index = 0;
    let command = input[index];
    index++

    let minNumber = 0;

    while (command !== "Stop") {
        let currentNumber = Number(input[index])
        if (minNumber < currentNumber) {
            minNumber = currentNumber
        }
        command = input[index]
        index++
    }

    console.log(minNumber)



}
minNumber(["100",
    "99",
    "80",
    "70",
    "Stop"])
