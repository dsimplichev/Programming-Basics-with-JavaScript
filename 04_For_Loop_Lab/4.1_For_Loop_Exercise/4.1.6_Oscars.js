function oscars(input) {

    let actorName = input[0];
    let actorPoints = Number(input[1]);
    let actorCount = Number(input[2]);

    for (let i = 0; i < actorCount; i += 2) {
        let actorCount = input[i + 3]
        let actorPoints = Number(input[i + 4]);

        actorPoints += actorName.length * actorCount / 2;
        if (actorPoints > 1250.50) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(actorPoints).toFixed(1)}!`)

        }
        if (actorPoints <= 1250.50) {
            console.log(`Sorry, ${actorName} you need ${(1250.50 - actorPoints).toFixed(1)} more!`)

        }

    }








}
oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"])