import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { PaymentModule } from './regist/regist.module';
import { LoginDataModule } from './login-data/login-data.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://theadmin:${process.env.DB_PASSWORD}@cluster0.swsim.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`),
    PaymentModule,
    LoginDataModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
