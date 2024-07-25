import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Portfolio extends Document {
  @Prop({ required: false })
  name?: string;

  @Prop()
  description: string;

  @Prop()
  img: string;

  @Prop()
  githubLink: string;

  @Prop()
  viewLink: string;
}

export const PortfolioSchema = SchemaFactory.createForClass(Portfolio);