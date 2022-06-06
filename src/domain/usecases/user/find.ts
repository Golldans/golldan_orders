import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma';

@Injectable()
export class FindUser {
  constructor(private prisma: PrismaService) {}

  async call(): Promise<any[]> {
    return await this.prisma.user.findMany();
  }
}
