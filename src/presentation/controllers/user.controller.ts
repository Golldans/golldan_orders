import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUser } from 'src/domain/usecases/user/create';
import { DeleteUser } from 'src/domain/usecases/user/delete';
import { FindUser } from 'src/domain/usecases/user/find';
import { ListUser } from 'src/domain/usecases/user/list';
import { UpdateUser } from 'src/domain/usecases/user/update';

@Controller('user')
export class UserController {
  constructor(
    private readonly createUser: CreateUser,
    private readonly deleteUser: DeleteUser,
    private readonly listUser: ListUser,
    private readonly findUser: FindUser,
    private readonly updateUser: UpdateUser,
  ) {}

  @Post('create')
  async create(@Body() user: any): Promise<any> {
    return await this.createUser.call(user);
  }

  @Get('list')
  async list(): Promise<any[]> {
    return await this.listUser.call();
  }

  @Get('find')
  async find(): Promise<any[]> {
    return await this.findUser.call();
  }

  @Put('update/:uuid')
  async update(@Body() user: any, @Param('uuid') uuid: string): Promise<any> {
    return await this.updateUser.call(user, uuid);
  }

  @Delete(':uuid')
  async delete(@Param('uuid') uuid: string) {
    return await this.deleteUser.call(uuid);
  }
}
