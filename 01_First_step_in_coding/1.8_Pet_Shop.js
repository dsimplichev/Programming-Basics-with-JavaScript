function petShop(input) {

    let dogFoodPrice = 2.50
    let catFoodPrice = 4;

    let dogFoodPacks = Number(input[0]);
    let catFoodPacks = Number(input[1]);

    let dogPrice = dogFoodPacks * dogFoodPrice;
    let catPrice = catFoodPacks * catFoodPrice;

    let totalPrice = dogPrice + catPrice;

    console.log(totalPrice)



}

petShop(["5", "4"])