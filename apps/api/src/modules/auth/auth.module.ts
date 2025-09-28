import { Module } from '@nestjs/common'
import { CookieService } from 'src/modules/auth/application/services/cookies.service'
import { PasswordService } from 'src/modules/auth/application/services/password.service'
import { LoginUc } from 'src/modules/auth/application/use-cases/login.uc'
import { LogoutUc } from 'src/modules/auth/application/use-cases/logout.uc'
import { RegisterUc } from 'src/modules/auth/application/use-cases/register.uc'
import { UserModule } from 'src/modules/users/user.module'
import { AuthController } from './interface/auth.controller'

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [RegisterUc, PasswordService, LoginUc, CookieService, LogoutUc],
  exports: [CookieService],
})
export class AuthModule {}
