function shopping(input) {

    let buget = Number(input[0])
    let gpu = Number(input[1])
    let cpu = Number(input[2])
    let ram = Number(input[3])

    //Видеокарта – 250 лв./бр.
    //Процесор – 35% от цената на закупените видеокарти/бр.
    //Рам памет – 10% от цената на закупените видеокарти/бр.
    let priceGpu = gpu * 250;
    let priceCpu = (priceGpu * 35) / 100
    let priceRam = (priceGpu * 10) / 100
    let finalPriceCpu = cpu * priceCpu
    let finalPriceRam = ram * priceRam

    let totalPrice = priceGpu + finalPriceCpu + finalPriceRam

    if (gpu > cpu) {
        totalPrice *= 0.85
    }
    if (totalPrice <= buget) {
        console.log(`You have ${(buget - totalPrice).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(totalPrice - buget).toFixed(2)} leva more!`)
    }








}
shopping(["900", "2", "1", "3"])