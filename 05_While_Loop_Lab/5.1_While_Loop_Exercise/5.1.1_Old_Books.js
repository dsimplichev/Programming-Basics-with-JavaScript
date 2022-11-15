function oldBooks(input) {

    let exitMassage = "No More Books"
    let targetBook = input[0]
    let booksChek = 0;
    let index = 1;

    while (true) {
        let currentBook = input[index];
        index++
        booksChek++

        if (currentBook == exitMassage) {
            console.log("The book you search is not here!")
            console.log(`You checked ${booksChek - 1} books.`)
            break;
        }

        if (currentBook == targetBook) {
            console.log(`You checked ${booksChek - 1} books and found it.`)
            break;
        }


    }





}
oldBooks(["Troy",
    "Stronger",
    "Life Style",
    "Troy"])