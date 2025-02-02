import express from 'express';

const router = express.Router();
// const jsonParser = express.json();

router.post('/boards', ctrlWrapper(createBoardController));
router.get('/boards', ctrlWrapper(getAllBoardsController));

export default router;
