import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PaymentType } from './payment-type.enum';

export type RegistDocument = Regist & Document;

@Schema()
export class Regist {

  @Prop()
  document: string;

  @Prop()
  nationality: string;

  @Prop()
  province: string;

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
