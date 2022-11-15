function newHouse(input) {

    let rosesPrice = 5;
    let daliaPrice = 3.80;
    let tulipPrice = 2.80;
    let narciusPrice = 3;
    let gladiolPrice = 2.50

    let type = input[0]
    let count = Number(input[1])
    let budget = Number(input[2])
    let totalPrice = 0;

    if (type == "Roses") {
        totalPrice = count * rosesPrice;
        if (count > 80) {
            totalPrice *= 0.90;
        }
    } else if (type == "Dahlias") {
        totalPrice = count * daliaPrice;
        if (count > 90) {
            totalPrice *= 0.85;
        }
    } else if (type == "Tulips") {
        totalPrice = count * tulipPrice;
        if (count > 80) {
            totalPrice *= 0.85;
        }
    } else if (type == "Narcissus") {
        totalPrice = count * narciusPrice;
        if (count < 120) {
            totalPrice *= 1.15;
        }

    } else if (type == "Gladiolus") {
        totalPrice = count * gladiolPrice;
        if (count < 80) {
            totalPrice *= 1.20;
        }
    }

    if (budget >= totalPrice) {
        console.log(`Hey, you have a great garden with ${count} ${type} and ${(budget - totalPrice).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`)
    }





}


newHouse(["Tulips", "88", "260"])