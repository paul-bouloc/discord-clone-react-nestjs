import { Body, Controller, HttpCode, Post, Res } from '@nestjs/common'
import { Response } from 'express'
import { Public } from 'src/core/auth/decorators/public.decorator'
import { ZodValidate } from 'src/core/validation'
import { LoginDto } from 'src/modules/auth/application/dtos/login.dto'
import { RegisterDto } from 'src/modules/auth/application/dtos/register.dto'
import { LoginUc } from 'src/modules/auth/application/use-cases/login.uc'
import { LogoutUc } from 'src/modules/auth/application/use-cases/logout.uc'
import { RegisterUc } from 'src/modules/auth/application/use-cases/register.uc'

@Controller('auth')
export class AuthController {
  constructor(
    private readonly registerUc: RegisterUc,
    private readonly loginUc: LoginUc,
    private readonly logoutUc: LogoutUc,
  ) {}

  @Public()
  @HttpCode(201)
  @Post('register')
  @ZodValidate(RegisterDto)
  register(@Res({ passthrough: true }) res: Response, @Body() body: RegisterDto) {
    return this.registerUc.execute(body, res)
  }

  @Public()
  @HttpCode(200)
  @Post('login')
  @ZodValidate(LoginDto)
  login(@Res({ passthrough: true }) res: Response, @Body() body: LoginDto) {
    return this.loginUc.execute(body, res)
  }

  @Public()
  @HttpCode(200)
  @Post('logout')
  logout(@Res({ passthrough: true }) res: Response) {
    return this.logoutUc.execute(res)
  }
}
