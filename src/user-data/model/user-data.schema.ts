import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDataDocument = UserData & Document;

@Schema()
export class UserData {

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  date?: Date;


}

export const UserDataSchema = SchemaFactory.createForClass(UserData);