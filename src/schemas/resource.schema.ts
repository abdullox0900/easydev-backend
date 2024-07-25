// resource.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Resource extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  link: string;

  @Prop({ required: true, enum: ['youtube', 'web'] })
  type: string;

  @Prop({ type: Types.ObjectId, ref: 'Question', required: true })
  question: Types.ObjectId;
}

export const ResourceSchema = SchemaFactory.createForClass(Resource);