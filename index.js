var package = require("./package.json");
var learnersAPI = require("./lib/learners")

console.log("loaded" + package.name + ", version "+package.version);

exports.handler = function(event, context) {
    learnersAPI.handleRequest(event, context.done);
}