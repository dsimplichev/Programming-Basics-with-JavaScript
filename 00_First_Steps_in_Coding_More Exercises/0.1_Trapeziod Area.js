function trapeziod(input) {

    let b1 = Number(input[0]);
    let b2 = Number(input[1]);
    let h = Number(input[2]);

    let trapeziod = (b1 + b2) * h / 2;

    console.log(trapeziod.toFixed(2))






}
trapeziod([8, 13, 7])