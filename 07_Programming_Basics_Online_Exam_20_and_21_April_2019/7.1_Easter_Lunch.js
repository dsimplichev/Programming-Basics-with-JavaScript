function easter(input) {

    let priceBread = 3.20;
    let eggsPrice12 = 4.35;
    let cockiesPrice = 5.40;
    let eggPaint = 0.15;

    let bread = Number(input[0]);
    let eggs = Number(input[1]);
    let cockies = Number(input[2]);

    let finalPriceBread = bread * priceBread;
    let finalPriceEggs = eggs * eggsPrice12;
    let finalCockies = cockies * cockiesPrice;

    let finalPricePaint = eggs * 12 * eggPaint
    let totalPrice = finalPriceBread + finalPriceEggs + finalCockies + finalPricePaint;

    console.log(totalPrice.toFixed(2))
}
easter(['3', '2', '3'])