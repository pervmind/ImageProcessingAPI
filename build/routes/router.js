"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//  importing express to create the router
//  importing images file exports at it hold the functionallity of the app
var express_1 = __importDefault(require("express"));
var images_1 = __importDefault(require("./api/images"));
//  creating the router
var routes = express_1.default.Router();
//  'api endpoint
routes.get('/', function (req, res) {
    res.send('this is api route!! add /images?name=(your file name)&width=(image width)&height=(image height) to start');
});
//  using images imported earlier to link the router to '/images' endpoint
routes.use(images_1.default.images);
// exporting routes for index to use it
exports.default = routes;
