import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma';
import { CreateUser } from './usecases/user/create';
import { DeleteUser } from './usecases/user/delete';
import { FindUser } from './usecases/user/find';
import { ListUser } from './usecases/user/list';
import { UpdateUser } from './usecases/user/update';

@Module({
  providers: [
    PrismaService,
    CreateUser,
    DeleteUser,
    ListUser,
    FindUser,
    UpdateUser,
  ],
  exports: [CreateUser, DeleteUser, ListUser, FindUser, UpdateUser],
  imports: [],
})
export class DomainModule {}
