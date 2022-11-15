function easterBattle(input) {

    let index = 0

    let countEggs1 = input[index]
    index++
    let countEggs2 = input[index]
    index++

    let command = input[index]
    let isPlayerEggsAreZero = false;



    while (command != "End") {
        if (command == "one") {
            countEggs2--;

        } else if (command == "two") {
            countEggs1--;

        }

        if (countEggs1 == 0) {
            console.log(`Player one is out of eggs. Player two has ${countEggs2} eggs left.`)
            isPlayerEggsAreZero = true;
            break;

        } else if (countEggs2 == 0) {
            console.log(`Player two is out of eggs. Player one has ${countEggs1} eggs left.`)
            isPlayerEggsAreZero = true;
            break;

        }



        index++
        command = input[index]
    }


    if (!isPlayerEggsAreZero) {
        console.log(`Player one has ${countEggs1} eggs left.`)
        console.log(`Player two has ${countEggs2} eggs left.`)

    }



}
easterBattle([
    '5', '4', 'one',
    'two', 'one', 'two',
    'two', 'End', '',
    '', ''
])