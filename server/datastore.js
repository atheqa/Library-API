const data = require("./data")

function getBookByAuthor(author) {
    let matchedBooks = [];

    for(let idx = 0; idx < data.length; idx++) {
        if(data[idx].author === author) {
            matchedBooks.push(data[idx]);
        }

    } 
    return matchedBooks;
};

// const kathyn_kirjat = getBookByAuthor(Reichs, Kathy);

module.exports = { getBookByAuthor };