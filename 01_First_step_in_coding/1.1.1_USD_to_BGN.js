function usdToBgn(input) {

    let usdToBgnExchangerate = 1.79549;
    let usd = Number(input[0]);
    let bgn = usd * usdToBgnExchangerate;


    console.log(bgn)

}

usdToBgn(["22"])
