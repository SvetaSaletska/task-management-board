"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bord_1 = require("../controllers/bord");
const ctrlWrapper_1 = require("../utils/ctrlWrapper");
const router = express_1.default.Router();
// const jsonParser = express.json();
router.post('/boards', (0, ctrlWrapper_1.ctrlWrapper)(bord_1.createBoardController));
router.get('/boards', (0, ctrlWrapper_1.ctrlWrapper)(bord_1.getAllBoardsController));
exports.default = router;
