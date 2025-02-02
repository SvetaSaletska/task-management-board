import mongoose, { Document, Schema } from 'mongoose';

export interface ICard extends Document {
  title: string;
  description: string;
  board: mongoose.Types.ObjectId;
  column: 'todo' | 'inProgress' | 'done';
}

const cardSchema = new Schema<ICard>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    board: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Board',
      required: true,
    },
    column: {
      type: String,
      enum: ['todo', 'inProgress', 'done'],
      required: true,
    },
  },
  { timestamps: true },
);

export const Card: Model<ICard> = mongoose.model<ICard>('Card', cardSchema);
