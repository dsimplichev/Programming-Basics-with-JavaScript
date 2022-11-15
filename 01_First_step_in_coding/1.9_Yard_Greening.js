function yardGreening(input) {

    let priceGreenDds = 7.61;
    let discount = 18;
    let yardGreen = Number(input[0]);

    let priceGreen = yardGreen * priceGreenDds;
    let priceDisc = (discount * priceGreen) / 100;
    let totalPrice = priceGreen - priceDisc;

    console.log(`The final price is: ${totalPrice} lv.`);
    console.log(`The discount is: ${priceDisc} lv.`);


    //console.log(results)
    //console.log(results2)







}
yardGreening["150"]