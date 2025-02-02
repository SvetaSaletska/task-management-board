import { Request, Response } from 'express';
import { BoardsCollection } from '../models/board.ts';
import { Card } from '../models/card.model';

export const createBoard = async (req: Request, res: Response) => {
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

export const getBoards = async (req: Request, res: Response) => {
  try {
    const boards = await Board.find().populate(
      'columns.todo columns.inProgress columns.done',
    );
    res.status(200).json(boards);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching boards', error });
  }
};
