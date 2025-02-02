import { Request, Response } from 'express';
import { Board } from '../db/models/bord';

export const createBoardController = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const board = new Board({
      name,
      columns: { todo: [], inProgress: [], done: [] },
    });
    await board.save();
    res.status(201).json(board);
  } catch (error) {
    res.status(500).json({ message: 'Error creating board', error });
  }
};

export const getAllBoardsController = async (req: Request, res: Response) => {
  try {
    const boards = await Board.find().populate(
      'columns.todo columns.inProgress columns.done',
    );
    res.status(200).json(boards);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching boards', error });
  }
};
