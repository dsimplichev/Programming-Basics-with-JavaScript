function easterTrip(input) {

    let destination = input[0];
    let date = input[1];
    let nights = Number(input[2]);
    let price = 0;

    switch (destination) {
        case "France":
            switch (date) {
                case "21-23": price = nights * 30; break;
                case "24-27": price = nights * 35; break;
                case "28-31": price = nights * 40; break;
            }
            break;
        case "Italy":
            switch (date) {
                case "21-23": price = nights * 28; break;
                case "24-27": price = nights * 32; break;
                case "28-31": price = nights * 39; break;
            }
            break;
        case "Germany":
            switch (date) {
                case "21-23": price = nights * 32; break;
                case "24-27": price = nights * 37; break;
                case "28-31": price = nights * 43; break;
            }
            break;

    }
    console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`)

}
easterTrip(['Italy', '21-23', '7', ''])