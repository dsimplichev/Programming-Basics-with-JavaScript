function tradeCommissions(input) {

    let town = input[0];
    let salls = Number(input[1]);
    let commision = 0;
    let isValidtown = true;
    let isValidsalls = true;

    if (town === "Sofia") {
        if (salls >= 0 && salls <= 500) {
            commision = (salls * 5) / 100;
        } else if (salls > 500 && salls <= 1000) {
            commision = (salls * 7) / 100;
        } else if (salls > 1000 && salls <= 10000) {
            commision = (salls * 8) / 100;
        } else if (salls > 10000) {
            commision = (salls * 12) / 100;
        } else {
            isValidsalls = false
        }
    } else if (town === " Varna") {
        if (salls >= 0 && salls <= 500) {
            commision = (salls * 4.5) / 100;
        } else if (salls > 500 && salls <= 1000) {
            commision = (salls * 7.5) / 100;
        } else if (salls > 1000 && salls <= 10000) {
            commision = (salls * 10) / 100;
        } else if (salls > 10000) {
            commision = (salls * 13) / 100
        } else {
            isValidsalls = false
        }
    } else if (town === "Plovdiv") {
        if (salls >= 0 && salls <= 500) {
            commision = (salls * 5.5) / 100;
        } else if (salls > 500 && salls <= 1000) {
            commision = (salls * 8) / 100;
        } else if (salls > 1000 && salls <= 10000) {
            commision = (salls * 12) / 100;
        } else if (salls > 10000) {
            commision = (salls * 14.5) / 100;
        } else {
            isValidsalls = false

        }

    } else {
        isValidtown = false
    }


    if (isValidsalls && isValidtown) {
        console.log(commision.toFixed(2))
    } else {
        console.log("error")
    }



}







tradeCommissions(["Varna", "3874.50"])