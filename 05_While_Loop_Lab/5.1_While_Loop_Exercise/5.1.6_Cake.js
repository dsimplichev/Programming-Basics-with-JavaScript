function cake(input) {
    let width = Number(input[0]);
    let ligth = Number(input[1]);
    let cakePices = width * ligth;
    let leftPices = cakePices;


    let index = 2;

    while (true) {
        let currentCommand = input[index];
        index++;

        if (currentCommand == "Stop") {
            console.log(`${leftPices} pieces are left.`)
            break;
        }
        let currentPices = Number(currentCommand)
        leftPices -= currentPices

        if (leftPices < 0) {
            console.log(`No more cake left! You need ${-leftPices} pieces more.`)
            break;
        }
    }







}
cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"])