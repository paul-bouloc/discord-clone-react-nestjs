import { Controller, Get } from '@nestjs/common'
import { User } from 'src/core/auth/decorators/user.decorator'
import { GetSelfUc } from 'src/modules/identity/application/use-cases/get-self.uc'
import { User as UserType } from 'src/modules/users/domain/types'

@Controller('me')
export class IdentityController {
  constructor(private readonly getSelfUc: GetSelfUc) {}

  @Get()
  getSelf(@User() user: UserType) {
    return this.getSelfUc.execute(user.userId)
  }
}
