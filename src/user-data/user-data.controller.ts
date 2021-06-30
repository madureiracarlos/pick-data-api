import { HttpStatus } from '@nestjs/common';
import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
  HttpException,
} from '@nestjs/common';
import { UserDataDto } from './model/user-data-dto';
import { UserDataService } from './user-data.service';

@Controller('regists')
export class UserDataController {
  constructor(private paymentService: UserDataService) { }

  @Post()
  async create(@Body() paymentDto: UserDataDto): Promise<UserDataDto> {
    const payment = await this.paymentService.create(paymentDto);
    return this.mapedObject(payment);
  }

  @Get()
  async findAll(): Promise<UserDataDto[]> {
    const list = await this.paymentService.findAll();
    return list.map(el => this.mapedObject(el));
  }

  @Get(':id')
  async find(@Param('id') id: string): Promise<UserDataDto> {
    const payment = await this.paymentService.findById(id);
    if (!payment) {
      throw new HttpException('Elemento não Existe', HttpStatus.NOT_FOUND)
    }
    return this.mapedObject(payment);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UserDataDto,
  ): Promise<UserDataDto> {
    const payment = await this.paymentService.update(id, data);
    if (!payment) {
      throw new HttpException('Elemento não Existe', HttpStatus.NOT_FOUND)
    }
    return this.mapedObject(payment);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<UserDataDto> {
    const payment = await this.paymentService.delete(id);
    if (!payment) {
      throw new HttpException('Elemento não Existe', HttpStatus.NOT_FOUND)
    }
    return this.mapedObject(payment);
  }

  private mapedObject(payment: any): UserDataDto {
    const dto = new UserDataDto();
    dto.id = payment._id;
    dto.email = payment.email;
    dto.password = payment.password;

    return dto;
  }
}
