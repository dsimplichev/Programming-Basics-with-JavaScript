function summerOutfits(input) {

    let degrees = Number(input[0]);
    let day = input[1];
    let shoes = ""
    let outfit = ""

    if (day === "Morning") {
        if (degrees >= 10 && degrees <= 18) {
            outfit = "Sweatshirt"
            shoes = "Sneakers"
        } else if (degrees > 18 && degrees <= 24) {
            outfit = "Shirt"
            shoes = "Moccasins"
        } else if (degrees >= 25) {
            outfit = "T-Shirt"
            shoes = "Sandals"
        }

    } else if (day === "Afternoon") {
        if (degrees >= 10 && degrees <= 18) {
            outfit = "Shirt"
            shoes = "Moccasins"
        } else if (degrees > 18 && degrees <= 24) {
            outfit = "T-Shirt"
            shoes = "Sandals"
        } else if (degrees >= 25) {
            outfit = "Swim Suit"
            shoes = "Barefoot"
        }
    } else if (day = "Evening") {
        if (degrees >= 10 && degrees <= 18) {
            outfit = "Shirt"
            shoes = "Moccasins"
        } else if (degrees > 18 && degrees <= 24) {
            outfit = "Shirt"
            shoes = "Moccasins"
        } else if (degrees >= 25) {
            outfit = "Shirt"
            shoes = "Moccasins"
        }
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)


}
summerOutfits(["16", "Morning"])
