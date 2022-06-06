import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [DomainModule],
  controllers: [UserController],
  providers: [],
})
export class PresentationModule {}
