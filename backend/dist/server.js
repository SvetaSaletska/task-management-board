"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupServer = void 0;
const express_1 = __importDefault(require("express"));
const env_1 = require("./utils/env");
const PORT = Number((0, env_1.env)('PORT', '3000'));
const setupServer = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};
exports.setupServer = setupServer;
