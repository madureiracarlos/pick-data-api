import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistController } from './regist.controller';
import { RegistService } from './regist.service';
import { RegisttSchema, Regist } from './model/regist.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Regist.name, schema: RegisttSchema }]),
  ],
  controllers: [RegistController],
  providers: [RegistService],
})
export class PaymentModule { }
