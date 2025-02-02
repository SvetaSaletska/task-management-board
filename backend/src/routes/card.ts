import express from 'express';

const router = express.Router();
// const jsonParser = express.json();

router.post('/cards', ctrlWrapper(createCardController));
router.post('/move-card', ctrlWrapper(moveCardController));

export default router;
