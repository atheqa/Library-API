const data = require("./data")
console.log(data);


function getBookByAuthor(author) {
    let matchedBooks = [];

    for(idx = 0; idx < data.length; idx++) {
        if(matchedBooks === author) {
            data.push(author);
        }

    } return matchedBooks;
}

console.log(getBookByAuthor("Reichs, Kathy"));
