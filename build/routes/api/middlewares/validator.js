"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
//  validator function takes the query strings from the endpoint and checks for input validity for the next middleware
var validator = function (req, res, next) {
    var name = req.query.name;
    var width = req.query.width;
    var height = req.query.height;
    console.log(name, width, height);
    if (name === '' || typeof name !== 'string') {
        res.send('enter valid file name');
        return;
    }
    if (!fs_1.default.existsSync("images/full/".concat(name, ".jpg"))) {
        res.status(500);
        res.send('invalid file name');
        console.log('file doesnt exist');
        return;
    }
    if (parseInt(req.query.width) <= 0 ||
        typeof width !== 'string' ||
        width === '') {
        res.status(500);
        res.send('invalid width dimentions');
        console.log('invalid dimentions (width)');
        return;
    }
    if (parseInt(req.query.height) <= 0 ||
        typeof height !== 'string' ||
        height === '') {
        res.status(500);
        res.send('invalid height dimentions');
        console.log('invalid dimentions (height)');
        return;
    }
    next();
};
//  exporting for images file
exports.default = validator;
