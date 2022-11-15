function salary(input) {

    let openTabs = Number(input[0]);
    let salary = Number(input[1]);
    let facebookPenalty = 150;
    let instagramPenalty = 100;
    let redditPenalty = 50;

    for (let i = 0; i < openTabs; i++) {
        let webSiteName = input[i + 2];

        if (webSiteName == "Facebook") {
            salary -= facebookPenalty;
        } else if (webSiteName == "Instagram") {
            salary -= instagramPenalty;
        } else if (webSiteName == "Reddit") {
            salary -= redditPenalty;
        }




    }
    if (salary <= 0) {
        console.log("You have lost your salary.")
    } else {
        console.log(salary)
    }


}

salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"])