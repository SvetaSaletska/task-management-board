"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initMongoConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = require("../utils/env");
const initMongoConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = (0, env_1.env)('MONGODB_USER');
        const pwd = (0, env_1.env)('MONGODB_PASSWORD');
        const url = (0, env_1.env)('MONGODB_URL');
        const db = (0, env_1.env)('MONGODB_DB');
        yield mongoose_1.default.connect(`mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`);
        console.log('Mongo connection successfully established!');
    }
    catch (error) {
        console.log('Error while setting up mongo connection', error);
        throw error;
    }
});
exports.initMongoConnection = initMongoConnection;
