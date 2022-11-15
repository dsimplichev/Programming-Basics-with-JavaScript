function fishTank(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let occupiedSpace = Number(input[3]) / 100;

    let sizeTank = length * width * height;
    let volumTank = sizeTank / 1000;
    let needLiters = volumTank * (1 - 0.17);



    console.log(needLiters)





}

fishTank(["85", "75", "47", "17"])
fishTank(["105", "77", "89", "18.5"])