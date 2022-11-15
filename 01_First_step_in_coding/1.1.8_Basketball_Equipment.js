function basketballEquipment(input) {


    let basketballtraining = Number(input[0]);

    let sneakers = (basketballtraining * 60) / 100;
    let tshirt = (sneakers * 80) / 100;
    let ball = 1 / 4 * tshirt;
    let accessories = 1 / 5 * ball;

    let totalPrice = sneakers + tshirt + ball + accessories + basketballtraining;


    console.log(totalPrice)

}

basketballEquipment(["365"])