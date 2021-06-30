import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserDataController } from './user-data.controller';
import { UserDataService } from './user-data.service';
import { UserDataSchema, UserData } from './model/user-data.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserData.name, schema: UserDataSchema }]),
  ],
  controllers: [UserDataController],
  providers: [UserDataService],
})
export class PaymentModule { }
