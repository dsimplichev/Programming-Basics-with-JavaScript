function vacationBooks(input) {

    let totalPages = Number(input[0]);
    let pages = Number(input[1]);
    let days = Number(input[2]);


    let totalHours = totalPages / pages;
    let hoursPerDays = totalHours / days;

    console.log(hoursPerDays);
}
vacationBooks(["212", "20", "2"])
//vacationBooks(["432", "15", "4"])