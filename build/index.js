"use strict";
//  importing express and the main app router to the server file
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./routes/router"));
//  creating enstance of the server and setting it to port 3000
var app = (0, express_1.default)();
var port = 3000;
//  creating the home endpoint '/' for the app
app.get('/', function (req, res) {
    res.send('This is the main route!! visit /api to start');
});
//  using the routes function imported earlier to control the routes of the app on endpoint /api
app.use('/api', router_1.default);
//  starting the server and listening to port 3000
app.listen(port, function () {
    console.log("server is now running on localhost:".concat(port));
});
//  exporting app for testing in jasmine file indexSpec
exports.default = app;
