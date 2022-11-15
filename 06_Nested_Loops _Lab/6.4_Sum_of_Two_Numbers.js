function sumOfTwoNumbers(input) {

    let numStart = Number(input[0]);
    let numEnd = Number(input[1]);
    let magicNum = Number(input[2])
    let currentCombination = 0
    let isValid = false

    for (let num1 = numStart; num1 <= numEnd; num1++) {
        for (let num2 = numStart; num2 <= numEnd; num2++) {
            currentCombination++
            let sum = num1 + num2;

            if (sum == magicNum) {
                isValid = true
                console.log(`Combination N:${currentCombination} (${num1} + ${num2} = ${magicNum})`)
                break;
            }




        }
        if (isValid == true) {
            break;
        }

    }
    if (isValid == false) {
        console.log(`${currentCombination} combinations - neither equals ${magicNum}`)

    }
}





sumOfTwoNumbers(["1",
    "10",
    "5"])