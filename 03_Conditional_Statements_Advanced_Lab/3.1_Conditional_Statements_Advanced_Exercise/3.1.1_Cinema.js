function cinema(input) {

    let PremierePrice = 12;
    let NormalPrice = 7.50;
    let DiscountPrice = 5;

    let type = input[0];
    let rows = Number(input[1]);
    let cowns = Number(input[2]);
    let totalPrice = 0;

    if (type === "Premiere") {
        totalPrice = rows * cowns * PremierePrice;
    } else if (type === "Normal") {
        totalPrice = rows * cowns * NormalPrice;
    } else if (type === "Discount") {
        totalPrice = rows * cowns * DiscountPrice;

    }

    console.log(`${(totalPrice).toFixed(2)} leva.`)





}
cinema(["Premiere", "10", "12"])