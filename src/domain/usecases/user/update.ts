import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma';

@Injectable()
export class UpdateUser {
  constructor(private prisma: PrismaService) {}

  async call(data: any, uuid: string): Promise<any> {
    return await this.prisma.user.update({
      where: {
        uuid_user: uuid,
      },
      data: {
        name: data.name,
        birthday: data.birthday,
        email: data.email,
      },
    });
  }
}
