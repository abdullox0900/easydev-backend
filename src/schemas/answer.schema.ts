// answer.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Answer extends Document {
  @Prop({ required: true })
  content: string;

  @Prop({ type: Types.ObjectId, ref: 'Question', required: true })
  question: Types.ObjectId;
}

export const AnswerSchema = SchemaFactory.createForClass(Answer);