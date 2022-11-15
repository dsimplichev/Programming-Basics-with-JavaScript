function coins(input) {

    let moneyAmount = Number(input[0])
    let realMoney = 0;

    let currentAmountInCoins = Math.round(moneyAmount * 100);

    while (currentAmountInCoins > 0) {
        if (currentAmountInCoins >= 200) {
            currentAmountInCoins -= 200;
        } else if (currentAmountInCoins >= 100) {
            currentAmountInCoins -= 100;
        } else if (currentAmountInCoins >= 50) {
            currentAmountInCoins -= 50;
        } else if (currentAmountInCoins >= 20) {
            currentAmountInCoins -= 20;
        } else if (currentAmountInCoins >= 10) {
            currentAmountInCoins -= 10;
        } else if (currentAmountInCoins >= 5) {
            currentAmountInCoins -= 5;
        } else if (currentAmountInCoins >= 2) {
            currentAmountInCoins -= 2;
        } else if (currentAmountInCoins >= 1) {
            currentAmountInCoins -= 1;
        }
        realMoney++
    }


    console.log(realMoney)














}
coins(["1.23"])