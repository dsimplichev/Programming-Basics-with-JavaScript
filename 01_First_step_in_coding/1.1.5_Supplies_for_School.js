function learningMaterials(input) {

    let pricePens = 5.80;
    let priceMarkers = 7.20;
    let pricePreparation = 1.20;


    let amountPackOfPens = Number(input[0]);
    let amountPackOfMarkers = Number(input[1]);
    let amaountPreparation = Number(input[2]);
    let discount = Number(input[3]) / 100;

    let totalPricePens = amountPackOfPens * pricePens;
    let totalPriceMarkers = amountPackOfMarkers * priceMarkers;
    let totalPricePreparation = amaountPreparation * pricePreparation;
    let totalPrice = totalPricePens + totalPriceMarkers + totalPricePreparation;

    let priceWithDiscount = totalPrice - (totalPrice * discount);


    console.log(priceWithDiscount)


}

learningMaterials(["2", "3", "4", "25"])




//Цена на пакетите химикали => 2 * 5.80 = 11.60 лв.
//Цена на пакетите маркери => 3 * 7.20 = 21.60 лв.
//Цена на препарата => 4 * 1.20 = 4.80 лв.
//Цена за всички материали => 11.60 + 21.60 + 4.80 = 38.00 лв.
//25% = 0.25
//Цена с намаление = 38.00 – (38.00 * 0.25) = 28.50 лв.