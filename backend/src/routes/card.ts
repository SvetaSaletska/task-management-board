import express from 'express';
import { createCardController, moveCardController } from '../controllers/card';
import { ctrlWrapper } from '../utils/ctrlWrapper';
const router = express.Router();
// const jsonParser = express.json();

router.post('/cards', ctrlWrapper(createCardController));
router.post('/move-card', ctrlWrapper(moveCardController));

export default router;
