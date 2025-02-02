import express from 'express';
import {
  createBoardController,
  getAllBoardsController,
} from '../controllers/bord';
import { ctrlWrapper } from '../utils/ctrlWrapper';

const router = express.Router();
// const jsonParser = express.json();

router.post('/boards', ctrlWrapper(createBoardController));
router.get('/boards', ctrlWrapper(getAllBoardsController));

export default router;
