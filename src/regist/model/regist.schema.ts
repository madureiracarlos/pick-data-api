import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RegistDocument = Regist & Document;

@Schema()
export class Regist {

  @Prop()
  date?: Date; // Registry data

  @Prop()
  document: string;

  @Prop()
  nationality: string;

  @Prop()
  province: string;

  @Prop()
  phone: string;

  @Prop()
  address: string;

  @Prop()
  vacine: string;

  @Prop()
  latitude?: number;

  @Prop()
  longitude?: number;

}

export const RegisttSchema = SchemaFactory.createForClass(Regist);
