"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const env = (name, defaultValue) => {
    const value = process.env[name];
    if (value)
        return value;
    if (defaultValue)
        return defaultValue;
    throw new Error(`Missing: process.env['${name}'].`);
};
exports.env = env;
