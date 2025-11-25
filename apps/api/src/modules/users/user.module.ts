import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/core/prisma/prisma.module'
import { UserMapper } from 'src/modules/users/infrastructure/mappers/user.mapper'
import { UserRepository } from './infrastructure/repositories/user.repository'

@Module({
  imports: [PrismaModule],
  providers: [UserRepository, UserMapper],
  exports: [UserRepository, UserMapper],
})
export class UserModule {}
