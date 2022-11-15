function repainting(input) {

    let priceNylon = 1.50;
    let pricePaint = 14.50;
    let priceThinnerPaint = 5.00;
    let pricePlasticBags = 0.40;


    let extraNylon = 2;
    let craftsManOneHours = 0.30;

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinnerPaint = Number(input[2]);
    let craftsMan = Number(input[3]);

    let extraPaint = (paint * 10) / 100;
    let finalPriceNylon = (nylon + extraNylon) * priceNylon;
    let finalPricePaint = (paint + extraPaint) * pricePaint;
    let finalPriceThinnerPaint = thinnerPaint * priceThinnerPaint;

    let totalPriceMaterials = finalPriceNylon + finalPricePaint + finalPriceThinnerPaint + pricePlasticBags;
    let salaryCraftsMan = (totalPriceMaterials * craftsManOneHours) * craftsMan;

    let totalPrice = totalPriceMaterials + salaryCraftsMan;

    console.log(totalPrice)


}

repainting(["10", "11", "4", "8"])