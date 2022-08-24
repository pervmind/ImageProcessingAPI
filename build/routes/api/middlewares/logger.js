"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (req, res, next) {
    var url = JSON.stringify(req.url);
    console.log("".concat(url, " was visited!!"));
    next();
};
exports.default = logger;
