"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
(0, sharp_1.default)("images/full/fjord.jpg")
    .resize(300, 200)
    .toFile("output.jpg");
