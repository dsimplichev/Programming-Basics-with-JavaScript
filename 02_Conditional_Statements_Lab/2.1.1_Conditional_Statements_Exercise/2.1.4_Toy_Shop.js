function toyShop(input) {

    let puzzlePrice = 2.60;
    let doll = 3;
    let teddybear = 4.10;
    let minions = 8.20;
    let truck = 2;

    let holiday = Number(input[0])
    let orderPuzzle = Number(input[1])
    let orderDoll = Number(input[2])
    let orderTeddyBear = Number(input[3])
    let orderMinions = Number(input[4])
    let orderTruck = Number(input[5])

    let order = orderPuzzle * puzzlePrice + orderDoll * doll + orderTeddyBear * teddybear + orderMinions * minions + orderTruck * truck
    let countToys = orderPuzzle + orderDoll + orderTeddyBear + orderMinions + orderTruck

    if (countToys >= 50) {
        order *= 0.75
    }
    order *= 0.90

    if (order > holiday) {
        console.log(`Yes! ${(order - holiday).toFixed(2)} lv left.`)

    } else {
        console.log(`Not enough money! ${(holiday - order).toFixed(2)} lv needed.`)
    }




}
toyShop(["40.8", "20", "25", "30", "50", "10"])

