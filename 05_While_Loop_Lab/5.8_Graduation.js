function graduation(input) {

    let index = 0;
    let name = input[index];
    index++
    let sumGrade = 0;
    let grade = 1;
    let badGradeCount = 0;
    let isExcluded = false
    while (grade <= 12) {
        let currentGrade = Number(input[index])
        index++
        if (currentGrade < 4) {
            badGradeCount++
            if (badGradeCount == 2) {
                isExcluded = true
                console.log(`${name} has been excluded at ${grade} grade`)
                break;
            }
            continue;
        }
        grade++
        sumGrade += currentGrade

    }
    if (!isExcluded) {
        console.log(`${name} graduated. Average grade: ${(sumGrade / 12).toFixed(2)}`)
    }







}
graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])