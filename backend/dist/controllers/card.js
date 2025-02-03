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
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveCardController = exports.createCardController = void 0;
const card_1 = require("../db/models/card");
const bord_1 = require("../db/models/bord");
const createCardController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, board, column } = req.body;
        const card = new card_1.Card({ title, description, board, column });
        yield card.save();
        const updatedBoard = yield bord_1.Board.findByIdAndUpdate(board, {
            $push: { [`columns.${column}`]: card._id },
        }, { new: true });
        res.status(201).json(card);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating card', error });
    }
});
exports.createCardController = createCardController;
const moveCardController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cardId, destinationColumn } = req.body;
        // Логіка для переміщення картки
        res.status(200).json({ message: 'Card moved', cardId, destinationColumn });
    }
    catch (error) {
        next(error);
    }
});
exports.moveCardController = moveCardController;
// export const moveCardController = async (req: Request, res: Response) => {
//   try {
//     const { cardId, fromColumn, toColumn, boardId } = req.body;
//     const card = await Card.findById(cardId);
//     if (!card) {
//       return res.status(404).json({ message: 'Card not found' });
//     }
//     card.column = toColumn;
//     await card.save();
//     await Board.findByIdAndUpdate(boardId, {
//       $pull: { [`columns.${fromColumn}`]: cardId },
//       $push: { [`columns.${toColumn}`]: cardId },
//     });
//     res.status(200).json(card);
//   } catch (error) {
//     res.status(500).json({ message: 'Error moving card', error });
//   }
// };
