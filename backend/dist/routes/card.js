"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const card_1 = require("../controllers/card");
const ctrlWrapper_1 = require("../utils/ctrlWrapper");
const router = express_1.default.Router();
// const jsonParser = express.json();
router.post('/cards', (0, ctrlWrapper_1.ctrlWrapper)(card_1.createCardController));
router.post('/move-card', (0, ctrlWrapper_1.ctrlWrapper)(card_1.moveCardController));
exports.default = router;
