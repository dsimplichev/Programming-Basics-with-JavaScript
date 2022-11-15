function foodDelivery(input) {


    let chickenMenu = 10.35;
    let fishMenu = 12.40;
    let vegMenu = 8.15;
    let deliveryPrice = 2.50;

    let numberChickenMenu = Number(input[0]);
    let numberFishMenu = Number(input[1]);
    let numberVegMenu = Number(input[2]);

    let priceChickenMenu = numberChickenMenu * chickenMenu;
    let priceFishMenu = numberFishMenu * fishMenu;
    let priceVegMenu = numberVegMenu * vegMenu;

    let totalPriceMenus = priceChickenMenu + priceFishMenu + priceVegMenu;
    let desertPrice = (totalPriceMenus * 20) / 100;

    let totalPrice = totalPriceMenus + desertPrice + deliveryPrice;




    console.log(totalPrice)


}

foodDelivery(["2", "4", "3"])

//Цена за пилешките менюта: 2 броя * 10.35  = 20.70
//Цена за менютата с риба: 4 броя * 12.40 = 49.60
//Цена за вегетарианските менюта: 3 броя * 8.15 = 24.45
//Обща цена на менютата: 20.70 + 49.60 + 24.45 = 94.75
//Цена на десерта: 20% от 94.75 = 18.95
//Цена на доставка: 2.50 (по условие)
//Обща цена на поръчката: 94.75 + 18.95 + 2.50 = 116.20