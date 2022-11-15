function projectsCreation(input) {

    let name = input[0];
    let numberProjects = Number(input[1]);
    let oneProjectsTime = 3;
    let needHours = numberProjects * oneProjectsTime;


    let results = `The architect ${name} will need ${needHours} hours to complete ${numberProjects} project/s.`

    console.log(results)


}
projectsCreation(["George", "4"]);