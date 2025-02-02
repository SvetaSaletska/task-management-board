import { Card } from '../db/models/card';
import { Board } from '../db/models/bord';
import { Request, Response, NextFunction } from 'express';

export const createCardController = async (req: Request, res: Response) => {
  try {
    const { title, description, board, column } = req.body;
    const card = new Card({ title, description, board, column });
    await card.save();

    const updatedBoard = await Board.findByIdAndUpdate(
      board,
      {
        $push: { [`columns.${column}`]: card._id },
      },
      { new: true },
    );

    res.status(201).json(card);
  } catch (error) {
    res.status(500).json({ message: 'Error creating card', error });
  }
};

export const moveCardController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { cardId, destinationColumn } = req.body;
    // Логіка для переміщення картки
    res.status(200).json({ message: 'Card moved', cardId, destinationColumn });
  } catch (error) {
    next(error);
  }
};
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
