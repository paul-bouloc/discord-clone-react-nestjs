import { Module } from '@nestjs/common'
import { GetSelfUc } from 'src/modules/identity/application/use-cases/get-self.uc'
import { IdentityController } from 'src/modules/identity/interface/identitfy.controller'
import { UserModule } from 'src/modules/users/user.module'

@Module({
  imports: [UserModule],
  controllers: [IdentityController],
  providers: [GetSelfUc],
})
export class IdentityModule {}
