import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ProgrammingLanguage } from './programming-language.schema';

@Schema()
export class Question extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  answer: string;

  @Prop({ type: Types.ObjectId, ref: 'ProgrammingLanguage', required: true })
  programmingLanguage: ProgrammingLanguage;

  @Prop({ default: 'orta' })
  level: string;

  @Prop([String])
  tags: string[];

  @Prop()
  codeSnippet: string;

  @Prop([{ title: String, link: String, type: String }])
  resources: { title: string; link: string; type: string }[];
}

export const QuestionSchema = SchemaFactory.createForClass(Question);