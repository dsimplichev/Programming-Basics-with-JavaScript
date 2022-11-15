function examPriparation(input) {

    let badGrade = 4;
    let exitMassage = "Enough";
    let badGradeLim = Number(input[0])
    let badGradeCount = 0;

    let index = 1;
    let totalTask = 0;
    let sumTask = 0;
    let lastNameTask = '';
    while (true) {
        let examName = input[index]
        index++

        let grade = Number(input[index])
        index++

        if (examName == exitMassage) {
            console.log(`Average score: ${(sumTask / totalTask).toFixed(2)}`)
            console.log(`Number of problems: ${totalTask}`)
            console.log(`Last problem: ${lastNameTask} `)
            break;
        }
        totalTask++
        sumTask += grade
        lastNameTask = examName

        if (grade <= badGrade) {
            badGradeCount++
            if (badGradeCount == badGradeLim) {
                console.log(`You need a break, ${badGradeCount} poor grades.`)
                break;
            }
        }

    }





}
examPriparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])