function cleverLily(input) {

    let age = Number(input[0]);
    let washingMashinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toyCount = 0;
    let totalMoney = 0;
    let giftMoney = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 1) {
            toyCount += 1
        } else {
            totalMoney += giftMoney;
            totalMoney--;
            giftMoney += 10;

        }


    }
    totalMoney += toyCount * toyPrice
    if (totalMoney >= washingMashinePrice) {
        console.log(`Yes! ${(totalMoney - washingMashinePrice).toFixed(2)}`)


    } else {
        console.log(`No! ${(washingMashinePrice - totalMoney).toFixed(2)}`)
    }




}
cleverLily(["10", "170.00", "6"])