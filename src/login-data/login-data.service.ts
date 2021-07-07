import { Model, ObjectId, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LoginDataDto } from './model/login-data-dto';
import { LoginData, LoginDataDocument } from './model/login-data.schema';

@Injectable()
export class LoginDataService {
  constructor(
    @InjectModel(LoginData.name) private userDataModel: Model<LoginDataDocument>,
  ) { }

  create(userData: LoginDataDto): Promise<LoginDataDto> {
    userData.date = new Date();
    const createdUserData = new this.userDataModel(userData);
    return createdUserData.save();
  }

  findAll(): Promise<LoginDataDto[]> {
    return this.userDataModel.find().sort({ date: -1 }).exec();
  }

  findById(id: string): Promise<LoginDataDto> {
    return this.userDataModel.findById(this.getObjectId(id)).exec();
  }
  update(id: string, data: Partial<LoginDataDto>): Promise<LoginDataDto> {
    return this.userDataModel
      .findByIdAndUpdate({ _id: this.getObjectId(id) }, { $set: data })
      .exec();
  }

  delete(id: string): Promise<LoginDataDto> {
    return this.userDataModel.findOneAndDelete({ _id: this.getObjectId(id) }).exec();
  }

  private getObjectId(id: string): Types.ObjectId {
    return new Types.ObjectId(id);
  }
}
