import { Injectable } from '@nestjs/common'
import { Prisma } from 'generated/prisma'
import { PrismaService } from 'src/core/prisma/prisma.service'
import { UserId } from 'src/core/types'
import { User } from 'src/modules/users/domain/types'
import { UserMapper } from 'src/modules/users/infrastructure/mappers/user.mapper'

@Injectable()
export class UserRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userMapper: UserMapper,
  ) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const createdUser = await this.prisma.user.create({
      data: {
        userName: data.userName,
        displayName: data.displayName,
        email: data.email,
        password: data.password,
        birthDate: data.birthDate,
      },
    })

    return this.userMapper.toDomain(createdUser)
  }

  async findById(id: UserId, opts?: { withPassword?: boolean }): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { userId: id },
    })

    return user ? this.userMapper.toDomain(user, opts) : null
  }

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
