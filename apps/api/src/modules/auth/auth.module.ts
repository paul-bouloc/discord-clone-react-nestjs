import { Module } from '@nestjs/common'
import { PasswordService } from 'src/modules/auth/application/services/password.service'
import { LoginUc } from 'src/modules/auth/application/use-cases/login.uc'
import { RegisterUc } from 'src/modules/auth/application/use-cases/register.uc'
import { UserModule } from 'src/modules/users/user.module'
import { AuthController } from './interface/auth.controller'

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [RegisterUc, PasswordService, LoginUc],
})
export class AuthModule {}
