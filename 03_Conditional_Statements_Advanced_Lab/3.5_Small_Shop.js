function smallShop(input) {

    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);

    let totalPrice = 0;
    if (town === "Sofia") {
        if (product == "coffee") {
            totalPrice = quantity * 0.50;
        } else if (product == "water") {
            totalPrice = quantity * 0.80;
        } else if (product == "beer") {
            totalPrice = quantity * 1.20;
        } else if (product == "sweets") {
            totalPrice = quantity * 1.45;
        } else if (product == "peanuts") {
            totalPrice = quantity * 1.60;
        }
    } else if (town === "Plovdiv") {
        if (product == "coffee") {
            totalPrice = quantity * 0.40;
        } else if (product == "water") {
            totalPrice = quantity * 0.70;
        } else if (product == "beer") {
            totalPrice = quantity * 1.15;
        } else if (product == "sweets") {
            totalPrice = quantity * 1.30;
        } else if (product == "peanuts") {
            totalPrice = quantity * 1.50;
        }
    } else if (town === "Varna") {
        if (product == "coffee") {
            totalPrice = quantity * 0.45;
        } else if (product == "water") {
            totalPrice = quantity * 0.70;
        } else if (product == "beer") {
            totalPrice = quantity * 1.10;
        } else if (product == "sweets") {
            totalPrice = quantity * 1.35;
        } else if (product == "peanuts") {
            totalPrice = quantity * 1.55;
        }
    }

    console.log(totalPrice)


}
smallShop(["peanuts", "Plovdiv", "1"])