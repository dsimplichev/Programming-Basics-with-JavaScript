function solve(input) {

    let index = 0;
    let dest = input[index];
    index++;
    let needMoney = input[index];
    index++;
    let myMoney = 0

    while (dest != 'End') {

        if (Number(input[index]) != NaN) {
            myMoney += Number(input[index]);
            if (myMoney >= needMoney) {
                console.log(`Going to ${dest}!`);
                myMoney = 0;
                index++;
                dest = input[index];
                index++;
                needMoney = input[index];
                index++;
            } else {
                index++;
            }
        }

    }

}
solve(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"])
