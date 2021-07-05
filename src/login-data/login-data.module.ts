import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginDataController } from './login-data.controller';
import { LoginDataService } from './login-data.service';
import { LoginDataSchema, LoginData } from './model/login-data.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: LoginData.name, schema: LoginDataSchema }]),
  ],
  controllers: [LoginDataController],
  providers: [LoginDataService],
})
export class LoginDataModule { }
