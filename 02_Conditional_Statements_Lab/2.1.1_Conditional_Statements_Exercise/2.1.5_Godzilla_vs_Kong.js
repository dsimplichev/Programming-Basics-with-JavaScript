function godzillaVsKong(input) {

    let buget = Number(input[0])
    let statist = Number(input[1])
    let priceClothStatist = Number(input[2])

    let decorPrice = buget * 0.10
    let priceCloth = statist * priceClothStatist

    if (statist > 150) {
        priceCloth *= 0.90

    }
    let totalPrice = decorPrice + priceCloth


    if (totalPrice > buget) {
        console.log("Not enough money!")
        console.log(`Wingard needs ${(totalPrice - buget).toFixed(2)} leva more.`)

    } else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(buget - totalPrice).toFixed(2)} leva left.`)

    }








}
godzillaVsKong(["20000", "120", "55.5"])
