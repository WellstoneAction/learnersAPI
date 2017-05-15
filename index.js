var package = require("./package.json");
var learnersAPI = require("./lib/learnersAPI.js");

console.log("loaded" + package.name + ", version "+package.version);

exports.handler = function(event, context) {
    learnersAPI.handleRequest(event, context.done);
}