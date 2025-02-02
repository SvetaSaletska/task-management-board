import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IBoard extends Document {
  name: string;
  columns: {
    todo: mongoose.Types.ObjectId[];
    inProgress: mongoose.Types.ObjectId[];
    done: mongoose.Types.ObjectId[];
  };
}

const boardSchema = new Schema<IBoard>(
  {
    name: {
      type: String,
      required: true,
    },
    columns: {
      todo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
      inProgress: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
      done: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
    },
  },
  { timestamps: true },
);

export const Board: Model<IBoard> = mongoose.model<IBoard>(
  'Board',
  boardSchema,
);
