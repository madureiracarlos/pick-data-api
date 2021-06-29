import { Model, ObjectId, Types } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RegistDto } from './model/regist-dto';
import { Regist, RegistDocument } from './model/regist.schema';

@Injectable()
export class RegistService {
  constructor(
    @InjectModel(Regist.name) private registModel: Model<RegistDocument>,
  ) { }

  create(payment: RegistDto): Promise<RegistDto> {
    // Data de criação: 2021-06-28T21:12:43.158Z ---> Fazer o método para a REF
    const createdPayment = new this.registModel(payment);
    return createdPayment.save();
  }

  findAll(): Promise<RegistDto[]> {
    return this.registModel.find().exec();
  }

  findById(id: string): Promise<RegistDto> {
    return this.registModel.findById(this.getObjectId(id)).exec();
  }
  update(id: string, data: Partial<RegistDto>): Promise<RegistDto> {
    return this.registModel
      .findByIdAndUpdate({ _id: this.getObjectId(id) }, { $set: data })
      .exec();
  }

  delete(id: string): Promise<RegistDto> {
    return this.registModel.findOneAndDelete({ _id: this.getObjectId(id) }).exec();
  }

  private getObjectId(id: string): Types.ObjectId {
    return new Types.ObjectId(id);
  }
}
