function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fisherMen = input[2];
    let totalPrice = 0;


    if (season == "Spring") {
        totalPrice = 3000;
    } else if (season == "Summer") {
        totalPrice = 4200;
    } else if (season == "Autumn") {
        totalPrice = 4200;
    } else if (season == "Winter") {
        totalPrice = 2600;
    }

    if (fisherMen <= 6) {
        totalPrice *= 0.90;
    } else if (fisherMen >= 7 && fisherMen < 12) {
        totalPrice *= 0.85
    } else if (fisherMen > 12) {
        totalPrice *= 0.75
    }

    if (fisherMen % 2 == 0 && season != "Autumn") {
        totalPrice *= 0.95
    }

    if (budget >= totalPrice) {
        console.log(`Yes! You have ${(budget - totalPrice).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva.`)
    }


}
fishingBoat(["3000", "Summer", "11"])