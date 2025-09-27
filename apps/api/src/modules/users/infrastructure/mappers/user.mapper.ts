import { Injectable } from '@nestjs/common'
import { User as PrismaUser } from 'generated/prisma'
import { UserId } from 'src/core/types'
import { User } from 'src/modules/users/domain/types'

@Injectable()
export class UserMapper {
  toDomain(user: PrismaUser, opts?: { withPassword?: boolean }) {
    const domain: User = {
      userId: user.userId as UserId,
      userName: user.userName,
      displayName: user.displayName,
      email: user.email,
      birthDate: new Date(user.birthDate),
      createdAt: new Date(user.createdAt),
      updatedAt: new Date(user.updatedAt),
    }

    if (opts?.withPassword) {
      domain.password = user.password
    }

    return domain
  }
}
