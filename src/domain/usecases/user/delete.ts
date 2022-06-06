import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma';

@Injectable()
export class DeleteUser {
  constructor(private prisma: PrismaService) {}

  async call(uuid: string): Promise<void> {
    await this.prisma.user.update({
      where: {
        uuid_user: uuid,
      },
      data: {
        deleted_at: new Date(),
      },
    });
  }
}
