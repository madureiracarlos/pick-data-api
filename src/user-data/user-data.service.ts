import { Model, ObjectId, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDataDto } from './model/user-data-dto';
import { UserData, UserDataDocument } from './model/user-data.schema';

@Injectable()
export class UserDataService {
  constructor(
    @InjectModel(UserData.name) private userDataModel: Model<UserDataDocument>,
  ) { }

  create(userData: UserDataDto): Promise<UserDataDto> {
    // Data de criação: 2021-06-28T21:12:43.158Z ---> Fazer o método para a REF
    const createdUserData = new this.userDataModel(userData);
    return createdUserData.save();
  }

  findAll(): Promise<UserDataDto[]> {
    return this.userDataModel.find().exec();
  }

  findById(id: string): Promise<UserDataDto> {
    return this.userDataModel.findById(this.getObjectId(id)).exec();
  }
  update(id: string, data: Partial<UserDataDto>): Promise<UserDataDto> {
    return this.userDataModel
      .findByIdAndUpdate({ _id: this.getObjectId(id) }, { $set: data })
      .exec();
  }

  delete(id: string): Promise<UserDataDto> {
    return this.userDataModel.findOneAndDelete({ _id: this.getObjectId(id) }).exec();
  }

  private getObjectId(id: string): Types.ObjectId {
    return new Types.ObjectId(id);
  }
}
