import dotenv from 'dotenv';
import express from 'express';

const PORT = Number(env('PORT', '3000'));

export const setupServer = () => {
  const app = express();

  app.use(express.json());

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
