import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/core/prisma/prisma.service'
import { User } from 'src/modules/users/domain/types'
import { UserMapper } from 'src/modules/users/infrastructure/mappers/user.mapper'

@Injectable()
export class UserRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userMapper: UserMapper,
  ) {}

  async findByUserName(userName: string, opts?: { withPassword?: boolean }): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { userName },
    })

    return user ? this.userMapper.toDomain(user, opts) : null
  }

  async findByEmail(email: string, opts?: { withPassword?: boolean }): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    })

    return user ? this.userMapper.toDomain(user, opts) : null
  }
}
