function combinations(input) {

    let n = Number(input[0]);
    let validCom = 0;
    for (let num1 = 0; num1 <= n; num1++) {
        for (let num2 = 0; num2 <= n; num2++) {
            for (let num3 = 0; num3 <= n; num3++) {
                if (num1 + num2 + num3 == n) {
                    validCom++
                }
            }
        }
    }
    console.log(validCom)


}
combinations(["25"])