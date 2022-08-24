"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  sending to server console the url visited
var logger = function (req, res, next) {
    var url = JSON.stringify(req.url);
    console.log("".concat(url, " was visited!!"));
    next();
};
//  exporting middleware to images file
exports.default = logger;
