import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { PaymentModule } from './regist/regist.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://theadmin:theadminpass@cluster0.swsim.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    PaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }