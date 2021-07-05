import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LoginDataDocument = LoginData & Document;

@Schema()
export class LoginData {

  @Prop()
  user: string;

  @Prop()
  password: string;

  @Prop()
  application?: string;

  @Prop()
  ip?: string;

  @Prop()
  device?: string;

  @Prop()
  date?: Date;


}

export const LoginDataSchema = SchemaFactory.createForClass(LoginData);
