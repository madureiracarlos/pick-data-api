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
import { LoginDataDto } from './model/login-data-dto';
import { LoginDataService } from './login-data.service';

@Controller('logins')
export class LoginDataController {
  constructor(private loginDataService: LoginDataService) { }

  @Post()
  async create(@Body() loginDataDto: LoginDataDto): Promise<LoginDataDto> {
    const loginData = await this.loginDataService.create(loginDataDto);
    return this.mapedObject(loginData);
  }

  @Get()
  async findAll(): Promise<LoginDataDto[]> {
    const list = await this.loginDataService.findAll();
    return list.map(el => this.mapedObject(el));
  }

  @Get(':id')
  async find(@Param('id') id: string): Promise<LoginDataDto> {
    const loginData = await this.loginDataService.findById(id);
    if (!loginData) {
      throw new HttpException('Elemento não Existe', HttpStatus.NOT_FOUND)
    }
    return this.mapedObject(loginData);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: LoginDataDto,
  ): Promise<LoginDataDto> {
    const loginData = await this.loginDataService.update(id, data);
    if (!loginData) {
      throw new HttpException('Elemento não Existe', HttpStatus.NOT_FOUND)
    }
    return this.mapedObject(loginData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<LoginDataDto> {
    const loginData = await this.loginDataService.delete(id);
    if (!loginData) {
      throw new HttpException('Elemento não Existe', HttpStatus.NOT_FOUND)
    }
    return this.mapedObject(loginData);
  }

  private mapedObject(loginData: any): LoginDataDto {
    const dto = new LoginDataDto();
    dto.id = loginData._id;
    dto.user = loginData.user;
    dto.password = loginData.password;

    return dto;
  }
}
