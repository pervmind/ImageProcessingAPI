"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./routes/router"));
var app = (0, express_1.default)();
var port = 3000;
app.get('/', function (req, res) {
    res.send('This is the main route!! visit /api to start');
});
app.use('/api', router_1.default);
app.listen(port, function () {
    console.log("server is now running on localhost:".concat(port));
});
exports.default = app;
