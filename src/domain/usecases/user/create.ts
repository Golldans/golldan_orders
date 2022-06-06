import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CreateUser {
  constructor(private prisma: PrismaService) {}

  async call(data: any): Promise<any> {
    try {
      data.uuid_user = uuidv4();

      const user = this.prisma.user.create({
        data,
      });
      return user;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Unavaiable function');
    }
  }
}
