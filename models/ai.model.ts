import mongoose, { Schema, Document } from "mongoose";

export interface IAI extends Document {
  prompt: string;
  response: string;
  createdAt: Date;
  updatedAt: Date;
}

const aiSchema = new Schema<IAI>(
  {
    prompt: {
      type: String,
      required: true,
      trim: true,
    },
    response: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const AIModel = mongoose.model<IAI>("AI", aiSchema);

export default AIModel;
