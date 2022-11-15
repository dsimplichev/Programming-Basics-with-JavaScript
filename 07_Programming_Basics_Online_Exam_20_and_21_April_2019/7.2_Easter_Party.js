function easterParty(input) {

    let partyPeople = Number(input[0]);
    let priceForOnePeople = Number(input[1]);
    let budget = Number(input[2]);

    if (partyPeople >= 10 && partyPeople <= 15) {
        priceForOnePeople *= 0.85;
    } else if (partyPeople >= 15 && partyPeople <= 20) {
        priceForOnePeople *= 0.80;
    } else if (partyPeople > 20) {
        priceForOnePeople *= 0.75;
    }

    let cakePrice = budget * 0.10;
    let totalPrice = partyPeople * priceForOnePeople + cakePrice

    if (totalPrice <= budget) {
        console.log(`It is party time! ${(budget - totalPrice).toFixed(2)} leva left.`)

    } else {
        console.log(`No party! ${(totalPrice - budget).toFixed(2)} leva needed.`)
    }


}
easterParty(['18', '30', '450'])