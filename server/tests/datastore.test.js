const assert = require("chai").assert;
const getBookByAuthor = require("../datastore").getBookByAuthor;
const datastore = require("../datastore");

getBookByAuthorResult = datastore.getBookByAuthor("Reichs, Kathy");

describe("getBookByAuthor(author)", function () {
    it("getBookByAuthor(author) should return matchedBooks", function () {
        assert.equal(getBookByAuthorResult[0].author, "Reichs, Kathy");
        assert.equal(getBookByAuthorResult.length, 1);
    });
});
