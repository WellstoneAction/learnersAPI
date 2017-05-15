var assert = require("coffee").assert;
var learnersAPI = require("../lib/learnersAPI.js");

describe("learnersAPI", function () {
    it("exports handleRequest", function () { 
        assert.typeOf(learnersAPI.handleRequest, "function");
    });
});