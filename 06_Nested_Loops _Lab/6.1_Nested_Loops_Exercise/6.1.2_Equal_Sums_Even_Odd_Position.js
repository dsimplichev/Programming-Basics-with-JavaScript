function equalSums(input) {

    let firstNum = Number(input.shift());
    let secondNum = Number(input.shift());
    let printLine = '';

    for (let i = firstNum; i <= secondNum; i++) {
        let currentNumber = ' ' + i;
        let oddSum = 0;
        let evenSum = 0;


        for (let j = 0; j < currentNumber.length; j++) {
            let currentDigit = Number(currentNumber.charAt(j));
            if (j % 2 == 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }

        }
        if (oddSum === evenSum) {
            printLine += `${i} `
        }

    }
    console.log(printLine)


}
equalSums(["100000", "100050"])