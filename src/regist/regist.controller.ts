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
import { RegistDto } from './model/regist-dto';
import { RegistService } from './regist.service';

@Controller('regists')
export class RegistController {
  constructor(private paymentService: RegistService) { }

  @Post()
  async create(@Body() paymentDto: RegistDto): Promise<RegistDto> {
    const payment = await this.paymentService.create(paymentDto);
    return this.mapedObject(payment);
  }

  @Get()
  async findAll(): Promise<RegistDto[]> {
    const list = await this.paymentService.findAll();
    return list.map(el => this.mapedObject(el));
  }

  @Get(':id')
  async find(@Param('id') id: string): Promise<RegistDto> {
    const payment = await this.paymentService.findById(id);
    if (!payment) {
      throw new HttpException('Elemento não Existe', HttpStatus.NOT_FOUND)
    }
    return this.mapedObject(payment);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: RegistDto,
  ): Promise<RegistDto> {
    const payment = await this.paymentService.update(id, data);
    if (!payment) {
      throw new HttpException('Elemento não Existe', HttpStatus.NOT_FOUND)
    }
    return this.mapedObject(payment);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<RegistDto> {
    const payment = await this.paymentService.delete(id);
    if (!payment) {
      throw new HttpException('Elemento não Existe', HttpStatus.NOT_FOUND)
    }
    return this.mapedObject(payment);
  }

  private mapedObject(payment: any): RegistDto {
    const dto = new RegistDto();
    dto.id = payment._id;
    dto.document = payment.document;
    dto.address = payment.address;
    dto.nationality = payment.nationality;
    dto.province = payment.province;
    dto.vacine = payment.vacine;
    dto.latitude = payment.latitude;
    dto.longitude = payment.longitude;
    return dto;
  }
}
