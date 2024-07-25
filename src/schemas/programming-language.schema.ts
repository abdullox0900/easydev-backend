// programming-language.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ProgrammingLanguage extends Document {
  @Prop({ required: true, unique: true })
  title: string;
}

export const ProgrammingLanguageSchema = SchemaFactory.createForClass(ProgrammingLanguage);