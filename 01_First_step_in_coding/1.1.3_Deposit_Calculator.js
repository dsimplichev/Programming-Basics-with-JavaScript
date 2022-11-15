function depositCalcolator(input) {

    let depositAmount = Number(input[0]);
    let depositMonths = Number(input[1]);
    let annualInterestRate = Number(input[2]) / 100;

    let totalAmount = depositAmount + depositMonths * ((depositAmount * annualInterestRate) / 12);

    console.log(totalAmount)


    // сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)

}

depositCalcolator(["200", "3", "5.7"])